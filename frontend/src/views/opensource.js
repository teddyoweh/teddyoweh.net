import React,{useState} from 'react';
import teddyimg from '../assets/images/teddyoweh.jpeg';
import { NavBar } from "../components";

function FilterLabel(props){

const [active,setActive] =useState(false);
const datacats=[
    'Networking and Cloud Computing',
    'Machine Learning',
    'Data Analytics',
    'Alogrithmic Design',
    'Frontend',
    'Backend',
    'System Softwares'
    
    
    
    
    
    
    
    ]
    const filtermydata = (data)=>{
    setActive(!active)
    props.filterdata(data)
    }
return (

<>
<label className={active==true&&'active'} onClick={()=>filtermydata(props.data)} htmlFor="">
{props.data}
</label>



</>
)

}

function OpenSourcePage(props) {
    const datacats=[
        'Networking and Cloud Computing',
        'Machine Learning',
        'Data Analytics',
        'Algorithmic Design',
        'Frontend',
        'Backend',
        'System Software'
        
        
        
        
        
        
        
        ]
const searchsoftwaredata = (e,keyword)=>{
    e.preventDefault()
    let searchresult = [];
    for(let i=0; i<softwaredata.length; i++){
        if(softwaredata[i].softwarename.toLowerCase().includes(keyword.toLowerCase())){
            searchresult.push(softwaredata[i]);
        }
    }
    return searchresult;
}
 
const filterSoftwareData = (softwareData, filters) => {
    return softwareData.filter(software => {
    return software.filters.some(filter => filters.includes(filter))
    })
   }
 const softwaredata = [
 
 {
 softwarename:'Beardb',
 githuburl:'https://github.com/teddyoweh/Beardb',
 pypiurl:'https://pypi.org/project/Beardb/',
 aboutsoftware:'A Local System Based JSON Database system',
 islanguages:false,
 isframework:false,
 istools:true,
 languages:[
 'Python, '
 ],
frameworks:['JSON '],
 filters:[
 'System Software',
 'Algorithmic Design',
 'Networking and Cloud Computing'
 ]
 
 },{
    softwarename:'Omarke',
    githuburl:'https://github.com/teddyoweh/Omark',
    pypiurl:'https://pypi.org/project/Omarke/',
    liveurl:null,
    aboutsoftware:'Omark implements a linear search algorithm on a facial recognition model which efficiently finds faces which absent in picture based on a dataset',
    islanguages:true,
    isframework:false,
    istools:false,
    languages:[
    'Python '
    ],
    frameworks:null,
    filters:[
    'Machine Learning',
    'System Software',
    'Algorithmic Design',
    
    ]
    
    }
 ]
 const filtersoftwaredata = (keyword) =>{
 console.log('yess',keyword)
 if(filterdata.includes(keyword)){
    const index = filterdata.indexOf(keyword);
    if (index > -1) { // only splice array when item is found
        filterdata.splice(index, 1); // 2nd parameter means remove one item only
    }
     
    setTeddysSoftwaredata(filterSoftwareData(teddysoftwaredata1,filterdata))
 }else{
    filterdata.push(keyword)
   
    // setTeddysSoftwaredata1(softwaredata)
   // setTeddysSoftwaredata1()
    setTeddysSoftwaredata(filterSoftwareData(teddysoftwaredata1,filterdata))
    
    
 }
 if(filterdata.length==0){
      
    setTeddysSoftwaredata(softwaredata)
}
 console.log(filterdata)
 }
 const [teddysoftwaredata,setTeddysSoftwaredata]=useState(softwaredata)
 const [teddysoftwaredata1,setTeddysSoftwaredata1]=useState(softwaredata)
 const [filterdata, setFilterData]=useState([])

  return (
  <>
     <Helmet>
               <title>OpenSource • Teddy Oweh </title>
    <meta name="description" content='OpenSource • Teddy Oweh, OpenSource Softwares Developed by Teddy Oweh, Networking, ML, System and FullStack Softwares.' />
    <meta name="keywords" content="Teddy Oweh | Ifechukwudeni | Teddy Oweh"/>
    <meta name="author" content="Teddy Oweh • Computer Scientist"/>
    <meta name="generator" content="Teddy Oweh"/>
    <link rel="canonical" href="https://teddyoweh.net/opensource" />
    <meta name="robots" content="index, follow"/>
    <meta property="og:type" content="website" />

    <meta property="og:title" content="OpenSource • Teddy Oweh" />

    <meta property="og:description" content='OpenSource • Teddy Oweh, OpenSource Softwares Developed by Teddy Oweh, Networking, ML, System and FullStack Softwares.' />

    <meta property="og:image" content={teddyimg} />

    <meta property="og:url" content="https://teddyoweh.net/opensource" />

    <meta property="og:site_name" content="OpenSource • Teddy Oweh" />
    <meta name="twitter:title" content="Teddy Oweh"/>

    <meta name="twitter:description" content="OpenSource • Teddy Oweh, OpenSource Softwares Developed by Teddy Oweh, Networking, ML, System and FullStack Softwares."/>

    <meta name="twitter:image" content={teddyimg}/>

    <meta name="twitter:site" content="@tedddyoweh"/>

    <meta name="twitter:creator" content="@tedddyoweh"/>
            </Helmet>


    <div className="app">
  
    <NavBar page='opensource'/>
    <div className="about opensource">
        <div className="teddy-full">
        <label htmlFor="">OpenSource Softwares / Projects.</label>
        
        </div>
        
        <div className="teddy-opensource">
            <div className="searchsoftwares">
            <div className="inputbox">
            <i class='bx bx-search'></i>
            <input onChange={e=> setTeddysSoftwaredata(searchsoftwaredata(e,e.target.value))} type="text" />
            </div>
            <div className="filters">
            <label htmlFor="" className="active">All</label>
            {
            datacats.map(value=>{
            return (
            <FilterLabel  filterdata={()=>filtersoftwaredata(value)}data={value} />
            )
            })
            }
         
            </div>
            </div>
            <div className="teddys-cool-softwares">
            {teddysoftwaredata.map(value =>{
            return (
            <>
                <div className="teddys-software">
                
            <div className="top">
            
            <label htmlFor="">{value.softwarename}</label>
            <span>
            {
            value.githuburl!=null &&       <a href={value.githuburl}><i class='bx bxl-github'></i></a>
            }
            {
            value.pypiurl!=null && <a href={value.pypiurl}><i class='bx bxs-package'></i></a> 
            }
            
            {
            value.liveurl!=null && <a href={value.liveurl}><i class='bx bx-globe'></i></a>  }
            
      
      
            </span>
            </div>
          
            <div className="main-content">
            <p>{value.aboutsoftware}</p>
            <div className="stuff-i-used-code-it">
            <small>
            
            <label>{
            value.istools==true?"Languages/Frameworks Used: ":
            value.islanguages==true?"Programming Languages Used: ":
            value.isframework==true&&"Frameworks Used: "
        }
           
           {
           value.languages!=null&&value.languages.map(language=>{
           return (
            <label htmlFor=""> {language+'  '} </label>
           )
           })
           }
            {
           value.frameworks!=null&&value.frameworks.map(frameworks=>{
           return (
            <label htmlFor=""> {frameworks+' '}</label>
           )
           })
           }
            
            
            </label></small>
            </div>
            </div>
            <div className="filters">
            {
            value.filters.map(filtersname=>{
            return(
            <>
     
            <label  className="active" htmlFor="">       {filtersname}</label>
            </>
            )
            
            })
            }
          
          
            </div>
            </div>
            </>
            )
            
            })}
        
            </div>
        </div>
        
      
        
        
    </div>
    </div>
    </>
  );
}

export default OpenSourcePage;