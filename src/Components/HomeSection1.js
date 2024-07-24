import React from 'react'
import Everest from "./darjeeling/everset.png.png"
 import janpanse from "./darjeeling/japanse.png"
 import  sunset from "./darjeeling/sunrise tiger hill.jpg"
 import skool from "./darjeeling/school.png.png"
 import  ghoom from "./darjeeling/gumba.png"
import "./HomeSection.css"

function HomeSection1() {
  return (
    <div>
       < div class="container">
  <div class="card">
    <img src={Everest}alt=''/>
    <div class="card__head">Mt Everest</div>

  </div>
  <div class="card">
    <img src={janpanse} alt =""/>
    <div class="card__head">Japanese Temple</div>
  </div>
  <div class="card">
    <img src={sunset} alt =""/>
    <div class="card__head">Sunset  View</div>
  </div>
  <div class="card">
    <img src={skool} alt =""/>
    <div class="card__head">St Pauls School</div>
  </div>
  <div class="card">
    <img src={ghoom}alt=''/>
    <div class="card__head">Buddiest Temple (Gumbha)</div>
  </div>
</div>
    </div>
  )
}

export default HomeSection1