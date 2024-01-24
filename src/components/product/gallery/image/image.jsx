"use client"

// import helpers

import Image from "next/image"

// import styles

import {
  img,
} from "./image.module.scss"

export default function IMAGE({image, setShowLightBox}) {

  const showLightBox = () => {
    setShowLightBox(true);
  }

  return(
    <span className={`${img} d-block`}>
      <Image
        src={`./images/${image}`}
        alt={image}
        width={100}
        height={100}
        onClick={showLightBox}
      />
    </span>
  )

}