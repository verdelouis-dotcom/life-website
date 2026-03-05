export type GalleryPhoto = {
  src: string;
  alt: string;
  city: string;
  state: string;
  hostedDate: string;
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
    src: "/images/workshops/pasta-lesson-2.jpg",
    alt: "Fresh pasta dough resting before cutting",
    city: "Decatur",
    state: "GA",
    hostedDate: "February 2026",
  },
  {
    src: "/images/workshops/pasta-lesson-3.jpeg",
    alt: "Neighbors pressing dough together during a cooking table",
    city: "Smyrna",
    state: "GA",
    hostedDate: "March 2026",
  },
  {
    src: "/images/workshops/pasta-lesson-4.jpeg",
    alt: "Community members mixing ingredients around a shared counter",
    city: "Marietta",
    state: "GA",
    hostedDate: "April 2026",
  },
  {
    src: "/images/workshops/pasta-lesson-5.jpeg",
    alt: "Completed pasta dishes being plated for guests",
    city: "Roswell",
    state: "GA",
    hostedDate: "April 2026",
  },
];
