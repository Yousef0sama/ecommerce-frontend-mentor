"use client"

// import bootstrap
import "./style.scss"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

// import hooks

import { useContext, useEffect, useState, createContext } from "react"

//  import pages

import Product from "@/paages/product"

export const Products = createContext();

export default function Home() {

  const [products, setProducts] = useState([
    {
      id: 1,
      company: "sneaker comapny",
      name: "Fall Limited Edition Sneakers",
      descrebtion: "These low-profile sneakers are your perfect casual wear companion. Featuring adurable rubber outer sole, they'll with stand everything the weather can offer.",
      price: 250,
      discount: 50,
      images: ["image-product-1.png", "image-product-2.png", "image-product-3.png", "image-product-4.png"],
      thumbs: [
        {
          id:1,
          img:"image-product-1-thumbnail.png"
        },
        {
          id:2,
          img:"image-product-2-thumbnail.png"
        },
        {
          id:3,
          img:"image-product-3-thumbnail.png"
        },
        {
          id:4,
          img:"image-product-4-thumbnail.png"
        }
      ],
    }
  ]);

  const [cart, setCart] = useState([]);

  return (
    <Products.Provider value={{products, cart, setCart}}>
      <Product />
    </Products.Provider>
  )
}
