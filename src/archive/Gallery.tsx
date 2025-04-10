import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';

interface GalleryProps {
  items: ReactImageGalleryItem[];
  onImageClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export default function Gallery({ items, onImageClick }: GalleryProps) {
  return (
    <div className="modal-gallery-container">
      <ImageGallery
        items={items}
        useBrowserFullscreen={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={true}
        showBullets={items.length > 5}
        lazyLoad={true}
        onClick={onImageClick}
        additionalClass="artist-gallery"
        slideDuration={300}
        slideInterval={5000}
        showThumbnails={true}
        thumbnailPosition="bottom"
      />
    </div>
  );
}