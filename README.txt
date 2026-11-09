Sonde Toolkit PWA
=================
Files (keep them together, in the same folder):
  index.html            the toolkit (V4 baseline)
  manifest.webmanifest  app name, colours, icons
  sw.js                 makes it work offline
  icons/                app icons

HOSTING
A PWA only installs from https:// (or localhost), not from a file on disk.
Any static host works: GitHub Pages, Netlify, Cloudflare Pages, or your own server.
Upload the whole folder; open the address; use the browser's Install / Add to Home Screen.

UPDATING
Replace index.html on the host. Users get it on their next online open.
(Use "Download app" in the toolkit to produce the new index.html with your edits.)
You only touch sw.js if you want to force-clear the offline cache: change 'sonde-toolkit-v1' to v2.

IMPORTANT
Data you edit lives in each browser's own storage, separately for the website and for the old
file on disk. To move edits across: Download app from the old copy and host that file as index.html.
