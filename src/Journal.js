import balli from '../src/images/pexels-oleksandr-p-2166553.jpg';
import amalfi from '../src/images/amalfi.jpg';
import norway from '../src/images/norway.jpg';
import icon from '../src/images/location1.png'

export default function Journals(props){
    return(
        <div className="journal">
            {/* <div className="header--1">
                <h2 className="trav">MY TRAVELL JOURNAL</h2>
                

            </div> */}
<div className='journal--stats'>
<div className='blogs'>
            <img id='bali' src={props.img}></img>
         </div>
        <div id="about">
            
            <span><img className="icon" src={props.loc}></img>{props.country}</span>
            <a href="https://www.google.com/maps/d/viewer?mid=1YV1arpIjsDriWShdWU4cOmwh4GA&ie=UTF8&hl=en&msa=0&ll=-8.447922,115.180664&spn=1.230683,2.469177&z=9
" >Show on google Map</a>
            <h1>{props.place}</h1>
            <p>{props.date}</p>
            
            <p>There is no other place like Bali. A magical blend of a colourful culture, friendly people, stunning nature,<br></br>
             countless activities, tropical weather, culinary delights, vibrant nightlife, and beautiful accommodation.<br></br>
              Bali is rated regularly as one of the best travel destinations in the world – for very good reasons.</p>
        </div>
            
</div>
       
            
       
      
        
            

        
        </div>
        )
}