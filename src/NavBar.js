import Airlogo from "../src/images/logo1.png";

export default function nav(){
    return(
        <header>
        <nav className="nav">
        <img className="nav--logo" src={Airlogo} ></img>
            {/* { <img className="bg" src={ReactLogo}></img> } */}

          
          <ul className="nav-item">
          {/* <li className="docs">Docs</li>
            <li className="tut">Tutorial</li>
            <li className="blog">Blogs</li> */}
            <li className="price">Pricing</li>
            <li>About</li>
            {/* <li>Contact</li> */}
            <li><div class="dropdown">
  <button class="dropbtn">Contacts</button>
  <div class="dropdown-content">
    <a href="#"><i class="fa-brands fa-instagram fa-2xl"></i></a>
    <a href="#"><i class="fa-brands fa-x-twitter fa-2xl"></i></a>
    <a href="#"><i class="fa-regular fa-envelope fa-2xl"></i></a>
    <a href="#"><i class="fa-brands fa-facebook fa-2xl"></i></a>

  </div>
</div></li>
          </ul>
        </nav>
        
      </header>
    )}
        
{/* <header>
            <nav>
                
                <img className="nav--logo" src={Airlogo} ></img>
                 
              
                
                
            </nav>
        </header> */}
        
        
        <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

