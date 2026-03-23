export const SITE = {
  name: "Sanhao London",
  tagline: "Authentic Chinese Ramen",
  subtitle: "Authentic Chinese Ramen in London's Chinatown",
  address: "3 Gerrard St, London W1D 5PD",
  phone: "02074342899",
  email: "info@sanhaolondon.com",
  hours: {
    weekday: "Monday to Thursday: 12:00 PM – 10:00 PM",
    weekend: "Friday to Sunday: 12:00 PM – 11:00 PM",
  },
  copyright: "\u00A9 2025 Sanhao London. All rights reserved.",
  followUs:
    "Stay connected and be the first to know about our latest dishes, seasonal specials, and exclusive promotions!",
  closingLine:
    "Experience the soul-warming delight of Chinese ramen at Sanhao London, where tradition meets taste in every bowl. We can\u2019t wait to welcome you to our table and share the love of ramen with you!",
} as const;

export const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Our Noodles", href: "#noodles" },
  { label: "Choose Us", href: "#standard" },
  { label: "Visit Us", href: "#contact" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const OUR_STORY = {
  heading: "About Us",
  paragraphs: [
    "Nestled in the heart of London\u2019s vibrant and bustling Chinatown, Sanhao London is your ultimate destination for experiencing the rich, authentic flavours of Chinese ramen. With a deep passion for bringing the taste of traditional Chinese cuisine to life, we pride ourselves on crafting delicious, comforting bowls of noodle soup using only the freshest ingredients. Our mission is to deliver an unforgettable dining experience that celebrates the unique and diverse culinary heritage of China.",
    "Whether you\u2019re craving a hearty bowl of our classic beef noodle soup, a fragrant and spicy Sichuan-inspired broth, or a lighter vegetarian option, our extensive menu is designed to cater to a wide range of tastes and preferences. At Sanhao London, every bowl is a story, a journey through the vibrant regions of China.",
  ],
  cta: "Learn More \u2192",
} as const;

export const OUR_NOODLES = {
  heading: "Our Noodles",
  body: "At Sanhao London, we believe that noodles are the soul of every ramen dish. That\u2019s why our noodles are made fresh in-house every day using traditional techniques. This dedication to quality ensures that every strand is perfectly chewy, with a rich and satisfying taste that elevates every bowl of ramen we serve. Our noodles are the result of generations of culinary expertise, bringing you an authentic taste of China in every bite.",
} as const;

export const ATMOSPHERE_IMAGES = [
  { id: 1, span: "md:col-span-2 md:row-span-2", aspect: "aspect-[4/5]" },
  { id: 2, span: "", aspect: "aspect-square" },
  { id: 3, span: "", aspect: "aspect-square" },
  { id: 4, span: "md:col-span-2", aspect: "aspect-[16/9]" },
  { id: 5, span: "", aspect: "aspect-[3/4]" },
  { id: 6, span: "md:col-span-3", aspect: "aspect-[21/9]" },
] as const;

export const MENU_HIGHLIGHTS = [
  {
    name: "Signature Ramen",
    description:
      "Explore our selection of aromatic broths, including rich and creamy pork bone, bold and spicy sesame, or the umami-packed soy-based soups. Each bowl is topped with handmade noodles, tender proteins, and an array of fresh vegetables.",
  },
  {
    name: "Artisan Appetisers",
    description:
      "Begin your meal with our delicious small plates, such as crispy golden spring rolls, juicy pan-fried dumplings, or our chef\u2019s special pickled cucumber salad that offers a refreshing burst of flavour.",
  },
  {
    name: "Vegetarian Options",
    description:
      "An assortment of vegetarian ramen bowls and appetisers that highlight the vibrant and wholesome flavours of fresh, seasonal ingredients, thoughtfully crafted to be just as satisfying as our traditional offerings.",
  },
  {
    name: "House Desserts",
    description:
      "Conclude your meal on a sweet note with our indulgent house-made desserts, including delightful mochi in assorted flavours and our silky jasmine tea pudding.",
  },
  {
    name: "House Specials",
    description:
      "Our chef\u2019s curated selection of signature Sanhao creations, featuring premium Chinese ingredients and traditional preparations.",
  },
] as const;

export const SANHAO_STANDARD = [
  {
    icon: "ChefHat" as const,
    title: "Authenticity",
    description:
      "Our recipes are deeply rooted in traditional Chinese cooking methods, offering you a genuine taste of China\u2019s culinary diversity.",
  },
  {
    icon: "Leaf" as const,
    title: "Fresh Ingredients",
    description:
      "We source the finest, freshest ingredients to ensure every bowl is bursting with natural flavour and goodness.",
  },
  {
    icon: "Flame" as const,
    title: "Warm Atmosphere",
    description:
      "Our restaurant is designed to be a cosy and welcoming space, where you can relax and enjoy your meal amidst the lively energy of Chinatown.",
  },
  {
    icon: "Heart" as const,
    title: "Exceptional Service",
    description:
      "Our friendly and attentive staff are here to make your dining experience seamless and memorable.",
  },
] as const;

export const VISIT_US = {
  body: "Conveniently located on 3 Gerrard St, London W1D 5PD, Sanhao London is the ideal spot for a casual lunch, a warm dinner with family and friends, or even a late-night ramen craving after exploring the vibrant streets of Chinatown. Come and experience the heartwarming flavours of Chinese ramen, served with a side of hospitality and care.",
} as const;
