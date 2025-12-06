export interface Recommendation {
  id: number;
  hairStyle: string;
  hairColor: string;
}

export interface RecommendationData {
  id: number;
  attributes: string;
  recommendations: Recommendation[];
}

export const recommendedData: RecommendationData[] = [
  {
    id: 1,
    attributes: 'female_heart_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Collarbone-Length Cut',
        hairColor: 'Deep Espresso',
      },
      {
        id: 2,
        hairStyle: 'Soft Side-Swept Bangs',
        hairColor: 'Dark Burgundy/Plum',
      },
      {
        id: 3,
        hairStyle: 'Long Waves with Layers at the Chin',
        hairColor: 'Copper Brown Highlights',
      },
    ],
  },
  {
    id: 2,
    attributes: 'female_heart_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Collarbone-Length Cut',
        hairColor: 'Golden Copper',
      },
      {
        id: 2,
        hairStyle: 'Soft Side-Swept Bangs',
        hairColor: 'Ash Blonde/Beige Blonde',
      },
      {
        id: 3,
        hairStyle: 'Long Waves with Layers at the Chin',
        hairColor: 'Rich Mahogany',
      },
    ],
  },
  {
    id: 3,
    attributes: 'female_heart_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Collarbone-Length Cut',
        hairColor: 'Honey Balayage',
      },
      {
        id: 2,
        hairStyle: 'Soft Side-Swept Bangs',
        hairColor: 'Warm Chocolate Brown',
      },
      {
        id: 3,
        hairStyle: 'Long Waves with Layers at the Chin',
        hairColor: 'Rose Gold/Warm Pink',
      },
    ],
  },
  {
    id: 4,
    attributes: 'female_oblong_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Full, Blunt Bangs',
        hairColor: 'Deep Chocolate Brown',
      },
      {
        id: 2,
        hairStyle: 'Chin-Length Bob with Volume',
        hairColor: 'Violet Black',
      },
      {
        id: 3,
        hairStyle: 'Shoulder-Length Waves with a Deep Side Part',
        hairColor: 'Espresso Highlights',
      },
    ],
  },
  {
    id: 5,
    attributes: 'female_oblong_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Full, Blunt Bangs',
        hairColor: 'Ash Brown',
      },
      {
        id: 2,
        hairStyle: 'Chin-Length Bob with Volume',
        hairColor: 'Strawberry Blonde',
      },
      {
        id: 3,
        hairStyle: 'Shoulder-Length Waves with a Deep Side Part',
        hairColor: 'Light Caramel',
      },
    ],
  },
  {
    id: 6,
    attributes: 'female_oblong_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Full, Blunt Bangs',
        hairColor: 'Medium Golden Brown',
      },
      {
        id: 2,
        hairStyle: 'Chin-Length Bob with Volume',
        hairColor: 'Copper Brown',
      },
      {
        id: 3,
        hairStyle: 'Shoulder-Length Waves with a Deep Side Part',
        hairColor: 'Red Velvet/Dark Cherry',
      },
    ],
  },
  {
    id: 7,
    attributes: 'female_oval_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers with Curtain Bangs',
        hairColor: 'Deep Mocha',
      },
      {
        id: 2,
        hairStyle: 'Slightly Angled Lob (Long Bob)',
        hairColor: 'Burgundy/Red-Brown Balayage',
      },
      {
        id: 3,
        hairStyle: 'Sleek, Straight Shoulder-Length Cut',
        hairColor: 'Jet Black',
      },
    ],
  },
  {
    id: 8,
    attributes: 'female_oval_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers with Curtain Bangs',
        hairColor: 'Platinum/Silver Blonde',
      },
      {
        id: 2,
        hairStyle: 'Slightly Angled Lob (Long Bob)',
        hairColor: 'Light Ash Brown with Blonde Tips',
      },
      {
        id: 3,
        hairStyle: 'Sleek, Straight Shoulder-Length Cut',
        hairColor: 'Copper Gold',
      },
    ],
  },
  {
    id: 9,
    attributes: 'female_oval_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers with Curtain Bangs',
        hairColor: 'Caramel/Toffee Brown',
      },
      {
        id: 2,
        hairStyle: 'Slightly Angled Lob (Long Bob)',
        hairColor: 'Medium Chestnut Brown',
      },
      {
        id: 3,
        hairStyle: 'Sleek, Straight Shoulder-Length Cut',
        hairColor: 'Dark Reddish-Brown',
      },
    ],
  },
  {
    id: 10,
    attributes: 'female_round_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers/Straight Hair with a Center Part',
        hairColor: 'Deep Auburn/Dark Mahogany',
      },
      {
        id: 2,
        hairStyle: 'Voluminous Pixie Cut (Swept Up)',
        hairColor: 'Blue-Black/Violet Black',
      },
      {
        id: 3,
        hairStyle: 'Shag Cut (Volume at the Crown)',
        hairColor: 'Glossy Black',
      },
    ],
  },
  {
    id: 11,
    attributes: 'female_round_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers/Straight Hair with a Center Part',
        hairColor: 'Ash Brown with Face-Framing Blonde',
      },
      {
        id: 2,
        hairStyle: 'Voluminous Pixie Cut (Swept Up)',
        hairColor: 'Icy Blue/Pastel Colors',
      },
      {
        id: 3,
        hairStyle: 'Shag Cut (Volume at the Crown)',
        hairColor: 'Natural Light Brown',
      },
    ],
  },
  {
    id: 12,
    attributes: 'female_round_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers/Straight Hair with a Center Part',
        hairColor: 'Warm Gold Brown',
      },
      {
        id: 2,
        hairStyle: 'Voluminous Pixie Cut (Swept Up)',
        hairColor: 'Rich Copper',
      },
      {
        id: 3,
        hairStyle: 'Shag Cut (Volume at the Crown)',
        hairColor: 'Dark Brown with Caramel Highlights',
      },
    ],
  },
  {
    id: 13,
    attributes: 'female_square_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers with Feathery Ends',
        hairColor: 'Rich Chocolate Brown',
      },
      {
        id: 2,
        hairStyle: 'Wavy Lob (Long Bob) that falls below the jaw',
        hairColor: 'Deep Bronze Highlights',
      },
      {
        id: 3,
        hairStyle: 'Grown-Out Curtain Bangs',
        hairColor: 'Darkest Plum',
      },
    ],
  },
  {
    id: 14,
    attributes: 'female_square_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers with Feathery Ends',
        hairColor: 'Butterscotch Blonde',
      },
      {
        id: 2,
        hairStyle: 'Wavy Lob (Long Bob) that falls below the jaw',
        hairColor: 'Light Chestnut Brown',
      },
      {
        id: 3,
        hairStyle: 'Grown-Out Curtain Bangs',
        hairColor: 'Ash Grey',
      },
    ],
  },
  {
    id: 15,
    attributes: 'female_square_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers with Feathery Ends',
        hairColor: 'Medium Copper',
      },
      {
        id: 2,
        hairStyle: 'Wavy Lob (Long Bob) that falls below the jaw',
        hairColor: 'Honey Brown with Deep Roots',
      },
      {
        id: 3,
        hairStyle: 'Grown-Out Curtain Bangs',
        hairColor: 'Red-Violet Balayage',
      },
    ],
  },
  {
    id: 16,
    attributes: 'male_heart_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Quiff',
        hairColor: 'High Top Fade or Box Fade',
      },
      {
        id: 2,
        hairStyle: 'Fringe Up/Side Swept',
        hairColor: 'Close Shaved Head',
      },
      {
        id: 3,
        hairStyle: 'Longer Slick Back with Volume',
        hairColor: 'Shadow Fade with Curls',
      },
    ],
  },
  {
    id: 17,
    attributes: 'male_heart_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Quiff',
        hairColor: 'Platinum Blonde or Ash Brown Highlights',
      },
      {
        id: 2,
        hairStyle: 'Fringe Up/Side Swept',
        hairColor: 'Slightly longer style with low fade',
      },
      {
        id: 3,
        hairStyle: 'Longer Slick Back with Volume',
        hairColor: 'Matte Finish Medium Pomp',
      },
    ],
  },
  {
    id: 18,
    attributes: 'male_heart_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Quiff',
        hairColor: 'Deep Side Part with Taper',
      },
      {
        id: 2,
        hairStyle: 'Fringe Up/Side Swept',
        hairColor: 'Rich Brown/Auburn Accents',
      },
      {
        id: 3,
        hairStyle: 'Longer Slick Back with Volume',
        hairColor: 'High Volume Messy Top',
      },
    ],
  },
  {
    id: 19,
    attributes: 'male_oblong_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Side Swept Fringe',
        hairColor: 'Short Dreadlocks or Twists',
      },
      {
        id: 2,
        hairStyle: 'Textured Curls/Waves',
        hairColor: 'Afro with a Rounded Shape',
      },
      {
        id: 3,
        hairStyle: 'Bro Flow',
        hairColor: 'Shadow Fade with Sharp Part',
      },
    ],
  },
  {
    id: 20,
    attributes: 'male_oblong_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Side Swept Fringe',
        hairColor: 'French Crop with a Mid-Fade',
      },
      {
        id: 2,
        hairStyle: 'Textured Curls/Waves',
        hairColor: 'Icy Blonde/Silver Color',
      },
      {
        id: 3,
        hairStyle: 'Bro Flow',
        hairColor: 'Medium Length Taper',
      },
    ],
  },
  {
    id: 21,
    attributes: 'male_oblong_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Side Swept Fringe',
        hairColor: 'Caramel Brown',
      },
      {
        id: 2,
        hairStyle: 'Textured Curls/Waves',
        hairColor: 'Honey Brown Highlights',
      },
      {
        id: 3,
        hairStyle: 'Bro Flow',
        hairColor: 'Copper Brown',
      },
    ]
  },
  {
    id: 22,
    attributes: 'male_oval_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Taper/Mid-Fade Pomp',
        hairColor: 'Caesar Cut with Texture',
      },
      {
        id: 2,
        hairStyle: 'Slightly Undercut Quiff',
        hairColor: 'Wavy/Coiled Top with Fade',
      },
      {
        id: 3,
        hairStyle: 'Crew Cut',
        hairColor: 'Buzz Cut with Line-Up',
      },
    ],
  },
  {
    id: 23,
    attributes: 'male_oval_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Taper/Mid-Fade Pomp',
        hairColor: 'Slicked Back with High Shine Pomade',
      },
      {
        id: 2,
        hairStyle: 'Slightly Undercut Quiff',
        hairColor: 'Light Brown Subtle Balayage',
      },
      {
        id: 3,
        hairStyle: 'Crew Cut',
        hairColor: 'Medium length, natural messy texture',
      },
    ],
  },
  {
    id: 24,
    attributes: 'male_oval_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Taper/Mid-Fade Pomp',
        hairColor: 'Modern Mohawk with Drop Fade',
      },
      {
        id: 2,
        hairStyle: 'Slightly Undercut Quiff',
        hairColor: 'Warm Honey Brown Highlights',
      },
      {
        id: 3,
        hairStyle: 'Crew Cut',
        hairColor: 'Textured Fringe with Low Fade',
      },
    ],
  },
  {
    id: 25,
    attributes: 'male_round_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Pompadour',
        hairColor: 'High Fade with Geometric Design',
      },
      {
        id: 2,
        hairStyle: 'Textured Spiky Top',
        hairColor: 'Twists or Coils on Top',
      },
      {
        id: 3,
        hairStyle: 'High Volume Quiff',
        hairColor: 'Line-Up (Edge-Up) with Mid-Fade',
      },
    ],
  },
  {
    id: 26,
    attributes: 'male_round_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Pompadour',
        hairColor: 'High Fade with Disconnected Top',
      },
      {
        id: 2,
        hairStyle: 'Textured Spiky Top',
        hairColor: 'Light Ash Brown Color',
      },
      {
        id: 3,
        hairStyle: 'High Volume Quiff',
        hairColor: 'Clean Side Part with Polish',
      },
    ],
  },
  {
    id: 27,
    attributes: 'male_round_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Pompadour',
        hairColor: 'Slicked Back Undercut',
      },
      {
        id: 2,
        hairStyle: 'Textured Spiky Top',
        hairColor: 'Low to Mid Skin Fade',
      },
      {
        id: 3,
        hairStyle: 'High Volume Quiff',
        hairColor: 'Voluminous Textured Pomp',
      },
    ],
  },
  {
    id: 28,
    attributes: 'male_square_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Crop with a Soft Fringe',
        hairColor: 'Natural Taper Fade with Full Curls',
      },
      {
        id: 2,
        hairStyle: 'Layered, Medium Length Style',
        hairColor: 'The "Mop Top" or Long Textured Style',
      },
      {
        id: 3,
        hairStyle: 'Side Part with Taper',
        hairColor: 'Close Shave with Designer Stubble',
      },
    ],
  },
  {
    id: 29,
    attributes: 'male_square_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Crop with a Soft Fringe',
        hairColor: 'Loose, Wavy Top',
      },
      {
        id: 2,
        hairStyle: 'Layered, Medium Length Style',
        hairColor: 'Low Fade with Natural Top',
      },
      {
        id: 3,
        hairStyle: 'Side Part with Taper',
        hairColor: 'Cool-Toned Brown Color',
      },
    ],
  },
  {
    id: 30,
    attributes: 'male_square_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Crop with a Soft Fringe',
        hairColor: 'Modern Shaggy Cut',
      },
      {
        id: 2,
        hairStyle: 'Layered, Medium Length Style',
        hairColor: 'French Crop with Mid-Fade',
      },
      {
        id: 3,
        hairStyle: 'Side Part with Taper',
        hairColor: 'Warm Chestnut Highlights',
      },
    ],
  },
];
