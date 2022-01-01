import "./App.css";
import Card from "./components/cardapp";
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
      <Card {...wordbook[0]}></Card>
    </div>
  );
}

export default App;
