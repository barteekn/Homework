import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Paragraph from "./components/Paragraph/Paragraph";
import DATA from "./components/helper/helperData";


function About() {
  return (
    <>
      <Nav />
      <Paragraph paragraph={DATA.PARAGRAPH.ABOUT} />
      <Paragraph paragraph={DATA.PARAGRAPH.ABOUT} />
      <Paragraph paragraph={DATA.PARAGRAPH.ABOUT} />
      <Footer text1={DATA.FOOTER.TEXT1} text2={DATA.FOOTER.TEXT2} />
    </>
  );
}

export default About;
