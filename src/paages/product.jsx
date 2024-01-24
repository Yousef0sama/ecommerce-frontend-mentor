"use client"

// import layout

import Layout from "./layout"

// import components

import IMAGE from "@/components/product/gallery/image/image"
import Thumbs from "@/components/product/gallery/thumbs/thumbs"
import LightBox from "@/components/product/gallery/lightBox/lightBox"
import Arrows from "@/components/product/gallery/arrows/arrows"
import Texts from "@/components/product/info/texts/texts"

// import styles

import {
  product,
  con,
} from "./product.module.scss"

import "./fix.css"

// IMPORT HOOKS

import { useContext, useEffect, useState } from "react"

// get context

import { Products } from "@/app/page"
import AddToCart from "@/components/product/info/addToCart/addToCart"

export default function Product() {

  const products = useContext(Products);

  const [IdSelected, setIdSelected] = useState(1);
  const [image, setImage] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const [rightArrowColor, setRightArrowColor] = useState("#000000");
  const [leftArrowColor, setLeftArrowColor] = useState("#000000");
  const [element, setElement] = useState("");

  const colorHandle = () => {
    switch (element) {
      case "leftIn":
        setLeftArrowColor("#ff7d1a");
        break;
      case "leftOut":
        setLeftArrowColor("#000000");
        break;
      case "rightIn":
        setRightArrowColor("#ff7d1a");
        break;
      case "rightOut":
        setRightArrowColor("#000000")
        break;
      default:
        setLeftArrowColor("#000000");
        setRightArrowColor("#000000");
        break;
    }
  }

  useEffect(colorHandle, [element]);


  const next = () => {
    if (IdSelected === products.products[0].images.length) {
      setIdSelected(1);
      return 0;
    }

    setIdSelected(IdSelected + 1);
    return 0;

  }

  const prev = () => {
    if (IdSelected === 1) {
      setIdSelected(products.products[0].images.length);
      return 0;
    }

    setIdSelected(IdSelected - 1);
    return 0;

  }

  const changeImage = () => {
    setImage(IdSelected - 1);
  }

  useEffect(changeImage, [IdSelected]);

  return(
    <Layout>
      <div className={`row ${product}`}>
        <div className="col-lg-6 col-md-7 d-none d-md-flex">
          <div className={`position-relative w-100 ${con}`}>
            <div className="position-absolute top-50 start-50 center w-75">
              <IMAGE image={products.products[0].images[image]} setShowLightBox={setShowLightBox} />
              <Thumbs thumbs={products.products[0].thumbs} IdSelected={IdSelected} setIdSelected={setIdSelected} />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 d-none d-md-flex">
          <div className={`position-relative w-100 ${con}`}>
            <div className="position-absolute top-50 start-50 center w-100">
              <Texts products={products.products} />
              <AddToCart products={products} />
            </div>
          </div>
        </div>
        <div className="col-lg-1 d-lg-flex d-none"></div>
        <div className="col-12 d-flex d-md-none">
          <IMAGE image={products.products[0].images[image]} setShowLightBox={setShowLightBox} />
          <span className="d-block w-100 h-auto position-absolute start-0">
            <Arrows setElement={setElement} rightArrowColor={rightArrowColor} leftArrowColor={leftArrowColor} next={next} prev={prev} />
          </span>
        </div>
        <div className="d-block my-3 d-md-none">
            <Texts products={products.products}/>
            <AddToCart />
        </div>
      </div>
      <LightBox products={products.products} image={image} IdSelected={IdSelected} setIdSelected={setIdSelected} showLightBox={showLightBox} setShowLightBox={setShowLightBox} next={next} prev={prev} />
    </Layout>
  )

}