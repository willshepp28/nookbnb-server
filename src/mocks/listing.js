const listings = [
  {
    title: "Cozy Cottage by the Lake",
    description:
      "A serene escape, perfect for nature lovers. Enjoy a morning coffee on the deck overlooking the lake.",
  },
  {
    title: "Downtown Luxury Loft",
    description:
      "Experience the city in style. A modern loft with all amenities close to popular attractions.",
  },
  {
    title: "Charming Farmhouse",
    description:
      "A rural retreat that takes you back in time but with modern amenities. Great for family gatherings.",
  },
  {
    title: "Beachfront Bliss",
    description:
      "Wake up to the sound of waves at this stunning beachfront property. Perfect for honeymooners.",
  },
  {
    title: "Forest Cabin Getaway",
    description:
      "Escape the hustle and bustle in this cabin situated in a tranquil forest setting.",
  },
  {
    title: "Sunny Studio Apartment",
    description:
      "Bright and cozy studio in the heart of the city. Walking distance to cafes, parks, and museums.",
  },
  {
    title: "Modern Condo With Skyline View",
    description:
      "Relax in this sleek, modern condo overlooking the city skyline. Includes rooftop access.",
  },
  {
    title: "Artistic Bohemian Flat",
    description:
      "A colorful and vibrant space filled with art. Ideal for creatives and young travelers.",
  },
  {
    title: "Countryside Manor",
    description:
      "An elegant manor in the countryside with vast gardens and a swimming pool.",
  },
  {
    title: "Minimalist Mountain Retreat",
    description:
      "Focus on what matters in this simple yet luxurious mountain retreat.",
  },
  {
    title: "Victorian Bed & Breakfast",
    description:
      "A classic B&B with a touch of history. Includes a homemade country breakfast.",
  },
  {
    title: "Rustic Riverside Lodge",
    description:
      "Enjoy the riverside from this rustic yet comfortable lodge. Fishing gear included.",
  },
  {
    title: "Classic Brownstone",
    description:
      "Stay in a part of the city's history in this beautifully preserved brownstone house.",
  },
  {
    title: "Majestic Castle",
    description:
      "Live like royalty in this historic castle. Guided tours available upon request.",
  },
  {
    title: "Desert Adobe House",
    description:
      "Experience desert living in this traditional adobe house. Star-gazing at its best.",
  },
  {
    title: "Spacious Family Home",
    description:
      "A comfortable home with a big backyard, ideal for family barbecues and gatherings.",
  },
  {
    title: "Tiny House Adventure",
    description:
      "Minimal living at its finest. Experience what it's like to live in a modern tiny house.",
  },
  {
    title: "Rooftop Penthouse",
    description:
      "Luxurious penthouse with a rooftop deck. Ideal for romantic getaways.",
  },
  {
    title: "Historic Inn",
    description:
      "Stay in a converted inn with a storied past. Ideal for history buffs.",
  },
  {
    title: "Chic City Apartment",
    description:
      "A fashionable apartment right in the shopping district. Perfect for a girls' weekend.",
  },
  {
    title: "Nautical Beach House",
    description:
      "A beach house with a nautical theme, steps away from the sea. Water sports gear included.",
  },
  {
    title: "Eco-Friendly Pod",
    description:
      "An innovative, eco-friendly lodging option. Great for the environmentally conscious traveler.",
  },
  {
    title: "Haunted Mansion",
    description:
      "Dare to stay in a reportedly haunted mansion. Ghost tours included.",
  },
  {
    title: "Old-World Cottage",
    description:
      "A quaint cottage that transports you back to simpler times. Includes a cozy fireplace.",
  },
  {
    title: "Zen Yoga Retreat",
    description:
      "A peaceful retreat focused on well-being and inner peace. Yoga classes included.",
  },
  {
    title: "Gamer’s Paradise",
    description:
      "Fully equipped with gaming consoles and a high-speed internet connection. Perfect for gamers.",
  },
  {
    title: "Tropical Treehouse",
    description:
      "Experience life among the trees in this secluded treehouse. Includes a zipline to the ground.",
  },
  {
    title: "Secluded Island Villa",
    description:
      "A luxurious villa on a private island. Comes with a personal butler.",
  },
  {
    title: "Urban Cowboy Loft",
    description:
      "A unique loft with a wild west theme, right in the city. Cowboy hat included.",
  },
  {
    title: "Vineyard Villa",
    description:
      "Stay on a working vineyard and enjoy complementary wine tours and tastings.",
  },
  {
    title: "Hobbit Hole",
    description:
      "For fans of fantasy, live like a hobbit in this underground home.",
  },
  {
    title: "Romantic Gazebo",
    description:
      "Perfect for couples, enjoy a romantic stay in a beautiful gazebo surrounded by gardens.",
  },
  {
    title: "Jungle Bungalow",
    description:
      "Stay in the heart of the jungle in this well-equipped bungalow. Wildlife tours available.",
  },
  {
    title: "Mid-Century Modern Home",
    description:
      "A beautifully preserved home with mid-century furniture and decor.",
  },
  {
    title: "Art Deco Suite",
    description:
      "Live in the glamour of the past in this beautiful Art Deco suite.",
  },
  {
    title: "Retro Camper Van",
    description:
      "Experience a nomadic lifestyle in this fully restored retro camper van.",
  },
  {
    title: "Underwater Pod",
    description:
      "An unforgettable experience in an underwater pod. Watch marine life from your bed.",
  },
  {
    title: "Space Themed Flat",
    description:
      "For space enthusiasts, a flat that makes you feel like you're on another planet.",
  },
  {
    title: "Hermit’s Cabin",
    description:
      "A basic, isolated cabin for those looking to unplug from the world.",
  },
  {
    title: "Time-Traveler’s Inn",
    description:
      "Each room is themed after a different time period, from prehistoric to futuristic.",
  },
  {
    title: "Literary Hideaway",
    description:
      "Filled with books and vintage typewriters, perfect for writers and readers.",
  },
  {
    title: "Meditation Yurt",
    description:
      "A simple, peaceful yurt focused on meditation and mindfulness.",
  },
  {
    title: "Antique Train Car",
    description:
      "A restored train car turned into a unique living space. Experience travel like the early 1900s.",
  },
  {
    title: "Sci-Fi Capsule",
    description:
      "Live out your science fiction dreams in this futuristic capsule lodging.",
  },
  {
    title: "Ice Hotel Room",
    description:
      "A room within an ice hotel. Thermal clothing and hot drinks included.",
  },
  {
    title: "Fairy Tale Castle",
    description:
      "For those who love fairy tales, a small castle themed after classic stories.",
  },
  {
    title: "Airplane Hangar Suite",
    description:
      "Stay in a converted airplane hangar with real aircraft inside. Flight simulators included.",
  },
  {
    title: "Pirate Ship Cabin",
    description:
      "Ahoy! Experience life on a ship. Comes with pirate hats and a treasure map.",
  },
  {
    title: "Museum Loft",
    description:
      "A loft located within a museum. Private nighttime tours included.",
  },
  {
    title: "Arctic Igloo",
    description:
      "Stay in a traditional igloo in a frosty setting. Great for seeing the Northern Lights.",
  },
];

module.exports = listings;
