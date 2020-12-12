import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          //   webformatURL={el.webformatURL}
          //   largeImageURL={el.largeImageURL}
        />
      ))}
    </ul>
  );
}
