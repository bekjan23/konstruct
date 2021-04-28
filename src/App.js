import './App.css';
import Top from './Components/Navigation/Top';
import Header from './Components/Header/Header';
import Story from './Components/Story/Story';
import Services from './Components/Services/Services';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Top/>
          <Switch>
            <Route exact path="/" component={Header}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/story" component={Story}/>
            <Route path="/services" component={Services}/>
            <Route path="/work" component={Section}/>
          </Switch>
        <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
