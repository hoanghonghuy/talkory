import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const desktopDir = path.join(__dirname, '..', 'desktop');

// --- S04 ZH ---
{
  let zh = fs.readFileSync(path.join(desktopDir, 'S04-curriculum.html'), 'utf8');
  zh = zh.replace('Lộ trình Nhật (S04)', 'Lộ trình Trung (S04 ZH)');
  zh = zh.replace('Lộ trình JLPT', 'Lộ trình HSK');
  zh = zh.replace('N5 → N1', 'HSK1 → HSK6');
  zh = zh.replace(/sakko-idle/g, 'longmi-idle');
  zh = zh.replace(/Sakko/g, 'Longmi');
  zh = zh.replace(/học Nhật/g, 'học Trung');
  zh = zh.replace('level-badge mint">N5', 'level-badge mint">HSK1');
  zh = zh.replace('Sơ cấp — N5', 'Sơ cấp — HSK1');
  zh = zh.replace('Hiragana, Katakana, ngữ pháp cơ bản', 'Pinyin, chào hỏi, số đếm');
  zh = zh.replace('lesson-icon">あ', 'lesson-icon">你');
  zh = zh.replace('Bài 3 — Hiragana: hàng か', 'Bài 3 — Chào hỏi & giới thiệu');
  zh = zh.replace('Bài 2 — Hiragana: hàng あ', 'Bài 2 — Số đếm 1–10');
  zh = zh.replace('Bài 1 — Chào hỏi cơ bản', 'Bài 1 — Pinyin cơ bản');
  zh = zh.replace('level-badge lavender locked">N4', 'level-badge sky locked">HSK2');
  zh = zh.replace('Sơ trung cấp — N4', 'Sơ trung cấp — HSK2');
  zh = zh.replace('kanji thường dùng', 'từ vựng đời sống');
  zh = zh.replace('level-badge lavender locked">N3', 'level-badge sky locked">HSK3');
  zh = zh.replace('Trung cấp — N3', 'Trung cấp — HSK3');
  zh = zh.replace('kanji nâng cao', 'đọc hiểu cơ bản');
  zh = zh.replace('Mockup S04', 'S04 ZH · /learn/zh');
  zh = zh.replace(
    `.lang-tabs button.active-ja {
      background: var(--color-lang-ja);
      color: var(--color-lang-ja-accent);
      font-weight: 600;
      box-shadow: var(--shadow-card);
    }`,
    `.lang-tabs button.active-ja {
      background: var(--color-lang-ja);
      color: var(--color-lang-ja-accent);
      font-weight: 600;
      box-shadow: var(--shadow-card);
    }

    .lang-tabs button.active-zh {
      background: var(--color-lang-zh);
      color: var(--color-lang-zh-accent);
      font-weight: 600;
      box-shadow: var(--shadow-card);
    }`
  );
  zh = zh.replace(
    `.level-badge.lavender {
      background: var(--color-lang-ja);
      color: var(--color-lang-ja-accent);
    }`,
    `.level-badge.lavender {
      background: var(--color-lang-ja);
      color: var(--color-lang-ja-accent);
    }

    .level-badge.sky {
      background: var(--color-lang-zh);
      color: var(--color-lang-zh-accent);
    }`
  );
  zh = zh.replace(
    `<button type="button" class="active-ja" aria-selected="true">
            <span class="dot dot-ja"></span>
            Tiếng Nhật
          </button>
          <button type="button" aria-selected="false">
            <span class="dot dot-zh"></span>
            Tiếng Trung
          </button>`,
    `<a href="S04-curriculum.html" style="text-decoration:none"><button type="button" aria-selected="false">
            <span class="dot dot-ja"></span>
            Tiếng Nhật
          </button></a>
          <button type="button" class="active-zh" aria-selected="true">
            <span class="dot dot-zh"></span>
            Tiếng Trung
          </button>`
  );
  zh = zh.replace('color: var(--color-lang-ja-accent);', 'color: var(--color-lang-zh-accent);', 1);
  fs.writeFileSync(path.join(desktopDir, 'S04-curriculum-zh.html'), zh);
  console.log('S04-curriculum-zh.html');
}
