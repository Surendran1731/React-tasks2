import React, { useState } from "react"
function Card({ details, count, setCount }) {
  let [isCart, setIsCart] = useState(false);
  return <>
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={details.image} alt={details.name} />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{details.pname}</h5>
            {/* <!-- Product price--> */}
            {details.price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {
            isCart ? <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e) => {
              e.preventDefault()
              setCount(count - 1)
              setIsCart(!isCart)
            }}>Remove from Cart</a></div> : <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e) => {
              e.preventDefault()
              setCount(count + 1)
              setIsCart(!isCart)
            }}>{details.action}</a></div>
          }
        </div>
      </div>
    </div>
  </>
}
export default Card

