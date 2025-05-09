import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/auth/Login';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import PatientManagement from './pages/PatientManagement';
import UserManagement from './pages/UserManagement';
import HospitalSettings from './pages/HospitalSettings';
import Appointments from './pages/Appointments';
import LabTests from './pages/LabTests';
import Billing from './pages/Billing';
import Pharmacy from './pages/Pharmacy';
import NewUserRegistration from './pages/auth/NewUserRegistration';
import Departments from './pages/Departments';
import NewDepartment from './pages/Departments/NewDepartment';
import PatientRecords from './pages/PatientRecords';
import InventoryManagement from './pages/InventoryManagement';
import ReportingAnalytics from './pages/ReportingAnalytics';
import Telemedicine from './pages/Telemedicine';
import StaffScheduling from './pages/StaffScheduling';
import BedManagement from './pages/BedManagement';
import ExternalSystems from './pages/ExternalSystems';
import PatientPortal from './pages/PatientPortal';
import FeedbackSurveys from './pages/FeedbackSurveys';
import UserRoleManagement from './pages/UserRoleManagement';
import SystemConfiguration from './pages/SystemConfiguration';
import AddItem from './pages/InventoryManagement/AddItem';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="patients/*" element={<PatientManagement />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="users/new" element={<NewUserRegistration />} />
              <Route path="settings" element={<HospitalSettings />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="lab-tests" element={<LabTests />} />
              <Route path="billing" element={<Billing />} />
              <Route path="pharmacy" element={<Pharmacy />} />
              <Route path="departments" element={<Departments />} />
              <Route path="departments/new" element={<NewDepartment />} />
              <Route path="patient-records" element={<PatientRecords />} />
              <Route path="inventory" element={<InventoryManagement />} />
              <Route path="inventory/add" element={<AddItem />} />
              <Route path="reporting" element={<ReportingAnalytics />} />
              <Route path="telemedicine" element={<Telemedicine />} />
              <Route path="staff-scheduling" element={<StaffScheduling />} />
              <Route path="bed-management" element={<BedManagement />} />
              <Route path="external-systems" element={<ExternalSystems />} />
              <Route path="patient-portal" element={<PatientPortal />} />
              <Route path="feedback" element={<FeedbackSurveys />} />
              <Route path="user-roles" element={<UserRoleManagement />} />
              <Route path="system-config" element={<SystemConfiguration />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
