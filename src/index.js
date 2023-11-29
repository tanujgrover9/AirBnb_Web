import React from 'react';

// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import NavBar from './NavBar' ;
import Card from './Card';
import Hero from './Hero';
import Journal from './Journal';
import Head from '../src/Head';
import Footer from './Footer';
import Testmonial from './Testemonial';
import img1 from '../src/images/pexels-tom-balabaud-1579739.jpg';
import img2 from '../src/images/pexels-rachel-claire-4825701.jpg';
import img3 from '../src/images/pexels-igor-starkov-1145257.jpg';
import img4 from '../src/images/pexels-konstantinos-eleftheriadis-2034335.jpg'
import balli from '../src/images/pexels-oleksandr-p-2166553.jpg';
import icon from '../src/images/location1.png'
import Norway from '../src/images/pexels-enrique-14037938.jpg'
import Turkey from '../src/images/pexels-ridvan-ayrik-15406805.jpg'



import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function mainPage(){
  

  return(
    <div>
     <NavBar/>
     <Hero/>
     
     
     <Card
     img={img1}
     star='../src/images/star.png'
     Rate="5.0"
     Rating="/6"
     country="India"
     name="Hotel Radisson blu"
     price="From $120 /"
    /> 
    <Card

      img={img2}
      star='../src/images/star.png'
      Rate="5.5"
      Rating="/6"
      country="Cuba"
      name="Hotel Wyan "
      price="From $120 /"
    />
    <Card

    openSpots="0"
    img={img3}
    
    star='../src/images/star.png'
    Rate="5.5"
    Rating="/6"
    country="London"
    name="Hotel Imperical"
    price="From $140 /"
    />
    <Card

    openSpots="1"
    img={img4}
    star='../src/images/star.png'
    Rate="5.7"
    Rating="/6"
    country="USA"
    name="Trump Hotel"
    price="From $180 /"
    /> 


    {/* HEAD */}
    <Head/>

    {/* <Journal/> */}
    <Journal
    img={balli}
    loc={icon}
    
    country="Indonasia"
    place="Bali"
    date="12 August 1 September"
    />

    <Journal
    img={Norway}
    loc={icon}
    
    country="Norway"
    place="Fjord"
    date="20 june 1 July"
    />

<Journal
    img={Turkey}
    loc={icon}
    
    country="Turkey"
    place="Istanbul"
    date="10 jun 1 March"
    />

{/* Testemonials */}

<Testmonial/>

<Footer/>
     
    
    </div>
    

  )
}

ReactDOM.render(mainPage(), document.getElementById("root"))
