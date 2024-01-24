"use client"

// import styles

import {
  arrows,
  arrow,
} from "./arrows.module.scss"

// import svg

import Next from "@/assests/svg/icon-next"
import Prev from "@/assests/svg/icon-previous"


export default function Arrows ({rightArrowColor, leftArrowColor, setElement, next, prev}) {

  return(
    <div className={`position-absolute w-100 ${arrows}`}>
      <span className={`d-block position-relative float-start ${arrow}`} role="button" onClick={prev} onMouseEnter={() => setElement("leftIn")} onMouseLeave={() => setElement("leftOut")}>
        <span className="d-block position-absolute top-50 start-50 center">
          <Prev color={leftArrowColor} />
        </span>
      </span>
      <span className={`d-block position-relative float-end ${arrow}`} role="button" onClick={next} onMouseEnter={() => setElement("rightIn")} onMouseLeave={() => setElement("rightOut")}>
        <span className="d-block position-absolute top-50 start-50 center">
          <Next color={rightArrowColor} />
        </span>
      </span>
    </div>
  )

}