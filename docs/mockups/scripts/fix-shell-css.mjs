/**
 * Sửa CSS/HTML shell sau apply-nav + sync-devices.
 * node docs/mockups/scripts/fix-shell-css.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const SHELL_CSS_PATCH = `
    /* —— AppShell nav (shared) —— */
    .sidebar { display: flex; flex-direction: column; }
    .nav { flex: 1; display: flex; flex-direction: column; gap: 2px; padding: 0 8px; }
    .nav a,
    .nav-settings {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      border-radius: var(--radius-md);
      text-decoration: none;
      font-size: 14px;
      color: var(--color-slate);
      transition: background 0.15s;
    }
    .nav a:hover,
    .nav-settings:hover { background: var(--color-canvas); }
    .nav a.active,
    .nav-settings.active {
      background: rgba(86, 69, 212, 0.08);
      color: var(--color-primary);
      font-weight: 600;
      box-shadow: inset 3px 0 0 var(--color-primary);
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
    }
    .nav svg,
    .nav-settings svg { width: 20px; height: 20px; flex-shrink: 0; opacity: 0.85; }
    .sidebar-footer {
      margin-top: auto;
      padding: 8px;
      border-top: 1px solid var(--color-hairline);
      padding-top: 16px;
    }
`;

const MOBILE_NAV_CSS = `
    :root { --safe-b: env(safe-area-inset-bottom, 0px); --nav-h: 64px; }
    .bottom-nav {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
      background: var(--color-canvas);
      border-top: 1px solid var(--color-hairline);
      padding: 6px 4px calc(6px + var(--safe-b));
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    .bottom-nav a {
      display: flex; flex-direction: column; align-items: center; gap: 2px;
      font-size: 10px; color: var(--color-slate); text-decoration: none; padding: 4px 0;
    }
    .bottom-nav a.active { color: var(--color-primary); font-weight: 600; }
    .bottom-nav svg { width: 22px; height: 22px; }
`;

function mobileBottomNav(active) {
  const ac = (k) => (active === k ? ' class="active"' : '');
  return `<nav class="bottom-nav" aria-label="Điều hướng chính">
    <a href="S03-dashboard.html"${ac('home')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/></svg>Trang chủ</a>
    <a href="S04-curriculum.html"${ac('learn')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>Học</a>
    <a href="S06-srs-front.html"${ac('review')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Ôn</a>
    <a href="S11-settings.html"${ac('settings')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2"/></svg>Cài đặt</a>
  </nav>`;
}

function patchCommon(html) {
  let out = html;

  // Gỡ sidebar-footer trùng lặp
  out = out.replace(
    /(<div class="sidebar-footer">[\s\S]*?<\/div>\s*)+(?=\s*<\/aside>)/,
    (block) => {
      const first = block.match(/<div class="sidebar-footer">[\s\S]*?<\/div>/);
      return first ? `${first[0]}\n      ` : block;
    }
  );

  // Bug: active thành attribute HTML thay vì class
  out = out.replace(/\.html" active>/g, '.html" class="active">');

  // Bug: duplicate class attribute
  out = out.replace(/class="nav-settings"\s+class="active"/g, 'class="nav-settings active"');

  // Remove inline styles on nav-settings (CSS handles it)
  out = out.replace(
    /<a href="S11-settings\.html" class="nav-settings([^"]*)" style="display:flex;align-items:center;gap:12px;padding:10px 12px;font-size:14px;color:var\(--color-slate\);text-decoration:none;border-radius:var\(--radius-md\)">/g,
    '<a href="S11-settings.html" class="nav-settings$1">'
  );

  // S11 broken brand (only mark, no title)
  out = out.replace(
    /<div class="brand">\s*<div class="brand-mark">T<\/div>\s*<\/div>\s*<nav class="nav">/,
    `<div class="brand">
        <div class="brand-mark">T</div>
        <div>
          <h1>Talkory</h1>
          <p>Học Nhật &amp; Trung</p>
        </div>
      </div>
      <nav class="nav">`
  );

  // Fix nav indentation
  out = out.replace(/\s+<nav class="nav">/g, '\n      <nav class="nav">');

  // display:block on nav links breaks icon layout
  out = out.replace(
    /\.nav a \{\s*display: block;/g,
    '.nav a { display: flex; align-items: center; gap: 12px;'
  );

  // Inject shared shell CSS once (before </style>)
  if (out.includes('class="sidebar"') && !out.includes('AppShell nav (shared)')) {
    out = out.replace('</style>', `${SHELL_CSS_PATCH}\n  </style>`);
  }

  // Brand block chuẩn khi thiếu .brand-mark CSS
  if (out.includes('class="brand-mark"') && !out.includes('.brand-mark {')) {
    out = out.replace(
      '</style>',
      `    .brand { display: flex; align-items: center; gap: 12px; padding: 0 20px 28px; }
    .brand-mark { width: 36px; height: 36px; border-radius: var(--radius-md); background: var(--color-primary); color: #fff; font-weight: 700; font-size: 18px; display: grid; place-items: center; }
    .brand h1 { font-size: 16px; font-weight: 600; color: var(--color-primary); }
    .brand p { font-size: 12px; color: var(--color-slate); margin-top: 2px; }
  </style>`
    );
  }

  out = dedupeShellCss(out);

  return out;
}

const APPSHELL_CSS_RE =
  /\s*\/\* —— AppShell nav \(shared\) —— \*\/[\s\S]*?(?=\n  <\/style>)/;

function dedupeShellCss(html) {
  if (!html.includes('AppShell nav (shared)')) return html;
  const marker = html.indexOf('AppShell nav (shared)');
  const before = html.slice(0, marker);
  // File đã có nav CSS đầy đủ → bỏ block AppShell trùng, bổ sung thiếu sót nhỏ
  if (before.includes('.nav { flex: 1') && before.includes('.nav a')) {
    let out = html.replace(APPSHELL_CSS_RE, '');
    if (!out.includes('.nav-settings {') && !out.includes('.nav a,\n    .nav-settings')) {
      out = out.replace(
        /(\.nav a\.active \{[\s\S]*?\})/,
        `$1\n    .nav-settings { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: var(--radius-md); text-decoration: none; font-size: 14px; color: var(--color-slate); }`
      );
    }
    if (!before.includes('margin-top: auto') && out.includes('.sidebar-footer')) {
      out = out.replace(/\.sidebar-footer \{/, '.sidebar-footer { margin-top: auto;');
    }
    return out;
  }
  // File nav CSS cũ không đủ → xóa rule nav cũ, giữ AppShell
  return html
    .replace(/\s*\.nav \{[^}]*\}\s*\.nav a \{[^}]*\}\s*\.nav a\.active \{[^}]*\}/, '\n')
    .replace(/\s*\.nav-settings\.active \{[^}]*\}/, '\n')
    .replace(/\s*\.nav svg \{[^}]*\}/, '\n')
    .replace(/\s*\.sidebar-footer \{[^}]*\}/, '\n');
}

function stripBrokenMobileShell(html) {
  if (!html.includes('.sidebar { display: none; }')) return html;

  let out = html;
  // Remove duplicate sidebar hide + dead sidebar DOM
  out = out.replace(/\s*\.sidebar \{ display: none; \}\s*/g, '\n');
  out = out.replace(/<div class="shell">\s*<aside class="sidebar">[\s\S]*?<\/aside>\s*/g, '');
  out = out.replace(/<div class="main-wrap">/g, '');
  out = out.replace(/<\/div>\s*<\/div>\s*(?=<div class="mockup|<nav class="bottom-nav")/g, '\n');

  // body padding for bottom nav
  if (!out.includes('--nav-h')) {
    out = out.replace('</style>', `${MOBILE_NAV_CSS}\n  </style>`);
  }
  if (!out.includes('padding-bottom: calc(var(--nav-h)')) {
    out = out.replace(
      /body \{([^}]*)\}/,
      (m, inner) => `body {${inner} padding-bottom: calc(var(--nav-h) + var(--safe-b) + 12px); }`
    );
  }

  // Wrap main content in padding container if needed
  if (!out.includes('class="page"') && out.includes('class="empty"')) {
    out = out.replace('<article class="empty">', '<main class="page" style="padding:16px"><article class="empty">');
    out = out.replace('</article>\s*\n', '</article></main>\n');
  }

  out = out.replace(
    /\.mockup-badge \{([^}]*bottom:\s*)16px/,
    '.mockup-badge { $1 calc(var(--nav-h) + 12px)'
  );

  return out;
}

function detectActive(name) {
  if (/S03-dashboard/.test(name)) return 'home';
  if (/S04-curriculum/.test(name)) return 'learn';
  if (/S06-review/.test(name)) return 'review';
  if (/S11-settings/.test(name)) return 'settings';
  return '';
}

// Regenerate mobile S04 ZH from mobile JA template
function regenMobileCurriculumZh() {
  const src = path.join(root, 'mobile', 'S04-curriculum.html');
  const dst = path.join(root, 'mobile', 'S04-curriculum-zh.html');
  let zh = fs.readFileSync(src, 'utf8');
  zh = zh.replace('Lộ trình JLPT', 'Lộ trình HSK');
  zh = zh.replace('S04-curriculum.html', 'S04-curriculum-zh.html');
  zh = zh.replace('sakko-idle', 'longmi-idle');
  zh = zh.replace('Sakko', 'Longmi');
  zh = zh.replace('học Nhật', 'học Trung');
  zh = zh.replace('🇯🇵 Nhật', '🇨🇳 Trung');
  zh = zh.replace('class="on">🇨🇳 Trung', 'class="on">🇨🇳 Trung');
  zh = zh.replace('<button type="button" class="on">🇯🇵 Nhật</button>', '<button type="button">🇯🇵 Nhật</button>');
  zh = zh.replace('<button type="button">🇨🇳 Trung</button>', '<button type="button" class="on">🇨🇳 Trung</button>');
  zh = zh.replace('badge-n5">N5', 'badge-n5">HSK1');
  zh = zh.replace('Sơ cấp', 'HSK1');
  zh = zh.replace('lesson-icon">か', 'lesson-icon">你');
  zh = zh.replace('Hiragana か', 'Chào hỏi');
  zh = zh.replace('Hiragana あ', 'Số đếm');
  zh = zh.replace('color:var(--color-lang-ja-accent)">N4', 'color:var(--color-lang-zh-accent)">HSK2');
  zh = zh.replace('Trung cấp', 'HSK2');
  zh = zh.replace('S04 · mobile', 'S04 ZH · mobile');
  zh = zh.replace(
    mobileBottomNav('learn'),
    mobileBottomNav('learn').replace('S04-curriculum.html" class="active"', 'S04-curriculum-zh.html" class="active"')
  );
  fs.writeFileSync(dst, zh);
  console.log('Regenerated mobile/S04-curriculum-zh.html');
}

// Fix mobile S03-dashboard-empty
function fixMobileDashboardEmpty() {
  const dst = path.join(root, 'mobile', 'S03-dashboard-empty.html');
  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Talkory — Bắt đầu (S03 empty mobile)</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --color-primary: #5645d4; --color-on-primary: #fff;
      --color-canvas: #fff; --color-surface: #f6f5f4; --color-hairline: #e5e3df;
      --color-charcoal: #37352f; --color-slate: #5d5b54;
      --color-lang-ja: #e6e0f5; --color-lang-ja-accent: #7b3ff2;
      --color-lang-zh: #dcecfa; --color-lang-zh-accent: #2a9d99;
      --radius-md: 8px; --radius-lg: 12px; --radius-xl: 16px;
      --safe-b: env(safe-area-inset-bottom, 0px); --nav-h: 64px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: Inter, system-ui, sans-serif;
      background: var(--color-surface); color: var(--color-charcoal);
      min-height: 100dvh;
      padding: max(12px, env(safe-area-inset-top)) 16px calc(var(--nav-h) + var(--safe-b) + 16px);
    }
    .empty {
      text-align: center; padding: 28px 16px;
      background: var(--color-canvas); border: 1px solid var(--color-hairline);
      border-radius: var(--radius-xl);
    }
    .mascots { display: flex; justify-content: center; gap: 12px; margin-bottom: 20px; }
    .mascots img { width: 72px; height: 72px; object-fit: contain; }
    .empty h2 { font-size: 22px; font-weight: 600; margin-bottom: 8px; }
    .empty > p { font-size: 15px; color: var(--color-slate); line-height: 1.5; margin-bottom: 20px; }
    .lang-pick { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px; }
    .lang-card {
      padding: 16px 12px; border-radius: var(--radius-lg);
      text-decoration: none; color: inherit; border: 1px solid var(--color-hairline);
    }
    .lang-card.ja { background: var(--color-lang-ja); border-color: transparent; }
    .lang-card.zh { background: var(--color-lang-zh); border-color: transparent; }
    .lang-card strong { display: block; font-size: 14px; margin-bottom: 4px; }
    .lang-card.ja strong { color: var(--color-lang-ja-accent); }
    .lang-card.zh strong { color: var(--color-lang-zh-accent); }
    .lang-card span { font-size: 12px; color: var(--color-slate); }
    .btn-primary {
      display: inline-block; font-size: 15px; font-weight: 600;
      padding: 12px 24px; border-radius: var(--radius-md);
      background: var(--color-primary); color: var(--color-on-primary); text-decoration: none;
    }
    .skip { display: block; margin-top: 14px; font-size: 14px; color: var(--color-slate); }
    ${MOBILE_NAV_CSS}
    .badge { position: fixed; bottom: calc(var(--nav-h) + 8px); right: 8px; font-size: 9px; padding: 3px 6px; background: #fff; border: 1px solid var(--color-hairline); border-radius: 999px; color: var(--color-slate); }
  </style>
</head>
<body>
  <article class="empty">
    <div class="mascots">
      <img src="../../assets/mascots/sakko-idle-transparent.png" alt="Sakko" />
      <img src="../../assets/mascots/longmi-idle-transparent.png" alt="Longmi" />
    </div>
    <h2>Bắt đầu hành trình học</h2>
    <p>Chọn ngôn ngữ hoặc làm placement để Talkory gợi ý level phù hợp.</p>
    <div class="lang-pick">
      <a href="S02-placement-picker.html" class="lang-card ja"><strong>🇯🇵 Tiếng Nhật</strong><span>JLPT</span></a>
      <a href="S02-placement-picker.html" class="lang-card zh"><strong>🇨🇳 Tiếng Trung</strong><span>HSK</span></a>
    </div>
    <a href="S02-placement-picker.html" class="btn-primary">Làm placement test</a>
    <a href="S04-curriculum.html" class="skip">Bỏ qua — học N5 miễn phí</a>
  </article>
  ${mobileBottomNav('home')}
  <div class="badge">S03 empty · mobile</div>
</body>
</html>`;
  fs.writeFileSync(dst, html);
  console.log('Fixed mobile/S03-dashboard-empty.html');
}

// Walk all html
let n = 0;
for (const device of ['desktop', 'tablet', 'mobile']) {
  const dir = path.join(root, device);
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.html'))) {
    const fp = path.join(dir, file);
    let html = fs.readFileSync(fp, 'utf8');
    const before = html;
    html = patchCommon(html);
    if (device === 'mobile') {
      html = stripBrokenMobileShell(html);
      // Ensure bottom nav before </body> if shell stripped but nav missing
      if (html.includes('--nav-h') && !html.includes('class="bottom-nav"') && /S11-settings|S06-review|S07-writing|S09-it-module|S11-settings/.test(file)) {
        const active = detectActive(file);
        html = html.replace('</body>', `${mobileBottomNav(active)}\n</body>`);
      }
    }
    if (html !== before) {
      fs.writeFileSync(fp, html);
      n++;
      console.log('Fixed:', `${device}/${file}`);
    }
  }
}

regenMobileCurriculumZh();
fixMobileDashboardEmpty();

console.log(`\nDone. Patched ${n} files.`);
