import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import DATA from "./components/helper/helperData";
import PeopleList from "./components/PeopleList/PeopleList";

function List() {
  return (
    <>
      <Nav />
      <PeopleList />
      <Footer text1={DATA.FOOTER.TEXT1} text2={DATA.FOOTER.TEXT2} />
    </>
  );
}

export default List;
