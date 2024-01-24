"use client"

import Nav from "@/components/layout/nav/nav"

export default function Layout ({children}) {

  return(
    <div className="container">
      <Nav />
      {children}
    </div>
  )

}