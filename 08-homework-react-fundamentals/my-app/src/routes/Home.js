import Header from "../components/Header/Header";
import Pharagraph from "../components/Pharagraph/Pharagraph";
import Footer from "../components/Footer/Footer";
import { Texts } from "../helper/Translations";


function Home() {
  return (
 <div>
     <Header title={Texts.Title}/>
     <Pharagraph pha={Texts.Pharagraph}/>
     <Footer footer={Texts.Footer}/>
 </div>
  );

}
export default Home;
