import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import New from './components/New';
import './style/landingpage.css'

function App() {
  return (
    <div>
      <div className='myBG border'> 
        <NavigationBar />
        <Intro />
      </div>

      <div className='trending'>
        <Trending />
      </div>

      <div className='new'>
        <New />
      </div>
    </div>
  );
}

export default App;
