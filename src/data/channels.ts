
/*
   ✦ ✦ ✦   WASSI-KHAN   ✦ ✦ ✦

─────────────────────────────────────────────────────────────
📛 Project   : wassi-live-tv
👤 Creator   : WASSI KHAN FROM VEHARI
📱 Contact   : +923038264337
🗓 Release   : 24 • DECEMBER • 2025 | 02:00 PM
─────────────────────────────────────────────────────────────

//   ⭐ PROUDLY MADE IN PAKISTAN ⭐
*/



export interface Channel {
  id: string;
  name: string;
  streamUrl: string;
  logoUrl: string;
  category: 'news' | 'entertainment' | 'sports' | 'religious' | 'kids' | 'movies' | 'international';
}

export const categories = [
  { id: 'all', name: 'All', icon: 'Tv' },
  { id: 'news', name: 'News', icon: 'Newspaper' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Film' },
  { id: 'sports', name: 'Sports', icon: 'Trophy' },
  { id: 'movies', name: 'Movies', icon: 'Clapperboard' },
  { id: 'kids', name: 'Kids', icon: 'Baby' },
  { id: 'religious', name: 'Religious', icon: 'Moon' },
  { id: 'international', name: 'International', icon: 'Globe' },
];

export const channels: Channel[] = [
  {
    id: 'ten-sports',
    name: 'Ten Sports HD',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/Tensports-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ten-sports-hd-logo.webp?id=41',
    category: 'sports'
  },
  {
    id: 'ary-news',
    name: 'ARY News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/ARYnews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/1684242189-logo.webp?id=75',
    category: 'news'
  },
  {
    id: 'geo-news',
    name: 'Geo News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/geoNews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/geo-news-live.webp?id=60',
    category: 'news'
  },
  {
    id: 'hum-tv',
    name: 'HUM TV',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/humTV-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-TV-Channel-logo.webp?id=30',
    category: 'entertainment'
  },
  {
    id: 'ary-digital',
    name: 'ARY Digital',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/ARYdigital-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ary-digital-live-logo.webp?id=71',
    category: 'entertainment'
  },
  {
    id: 'geo-entertainment',
    name: 'Geo Entertainment',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/GeoEntertainment-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/geo-entertainment-live.webp?id=76',
    category: 'entertainment'
  },
  {
    id: 'bol-entertainment',
    name: 'BOL Entertainment',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/BolEntertainment-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/bol-entertainment-live.webp?id=60',
    category: 'entertainment'
  },
  {
    id: 'express-news',
    name: 'Express News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/expressnews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/express-news-live.webp?id=19',
    category: 'news'
  },
  {
    id: 'dawn-news',
    name: 'Dawn News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/DawnNews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/dawn-news-live.webp?id=71',
    category: 'news'
  },
  {
    id: 'bol-news',
    name: 'BOL News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/BolNews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/bol-news-live.webp?id=31',
    category: 'news'
  },
  {
    id: 'hum-news',
    name: 'HUM News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/humnews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-News-Channel-logo.webp?id=85',
    category: 'news'
  },
  {
    id: 'aan-tv',
    name: 'AAN TV',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/AAN-TV-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/1681977574-logo.webp?id=87',
    category: 'entertainment'
  },
  {
    id: 'eurosport',
    name: 'Eurosport',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/Eurosport-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/1686912440-logo.webp?id=51',
    category: 'sports'
  },
  {
    id: 'ary-zindagi',
    name: 'ARY Zindagi',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/ARYzindagi-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ary-zindagi-live-logo.webp?id=36',
    category: 'entertainment'
  },
  {
    id: 'hum-sitaray',
    name: 'HUM Sitaray',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/HumSitaray-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-Sitaray-Channel-logo.webp?id=86',
    category: 'entertainment'
  },
  {
    id: 'hum-masala',
    name: 'HUM Masala',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/hummasala-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-Masala-Channel-logo.webp?id=62',
    category: 'entertainment'
  },
  {
    id: 'cnn',
    name: 'CNN',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/Livecnn-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/cnn-news-live.webp?id=16',
    category: 'international'
  },
  {
    id: 'cartoon-network',
    name: 'Cartoon Network',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/cartoonnetwork-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/cartoon-network-live.webp?id=92',
    category: 'kids'
  },
  {
    id: 'express-entertainment',
    name: 'Express Entertainment',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/ExpressEntertainment-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/express-entertainment-live.webp?id=71',
    category: 'entertainment'
  },
  {
    id: 'sab-tv',
    name: 'SAB TV',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/SabTV-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/1686044497-logo.webp?id=63',
    category: 'entertainment'
  },
  {
    id: 'abn-news',
    name: 'ABN News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/ABNnews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/1686912075-logo.webp?id=43',
    category: 'news'
  },
  {
    id: 'tv-one',
    name: 'TV One',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/TVOne-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/tv-one-live.webp?id=59',
    category: 'entertainment'
  },
  {
    id: 'madani',
    name: 'Madani Channel',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/Madni-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/madani-channel-live.webp?id=67',
    category: 'religious'
  },
  {
    id: 'gnn',
    name: 'GNN',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/GNN-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/gnn-live.webp?id=79',
    category: 'news'
  },
  {
    id: 'filmworld',
    name: 'Film World',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/filmworld-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/filmworld-live.webp?id=57',
    category: 'movies'
  },
  {
    id: 'filmax',
    name: 'Filmax',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/Filmax-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/filmax-live.webp?id=43',
    category: 'movies'
  },
  {
    id: 'kashish',
    name: 'Kashish TV',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/KashishTV-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/kashish-live.webp?id=13',
    category: 'entertainment'
  },
  {
    id: 'aaj-news',
    name: 'Aaj News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/AajNews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/aaj-news-live.webp?id=50',
    category: 'news'
  },
  {
    id: 'a-plus',
    name: 'A Plus',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/Aplus-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/a-plus-live.webp?id=39',
    category: 'entertainment'
  },
  {
    id: 'sindh-tv',
    name: 'Sindh TV',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/sindhTV-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/sindh-tv-live.webp?id=47',
    category: 'entertainment'
  },
  {
    id: 'ltn-family',
    name: 'LTN Family',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/LTNFamily-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ltn-family-live.webp?id=48',
    category: 'entertainment'
  },
  {
    id: 'neo-news',
    name: 'Neo News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/NeoNews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/neo-tv-live.webp?id=55',
    category: 'news'
  },
  {
    id: 'ktn-news',
    name: 'KTN News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/ktnNews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ktn-news-live.webp?id=82',
    category: 'news'
  },
  {
    id: 'arooj-tv',
    name: 'Arooj TV',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/AroojTV-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/aruj-live.webp?id=68',
    category: 'entertainment'
  },
  {
    id: '24-news',
    name: '24 News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/24News-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/channel-24-live.webp?id=22',
    category: 'news'
  },
  {
    id: 'such-tv',
    name: 'Such TV',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/SachTV/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/such-tv-live.webp?id=47',
    category: 'news'
  },
  {
    id: 'roze-news',
    name: 'Roze News',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/RozNews-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/roze-news-live.webp?id=84',
    category: 'news'
  },
  {
    id: 'play-tv',
    name: 'Play TV',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/play-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/play-tv-live.webp?id=99',
    category: 'entertainment'
  },
  {
    id: 'aaj-entertainment',
    name: 'Aaj Entertainment',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/AajEntertainment-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/aaj-entertainment-live.webp?id=86',
    category: 'entertainment'
  },
  {
    id: 'discover-pakistan',
    name: 'Discover Pakistan',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/DiscoveryPakistan-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/discover-pakistan-live-logo.webp?id=67',
    category: 'entertainment'
  },
  {
    id: 'lahore-rang',
    name: 'Lahore Rang',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/LahoreRung-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/lahore-rang-logo.webp?id=57',
    category: 'entertainment'
  },
  {
    id: 'news-one',
    name: 'News One',
    streamUrl: 'https://cdn07isb.tamashaweb.com:8087/jazzauth/NewsOne-abr/playlist.m3u8',
    logoUrl: 'https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/news-one-live.webp?id=96',
    category: 'news'
  },
];
