import React, {useState}from 'react'
import bambooshot from "./darjeeling/bambooshot.png";
// import bambooshoot from "./darjeeling/bambooshoot.png";
import bornless from "./darjeeling/bornless pickle.png";
import buff from "./darjeeling/buff pickle.png";
import chiken from "./darjeeling/chicken pickle.png";
import churpi from "./darjeeling/churpi.png";
import drysoyabean from "./darjeeling/dry soyabean.png";
import dustpickle from "./darjeeling/dust pickle.png";
import freshdalley from "./darjeeling/fresh dalley.png";
import goosebarry from "./darjeeling/goosebarry.png";
import instantfish from "./darjeeling/instant fish.png";
import khutt from "./darjeeling/khattu.png";
import methipickle from "./darjeeling/methi pickle.png";
import mixedpickle from "./darjeeling/mixed pickles.png";
import pineapple from "./darjeeling/pineapple.png";
import pustakari from "./darjeeling/pustakari.png";
import radishpickle from "./darjeeling/radish pickle.png";
import redchurpi from "./darjeeling/redchurpi.png";
import rosteddalle from "./darjeeling/rosted dalle pickle.png";
import selroti from "./darjeeling/selroti.png";
import smauc from "./darjeeling/smauc.png";
import titwara from "./darjeeling/titwara.png";
import whiterabbit from "./darjeeling/whiterabbit.png"



function Product() {
   const [ product, setProduct] =useState([

    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      image: khutt,
      description: 'This is a great product 1'
  },

   


   ])
    
  return (
    <div>
<img src={khutt} alt='bambo'/>
    </div>
  )
}

export default Product