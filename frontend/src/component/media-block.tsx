import { ComponentSharedMedia } from '@/lib/types/article';

interface MediaBlockProps {
  block: ComponentSharedMedia;
}

export default function MediaBlock({ block }: MediaBlockProps) {
  if (!block.file?.data) return null;

  const { url, alternativeText, width, height } = block.file.data.attributes;

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
