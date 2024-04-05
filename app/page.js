'use client'


import NavbarLanding from 'components/navbar.js'
import Tagline from 'components/main/tagline.js'
import Tools from 'components/main/tools.js'
import Experiences from 'components/main/experiences.js'


export default function Main() {
  return (
     <div className="container mx-auto xsm:mx-12">
         <NavbarLanding/>
         <Tagline/>

         <Experiences/>
         <Tools/>
         {/* <Experiences/>
         <Tools/> */}
     </div>
  )
}
