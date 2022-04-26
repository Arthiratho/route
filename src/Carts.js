import React from 'react'

function Carts(props) {
  return (
    <div>
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{props.item.title}</div>
          {props.item.price}
        </div>
        <button onClick={()=> props.removeItem(props.item)} class="badge bg-primary rounded-pill">remove</button>
      </li>
     
</div>

  )
}

export default Carts