import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageListItem } from '../../types';

interface ImageGridProps {
  images: ImageListItem[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  const [loadedStates, setLoadedStates] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    const updatedLoadedStates = [...loadedStates];
    updatedLoadedStates[index] = true;
    setLoadedStates(updatedLoadedStates);
  };

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 p-6 playfair-display">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`relative overflow-hidden group mb-6 break-inside-avoid ${
            loadedStates[index] ? "animation-fade-in" : ""
          }`}
        >
          <Link href={`/posts/${image.id}`} className="block relative">
            <Image
              src={image.src}
              alt={image.title}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onLoad={() => handleImageLoad(index)}
              className="duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-white text-xl font-semibold drop-shadow-lg">{image.title}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

