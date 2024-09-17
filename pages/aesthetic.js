import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imageList } from './data/_const.js';

export default function Aesthetic() {
  const [loadedStates, setLoadedStates] = useState(
    new Array(imageList.length).fill(false)
  );

  const handleImageLoad = (index) => {
    const updatedLoadedStates = [...loadedStates];
    updatedLoadedStates[index] = true;
    setLoadedStates(updatedLoadedStates);
  };

  return (
    <div className="columns-1 gap-5 md:columns-2 lg:columns-3 playfair-display">
      {imageList.map((image, index) => (
        <div
          key={index}
          className={`w-full p-3.5 relative overflow-hidden group ${
            loadedStates[index] ? "animation-fade-in" : ""
          }`}
        >
          <Link href={`/posts/${image.id}`}>
              <Image
                src={image.src}
                alt={image.title}
                width={100}
                height={100}
                layout="responsive"
                onLoadingComplete={() => handleImageLoad(index)}
                className="duration-300 group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <span className="text-white text-xl">{image.title}</span>
              </div>
          </Link>
        </div>
      ))}
    </div>
  );
}