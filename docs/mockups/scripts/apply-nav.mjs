/**
 * Chuẩn hóa AppShell nav — 4 mục chính, không IT trong sidebar/bottom nav.
 * Chạy: node docs/mockups/scripts/apply-nav.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const SVG = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/></svg>',
  learn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  review: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
};

function activeClass(current, key) {
  return current === key ? ' class="active"' : '';
}

function learnHref(filename) {
  return /curriculum-zh/.test(filename) ? 'S04-curriculum-zh.html' : 'S04-curriculum.html';
}

function settingsHref(filename) {
  return /settings-guest/.test(filename) ? 'S11-settings-guest.html' : 'S11-settings.html';
}

function desktopShellNav(active, filename = '') {
  const settingsActive = active === 'settings' ? ' active' : '';
  const learn = learnHref(filename);
  const settings = settingsHref(filename);
  return `      <nav class="nav">
        <a href="S03-dashboard.html"${activeClass(active, 'home')}>
          ${SVG.home}
          Trang chủ
        </a>
        <a href="${learn}"${activeClass(active, 'learn')}>
          ${SVG.learn}
          Học
        </a>
        <a href="S06-srs-front.html"${activeClass(active, 'review')}>
          ${SVG.review}
          Ôn tập
        </a>
      </nav>
      <div class="sidebar-footer">
        <a href="${settings}" class="nav-settings${settingsActive}">
          ${SVG.settings}
          Cài đặt
        </a>
      </div>`;
}

function mobileBottomNav(active, filename = '') {
  const learn = learnHref(filename);
  const settings = settingsHref(filename);
  return `  <nav class="bottom-nav" aria-label="Điều hướng chính">
    <a href="S03-dashboard.html"${activeClass(active, 'home')}>
      ${SVG.home}
      Trang chủ
    </a>
    <a href="${learn}"${activeClass(active, 'learn')}>
      ${SVG.learn}
      Học
    </a>
    <a href="S06-srs-front.html"${activeClass(active, 'review')}>
      ${SVG.review}
      Ôn
    </a>
    <a href="${settings}"${activeClass(active, 'settings')}>
      ${SVG.settings}
      Cài đặt
    </a>
  </nav>`;
}

function detectActive(filename) {
  if (/S03-dashboard/.test(filename)) return 'home';
  if (/S04-curriculum/.test(filename)) return 'learn';
  if (/S06-review-settings/.test(filename)) return 'review';
  if (/S11-settings/.test(filename)) return 'settings';
  if (/S07-writing-grid/.test(filename)) return 'learn';
  if (/S09-it/.test(filename)) return 'none';
  if (/S08-ai-tutor/.test(filename)) return 'none';
  return 'none';
}

function standardBrand() {
  return `<div class="brand">
        <div class="brand-mark">T</div>
        <div>
          <h1>Talkory</h1>
          <p>Học Nhật &amp; Trung</p>
        </div>
      </div>`;
}

function fullSidebar(active, filename = '') {
  return `<aside class="sidebar">
      ${standardBrand()}
${desktopShellNav(active === 'none' ? '' : active, filename)}
    </aside>`;
}

function patchDesktopSidebar(html, active, filename) {
  const navBlock = desktopShellNav(active === 'none' ? '' : active, filename);
  let out = html;

  // Thay nav + mọi sidebar-footer trùng bằng một block
  out = out.replace(
    /<nav class="nav">[\s\S]*?<\/nav>(\s*<div class="sidebar-footer">[\s\S]*?<\/div>)*/,
    navBlock
  );

  // Nav không có footer
  if (!out.includes('class="nav-settings"')) {
    out = out.replace(/<nav class="nav">[\s\S]*?<\/nav>/, navBlock);
  }

  // Sidebar chỉ có brand text (S06-review-settings)
  out = out.replace(
    /<aside class="sidebar"><div class="brand">Talkory<\/div><\/aside>/,
    fullSidebar(active, filename)
  );

  // Sidebar chỉ có brand-mark (S09-it-module)
  out = out.replace(
    /<aside class="sidebar"><div class="brand-mark">#<\/div><\/aside>/,
    fullSidebar(active, filename)
  );

  // S09 legacy brand
  out = out.replace(
    /<div class="brand-mark">#<\/div>\s*<div>\s*<h1>Talkory<\/h1>\s*<p>IT Track<\/p>/,
    '<div class="brand-mark">T</div>\n        <div>\n          <h1>Talkory</h1>\n          <p>Học Nhật &amp; Trung</p>'
  );

  return out;
}

function patchMobileBottomNav(html, active, filename) {
  let out = html.replace(
    /\.bottom-nav\s*\{[^}]*grid-template-columns:\s*repeat\(5,\s*1fr\)/g,
    '.bottom-nav {\n      position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;\n      background: var(--color-canvas); border-top: 1px solid var(--color-hairline);\n      padding: 6px 4px calc(6px + var(--safe-b));\n      display: grid; grid-template-columns: repeat(4, 1fr)'
  );
  out = out.replace(/<nav class="bottom-nav"[\s\S]*?<\/nav>/, mobileBottomNav(active === 'none' ? '' : active, filename));
  return out;
}

function patchDashboardSpecialty(html) {
  if (!html.includes('Lộ trình chuyên đề') && html.includes('track-card it')) {
    html = html.replace(
      /<div class="track-grid" style="grid-template-columns: 1fr; margin-bottom: 20px;">\s*<a href="S09-it-track\.html"/,
      `<p class="section-title">Lộ trình chuyên đề</p>
        <p style="font-size:13px;color:var(--color-slate);margin:-4px 0 14px;line-height:1.45">Các track theo chủ đề (IT, du lịch, business…) — học song song JLPT/HSK, mở từ trang chủ.</p>
        <div class="track-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:12px; margin-bottom: 20px;">
          <a href="S09-it-track.html"`
    );
    // Add coming-soon placeholder after IT card closing </a>
    html = html.replace(
      /(<a href="S09-it-track\.html" class="track-card it"[\s\S]*?<\/a>)\s*(<div class="bottom-row">|<\/div>\s*<div class="bottom-row">)/,
      `$1
          <div class="track-card" style="opacity:0.55;cursor:default;border-style:dashed;padding:14px 20px">
            <div class="track-head" style="margin-bottom:4px"><h4><span class="dot" style="background:var(--color-muted)"></span> Du lịch</h4></div>
            <p style="margin:0;font-size:13px;color:var(--color-muted)">Sắp có</p>
          </div>
        </div>

        $2`
    );
  }
  return html;
}

function patchItTrackBreadcrumb(html, filename) {
  if (!/S09-it-track/.test(filename)) return html;
  if (html.includes('breadcrumb-nav')) return html;
  return html.replace(
    /<div class="page-header">\s*<h2>IT Track<\/h2>/,
    `<nav class="breadcrumb-nav" style="font-size:13px;color:var(--color-slate);margin-bottom:12px"><a href="S03-dashboard.html" style="color:var(--color-slate);text-decoration:none">Trang chủ</a> / <span style="color:var(--color-charcoal)">Lộ trình chuyên đề</span> / IT</nav>
        <div class="page-header">
          <h2>IT Track</h2>`
  );
}

const shellFiles = [];
for (const device of ['desktop', 'tablet', 'mobile']) {
  const dir = path.join(root, device);
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.html')) continue;
    if (/S0[34]|S04-curriculum|S11-settings|S09-it-track|S07-writing-grid|S06-review-settings|S08-ai-tutor|S09-it-module/.test(f)) {
      shellFiles.push(path.join(dir, f));
    }
  }
}

let count = 0;
for (const file of shellFiles) {
  const base = path.basename(file);
  const active = detectActive(base);
  let html = fs.readFileSync(file, 'utf8');
  const isMobile = file.includes(`${path.sep}mobile${path.sep}`);

  if (isMobile && html.includes('bottom-nav')) {
    html = patchMobileBottomNav(html, active, base);
  } else if (!isMobile && html.includes('class="sidebar"')) {
    html = patchDesktopSidebar(html, active, base);
  }

  if (/S03-dashboard\.html$/.test(base)) {
    html = patchDashboardSpecialty(html);
  }
  if (/S09-it-track\.html$/.test(base)) {
    html = patchItTrackBreadcrumb(html, base);
  }

  fs.writeFileSync(file, html);
  count++;
  console.log('Patched:', path.relative(root, file), `(${active})`);
}
console.log(`Done: ${count} files`);
