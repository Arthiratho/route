import React from "react";
import Pizzadetails from "./Pizzadetails";
import { useState } from "react";
import Carts from "./Carts";
import { Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Dashboard = () => {
  let products = [
    {
      Name: "Neapolitan Pizza",
      img: "https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826",
      price: 100,
    },
    {
      Name: "Chicago Pizza",
      img: "https://www.kingarthurbaking.com/sites/default/files/2019-12/stuffed-pizza.jpg",
      price: 200,
    },
    {
      Name: "Sicilian Pizza",
      img: "https://www.thespruceeats.com/thmb/6Nn5NxSF8Y8ldhr75UjltAaSaFA=/3543x1993/smart/filters:no_upscale()/sicilian-pizza-86505330-57965df73df78ceb8631945d.jpg",
      price: 300,
    },
    {
      Name: "Greek Pizza",
      img: "https://www.cookingclassy.com/wp-content/uploads/2013/10/greek-pizza2+srgb.-450x500.jpg",
      price: 200,
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  let showPrice = (data) => {
    setCartItems([...cartItems, data]);
    setTotal(total + data.price);
  };
  let removeItem = (item) => {
    let index = cartItems.findIndex((cItem) => cItem.id === item.id);
    cartItems.splice(index, 1);
    setCartItems([...cartItems]);
    setTotal(total - item.price);
  };

  const [item, setitem] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className={item ? "row blur" : "row"}>
        <div className="col-md-9">
          {/* <h1>Product</h1> */}
          <div className="select">
            <div className="option">
              <label for="pizza"> Pizza Base:</label>
              <select name="base" id="base">
                <option value="">Whole-Wheat</option>
                <option value="saab">Oats</option>
                <option value="opel">Multi-grain </option>
                <option value="audi">chickpea</option>
              </select>

              <label for="pizza">Sause:</label>
              <select name="sause" id="sause">
                <option value="Peasto">Peasto</option>
                <option value="White Garlic">White Garlic</option>
                <option value="Hummus">Hummus</option>
                <option value="Buffalo">Buffalo</option>
              </select>

              <label for="pizza">Cheese:</label>
              <select name="cheese" id="cheese">
                <option value="Mozzarella">Mozzarella</option>
                <option value="Provolone">Provolone</option>
                <option value="Parmesan">Parmesan</option>
                <option value="Gouda">Gouda</option>
              </select>

              <label for="pizza">veggies:</label>
              <select name="veggies" id="veggies">
                <option value="Leafy green">Leafy greeno</option>
                <option value="Cruciferous">Cruciferous</option>
                <option value="Marrow">Marrow</option>
                <option value="Allium">Allium</option>
              </select>

              <label for="pizza">meat:</label>
              <select name="meat" id="meat">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
           
            <Button  onClick={() => {setitem(true); }}  variant="contained">Submit</Button>
          </div>

          <div className="row">
            {products.map((product) => {
              return (
                <Pizzadetails
                  pData={product}
                  handleshowprice={showPrice}
                ></Pizzadetails>
              );
            })}
          </div>
        </div>

        <div className="col-lg-3">
          <h1>Cart({cartItems.length})</h1>
          {cartItems.map((item) => {
            return (
              <Carts removeItem={removeItem} item={item}>
                {" "}
              </Carts>
            );
          })}

          <ol class="list-group list-group-numbered"></ol>
          <h1>Total Item :{total}</h1>
          {console.log(total)}
        </div>
      </div>

      {item ? (
        <div className="over">
          <p>Your order has been placed</p>
        
          <Button  variant="contained" onClick={() => { navigate(0); }}>Back to home </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
