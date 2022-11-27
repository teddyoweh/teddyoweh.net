import React,{useState} from 'react';
import teddyimg from '../assets/images/teddyoweh.jpeg';
import { NavBar } from "../components";
import {Helmet} from "react-helmet";
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
 aboutsoftware:'Database system implementing encrypted versions JSON of data. Easy to access, manage and deploy remotely',
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
 
 },
 {
    softwarename:'Beardb MicroService',
    githuburl:'https://github.com/teddyoweh/beardb-api',
    pypiurl:'https://pypi.org/project/Beardb/',
    aboutsoftware:'Beardb Microservice to deploy, create, access, update and delete data remotely.',
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
    
    },
 {
    softwarename:'Omarke',
    githuburl:'https://github.com/teddyoweh/Omark',
    pypiurl:'https://pypi.org/project/Omarke/',
    liveurl:null,
    aboutsoftware:'Omarke is a facial search algorithm that implements a binary search algorithm on a facial recognition model which efficiently identifies faces that are absent in pictures based on a dataset.',
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
    
    },
    {
        softwarename:'Transvarpy',
        githuburl:'https://github.com/teddyoweh/transvarpy',
        pypiurl:'https://pypi.org/project/transvarpy/',
        liveurl:null,
        aboutsoftware:'A new method of  declaring, assigning and editing variables in python, suitable for large scalabe variable declaration',
        islanguages:true,
        isframework:false,
        istools:false,
        languages:[
        'Python '
        ],
        frameworks:null,
        filters:[
        'System Software',
        'Algorithmic Design',
        
        ]
        
        },
    {
        softwarename:'Country Border Analysis',
        githuburl:'https://github.com/teddyoweh/Country-Border-Analysis/',
        pypiurl:null,
        liveurl:null,
        aboutsoftware:'Visually Analyzing Country Border Statistics',
        islanguages:false,
        isframework:false,
        istools:true,
        languages:[
        'Python, '
        ],
        frameworks:['Matplotlib, ','Pandas, ','Networkx '],
        filters:[
        'Data Analytics',
        'Algorithmic Design',
        
        ]
        
        },
        {
            softwarename:'Microsoft-Data-Analysis-Problem',
            githuburl:'https://github.com/teddyoweh/Microsoft-Data-Analysis-Problem',
            pypiurl:null,
            liveurl:null,
            aboutsoftware:'Data Analysis and Machine Learning System Alogrithms i designed a text summary model to solve the microsoft movie data analysis problem',
            islanguages:false,
            isframework:false,
            istools:true,
            languages:[
            'Python ,'
            ],
            frameworks:['Pandas, ','Numpy, ','Matplotlib, ','Seaborn, ','NLTK, ','Scikit-Learn'],
            filters:[
            'Data Analytics',
            'Algorithmic Design',
            'Machine Learning',
            
            
            ]
            
            },
            {
                softwarename:'Matrix Vector Algorithms',
                githuburl:'https://github.com/teddyoweh/Vector-Algorithms',
                pypiurl:null,
                liveurl:null,
                aboutsoftware:' Designing and Implementing Matrix Vector Algorithms to Solving vectors related problem ( Vector Magnitude, Vector Dot Product, Vector Angle)                ',
                islanguages:false,
                isframework:false,
                istools:true,
                languages:[
                'Python '
                ],
                frameworks:[''],
                filters:[
                'Algorithmic Design',
               
                
                ]
                
                },
        {
            softwarename:'Sentiment Analysis Api',
            githuburl:'https://github.com/teddyoweh/Sentiment-Analysis-API',
            pypiurl:null,
            liveurl:'https://sentiment-analytics-api.herokuapp.com/?text=Im%20a%20developer',
            aboutsoftware:' The Sentiment Analysis Api was created using python flask module,it allows users to parse a text or sentence throught the (?text) arguement, then view the sentiment analysis of that sentence. It can be implementable into a web application.',
            islanguages:false,
            isframework:false,
            istools:true,
            languages:[
            'Python, '
            ],
            frameworks:['Heroku'],
            filters:[
            'Machine Learning',
            'Networking and Cloud Computing',
            'Data Analytics',
           
            
            ]
            
            },
            
       
        {
            softwarename:'Routes Plugin PHP',
            githuburl:' https://github.com/teddyoweh/Routes-Plugin-PHP',
            pypiurl:null,
            liveurl:null,
            aboutsoftware:'This plugin can be embedded in PHP application to give the web application specific routes/href',
            islanguages:true,
            isframework:false,
            istools:false,
            languages:[
            'PHP '
            ],
            frameworks:null,
            filters:[
            'Backend',
            'System Software',
            'Algorithmic Design',
            
            ]
            
            },
            
            {
                softwarename:'Geolocation Plugin PHP',
                githuburl:'https://github.com/teddyoweh/Geo-Location-Plugin-PHP',
                pypiurl:null,
                liveurl:null,
                aboutsoftware:'Geolocation Plugin was created with PHP, it uses makes an API Call, decodes the JSON response, and gets the IP address, city, country, zip code, and state on the client-side and can be implemented and added to any project as a plugin.',
                islanguages:true,
                isframework:false,
                istools:false,
                languages:[
                'PHP '
                ],
                frameworks:null,
                filters:[
                'Backend',
                'System Software',
                'Algorithmic Design',
                
                ]
                
                },
                
            
        
       
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
    <meta name="keywords" content="Teddy Oweh, Ifechukwudeni, Teddy Oweh Opensource, Teddy Oweh Projects, Teddy Oweh Softwares"/>
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
    <meta name="twitter:title" content="OpenSource • Teddy Oweh"/>

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