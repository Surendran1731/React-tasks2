import Card from './Card';
import React, { useState } from 'react';
function App() {
  let [count,setCount]=useState(0);
  const data = [
    {
      image: "./1.jpg",
      pname: "Kurthis",
      price: "$40.00",
      action: "Add to Cart"
    },
    {
      image: "./2.jpg",
      pname: "T-Shirts",
      price: "$100.00",
      action: "Add to Cards"
    },
    {
      image: "./3.jpg",
      pname: "Casual",
      price: "$30.00",
      action: "Add to Cards"
    },
    {
      image: "./4.jpg",
      pname: "Styles",
      price: "$50.00",
      action: "Add to Cards"
    },
    {
      image: "./5.jpg",
      pname: "Hoodies",
      price: "$6d0.00",
      action: "Add to Cards"
    },
    {
      image: "./12.jpg",
      pname: "Shoes",
      price: "$10.00",
      action: "Add to Cards"
    },
    {
      image: "./7.jpg",
      pname: "Watches",
      price: "$90.00",
      action: "Add to Cards"
    },
    {
      image: "./8.jpg",
      pname: "Camers",
      price: "$40.00 - $75.00",
      action: "Add to Cards"
    },
    {
      image: "./16.jpg",
      pname: "Designs",
      price: "$6d0.00",
      action: "Add to Cards"
    },
    {
      image: "./15.jpg",
      pname: "LapTop",
      price: "$10.00",
      action: "Add to Cards"
    },
    {
      image: "./14.jpg",
      pname: "Computer",
      price: "$90.00",
      action: "Add to Cards"
    },
    {
      image: "./13.jpg",
      pname: "Wall Clock",
      price: "$40.00 ",
      action: "Add to Cards"
    } 
  ]
  return <>
    {/* <!-- Navigation--> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart 
              <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
    {/* <!-- Header--> */}
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
        </div>
      </div>
    </header>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            data.map((e, i) => {
              return <Card details={e} key={i}  count={count} setCount={setCount}/>
            })
          }
        </div>
      </div>
    </section>
    {/* <!-- Footer--> */}
    <footer className="py-5 bg-dark">
      <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Nishaa 2024</p></div>
    </footer>
    {/* <!-- Bootstrap core JS--> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    {/* <!-- Core theme JS--> */}
    <script src="js/scripts.js"></script>
  </>
}

export default App


