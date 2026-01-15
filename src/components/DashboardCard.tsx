// src/components/DashboardCards.tsx
import type { ReactNode } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { FaUsers, FaClipboardList, FaStar } from "react-icons/fa";
import { useDashboardStats } from "../hooks/useDashboardStats";

const DashboardCards: React.FC = () => {
  const { requestsToday, totalArtisans, avgRating } = useDashboardStats();

  // Render value or spinner if null/undefined
  const renderValue = (value: number | string | null | undefined): ReactNode =>
    value === null || value === undefined ? (
      <Spinner animation="border" size="sm" />
    ) : (
      value
    );

  return (
    <Row className="mb-4">
      <Col md={4}>
        <Card className="text-center p-3 shadow-sm">
          <FaClipboardList size={30} className="mb-2 text-primary" />
          <h5>Requests Today</h5>
          <h3>{renderValue(requestsToday)}</h3>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center p-3 shadow-sm">
          <FaUsers size={30} className="mb-2 text-success" />
          <h5>Total Artisans</h5>
          <h3>{renderValue(totalArtisans)}</h3>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center p-3 shadow-sm">
          <FaStar size={30} className="mb-2 text-warning" />
          <h5>Avg Rating</h5>
          <h3>{renderValue(avgRating)}</h3>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardCards;
