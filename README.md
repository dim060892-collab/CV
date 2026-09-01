# Веб-резюме · Igor Goriainov

Живое двуязычное (RU/EN) резюме с фото и видео, прикреплёнными к опыту.
Без сборки, без фреймворков — открывается двойным кликом по `index.html`.

A living bilingual (RU/EN) resume with photos and video attached to experience.
No build step, no frameworks — just open `index.html`.

---

## 🚀 Как запустить / Run

**Просто:** двойной клик по `index.html`.
**Лучше** (чтобы точно работали видео и шрифты) — локальный сервер:

```bash
cd web-resume
python3 -m http.server 8000
# открой http://localhost:8000
```

---

## ✏️ Как редактировать / Edit

**Ты трогаешь только один файл — `content.js`.** Остальное — движок.
You only ever edit one file — `content.js`.

Каждый текст выглядит так:
```js
{ ru: "Текст по-русски", en: "Text in English" }
```
Заполняй оба языка. Если перевода нет — оставь `""`, сайт не сломается.

### Добавить место работы / Add a job
Скопируй любой блок `{ ... }` внутри `experience: [ ... ]` и поправь поля
`company`, `role`, `period`, `summary`, `highlights`, `skills`, `mediaDir`.

### Добавить проект / Add a project
То же самое внутри `projects: [ ... ]`.

### 📎 Прикрепить фото или видео / Attach media
У каждого раздела (место работы / проект) — **своя папка** внутри `media/`.
В `content.js` указан только путь к ней:
```js
mediaDir: "media/experience/robosculptor-lead",
```
Чтобы добавить медиа в раздел:

1. **Файл** — положи фото/видео в его папку (`media/experience/…` или `media/projects/…`).
   Порядок показа — по имени файла, поэтому удобно нумеровать: `01-…`, `02-…`.
2. **Ссылка** (YouTube / Vimeo / Google Drive) — допиши строку в `links.txt` в той же папке,
   по одной на строку. Можно с подписью: `ССЫЛКА | подпись_RU | подпись_EN`.
3. **Подпись** (необязательно) — задай двуязычную в `captions.json` той же папки:
   `{ "01-foto.jpg": { "ru": "Подпись", "en": "Caption" } }`.
   Без неё подпись возьмётся из имени файла.
4. **Пересобери индекс** одной командой:
   ```bash
   node build-media.js
   ```
   Файл `media-index.js` обновится сам — его и `content.js` для этого трогать не нужно.

> Для Google Drive видео должно быть открыто «всем, у кого есть ссылка».
> Можно и вручную: задать у раздела `media: [ { src, caption }, … ]` — старый формат тоже работает.

### 🎨 Поменять цвет и язык по умолчанию / Theme
В начале `content.js`, блок `settings`:
```js
accent:      "#E8482B",   // любой HEX — перекрасит все акценты
defaultLang: "ru",        // "ru" или "en"
```

---

## 🌐 Опубликовать в интернете / Deploy

Это статичные файлы — подойдёт любой бесплатный хостинг:

- **Netlify / Vercel** — перетащи папку `web-resume` на их сайт.
- **GitHub Pages** — залей папку в репозиторий, включи Pages.
- **Cloudflare Pages** — подключи репозиторий.

Скажи мне — помогу опубликовать.

---

## 🗂 Структура / Structure
```
web-resume/
├── index.html              # оболочка (не трогаешь)
├── content.js              # ← ВЕСЬ контент тут (редактируешь)
├── build-media.js          # сборщик медиа:  node build-media.js
├── media-index.js          # авто-индекс медиа (генерируется, не трогаешь)
├── media/                  # фото/видео по папкам-разделам:
│   ├── experience/<раздел>/   #   файлы + links.txt + captions.json
│   └── projects/<раздел>/
└── assets/
    ├── css/styles.css      # внешний вид (движок)
    └── js/app.js           # логика (движок)
```
