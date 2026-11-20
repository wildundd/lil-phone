"use strict";

/* =====================================================
   YOUR LITTLE PHONE — script.js
   -----------------------------------------------------
   Part 1 (top):    giftData  <-- the ONLY part you need to edit
   Part 2 (below):  the code that makes the phone work
   ===================================================== */


// ==============================
// EDIT YOUR GIFT CONTENT HERE
// ==============================
const giftData = {

  // ---- Basics ----
  recipientName: "Lionel Mekel",             // shown on the lock screen greeting
  contactName: "Wildan",          // name shown at the top of the Messages chat (that's YOU, the gift giver)
  anniversaryDate: "2026-08-27",          // format: YYYY-MM-DD  (used on lock screen + home widget day counter)
  fakeTime: "08:27",                      // the fictional time. Use "" to show the real time instead.
  lockGreeting: "Hi, Onel my love",             // {name} is replaced by recipientName
  notification: {
    title: "Messages",
    text: "You have 1 new notification."
  },

  // ---- Wallpaper ----
  // Put your image at assets/wallpaper.jpg (or change the path).
  // If the file is missing, a soft gradient is used instead.
  wallpaper: "assets/wallpaper.jpg",

  // ---- Optional: change theme colors here instead of style.css ----
  // Leave "" to use the colors in style.css. Example: accent: "#3b82f6"
  theme: {
    accent: "",
    accentInk: "",
    background: "",
    text: "",
    secondaryText: "",
    card: ""
  },

  // ---- Home screen widget ----
  widget: { label: "Together since", monthsLabel: "months", daysLabel: "days" },

  // ---- Messages ----
  // sender "Me"  = YOU (the gift giver). Shown on the left, as a message the recipient RECEIVES.
  // sender "You" = the RECIPIENT. Shown on the right, as their own sent message.
  messages: [
    { sender: "Me",  text: "Hari ini tanggal berapa yankkk" },
    { sender: "You", text: "Hmmm, tanggal 27 nih" },
    { sender: "Me",  text: "That means..." },
    { sender: "You", text: "It's our mensiversary!!" },
    { sender: "Me",  text: "Yup, Happy 3rd Mensiversary my lovely onell" }
  ],

  // ---- Gallery ----
  // PUT YOUR PHOTO FILES in the folder:  assets/photos/
  // Then write the file name below, e.g. "assets/photos/photo1.jpg"
  // Missing photos show a cute placeholder, so the site never breaks.
  //   src        = image 
  //   alt        = short description (for screen readers)
  //   caption    = optional title shown under the photo
  //   date       = optional date text
  //   memory     = optional small memory text
  //   hiddenStar = true -> a tiny ✨ is hidden on this photo (optional secret)
  //   memoryIndex= which item of "memories" (below) the ✨ reveals
  //   starPosition = where the ✨ sits on the photo, e.g. { x: "72%", y: "22%" }
  gallery: [
    { src: "assets/photos/photo1.jpg", alt: "My cute boy, Onel", caption: "My Cute Boy,", date: "Lionel Mekel", memory: "Gemesss, suka memble imut imut" },
    { src: "assets/photos/photo2.jpg", alt: "Sharing our bed", caption: "Satu kasur berdua?", date: "suspicious", memory: "ngapain tuhh? berduaan",
      hiddenStar: true, memoryIndex: 0, starPosition: { x: "74%", y: "22%" } },
    { src: "assets/photos/photo3.jpg", alt: "WOW", caption: "Kayak abis mandi berdua", date: "iya gak sih?", memory: "bolder than ever" },
    { src: "assets/photos/photo4.jpg", alt: "bdboy", caption: "on Wildan's Birthday", date: "happy birthday boy", memory: "he gave me hugs and kisses and cuddles" }
  ],

  // ---- Hidden memories (pop-up cards found through secret interactions) ----
  memories: [
    { title: "Hidden memory title", text: "Add your memory here." },
    { title: "Another hidden memory", text: "Add your memory here." }
  ],

  // ---- Music ----
  // PUT YOUR FILES in:  assets/music/   (cover image + .mp3)
  // audio: ""  -> demo mode (the player still works, just without sound)
  // durationSeconds is only used in demo mode.
  music: [
    { title: "Airplane Toughts", artist: "Dhruv", art: "assets/music/cover1.jpg", audio: "assets/music/song1.mp3", durationSeconds: 180 },
    { title: "Another song", artist: "Artist name", art: "assets/music/cover2.jpg", audio: "", durationSeconds: 210 }
  ],

  // ---- Notes ----
  // type: "text"      -> plain lines on ruled paper
  //       "list"      -> bullet points
  //       "checklist" -> tappable checkboxes
  // surprise (optional): a little pop-up message shown when this note is opened
  notes: [
    { title: "Things I like about you", emoji: "💗", type: "list", date: "",
      body: ["your little laugh", "your jokes", "your kisses", "your stories", "your heart"] },
    { title: "Random things that remind me of you", emoji: "✨", type: "list", date: "",
      body: ["ice cream", "cat", "hibiscus"] },
    { title: "Little memories", emoji: "📌", type: "text", date: "",
      body: ["our first meet in seke", "your first reply to me", "our first chat on private chat", "when i ask you to be mine", "our first fight", "our first mensiversary", "and so on, sayang, our story will last forever"],
      surprise: "✨ Do you remember?" },
    { title: "Things I want us to do", emoji: "☑️", type: "checklist", date: "",
      body: ["kissing you till the end of our day", "sing you a song", "meet, ig, if you want to"] }
  ],

  // ---- Mini-game (tap the hearts, avoid the decoys) ----
  game: {
    title: "Catch the hearts",
    instructions: "Tap every 💗. Avoid the other stuff!",
    targetEmoji: "💗",
    decoyEmojis: ["⭐", "🌙", "🍀"],
    targets: 5,          // how many hearts to find
    tiles: 12,           // total tiles on the board
    winTitle: "Achievement unlocked!",
    winText: "Add your achievement text here."
  },

  // ---- SECRET unlock rules ----
  // "required" = which activities must be completed to unlock the Secret app.
  // Options: "messages", "gallery", "notes", "music", "game", "star"
  //   messages = read all messages        gallery = open every photo
  //   notes    = open every note          music   = listen for a few seconds
  //   game     = win the mini-game        star    = find the hidden ✨ in Gallery
  // testMode: true -> Secret is unlocked right away (handy while editing!). Set back to false before gifting.
  secret: {
    required: ["messages", "gallery", "game"],
    testMode: false
  },

  // ---- Secret room text ----
  secretMessage: "Something was waiting for you.",
  finalMessage: "Hello, my beloved,.\nThis is our third mensiversary, you know, it's hard to believe we've made it this far together. I spend every day with you: through the good times, the bad, the anger, and the sadness, we have to get through it all together, okay? I want to say a huge thank you for sticking with me this far, and at the same time, I want to offer my deepest apologies because maybe I haven't been the best for you yet, but I'll keep trying so that, at the very least, you won't be disappointed in me. You mean the world to me, I love you so, so much",
  finalSignature: "-wildan",   // optional, e.g. "— Me"

  // ---- Other hidden surprises (all optional) ----
  hidden: {
    wallpaperTaps: 5,                      // tap empty space on the home screen this many times
    wallpaperMessage: "✨ You found a secret spot!",
    wallpaperMemory: 1,                    // which "memories" item pops up (first time only)
    batteryMessage: "My love for you: 100% 🔋💗"    // tap the battery icon in the status bar
  },

  // ---- App names (rename if you like) ----
  apps: { messages: "Messages", gallery: "Gallery", music: "Music", notes: "Notes", game: "Game", secret: "Secret" },

  // ---- Button & label text (translate or reword if you like) ----
  labels: {
    tapToUnlock: "Tap to unlock",
    home: "Home",
    continue: "Continue",
    caughtUp: "All caught up ✓",
    secretTitle: "SECRET",
    secretLockedText: "Complete the required activities to unlock.",
    secretUnlockedText: "Unlocked! Something is waiting for you.",
    enterSecret: "Enter",
    progressTitle: "Secret progress",
    activitiesCompleted: "activities completed",
    hiddenMemory: "Hidden memory unlocked!",
    hiddenStarName: "Hidden ✨",
    close: "Close",
    openGift: "OPEN",
    backToPhone: "Back to phone",
    playAgain: "Play again",
    secretUnlockedToast: "Secret unlocked! 🔓",
    completedSuffix: "completed",
    oops: "Oops",
    play: "Play",
    pause: "Pause",
    previous: "Previous",
    next: "Next",
    sparkle: "A tiny sparkle",
    musicProgress: "Song progress",
    demoNote: "No audio file added yet — demo mode."
  },

  // ---- Technical settings ----
  settings: {
    storageKey: "yourLittlePhone.v2",  // change this (e.g. ".v2") to give everyone a fresh start after big edits
    locale: "",                        // "" = the visitor's language. Or "en-US", "id-ID", ...
    revealPerTap: 1,                   // messages revealed each time "Continue" is tapped
    musicCompleteSeconds: 8            // seconds of listening that count as "Music completed"
  }
};
// ==============================
// END OF EDITABLE CONTENT
// (You normally don't need to change anything below this line.)
// ==============================


// =====================================================
// HELPERS
// =====================================================
const $ = (sel, root = document) => root.querySelector(sel);
const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const t = key => (giftData.labels && giftData.labels[key]) || key;
const appName = id => (giftData.apps && giftData.apps[id]) || id;
const later = (fn, ms) => setTimeout(fn, reduceMotion() ? 0 : ms);

/** Tiny element builder: h("div", {class: "x", text: "hi", onClick: fn}, child, child) */
function h(tag, attrs, ...kids) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k === "style") node.style.cssText = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v === true ? "" : v);
  }
  kids.flat().forEach(c => {
    if (c == null || c === false) return;
    node.append(c.nodeType ? c : document.createTextNode(String(c)));
  });
  return node;
}

const ICONS = {
  play:  '<svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
  prev:  '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M6 6h2v12H6zM9.5 12L18 6v12z"/></svg>',
  next:  '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M16 6h2v12h-2zM6 18V6l8.5 6z"/></svg>'
};
function icon(name) {
  const s = h("span", { class: "icon", "aria-hidden": "true" });
  s.innerHTML = ICONS[name]; // constant strings only
  return s;
}

function parseDate(str) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str || "");
  if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3]);
  return isNaN(d) ? null : d;
}
function formatDate(str) {
  const d = parseDate(str);
  if (!d) return str || "";
  return d.toLocaleDateString(giftData.settings.locale || undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
function clockText() {
  if (giftData.fakeTime) return giftData.fakeTime;
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
}
const fmtTime = s => {
  s = Math.max(0, Math.floor(s || 0));
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
};
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


// =====================================================
// PAGE ELEMENTS
// =====================================================
const phone = $("#phone");
const wallpaperEl = $("#wallpaper");
const lockScreen = $("#lockScreen");
const homeScreen = $("#homeScreen");
const appScreen = $("#appScreen");
const appBody = $("#appBody");
const appTitle = $("#appTitle");
const backBtn = $("#backBtn");
const backLabel = $("#backLabel");
const viewerScreen = $("#viewerScreen");
const viewerBody = $("#viewerBody");
const secretRoom = $("#secretRoom");
const modal = $("#modal");
const modalCard = $("#modalCard");
const toastEl = $("#toast");
const homeBar = $("#homeBar");


// =====================================================
// PROGRESS SYSTEM (saved in localStorage)
// =====================================================
const STORAGE_KEY = giftData.settings.storageKey || "yourLittlePhone.v1";
const ACTIVITIES = { messages: 1, gallery: 1, notes: 1, music: 1, game: 1, star: 1 };

const defaultState = () => ({
  completed: {},       // { messages: true, ... }
  msgShown: 0,
  viewedPhotos: [],
  openedNotes: [],
  starFound: false,
  wallpaperFound: false,
  secretOpened: false
});

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? Object.assign(defaultState(), JSON.parse(raw)) : defaultState();
  } catch (e) { return defaultState(); }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* private mode: progress just won't persist */ }
}
let state = loadState();

const activityLabel = id => (id === "star" ? t("hiddenStarName") : appName(id));
const requiredList = () => (giftData.secret.required || []).filter(id => ACTIVITIES[id]);
const doneCount = () => requiredList().filter(id => state.completed[id]).length;
const isSecretUnlocked = () => !!giftData.secret.testMode || doneCount() === requiredList().length;

function markComplete(id, silent) {
  if (state.completed[id]) return;
  const wasUnlocked = isSecretUnlocked();
  state.completed[id] = true;
  saveState();
  renderProgress();
  if (!wasUnlocked && isSecretUnlocked()) {
    toast(t("secretUnlockedToast"), 3200);
    burstCenter();
  } else if (!silent) {
    toast(`✓ ${activityLabel(id)} ${t("completedSuffix")}`);
  }
}

function updateSecretIcon() {
  const badge = $("#secretBadge");
  const btn = $('.app-icon[data-app="secret"]');
  if (!badge || !btn) return;
  const un = isSecretUnlocked();
  badge.textContent = un ? "🔓" : "🔒";
  btn.classList.toggle("is-unlocked", un);
}

function renderProgress() {
  const req = requiredList();
  const done = doneCount();
  const pct = req.length ? Math.round((done / req.length) * 100) : 100;
  $("#homeProgress").replaceChildren(
    h("div", { class: "progress-head" }, h("strong", { text: t("progressTitle") }), h("span", { text: `${done} / ${req.length}` })),
    progressBar(pct, req.length, done),
    h("ul", { class: "chips" }, req.map(id =>
      h("li", { class: "chip" + (state.completed[id] ? " done" : "") }, `${state.completed[id] ? "✓" : "○"} ${activityLabel(id)}`)))
  );
  updateSecretIcon();
}
function progressBar(pct, max, now) {
  return h("div", { class: "bar", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": now },
    h("span", { style: `width:${pct}%` }));
}

/** Call this from the browser console while testing: resetGiftProgress() */
function resetGiftProgress() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  state = defaultState();
  while (layers.length) closeTopLayer();
  renderProgress();
  toast("Progress reset");
  return "Progress reset ✔";
}
/** Handy for testing the Secret unlock: unlockSecretNow() */
function unlockSecretNow() {
  requiredList().forEach(id => { state.completed[id] = true; });
  saveState();
  renderProgress();
  toast(t("secretUnlockedToast"), 3000);
  return "Secret unlocked ✔";
}
window.resetGiftProgress = resetGiftProgress;
window.unlockSecretNow = unlockSecretNow;


// =====================================================
// NAVIGATION (layers + Android back button support)
// =====================================================
// Every "screen on top" (app, note, photo viewer, secret room, pop-up) is a layer.
// The browser's back button / Android back gesture closes the top layer instead of leaving the page.
const layers = [];
let historyOK = true;
let navBusy = false;
let unlocked = false;

function pushLayer(name, onClose) {
  layers.push({ name, onClose });
  if (historyOK) {
    try { history.pushState({ depth: layers.length }, ""); } catch (e) { historyOK = false; }
  }
  refreshChrome();
}
function closeTopLayer() {
  const layer = layers.pop();
  refreshChrome();
  if (layer && layer.onClose) layer.onClose();
}
function requestClose() {
  if (!layers.length || navBusy) return;
  if (historyOK) {
    navBusy = true;
    setTimeout(() => { navBusy = false; }, 400);
    history.back();
  } else closeTopLayer();
}
function goHome() {
  if (!layers.length) return;
  if (historyOK) {
    navBusy = true;
    setTimeout(() => { navBusy = false; }, 400);
    history.go(-layers.length);
  } else while (layers.length) closeTopLayer();
}
window.addEventListener("popstate", e => {
  navBusy = false;
  const depth = (e.state && e.state.depth) || 0;
  while (layers.length > depth) closeTopLayer();
});

const hasLayer = name => layers.some(l => l.name === name);

/** Keeps hidden screens out of keyboard/screen-reader reach, and colors the status bar. */
function refreshChrome() {
  const viewer = hasLayer("viewer"), secret = hasLayer("secret"), modalOpen = hasLayer("modal"), app = hasLayer("app");
  lockScreen.inert = unlocked;
  homeScreen.inert = !unlocked || app || viewer || secret || modalOpen;
  appScreen.inert = viewer || secret || modalOpen;
  viewerScreen.inert = modalOpen;
  secretRoom.inert = modalOpen;
  modal.inert = !modalOpen;
  homeBar.inert = modalOpen;
  let layer = "";
  if (secret) layer = "secret"; else if (viewer) layer = "viewer"; else if (app) layer = "app";
  phone.dataset.layer = layer;
  phone.dataset.bar = layer === "app" ? "dark" : "light";
}
function restoreFocus(el) {
  if (el && document.contains(el) && typeof el.focus === "function") el.focus({ preventScroll: true });
}


// =====================================================
// TOAST + CONFETTI
// =====================================================
let toastTimer;
function toast(msg, ms = 2600) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), ms);
}

const CONFETTI = ["💗", "✨", "⭐", "💖", "🌸", "🎉"];
function burst(x, y, count = 16) {
  if (reduceMotion()) return;
  const r = phone.getBoundingClientRect();
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 110;
    const p = h("span", {
      class: "confetti", "aria-hidden": "true", text: CONFETTI[i % CONFETTI.length],
      style: `--x:${x - r.left}px;--y:${y - r.top}px;--dx:${Math.cos(a) * dist}px;--dy:${Math.sin(a) * dist - 40}px;--r:${(Math.random() - 0.5) * 360}deg;--s:${14 + Math.random() * 14}px`
    });
    phone.append(p);
    setTimeout(() => p.remove(), 1100);
  }
}
function burstAtEl(el, count) {
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, count);
}
function burstCenter() {
  const r = phone.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, 24);
}


// =====================================================
// PHOTO HELPER (shows a placeholder if the image file is missing)
// =====================================================
function photoEl(src, alt, index, opts = {}) {
  const wrap = h("div", { class: "photo", style: `--ph-hue:${(index * 47 + 330) % 360}` });
  const showFallback = () => {
    const img = wrap.querySelector("img");
    if (img) img.remove();
    if (wrap.querySelector(".photo-fallback")) return;
    const name = (src || "").split("/").pop() || `photo${index + 1}.jpg`;
    wrap.append(h("div", opts.decorative ? { class: "photo-fallback" } : { class: "photo-fallback", role: "img", "aria-label": `${alt} (placeholder)` },
      h("span", { class: "ph-emoji", "aria-hidden": "true", text: opts.emoji || "📷" }),
      opts.emoji ? null : h("span", { class: "ph-name", text: name })));
  };
  if (!src) { showFallback(); return wrap; }
  const img = h("img", { src, alt: opts.decorative ? "" : alt, decoding: "async", draggable: "false" });
  img.addEventListener("error", showFallback);
  wrap.append(img);
  return wrap;
}


// =====================================================
// LOCK SCREEN
// =====================================================
function buildLockScreen() {
  $("#lockDate").textContent = formatDate(giftData.anniversaryDate);
  $("#lockGreeting").textContent = (giftData.lockGreeting || "").replace("{name}", giftData.recipientName);
  $("#notifTitle").textContent = giftData.notification.title;
  $("#notifText").textContent = giftData.notification.text;
  $("#unlockBtn").textContent = t("tapToUnlock");
  updateClock();
}
function updateClock() {
  const tm = clockText();
  $("#statusTime").textContent = tm;
  $("#lockTime").textContent = tm;
}
function unlock() {
  if (unlocked) return;
  unlocked = true;
  lockScreen.classList.remove("is-active");
  homeScreen.classList.add("is-active");
  refreshChrome();
  later(() => restoreFocus($(".app-icon", homeScreen)), 450);
}

function applyTheme() {
  Object.entries(giftData.theme || {}).forEach(([key, val]) => {
    if (val) document.documentElement.style.setProperty("--" + key.replace(/[A-Z]/g, m => "-" + m.toLowerCase()), val);
  });
}
function applyWallpaper() {
  const src = giftData.wallpaper;
  if (!src) return;
  const img = new Image();
  img.onload = () => { wallpaperEl.style.backgroundImage = `url("${src}")`; };
  img.src = src;
}


// =====================================================
// HOME SCREEN
// =====================================================
const APPS = [
  { id: "messages", emoji: "💬", color: "linear-gradient(145deg,#6be585,#2dbf5a)", render: renderMessages },
  { id: "gallery",  emoji: "📷", color: "linear-gradient(145deg,#ffb36b,#ff6b8b)", render: renderGallery },
  { id: "music",    emoji: "🎵", color: "linear-gradient(145deg,#ff7a9c,#d93a6a)", render: renderMusic },
  { id: "notes",    emoji: "📝", color: "linear-gradient(145deg,#ffe27a,#f5b82e)", render: () => renderNotesList() },
  { id: "game",     emoji: "🎮", color: "linear-gradient(145deg,#8f9bff,#6a5af0)", render: renderGame },
  { id: "secret",   emoji: "🔐", color: "linear-gradient(145deg,#4a3f6e,#1d1738)", render: renderSecret }
];

function buildHome() {
  buildWidget();
  const grid = $("#appGrid");
  APPS.forEach(app => {
    grid.append(h("button", { class: "app-icon", type: "button", "data-app": app.id, "aria-label": appName(app.id), onClick: () => openApp(app.id) },
      h("span", { class: "app-tile", style: `background:${app.color}` },
        h("span", { class: "app-glyph", "aria-hidden": "true", text: app.emoji }),
        app.id === "secret" ? h("span", { class: "app-badge", id: "secretBadge", "aria-hidden": "true" }) : null),
      h("span", { class: "app-label", text: appName(app.id) })));
  });
  renderProgress();
}

function buildWidget() {
  const wd = giftData.widget || {};
  const w = $("#homeWidget");
  w.replaceChildren(h("div", {},
    h("p", { class: "widget-label", text: wd.label }),
    h("p", { class: "widget-date", text: formatDate(giftData.anniversaryDate) })));
  const start = parseDate(giftData.anniversaryDate);
  if (!start) return;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.max(0, Math.round((today - start) / 86400000));
  let months = (today.getFullYear() - start.getFullYear()) * 12 + (today.getMonth() - start.getMonth());
  if (today.getDate() < start.getDate()) months--;
  months = Math.max(0, months);
  const stat = (n, label) => h("div", { class: "stat" }, h("b", { text: String(n) }), h("span", { text: label }));
  w.append(h("div", { class: "widget-stats" }, stat(months, wd.monthsLabel), stat(days, wd.daysLabel)));
}


// =====================================================
// APP SYSTEM (open / close apps)
// =====================================================
let currentApp = null;
let appTrigger = null;

function setBackLabel(text) { backLabel.textContent = text; }

function openApp(id) {
  const app = APPS.find(a => a.id === id);
  if (!app || hasLayer("app")) return;
  currentApp = id;
  appTrigger = document.activeElement;
  appTitle.textContent = appName(id);
  setBackLabel(t("home"));
  appBody.replaceChildren();
  appBody.scrollTop = 0;
  app.render(appBody);
  appScreen.classList.add("is-active");
  pushLayer("app", hideApp);
  later(() => backBtn.focus({ preventScroll: true }), 50);
}
function hideApp() {
  clearTimeout(msgTimer);
  stopMusic();
  currentApp = null;
  appScreen.classList.remove("is-active");
  restoreFocus(appTrigger);
}


// =====================================================
// MESSAGES APP
// =====================================================
let msgTimer = null;
const isReceived = msg => String(msg.sender).toLowerCase() !== "you";
const bubble = (msg, animate) => h("div", { class: `bubble ${isReceived(msg) ? "in" : "out"}${animate ? " pop" : ""}`, text: msg.text });

function renderMessages(body) {
  const list = giftData.messages || [];
  const log = h("div", { class: "chat-log", role: "log", "aria-live": "polite" });
  const footer = h("div", { class: "chat-footer" });
  const name = giftData.contactName || "";
  body.append(
    h("div", { class: "chat-contact" },
      h("span", { class: "avatar", "aria-hidden": "true", text: name.trim().charAt(0).toUpperCase() || "?" }),
      h("span", { class: "contact-name", text: name })),
    log, footer);

  let shown = state.completed.messages ? list.length : Math.min(state.msgShown, list.length);
  for (let i = 0; i < shown; i++) log.append(bubble(list[i], false));

  const scrollEnd = () => footer.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "end" });

  function refreshFooter() {
    footer.replaceChildren();
    if (shown >= list.length) {
      footer.append(h("p", { class: "caught-up", text: t("caughtUp") }));
    } else {
      const btn = h("button", { class: "btn", type: "button", onClick: () => { btn.disabled = true; reveal(giftData.settings.revealPerTap || 1); } }, t("continue"));
      footer.append(btn);
    }
  }
  function reveal(n) {
    if (n <= 0 || shown >= list.length) { finish(); return; }
    const msg = list[shown];
    const received = isReceived(msg);
    let typing = null;
    if (received) {
      typing = h("div", { class: "bubble in typing", "aria-hidden": "true" }, h("i"), h("i"), h("i"));
      log.append(typing);
      scrollEnd();
    }
    msgTimer = later(() => {
      if (typing) typing.remove();
      log.append(bubble(msg, true));
      shown++;
      state.msgShown = shown;
      saveState();
      scrollEnd();
      reveal(n - 1);
    }, received ? 700 : 350);
  }
  function finish() {
    refreshFooter();
    if (shown >= list.length) markComplete("messages");
  }
  refreshFooter();
}


// =====================================================
// GALLERY APP
// =====================================================
let viewerIndex = -1;
let viewerOpen = false;
let viewerTrigger = null;

function renderGallery(body) {
  const items = giftData.gallery || [];
  const grid = h("div", { class: "gallery-grid" });
  items.forEach((item, i) => {
    grid.append(h("button", {
      class: "thumb" + (state.viewedPhotos.includes(i) ? " viewed" : ""),
      type: "button",
      "aria-label": (item.alt || `Photo ${i + 1}`) + (item.caption ? `: ${item.caption}` : ""),
      onClick: () => openViewer(i)
    }, photoEl(item.src, item.alt || `Photo ${i + 1}`, i, { decorative: true })));
  });
  body.append(grid);
}

function openViewer(i) {
  viewerIndex = i;
  renderViewer();
  if (!viewerOpen) {
    viewerOpen = true;
    viewerTrigger = document.activeElement;
    viewerScreen.classList.add("is-active");
    pushLayer("viewer", hideViewer);
    later(() => $("#viewerClose").focus({ preventScroll: true }), 50);
  }
  markViewed(i);
}
function hideViewer() {
  viewerOpen = false;
  viewerScreen.classList.remove("is-active");
  restoreFocus(viewerTrigger);
}
function viewerNav(delta) {
  const n = giftData.gallery.length;
  openViewer((viewerIndex + delta + n) % n);
}
function renderViewer() {
  const items = giftData.gallery;
  const item = items[viewerIndex];
  const alt = item.alt || `Photo ${viewerIndex + 1}`;
  const photoWrap = h("div", { class: "viewer-photo" }, photoEl(item.src, alt, viewerIndex));
  if (item.hiddenStar && !state.starFound) {
    const pos = item.starPosition || { x: "74%", y: "22%" };
    photoWrap.append(h("button", {
      class: "star-btn", type: "button", "aria-label": t("sparkle"),
      style: `left:${pos.x};top:${pos.y}`,
      onClick: e => foundStar(item, e.currentTarget)
    }, "✨"));
  }
  const info = h("div", { class: "viewer-info" },
    item.caption ? h("h3", { class: "viewer-caption", text: item.caption }) : null,
    item.date ? h("p", { class: "viewer-date", text: item.date }) : null,
    item.memory ? h("p", { class: "viewer-memory", text: item.memory }) : null,
    items.length > 1 ? h("div", { class: "viewer-nav" },
      h("button", { class: "nav-btn", type: "button", "aria-label": t("previous"), onClick: () => viewerNav(-1) }, "‹"),
      h("span", { class: "viewer-count", text: `${viewerIndex + 1} / ${items.length}` }),
      h("button", { class: "nav-btn", type: "button", "aria-label": t("next"), onClick: () => viewerNav(1) }, "›")) : null);
  viewerBody.replaceChildren(photoWrap, info);
}
function markViewed(i) {
  if (!state.viewedPhotos.includes(i)) {
    state.viewedPhotos.push(i);
    saveState();
    const th = appBody.querySelectorAll(".thumb")[i];
    if (th) th.classList.add("viewed");
  }
  if (state.viewedPhotos.length >= giftData.gallery.length) markComplete("gallery");
}
function foundStar(item, el) {
  state.starFound = true;
  saveState();
  burstAtEl(el, 14);
  el.remove();
  showMemory((giftData.memories || [])[item.memoryIndex || 0]);
  markComplete("star", true);
}

// ---- Memory pop-up (used by hidden surprises) ----
let modalTrigger = null;
function showMemory(mem) {
  if (!mem) { toast(t("hiddenMemory")); return; }
  if (hasLayer("modal")) return;
  modalCard.replaceChildren(
    h("p", { class: "modal-kicker", text: "✨ " + t("hiddenMemory") }),
    h("h3", { text: mem.title }),
    h("p", { class: "modal-text", text: mem.text }),
    h("button", { class: "btn", type: "button", id: "modalClose", onClick: () => requestClose() }, t("close")));
  modalTrigger = document.activeElement;
  modal.classList.add("is-active");
  pushLayer("modal", hideModal);
  later(() => $("#modalClose").focus({ preventScroll: true }), 50);
}
function hideModal() {
  modal.classList.remove("is-active");
  restoreFocus(modalTrigger);
}


// =====================================================
// MUSIC APP
// =====================================================
const music = { index: 0, playing: false, time: 0, duration: 0, played: 0, audio: null, audioSrc: "", demo: true, tick: null, ui: null };

function renderMusic(body) {
  const tracks = giftData.music || [];
  if (!tracks.length) { body.append(h("p", { class: "hint", text: "—" })); return; }
  const ui = music.ui = {};
  ui.art = h("div", { class: "artwork" });
  ui.title = h("h3", { class: "track-title" });
  ui.artist = h("p", { class: "track-artist" });
  ui.viz = h("div", { class: "viz", "aria-hidden": "true" }, h("span"), h("span"), h("span"), h("span"), h("span"));
  ui.range = h("input", { type: "range", min: 0, max: 100, step: "any", value: 0, "aria-label": t("musicProgress"),
    onInput: e => {
      music.time = Number(e.target.value);
      if (music.audio && !music.demo) music.audio.currentTime = music.time;
      updateMusicUI();
    } });
  ui.cur = h("span", { text: "0:00" });
  ui.dur = h("span", { text: "0:00" });
  ui.playBtn = h("button", { class: "play-btn", type: "button", onClick: togglePlay });
  ui.note = h("p", { class: "hint" });
  const multi = tracks.length > 1;
  body.append(h("div", { class: "player" },
    ui.art, ui.title, ui.artist, ui.viz,
    h("div", { class: "seek" }, ui.range, h("div", { class: "time-row" }, ui.cur, ui.dur)),
    h("div", { class: "controls" },
      h("button", { class: "ctl-btn", type: "button", "aria-label": t("previous"), disabled: !multi, onClick: () => changeTrack(-1) }, icon("prev")),
      ui.playBtn,
      h("button", { class: "ctl-btn", type: "button", "aria-label": t("next"), disabled: !multi, onClick: () => changeTrack(1) }, icon("next"))),
    ui.note));
  if (!music.duration) music.duration = tracks[music.index].durationSeconds || 180;
  music.demo = !tracks[music.index].audio;
  paintTrack();
  updateMusicUI();
}

function paintTrack() {
  const ui = music.ui;
  if (!ui) return;
  const track = giftData.music[music.index];
  ui.title.textContent = track.title;
  ui.artist.textContent = track.artist;
  ui.art.replaceChildren(photoEl(track.art, `Album artwork for ${track.title}`, music.index, { emoji: "🎵" }));
}
function updateMusicUI() {
  const ui = music.ui;
  if (!ui) return;
  const dur = music.duration || 1;
  ui.range.max = dur;
  ui.range.value = music.time;
  ui.range.style.setProperty("--pct", Math.min(100, (music.time / dur) * 100) + "%");
  ui.range.setAttribute("aria-valuetext", `${fmtTime(music.time)} / ${fmtTime(dur)}`);
  ui.cur.textContent = fmtTime(music.time);
  ui.dur.textContent = fmtTime(dur);
  ui.playBtn.replaceChildren(icon(music.playing ? "pause" : "play"));
  ui.playBtn.setAttribute("aria-label", music.playing ? t("pause") : t("play"));
  ui.viz.classList.toggle("is-playing", music.playing);
  ui.note.textContent = music.demo ? t("demoNote") : "";
}
function setTrack(i) {
  const tracks = giftData.music;
  if (music.audio) { music.audio.pause(); music.audio = null; music.audioSrc = ""; }
  music.index = i;
  music.time = 0;
  music.duration = tracks[i].durationSeconds || 180;
  music.demo = !tracks[i].audio;
  paintTrack();
  updateMusicUI();
}
function changeTrack(delta) {
  const n = giftData.music.length;
  const wasPlaying = music.playing;
  setTrack((music.index + delta + n) % n);
  if (wasPlaying) playMusic();
}
function togglePlay() { music.playing ? pauseMusic() : playMusic(); }

function playMusic() {
  const track = giftData.music[music.index];
  music.playing = true;           // audio only ever starts from a tap on Play
  if (track.audio && !music.demo) {
    if (!music.audio || music.audioSrc !== track.audio) {
      const a = new Audio();
      a.preload = "none";
      a.src = track.audio;
      a.addEventListener("error", goDemo);
      a.addEventListener("loadedmetadata", () => { if (isFinite(a.duration)) { music.duration = a.duration; updateMusicUI(); } });
      a.addEventListener("ended", onTrackEnd);
      music.audio = a;
      music.audioSrc = track.audio;
      a.currentTime = music.time;
    }
    const p = music.audio.play();
    if (p && p.catch) p.catch(goDemo);
  }
  startTick();
  updateMusicUI();
}
function pauseMusic() {
  music.playing = false;
  if (music.audio) music.audio.pause();
  updateMusicUI();
}
/** If the audio file is missing/broken, keep the player working in silent demo mode. */
function goDemo() {
  music.demo = true;
  if (music.audio) { music.audio.pause(); music.audio = null; music.audioSrc = ""; }
  updateMusicUI();
}
function onTrackEnd() {
  const n = giftData.music.length;
  if (n > 1) { setTrack((music.index + 1) % n); playMusic(); }
  else { pauseMusic(); music.time = 0; if (music.audio) music.audio.currentTime = 0; updateMusicUI(); }
}
function startTick() {
  stopTick();
  music.tick = setInterval(() => {
    if (!music.playing) return;
    if (music.audio && !music.demo) {
      music.time = music.audio.currentTime || 0;
    } else {
      music.time += 0.25;
      if (music.time >= music.duration) { onTrackEnd(); return; }
    }
    music.played += 0.25;
    if (music.played >= (giftData.settings.musicCompleteSeconds || 8)) markComplete("music");
    updateMusicUI();
  }, 250);
}
function stopTick() { clearInterval(music.tick); music.tick = null; }
function stopMusic() {
  if (music.playing) pauseMusic();
  stopTick();
  music.ui = null;
}


// =====================================================
// NOTES APP
// =====================================================
function renderNotesList() {
  appTitle.textContent = appName("notes");
  setBackLabel(t("home"));
  appBody.replaceChildren();
  appBody.scrollTop = 0;
  const notes = giftData.notes || [];
  const list = h("div", { class: "note-list" });
  notes.forEach((n, i) => {
    const first = Array.isArray(n.body) ? n.body[0] : n.body;
    list.append(h("button", { class: "note-row", type: "button", onClick: () => openNote(i) },
      h("span", { class: "note-emoji", "aria-hidden": "true", text: n.emoji || "📝" }),
      h("span", { class: "note-text" },
        h("span", { class: "note-title", text: n.title }),
        h("span", { class: "note-preview", text: first || "" })),
      state.openedNotes.includes(i) ? h("span", { class: "note-check", "aria-hidden": "true", text: "✓" }) : null,
      h("span", { class: "chev", "aria-hidden": "true", text: "›" })));
  });
  appBody.append(list);
}

function openNote(i) {
  const n = giftData.notes[i];
  const type = n.type || "text";
  const lines = Array.isArray(n.body) ? n.body : [n.body || ""];
  const noteBody = h("div", { class: `note-body ${type}` });
  lines.forEach(line => {
    if (type === "checklist") {
      noteBody.append(h("button", {
        class: "check-row", type: "button", role: "checkbox", "aria-checked": "false",
        onClick: e => {
          const btn = e.currentTarget;
          const on = btn.getAttribute("aria-checked") !== "true";
          btn.setAttribute("aria-checked", String(on));
          btn.classList.toggle("on", on);
        }
      }, h("span", { class: "check-circle", "aria-hidden": "true" }), h("span", { text: line })));
    } else {
      noteBody.append(h("p", { class: "note-line" + (type === "list" ? " bullet" : ""), text: line }));
    }
  });
  appBody.replaceChildren(h("article", { class: "note-sheet" },
    h("div", { class: "note-head" }, h("span", { "aria-hidden": "true", text: n.emoji || "📝" }), h("h3", { text: n.title })),
    n.date ? h("p", { class: "note-date", text: n.date }) : null,
    noteBody));
  appBody.scrollTop = 0;
  setBackLabel(appName("notes"));
  pushLayer("note", () => { if (currentApp === "notes") renderNotesList(); });

  if (!state.openedNotes.includes(i)) { state.openedNotes.push(i); saveState(); }
  if (n.surprise) { toast(n.surprise, 3200); burstCenter(); }
  if (state.openedNotes.length >= giftData.notes.length) markComplete("notes", !!n.surprise);
}


// =====================================================
// MINI GAME
// =====================================================
function renderGame(body) {
  const cfg = giftData.game;
  const wrap = h("div", { class: "game" });
  body.append(wrap);

  function start() {
    const total = Math.max(cfg.tiles || 12, 2);
    const nTargets = Math.min(cfg.targets || 5, total - 1);
    const decoys = cfg.decoyEmojis && cfg.decoyEmojis.length ? cfg.decoyEmojis : ["⭐"];
    let found = 0, oops = 0;

    const tiles = [];
    for (let i = 0; i < nTargets; i++) tiles.push({ target: true, emoji: cfg.targetEmoji });
    for (let i = 0; i < total - nTargets; i++) tiles.push({ target: false, emoji: decoys[Math.floor(Math.random() * decoys.length)] });
    shuffle(tiles);

    const foundEl = h("span");
    const oopsEl = h("span");
    const updateHud = () => {
      foundEl.textContent = `${cfg.targetEmoji} ${found} / ${nTargets}`;
      oopsEl.textContent = `${t("oops")}: ${oops}`;
    };
    const board = h("div", { class: "board", role: "group", "aria-label": cfg.title });
    tiles.forEach(tile => {
      const btn = h("button", { class: "tile", type: "button", "aria-label": tile.emoji, onClick: () => {
        if (tile.target) {
          btn.classList.add("found");
          btn.disabled = true;
          found++;
          burstAtEl(btn, 5);
          updateHud();
          if (found === nTargets) win();
        } else {
          oops++;
          btn.classList.remove("shake");
          void btn.offsetWidth;
          btn.classList.add("shake");
          updateHud();
        }
      } }, tile.emoji);
      btn.addEventListener("animationend", () => btn.classList.remove("shake"));
      board.append(btn);
    });
    updateHud();
    wrap.replaceChildren(h("p", { class: "game-intro", text: cfg.instructions }), h("div", { class: "hud" }, foundEl, oopsEl), board);
  }

  function win() {
    markComplete("game", true);
    const card = h("div", { class: "ach-card", role: "status", tabindex: "-1" },
      h("div", { class: "ach-emoji", "aria-hidden": "true", text: "🏆" }),
      h("h3", { text: cfg.winTitle }),
      h("p", { text: cfg.winText }),
      h("button", { class: "btn", type: "button", onClick: start }, t("playAgain")));
    wrap.replaceChildren(card);
    burstCenter();
    later(() => card.focus({ preventScroll: true }), 50);
  }

  start();
}


// =====================================================
// SECRET SYSTEM (locked screen + unlock)
// =====================================================
function renderSecret(body) {
  const req = requiredList();
  const done = doneCount();
  if (!isSecretUnlocked()) {
    const pct = req.length ? Math.round((done / req.length) * 100) : 100;
    body.append(h("div", { class: "secret-lock" },
      h("div", { class: "lock-emoji", "aria-hidden": "true", text: "🔒" }),
      h("h3", { class: "secret-name", text: t("secretTitle") }),
      h("p", { text: t("secretLockedText") }),
      progressBar(pct, req.length, done),
      h("p", { class: "secret-count", text: `${done} / ${req.length} ${t("activitiesCompleted")}` }),
      h("ul", { class: "req-list" }, req.map(id =>
        h("li", { class: "req-row" + (state.completed[id] ? " done" : "") }, `${state.completed[id] ? "✓" : "○"} ${activityLabel(id)}`)))));
  } else {
    body.append(h("div", { class: "secret-lock" },
      h("div", { class: "lock-emoji", "aria-hidden": "true", text: "🔓" }),
      h("h3", { class: "secret-name", text: t("secretTitle") }),
      h("p", { text: t("secretUnlockedText") }),
      h("button", { class: "btn", type: "button", onClick: openSecretRoom }, t("enterSecret"))));
  }
}


// =====================================================
// SECRET ROOM (final screen)
// =====================================================
let secretTimers = [];
let secretTrigger = null;
const secretLater = (fn, ms) => secretTimers.push(later(fn, ms));

function openSecretRoom() {
  secretTrigger = document.activeElement;
  buildSecretRoom();
  secretRoom.classList.add("is-active");
  pushLayer("secret", hideSecretRoom);
  later(() => { const b = $("#giftOpenBtn"); if (b) b.focus({ preventScroll: true }); }, 100);
}
function hideSecretRoom() {
  secretTimers.forEach(clearTimeout);
  secretTimers = [];
  secretRoom.classList.remove("is-active");
  restoreFocus(secretTrigger);
}

function buildSecretRoom() {
  const stars = h("div", { class: "stars", "aria-hidden": "true" });
  for (let i = 0; i < 36; i++) {
    stars.append(h("span", { class: "star", style: `--x:${Math.random() * 100}%;--y:${Math.random() * 100}%;--s:${1 + Math.random() * 2.5}px;--d:${2 + Math.random() * 3}s;--dl:${-Math.random() * 4}s` }));
  }
  const particles = h("div", { class: "particles", "aria-hidden": "true" });
  const bits = ["✨", "💗", "⭐", "💖"];
  for (let i = 0; i < 12; i++) {
    particles.append(h("span", { class: "particle", text: bits[i % bits.length], style: `--x:${Math.random() * 100}%;--s:${12 + Math.random() * 14}px;--d:${9 + Math.random() * 8}s;--dl:${-Math.random() * 12}s` }));
  }

  const glow = h("div", { class: "gift-glow" });
  const giftBody = h("div", { class: "gift-body" });
  const lid = h("div", { class: "gift-lid" });
  const gift = h("div", { class: "gift", "aria-hidden": "true", onClick: openGift }, glow, giftBody, lid);
  const openBtn = h("button", { class: "open-btn", type: "button", id: "giftOpenBtn", onClick: openGift }, "🎁 " + t("openGift"));
  const stage = h("div", { class: "room-stage" },
    h("p", { class: "room-kicker", text: giftData.secretMessage }), gift, openBtn);

  const finalCard = h("div", { class: "final-card", tabindex: "-1", hidden: true },
    h("p", { class: "final-text", text: giftData.finalMessage }),
    giftData.finalSignature ? h("p", { class: "final-sign", text: giftData.finalSignature }) : null,
    h("button", { class: "btn light", type: "button", onClick: goHome }, t("backToPhone")));

  let opened = false;
  function openGift() {
    if (opened) return;
    opened = true;
    openBtn.disabled = true;
    gift.classList.add("shake");
    secretLater(() => { gift.classList.remove("shake"); gift.classList.add("is-open"); burstAtEl(gift, 28); }, 700);
    secretLater(() => stage.classList.add("is-hidden"), 1700);
    secretLater(() => {
      stage.hidden = true;
      finalCard.hidden = false;
      finalCard.classList.add("reveal");
      finalCard.focus({ preventScroll: true });
      state.secretOpened = true;
      saveState();
    }, 2200);
  }

  secretRoom.replaceChildren(stars, particles, h("div", { class: "room-content" }, stage, finalCard));
}


// =====================================================
// HIDDEN SURPRISES
// =====================================================
let wpTaps = 0, wpLast = 0;
function setupHiddenSurprises() {
  const hid = giftData.hidden || {};

  // Tap empty wallpaper space on the home screen several times
  homeScreen.addEventListener("click", e => {
    if (e.target.closest("button, .glass")) return;
    const now = Date.now();
    wpTaps = now - wpLast < 1200 ? wpTaps + 1 : 1;
    wpLast = now;
    if (wpTaps >= (hid.wallpaperTaps || 5)) {
      wpTaps = 0;
      burst(e.clientX, e.clientY, 14);
      toast(hid.wallpaperMessage || "✨");
      const mem = (giftData.memories || [])[hid.wallpaperMemory];
      if (mem && !state.wallpaperFound) {
        state.wallpaperFound = true;
        saveState();
        later(() => showMemory(mem), 700);
      }
    }
  });

  // Tap the battery icon
  $("#batteryBtn").addEventListener("click", e => {
    toast(hid.batteryMessage || "🔋💗");
    burstAtEl(e.currentTarget, 8);
  });
}


// =====================================================
// START EVERYTHING
// =====================================================
function init() {
  applyTheme();
  applyWallpaper();

  // Testing shortcuts:  index.html?reset   index.html?unlock
  const params = new URLSearchParams(location.search);
  if (params.has("reset")) { try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ } state = defaultState(); }
  if (params.has("unlock")) requiredList().forEach(id => { state.completed[id] = true; });

  buildLockScreen();
  buildHome();
  setupHiddenSurprises();

  $("#unlockBtn").addEventListener("click", unlock);
  $("#lockNotif").addEventListener("click", unlock);
  backBtn.addEventListener("click", requestClose);
  $("#viewerClose").addEventListener("click", requestClose);
  homeBar.addEventListener("click", goHome);
  modal.addEventListener("click", e => { if (e.target === modal) requestClose(); });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") requestClose();
    else if (viewerOpen && !hasLayer("modal") && giftData.gallery.length > 1) {
      if (e.key === "ArrowLeft") viewerNav(-1);
      if (e.key === "ArrowRight") viewerNav(1);
    }
  });

  setInterval(updateClock, 30000);
  try { history.replaceState({ depth: 0 }, ""); } catch (e) { historyOK = false; }
  refreshChrome();
  $("#unlockBtn").focus({ preventScroll: true });
}

init();
