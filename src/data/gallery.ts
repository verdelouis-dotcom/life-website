export type GalleryPhoto = {
  src: string;
  alt: string;
  city: string;
  state: string;
  hostedDate: string;
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Neighbors preparing vegetables together",
    city: "Atlanta",
    state: "GA",
    hostedDate: "January 2026",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Family-style meal with fresh produce",
    city: "Decatur",
    state: "GA",
    hostedDate: "February 2026",
  },
  {
    src: "/images/gallery-5.jpeg",
    alt: "Hands-on pasta lesson",
    city: "Peachtree City",
    state: "GA",
    hostedDate: "March 2026",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Outdoor hosted cooking table",
    city: "Marietta",
    state: "GA",
    hostedDate: "March 2026",
  },
];
