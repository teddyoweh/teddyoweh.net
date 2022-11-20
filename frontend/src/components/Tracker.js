import React, {Component,useState, useEffect,useCallback} from 'react';
import axios from 'axios'
import { deviceinfo } from '../utlilty';

export default function Tracker(){
 const apibase='https://geolocation-db.com/json';
    const [ipdata, setipData] = useState({});
    const data = deviceinfo()
    const [loaded, setloaded] = useState(false)
    
    // make function run only once
    const getipdata = useCallback(async () => {
      axios.get('https://ident.me/').then((res) => {
        
        axios.get(`http://api.ipstack.com/${res.data}?access_key=02f25d2b83a2d0881939cbf240aec3f1`).then((res1) => {
     
        
            setipData(res1.data)
          setloaded(true)
          data['userdata']=res1.data
     console.log(data)
        
        axios.post('http://10.46.168.176:9990/api/views/addvdata',data).then((res2) => {
        
          localStorage.setItem('viewid',JSON.stringify(res2.data))
        })
        })
        })
    },[])
    useEffect(() => {
    getipdata()
      
    
    },[  getipdata])
    
     
        
        
        
 
  
return(
<>
 tedd
</>


)


}
 