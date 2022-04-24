import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Paragraph from "./components/Paragraph/Paragraph";
import DATA from "./components/helper/helperData";

function Contact() {
  return (
    <>
      <Nav />
      <Footer text1={DATA.FOOTER.TEXT1} text2={DATA.FOOTER.TEXT2} />
      <Paragraph />
    </>
  );
}

export default Contact;
