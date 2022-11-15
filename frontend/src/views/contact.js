import React,{useState} from 'react';
import teddyimg from '../assets/images/teddyoweh.jpeg';
import { NavBar } from "../components";
function ContactPage(props) {
const [name,setName] =  useState('')
const [email,setEmail]=useState('')
const [subject,setSubject]=useState('')
const [message,setMessage]=useState('')



const sendMessagetoTeddy = (e)=>{
  e.preventDefault()

  const body ={
  name:name,
  email:email,
  subject:subject,
  message:message,
  }
}
  return (
  <>
     <Helmet>
               <title>About • Teddy Oweh </title>
    <meta name="description" content='Contact • Teddy Oweh | Software Engineer (ML) & Network Engineer.' />
    <meta name="keywords" content="Teddy Oweh | Ifechukwudeni | Teddy Oweh"/>
    <meta name="author" content="Teddy Oweh • Computer Scientist"/>
    <meta name="generator" content="Teddy Oweh"/>
    <link rel="canonical" href="https://teddyoweh.net/contact" />
    <meta name="robots" content="index, follow"/>
    <meta property="og:type" content="website" />

    <meta property="og:title" content="Contact • Teddy Oweh" />

    <meta property="og:description" content='Contact • Teddy Oweh | Software Engineer (ML) & Network Engineer.' />

    <meta property="og:image" content={teddyimg} />

    <meta property="og:url" content="https://teddyoweh.net/contact" />

    <meta property="og:site_name" content="About • Teddy Oweh" />
    <meta name="twitter:title" content="Teddy Oweh"/>

    <meta name="twitter:description" content="Contact • Teddy Oweh | Software Engineer (ML) & Network Engineer."/>

    <meta name="twitter:image" content={teddyimg}/>

    <meta name="twitter:site" content="@tedddyoweh"/>

    <meta name="twitter:creator" content="@tedddyoweh"/>
            </Helmet>

    <div className="app">
  
    <NavBar page='contact'/>
    <div className="about contact">
        <div className="teddy-full">
        <label htmlFor="">Reach out to me!.</label>
        
        </div>
        <div className="contact-teddy">
        <div className="teddy-contact-form">
        <form action="">
        
        <div className="ind-box">
        <label htmlFor="">Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} type="text" />
        
        </div>
        <div className="ind-box">
        <label htmlFor="">Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" />
        
        </div>
        
        <div className="ind-box">
        <label htmlFor="">Subject</label>
        <input value={subject} onChange={e=>setSubject(e.target.value)} type="text" />
        
        </div>
        
        <div className="ind-box">
        <label htmlFor="">Message</label>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} id="" cols="30" rows="10"></textarea>
        
        </div>
        
        <div className="ind-box">
        <button>Send Message</button>
        </div>
        
        </form>
        </div>
        <div className="teddy-contacts">
        <div className="teddy-contancts-a">
        <div className="ind-contact">
        <a href="mailto:teddy@teddyoweh.net">
        
        <i class='bx bxs-envelope'></i>
        <label htmlFor="">teddy@teddyoweh.net</label>
        </a>
        
        </div>
        <div className="ind-contact">
        <a href="https://www.github.com/teddyoweh">
        
        <i class='bx bxl-github' ></i>
        <label htmlFor="">teddyoweh</label>
        </a>
        
        </div>
        <div className="ind-contact">
        <a href="https://www.linkedin.com/in/teddyoweh">
        
        <i class='bx bxl-linkedin-square'></i>
        <label htmlFor="">Teddy Oweh</label>
        </a>
        
        </div>
        <div className="ind-contact">
        <a href="https://twitter.com/tedddyoweh">
        
        <i class='bx bxl-twitter' ></i>
        <label htmlFor="">tedddyoweh</label>
        </a>
        
        </div>
        
        <div className="ind-contact">
        <a href="https://www.instagram.com/teddyoweh_/">
        
        <i class='bx bxl-instagram' ></i>
        <label htmlFor="">teddyoweh_</label>
        </a>
        
        </div>
  
    
       
        </div>
        
        </div>
        </div>
      
        
        
    </div>
    </div>  </>
  );
}

export default ContactPage;