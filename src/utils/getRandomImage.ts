import profile1 from "../assets/images/profiles/profile1.jpg";
import profile2 from "../assets/images/profiles/profile2.jpg";
import profile3 from "../assets/images/profiles/profile3.jpg";
import profile4 from "../assets/images/profiles/profile4.jpg";
import profile5 from "../assets/images/profiles/profile5.jpeg";
import profile6 from "../assets/images/profiles/profile6.jpeg";
import profile7 from "../assets/images/profiles/profile7.jpeg";
import profile8 from "../assets/images/profiles/profile8.jpg";
import profile9 from "../assets/images/profiles/profile9.png";

// Combine all images into one array
export const allImages = [
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  profile8,
  profile9,
];

// Function to get a random image from the array
export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * allImages.length);
  return allImages[randomIndex];
};
