const fs = require('fs');

const articles = JSON.parse(fs.readFileSync('manual-articles.json', 'utf8'));

const rssItems = articles.map(article => `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(article.url)}</link>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <source>${escapeXml(article.source)}</source>
    </item>`).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Vincent Koc - Manual Articles</title>
    <link>https://github.com/vincentkoc</link>
    <description>Manually curated articles from Forbes and other sources without RSS feeds</description>
${rssItems}
  </channel>
</rss>`;

fs.writeFileSync('manual-articles.xml', rss);
console.log('Generated manual-articles.xml');

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
