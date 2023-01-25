import './App.css';

import Header from './Components/Header/Header';
import UnderNav from './Components/DropNav/DropNav';
import Banner from './Components/Banner/Banner';
import Row from './Components/Row/Row';

function App() {
  return (
    <div className="App">
      <Header />
      <UnderNav />
      <Banner />
      <Row />
    </div>
  );
}

export default App;
