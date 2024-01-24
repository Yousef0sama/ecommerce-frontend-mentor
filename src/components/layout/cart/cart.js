"use client"

// import next helpers

import Image from "next/image"

// import styles

import {
  cart,
  heading,
  product,
  empty,
  Img,
  info,
  del,
  check
} from "./cart.module.scss"

// import svg

import Delete from "@/assests/svg/icon-delete"

// import hooks

import { useState } from "react"

export default function Cart({showed, products, setCart}) {

  const [index, setIndex] = useState("none");

  const mouseInHandle = (i) => {
    setIndex(i)
  }

  const mouseOutHandle = () => {
    setIndex(-1)
  }

  const remove = (i) => {
    setCart(products.filter((e) => (e.id !== i)))
  }

  return(
    <div className={showed ? cart : "d-none"}>
      <div className={heading}> Cart </div>
      <div className="row">
        {
          products.length > 0 &&

          products.map(({id, name, img, price, count}, i) => {
            return (
              <div key={id} className={`${product} row col-12`}>
                <div className={`col-sm-3 col-4 ${Img}`}>
                  <span>
                    <Image
                      src={`./images/${img}`}
                      alt={name + " img"}
                      width={100}
                      height={100}
                    />
                  </span>
                </div>
                <div className={`col-sm-7 col-6 ${info}`}>
                  <span> {name} </span>
                  <span>
                    <span> ${price} </span>
                    <span> x </span>
                    <span> {count} </span>
                    <b> &nbsp; ${ price * count } </b>
                  </span>
                </div> 
                <div className={`col-2 ${del}`} onMouseEnter={() => mouseInHandle(i)} onMouseLeave={mouseOutHandle} onClick={() => remove(id)}>
                  <Delete color={index === i ? "#000000" : "#C3CAD9" } />
                </div>
              </div>
            )
          })
        }
      </div>
      {
        products.length > 0 ?

        <div className={check}>
          <button type="button">Checkout</button>
        </div>

        :

        <div className={empty}>
          <p> Your cart is empty. </p>
        </div>
      }
    </div>
  )

}