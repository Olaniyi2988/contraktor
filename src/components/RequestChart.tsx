// src/components/RequestsChart.js
import { Card } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useRequestsChartData } from "../hooks/useRequestsChartData";

export default function RequestsChart() {
  const data = useRequestsChartData();

  if (!data || data.length === 0) {
    return (
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Requests Per Day</Card.Title>
          <p className="text-muted">No requests to display yet.</p>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>Requests Per Day</Card.Title>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="requests" stroke="#0d6efd" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
}
