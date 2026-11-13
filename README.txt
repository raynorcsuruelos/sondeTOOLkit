SONDE TOOLKIT V14.8 PWA
Upload ALL files and the icons folder together to an HTTPS host such as GitHub Pages.
Open https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/index.html and install from the browser menu.
Do not open index.html using file:// for PWA installation; use HTTPS or localhost.
The HTML remains a standalone offline file when opened directly, but install/service-worker functions require HTTPS.
kPod and Drawings PDF folders are external: select them again on a new device or origin.
Browser file-system permissions and IndexedDB data are not bundled into this ZIP.
When updating, upload the full package and reload online to refresh the service-worker cache.
