import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Car from './components/car';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lb/car" element={<Car />} />
      </Routes>
    </Router>
  );
};

export default App;
