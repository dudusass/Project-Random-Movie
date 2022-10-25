import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="*" exact component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
