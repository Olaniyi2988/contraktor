// src/pages/ProfilePage.tsx
import { useParams } from "react-router-dom";
import data from "../data/artisans.json";
import { useEffect, useState } from "react";
import RequestForm from "../components/RequestForm";
import { Card, Container, Spinner } from "react-bootstrap";
import "../assets/profile-page.css";
import type { Artisan } from "../types";

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>(); // TS knows id is a string
  const artisan: Artisan | undefined = data.find(
    (a) => a.id.toString() === id
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!artisan) return;
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [artisan]);

  if (!artisan) return <p className="text-center mt-4">Artisan not found</p>;

  return (
    <Container className="profile-container mt-4">
      <div className="profile-header d-flex align-items-center gap-3 mb-4">
        <img
          src={artisan.image}
          alt={artisan.name}
          className="profile-img rounded-circle"
        />
        <div>
          <h2>{artisan.name}</h2>
          <p className="text-muted">{artisan.trade} • {artisan.location}</p>
          <p className="text-warning">⭐ {artisan.rating}</p>
          <span
            className={`badge ${
              artisan.availability === "Available" ? "bg-success" : "bg-secondary"
            }`}
          >
            {artisan.availability}
          </span>
        </div>
      </div>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>About</Card.Title>
          <Card.Text>{artisan.bio}</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Portfolio</Card.Title>
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <div className="portfolio-gallery d-flex flex-wrap gap-3">
              {artisan.portfolio.map((item, idx) => (
                <div className="portfolio-item" key={idx}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded"
                  />
                  <div className="portfolio-item-title">{item.title}</div>
                </div>
              ))}
            </div>
          )}
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Request Service</Card.Title>
          {/* Pass the full artisan object for type safety */}
          <RequestForm artisan={artisan} />
        </Card.Body>
      </Card>
    </Container>
  );
}
