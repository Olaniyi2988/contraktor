
import { useState, ChangeEvent, FormEvent } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { addRequest } from "../services/requestService";
import type { Artisan } from "../types";


interface RequestFormProps {
  artisan: Artisan;
}

interface FormData {
  name: string;
  email: string;
  details: string;
}

export default function RequestForm({ artisan }: RequestFormProps) {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", details: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, details } = formData;
    if (!name || !email) return;

    setLoading(true);

    setTimeout(() => {
      const request = {
        id: Date.now(),
        artisanId: artisan.id,
        name,
        email,
        request: artisan.trade,
        details,
        date: new Date().toISOString(),
      };

      addRequest(request);
      setFormData({ name: "", email: "", details: "" });
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {success && <Alert variant="success">Request submitted successfully!</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={formData.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Details (Optional)</Form.Label>
        <Form.Control as="textarea" rows={3} name="details" value={formData.details} onChange={handleChange} />
      </Form.Group>
      <Button type="submit" disabled={loading}>
        {loading ? <Spinner animation="border" size="sm" /> : `Request ${artisan.trade}`}
      </Button>
    </Form>
  );
}
