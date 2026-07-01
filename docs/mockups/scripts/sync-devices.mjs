/**
 * Sync desktop mockups → tablet (sidebar 200px) and mobile (viewport + padding tweaks).
 * Usage: node docs/mockups/scripts/sync-devices.mjs [file1.html file2.html ...]
 * If no args, syncs all desktop/*.html not yet in tablet.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const desktopDir = path.join(root, 'desktop');
const tabletDir = path.join(root, 'tablet');
const mobileDir = path.join(root, 'mobile');

function toTablet(html) {
  return html
    .replace(/--sidebar-w:\s*240px/g, '--sidebar-w: 200px')
    .replace(/Desktop/g, 'Tablet')
    .replace(/≥1024px/g, '~768px');
}

function toMobile(html) {
  let out = html
    .replace(/Desktop/g, 'Mobile')
    .replace(/Tablet/g, 'Mobile')
    .replace(
      /<meta name="viewport" content="width=device-width, initial-scale=1\.0" \/>/,
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />'
    );

  // Focus / modal pages: tighter horizontal padding
  out = out
    .replace(/padding: 14px 32px/g, 'padding: 12px 16px')
    .replace(/padding: 32px/g, 'padding: 20px 16px')
    .replace(/padding: 48px 24px/g, 'padding: 32px 16px')
    .replace(/padding: 16px 32px/g, 'padding: 14px 16px')
    .replace(/max-width: 520px/g, 'max-width: 100%')
    .replace(/max-width: 480px/g, 'max-width: 100%');

  // Shell pages on mobile: hide fixed sidebar, use full width main
  if (out.includes('class="sidebar"')) {
    out = out.replace(
      /\.sidebar\s*\{[^}]*\}/,
      (m) => m + '\n    .sidebar { display: none; }'
    );
    out = out.replace(
      /\.main-wrap\s*\{[^}]*margin-left:[^}]*\}/,
      '.main-wrap { margin-left: 0; flex: 1; display: flex; flex-direction: column; min-width: 0; }'
    );
    if (!out.includes('bottom-nav')) {
      const navCss = `
    :root { --safe-b: env(safe-area-inset-bottom, 0px); --nav-h: 64px; }
    body { padding-bottom: calc(var(--nav-h) + var(--safe-b) + 8px); }
    .bottom-nav {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
      background: var(--color-canvas); border-top: 1px solid var(--color-hairline);
      padding: 6px 4px calc(6px + var(--safe-b));
      display: grid; grid-template-columns: repeat(4, 1fr);
    }
    .bottom-nav a {
      display: flex; flex-direction: column; align-items: center; gap: 2px;
      font-size: 10px; color: var(--color-slate); text-decoration: none; padding: 4px 0;
    }
    .bottom-nav a.active { color: var(--color-primary); font-weight: 600; }
    .bottom-nav svg { width: 22px; height: 22px; }`;
      const nav4 = `
    <nav class="bottom-nav" aria-label="Điều hướng chính">
      <a href="S03-dashboard.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/></svg>Trang chủ</a>
      <a href="S04-curriculum.html" class="active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>Học</a>
      <a href="S06-srs-front.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Ôn</a>
      <a href="S11-settings.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2"/></svg>Cài đặt</a>
    </nav>`;
      out = out.replace('</style>', navCss + '\n  </style>');
      out = out.replace('</body>', nav4 + '\n</body>');
    }
  }

  return out;
}

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(desktopDir).filter((f) => f.endsWith('.html'));

for (const file of files) {
  const src = path.join(desktopDir, file);
  if (!fs.existsSync(src)) {
    console.warn('Skip (missing):', file);
    continue;
  }
  const html = fs.readFileSync(src, 'utf8');
  fs.writeFileSync(path.join(tabletDir, file), toTablet(html));
  fs.writeFileSync(path.join(mobileDir, file), toMobile(html));
  console.log('Synced:', file);
}
