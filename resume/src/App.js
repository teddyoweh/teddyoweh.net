import logo from './logo.svg';
import './App.css';
import resume from './resume.pdf'
import { Analytics } from '@vercel/analytics/react';
import Tracker from './Tracker';
function App() {
  return (
  <>

     <div className="App">
    <object data=
    {resume} type="application/pdf" width="100%" height="100%"> 
                  
            </object>
            </div>
            <Tracker/>
            <Analytics/>
            
            </>
  );
}

export default App;
