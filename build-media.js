#!/usr/bin/env node
/* =============================================================================
   build-media.js  -  собирает медиа из папок и пишет media-index.js.
   -----------------------------------------------------------------------------
   КАК ПОЛЬЗОВАТЬСЯ:
   1) В папку нужного раздела (media/experience/<...> или media/projects/<...>)
      кидаешь фото/видео-файлы. Порядок показа = по имени, поэтому удобно
      нумеровать: 01-..., 02-...
   2) Внешние ссылки (Google Drive / YouTube / Vimeo) добавляешь в файл links.txt
      в той же папке - по одной ссылке на строку. Можно с подписью:
          ССЫЛКА | подпись_RU | подпись_EN
   3) Подписи к файлам по умолчанию берутся из имени файла. Чтобы задать красивые
      двуязычные - положи в папку captions.json вида:
          { "01-session.jpg": { "ru": "Подпись", "en": "Caption" } }
   4) Запусти:  node build-media.js
      Файл media-index.js пересоберётся сам. content.js трогать не нужно.
   ============================================================================= */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT  = __dirname;
const MEDIA = path.join(ROOT, "media");
const OUT   = path.join(ROOT, "media-index.js");

const MEDIA_EXT = /\.(jpe?g|png|gif|webp|svg|avif|bmp|mp4|webm|mov|m4v|ogv|ogg)$/i;

// "01-session-on-complex.jpg" -> "Session on complex"
function humanize(file) {
  let s = file.replace(/\.[^.]+$/, "").replace(/^\d+[-_.\s]*/, "").replace(/[-_]+/g, " ").trim();
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
}

function readCaptions(dir) {
  const p = path.join(dir, "captions.json");
  if (!fs.existsSync(p)) return {};
  try { return JSON.parse(fs.readFileSync(p, "utf8")); }
  catch (e) { console.warn("  ! captions.json не разобран (" + path.relative(ROOT, p) + "): " + e.message); return {}; }
}

function readLinks(dir) {
  const p = path.join(dir, "links.txt");
  if (!fs.existsSync(p)) return [];
  return fs.readFileSync(p, "utf8").split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l && l[0] !== "#")
    .map(line => {
      const parts = line.split("|").map(s => s.trim());
      const url = parts[0];
      let caption = null;
      if (parts.length >= 3)      caption = { ru: parts[1], en: parts[2] };
      else if (parts.length === 2) caption = parts[1];
      return { url, caption };
    });
}

const rel = p => path.relative(ROOT, p).split(path.sep).join("/");
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

const index = {};

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.filter(e => e.isDirectory()).forEach(d => walk(path.join(dir, d.name)));

  if (path.resolve(dir) === path.resolve(MEDIA)) return; // сам media/ не индексируем - только подпапки

  const captions = readCaptions(dir);
  const items = [];

  entries.filter(e => e.isFile() && MEDIA_EXT.test(e.name)).map(e => e.name).sort()
    .forEach(name => {
      const cap = has(captions, name) ? captions[name] : humanize(name);
      items.push({ src: rel(path.join(dir, name)), caption: cap });
    });

  readLinks(dir).forEach(l => {
    const cap = l.caption != null ? l.caption : (has(captions, l.url) ? captions[l.url] : "");
    items.push({ src: l.url, caption: cap });
  });

  if (items.length) index[rel(dir)] = items;
}

if (!fs.existsSync(MEDIA)) { console.error("Нет папки media/ рядом с build-media.js"); process.exit(1); }
walk(MEDIA);

const banner =
  "/* ===========================================================================\n" +
  "   АВТО-СГЕНЕРИРОВАНО:  node build-media.js   -  НЕ редактируй вручную.\n" +
  "   Меняй медиа в папках media/<раздел>/ (ссылки - в links.txt), потом пересобери.\n" +
  "   =========================================================================== */\n";

fs.writeFileSync(OUT, banner + "window.RESUME_MEDIA = " + JSON.stringify(index, null, 2) + ";\n", "utf8");

const keys = Object.keys(index).sort();
const total = keys.reduce((n, k) => n + index[k].length, 0);
console.log("OK  media-index.js обновлён: " + keys.length + " разделов, " + total + " медиа.");
keys.forEach(k => console.log("    " + k + "  ->  " + index[k].length));
