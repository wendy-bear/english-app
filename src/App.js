import "./App.css";
import Card from "./components/cardapp";
import Cardlist from "./components/Cardlistapp";
import wordbook from "./components/dictionary";
import Footer from "./components/footerapp";
import Header from "./components/headerapp";
import Wordtable from "./components/mainapp";
import NotFoundPage from "./components/techpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
//import logoImg from "src/logo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route index element={<Wordtable />} />
          <Route path="wordtable" element={<Wordtable />} />
          <Route path="game" element={<Cardlist />} />

          <Route path="tags" element={<NotFoundPage />} />
          <Route path="/" element={<Wordtable />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
