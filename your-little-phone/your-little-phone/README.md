# Your Little Phone

An interactive e-gift: a tiny fictional phone with a lock screen, six apps and a hidden secret room.
Plain HTML + CSS + JavaScript. No server, database or login.

## File structure

```
your-little-phone/
├── index.html      ← the phone's skeleton (you don't need to edit it)
├── style.css       ← colors (top of file) + design
├── script.js       ← ALL your content lives in `giftData` at the top
└── assets/
    ├── wallpaper.jpg      ← your wallpaper (optional)
    ├── photos/            ← photo1.jpg, photo2.jpg, ...
    └── music/             ← cover1.jpg, song1.mp3, ...
```

## HOW TO CUSTOMIZE YOUR GIFT

Open `script.js` in any text editor (Notepad, VS Code). Everything between
`EDIT YOUR GIFT CONTENT HERE` and `END OF EDITABLE CONTENT` is yours to change.

1. **Recipient's name** – `recipientName` (and `lockGreeting` for the wording). `contactName` is the name shown on the Messages chat (that's you).
2. **Anniversary date** – `anniversaryDate`, written as `"YYYY-MM-DD"`. It appears on the lock screen and drives the "months / days" widget.
3. **Colors** – top of `style.css`, the `:root { ... }` block (`--accent`, `--background`, `--text`, `--secondary-text`, `--card`). Or fill in `theme` inside `giftData`.
4. **Photos** – copy your pictures into `assets/photos/`, then edit the `gallery` list: `src`, `alt` (short description), `caption`, `date`, `memory`. Add or delete lines freely. Missing files show a cute placeholder.
5. **Messages** – `messages` list. `sender: "Me"` = you (left side), `sender: "You"` = the recipient's replies (right side).
6. **Notes** – `notes` list. `type` can be `"text"`, `"list"` or `"checklist"`. Optional `surprise` shows a pop-up when that note is opened.
7. **Music** – put the cover image and an `.mp3` in `assets/music/`, then edit `music`: `title`, `artist`, `art`, `audio: "assets/music/song1.mp3"`. Leave `audio: ""` for a silent demo player. Music never autoplays.
8. **Final message** – `finalMessage` (use `\n` for new lines) and `secretMessage` ("Something was waiting for you."). Optional `finalSignature`.
9. **Wallpaper** – save an image as `assets/wallpaper.jpg` (portrait, ~1080×1920 works well) or change `wallpaper`.
10. **Test the Secret unlock** – any of these:
    - set `secret.testMode: true` (remember to set it back to `false`!)
    - open `index.html?unlock` in the browser
    - open the browser console and type `unlockSecretNow()`
    - change `secret.required` to fewer activities (options: `messages`, `gallery`, `notes`, `music`, `game`, `star`)
11. **Reset progress** – open `index.html?reset`, or type `resetGiftProgress()` in the browser console. If you make big edits later, change `settings.storageKey` (e.g. `"yourLittlePhone.v2"`) so nobody keeps old progress.
12. **Publish as a static website** – upload the whole folder (keep `assets/`) to a free static host:
    - **Netlify Drop** (app.netlify.com/drop): drag the folder onto the page.
    - **GitHub Pages**: put the files in a repo → Settings → Pages → deploy from `main`.
    - **Cloudflare Pages** or **Vercel** also work.
    Send the link to your partner. Test it on your own phone first.

## Hidden surprises (all optional)

- Tap empty space on the home screen 5 times.
- Tap the battery icon.
- Find the tiny ✨ on the photo that has `hiddenStar: true`.
- Open the note that has a `surprise`.
- Win the mini-game.

## Before gifting: quick checklist

- [ ] `secret.testMode` is `false`
- [ ] Replaced every "Your … here." placeholder
- [ ] Photos / music files exist at the paths you wrote
- [ ] Opened the published link on a real phone
