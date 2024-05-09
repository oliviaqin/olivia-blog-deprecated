import Image from 'next/image';
import { useState } from 'react';

export default function Random() {
  const imageList = [
    { src: "https://i.imgur.com/5tOnZMC.jpg", title: "cherry blossoms!" },
    { src: "https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697299981/cpm35_2023-10-13_164831.996_qhwr0a.jpg", title: "cornell library!" },
    { src: "https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697299980/instc_2023-10-13_205614.994_etkbzo.jpg", title: "ithaca cabin!" },
    { src: "https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697327405/cpm35_2023-10-14_194814.402_prkm51.jpg", title: "lavender fields!" },
    { src: "https://res.cloudinary.com/ddfmg0d4v/image/upload/v1698110616/dclassic_2023-10-23_212312.954_ao9knb.jpg", title: "rozes" },
    { src: "https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697329536/cpm35_2023-10-14_202151.889_uhwyyg.jpg", title: "san francisco" },
    { src: "https://i.imgur.com/BFdEtAn.jpg", title: "nyc spring!" },
    { src: "https://res.cloudinary.com/ddfmg0d4v/image/upload/v1698109606/instsqc_2023-10-23_210340.582_yygycj.jpg", title: "paris blding!" },
    { src: "https://res.cloudinary.com/ddfmg0d4v/image/upload/v1698109611/cpm35_2023-10-23_210240.390_fnmkar.jpg", title: "italy boats!" },
    { src: "https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697328788/cpm35_2023-10-14_201223.893_df3dda.jpg", title: "budapest cafe!" },
    { src: "https://i.imgur.com/slCRCEG.jpg", title: "banff mountains!" },
    { src: "https://i.imgur.com/JHNMLnj.jpg", title: "banff sunset car window!" },
    { src: "https://i.imgur.com/vQacPRt.jpeg", title: "cancun italian restaurant!" },
    { src: "https://i.imgur.com/zRW3HYV.jpeg", title: "kingston thrift store!" },
    { src: "https://i.imgur.com/7M8Lhjk.jpeg", title: "cancun beach" },
    { src: "https://i.imgur.com/KdcRqVu.jpeg", title: "central park!" },
    { src: "https://i.imgur.com/fnStKBl.jpg", title: "long island!" },
    { src: "https://i.imgur.com/A0qF5nW.jpg", title: "tiff in nyc!" },
    { src: "https://i.imgur.com/tLl5FLa.jpg", title: "budapest!" },
    { src: "https://i.imgur.com/yo7IREE.jpg", title: "paris!" },
    { src: "https://i.imgur.com/KdcRqVu.jpeg", title: "tiff in nyc!" },
    { src: "https://i.imgur.com/cZrwSvm.jpg", title: "paris!" },
    { src: "https://i.imgur.com/D25JJb5.jpg", title: "paris!" },
    { src: "https://i.imgur.com/n6CZcoA.jpg", title: "yom!" },
    { src: "https://i.imgur.com/dBOtdTB.jpg", title: "davelle!" },
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
        <div key={index} className={`w-full p-3.5 group-hover:opacity-50 duration-300 ${loadedStates[index] ? 'animation-fade-in' : ''}`}>
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
      {/* <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/5tOnZMC.jpg"
        title="cherry blossoms!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697299981/cpm35_2023-10-13_164831.996_qhwr0a.jpg"
        title="cornell library!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697299980/instc_2023-10-13_205614.994_etkbzo.jpg"
        title="ithaca cabin!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697327405/cpm35_2023-10-14_194814.402_prkm51.jpg"
        title="lavender fields!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1698110616/dclassic_2023-10-23_212312.954_ao9knb.jpg"
        title="rozes!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697329536/cpm35_2023-10-14_202151.889_uhwyyg.jpg"
        title="san francisco"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/BFdEtAn.jpg"
        title="nyc spring!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1698109606/instsqc_2023-10-23_210340.582_yygycj.jpg"
        title="paris blding!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1698109611/cpm35_2023-10-23_210240.390_fnmkar.jpg"
        title="italy boats!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697328788/cpm35_2023-10-14_201223.893_df3dda.jpg"
        title="budapest cafe!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/slCRCEG.jpg"
        title="banff mountains!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/JHNMLnj.jpg"
        title="banff sunset car window"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/vQacPRt.jpeg"
        title="cancun italian restaurant"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/zRW3HYV.jpeg"
        title="kingston thrift store!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/7M8Lhjk.jpeg"
        title="cancun beach"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/KdcRqVu.jpeg"
        title="central park!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/fnStKBl.jpg"
        title="long island!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/A0qF5nW.jpg"
        title="tiff in nyc!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/tLl5FLa.jpg"
        title="budapest!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/yo7IREE.jpg"
        title="paris!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/cZrwSvm.jpg"
        title="paris!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/D25JJb5.jpg"
        title="paris!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/n6CZcoA.jpg"
        title="yom!"
      />
      <img
        class="w-full p-3.5 group-hover:opacity-50 duration-300"
        src="https://i.imgur.com/dBOtdTB.jpg"
        title="davelle!"
      /> */}
    </div>
  );
}
