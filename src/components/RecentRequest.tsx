import { useState, useEffect } from "react";
import { Card, Table, Pagination } from "react-bootstrap";
import { getRequests } from "../services/requestService";
import type { Request } from "../types";

const ITEMS_PER_PAGE = 5; 

const RecentRequests: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getRequests().then(setRequests);
  }, []);

  const totalPages = Math.ceil(requests.length / ITEMS_PER_PAGE);

  const paginatedRequests = requests.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>Recent Requests</Card.Title>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Service</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRequests.map((r: Request) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.request}</td>
                <td>{new Date(r.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {totalPages > 1 && (
          <Pagination className="justify-content-center mt-3">
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            />
          </Pagination>
        )}
      </Card.Body>
    </Card>
  );
};

export default RecentRequests;
