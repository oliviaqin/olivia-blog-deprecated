import "animate.css";
import Image from 'next/image';
import { useState } from 'react';

export default function About() {

  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div class="col-auto mx-auto justify-center lg:flex-row items-center gap-4 my-4">
        <div class="col-span-1 justify-items-center	"></div>
        <div class="w-96 p-4 md:w-2/3 lg:ml-48 playfair-display md:columns-1 cmd:gap-12">
          {/* <div class={`rounded-lg w-96 ${loaded ? 'animation-fade-in' : ''}`}>
            <Image
              width={100}
              height={100} // Adjust based on your aspect ratio
              layout="responsive"
              src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697327404/cpm35_2023-10-14_194904.121_dqtlwg.jpg"
              onLoadingComplete={() => setLoaded(true)}
            />
          </div> */}
          <div>
            <h3 class="text-xl">
              Hi, my name is <strong> Olivia</strong>.
            </h3>
            <p class="mt-1 text-sm text-gray-500">[24 in nyc]</p>
            <p class="mt-4 text-gray-700">
              Creative portfolio website :) 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
