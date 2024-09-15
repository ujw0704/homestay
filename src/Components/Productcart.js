import React, { useState } from 'react'

function Productcart() {
  let [cart, setCart] = useState()



  
  return (
    <div>
{
  cart.map((items, index)=>{
    return(

      <div key={items.name}>
<img src={items.image} alt={items.name} />
<h6>{items.description}</h6>
<h2> RS :{items.price}</h2>
    </div>
    )

  })
}


    </div>
  )
}

export default Productcart