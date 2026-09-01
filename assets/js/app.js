/* =============================================================================
   Движок резюме. Тебе тут менять ничего не нужно - весь контент в content.js.
   Engine. You don't edit this - all content lives in content.js.
   ============================================================================= */
(function () {
  "use strict";
  var DATA = window.RESUME || {};
  var S = DATA.settings || {};
  var LS_KEY = "resume.lang";

  function detectLang() {
    var saved = localStorage.getItem(LS_KEY);
    if (saved === "ru" || saved === "en") return saved;
    var prefs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < prefs.length; i++) {
      if (/^ru\b/i.test(prefs[i] || "")) return "ru";
    }
    return S.defaultLang || "en";
  }

  var lang = detectLang();

  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null && v[lang] !== "" ? v[lang] : (v.en || v.ru || "");
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function richText(s) {
    return esc(s)
      .replace(/\n/g, '<br>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(_, text, url) {
        return '<a class="rt-link" href="' + url + '" target="_blank" rel="noopener">' + text + '</a>';
      })
      .replace(/==([^=]+)==/g, '<span class="rt-accent">$1</span>');
  }

  var L = {
    profile:  { ru: "Профиль", en: "Profile" },
    xp:       { ru: "Опыт работы", en: "Experience" },
    projects: { ru: "Собственные проекты и деятельность", en: "Personal Projects" },
    skills:   { ru: "Навыки", en: "Skills" },
    edu:      { ru: "Образование", en: "Education" },
    courses:  { ru: "Курсы", en: "Courses" },
    langs:    { ru: "Языки", en: "Languages" },
  };

  /* ---- иконки ссылок (inline SVG, наследуют цвет текста) ---- */
  var ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M21.94 4.64l-2.72 12.83c-.2.9-.74 1.12-1.5.7l-4.14-3.05-2 1.92c-.22.22-.4.4-.83.4l.3-4.2L18.6 7.1c.33-.3-.07-.46-.5-.17L7.65 13.6l-4.1-1.28c-.9-.28-.9-.9.18-1.32l16.04-6.18c.74-.27 1.4.18 1.16 1.32z"/></svg>',
    portfolio: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="7" width="19" height="13.5" rx="2"/><path d="M16 20.5V5.5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v15"/></svg>'
  };

  /* ---- медиа: превью и встраивание ---- */
  /* Нормализация: в content.js можно писать просто { src: "<путь или ссылка>", caption }.
     Тип (фото/видео) и источник (YouTube, Vimeo, Google Drive, локальный файл)
     определяются сами. Старый явный формат { type / provider / id } тоже работает. */
  function normalizeMedia(m) {
    if (!m) return m;
    if (typeof m === "string") m = { src: m };
    if (m.type || m.provider) return m;                 // уже явный формат - не трогаем
    var s = String(m.src || "").trim(), x;
    var out = { src: s, caption: m.caption, poster: m.poster };
    if (x = s.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([\w-]{6,})/)) { out.provider = "youtube"; out.id = x[1]; }
    else if (x = s.match(/vimeo\.com\/(?:video\/)?(\d+)/))                                           { out.provider = "vimeo";   out.id = x[1]; }
    else if (x = s.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]+)/)) { out.provider = "gdrive"; out.id = x[1]; }
    else if (/\.(mp4|webm|mov|m4v|ogv|ogg)(\?|#|$)/i.test(s))                                        { out.type = "video"; }
    else                                                                                            { out.type = "image"; }
    return out;
  }
  function mediaThumb(m) {
    if (m.type === "pdf") return { img: m.poster || "", doc: true };
    if (m.type === "image") return { img: m.src, video: false };
    if (m.poster) return { img: m.poster, video: true };
    if (m.provider === "youtube") return { img: "https://img.youtube.com/vi/" + m.id + "/hqdefault.jpg", video: true };
    if (m.provider === "gdrive")  return { img: "https://drive.google.com/thumbnail?id=" + m.id + "&sz=w240", video: true };
    return { img: "", video: true }; // vimeo / локальный mp4 без постера
  }
  function mediaEmbed(m) {
    if (m.type === "pdf") return '<iframe class="lb-pdf" src="' + esc(m.src) + '#view=FitH" title="' + esc(t(m.caption) || "PDF") + '"></iframe>';
    if (m.type === "image") return '<img src="' + esc(m.src) + '" alt="' + esc(t(m.caption)) + '">';
    if (m.provider === "youtube") return '<iframe src="https://www.youtube.com/embed/' + esc(m.id) + '?autoplay=1&rel=0&playsinline=1&modestbranding=1" allow="autoplay; fullscreen" allowfullscreen></iframe>';
    if (m.provider === "vimeo")   return '<iframe src="https://player.vimeo.com/video/' + esc(m.id) + '?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>';
    if (m.provider === "gdrive")  return '<iframe src="https://drive.google.com/file/d/' + esc(m.id) + '/preview" allow="autoplay" allowfullscreen></iframe>';
    return '<video src="' + esc(m.src) + '" controls autoplay playsinline ' + (m.poster ? 'poster="' + esc(m.poster) + '"' : "") + "></video>";
  }

  var GALLERIES = [];
  function registerGallery(arr) { GALLERIES.push(arr || []); return GALLERIES.length - 1; }

  function thumbs(media) {
    if (!media || !media.length) return "";
    media = media.map(normalizeMedia);
    var gi = registerGallery(media);
    return '<div class="thumbs">' + media.map(function (m, j) {
      var th = mediaThumb(m), cap = t(m.caption);
      return '<button class="thumb" data-gal="' + gi + '" data-idx="' + j + '" title="' + esc(cap) + '" aria-label="' + esc(cap || "media") + '">' +
        (th.img ? '<img src="' + esc(th.img) + '" alt="" loading="lazy" onerror="this.remove()">' : "") +
        (th.video ? '<span class="thumb__v"></span><span class="thumb__play"></span>' : "") +
        (th.doc ? '<span class="thumb__v"></span><span class="thumb__doc">PDF</span>' : "") +
        "</button>";
    }).join("") + "</div>";
  }

  /* Медиа записи = заданные вручную (x.media) + собранные из папки
     (x.mediaDir -> media-index.js, который делает `node build-media.js`). */
  function entryMedia(x) {
    var list = (x.media || []).slice();
    var bag = window.RESUME_MEDIA || {};
    if (x.mediaDir && bag[x.mediaDir]) list = list.concat(bag[x.mediaDir]);
    return list;
  }

  function tagList(arr) {
    if (!arr || !arr.length) return "";
    return '<div class="tags">' + arr.map(function (s) {
      var hl = !!(s && typeof s === "object" && s.hl);
      var str = t(s);
      if (str.charAt(0) === "*") { hl = true; str = str.slice(1); }
      return '<span class="tag' + (hl ? " tag--hl" : "") + '">' + esc(str) + "</span>";
    }).join("") + "</div>";
  }

  /* ---- ШАПКА ---- */
  function renderLang() { return ""; }
  function renderHead() {
    var h = DATA.hero || {};
    var contacts = (DATA.links || []).map(function (l) {
      var ico = (l.icon && ICONS[l.icon]) ? '<span class="c-ico c-ico--' + l.icon + '">' + ICONS[l.icon] + "</span>" : "";
      return '<li><a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + ico + '<span class="k">' + esc(t(l.label)) + '</span><span class="v">' + esc(t(l.value)) + "</span></a></li>";
    }).join("");
    var avatar = "";
    if (h.photo) {
      var gi = registerGallery([{ type: "image", src: h.photo, caption: h.name }]);
      avatar = '<button class="avatar" data-gal="' + gi + '" data-idx="0" aria-label="' + esc(t(h.name)) + '"><img src="' + esc(h.photoAvatar || h.photo) + '" alt="' + esc(t(h.name)) + '" loading="lazy"></button>';
    }
    return "" +
      '<header class="head">' +
        '<div class="head__left">' + avatar +
          '<a class="head__id" href="/" aria-label="' + esc(t(h.name)) + '">' +
            '<h1 class="name">' + esc(t(h.name)) + "</h1>" +
            '<div class="title">' + esc(t(h.role)) + "</div>" +
            (h.tagline ? '<p class="tagline">' + esc(t(h.tagline)).replace(/\n/g, '<br>') + "</p>" : "") +
          "</a>" +
        "</div>" +
        '<div class="head__right">' + renderLang() + '<ul class="contacts">' + contacts + "</ul></div>" +
      "</header><hr class=\"rule\">";
  }

  /* ---- САЙДБАР ---- */
  function block(title, inner) { return inner ? '<section class="block"><h2 class="block__title">' + esc(t(title)) + "</h2>" + inner + "</section>" : ""; }

  function renderSkills() {
    var g = (DATA.skills || []).map(function (s) {
      return '<div class="skillgroup"><div class="skillgroup__name">' + esc(t(s.group)) + "</div>" + tagList(s.items) + "</div>";
    }).join("");
    return block(L.skills, g);
  }
  function renderEducation() {
    var e = (DATA.education || []).map(function (ed) {
      var logo = ed.logo ? '<img class="edu__logo" src="' + esc(ed.logo) + '" alt="" loading="lazy" onerror="this.remove()">' : "";
      return '<div class="edu">' + logo + '<div class="edu__body"><div class="edu__deg">' + esc(t(ed.degree)) + '</div><div class="edu__org">' + esc(t(ed.org)) + " · " + esc(t(ed.period)) + "</div></div></div>";
    }).join("");
    return block(L.edu, e);
  }
  function renderLanguages() {
    var l = (DATA.languages || []).map(function (lg) {
      return '<div class="lang-line"><span>' + esc(t(lg.name)) + '</span><span class="lv">' + esc(t(lg.level)) + "</span></div>";
    }).join("");
    return block(L.langs, l);
  }
  function renderCourses() {
    var c = (DATA.courses || []).map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("");
    return block(L.courses, c ? '<ul class="minor">' + c + "</ul>" : "");
  }
  function renderSide() {
    return '<aside class="side">' + renderEducation() + renderLanguages() + renderProjects() + renderSkills() + renderCourses() + "</aside>";
  }

  /* ---- ОСНОВНАЯ КОЛОНКА ---- */
  function renderProfile() {
    if (!DATA.about) return "";
    return block(L.profile, '<p class="profile">' + richText(t(DATA.about)) + "</p>");
  }
  function highlightsHtml(items) {
    if (!items || !items.length) return "";
    var html = "", inList = false, inGroup = false;
    items.forEach(function (p) {
      if (p && p.group) {
        if (inList)  { html += "</ul>"; inList = false; }
        if (inGroup) { html += "</details>"; inGroup = false; }
        html += '<details class="entry__accordion"' + (p.open ? " open" : "") + '><summary class="entry__subhead">' + esc(t(p.group)) + "</summary>";
        inGroup = true;
      } else {
        if (!inList) { html += '<ul class="entry__bullets">'; inList = true; }
        html += "<li" + (p && p.key ? ' class="kb"' : "") + ">" + esc(t(p)) + "</li>";
      }
    });
    if (inList)  html += "</ul>";
    if (inGroup) html += "</details>";
    return html;
  }
  function expEntry(x) {
    var logo = x.logo ? '<div class="entry__logo-wrap"><img class="entry__logo" src="' + esc(x.logo) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>' : "";
    var orgInner = "<span>" + esc(t(x.company)) + (x.location ? " · " + esc(t(x.location)) : "") + "</span>";
    var org = x.url
      ? '<a class="entry__org entry__org--link" href="' + esc(x.url) + '" target="_blank" rel="noopener">' + orgInner + "</a>"
      : '<div class="entry__org">' + orgInner + "</div>";
    var row = '<div class="entry__row"><h3 class="entry__role">' + esc(t(x.role)).replace(/\n/g, '<br>') + '</h3><span class="entry__dates">' + esc(t(x.period)) + "</span></div>";
    var header = logo
      ? '<div class="entry__header">' + logo + '<div class="entry__header-text">' + row + org + '</div></div>'
      : row + org;
    return "" +
      '<article class="entry">' +
        header +
        (x.summary ? '<p class="entry__summary">' + richText(t(x.summary)) + "</p>" : "") +
        highlightsHtml(x.highlights) +
        thumbs(entryMedia(x)) +
      "</article>";
  }
  function projEntry(p) {
    var urlLine = (p.url && p.url !== "")
      ? '<a class="proj__url" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.url) + "</a>"
      : "";
    return "" +
      '<article class="entry">' +
        '<details class="proj__accordion">' +
          '<summary class="proj__summary-row"><h3 class="proj__title">' + esc(t(p.title)) + "</h3></summary>" +
          urlLine +
          (p.summary ? '<p class="entry__summary">' + richText(t(p.summary)) + "</p>" : "") +
          tagList(p.skills) +
          thumbs(entryMedia(p)) +
        "</details>" +
      "</article>";
  }
  function renderExperience() { return block(L.xp, (DATA.experience || []).map(expEntry).join("")); }
  function renderProjects()   { return block(L.projects, (DATA.projects || []).map(projEntry).join("")); }
  function renderBody() {
    return '<main class="body">' + renderProfile() + renderExperience() + "</main>";
  }

  /* ---- сборка ---- */
  function render() {
    GALLERIES = [];
    var app = document.getElementById("app");
    var y = window.scrollY;
    app.innerHTML = '<div class="sheet">' + renderHead() + '<div class="grid">' + renderSide() + renderBody() + "</div></div>";
    document.documentElement.lang = lang;
    document.title = t((DATA.hero || {}).name) + " - " + (lang === "en" ? "Resume" : "Резюме");
    window.scrollTo(0, y);
    wire();
  }

  function wire() {
    document.querySelectorAll(".lang [data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { lang = b.getAttribute("data-lang"); localStorage.setItem(LS_KEY, lang); render(); });
    });
    document.querySelectorAll("[data-gal]").forEach(function (node) {
      node.addEventListener("click", function () {
        openLightbox(GALLERIES[+node.getAttribute("data-gal")] || [], +node.getAttribute("data-idx") || 0);
      });
    });
    revealKB();
  }

  /* ---- подсветка ключевых пунктов: анимированное появление при прокрутке ---- */
  var hlCheck = null;
  function revealKB() {
    if (hlCheck) { window.removeEventListener("scroll", hlCheck); window.removeEventListener("resize", hlCheck); }
    var els = [].slice.call(document.querySelectorAll(".entry__bullets li.kb"));
    els.forEach(function (li, i) { li.style.transitionDelay = (i % 4) * 60 + "ms"; });
    hlCheck = function () {
      var vh = window.innerHeight;
      for (var i = els.length - 1; i >= 0; i--) {
        var r = els[i].getBoundingClientRect();
        if (r.top < vh * 0.85 && r.bottom > 0) { els[i].classList.add("is-on"); els.splice(i, 1); }
      }
      if (!els.length) { window.removeEventListener("scroll", hlCheck); window.removeEventListener("resize", hlCheck); hlCheck = null; }
    };
    window.addEventListener("scroll", hlCheck, { passive: true });
    window.addEventListener("resize", hlCheck);
    hlCheck();
  }

  /* ---- лайтбокс с галереей ---- */
  var LB = { el: null, stage: null, cap: null, gallery: [], idx: 0 };
  function ensureLB() {
    LB.el = document.getElementById("lightbox");
    LB.stage = document.getElementById("lightboxStage");
    LB.cap = document.getElementById("lightboxCaption");
    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    LB.el.addEventListener("click", function (e) { if (e.target === LB.el) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (LB.el.hasAttribute("hidden")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
    ["prev", "next"].forEach(function (dir) {
      var btn = document.createElement("button");
      btn.className = "lightbox__close";
      btn.innerHTML = dir === "prev" ? "‹" : "›";
      btn.style.cssText = "top:50%;transform:translateY(-50%);font-size:30px;" + (dir === "prev" ? "left:20px;right:auto" : "right:20px");
      btn.addEventListener("click", function (e) { e.stopPropagation(); step(dir === "prev" ? -1 : 1); });
      LB.el.appendChild(btn);
      LB[dir + "Btn"] = btn;
    });
  }
  function showLB() {
    var m = LB.gallery[LB.idx]; if (!m) return;
    LB.stage.innerHTML = mediaEmbed(m);
    LB.cap.textContent = t(m.caption);
    var multi = LB.gallery.length > 1;
    LB.prevBtn.style.display = multi ? "" : "none";
    LB.nextBtn.style.display = multi ? "" : "none";
  }
  function step(d) { if (!LB.gallery.length) return; LB.idx = (LB.idx + d + LB.gallery.length) % LB.gallery.length; showLB(); }
  function openLightbox(gallery, idx) {
    if (!LB.el) ensureLB();
    LB.gallery = gallery || []; LB.idx = idx || 0;
    showLB();
    LB.el.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    LB.el.setAttribute("hidden", "");
    LB.stage.innerHTML = "";
    document.body.style.overflow = "";
  }

  /* ---- старт ---- */
  /* iOS Safari применяет :active только если на странице есть touch-слушатель.
     Без этого светящиеся блоки не реагируют на касание (нет hover на тач-экранах). */
  document.addEventListener("touchstart", function () {}, { passive: true });
  document.documentElement.style.setProperty("--accent", S.accent || "#C0392B");
  if (!window.RESUME) {
    document.getElementById("app").innerHTML = '<div class="sheet"><h1 class="name">content.js не загрузился</h1><p class="tagline">Проверь путь к файлу content.js.</p></div>';
  } else {
    render();
  }
})();
