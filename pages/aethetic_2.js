import { useRouter } from 'next/router';


export default function Random() {
  const router = useRouter();

  const handleDivClick = () => {
    router.push('/about'); // Redirect to another page
  };

  return (
    <div class="columns-1 gap-5 md:columns-2 lg:columns-3 playfair-display">
        <div class="photo-card" onClick={handleDivClick}>
            <img src="https://i.imgur.com/5tOnZMC.jpg" alt="Photo 1" />
        </div>
        <div class="photo-card" onClick={handleDivClick}>
            <img src="https://i.imgur.com/n6CZcoA.jpg" alt="Photo 1" />
        </div>
        <div class="photo-card" onClick={handleDivClick}>
            <img src="https://i.imgur.com/slCRCEG.jpg" alt="Photo 1" />
        </div>
    </div>
  );
}
