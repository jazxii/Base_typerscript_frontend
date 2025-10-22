import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Make sure the file exists at src/pages/Login.tsx or src/pages/Login/index.tsx
import Login from '../pages/Login';
import Landing from '../pages/Landing';
import AnalyzeDashboard from '../pages/AnalyzeDashboard';
import ReportDetail from '../pages/ReportDetail';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/analyze" element={<AnalyzeDashboard />} />
        <Route path="/report/:id" element={<ReportDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
