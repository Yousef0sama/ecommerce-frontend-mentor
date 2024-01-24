"use client"

// import components

import IMAGE from "../image/image"
import Thumbs from "../thumbs/thumbs"
import Arrows from "../arrows/arrows";

// import styles

import {
  con,
  thumbs,
  img
} from "./lightBox.module.scss"

// import svg

import Close from "@/assests/svg/icon-close"

// import Hooks

import { useEffect, useState } from "react"

export default function LightBox({products, image, IdSelected, setIdSelected, showLightBox, setShowLightBox, next, prev}) {

  const hoverColor = "#ff7d1a";

  const [closeColor, setCloseColor] = useState("#ffffff");
  const [rightArrowColor, setRightArrowColor] = useState("#000000");
  const [leftArrowColor, setLeftArrowColor] = useState("#000000");
  const [element, setElement] = useState("")

  const colorHandle = () => {
    switch (element) {
      case "closeIn":
        setCloseColor(hoverColor);
        break;
      case "closeOut":
        setCloseColor("#ffffff");
        break;
      case "leftIn":
        setLeftArrowColor(hoverColor);
        break;
      case "leftOut":
        setLeftArrowColor("#000000");
        break;
      case "rightIn":
        setRightArrowColor(hoverColor);
        break;
      case "rightOut":
        setRightArrowColor("#000000")
        break;
      default:
        setCloseColor("#ffffff");
        setLeftArrowColor("#000000");
        setRightArrowColor("#000000");
        break;
    }
  }

  useEffect(colorHandle, [element]);

  return (
    <div className={`${ showLightBox ? `position-absolute d-md-block d-none top-0 start-0 vw-100 vh-100 ${con}` : "d-none" }`}>
      <div className="position-relative top-0 start-0 vw-100 vh-100">
        <div className="position-absolute top-50 start-50 center">
          <div className="position-relative w-100 mb-5">
            <span role="button" className="position-absolute end-0 mx-2" onMouseEnter={() => setElement("closeIn")} onMouseLeave={() => setElement("closeOut")} onClick={() => setShowLightBox(false)}>
              <Close color={closeColor} />
            </span>
          </div>
          <Arrows rightArrowColor={rightArrowColor} leftArrowColor={leftArrowColor} setElement={setElement} next={next} prev={prev} />
          <span className={`d-block ${img}`}>
            <IMAGE setShowLightBox={setShowLightBox} image={products[0].images[image]} />
          </span>
          <span className={`d-block ${thumbs}`}>
            <Thumbs thumbs={products[0].thumbs} IdSelected={IdSelected} setIdSelected={setIdSelected} />
          </span>
        </div>
      </div>
    </div>
  )

}

