/* eslint-disable react-hooks/exhaustive-deps */
"use client"

// import next helpers

import Link from 'next/link'
import Image from 'next/image'

// import assests

// icons

import Logo from "@/assests/svg/logo.jsx"
import IconCart from "@/assests/svg/icon-cart.jsx"
import Menu from "@/assests/svg/icon-menu.jsx"

// images

import Avatar from "@/assests/images/image-avatar.png"


// import styles

import {
  nav,
  icon,
  logo,
  img,
  cart,
  notf,
  link,
  menu
} from "./nav.module.scss"

import "./fix.css"

// import Hooks

import { useEffect, useState, useContext } from 'react'

// import components

import Cart from '../cart/cart'
import MENU from '../menu/menu'

// import context

import { Products } from '@/app/page'

// code

export default function Nav() {

  const products = useContext(Products);

  const [cartColor, setCartColor] = useState("#69707D"),
        [showCart, setShowCart] = useState(false),
        [showMenu, setShowMenu] = useState(false),
        [itemsCount, setItemsCount] = useState(0),
        [menuColor, setMenuColor] = useState("#69707D"),
        [elem, setElem] = useState("");

  useEffect(() => {

    if (products.cart.length > 0) {

      setItemsCount(0)

      for (let item = 0; item < products.cart.length; item++) {
        setItemsCount((state) => ( state + products.cart[item].count ) );
      }

    } else {
      setItemsCount(0);
    }

  }, [products.cart]);

  const onColorHandle = () => {

    switch (elem) {
      case "menu":
        setMenuColor("#000000");
        break
      case "cart":
        setCartColor("#000000")
        break
    }

  }

  const outColorHandle = () => {

    setElem("")
    setCartColor("#69707D");
    setMenuColor("#69707D");

  }

  useEffect(onColorHandle, [elem])

  const handleShowCart = () => {
    setShowCart(!showCart);
  }

  const handleShowMenu = () => {
    setShowMenu(true);
  }

  return (

    <nav className={`row ${nav} position-fixed d-flex top-0`}>
      <div className="col-xl-7 col-lg-9 row">
        <div className="row d-none d-lg-flex">
          <div className="col">
            <span className={`${icon} ${logo} ${link}`}>
              <Link href={"#"} title='home'>
                <Logo width={"140px"} />
              </Link>
            </span>
          </div>
          <div className="col">
            <span className={`${link}`}>
              <Link href={"#"} title='Collections' > Collections </Link>
            </span>
          </div>
          <div className="col">
            <span className={`${link}`}>
              <Link href={"#"} title='Men' > Men </Link>
            </span>
          </div>
          <div className="col">
            <span className={`${link}`}>
              <Link href={"#"} title='Women' > Women </Link>
            </span>
          </div>
          <div className="col">
            <span className={`${link}`}>
              <Link href={"#"} title='About' > About </Link>
            </span>
          </div>
          <div className="col">
            <span className={`${link}`}>
              <Link href={"#"} title='Contact' > Contact </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="row col-8 d-lg-none d-flex">
        <div className="col-2">
          <span className="position-relative h-100 w-100 d-block" style={{cursor: "pointer"}} onMouseEnter={() => setElem("menu")} onMouseLeave={outColorHandle} onClick={handleShowMenu}>
            <Menu className={`position-absolute ${menu}`} color={menuColor} />
          </span>
          <MENU showed={showMenu} show={setShowMenu} />
        </div>
        <div className='col-10'>
          <span className={`${icon} ${logo} ${link}`}>
            <Link href={"#"} title='Profile'>
              <Logo width={"140px"} />
            </Link>
          </span>
        </div>
      </div>
      <div className="col d-none d-lg-block"></div>
      <div className="col-xl-2 col-lg-3 col-4 row">

        <div className="col-6">
          <span className={`${icon} ${link} position-relative`} onMouseEnter={() => setElem("cart")} onMouseLeave={outColorHandle} onClick={handleShowCart}>
            { itemsCount > 0 && <span className={`${notf} position-absolute center top-50 start-50 d-inline-block`}> {itemsCount} </span>}
            <IconCart color={cartColor} />
          </span>
          <Cart products={products.cart} showed={showCart} setCart={products.setCart} />
        </div>
        <div className="col-6">
          <span className={`d-block h-100 w-100 ${img} ${link}`} >
            <Link href={"#"} className={`position-relative d-block h-100 w-100`}>
              <Image
                className='position-absolute top-50 start-50 center'
                src={Avatar}
                alt="avatar"
                placeholder='empty'
                priority
              />
            </Link>
          </span>
        </div>

      </div>
    </nav>

  )

}