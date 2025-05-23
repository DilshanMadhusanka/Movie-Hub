export interface Movie {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  poster: string;
  backdrop: string;
  releaseDate: string;
  runtime: number;
  rating: number;
  genres: string[];
  category: "movie" | "tv";
  isFeatured: boolean;
  isNew: boolean;
  isHD: boolean;
  watchUrl: string;
  downloadUrl: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Detention Letter",
    tagline: "When faith turns to fury, vengeance writes its own letter.",
    overview:
      "who are enrolled in one of the terrorist groups that the killings, believing they are fighting for the sake of God, and when his brother (Ahmad) tries to join this group (Khaled) refuses, he is trying to stop him, but he joins, and one day arise a dispute between (Ahmad) and one of the members of this community, (Ahmed) get killed, (Khalid) go mad who seeks revenge against the group, the same moment the issue Answer the arrest of the police against",
    poster:
      "https://img.icdn.my.id/thumb/w_178/h_267/detention-letter-1630859073.webp",
    backdrop:
      "https://images.pexels.com/photos/4310479/pexels-photo-4310479.jpeg?auto=compress&cs=tinysrgb&w=1280",
    releaseDate: "2017",
    runtime: 100,
    rating: 8.6,
    genres: ["Action", "Crime", "Thriller"],
    category: "movie",
    isFeatured: true,
    isNew: false,
    isHD: true,
    watchUrl:
      "https://ww4.123moviesfree.net/movie/detention-letter-1630859073/",
    downloadUrl:
      "https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0",
  },
  {
    id: 2,
    title: "To End All War: Oppenheimer & the Atomic Bomb",
    tagline: "The genius who split the atom — and the world.",
    overview:
      "Explore how one man’s relentless drive and invention of the atomic bomb changed the nature of war forever, led to the deaths of hundreds of thousands of people and unleashed mass hysteria.",
    poster:
      "https://img.icdn.my.id/thumb/w_178/h_267/to-end-all-war-oppenheimer-the-atomic-bomb-1630855468.webp",
    backdrop:
      "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1280",
    releaseDate: "2023",
    runtime: 87,
    rating: 9.0,
    genres: ["Documentary"],
    category: "movie",
    isFeatured: true,
    isNew: false,
    isHD: true,
    watchUrl:
      "https://ww4.123moviesfree.net/movie/to-end-all-war-oppenheimer-the-atomic-bomb-1630855468/",
    downloadUrl:
      "https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0",
  },
  {
    id: 3,
    title: "Barbie",
    tagline: "In a world of pretend, the price of envy is heartbreak.",
    overview:
      "The story is about two sisters Soon Ja and Soon Young , the sister must take care of family, contrary the weak sister only plays with the barbie. One day a stranger person suddenly appears from the USA, he offers to adopt Soon Young. Soon Ja, because of jealousy ,finds ways to replace her sister. But behind the contract adoption is an unexpected thing...",
    poster: "https://img.icdn.my.id/thumb/w_178/h_267/barbie-3943.webp",
    backdrop:
      "https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?auto=compress&cs=tinysrgb&w=1280",
    releaseDate: "2012",
    runtime: 97,
    rating: 9.5,
    genres: ["Drama"],
    category: "movie",
    isFeatured: true,
    isNew: false,
    isHD: true,
    watchUrl: "https://ww4.123moviesfree.net/movie/barbie-3943/",
    downloadUrl:
      "https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0",
  },
  {
    id: 4,
    title: "Soul to Squeeze",
    tagline: "To escape his mind, he must survive it.",
    overview:
      "Jacob’s got problems-deep, mental ones. Desperate for relief, he volunteers for a radical treatment to escape his tortured mind. But instead of peace, he finds himself trapped in a house with a tunnel to his subconscious. What begins as a path to healing becomes a harrowing descent where memory fractures, time distorts, and reality bends. A first-of-its-kind cinematic experience, Soul to Squeeze begins in a boxy 4:3 aspect ratio and ever so slowly widens to a full 2.35:1 by the final frame-mirroring Jacob’s expanding perception as he risks everything for redemption. Visually daring and emotionally raw, Soul to Squeeze merges body with mind, taking audiences on a perilous journey through the psyche.",
    poster:
      "https://img.icdn.my.id/thumb/w_178/h_267/soul-to-squeeze-1630859072.webp",
    backdrop:
      "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1280",
    releaseDate: "2025",
    runtime: 86,
    rating: 8.7,
    genres: ["Drama", " Adventure", "Horror"],
    category: "movie",
    isFeatured: true,
    isNew: true,
    isHD: true,
    watchUrl: "https://ww4.123moviesfree.net/movie/soul-to-squeeze-1630859072/",
    downloadUrl:
      "https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0",
  },
  {
    id: 5,
    title: "Rosario",
    tagline: "Trapped by a storm. Haunted by blood.",
    overview:
      "After her estranged grandmother unexpectedly passes away, a snowstorm locks Rosario in with the body while twisted supernatural forces begin assaulting her.",
    poster: "https://img.icdn.my.id/thumb/w_178/h_267/rosario-1630859067.webp",
    backdrop:
      "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1280",
    releaseDate: "2025",
    runtime: 88,
    rating: 7.4,
    genres: ["Horror"],
    category: "movie",
    isFeatured: true,
    isNew: true,
    isHD: true,
    watchUrl: "https://ww4.123moviesfree.net/movie/rosario-1630859067/",
    downloadUrl:
      "https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0",
  },
  {
    id: 6,
    title: "Butchers Bluff",
    tagline: "The 80s are back… and bloodier than ever.",
    overview: "A Modern Slasher film in the style of the 1980’s",
    poster:
      "https://img.icdn.my.id/thumb/w_178/h_267/butchers-bluff-1630859059.webp",
    backdrop:
      "https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&w=1280",
    releaseDate: "2023",
    runtime: 125,
    rating: 8.7,
    genres: ["Horror"],
    category: "movie",
    isFeatured: false,
    isNew: false,
    isHD: true,
    watchUrl: "https://ww4.123moviesfree.net/movie/butchers-bluff-1630859059/",
    downloadUrl:
      "https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0",
  },
  {
    id: 7,
    title: "Blue Devils",
    tagline: "They danced for survival. Now they’re fighting for justice",
    overview:
      "Joi and friends turn to stripping after job loss. When a friend is assaulted by the club owner, they plan a heist for justice. As they target a bigger club, a police raid leads to a gripping hostage crisis, testing their bond and strength.",
    poster:
      "https://img.icdn.my.id/thumb/w_178/h_267/blue-devils-1630859050.webp",
    backdrop:
      "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1280",
    releaseDate: "2025",
    runtime: 0,
    rating: 8.7,
    genres: ["Action", "Crime", "Drama"],
    category: "movie",
    isFeatured: true,
    isNew: true,
    isHD: true,
    watchUrl: "https://ww4.123moviesfree.net/movie/blue-devils-1630859050/",
    downloadUrl:
      "https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0",
  },
  {
    id: 8,
    title: "MobLand - Season 1",
    tagline: "Power. Blood. Loyalty. Only one family survives.",
    overview:
      "Power is up for grabs as the Harrigans and Stevensons, two warring London crime families, clash in a kill-or-be-killed battle that threatens to topple empires and ruin lives. Caught in the crossfire is Harry Da Souza, the street-smart ‘fixer’ as dangerous as he is handsome, who knows too well where loyalties lie when opposing forces collide. As kingdom goes up against kingdom, lines will be crossed - and the only saving grace is a bet-your-life guarantee: family above everything.",
    poster:
      "https://img.icdn.my.id/thumb/w_178/h_267/mobland-season-1-1630858729.webp",
    backdrop:
      "https://images.pexels.com/photos/6087884/pexels-photo-6087884.jpeg?auto=compress&cs=tinysrgb&w=1280",
    releaseDate: "1970",
    runtime: 60,
    rating: 9.3,
    genres: ["Crime", "Drama"],
    category: "tv",
    isFeatured: true,
    isNew: true,
    isHD: true,
    watchUrl:
      "https://ww4.123moviesfree.net/season/mobland-season-1-1630858729/",
    downloadUrl:
      "https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0",
  },
];
