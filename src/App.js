import './App.css'
import {action,originals} from './urls'
import Banner from './Components/Banner/Banner';
import Navbar from "./Components/Nav/Navbar";
import RowPost from './Components/Row/RowPost';


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
