"use client"

// import icons

import Close from "@/assests/svg/icon-close"

// import styles

import {
  con,
  menu,
  close
} from "./menu.module.scss"

// import hooks

import { useState } from "react"

// import helpers

import Link from "next/link";

// code

export default function MENU({showed, show}) {

  const [color, setColor] = useState("#69707D");

  const colorHandle = () => {
    if (color == "#69707D") {
      setColor("#000000");
    } else {
      setColor("#69707D");
    }
  }

  return(
    <div className={`${showed ? con : "d-none"} vw-100 vh-100 position-fixed top-0 start-0`}>
      <div className={`position-fixed top-0 start-0 vh-100 ${menu}`}>
        <div className={`${close} px-4 position-relative`}>
          <span className="position-absolute" onMouseEnter={colorHandle} onMouseLeave={colorHandle} onClick={() => {show(false)}}>
            <Close color={color} />
          </span>
        </div>
        <div className="py-3 px-4 text-start">
          <span>
            <Link
              href={"#"}
              title="Collections"
            >
              <b>Collections</b>
            </Link>
          </span>
        </div>
        <div className="py-3 px-4 text-start">
          <span>
            <Link
              href={"#"}
              title="Men"
            >
              <b>Men</b>
            </Link>
          </span>
        </div>
        <div className="py-3 px-4 text-start">
          <span>
            <Link
              href={"#"}
              title="Women"
            >
              <b>Women</b>
            </Link>
          </span>
        </div>
        <div className="py-3 px-4 text-start">
          <span>
            <Link
              href={"#"}
              title="About"
            >
              <b>About</b>
            </Link>
          </span>
        </div>
        <div className="py-3 px-4 text-start">
          <span>
            <Link
              href={"#"}
              title="Contact"
            >
              <b>Contact</b>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )

}