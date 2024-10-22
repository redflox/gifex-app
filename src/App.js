import { Route } from 'wouter'
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { GifsContextProvider } from './context/GifsContext';
import NavBar from 'components/NavBar';
import Login from 'pages/Login';

const routesNav = [
  // {
  //   id: 1,
  //   name: 'home',
  //   url: '/',
  //   external: false
  // }
]

function App() {

  return (
    <>
      <div className="App">
        <NavBar routes={routesNav}
        />
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:query/:rating?" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/404" component={() => <h1>404 NOT FOUND!</h1>} />
        </GifsContextProvider>
      </div>
    </>
  );
}

export default App;
