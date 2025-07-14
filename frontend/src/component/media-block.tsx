import { ComponentSharedMedia } from '@/lib/types/article';

interface MediaBlockProps {
  block: ComponentSharedMedia;
}

export default function MediaBlock({ block }: MediaBlockProps) {
  if (!block.file?.url) return null;

  const  url  = block.file.url;
    const { alternativeText, width, height } = block.file;

  return (
    <div className="content-block media-block animate-fade-in">
      <img
        src={url}
        alt={alternativeText || ''}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
}
