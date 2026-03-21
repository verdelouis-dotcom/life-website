export type GalleryPhoto = {
  src: string;
  alt: string;
  city: string;
  state: string;
  hostedDate: string;
  host?: string;
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/workshops/pasta-lesson-1.jpg",
    alt: "Host demonstrating how to feed pasta dough through a roller",
    city: "Atlanta",
    state: "GA",
    hostedDate: "January 2026",
  },
  {
    src: "/images/workshops/IMG_8060.jpeg",
    alt: "Neighbors folding pasta sheets together",
    city: "Decatur",
    state: "GA",
    hostedDate: "February 2026",
  },
  {
    src: "/images/Food/pasta3.jpeg",
    alt: "Plated pasta topped with fresh herbs",
    city: "Smyrna",
    state: "GA",
    hostedDate: "March 2026",
  },
  {
    src: "/images/Food/veggies2.jpeg",
    alt: "Fresh vegetables arranged for cooking",
    city: "Marietta",
    state: "GA",
    hostedDate: "April 2026",
  },
  {
    src: "/images/table/table4.jpeg",
    alt: "Set LIFE workshop with olive oil and herbs",
    city: "Roswell",
    state: "GA",
    hostedDate: "May 2026",
  },
  {
    src: "/images/table/table6.jpeg",
    alt: "Guests seated for a hosted cooking LIFE workshop",
    city: "Peachtree City",
    state: "GA",
    hostedDate: "June 2026",
  },
  {
    src: "/images/workshops/31926/austin-1.jpeg",
    alt: "Kim's neighbors making fresh pasta together in Austin",
    city: "Austin",
    state: "TX",
    hostedDate: "March 2026",
    host: "Kim",
  },
  {
    src: "/images/workshops/31926/austin-3.jpeg",
    alt: "Neighbors gathered in Kim's kitchen for a LIFE workshop in Austin",
    city: "Austin",
    state: "TX",
    hostedDate: "March 2026",
    host: "Kim",
  },
  {
    src: "/images/workshops/31926/austin-5.jpeg",
    alt: "Family and neighbors sharing a meal at Kim's Austin LIFE gathering",
    city: "Austin",
    state: "TX",
    hostedDate: "March 2026",
    host: "Kim",
  },
  {
    src: "/images/workshops/31926/austin-7.jpeg",
    alt: "Austin neighbors around the table at Kim's LIFE gathering",
    city: "Austin",
    state: "TX",
    hostedDate: "March 2026",
    host: "Kim",
  },
];
