import "./App.css";
import Footer from "./components/footerapp";
import Header from "./components/headerapp";
import Wordtable from "./components/mainapp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wordtable></Wordtable>
      <Footer></Footer>
    </div>
  );
}

export default App;
