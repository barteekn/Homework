import Header from "../components/Header/Header";
import List  from "../components/List/List";
import Footer from "../components/Footer/Footer";
import { Texts } from "../helper/Translations";
import { OfferList } from "../helper/offerList";

function Offer() {
  return (
 <div>
    <Header title={Texts.Title}/>
   
    <List list={OfferList}/>
     <Footer footer={Texts.Footer}/>
 </div>
  );

}
export default Offer;