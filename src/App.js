import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Brainstorming } from './pages/brainstorming';
import { Chronicle } from './pages/chronicle';
import { Home } from './pages/home';
import { Layout } from './pages/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brainstorming" element={<Brainstorming />} />
          <Route path="chronicle" element={<Chronicle />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
