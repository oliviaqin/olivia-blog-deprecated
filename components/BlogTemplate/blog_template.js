import Image from "next/image";

const BlogTemplate = ({ title, photos }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* <h1 className="text-4xl font-bold mb-4">{title}</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photos.map((photo, index) => (
              <div key={index} className="relative pb-3/4">
                <Image 
                  src={photo.src} 
                  alt={photo.alt}
                  width={100}
                  height={100}
                  layout="responsive" 
                  objectFit="cover" 
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </div>
    );
};

export default BlogTemplate;