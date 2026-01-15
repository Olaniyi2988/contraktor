// src/components/ArtisanCard.tsx
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../assets/styles/artisan-card.css';
import type { Artisan } from "../types";


interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="artisan-card"
      onClick={() => navigate(`/artisan/${artisan.id}`)}
    >
      <div className="artisan-image-wrapper position-relative">
        <img
          src={artisan.image}
          alt={artisan.name}
          className="artisan-image img-fluid rounded"
        />
        <span className="artisan-badge position-absolute top-0 start-0 m-2 badge bg-primary">
          {artisan.trade}
        </span>
      </div>

      <Card.Body>
        <Card.Title className="mb-1">{artisan.name}</Card.Title>

        <div className="artisan-meta mb-1">📍 {artisan.location}</div>

        <div className="artisan-rating mb-2">⭐ {artisan.rating}</div>

        <Button
          variant="outline-primary"
          size="sm"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation(); // prevent parent Card click
            navigate(`/artisan/${artisan.id}`);
          }}
        >
          View Profile
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArtisanCard;
