import './assets/scss/style.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ContactPage from './components/ContactPage/ContactMain';


function App() {
  return (
    <div className="App">
      <Header/>
      <ContactPage/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
