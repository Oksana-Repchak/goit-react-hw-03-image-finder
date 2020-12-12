import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ src, alt }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={src} alt={alt} className={s.ImageGalleryItemImage} />
    </li>
  );
}
