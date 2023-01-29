import React, {Component,useState, useEffect,useCallback} from 'react';
import axios from 'axios'
import { deviceinfo } from '../utlilty';

export default function Tracker(){
 const apibase='https://geolocation-db.com/json';
    const [ipdata, setipData] = useState({});
    const data = deviceinfo()
    const [loaded, setloaded] = useState(false)
 
    const getipdata = useCallback(async () => {
      axios.get('https://ipapi.co/json/').then((res) => {
        
 
     
        
            setipData(res.data)
          setloaded(true)
          data['userdata']=res.data
   
     axios.post('https://teddyowehnet-backend-production.up.railway.app/api/views/addvdata',data).then((res2) => {
      
        localStorage.setItem('viewid',JSON.stringify(res2.data))


      }
      
      )
    })
 
    },[])
    useEffect(() => {
    getipdata()
 
      
      
    
    },[  getipdata])
    
     
        
        
        
 
  
return(
<>
 
</>


)


}
 
