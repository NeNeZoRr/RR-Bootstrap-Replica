import './App.css';
import TopBar from './components/TopBar';
import Background from './components/Background';
// import StoreListings from './components/StoreListings'; // Commenting out this line
import backgroundImage from './Assets/background.jpg'; 

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background backgroundImage={backgroundImage} />
      {/* <StoreListings /> */}
    </div>
  );
}

export default App;
