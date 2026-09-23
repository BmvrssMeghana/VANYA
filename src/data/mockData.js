export const CATEGORIES = [
  {
    id: "art-and-crafts",
    title: "Art & Crafts",
    subtitle: "Dolls & Bamboo Baskets",
    description: "Carved from sacred wood and woven forest cane. Includes Kondapalli dolls & bamboo weaves.",
    image: "https://i.pinimg.com/1200x/b4/ce/db/b4cedb126adfe127e3864a7a942018fd.jpg",
    count: 340,
    tags: "Kondapalli • Bamboo • Dhokra"
  },
  {
    id: "clothing-and-apparel",
    title: "Clothing",
    subtitle: "Handcrafted Sarees",
    description: "Handwoven drape dyed in natural indigo and madder root. Genuine Kalamkari & Maheshwari silks.",
    image: "https://i.pinimg.com/736x/40/0d/fc/400dfcc9d06522f9fa1e9fe6deac9cfc.jpg",
    count: 480,
    tags: "Kalamkari • Maheshwari • Pashmina"
  },
  {
    id: "kitchen-and-dining",
    title: "Kitchen & Dining",
    subtitle: "Pottery & Ceramics",
    description: "Earthy tableware cured with woodsmoke and clay. Longpi black pottery & red clay cookware.",
    image: "https://i.pinimg.com/736x/3e/9c/78/3e9c78c3fc379fe57cc0077f0ea34e57.jpg",
    count: 210,
    tags: "Longpi • Terracotta • Blue Pottery"
  },
  {
    id: "religious-items",
    title: "Religious Items",
    subtitle: "Diyas & Idols",
    description: "Devotional keepsakes cast in ancestral sand-moulds. Hand-beaten brass diyas & terracotta idols.",
    image: "https://i.pinimg.com/736x/9c/a4/e7/9ca4e781364961ba353c8dc6860608ea.jpg",
    count: 190,
    tags: "Brass Diyas • Sacred Idols • Akhand Jyot"
  }
];

export const PRODUCTS = [
  {
    id: 101,
    name: "Jaipur Hand-Painted Blue Pottery Serving Bowl",
    category: "kitchen-and-dining",
    categoryName: "Kitchen & Dining",
    artisan: "Ramprasad Prajapat",
    location: "Jaipur, Rajasthan",
    price: 1450,
    priceFormatted: "₹1,450",
    rating: 4.9,
    reviews: 84,
    giVerified: true,
    inStock: 4,
    image: "https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg",
    description: "Crafted from quartz clay and hand-painted with cobalt oxide floral arabesques. Lead-free glaze certified food-safe for modern dining.",
    specs: {
      "Material": "Quartz Clay & Natural Cobalt Oxide",
      "Craft Type": "Jaipur Blue Pottery (GI Tagged)",
      "Artisan Time": "14 Crafting Hours",
      "Dimensions": "8.5 inch diameter × 3.2 inch depth"
    }
  },
  {
    id: 102,
    name: "Kondapalli Wooden Bullock Cart Doll",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Ramesh Kumar",
    location: "Kondapalli, Andhra Pradesh",
    price: 1850,
    priceFormatted: "₹1,850",
    rating: 4.8,
    reviews: 42,
    giVerified: true,
    inStock: 6,
    image: "https://i.pinimg.com/1200x/e4/d9/4c/e4d94c25276591f97b54926b32514335.jpg",
    description: "Hand-carved from softwood (Tella Poniki) and colored with vegetable dyes and tamarind seed lacquer.",
    specs: {
      "Material": "Tella Poniki Wood & Natural Dyes",
      "Craft Type": "Kondapalli Bommalu (GI Tagged)",
      "Artisan Time": "18 Hours",
      "Dimensions": "10 × 5 × 6 inches"
    }
  },
  {
    id: 103,
    name: "Handwoven Srikakulam Kalamkari Silk Saree",
    category: "clothing-and-apparel",
    categoryName: "Clothing",
    artisan: "Govindappa Weavers",
    location: "Srikakulam, Andhra Pradesh",
    price: 6400,
    priceFormatted: "₹6,400",
    rating: 5.0,
    reviews: 29,
    giVerified: true,
    inStock: 2,
    image: "https://i.pinimg.com/736x/27/63/0b/27630be79e4129133916e849830243ae.jpg",
    description: "Intricate Tree of Life mythological panel drawn with bamboo pen (kalam) using vegetable indigo and madder root dyes.",
    specs: {
      "Material": "Pure Mulberry Silk & Organic Pigments",
      "Craft Type": "Pen Kalamkari (GI Certified)",
      "Artisan Time": "21 Days",
      "Dimensions": "6.3 meters with blouse piece"
    }
  },
  {
    id: 104,
    name: "Terracotta Hand-Carved Diya Set (Pack of 6)",
    category: "religious-items",
    categoryName: "Religious Items",
    artisan: "Savitri Devi",
    location: "Nizamabad, Telangana",
    price: 650,
    priceFormatted: "₹650",
    rating: 4.9,
    reviews: 110,
    giVerified: true,
    inStock: 15,
    image: "https://i.pinimg.com/1200x/56/3b/48/563b488cd803c2755d06764c2a8b9466.jpg",
    description: "Unglazed red clay diyas carved with delicate lotus petals, fired in open pit kilns for festive oil lighting.",
    specs: {
      "Material": "Riverbed Clay & Mica Dust",
      "Craft Type": "Telangana Clay Craft",
      "Artisan Time": "6 Hours",
      "Dimensions": "3.5 inches each"
    }
  },
  {
    id: 105,
    name: "Channapatna Lacquerware Toy Play Set",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Syed Noor",
    location: "Channapatna, Karnataka",
    price: 980,
    priceFormatted: "₹980",
    rating: 4.7,
    reviews: 58,
    giVerified: true,
    inStock: 8,
    image: "https://i.pinimg.com/1200x/63/4b/bb/634bbb204ce5ed132f9449e7198ed59c.jpg",
    description: "Turned on traditional wood lathes using ivory-wood and burnished with turmeric and indigo non-toxic resin glazes.",
    specs: {
      "Material": "Wrightia Tinctoria Wood",
      "Craft Type": "Channapatna Lacquerware",
      "Artisan Time": "8 Hours",
      "Dimensions": "Various shapes (Kid Safe)"
    }
  },
  {
    id: 106,
    name: "Dhokra Lost-Wax Bronze Tribal Idol",
    category: "religious-items",
    categoryName: "Religious Items",
    artisan: "Budhram Baghel",
    location: "Bastar, Chhattisgarh",
    price: 2900,
    priceFormatted: "₹2,900",
    rating: 5.0,
    reviews: 19,
    giVerified: true,
    inStock: 1,
    image: "https://i.pinimg.com/1200x/6d/4e/6b/6d4e6bbf1989df5b7f20d91ba174163f.jpg",
    description: "4,000-year-old metallurgical technique using beeswax threads and clay molds to cast one-of-a-kind solid bronze idols.",
    specs: {
      "Material": "Bell Metal Bronze",
      "Craft Type": "Dokra Lost-Wax Casting",
      "Artisan Time": "12 Days",
      "Dimensions": "7 × 4 inches"
    }
  },
  {
    id: 107,
    name: "Pochampally Ikat Handwoven Cotton Saree",
    category: "clothing-and-apparel",
    categoryName: "Clothing",
    artisan: "Lakshmi Devi",
    location: "Pochampally, Telangana",
    price: 3850,
    priceFormatted: "₹3,850",
    rating: 4.8,
    reviews: 67,
    giVerified: true,
    inStock: 3,
    image: "https://i.pinimg.com/1200x/39/0b/13/390b13b20eac500aea42943a9ff5fb8c.jpg",
    description: "Handwoven Ikat saree featuring geometric patterns created through resist-dyeing and traditional weaving techniques.",
    specs: {
      "Material": "Handwoven Cotton",
      "Craft Type": "Pochampally Ikat (GI Tagged)",
      "Artisan Time": "7 Days",
      "Dimensions": "6.2 meters with blouse piece"
    }
  },

  {
    id: 108,
    name: "Srikalahasti Kalamkari Hand-Painted Cotton Dupatta",
    category: "clothing-and-apparel",
    categoryName: "Clothing",
    artisan: "Anitha Reddy",
    location: "Srikalahasti, Andhra Pradesh",
    price: 2200,
    priceFormatted: "₹2,200",
    rating: 4.9,
    reviews: 51,
    giVerified: true,
    inStock: 5,
    image: "https://i.pinimg.com/736x/ef/1a/ea/ef1aeaee16d0559abb92327359ea3346.jpg",
    description: "Hand-painted cotton textile featuring traditional Kalamkari motifs created using a kalam and natural-style pigment techniques.",
    specs: {
      "Material": "Handwoven Cotton",
      "Craft Type": "Srikalahasti Kalamkari (GI Tagged)",
      "Artisan Time": "5 Days",
      "Dimensions": "2.5 meters"
    }
  },

  {
    id: 109,
    name: "Madhubani Mithila Folk Art Painting",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Sunita Jha",
    location: "Madhubani, Bihar",
    price: 3200,
    priceFormatted: "₹3,200",
    rating: 4.9,
    reviews: 73,
    giVerified: true,
    inStock: 4,
    image: "https://i.pinimg.com/736x/ef/1a/ea/ef1aeaee16d0559abb92327359ea3346.jpg",
    description: "Hand-painted folk artwork featuring traditional Mithila motifs, fine line work, and vibrant storytelling elements.",
    specs: {
      "Material": "Handmade Paper & Natural Pigments",
      "Craft Type": "Madhubani Painting (GI Tagged)",
      "Artisan Time": "4 Days",
      "Dimensions": "18 × 24 inches"
    }
  },

  {
    id: 110,
    name: "Bidriware Handcrafted Silver Inlay Vase",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Mohammed Irfan",
    location: "Bidar, Karnataka",
    price: 4800,
    priceFormatted: "₹4,800",
    rating: 4.8,
    reviews: 36,
    giVerified: true,
    inStock: 2,
    image: "https://i.pinimg.com/736x/ff/05/53/ff0553e68e50d4e25a6bdea30d19dac0.jpg",
    description: "Handcrafted Bidri metal vase decorated with intricate silver inlay patterns and a darkened metallic finish.",
    specs: {
      "Material": "Bidri Metal & Silver Inlay",
      "Craft Type": "Bidriware (GI Tagged)",
      "Artisan Time": "6 Days",
      "Dimensions": "8 × 4 inches"
    }
  },

  {
    id: 111,
    name: "Thanjavur Traditional Krishna Painting",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Meenakshi Srinivasan",
    location: "Thanjavur, Tamil Nadu",
    price: 7500,
    priceFormatted: "₹7,500",
    rating: 5.0,
    reviews: 28,
    giVerified: true,
    inStock: 2,
    image: "https://i.pinimg.com/736x/81/7c/77/817c77d1a8fa31669e9edc1709fe6337.jpg",
    description: "Traditional devotional artwork featuring a richly ornamented Krishna composition with detailed decorative elements.",
    specs: {
      "Material": "Wooden Panel, Gold Foil & Natural Pigments",
      "Craft Type": "Thanjavur Painting (GI Tagged)",
      "Artisan Time": "14 Days",
      "Dimensions": "24 × 30 inches"
    }
  },

  {
    id: 112,
    name: "Kancheepuram Handwoven Silk Saree",
    category: "clothing-and-apparel",
    categoryName: "Clothing",
    artisan: "Vijayalakshmi Weavers",
    location: "Kanchipuram, Tamil Nadu",
    price: 12500,
    priceFormatted: "₹12,500",
    rating: 4.9,
    reviews: 44,
    giVerified: true,
    inStock: 2,
    image: "https://i.pinimg.com/736x/64/fe/75/64fe75532edcb58168f6121c9963eb97.jpg",
    description: "Handwoven silk saree featuring traditional contrasting borders and detailed woven motifs.",
    specs: {
      "Material": "Pure Silk",
      "Craft Type": "Kancheepuram Silk (GI Tagged)",
      "Artisan Time": "18 Days",
      "Dimensions": "6.3 meters with blouse piece"
    }
  },

  {
    id: 113,
    name: "Chanderi Handwoven Silk Cotton Saree",
    category: "clothing-and-apparel",
    categoryName: "Clothing",
    artisan: "Rajendra Singh",
    location: "Chanderi, Madhya Pradesh",
    price: 5800,
    priceFormatted: "₹5,800",
    rating: 4.8,
    reviews: 39,
    giVerified: true,
    inStock: 4,
    image: "https://i.pinimg.com/1200x/99/eb/8c/99eb8cde35bfd55f239687580130550a.jpg",
    description: "Lightweight handwoven saree combining traditional Chanderi weaving with delicate motifs and a fine texture.",
    specs: {
      "Material": "Silk Cotton",
      "Craft Type": "Chanderi Saree (GI Tagged)",
      "Artisan Time": "10 Days",
      "Dimensions": "6.2 meters with blouse piece"
    }
  },

  {
    id: 114,
    name: "Kota Doria Handwoven Cotton Saree",
    category: "clothing-and-apparel",
    categoryName: "Clothing",
    artisan: "Kamla Devi",
    location: "Kota, Rajasthan",
    price: 2900,
    priceFormatted: "₹2,900",
    rating: 4.7,
    reviews: 62,
    giVerified: true,
    inStock: 6,
    image: "https://i.pinimg.com/736x/48/bb/7b/48bb7b67a4177a01d5d5b09324b45b95.jpg",
    description: "Lightweight handwoven saree characterized by its fine checkered weave and airy texture.",
    specs: {
      "Material": "Cotton Silk",
      "Craft Type": "Kota Doria (GI Tagged)",
      "Artisan Time": "6 Days",
      "Dimensions": "6.2 meters with blouse piece"
    }
  },

  {
    id: 115,
    name: "Channapatna Hand-Turned Wooden Elephant",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Abdul Rahman",
    location: "Channapatna, Karnataka",
    price: 850,
    priceFormatted: "₹850",
    rating: 4.8,
    reviews: 91,
    giVerified: true,
    inStock: 9,
    image: "https://i.pinimg.com/1200x/7c/89/78/7c897886895882174f5540f007dba183.jpg",
    description: "Hand-turned wooden elephant finished with vibrant lacquer using the traditional Channapatna turning technique.",
    specs: {
      "Material": "Soft Wood & Natural Lacquer",
      "Craft Type": "Channapatna Toys & Dolls (GI Tagged)",
      "Artisan Time": "5 Hours",
      "Dimensions": "5 × 2 × 4 inches"
    }
  },

  {
    id: 116,
    name: "Kondapalli Painted Village Scene",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Srinivas Rao",
    location: "Kondapalli, Andhra Pradesh",
    price: 2400,
    priceFormatted: "₹2,400",
    rating: 4.9,
    reviews: 31,
    giVerified: true,
    inStock: 3,
    image: "https://i.pinimg.com/1200x/7c/89/78/7c897886895882174f5540f007dba183.jpg",
    description: "Hand-carved and painted wooden miniature depicting a traditional village scene using lightweight softwood.",
    specs: {
      "Material": "Tella Poniki Wood & Natural Dyes",
      "Craft Type": "Kondapalli Bommallu (GI Tagged)",
      "Artisan Time": "12 Hours",
      "Dimensions": "9 × 6 × 5 inches"
    }
  },

  {
    id: 117,
    name: "Etikoppaka Lacquerware Wooden Bowl",
    category: "kitchen-and-dining",
    categoryName: "Kitchen & Dining",
    artisan: "Nageswara Rao",
    location: "Etikoppaka, Andhra Pradesh",
    price: 1250,
    priceFormatted: "₹1,250",
    rating: 4.8,
    reviews: 48,
    giVerified: false,
    inStock: 7,
    image: "https://i.pinimg.com/736x/64/fe/75/64fe75532edcb58168f6121c9963eb97.jpg",
    description: "Hand-turned wooden bowl finished with traditional lacquer techniques and natural-inspired colors.",
    specs: {
      "Material": "Soft Wood & Natural Lacquer",
      "Craft Type": "Etikoppaka Lacquerware",
      "Artisan Time": "7 Hours",
      "Dimensions": "7 inch diameter × 3 inch height"
    }
  },

  {
    id: 118,
    name: "Handwoven Bamboo Storage Basket",
    category: "kitchen-and-dining",
    categoryName: "Kitchen & Dining",
    artisan: "Maya Devi",
    location: "Assam",
    price: 950,
    priceFormatted: "₹950",
    rating: 4.7,
    reviews: 55,
    giVerified: false,
    inStock: 10,
    image: "https://i.pinimg.com/1200x/99/eb/8c/99eb8cde35bfd55f239687580130550a.jpg",
    description: "Handwoven bamboo basket designed for everyday storage and home organization.",
    specs: {
      "Material": "Natural Bamboo",
      "Craft Type": "Bamboo Weaving",
      "Artisan Time": "6 Hours",
      "Dimensions": "12 × 10 × 8 inches"
    }
  },

  {
    id: 119,
    name: "Handcrafted Terracotta Decorative Horse",
    category: "art-and-crafts",
    categoryName: "Art & Crafts",
    artisan: "Gopal Das",
    location: "Bankura, West Bengal",
    price: 1800,
    priceFormatted: "₹1,800",
    rating: 4.9,
    reviews: 77,
    giVerified: false,
    inStock: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg78qPh84EYkYlpyRV5gtDP3RRxsHcVC9bpWiOGcGOb4Jxe2rUdlDqvxXY&s=10",
    description: "Hand-shaped terracotta horse inspired by traditional folk sculpture and decorative craft traditions.",
    specs: {
      "Material": "Natural Terracotta Clay",
      "Craft Type": "Terracotta Folk Craft",
      "Artisan Time": "2 Days",
      "Dimensions": "12 × 4 × 10 inches"
    }
  },

  {
    id: 120,
    name: "Handcrafted Sikki Grass Storage Basket",
    category: "kitchen-and-dining",
    categoryName: "Kitchen & Dining",
    artisan: "Rekha Kumari",
    location: "Madhubani, Bihar",
    price: 780,
    priceFormatted: "₹780",
    rating: 4.8,
    reviews: 46,
    giVerified: false,
    inStock: 8,
    image: "https://i.pinimg.com/1200x/7c/89/78/7c897886895882174f5540f007dba183.jpg",
    description: "Handwoven storage basket made from natural Sikki grass with traditional geometric detailing.",
    specs: {
      "Material": "Sikki Grass",
      "Craft Type": "Sikki Grass Craft",
      "Artisan Time": "5 Hours",
      "Dimensions": "10 inch diameter × 6 inch height"
    }
  }
];

export const ARTISANS = [
  {
    id: 1,
    name: "Ramprasad Prajapat",
    craft: "Jaipur Blue Pottery",
    location: "Jaipur, Rajasthan",
    rating: 4.9,
    verified: true,
    image: "https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
    story: "5th Generation master potter preserving 400-year-old lead-free quartz terracotta cookware and floral serving pottery."
  },
  {
    id: 2,
    name: "Savitri Devi",
    craft: "Smoked Black Pottery",
    location: "Nizamabad, Telangana",
    rating: 4.9,
    verified: true,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    story: "38 years dedicated to woodsmoke low-fire blackening of clay pots using organic rice husk reduction."
  },
  {
    id: 3,
    name: "Lakshmi Rao",
    craft: "Kondapalli Woodcraft",
    location: "Kondapalli, Andhra Pradesh",
    rating: 4.8,
    verified: true,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80",
    story: "Third-generation woodcraft artisan creating traditional Kondapalli Bommalu using locally sourced softwood and natural colors."
  },
  {
    id: 4,
    name: "Meenakshi Devi",
    craft: "Handwoven Sarees",
    location: "Pochampally, Telangana",
    rating: 4.9,
    verified: true,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=300&q=80",
    story: "Master weaver specializing in traditional geometric ikat patterns, preserving family weaving techniques passed down through generations."
  },
  {
    id: 5,
    name: "Anita Kumari",
    craft: "Bamboo Weaving",
    location: "Srikakulam, Andhra Pradesh",
    rating: 4.8,
    verified: true,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=300&q=80",
    story: "Skilled bamboo artisan crafting sustainable baskets, storage pieces and household utilities using traditional hand-weaving methods."
  },
  {
    id: 6,
    name: "Mallikarjun Hegde",
    craft: "Channapatna Woodcraft",
    location: "Channapatna, Karnataka",
    rating: 4.9,
    verified: true,
    image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=300&q=80",
    story: "Traditional woodturner creating brightly finished Channapatna toys while continuing a family legacy of lacquerware craftsmanship."
  },
  {
    id: 7,
    name: "Rukmini Bai",
    craft: "Terracotta Craft",
    location: "Bankura, West Bengal",
    rating: 4.7,
    verified: true,
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=300&q=80",
    story: "Terracotta artisan creating handcrafted figurines and decorative pieces inspired by regional folk traditions and village life."
  },
  {
    id: 8,
    name: "Devendra Singh",
    craft: "Dhokra Metal Craft",
    location: "Bastar, Chhattisgarh",
    rating: 4.9,
    verified: true,
    image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=300&q=80",
    story: "Dhokra craftsman working with traditional lost-wax casting techniques to create distinctive tribal-inspired brass and bell-metal artwork."
  },
  {
    id: 9,
    name: "Padma Narayan",
    craft: "Handmade Ceramics",
    location: "Khurja, Uttar Pradesh",
    rating: 4.8,
    verified: true,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=300&q=80",
    story: "Ceramic artisan producing functional tableware and decorative pottery with hand-painted motifs inspired by Indian folk art."
  },
  {
    id: 10,
    name: "Shanta Devi",
    craft: "Traditional Doll Making",
    location: "Thanjavur, Tamil Nadu",
    rating: 4.8,
    verified: true,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=300&q=80",
    story: "Traditional doll maker creating expressive handcrafted figures using locally sourced materials and techniques learned within her family."
  }
];

export const BUYERS = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@vanya.demo",
    password: "Aarav@123",
    phone: "+91 98765 43210",
    location: "Hyderabad, Telangana",
    interests: ["Pottery", "Ceramics", "Art & Crafts"],
    preferredLanguage: "English"
  },
  {
    id: 2,
    name: "Ananya Reddy",
    email: "ananya.reddy@vanya.demo",
    password: "Ananya@123",
    phone: "+91 98765 43211",
    location: "Bengaluru, Karnataka",
    interests: ["Sarees", "Clothing", "Handloom"],
    preferredLanguage: "Telugu"
  },
  {
    id: 3,
    name: "Vikram Mehta",
    email: "vikram.mehta@vanya.demo",
    password: "Vikram@123",
    phone: "+91 98765 43212",
    location: "Mumbai, Maharashtra",
    interests: ["Bamboo Baskets", "Art & Crafts"],
    preferredLanguage: "English"
  },
  {
    id: 4,
    name: "Kavya Rao",
    email: "kavya.rao@vanya.demo",
    password: "Kavya@123",
    phone: "+91 98765 43213",
    location: "Vijayawada, Andhra Pradesh",
    interests: ["Dolls", "Pottery", "Religious Items"],
    preferredLanguage: "Telugu"
  },
  {
    id: 5,
    name: "Rohan Gupta",
    email: "rohan.gupta@vanya.demo",
    password: "Rohan@123",
    phone: "+91 98765 43214",
    location: "Delhi, Delhi",
    interests: ["Ceramics", "Pottery", "Art & Crafts"],
    preferredLanguage: "Hindi"
  },
  {
    id: 6,
    name: "Sahana Krishnan",
    email: "sahana.krishnan@vanya.demo",
    password: "Sahana@123",
    phone: "+91 98765 43215",
    location: "Mysuru, Karnataka",
    interests: ["Sarees", "Handloom", "Dolls"],
    preferredLanguage: "Kannada"
  },
  {
    id: 7,
    name: "Aditya Verma",
    email: "aditya.verma@vanya.demo",
    password: "Aditya@123",
    phone: "+91 98765 43216",
    location: "Pune, Maharashtra",
    interests: ["Bamboo Baskets", "Ceramics", "Kitchen & Dining"],
    preferredLanguage: "English"
  },
  {
    id: 8,
    name: "Neha Iyer",
    email: "neha.iyer@vanya.demo",
    password: "Neha@123",
    phone: "+91 98765 43217",
    location: "Chennai, Tamil Nadu",
    interests: ["Religious Items", "Dolls", "Art & Crafts"],
    preferredLanguage: "English"
  },
  {
    id: 9,
    name: "Harshitha Rao",
    email: "harshitha.rao@vanya.demo",
    password: "Harshitha@123",
    phone: "+91 98765 43218",
    location: "Warangal, Telangana",
    interests: ["Pottery", "Sarees", "Bamboo Baskets"],
    preferredLanguage: "Telugu"
  },
  {
    id: 10,
    name: "Manoj Kumar",
    email: "manoj.kumar@vanya.demo",
    password: "Manoj@123",
    phone: "+91 98765 43219",
    location: "Lucknow, Uttar Pradesh",
    interests: ["Dhokra", "Religious Items", "Art & Crafts"],
    preferredLanguage: "Hindi"
  }
];
