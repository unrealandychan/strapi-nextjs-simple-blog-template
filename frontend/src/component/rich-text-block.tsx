import { ComponentSharedRichText } from '@/lib/types/article';

interface RichTextBlockProps {
  block: ComponentSharedRichText;
}

export default function RichTextBlock({ block }: RichTextBlockProps) {
  return (
    <div className="content-block rich-text-block animate-fade-in">
      <div dangerouslySetInnerHTML={{ __html: block.body || '' }} />
    </div>
  );
}
