


import living from "../assets/images/living-room.jpg";
import bedroom from "../assets/images/bedroom.jpg";
import kitchen from "../assets/images/kitchen.jpg";
import office from "../assets/images/office.jpg";

import bng1 from "../assets/Projects/Bangalore/Beautiful designed living room interior.jpg";
import bng2 from "../assets/Projects/Bangalore/LIVING ROOM DESIGN WITH A SLIGHT TRADITIONAL TOUCH.jpg";
import bng3 from "../assets/Projects/Bangalore/LIVING ROOM DESIGN.jpg";
import bng4 from "../assets/Projects/Bangalore/MODERN DESIGN TV UNIT.jpg";
import bng5 from "../assets/Projects/Bangalore/Modern traditional bedroom Interior.jpg";
import bng6 from "../assets/Projects/Bangalore/study table design.jpg";
import bng7 from "../assets/Projects/Bangalore/TRADITIONAL STYLE LIVING ROOM DESIGN.jpg";
import mng1 from "../assets/Projects/Mangalore/ll.webp";
import mng2 from "../assets/Projects/Mangalore/ll1.webp";
import mng21 from "../assets/Projects/Mangalore/mng21.webp";
import mng22 from "../assets/Projects/Mangalore/mng22.png";

import mng26 from "../assets/Projects/Mangalore/mng26.png";
import mng25 from "../assets/Projects/Mangalore/mng25.png";
import mng27 from "../assets/Projects/Mangalore/mng27.png";

import mng30 from "../assets/Projects/Mangalore/mng30.png";
import mng31 from "../assets/Projects/Mangalore/mng31.png";

import bng8 from "../assets/Projects/Bangalore/bng8.png";

// bangalore1

import bng11 from "../assets/Projects/Bangalore/bng11.jpeg";
import bng12 from "../assets/Projects/Bangalore/bng12.jpeg";
import bng13 from "../assets/Projects/Bangalore/bng13.jpeg";
import bng15 from "../assets/Projects/Bangalore/bng15.jpeg";
import bng16 from "../assets/Projects/Bangalore/bng16.jpeg";
import bng17 from "../assets/Projects/Bangalore/bng17.jpeg";
import bng18 from "../assets/Projects/Bangalore/bng18.jpeg";




import mng3 from "../assets/Projects/Mangalore/mng3.jpeg";
import mng4 from "../assets/Projects/Mangalore/mng4.jpeg";
import mng5 from "../assets/Projects/Mangalore/mng5.jpeg";
import mng6 from "../assets/Projects/Mangalore/mng6.jpeg";
import mng7 from "../assets/Projects/Mangalore/mng7.jpeg";
import mng8 from "../assets/Projects/Mangalore/mng8.jpeg";
import mng9 from "../assets/Projects/Mangalore/mng9.jpeg";
import mng10 from "../assets/Projects/Mangalore/mng10.jpeg";
import mng11 from "../assets/Projects/Mangalore/mng11.jpeg";




import mng41 from "../assets/Projects/Mangalore/mng41.png";
import mng42 from "../assets/Projects/Mangalore/mng42.png";
import mng43 from "../assets/Projects/Mangalore/mng43.png";
import mng44 from "../assets/Projects/Mangalore/mng44.png";


import bngg11 from "../assets/Projects/Bangalore/bngg11.jpg";
import bngg12 from "../assets/Projects/Bangalore/bngg12.jpg";
import bngg13 from "../assets/Projects/Bangalore/bngg13.jpg";
import bngg14 from "../assets/Projects/Bangalore/bngg14.jpg";
import bngg15 from "../assets/Projects/Bangalore/bngg15.jpg";
import bngg16 from "../assets/Projects/Bangalore/bngg16.jpg";
import bngg17 from "../assets/Projects/Bangalore/bngg17.jpg";
import bngg18 from "../assets/Projects/Bangalore/bngg18.jpg";
import bngg19 from "../assets/Projects/Bangalore/bngg19.jpg";


import mngg1 from "../assets/Projects/Bangalore/mngg1.jpg";
import mngg2 from "../assets/Projects/Bangalore/mngg2.jpg";
import mngg3 from "../assets/Projects/Bangalore/mngg3.jpg";
import mngg4 from "../assets/Projects/Bangalore/mngg4.jpg";

import mngg6 from "../assets/Projects/Bangalore/mngg6.jpg";
import mngg7 from "../assets/Projects/Bangalore/mngg7.jpg";
import mngg8 from "../assets/Projects/Bangalore/mngg8.jpg";
import mngg9 from "../assets/Projects/Bangalore/mngg9.jpg";
import mngg10 from "../assets/Projects/Bangalore/mngg10.jpg";
import mngg11 from "../assets/Projects/Bangalore/mngg11.jpg";




// -------------------------------------------------- 
// LOCATIONS
// --------------------------------------------------

export const locations = [
  { name: "Mangalore", tag: "Karnataka" },
  { name: "Bangalore", tag: "Karnataka" },
  { name: "Udupi", tag: "Karnataka" },
  { name: "Moodbidri", tag: "Karnataka" },
  { name: "Karkala", tag: "Karnataka" },
  { name: "Mysore", tag: "Karnataka" },
  { name: "Puttur", tag: "Karnataka" },
  { name: "Kerala", tag: "God's Own Country" },
];

// --------------------------------------------------
// SERVICE CATEGORIES
// Used for filtering and displaying project types.
// --------------------------------------------------

export const categories = [
  {
    id: "residential",
    group: "Residential",
    name: "Residential Interiors",
    title: "Residential Interior Design",
    kicker: "SPACES MADE FOR LIVING",
    img: living,
  },
  {
    id: "commercial",
    group: "Commercial",
    name: "Commercial Interiors",
    title: "Commercial Interior Design",
    kicker: "DESIGNED FOR BUSINESS",
    img: office,
  },
  {
    id: "renovation",
    group: "Renovation and Remodeling",
    name: "Renovation & Remodeling",
    title: "Renovation and Remodeling",
    kicker: "REIMAGINE YOUR SPACE",
    img: bedroom,
  },
  {
    id: "custom-design",
    group: "Custom Design",
    name: "Custom Design",
    title: "Custom Interior Design",
    kicker: "DESIGNED AROUND YOU",
    img: kitchen,
  },
  {
    id: "furniture-decor",
    group: "Furniture & Decor Consultation",
    name: "Furniture & Decor Consultation",
    title: "Furniture and Decor Consultation",
    kicker: "THE DETAILS MAKE THE DIFFERENCE",
    img: living,
  },
  {
    id: "space-planning",
    group: "Space Planning & 3D Visualization",
    name: "Space Planning & 3D Visualization",
    title: "Space Planning and 3D Visualization",
    kicker: "VISUALIZE BEFORE WE CREATE",
    img: office,
  },
];

// --------------------------------------------------
// ACTUAL PROJECTS
// Each project has its own images and details.
//
// Add new completed projects to this array.
// Do not add projects to the categories array.
// --------------------------------------------------

export const projectsdata = [


{
  id: "jeppinamogaru-residential-01",
  title: "Residential Interior Design, Jeppinamogaru",
  location: "Mangalore",
  group: "Renovation and Remodeling",
  categoryId: "renovation",
  kicker: "MODERN LIVING, THOUGHTFULLY DESIGNED",

  img: mng41,
  images: [mng41, mng42, mng43, mng44],

  description:
    "A thoughtfully designed residential space in Jeppinamogaru, Mangaluru, combining comfort, elegance, and functional interior elements.",

  year: "",
  area: "",
  client: "Residential Client",
  status: "Completed",

  address: "Jeppinamogaru, Mangaluru, Karnataka, India",
  lat: null,
  lng: null,

  instagramUrl:
    "https://www.instagram.com/reel/DKR2k83v4NS/",
},

{
  id: "bangalore-modern-living-room",
  title: "Modern Living Room Design",
  location: "Jeppina Muger, Mangalore",
  group: "Renovation and Remodeling",
  categoryId: "renovation",
  kicker: "MODERN LIVING",

  img: mngg7,
  images: [
    mngg1,
    mngg2,
     mngg3,mngg4,mngg6,mngg7,mngg8,mngg9,mngg11
  ],

  description:
    "A modern living space designed with a clean visual style and a focus on everyday comfort.",

  year: "",
  area: "",
  client: "",
  status: "Completed",
  address: "",
  lat: null,
  lng: null,

  instagramUrl: "https://www.instagram.com/reel/DTXtxehjNB4/"
},
  {
  id: "marian-park-kadri-01",
  title: "Marian Park, Kadri",
  location: "Mangalore",
  group: "Residential",
  categoryId: "residential",
  kicker: "MODERN LIVING, THOUGHTFULLY DESIGNED",

  img: mng5,
  images: [mng3, mng4, mng5, mng6, mng7, mng8, mng9, mng10, mng11],

  description:
    "A thoughtfully designed residential space at Marian Park, Kadri, Mangaluru, combining comfort, elegance, and functional interior elements.",

  year: "",
  area: "",
  client: "Marian Park",
  status: "Completed",
  address: "Marian Park, Kadri, Mangaluru, Karnataka, India",
  lat: null,
  lng: null,
   instagramUrl: "https://www.instagram.com/reel/DUsk0cGDwZb/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA=="
},

  {
    id: "bangalore-modern-living-room",
    title: "Modern Living Room Design",
    location: "Peenya, Bangalore",
    group: "Residential",
    categoryId: "residential",
    kicker: "MODERN LIVING",

    img: bngg11,
    images: [bngg11,bngg12,bngg13,bngg14,bngg15,bngg16,bngg17, bngg18,bngg19],

    description:
      "A modern living space designed with a clean visual style and a focus on everyday comfort.",

    year: "",
    area: "",
    client: "",
    status: "Completed",
    address: "",
    lat: null,
    lng: null,
    instagramUrl: "https://www.instagram.com/reel/DaUfmb4h7l-/"
  },


  // {
  //   id: "bangalore-living-room-02",
  //   title: "Living Room with a Traditional Touch",
  //   location: "Bangalore",
  //   group: "Residential",
  //   categoryId: "residential",
  //   kicker: "TIMELESS DESIGN",

  //   img: bng2,
  //   images: [bng2],

  //   description:
  //     "A living room concept blending contemporary styling with traditional design elements.",

  //   year: "",
  //   area: "",
  //   client: "",
  //   status: "Completed",
  //   address: "",
  //   lat: null,
  //   lng: null,
  // },
  {
    id: "bangalore-living-room-01",
    title: "Beautifully Designed Living Room",
    location: "Bangalore",
    group: "Residential",
    categoryId: "residential",
    kicker: "SPACES MADE FOR LIVING",

    img: bng1,
    images: [bng1,bng11,bng12,bng13,bng15,bng16,bng17,bng18],

    description:
      "A thoughtfully designed living room combining comfort, elegance, and functional interior elements.",

    year: "",
    area: "",
    client: "",
    status: "Completed",
    address: "",
    lat: null,
    lng: null,
  },
  {
    id: "bangalore-modern-living-room",
    title: "Modern Living Room Design",
    location: "Peenya, Bangalore",
    group: "Residential",
    categoryId: "residential",
    kicker: "MODERN LIVING",

    img: bng3,
    images: [bng3],

    description:
      "A modern living space designed with a clean visual style and a focus on everyday comfort.",

    year: "",
    area: "",
    client: "",
    status: "Completed",
    address: "",
    lat: null,
    lng: null,
  },

  {
    id: "bangalore-modern-tv-unit",
    title: "Modern Design TV Unit",
    location: "Bangalore",
    group: "Residential",
    categoryId: "residential",
    kicker: "DETAILS THAT STAND OUT",

    img: bng4,
    images: [bng4],

    description:
      "A modern TV unit design intended to create a stylish and organized entertainment area.",

    year: "",
    area: "",
    client: "",
    status: "Completed",
    address: "",
    lat: null,
    lng: null,
  },

  {
    id: "bangalore-traditional-bedroom",
    title: "Modern Traditional Bedroom Interior",
    location: "Bangalore",
    group: "Residential",
    categoryId: "residential",
    kicker: "YOUR PERSONAL RETREAT",

    img: bng5,
    images: [bng5],

    description:
      "A bedroom interior concept combining modern comfort with traditional design influences.",

    year: "",
    area: "",
    client: "",
    status: "Completed",
    address: "",
    lat: null,
    lng: null,
  },

  {
    id: "bangalore-study-table",
    title: "Study Table Design",
    location: "Bangalore",
    group: "Residential",
    categoryId: "residential",
    kicker: "DESIGNED FOR PRODUCTIVITY",

    img: bng6,
    images: [bng6],

    description:
      "A dedicated study area designed around practical use and an organized workspace.",

    year: "",
    area: "",
    client: "",
    status: "Completed",
    address: "",
    lat: null,
    lng: null,
  },

  {
    id: "bangalore-traditional-living-room",
    title: "Traditional Style Living Room",
    location: "Bangalore",
    group: "Residential",
    categoryId: "residential",
    kicker: "TIMELESS ELEGANCE",

    img: bng7,
    images: [bng7,bng8],

    description:
      "A traditional living room design emphasizing a welcoming atmosphere and classic styling.",

    year: "",
    area: "",
    client: "",
    status: "Completed",
    address: "",
    lat: null,
    lng: null,
  },

{
  id: "Family restaurant",
  title: "Liquor Lounge Family Restaurant and Bar",
  location: "Mangalore",
  group: "Commercial",
  categoryId: "commercial",
  kicker: "Where Taste Meets Luxury",

  img: mng1, // Main image shown in the project listing
  images: [mng1, mng2,mng27,mng30,mng31], // Multiple project images

  description:
    "Liquor Lounge Family Restaurant & Bar is a rooftop dining destination in Mangaluru with a welcoming atmosphere and a diverse menu.",

  year: "",
  area: "",
  client: "",
  status: "Completed",

  address:
    "Liquor Lounge Family Restaurant and Bar, WR5X+2VM, Derebail, Mangaluru, Karnataka 575006",

  lat: null,
  lng: null,
  instagramUrl:
    "https://www.instagram.com/reel/DKR2k83v4NS/",
},
{
  id: "Salont",
  title: "MY BARBER MEN SALON",
  location: "Mangalore",
  group: "Commercial",
  categoryId: "commercial",
  kicker: "Look Sparp,Look Sharper",

  img: mng25, // Main image shown in the project listing
  images: [mng22, mng21,mng26,mng25], // Multiple project images

  description:  
    "My Barber Men Salon is a premium, men-exclusive grooming lounge located in Karangalpady, Mangaluru. Known for its modern setup and expert stylists, the salon offers high-quality haircuts, beard styling, hair spa treatments, and advanced skin facials",

  year: "",
  area: "",
  client: "",
  status: "Completed",

  address:
    "MY BARBER MEN SALON Ground Floor, Essel Chambers, Opposite Karangalpady Market, Karangalpady, Mangaluru – 575003",

  lat: null,
  lng: null,
},
];

// --------------------------------------------------
// PROJECTS EXPORT
// Maintains compatibility with existing components.
// --------------------------------------------------

export const projects = projectsdata;

