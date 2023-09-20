import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AllRoutes from './routes/AllRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
