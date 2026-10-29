// Partner marks for the Partner network on /partners. Inline SVG so they stay crisp and need no extra requests.
// Each gradient id is unique per logo so two logos on one page don't share a <defs> entry.

// ShopCrawl: a shopping bag being scanned by a search lens, with the trail the crawler follows.
export const ShopCrawlLogo = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" role="img" aria-label="ShopCrawl logo">
    <defs>
      <linearGradient id="sc-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffb703" />
        <stop offset="1" stopColor="#fb6f00" />
      </linearGradient>
    </defs>
    <rect width="56" height="56" rx="16" fill="url(#sc-bg)" />
    <path d="M9 44c4-2 6 2 10 0s6-2 9 0" fill="none" stroke="#0f1d17" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
    <path d="M14 20h22l-2 20H16z" fill="#fff" />
    <path d="M19 20v-3a6 6 0 0 1 12 0v3" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    <circle cx="36" cy="34" r="7" fill="#0f1d17" stroke="#fff" strokeWidth="3" />
    <path d="m41 39 5 5" stroke="#0f1d17" strokeWidth="4" strokeLinecap="round" />
    <path d="M33.5 34h5" stroke="#ffb703" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// DocRank: a page whose bars climb to the top spot, crowned with a rank chevron.
export const DocRankLogo = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" role="img" aria-label="DocRank logo">
    <defs>
      <linearGradient id="dr-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#25d366" />
        <stop offset="1" stopColor="#0b6e4f" />
      </linearGradient>
    </defs>
    <rect width="56" height="56" rx="16" fill="url(#dr-bg)" />
    <path d="M15 11h18l8 8v26a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2z" fill="#fff" />
    <path d="M33 11v8h8" fill="#d3ebe0" />
    <rect x="18" y="35" width="5" height="7" rx="1.5" fill="#b9dccb" />
    <rect x="25.5" y="30" width="5" height="12" rx="1.5" fill="#25d366" />
    <rect x="33" y="24" width="5" height="18" rx="1.5" fill="#0b6e4f" />
    <path d="m31 19 4.5-4 4.5 4" fill="none" stroke="#ffb703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5 2)" />
  </svg>
);

export const allyLogos = { shopcrawl: ShopCrawlLogo, docrank: DocRankLogo };
