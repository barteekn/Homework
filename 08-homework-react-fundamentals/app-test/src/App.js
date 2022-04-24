import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import DATA from "./components/helper/helperData";
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Footer text1={DATA.FOOTER.TEXT1} text2={DATA.FOOTER.TEXT2} />
    </>
  );
}

export default App;
