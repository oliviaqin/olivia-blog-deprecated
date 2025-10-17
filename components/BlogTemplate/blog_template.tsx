import Image from "next/image";
import { BlogPhoto, Photo } from '../../types';

interface BlogTemplateProps {
  title: string;
  photos: BlogPhoto[];
}

const isPhoto = (photo: BlogPhoto): photo is Photo => {
  return 'src' in photo && 'alt' in photo;
};

const BlogTemplate = ({ title, photos }: BlogTemplateProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => {
          if (isPhoto(photo)) {
            return (
              <div key={index} className="relative pb-3/4">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded"
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogTemplate;

