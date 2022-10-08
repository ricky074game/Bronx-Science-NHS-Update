import React, { Component } from 'react';
import { useEffect } from 'react'
import Hero from "../components/Hero.jsx";

export default function Contact() {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
   return (
      <section class="page">
         <Hero
         title="Contact Us"
         image="https://images.squarespace-cdn.com/content/v1/5bfc3ff0a2772c55740f3539/1595258015140-VLOX2L1YTEGGYKTVWF0J/BxSciGo%2B%25282%2529.jpg"
         />
      <div class="contact-info">
         <p >All general questions should be directed to <u>nhs@bxscience.edu</u>. <br></br>If you wish
            to contact officers or advisors individually, their information is <a class="link" href="/about#board">here</a>.</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      </section>
   );
}