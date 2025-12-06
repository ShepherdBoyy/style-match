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
        hairStyle: 'Long Layers (Starting below the chin for balance)',
        hairColor: 'Deep Burgundy or Wine Red (Rich colors that pop on darker skin)',
      },
      {
        id: 2,
        hairStyle: 'Side-Swept Bangs (Softens forehead width)',
        hairColor: 'Shoulder-Length Curls/Waves (Natural texture is easy to manage)',
      },
      {
        id: 3,
        hairStyle: 'Deep Side Part (Creates an asymmetrical balance)',
        hairColor: 'Jet Black with High Shine (Emphasizes health and richness)',
      },
    ],
  },
  {
    id: 2,
    attributes: 'female_heart_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers (Starting below the chin for balance)',
        hairColor: 'Ash Blonde or Silver Highlights (Very popular cool tones for light skin)',
      },
      {
        id: 2,
        hairStyle: 'Side-Swept Bangs (Softens forehead width)',
        hairColor: 'Shoulder-Length Wavy Bob (A classic style with low maintenance)',
      },
      {
        id: 3,
        hairStyle: 'Deep Side Part (Creates an asymmetrical balance)',
        hairColor: 'Milk Tea Brown (Subtle Warmth) (Trendy, light brown color)',
      },
    ],
  },
  {
    id: 3,
    attributes: 'female_heart_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Layers (Starting below the chin for balance)',
        hairColor: 'Copper or Chestnut Balayage (Adds warmth and dimension to medium skin)',
      },
      {
        id: 2,
        hairStyle: 'Side-Swept Bangs (Softens forehead width)',
        hairColor: 'Mid-Length with Face-Framing Layers (Versatile cut for styling)',
      },
      {
        id: 3,
        hairStyle: 'Deep Side Part (Creates an asymmetrical balance)',
        hairColor: 'Dark Brown with Caramel Underlights (Hidden color adds pop)',
      },
    ],
  },
  {
    id: 4,
    attributes: 'female_oblong_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Voluminous Chin-Length Bob (Adds width at the jaw)',
        hairColor: 'Shoulder-Length Natural Coils (Hair is allowed to expand for width)',
      },
      {
        id: 2,
        hairStyle: 'Full, Blunt Bangs (Breaks up the forehead length)',
        hairColor: 'Espresso Brown with Dark Copper (Adds depth and subtle pop)',
      },
      {
        id: 3,
        hairStyle: 'Loose Beach Waves (Adds softness and width)',
        hairColor: 'Braids/Twists with Dark Tones (Protective style that manages humidity)',
      },
    ],
  },
  {
    id: 5,
    attributes: 'female_oblong_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Voluminous Chin-Length Bob (Adds width at the jaw)',
        hairColor: 'Blunt Cut with Internal Layers (Sharp style, internal layers reduce bulk)',
      },
      {
        id: 2,
        hairStyle: 'Full, Blunt Bangs (Breaks up the forehead length)',
        hairColor: 'Cool Beige Blonde Color (Flattering shade of blonde for this skin tone)',
      },
      {
        id: 3,
        hairStyle: 'Loose Beach Waves (Adds softness and width)',
        hairColor: 'Sleek Lived-In Lob (Long Bob) (Easy to style in humidity)',
      },
    ],
  },
  {
    id: 6,
    attributes: 'female_oblong_medium',
    recommendations: [],
  },
  {
    id: 7,
    attributes: 'female_oval_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Curtain Bangs with Long Hair (A universally flattering, trendy style)',
        hairColor: 'Tricolor Dip-Dye (Dark, Red, Orange) (A bold, festival-ready look)',
      },
      {
        id: 2,
        hairStyle: 'Sleek A-Line Bob (Showcases the perfect jawline)',
        hairColor: 'Long, Straight Hair with High Gloss (Emphasizes health and shine)',
      },
      {
        id: 3,
        hairStyle: 'Goddess Waves (Long, cascading, voluminous waves)',
        hairColor: 'High Ponytail with Loose Face-Framing Strands (Ideal for PH weather)',
      },
    ],
  },
  {
    id: 8,
    attributes: 'female_oval_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Curtain Bangs with Long Hair (A universally flattering, trendy style)',
        hairColor: 'Pastel Pink or Violet Streaks (Trendy color experiments are easy to pull off)',
      },
      {
        id: 2,
        hairStyle: 'Sleek A-Line Bob (Showcases the perfect jawline)',
        hairColor: 'Honey Gold Balayage (A warmer approach to light hair)',
      },
      {
        id: 3,
        hairStyle: 'Goddess Waves (Long, cascading, voluminous waves)',
        hairColor: 'K-Pop Inspired High Pony/Bun (Allows hair to be tied up neatly in heat)',
      },
    ],
  },
  {
    id: 9,
    attributes: 'female_oval_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Curtain Bangs with Long Hair (A universally flattering, trendy style)',
        hairColor: 'Auburn/Mahogany Color (Brings out the warmth in medium skin)',
      },
      {
        id: 2,
        hairStyle: 'Sleek A-Line Bob (Showcases the perfect jawline)',
        hairColor: 'Full Layers on Mid-Length Hair (Adds movement, easy blow-dry style)',
      },
      {
        id: 3,
        hairStyle: 'Goddess Waves (Long, cascading, voluminous waves)',
        hairColor: 'Chunky Highlights in Deep Caramel (A strong, defined look)',
      },
    ],
  },
  {
    id: 10,
    attributes: 'female_round_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Hair with Center Part (Vertical lines lengthen the face)',
        hairColor: 'Dark Chocolate Brown with Subtle Gold Shimmer (Highlights natural richness)',
      },
      {
        id: 2,
        hairStyle: 'Shaggy Layers with Volume on Top (Adds height and texture)',
        hairColor: 'Short Natural Cut/Coils (Gives shape and height)',
      },
      {
        id: 3,
        hairStyle: 'Asymmetrical Lob (Creates diagonal angles to slim the face)',
        hairColor: 'Half-Up Bun/Space Buns (Draws eyes up, great for the heat)',
      },
    ],
  },
  {
    id: 11,
    attributes: 'female_round_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Hair with Center Part (Vertical lines lengthen the face)',
        hairColor: 'Icy Blonde/Silver Color with Dark Roots (Sharp contrast adds edge)',
      },
      {
        id: 2,
        hairStyle: 'Shaggy Layers with Volume on Top (Adds height and texture)',
        hairColor: 'Textured Lob with Wispy Bangs (Shoulder length adds length below the chin)',
      },
      {
        id: 3,
        hairStyle: 'Asymmetrical Lob (Creates diagonal angles to slim the face)',
        hairColor: 'Pastel Lilac or Pink Ombré (Fun, vibrant colors popular for this age group)',
      },
    ],
  },
  {
    id: 12,
    attributes: 'female_round_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Long Hair with Center Part (Vertical lines lengthen the face)',
        hairColor: 'Ash Brown with a Cool Tone (Counters the roundness with a cooler shade)',
      },
      {
        id: 2,
        hairStyle: 'Shaggy Layers with Volume on Top (Adds height and texture)',
        hairColor: 'Sleek, Straight Look with High Shine (Flatters and lengthens)',
      },
      {
        id: 3,
        hairStyle: 'Asymmetrical Lob (Creates diagonal angles to slim the face)',
        hairColor: 'Voluminous Blowout/Big Curls (Focus on volume at the crown)',
      },
    ],
  },
  {
    id: 13,
    attributes: 'female_square_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Feathered Layers (Starting below the jawline to soften corners)',
        hairColor: 'Deep Violet or Blue-Black (Intense color contrast looks luxurious)',
      },
      {
        id: 2,
        hairStyle: 'Long, Wavy Layers with Side Part (Wavy texture minimizes angles)',
        hairColor: 'High Volume Curly Hairstyle (Softens angles with mass and curl)',
      },
      {
        id: 3,
        hairStyle: 'Shag Cut (Tons of texture to distract from the jaw)',
        hairColor: 'Braided Crown or Headband Braid (Keeps hair tidy in the heat)',
      },
    ],
  },
  {
    id: 14,
    attributes: 'female_square_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Feathered Layers (Starting below the jawline to soften corners)',
        hairColor: 'Strawberry Blonde or Light Copper (Soft, warm color is flattering)',
      },
      {
        id: 2,
        hairStyle: 'Long, Wavy Layers with Side Part (Wavy texture minimizes angles)',
        hairColor: 'Mid-Length Cut with Bottleneck Bangs (Soft, blended bangs)',
      },
      {
        id: 3,
        hairStyle: 'Shag Cut (Tons of texture to distract from the jaw)',
        hairColor: 'Soft Blowout/Curls (Focus on a smooth, rounded finish)',
      },
    ],
  },
  {
    id: 15,
    attributes: 'female_square_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Feathered Layers (Starting below the jawline to soften corners)',
        hairColor: "Warm Brown with Golden Highlights (Enhances the skin's warmth)",
      },
      {
        id: 2,
        hairStyle: 'Long, Wavy Layers with Side Part (Wavy texture minimizes angles)',
        hairColor: 'Textured Cut with Movement (Easier to manage frizz in humidity)',
      },
      {
        id: 3,
        hairStyle: 'Shag Cut (Tons of texture to distract from the jaw)',
        hairColor: 'Slicked Back Pony/Bun with Volume at Crown (Focuses attention upward)',
      },
    ],
  },
  {
    id: 16,
    attributes: 'male_heart_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Quiff (Medium length, directs volume up and back)',
        hairColor:
          'High Top Fade or Box Fade (Emphasizes facial structure, excellent on dark skin)',
      },
      {
        id: 2,
        hairStyle: 'Fringe Up/Side Swept (Breaks up forehead width)',
        hairColor: 'Close Shaved Head (Highlights the sharp lines of the face)',
      },
      {
        id: 3,
        hairStyle: 'Longer Slick Back with Volume (Adds balance to the lower face)',
        hairColor: 'Shadow Fade with Curls (Fade adds dimension and contrast)',
      },
    ],
  },
  {
    id: 17,
    attributes: 'male_heart_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Quiff (Medium length, directs volume up and back)',
        hairColor: 'Platinum Blonde or Ash Brown Highlights (Adds sharp contrast)',
      },
      {
        id: 2,
        hairStyle: 'Fringe Up/Side Swept (Breaks up forehead width)',
        hairColor: 'Slightly longer style with low fade (Low fade contrasts light skin)',
      },
      {
        id: 3,
        hairStyle: 'Longer Slick Back with Volume (Adds balance to the lower face)',
        hairColor: 'Matte Finish Medium Pomp (Matte products look natural on light skin)',
      },
    ],
  },
  {
    id: 18,
    attributes: 'male_heart_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Quiff (Medium length, directs volume up and back)',
        hairColor: 'Deep Side Part with Taper (Clean look that complements neutral skin)',
      },
      {
        id: 2,
        hairStyle: 'Fringe Up/Side Swept (Breaks up forehead width)',
        hairColor: 'Rich Brown/Auburn Accents (Enhances the warmth of medium skin)',
      },
      {
        id: 3,
        hairStyle: 'Longer Slick Back with Volume (Adds balance to the lower face)',
        hairColor: 'High Volume Messy Top (Texture is great for medium tones)',
      },
    ],
  },
  {
    id: 19,
    attributes: 'male_oblong_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Side Swept Fringe (Covers forehead, reducing length)',
        hairColor: 'Short Dreadlocks or Twists (Adds texture without excessive height)',
      },
      {
        id: 2,
        hairStyle: 'Textured Curls/Waves (Adds width on the sides)',
        hairColor: 'Afro with a Rounded Shape (Avoids height, adds width)',
      },
      {
        id: 3,
        hairStyle: 'Bro Flow (Longer, tousled style that adds width)',
        hairColor: 'Shadow Fade with Sharp Part (Fade provides excellent contrast)',
      },
    ],
  },
  {
    id: 20,
    attributes: 'male_oblong_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Side Swept Fringe (Covers forehead, reducing length)',
        hairColor: 'French Crop with a Mid-Fade (Sharp lines contrast well with light skin)',
      },
      {
        id: 2,
        hairStyle: 'Textured Curls/Waves (Adds width on the sides)',
        hairColor: 'Icy Blonde/Silver Color (Bold color choice for this age group)',
      },
      {
        id: 3,
        hairStyle: 'Bro Flow (Longer, tousled style that adds width)',
        hairColor: 'Medium Length Taper (Classic style that suits light complexion)',
      },
    ],
  },
  { id: 21, attributes: 'male_oblong_medium', recommendations: [] },
  {
    id: 22,
    attributes: 'male_oval_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Taper/Mid-Fade Pomp (Adds height and definition)',
        hairColor: 'Caesar Cut with Texture (Low-maintenance, highlights jawline)',
      },
      {
        id: 2,
        hairStyle: 'Slightly Undercut Quiff (Versatile, modern look)',
        hairColor: 'Wavy/Coiled Top with Fade (Showcases natural hair texture)',
      },
      {
        id: 3,
        hairStyle: 'Crew Cut (Emphasizes the well-balanced bone structure)',
        hairColor: 'Buzz Cut with Line-Up (Clean and sharp, highlighting the face)',
      },
    ],
  },
  {
    id: 23,
    attributes: 'male_oval_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Taper/Mid-Fade Pomp (Adds height and definition)',
        hairColor: 'Slicked Back with High Shine Pomade (Glossy finish looks sleek)',
      },
      {
        id: 2,
        hairStyle: 'Slightly Undercut Quiff (Versatile, modern look)',
        hairColor: 'Light Brown Subtle Balayage (Adds depth without strong contrast)',
      },
      {
        id: 3,
        hairStyle: 'Crew Cut (Emphasizes the well-balanced bone structure)',
        hairColor: 'Medium length, natural messy texture (Easy, low-maintenance style)',
      },
    ],
  },
  {
    id: 24,
    attributes: 'male_oval_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Taper/Mid-Fade Pomp (Adds height and definition)',
        hairColor: 'Modern Mohawk with Drop Fade (Edgy style that works with medium tones)',
      },
      {
        id: 2,
        hairStyle: 'Slightly Undercut Quiff (Versatile, modern look)',
        hairColor: 'Warm Honey Brown Highlights (Complements warmer undertones)',
      },
      {
        id: 3,
        hairStyle: 'Crew Cut (Emphasizes the well-balanced bone structure)',
        hairColor: 'Textured Fringe with Low Fade (The fringe can be pushed back easily)',
      },
    ],
  },
  {
    id: 25,
    attributes: 'male_round_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Pompadour (Maximum height to lengthen the face)',
        hairColor: 'High Fade with Geometric Design (Fade allows for scalp art/lines)',
      },
      {
        id: 2,
        hairStyle: 'Textured Spiky Top (Adds sharp angles and height)',
        hairColor: 'Twists or Coils on Top (Natural texture provides height)',
      },
      {
        id: 3,
        hairStyle: 'High Volume Quiff (Pushes hair back and up)',
        hairColor: 'Line-Up (Edge-Up) with Mid-Fade (Crisp edges add structure to the roundness)',
      },
    ],
  },
  {
    id: 26,
    attributes: 'male_round_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Pompadour (Maximum height to lengthen the face)',
        hairColor: 'High Fade with Disconnected Top (Clean sides highlight contrast)',
      },
      {
        id: 2,
        hairStyle: 'Textured Spiky Top (Adds sharp angles and height)',
        hairColor: 'Light Ash Brown Color (Creates a subtle, cooler tone)',
      },
      {
        id: 3,
        hairStyle: 'High Volume Quiff (Pushes hair back and up)',
        hairColor: 'Clean Side Part with Polish (Sharp edges are great for light skin)',
      },
    ],
  },
  {
    id: 27,
    attributes: 'male_round_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Classic Pompadour (Maximum height to lengthen the face)',
        hairColor: 'Slicked Back Undercut (Extreme height and clean sides)',
      },
      {
        id: 2,
        hairStyle: 'Textured Spiky Top (Adds sharp angles and height)',
        hairColor: 'Low to Mid Skin Fade (Versatile fade that looks great on medium tones)',
      },
      {
        id: 3,
        hairStyle: 'High Volume Quiff (Pushes hair back and up)',
        hairColor: 'Voluminous Textured Pomp (The texture adds width and height simultaneously)',
      },
    ],
  },
  {
    id: 28,
    attributes: 'male_square_dark',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Crop with a Soft Fringe (Softens the forehead/hairline)',
        hairColor: 'Natural Taper Fade with Full Curls (Soft curls contrast the sharp jaw)',
      },
      {
        id: 2,
        hairStyle: 'Layered, Medium Length Style (Adds movement and flow)',
        hairColor: 'The "Mop Top" or Long Textured Style (Soft, flowing hair is a great contrast)',
      },
      {
        id: 3,
        hairStyle: 'Side Part with Taper (Classic, softened by a slight wave)',
        hairColor: 'Close Shave with Designer Stubble (Focuses on the strong jawline)',
      },
    ],
  },
  {
    id: 29,
    attributes: 'male_square_light',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Crop with a Soft Fringe (Softens the forehead/hairline)',
        hairColor: 'Loose, Wavy Top (Softer texture complements light skin)',
      },
      {
        id: 2,
        hairStyle: 'Layered, Medium Length Style (Adds movement and flow)',
        hairColor: 'Low Fade with Natural Top (Less contrast than a high fade)',
      },
      {
        id: 3,
        hairStyle: 'Side Part with Taper (Classic, softened by a slight wave)',
        hairColor: 'Cool-Toned Brown Color (Avoids too much warmth)',
      },
    ],
  },
  {
    id: 30,
    attributes: 'male_square_medium',
    recommendations: [
      {
        id: 1,
        hairStyle: 'Textured Crop with a Soft Fringe (Softens the forehead/hairline)',
        hairColor: 'Modern Shaggy Cut (Emphasizes texture and movement)',
      },
      {
        id: 2,
        hairStyle: 'Layered, Medium Length Style (Adds movement and flow)',
        hairColor: 'French Crop with Mid-Fade (A versatile, slightly sharper look)',
      },
      {
        id: 3,
        hairStyle: 'Side Part with Taper (Classic, softened by a slight wave)',
        hairColor: 'Warm Chestnut Highlights (Adds dimension to medium skin)',
      },
    ],
  },
];
