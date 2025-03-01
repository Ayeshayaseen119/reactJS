import './App.css';
import About from './customComponents/About';
import NavBar from './customComponents/NavBar';
// import Sample from './customComponents/Sample';
import TextForm from './customComponents/TextForm';


function App() {
  return (
    <>

      <NavBar title = "TextUtils" about = "About Us" />
      <div className='container'>
      <About/>
      {/* <TextForm heading = "Enter text to analyze" /> */}
      </div>


      
      
      {/* <Sample fname = "Ayesha" lname = "Yaseen" /> */}
      </>
    );
}

export default App;
