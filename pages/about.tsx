import "animate.css";
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="col-auto mx-auto justify-center lg:flex-row items-center gap-4 my-4">
        <div className="col-span-1 justify-items-center"></div>
        <div className="w-96 p-4 md:w-2/3 lg:ml-48 playfair-display md:columns-2 cmd:gap-12">
          <div className={`rounded-lg w-96 ${loaded ? 'animation-fade-in' : ''}`}>
            <Image
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto' }}
              src="https://i.imgur.com/shn2Nop.jpeg"
              alt="Olivia"
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div>
            <h3 className="text-xl">
              Hi, my name is <strong> Olivia</strong>.
            </h3>
            <p className="mt-1 text-sm text-gray-500">[25 in nyc]</p>
            <p className="mt-4 text-gray-700">
              I am currently based in NYC. This is my creative portfolio website :) where I add random things non-work related. Mostly DSLR adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

