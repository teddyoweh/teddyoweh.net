import logo from './logo.svg';
import './App.css';
import resume from './resume.pdf'
import { Analytics } from '@vercel/analytics/react';
import Tracker from './Tracker';
function App() {
  window.location.href='/static/media/resume.82889c21d68aca813270.pdf'
  
  return (
  <>

     <div className="App">
     <embed src=
    {resume} type="application/pdf" width="100%" height="100%"> 
                  
            </embed>
            </div>
            <Tracker/>
            <Analytics/>
            
            </>
  );
}

export default App;
