import "./App.css";
import Card from "./components/cardapp";
import Footer from "./components/footerapp";
import Header from "./components/headerapp";
import Wordtable from "./components/mainapp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wordtable></Wordtable>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
