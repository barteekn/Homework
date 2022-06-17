import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Card 
      img="https://www.kindpng.com/picc/m/160-1609028_transparent-vegan-logo-png-emblem-png-download.png"
      title="Card title/>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className='card__body'>
        <img src={props.img} width="25%" height="25%" alt='vegan logo' />
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>Card description...Lorem ipsum.............................</p>
      </div>
      <button className='card__btn'>View Button</button>
    </div>
  );
}


export default App;
