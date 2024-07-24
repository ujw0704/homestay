import React from 'react'
import "./Homesec4.css"

import kc2 from "./darjeeling/kc2.jpg"
import kc8 from "./darjeeling/kc8.jpg"
import kc3 from "./darjeeling/kc3.jpg"

function HomeSec4() {
  return (
    <div>
            <div>
     <div class="wrapper">
     <section class="card-container">
    <div class="card">
        <div class="face face-1">
<img src={kc2} />
            {/* <h3>Title</h3> */}
            <button>Book Now</button>
        </div>
        <div class="face face-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div class="card">
        <div class="face face-1">
            <img src={kc8}/>
            <button>Book Now</button>
        </div>
        <div class="face face-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>        
    <div class="card">
        <div class="face face-1">
            <img src={kc3} />
            <button>Book Now</button>
        </div>
        <div class="face face-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>


        
    </div>     
</section>
</div>   
    </div>
    </div>
  )
}

export default HomeSec4