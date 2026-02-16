import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="admissions" element={<Admissions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
