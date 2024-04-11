import Navbar from "@/components/Navbar";
import About from '@/components/About';
import Image from "next/image";

import React from 'react'
import Contact from "@/components/Contact";

export default function page() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Contact/>
    </div>
  )
}
