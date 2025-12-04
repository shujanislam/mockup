import Navbar from './components/Navbar';
import HeaderControls from './components/HeaderControls';
import StatsCard from './components/StatsCard';
import ClaimsTable from './components/ClaimsTable';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <HeaderControls />
      <StatsCard />
      <ClaimsTable />
    </>
  );
}
