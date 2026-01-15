import DashboardCards from "../components/DashboardCard";
import RequestsChart from "../components/RequestChart";
import RecentRequests from "../components/RecentRequest";

export default function Admin() {
  return (
    <>
      <DashboardCards />
      <RequestsChart />
      <RecentRequests />
    </>
  );
}

