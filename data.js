// VANYA — Seed Data Module
// All product, artisan, and content data for the marketplace

const VANYA_DATA = {

  // ─── ARTISANS ───────────────────────────────────────────────────────────────
  artisans: [
    {
      id: "a1",
      name: "Ravi Kumar",
      location: "Warangal, Telangana",
      state: "Telangana",
      craftType: "Pottery & Ceramics",
      verified: true,
      bio: "Third-generation potter from Warangal, Ravi breathes life into terracotta using ancient Telangana techniques passed down through his family.",
      story: "My grandfather built this wheel. My father shaped his first pot on it at age seven. I did too. Every piece I make carries three generations of memory.",
      experience: 22,
      avatar: null,
      rating: 4.9,
      totalSales: 312,
      products: 24
    },
    {
      id: "a2",
      name: "Lakshmi Devi",
      location: "Srikakulam, Andhra Pradesh",
      state: "Andhra Pradesh",
      craftType: "Handloom Sarees",
      verified: true,
      bio: "Lakshmi weaves Kalamkari stories into silk using natural vegetable dyes, a tradition that has defined her village for four centuries.",
      story: "Each saree takes between 15 and 45 days. My hands know the pattern before my eyes do. I weave what my mother taught me and what her mother taught her.",
      experience: 18,
      avatar: null,
      rating: 4.8,
      totalSales: 187,
      products: 16
    },
    {
      id: "a3",
      name: "Meera Bai",
      location: "Jaipur, Rajasthan",
      state: "Rajasthan",
      craftType: "Blue Pottery & Ceramics",
      verified: true,
      bio: "Meera creates Jaipur's signature blue pottery using Persian-influenced techniques blended with Rajasthani motifs, entirely by hand.",
      story: "Blue pottery came to Jaipur through Persian craftsmen centuries ago. My family adopted it and made it our own. Each piece is my letter to that history.",
      experience: 15,
      avatar: null,
      rating: 4.7,
      totalSales: 253,
      products: 31
    },
    {
      id: "a4",
      name: "Suresh Rao",
      location: "Channapatna, Karnataka",
      state: "Karnataka",
      craftType: "Wooden Dolls & Toys",
      verified: true,
      bio: "Suresh crafts Channapatna lacquerware toys using rosewood and non-toxic natural dyes — a GI-tagged craft beloved across India.",
      story: "Tipu Sultan's craftsmen started this tradition. We've kept it alive for over 200 years. Every toy is made from the same rosewood forests our ancestors used.",
      experience: 28,
      avatar: null,
      rating: 4.9,
      totalSales: 445,
      products: 38
    },
    {
      id: "a5",
      name: "Fatima Bi",
      location: "Kutch, Gujarat",
      state: "Gujarat",
      craftType: "Bamboo & Cane Baskets",
      verified: true,
      bio: "Fatima weaves functional art from bamboo and cane using Kutchi tribal patterns that tell stories of the Rann's seasons.",
      story: "Our baskets are woven during monsoon when bamboo is supple. The patterns on each basket tell which season it was made in. You can read our weather in them.",
      experience: 20,
      avatar: null,
      rating: 4.6,
      totalSales: 198,
      products: 22
    },
    {
      id: "a6",
      name: "Ganesh Prasad",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      craftType: "Religious Crafts & Diyas",
      verified: true,
      bio: "From the ghats of Varanasi, Ganesh crafts diyas and idols that carry the spiritual energy of the city's ancient traditions.",
      story: "Every diya I shape is shaped on the same ghats where they'll eventually float. Making them here, with this sacred clay — that's the whole prayer.",
      experience: 35,
      avatar: null,
      rating: 4.9,
      totalSales: 678,
      products: 47
    }
  ],

  // ─── PRODUCTS ───────────────────────────────────────────────────────────────
  products: [

    // === KITCHEN & DINING — POTTERY ===
    {
      id: "p1",
      title: {
        en: "Hand-Painted Terracotta Pot",
        hi: "हाथ से बनाया टेराकोटा बर्तन",
        te: "చేతితో వేసిన టెర్రకోట కుండ",
        kn: "ಕೈಯಿಂದ ಚಿತ್ರಿಸಿದ ಮಡಕೆ"
      },
      description: {
        en: "A beautifully hand-painted terracotta pot crafted in Warangal, featuring traditional Telangana geometric patterns in earthy ochre and white. Each pot is wheel-thrown and painted individually — no two are alike. Perfect for indoor plants, decor, or as a statement piece.",
        hi: "वारंगल में बना एक खूबसूरत हाथ से पेंट किया गया टेराकोटा बर्तन, जिसमें तेलंगाना के पारंपरिक ज्यामितीय पैटर्न हैं।",
        te: "వారంగల్‌లో తయారు చేయబడిన అందమైన టెర్రకోట కుండ, తెలంగాణ సాంప్రదాయ జ్యామితీయ నమూనాలతో.",
        kn: "ವಾರಂಗಲ್‌ನಲ್ಲಿ ತಯಾರಾದ ಸುಂದರ ಟೆರ್ರಕೋಟ ಮಡಕೆ, ತೆಲಂಗಾಣದ ಸಾಂಪ್ರದಾಯಿಕ ನಮೂನೆಗಳೊಂದಿಗೆ."
      },
      category: "Kitchen & Dining",
      subcategory: "Pottery",
      price: 1850,
      artisanId: "a1",
      location: "Warangal, Telangana",
      state: "Telangana",
      material: "Terracotta",
      color: "Earth Brown & White",
      dimensions: "12 × 12 × 18 cm",
      weight: "1.2 kg",
      capacity: "2 litres",
      craftTechnique: "Wheel-thrown, hand-painted",
      culturalStory: "The geometric patterns are a Telangana signature — the same motifs appear in ancient Kakatiya temple walls.",
      careInstructions: "Wipe gently with a dry cloth. Avoid prolonged water exposure.",
      verified: true,
      views: 2847,
      wishlistCount: 312,
      salesCount: 45,
      rating: 4.9,
      badge: "Bestseller"
    },
    {
      id: "p2",
      title: {
        en: "Midnight Blue Ceramic Bowl",
        hi: "मिडनाइट ब्लू सिरेमिक कटोरा",
        te: "మిడ్‌నైట్ బ్లూ సెరామిక్ బౌల్",
        kn: "ಮಿಡ್‌ನೈಟ್ ಬ್ಲೂ ಸೆರಾಮಿಕ್ ಬೌಲ್"
      },
      description: {
        en: "A deep midnight blue ceramic bowl from Jaipur's legendary blue pottery tradition. Finished with intricate white floral motifs inspired by Persian designs, this bowl is both functional and an heirloom-quality piece.",
        hi: "जयपुर की प्रसिद्ध नीली मिट्टी परंपरा से एक गहरे नीले रंग का सिरेमिक कटोरा।",
        te: "జైపూర్ సాంప్రదాయ నీలి కుండీ నుండి తయారైన మిడ్‌నైట్ బ్లూ సెరామిక్ బౌల్.",
        kn: "ಜೈಪುರದ ನೀಲಿ ಮಡಿಕೆ ಸಂಪ್ರದಾಯದಿಂದ ಒಂದು ಆಳವಾದ ನೀಲಿ ಬಣ್ಣದ ಸೆರಾಮಿಕ್ ಬೌಲ್."
      },
      category: "Kitchen & Dining",
      subcategory: "Ceramics",
      price: 2200,
      artisanId: "a3",
      location: "Jaipur, Rajasthan",
      state: "Rajasthan",
      material: "Quartz, Fuller's Earth, Glass",
      color: "Midnight Blue & White",
      dimensions: "22 × 22 × 10 cm",
      weight: "0.8 kg",
      capacity: "1.5 litres",
      craftTechnique: "Traditional Jaipur blue pottery technique",
      culturalStory: "Jaipur blue pottery is a GI-tagged craft with Persian origins, brought to Rajasthan centuries ago.",
      careInstructions: "Handwash only with mild soap. Do not microwave.",
      verified: true,
      views: 1923,
      wishlistCount: 234,
      salesCount: 28,
      rating: 4.7,
      badge: "GI Tagged"
    },
    {
      id: "p3",
      title: {
        en: "Blackware Clay Cooking Pot",
        hi: "काली मिट्टी का खाना पकाने का बर्तन",
        te: "నల్ల మట్టి వంట పాత్ర",
        kn: "ಕಪ್ಪು ಮಣ್ಣಿನ ಅಡುಗೆ ಮಡಕೆ"
      },
      description: {
        en: "A traditional blackware cooking pot from Nizamabad, Telangana. Made using the ancient reduction-firing technique that gives the clay its distinctive metallic sheen. Used for centuries in Telugu kitchens.",
        hi: "निज़ामाबाद, तेलंगाना से एक पारंपरिक काली मिट्टी का खाना पकाने का बर्तन।",
        te: "నిజామాబాద్, తెలంగాణ నుండి సాంప్రదాయ నల్ల మట్టి వంట పాత్ర.",
        kn: "ನಿಜಾಮಾಬಾದ್, ತೆಲಂಗಾಣದಿಂದ ಸಾಂಪ್ರದಾಯಿಕ ಕಪ್ಪು ಮಣ್ಣಿನ ಅಡುಗೆ ಮಡಕೆ."
      },
      category: "Kitchen & Dining",
      subcategory: "Pottery",
      price: 1200,
      artisanId: "a1",
      location: "Nizamabad, Telangana",
      state: "Telangana",
      material: "Black Clay",
      color: "Metallic Black",
      dimensions: "20 × 20 × 22 cm",
      weight: "1.8 kg",
      capacity: "3 litres",
      craftTechnique: "Reduction firing",
      culturalStory: "Nizamabad's blackware tradition is 2,000 years old. The metallic sheen was achieved without any metal — purely through firing technique.",
      careInstructions: "Season with oil before first use. Handwash only.",
      verified: true,
      views: 1456,
      wishlistCount: 178,
      salesCount: 34,
      rating: 4.8,
      badge: "Traditional Craft"
    },

    // === CLOTHING — SAREES ===
    {
      id: "p4",
      title: {
        en: "Kalamkari Silk Saree — Peacock Motif",
        hi: "कलमकारी सिल्क साड़ी — मोर डिज़ाइन",
        te: "కలంకారీ సిల్క్ చీర — నెమలి నమూనా",
        kn: "ಕಲಮ್ಕಾರಿ ಸಿಲ್ಕ್ ಸೀರೆ — ನವಿಲು ನಮೂನೆ"
      },
      description: {
        en: "A hand-painted Kalamkari silk saree featuring a majestic peacock motif in deep indigo, vermillion, and turmeric yellow. Every line is drawn by hand using a bamboo pen dipped in natural vegetable dyes. Takes 21 days to complete.",
        hi: "एक हाथ से बनाई कलमकारी सिल्क साड़ी जिसमें गहरे नीले, लाल और हल्दी पीले रंग में मोर का डिज़ाइन है।",
        te: "గాఢ నీలం, ఎరుపు మరియు పసుపు రంగులలో నెమలి నమూనాతో హస్తకళా కలంకారీ సిల్క్ చీర.",
        kn: "ಆಳವಾದ ನೀಲಿ, ಕೆಂಪು ಮತ್ತು ಅರಿಶಿನ ಹಳದಿ ಬಣ್ಣಗಳಲ್ಲಿ ನವಿಲು ನಮೂನೆಯೊಂದಿಗೆ ಕೈಯಿಂದ ಬಿಡಿಸಿದ ಕಲಮ್ಕಾರಿ ಸಿಲ್ಕ್ ಸೀರೆ."
      },
      category: "Clothing",
      subcategory: "Sarees",
      price: 8500,
      artisanId: "a2",
      location: "Srikakulam, Andhra Pradesh",
      state: "Andhra Pradesh",
      material: "Handloom Silk",
      color: "Indigo, Vermillion, Turmeric Yellow",
      length: "6.3 metres",
      craftTechnique: "Hand-painted Kalamkari using bamboo pen and vegetable dyes",
      culturalStory: "Kalamkari literally means 'pen work.' For over 3,000 years, artists in Srikalahasti have told stories of gods and nature through this technique.",
      careInstructions: "Dry clean only. Store folded with a muslin cloth. Avoid direct sunlight.",
      pattern: "Peacock with floral border",
      verified: true,
      views: 4231,
      wishlistCount: 567,
      salesCount: 12,
      rating: 5.0,
      badge: "Handpainted"
    },
    {
      id: "p5",
      title: {
        en: "Ikat Weave Cotton Saree — Geometric",
        hi: "इकत वीव कॉटन साड़ी — ज्यामितीय पैटर्न",
        te: "ఇకత్ వీవ్ పత్తి చీర — జ్యామితీయ నమూనా",
        kn: "ಇಕಾಟ್ ವೀವ್ ಕಾಟನ್ ಸೀರೆ — ಜ್ಯಾಮಿತೀಯ ನಮೂನೆ"
      },
      description: {
        en: "A Pochampally Ikat cotton saree with bold geometric diamond patterns in terracotta and ivory. Woven using the resist-dyeing technique where threads are tied and dyed before weaving — creating the characteristic blurred edge.",
        hi: "पोचमपल्ली इकत कॉटन साड़ी जिसमें टेराकोटा और हाथीदांत रंग के बोल्ड ज्यामितीय हीरे के पैटर्न हैं।",
        te: "పోచంపల్లి ఇకత్ పత్తి చీర - టెర్రకోట మరియు ఐవరీ రంగులలో జ్యామితీయ వజ్రాకార నమూనాలతో.",
        kn: "ಪೋಚಂಪಲ್ಲಿ ಇಕಾಟ್ ಕಾಟನ್ ಸೀರೆ ಟೆರ್ರಕೋಟ ಮತ್ತು ಐವರಿ ಬಣ್ಣಗಳಲ್ಲಿ ಜ್ಯಾಮಿತೀಯ ನಮೂನೆಗಳೊಂದಿಗೆ."
      },
      category: "Clothing",
      subcategory: "Sarees",
      price: 4200,
      artisanId: "a2",
      location: "Hyderabad, Telangana",
      state: "Telangana",
      material: "Handloom Cotton",
      color: "Terracotta & Ivory",
      length: "5.5 metres",
      craftTechnique: "Ikat resist-dyeing and handloom weaving",
      culturalStory: "Pochampally Ikat is a GI-tagged craft from Telangana. The technique requires dyeing threads before weaving, demanding extraordinary spatial precision.",
      careInstructions: "Gentle handwash with mild soap. Dry in shade.",
      pattern: "Diamond geometric Ikat",
      verified: true,
      views: 2156,
      wishlistCount: 289,
      salesCount: 19,
      rating: 4.8,
      badge: "GI Tagged"
    },

    // === ART & CRAFTS — DOLLS ===
    {
      id: "p6",
      title: {
        en: "Kondapalli Wooden Doll Set — Royal Couple",
        hi: "कोंडापल्ली लकड़ी की गुड़िया सेट — राजकीय जोड़ा",
        te: "కొండపల్లి చెక్క బొమ్మ సెట్ — రాజ దంపతులు",
        kn: "ಕೊಂಡಪಲ್ಲಿ ಮರದ ಗೊಂಬೆ ಸೆಟ್ — ರಾಜ ಜೋಡಿ"
      },
      description: {
        en: "A pair of exquisite Kondapalli wooden dolls depicting a royal Telugu couple in traditional wedding attire. Carved from softwood (tella poniki) and painted with non-toxic natural dyes in vivid reds, golds, and greens. Each doll is hand-carved and painted — a GI-tagged craft from Krishna district.",
        hi: "कृष्णा जिले की पारंपरिक शादी की वेशभूषा में एक शाही तेलुगू जोड़े को दर्शाते कोंडापल्ली लकड़ी के गुड़िया की जोड़ी।",
        te: "కృష్ణా జిల్లా నుండి సాంప్రదాయ పెళ్ళి దుస్తులలో రాజ తెలుగు జంటను చిత్రించే కొండపల్లి చెక్క బొమ్మల జంట.",
        kn: "ಕೃಷ್ಣಾ ಜಿಲ್ಲೆಯಿಂದ ಸಾಂಪ್ರದಾಯಿಕ ಮದುವೆ ಉಡುಗೆಯಲ್ಲಿ ರಾಜ ತೆಲುಗು ದಂಪತಿಯನ್ನು ಚಿತ್ರಿಸುವ ಕೊಂಡಪಲ್ಲಿ ಮರದ ಗೊಂಬೆಗಳ ಜೋಡಿ."
      },
      category: "Art & Crafts",
      subcategory: "Dolls",
      price: 2800,
      artisanId: "a4",
      location: "Kondapalli, Andhra Pradesh",
      state: "Andhra Pradesh",
      material: "Tella Poniki Softwood",
      color: "Red, Gold, Green, White",
      height: "22 cm (each)",
      craftTechnique: "Hand-carved and painted with natural dyes",
      culturalStory: "Kondapalli toys have been crafted for over 400 years. They are GI-tagged and were historically royal gifts. The softwood allows delicate carving impossible in harder woods.",
      verified: true,
      views: 3412,
      wishlistCount: 445,
      salesCount: 31,
      rating: 4.9,
      badge: "GI Tagged"
    },
    {
      id: "p7",
      title: {
        en: "Channapatna Lacquerware Toy Set",
        hi: "चन्नपटना लाख-वर्क खिलौना सेट",
        te: "చన్నపట్న లాక్‌వేర్ బొమ్మ సెట్",
        kn: "ಚನ್ನಪಟ್ಟಣ ಲಾಕ್‌ವೇರ್ ಆಟಿಗೆ ಸೆಟ್"
      },
      description: {
        en: "A set of five Channapatna lacquerware spinning tops and rattles in the signature green, red, and yellow palette. Made from Indian rosewood and finished with natural lac — completely non-toxic and safe for children. A living tradition from Karnataka.",
        hi: "हरे, लाल और पीले रंग में चन्नपटना लाख-वर्क स्पिनिंग टॉप और झुनझुने का एक सेट।",
        te: "ఆకుపచ్చ, ఎరుపు మరియు పసుపు రంగులలో చన్నపట్న లాక్‌వేర్ స్పిన్నింగ్ టాప్‌లు మరియు గలగలలు.",
        kn: "ಹಸಿರು, ಕೆಂಪು ಮತ್ತು ಹಳದಿ ಬಣ್ಣಗಳಲ್ಲಿ ಚನ್ನಪಟ್ಟಣ ಲಾಕ್‌ವೇರ್ ಆಟಿಗೆ ಸೆಟ್."
      },
      category: "Art & Crafts",
      subcategory: "Dolls",
      price: 1600,
      artisanId: "a4",
      location: "Channapatna, Karnataka",
      state: "Karnataka",
      material: "Indian Rosewood, Natural Lac",
      color: "Green, Red, Yellow",
      height: "8–14 cm (set of 5)",
      craftTechnique: "Lathe-turned, natural lac finishing",
      culturalStory: "Channapatna toys earned the name 'Gombegala Ooru' (Town of Dolls). The lac finish is 200+ years old. Karnataka holds a GI tag for this craft.",
      verified: true,
      views: 2089,
      wishlistCount: 312,
      salesCount: 67,
      rating: 4.8,
      badge: "Child Safe"
    },

    // === ART & CRAFTS — BAMBOO ===
    {
      id: "p8",
      title: {
        en: "Kutchi Tribal Bamboo Storage Basket",
        hi: "कच्छी आदिवासी बांस का स्टोरेज बास्केट",
        te: "కచ్చి గిరిజన వెదురు నిల్వ బుట్ట",
        kn: "ಕಚ್ಛಿ ಬುಡಕಟ್ಟು ಬಿದಿರು ಸಂಗ್ರಹ ಬುಟ್ಟಿ"
      },
      description: {
        en: "A large woven bamboo storage basket from Kutch, Gujarat, featuring traditional tribal geometric patterns in natural bamboo tones with red and black accents. Strong enough to carry 15kg. Made during monsoon when bamboo is most pliable.",
        hi: "कच्छ, गुजरात से एक बड़ा बांस का स्टोरेज बास्केट जिसमें लाल और काले रंग के ज्यामितीय पैटर्न हैं।",
        te: "కచ్ఛ్, గుజరాత్ నుండి ఎరుపు మరియు నల్లని జ్యామితీయ నమూనాలతో పెద్ద వెదురు నిల్వ బుట్ట.",
        kn: "ಕಚ್ಛ್, ಗುಜರಾತ್‌ನಿಂದ ಕೆಂಪು ಮತ್ತು ಕಪ್ಪು ಜ್ಯಾಮಿತೀಯ ನಮೂನೆಗಳೊಂದಿಗೆ ದೊಡ್ಡ ಬಿದಿರು ಸಂಗ್ರಹ ಬುಟ್ಟಿ."
      },
      category: "Art & Crafts",
      subcategory: "Bamboo Baskets",
      price: 1400,
      artisanId: "a5",
      location: "Kutch, Gujarat",
      state: "Gujarat",
      material: "Natural Bamboo",
      color: "Natural Bamboo, Red, Black",
      dimensions: "35 × 35 × 28 cm",
      weight: "0.9 kg",
      capacity: "15 kg",
      craftTechnique: "Hand-woven tribal weaving",
      culturalStory: "The geometric patterns on Kutchi baskets are seasonal markers — triangles indicate monsoon weave, diamonds indicate winter.",
      verified: true,
      views: 1678,
      wishlistCount: 198,
      salesCount: 43,
      rating: 4.7,
      badge: "Handwoven"
    },
    {
      id: "p9",
      title: {
        en: "Assam Cane Fruit Basket — Natural",
        hi: "असम का बेंत फ्रूट बास्केट — प्राकृतिक",
        te: "అస్సాం కేన్ పండ్ల బుట్ట — సహజ",
        kn: "ಅಸ್ಸಾಂ ಕೇನ್ ಹಣ್ಣಿನ ಬುಟ್ಟಿ — ನೈಸರ್ಗಿಕ"
      },
      description: {
        en: "A shallow, elegantly woven cane fruit basket with an open weave pattern that allows air circulation. The natural cane colour develops a warm honey-gold patina over time. Suitable for fruits, bread, or as a decorative centrepiece.",
        hi: "एक उथला, सुंदर ढंग से बुना गया बेंत का फ्रूट बास्केट जिसमें खुले बुनाई पैटर्न हैं।",
        te: "గాలి ప్రసరణకు అనువైన బహిరంగ నేత నమూనాతో అందమైన కేన్ పండ్ల బుట్ట.",
        kn: "ಗಾಳಿ ಪ್ರಸರಣಕ್ಕಾಗಿ ತೆರೆದ ನೇಯ್ಗೆ ನಮೂನೆಯೊಂದಿಗೆ ಸುಂದರ ಕೇನ್ ಹಣ್ಣಿನ ಬುಟ್ಟಿ."
      },
      category: "Art & Crafts",
      subcategory: "Bamboo Baskets",
      price: 850,
      artisanId: "a5",
      location: "Warangal, Telangana",
      state: "Telangana",
      material: "Natural Cane",
      color: "Natural Honey",
      dimensions: "40 × 40 × 12 cm",
      weight: "0.5 kg",
      capacity: "5 kg",
      craftTechnique: "Open-weave cane basketry",
      verified: true,
      views: 987,
      wishlistCount: 134,
      salesCount: 29,
      rating: 4.6,
      badge: "Eco-Friendly"
    },

    // === RELIGIOUS ITEMS ===
    {
      id: "p10",
      title: {
        en: "Varanasi Hand-Painted Diya Set of 12",
        hi: "वाराणसी हाथ से रंगे दीया सेट — 12 नग",
        te: "వారణాసి హస్తకళా దీపాల సెట్ — 12 ముక్కలు",
        kn: "ವಾರಣಾಸಿ ಕೈಯಿಂದ ಚಿತ್ರಿಸಿದ ದೀಪಗಳ ಸೆಟ್ — 12"
      },
      description: {
        en: "A set of 12 hand-painted clay diyas from Varanasi, each decorated with gold and red patterns inspired by Ganga aarti rituals. Made from Ganga sacred clay, these diyas are traditionally used during Diwali and Kartik Puja. Each diya is unique.",
        hi: "वाराणसी से 12 हाथ से रंगे मिट्टी के दीए, प्रत्येक पर सुनहरे और लाल गंगा आरती से प्रेरित पैटर्न।",
        te: "వారణాసి నుండి 12 హస్తకళా మట్టి దీపాలు, ప్రతి దీపంపై గంగా ఆరతి ఆచారాల నుండి ప్రేరేపించబడిన బంగారు మరియు ఎర్రని నమూనాలు.",
        kn: "ವಾರಣಾಸಿಯಿಂದ 12 ಕೈಯಿಂದ ಚಿತ್ರಿಸಿದ ಮಣ್ಣಿನ ದೀಪಗಳು, ಪ್ರತಿಯೊಂದರ ಮೇಲೆ ಗಂಗಾ ಆರತಿ ಸ್ಪೂರ್ತಿಯ ಬಂಗಾರ ಮತ್ತು ಕೆಂಪು ನಮೂನೆಗಳು."
      },
      category: "Religious Items",
      subcategory: "Diyas",
      price: 640,
      artisanId: "a6",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      material: "Sacred Ganga Clay",
      color: "Terracotta, Gold, Red",
      dimensions: "8 × 8 × 3 cm (each)",
      weight: "1.2 kg (set of 12)",
      craftTechnique: "Wheel-thrown and hand-painted",
      culturalStory: "The clay is sourced from the sacred Ganga riverbed. Each diya carries the energy of the river in its very material.",
      verified: true,
      views: 5621,
      wishlistCount: 789,
      salesCount: 234,
      rating: 4.9,
      badge: "Festival Special"
    },
    {
      id: "p11",
      title: {
        en: "Terracotta Ganesha Idol — Mysuru",
        hi: "टेराकोटा गणेश मूर्ति — मैसूरु",
        te: "టెర్రకోట గణేశ విగ్రహం — మైసూరు",
        kn: "ಟೆರ್ರಕೋಟ ಗಣೇಶ ಮೂರ್ತಿ — ಮೈಸೂರು"
      },
      description: {
        en: "A lovingly crafted terracotta Ganesha idol from Mysuru, hand-shaped and painted with natural mineral colours. At 18cm tall, this eco-friendly idol is suitable for home puja, gifting, and festival decoration. Dissolves naturally in water without pollution.",
        hi: "मैसूरु से एक प्यार से बनाई गई टेराकोटा गणेश मूर्ति, हाथ से बनाई और प्राकृतिक खनिज रंगों से रंगी गई।",
        te: "మైసూరు నుండి ప్రేమతో తయారు చేయబడిన టెర్రకోట గణేశ విగ్రహం, చేతితో తయారు చేయబడి సహజ ఖనిజ రంగులతో రంగేయబడింది.",
        kn: "ಮೈಸೂರಿನಿಂದ ಪ್ರೀತಿಯಿಂದ ತಯಾರಿಸಿದ ಟೆರ್ರಕೋಟ ಗಣೇಶ ಮೂರ್ತಿ, ಕೈಯಿಂದ ರೂಪಿಸಿ ನೈಸರ್ಗಿಕ ಖನಿಜ ಬಣ್ಣಗಳಿಂದ ರಂಗಿಸಿದ."
      },
      category: "Religious Items",
      subcategory: "Idols",
      price: 950,
      artisanId: "a6",
      location: "Mysuru, Karnataka",
      state: "Karnataka",
      material: "Natural Terracotta, Mineral Colours",
      color: "Terracotta, Saffron, Gold",
      height: "18 cm",
      weight: "0.6 kg",
      craftTechnique: "Hand-sculpted and painted",
      culturalStory: "Made to dissolve without harming waterways — a return to the eco-friendly idols of ancient India, before chemical paints arrived.",
      careInstructions: "Keep in a dry place. Eco-friendly — safe for water immersion.",
      verified: true,
      views: 3245,
      wishlistCount: 456,
      salesCount: 89,
      rating: 4.8,
      badge: "Eco-Friendly"
    },
    {
      id: "p12",
      title: {
        en: "Brass Diya Panchadeep — Varanasi",
        hi: "पीतल दीया पंचदीप — वाराणसी",
        te: "ఇత్తడి దీపం పంచదీప్ — వారణాసి",
        kn: "ಹಿತ್ತಾಳೆ ದೀಪ ಪಂಚದೀಪ — ವಾರಣಾಸಿ"
      },
      description: {
        en: "A stunning five-flame brass panchadeep (oil lamp) from Varanasi's renowned metal artisans. Hand-finished with intricate engraving around the base. Used in temple worship and special pujas. The weight and finish speak to generations of craft mastery.",
        hi: "वाराणसी के प्रसिद्ध धातु कारीगरों से एक सुंदर पांच-ज्वाला पीतल पंचदीप।",
        te: "వారణాసి ప్రసిద్ధ లోహ కళాకారుల నుండి అద్భుతమైన ఐదు-జ్వాల ఇత్తడి పంచదీప్.",
        kn: "ವಾರಣಾಸಿಯ ಪ್ರಸಿದ್ಧ ಲೋಹ ಕುಶಲಕರ್ಮಿಗಳಿಂದ ಐದು-ಜ್ವಾಲೆಯ ಹಿತ್ತಾಳೆ ಪಂಚದೀಪ."
      },
      category: "Religious Items",
      subcategory: "Diyas",
      price: 3200,
      artisanId: "a6",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      material: "Brass",
      color: "Antique Gold",
      height: "28 cm",
      weight: "1.4 kg",
      craftTechnique: "Hand-cast and engraved brass",
      culturalStory: "Five flames represent the five elements — earth, water, fire, air, ether. The panchadeep is the most sacred lamp form in Hindu ritual.",
      verified: true,
      views: 2156,
      wishlistCount: 287,
      salesCount: 34,
      rating: 4.9,
      badge: "Heirloom Quality"
    }
  ],

  // ─── CATEGORIES ─────────────────────────────────────────────────────────────
  categories: [
    {
      id: "cat1",
      name: "Art & Crafts",
      tagline: "Stories carved, woven and painted by hand.",
      subcategories: ["Dolls", "Bamboo Baskets"],
      color: "#8B5E3C"
    },
    {
      id: "cat2",
      name: "Kitchen & Dining",
      tagline: "Every meal becomes a ritual with handmade vessels.",
      subcategories: ["Pottery", "Ceramics"],
      color: "#5D3023"
    },
    {
      id: "cat3",
      name: "Clothing",
      tagline: "Draped in tradition, woven with time.",
      subcategories: ["Sarees"],
      color: "#895737"
    },
    {
      id: "cat4",
      name: "Religious Items",
      tagline: "Craft that carries the sacred into the everyday.",
      subcategories: ["Diyas", "Idols"],
      color: "#6B4226"
    }
  ],

  // ─── LOCATIONS ──────────────────────────────────────────────────────────────
  locations: [
    { id: "loc1", name: "Hyderabad", state: "Telangana", x: 54, y: 65 },
    { id: "loc2", name: "Warangal", state: "Telangana", x: 57, y: 62 },
    { id: "loc3", name: "Jaipur", state: "Rajasthan", x: 38, y: 37 },
    { id: "loc4", name: "Kutch", state: "Gujarat", x: 22, y: 45 },
    { id: "loc5", name: "Varanasi", state: "Uttar Pradesh", x: 60, y: 38 },
    { id: "loc6", name: "Mysuru", state: "Karnataka", x: 45, y: 73 },
    { id: "loc7", name: "Srikakulam", state: "Andhra Pradesh", x: 63, y: 60 },
    { id: "loc8", name: "Channapatna", state: "Karnataka", x: 47, y: 72 },
    { id: "loc9", name: "Kondapalli", state: "Andhra Pradesh", x: 55, y: 67 }
  ],

  // ─── ANALYTICS SEED ─────────────────────────────────────────────────────────
  sellerAnalytics: {
    totalSales: 48620,
    productsSold: 32,
    productViews: 8420,
    conversion: 4.8,
    salesTrend: +12.4,
    salesData7d: [1200, 1800, 1400, 2100, 1750, 2300, 1950],
    salesData30d: [980, 1100, 1350, 890, 1450, 1200, 1680, 1320, 1560, 1890, 2100, 1750, 1980, 2200, 1840, 1760, 2050, 1930, 2180, 1870, 2040, 2310, 1950, 2120, 2280, 2050, 2340, 2180, 2400, 2250],
    topProducts: [
      { name: "Hand-Painted Terracotta Pot", views: 2847, sales: 45, revenue: 83250 },
      { name: "Kalamkari Silk Saree", views: 4231, sales: 12, revenue: 102000 },
      { name: "Kondapalli Doll Set", views: 3412, sales: 31, revenue: 86800 },
      { name: "Varanasi Diya Set", views: 5621, sales: 234, revenue: 149760 }
    ],
    channelBreakdown: [
      { channel: "VANYA", percentage: 45, color: "#5D3023" },
      { channel: "Instagram", percentage: 28, color: "#895737" },
      { channel: "WhatsApp", percentage: 15, color: "#25D366" },
      { channel: "Facebook", percentage: 8, color: "#1877F2" },
      { channel: "Telegram", percentage: 4, color: "#0088cc" }
    ]
  },

  adminAnalytics: {
    totalGMV: 2847650,
    activeArtisans: 1284,
    productsListed: 8934,
    totalOrders: 15672,
    visitors: 94250,
    artisanDistribution: [
      { region: "Telangana", count: 312 },
      { region: "Rajasthan", count: 287 },
      { region: "Karnataka", count: 198 },
      { region: "Gujarat", count: 156 },
      { region: "Uttar Pradesh", count: 143 },
      { region: "Andhra Pradesh", count: 189 }
    ],
    agentActivity: {
      productAgent: { listings: 3421, successRate: 94.2 },
      priceAgent: { analyses: 2987, successRate: 98.1 },
      marketAgent: { campaigns: 2134, successRate: 91.7 }
    },
    languageBreakdown: [
      { lang: "English", percentage: 52 },
      { lang: "Hindi", percentage: 28 },
      { lang: "Telugu", percentage: 13 },
      { lang: "Kannada", percentage: 7 }
    ]
  }
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function getProductsByCategory(category) {
  return VANYA_DATA.products.filter(p => p.category === category);
}

function getProductById(id) {
  return VANYA_DATA.products.find(p => p.id === id);
}

function getArtisanById(id) {
  return VANYA_DATA.artisans.find(a => a.id === id);
}

function getFeaturedProducts(count = 8) {
  return VANYA_DATA.products.slice(0, count);
}

function getRelatedProducts(product, count = 4) {
  return VANYA_DATA.products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, count);
}

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

// Current language state
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (el._langData && el._langData[lang]) {
      el.textContent = el._langData[lang];
    }
  });
}

function getTitle(product) {
  return product.title[currentLang] || product.title.en;
}

function getDescription(product) {
  return product.description[currentLang] || product.description.en;
}
