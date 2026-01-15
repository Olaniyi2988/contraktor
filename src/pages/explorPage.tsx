import { Container, Row, Col, Form, Spinner, Pagination } from "react-bootstrap";
import ArtisanCard from "../components/ArtisanCard";
import { useExploreArtisans } from "../hooks/useExploreArtisans";
import "../assets/styles/explore-page.css";

export default function ExplorePage() {
  const {
    search,
    setSearch,
    loading,
    paginatedData,
    currentPage,
    setCurrentPage,
    totalPages,
    totalCount,
  } = useExploreArtisans();

  return (
    <Container className="mt-4">
      <Form.Control
        placeholder="Search by name, trade, location, rating, availability..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      )}

      {!loading && totalCount === 0 && (
        <p className="text-center text-muted mt-4">No artisans found</p>
      )}

      <Row className="mt-4 g-4">
        {paginatedData.map((a) => (
          <Col md={4} key={a.id}>
            <ArtisanCard artisan={a} />
          </Col>
        ))}
      </Row>

      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4">
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          />
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx}
              active={currentPage === idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          />
        </Pagination>
      )}
    </Container>
  );
}
