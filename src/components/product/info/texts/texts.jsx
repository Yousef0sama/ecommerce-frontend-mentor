"use client"

// import styles

import {
  company,
  descrebtion,
  discount,
  disabled
} from "./texts.module.scss"

export default function Texts ({products}) {

  return (
    <div className="row w-100 p-2 p-md-0" onClick={() => console.log(products[0])}>
      <div className="col-12">
        <span className={`d-block py-1 ${company}`}>
          {products[0].company.toUpperCase()}
        </span>
      </div>
      <div className="col-12">
        <h1 className="fw-bold fs-1 py-1">
          {products[0].name}
        </h1>
      </div>
      <div className="col-12 py-1">
        <p className={descrebtion}>
          {products[0].descrebtion}
        </p>
      </div>
      <div className="col-12">
        <span className="fw-bold fs-3">
          ${products[0].price * products[0].discount/100}
        </span>
        <span className={`mx-2 d-inline-block ${discount}`}>
          %{products[0].discount}
        </span>
        <span className={`fw-bold fs-6 d-block text-decoration-line-through ${disabled}`}>
          ${products[0].price}
        </span>
      </div>
    </div>
  )

}