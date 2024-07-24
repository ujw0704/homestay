import React from 'react'
import "./HomeSection2.css"
import  ghoom from "./darjeeling/gumba.png"
import  sunset from "./darjeeling/sunrise tiger hill.jpg"
import tea from "./darjeeling/tea garden.jpg"
import kc from "./darjeeling/kc.jpg"
 import kc3 from "./darjeeling/kc3.jpg"
import kc5 from "./darjeeling/kc5.jpg"
import kc7 from "./darjeeling/kc7.jpg"
import kc8 from "./darjeeling/kc8.jpg"
import makhal from "./darjeeling/makhal temple.jpg"
import darjeeling from "./darjeeling/darjeeling.jpg"



function HomeSection2() {
  return (
    <div>
         <div>

<div class="container1">
			<h1 class="name"><span>Our Ambience</span></h1>
		<header class="main-header clearfix">
			<img class="logo" src={kc5} alt =""/>
		</header>

		<div class="content clearfix">

			<div class="cube-container">
				<div class="photo-cube">
					<img class="front"src={sunset} alt=""/>

					<div class="back photo-desc">
					  <h3>Hello world</h3>
					  <p>new Images</p>
						{/* <a href="#" class="button">download</a> */}
					</div>
					<img class="left" src={kc} alt=""/>
					<img class="right" src={ghoom} alt=""/>

				</div>
			</div>	

			<div class="cube-container">
				<div class="photo-cube">

					<img class="front" src={kc7} alt=""/>
					<div class="back photo-desc">
					  <h3> Images</h3>
					  <p>Hello World</p>
						{/* <a href="#" class="button">download</a> */}
					</div>
					<img class="left" src={makhal} alt=""/>
					<img class="right" src={kc8} alt=""/>

				</div>
			</div>	

			<div class="cube-container">
				<div class="photo-cube">

					<img class="front" src={darjeeling} alt=""/>
					<div class="back photo-desc">
					  <h3>Images</h3>
					  <p>Hello World</p>
						{/* <a href="#" class="button">download</a> */}
					</div>
					<img class="left" src={tea} alt=""/>
					<img class="right" src={kc3} alt=""/>

				</div>
			</div>	

		</div>
    </div>
	</div>
    </div>
  )
}

export default HomeSection2