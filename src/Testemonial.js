import person1 from '../src/images/img1.jpg';
import person2 from '../src/images/img2.jpg';
import person3 from '../src/images/img3.jpg';


export default function testmonial(){
    return(
        <div className="testimonial">
            <div className="testimonial-content">
                <div>
                <img  className="person1" src={person1}></img>
                <h2>James Anderson</h2>
                <p>There is no other place like Bali. A magical blend <br></br>of a colourful culture, friendly people, stunning nature,<br></br>
             countless activities, tropical weather.<br></br>
             ⭐⭐⭐⭐⭐
              </p>
                </div>
                
                <div>
                <img  className="person1" src={person2}></img>
                <h2>Amma Jhonsan</h2>
                <p>There is no other place like Bali. A magical blend <br></br>of a colourful culture, friendly people, stunning nature,<br></br>
             countless activities, tropical weather.<br></br>
             ⭐⭐⭐⭐
              </p>
                </div>
              
            <div>
            <img  className="person1" src={person3}></img>
                <h2>ching ja chan</h2>
                <p>There is no other place like Bali. A magical blend <br></br>of a colourful culture, friendly people, stunning nature,<br></br>
             countless activities, tropical weather.<br></br>
             ⭐⭐⭐⭐⭐
              </p>
            </div>

             
            </div>
        </div>
        )
}