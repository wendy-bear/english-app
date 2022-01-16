import "./App.css";
import Card from "./components/cardapp";
import Cardlist from "./components/Cardlistapp";
import wordbook from "./components/dictionary";
import Footer from "./components/footerapp";
import Header from "./components/headerapp";
import Wordtable from "./components/mainapp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wordtable></Wordtable>

      <Footer></Footer>

      <Cardlist />
    </div>
  );
}

export default App;
