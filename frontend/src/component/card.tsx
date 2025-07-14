import { ComponentSharedCard } from '@/lib/types/about';


interface CardProps {
  card: ComponentSharedCard;
}

export default function Card({ card }: CardProps) {
  return (
    <div className="card animate-fade-in">
      <h3>{card.Title}</h3>
      <p>{card.Description}</p>
    </div>
  );
}
