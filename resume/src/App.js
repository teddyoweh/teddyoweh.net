import logo from './logo.svg';
import './App.css';
import resume from './resume.pdf'
function App() {
  return (
     <div className="App">
    <object data=
    {resume} type="application/pdf" width="100%" height="100%"> 
                  
            </object>
            </div>
  );
}

export default App;
