"use client"

// import helpers

import Image from "next/image"

// import styles

import {
  thum,
  selected,
} from "./thumbs.module.scss"

// import hooks

import { useState } from "react"

export default function Thumbs({thumbs, IdSelected, setIdSelected}) {


  const selectImgae = (id) =>{
    setIdSelected(id);
  }

  return(
    <div className={`row ${thum}`}>
      {
        thumbs.map(({id, img}, i) => {
          return(
            <div className="col-3 position-relative d-md-flex  d-none" key={id}>
              <span className={`d-block w-100 h-100 ${IdSelected == id ? selected : ""}`}>
                <Image
                  src={`./images/${img}`}
                  alt={img}
                  width={100}
                  height={100}
                  onClick={() => selectImgae(id)}
                />
              </span>
            </div>
          )
        })
      }
    </div>
  )

}