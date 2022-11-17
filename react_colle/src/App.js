import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Personnages from "./component/personnages";
import Personnage from "./component/personnage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="personnages" element={<Personnages />} />
        <Route path="personnage" element={<Personnage />} />
      </Routes>
    </Router>
  );
}

export default App;
