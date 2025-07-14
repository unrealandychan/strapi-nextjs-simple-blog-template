import { ComponentSharedQuote } from '@/lib/types/article';

interface QuoteBlockProps {
  block: ComponentSharedQuote;
}

export default function QuoteBlock({ block }: QuoteBlockProps) {
  return (
    <div className="content-block quote-block animate-fade-in">
      <h4>{block.title}</h4>
      <p>{block.body}</p>
    </div>
  );
}
