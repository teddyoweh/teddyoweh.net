import React from "react";
import Views from "./views";
import { Analytics } from '@vercel/analytics/react';
import './assets/styles/app.scss'
function App() {
  return (
  <>
   <Views/>
    <Analytics />
  </>
   
    
  );
}

export default App;
