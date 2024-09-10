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

  {
    id: 2,
    name: 'Product 2',
    price: 110,
    image: methipickle,
    description: 'This is a great product 2'
},
   
{
  id: 3,
  name: 'Product 3',
  price: 200,
  image:smauc ,
  description: 'This is a great product 3'
},

{
  id: 4,
  name: 'Product 4',
  price: 120,
  image:selroti ,
  description: 'This is a great product 4'
},
{
  id: 5,
  name: 'Product 5',
  price: 30,
  image: titwara,
  description: 'This is a great product 5'
},
{
  id: 6,
  name: 'Product 6',
  price: 120,
  image:whiterabbit ,
  description: 'This is a great product 6'
},
{
  id: 7,
  name: 'Product 7',
  price: 330,
  image:rosteddalle ,
  description: 'This is a great product 7'
},

{
  id: 8,
  name: 'Product 8',
  price: 170,
  image:redchurpi  ,
  description: 'This is a great product 8'
},
{
  id: 9,
  name: 'Product 9',
  price: 150,
  image: radishpickle,
  description: 'This is a great product 9'
},
{
  id: 10,
  name: 'Product 10',
  price: 330,
  image:pustakari ,
  description: 'This is a great product 10'
},
{
  id: 11,
  name: 'Product 11',
  price: 190,
  image: pineapple,
  description: 'This is a great product 11'
},
{
  id: 12,
  name: 'Product 12',
  price: 160,
  image:mixedpickle ,
  description: 'This is a great product 12'
},
{
  id: 13,
  name: 'Product 13',
  price: 190,
  image:instantfish ,
  description: 'This is a great product 13'
},
{
  id: 14,
  name: 'Product 14',
  price: 200,
  image:goosebarry ,
  description: 'This is a great product 14'
},
{
  id: 15,
  name: 'Product 15',
  price: 160,
  image:freshdalley ,
  description: 'This is a great product 15'
},
{
  id: 16,
  name: 'Product 16',
  price: 180,
  image: churpi,
  description: 'This is a great product 16'
},
{
  id: 18,
  name: 'Product 18',
  price: 130,
  image: drysoyabean,
  description: 'This is a great product 18'
},
{
  id: 18,
  name: 'Product 18',
  price: 120,
  image:chiken ,
  description: 'This is a great product 18'

},
{
  id: 19,
  name: 'Product 19',
  price: 400,
  image:buff,
  description: 'This is a great product 19'
},

{
  id: 20,
  name: 'Product 20',
  price: 300,
  image: bornless,
  description: 'This is a great product 20'
},

{
  id: 21,
  name: 'Product 21',
  price: 400,
  image: dustpickle ,
  description: 'This is a great product 21'

},

{
  id: 22,
  name: 'Product 22',
  price: 280,
  image:bambooshot,
  description: 'This is a great product 22'

},



   ])

   function handleClick(e, item){
    e.preventDefault();
    setProduct(item);
    console.log(item);
  }
  
   
    
  return (
    <div>
{
  product.map((item,index)=>{
    return (

    <div key={item.name}>
<div>
<img src={item.image} alt={item.name} />
<p>{item.description}</p>
<p> price:RS{item.price}</p>
</div>

<button onClick={(e) => handleClick(e, item)}>Add to cart</button>
    </div>
)

  })
}
    </div>
  )
}

export default Product