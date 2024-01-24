"use client"

// import svg

import IconMinus from "@/assests/svg/icon-minus"
import IconPlus from "@/assests/svg/icon-plus"
import IconCart from "@/assests/svg/icon-cart";

// import hooks

import { useState, useEffect, useContext } from "react";

// import context

import { Products } from "@/app/page";

// import styles

import {
  Count,
  button,
} from "./addToCart.module.scss"

export default function AddToCart () {

  const products = useContext(Products);

  const [itemsCount, setItemsCount] = useState(0);
  const [ids, setIds] = useState([]);
  const [minusColor, setMinusColor] = useState("#ff7d1a");
  const [plusColor, setPlusColor] = useState("#ff7d1a");

  const minus = () => {
    if (itemsCount > 0) {
      setItemsCount(
        (state) => state - 1
      )
    }
  }

  useEffect(() => {

    setIds(products.cart.map((e) => (e.id)));

  }, [products.cart]);

  const addToCart = () => {
    products.products.map( (e) => {
      if (ids.includes(e.id)) {
        if (itemsCount > 0) {
          products.setCart([{
            ...products.cart[e.id - 1],count : itemsCount + products.cart[e.id - 1].count
          }])
        }
      } else {
        if (itemsCount > 0) {
          products.setCart([...products.cart,
            {
              id: products.products[0].id,
              name: products.products[0].name,
              img: products.products[0].thumbs[0].img,
              price: products.products[0].price * (products.products[0].discount / 100),
              count: itemsCount
            }
          ])
        }
      }
    })
  }

  return(
    <div className="row my-2">
      <div className="row col-12 col-md-5 col-lg-4">
        <div className={`row col-12 py-2 ${Count} me-md-4 my-3`}>
          <div className="col-lg-2 col-4 h-100">
            <span role="button" className="d-block float-start" onClick={minus} onMouseEnter={() => setMinusColor("#fe9f56")} onMouseLeave={() => setMinusColor("#ff7d1a")}>
              <IconMinus color={minusColor} />
            </span>
          </div>
          <div className="col-lg-8 col-4 text-center">
            {itemsCount}
          </div>
          <div className="col-lg-2 col-4 h-100 pe-3">
            <span role="button" className="d-block float-end" onClick={() => setItemsCount( (state) => state + 1 )} onMouseEnter={() => setPlusColor("#fe9f56")} onMouseLeave={() => setPlusColor("#ff7d1a")}>
              <IconPlus color={plusColor} />
            </span>
          </div>
        </div>
      </div>
      <div className={`col-12 col-md-7 col-lg-8 ms-md-4 my-3 ${button}`}>
        <button className="d-block py-2 fw-bold w-100" onClick={addToCart}>
          <IconCart color={"#ffffff"} /> Add to cart
        </button>
      </div>
    </div>
  )

}