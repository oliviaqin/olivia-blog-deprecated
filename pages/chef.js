import Image from 'next/image';
import { useState } from 'react';

export default function Random() {
  const imageList = [
    { src: "https://i.imgur.com/h6t0DOf.jpg", title: "salmon" },
    { src: "https://i.imgur.com/m5ycyf2.jpg", title: "beef sukiyaki!" },
    { src: "https://i.imgur.com/dKiPPb9.jpg", title: "acai bowl!" },
    { src: "https://i.imgur.com/IV3z9PU.jpg", title: "pasta"},
    { src: "https://i.imgur.com/PQ2lVH0.jpg", title: "korean"},
  ];

  const [loadedStates, setLoadedStates] = useState(new Array(imageList.length).fill(false));

  const handleImageLoad = (index) => {
    const updatedLoadedStates = [...loadedStates];
    updatedLoadedStates[index] = true;
    setLoadedStates(updatedLoadedStates);
  };


  return (
    <div class="columns-1 gap-5 md:columns-2 lg:columns-3 playfair-display">
      {imageList.map((image, index) => (
        <div key={index} className={`photo-card w-full p-3.5 group-hover:opacity-50 duration-300 ${loadedStates[index] ? 'animation-fade-in' : ''}`}>
          {/* Optimize and control image loading with Next.js Image component */}
          <Image
            src={image.src}
            alt={image.title}
            width={100}
            height={100} // Adjust based on your aspect ratio
            layout="responsive"
            onLoadingComplete={() => handleImageLoad(index)}
          />
        </div>
      ))}
    </div>
  );
}
