// // src/pages/ExplorePage.tsx
// import { useEffect, useState, useCallback } from "react";
// import artisans from "../data/artisans.json";
// import { Container, Row, Col, Form, Spinner, Pagination } from "react-bootstrap";
// import { debounce } from "../utils/debounce";
// import { filterArtisans } from "../utils/filterArtisans";
// import ArtisanCard from "../components/ArtisanCard";
// import "../assets/explore-page.css";
// import type { Artisan } from "../types";


// const ExplorePage: React.FC = () => {
//   const [search, setSearch] = useState<string>("");
//   const [data, setData] = useState<Artisan[]>(artisans);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);

//   const ITEMS_PER_PAGE = 6;

//   // 2️⃣ Debounced search function
//   const runSearch = useCallback(
//     debounce((value: string) => {
//       setLoading(true);
//       setTimeout(() => {
//         setData(filterArtisans(artisans, { name: value }));
//         setCurrentPage(1);
//         setLoading(false);
//       }, 500);
//     }, 400),
//     []
//   );

//   useEffect(() => {
//     runSearch(search);
//   }, [search, runSearch]);

//   const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
//   const paginatedData = data.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <Container className="mt-4">
//       <Form.Control
//         placeholder="Search artisans..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {loading && (
//         <div className="text-center mt-4">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       )}

//       {!loading && data.length === 0 && (
//         <p className="text-center text-muted mt-4">No artisans found</p>
//       )}

//       <Row className="mt-4 g-4">
//         {paginatedData.map((a: Artisan) => (
//           <Col md={4} key={a.id} className="fade-in">
//             <ArtisanCard artisan={a} />
//           </Col>
//         ))}
//       </Row>

//       {totalPages > 1 && (
//         <Pagination className="justify-content-center mt-4">
//           <Pagination.Prev
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           />

//           {[...Array(totalPages)].map((_, index) => (
//             <Pagination.Item
//               key={index}
//               active={index + 1 === currentPage}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </Pagination.Item>
//           ))}

//           <Pagination.Next
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//           />
//         </Pagination>
//       )}
//     </Container>
//   );
// };

// export default ExplorePage;


// src/pages/ExplorePage.tsx
import { useState, useEffect, useCallback } from "react";
import artisansData from "../data/artisans.json";
import { Container, Row, Col, Form, Spinner, Pagination } from "react-bootstrap";
import ArtisanCard from "../components/ArtisanCard";
import { debounce } from "../utils/debounce";
import { filterArtisans } from "../utils/filterArtisans";
import type { Artisan } from "../types";
import "../assets/explore-page.css";

const ITEMS_PER_PAGE = 6;

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Artisan[]>(artisansData);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Debounced search
  const runSearch = useCallback(
    debounce((value: string) => {
      setLoading(true);
      setTimeout(() => {
        setData(filterArtisans(artisansData, value)); // single search field
        setCurrentPage(1);
        setLoading(false);
      }, 300);
    }, 300),
    []
  );

  useEffect(() => {
    runSearch(search);
  }, [search, runSearch]);

  // Pagination logic
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Container className="mt-4">
      {/* Single search field */}
      <Form.Control
        placeholder="Search by name, trade, location, rating, availability..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Loading spinner */}
      {loading && (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      )}

      {/* No results */}
      {!loading && data.length === 0 && (
        <p className="text-center text-muted mt-4">No artisans found</p>
      )}

      {/* Artisan cards */}
      <Row className="mt-4 g-4">
        {paginatedData.map((a) => (
          <Col md={4} key={a.id}>
            <ArtisanCard artisan={a} />
          </Col>
        ))}
      </Row>

      {/* Pagination */}
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
