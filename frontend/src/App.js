
import './App.css';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">amazon clone</Link>
        </header>
        <main>
          <Routes>
            <Route path='/product/:slug' element={<ProductScreen/>}/>

            <Route path='/' element={<HomeScreen />} />
          </Routes>

        </main>
      </div>

    </BrowserRouter>
  );
}

export default App;
