// App.jsx (updated)
import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Travel from './pages/Travel';
import Lifestyle from './pages/Lifestyle';
import Fashion from './pages/Fashion';
import Sport from './pages/Sport';
import Food from './pages/Food';
import SearchResults from './pages/SearchResults';
import Error from './pages/Error';

function App() {
  return (
    <Routes>
      {/* Normal pages with Navbar & Footer */}
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="travel" element={<Travel />} />
        <Route path="lifestyle" element={<Lifestyle />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="sport" element={<Sport />} />
        <Route path="food" element={<Food />} />
        <Route path="search" element={<SearchResults />} />
      </Route>
      
      {/* Error page without Navbar & Footer */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;