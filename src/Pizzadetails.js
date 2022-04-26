import React from 'react'

const Pizzadetals = (props) => {
  return (
    <div className='allproduct'>

<div className='col-lg-3 mb-3'>
        <div class="card" style={{ width: '18rem' }}>
        
            <img src={props.pData.img} class="card-img-top"/>
            <div class="card-body">
              <h3 className='cart-name'>Name:{props.pData.Name}</h3>
          
                <p class="card-price">RS:{props.pData.price}</p>
                
                <button onClick={()=> {props.handleshowprice(props.pData)}} class="btn btn-primary">Add to cart</button>
            </div>
        </div>

        
 </div>

    
    </div>
  )
}

export default Pizzadetals