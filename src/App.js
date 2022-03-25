import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import image2 from "./components/images/Usa.png"
import image3 from "./components/images/pretty.png"
import image4 from "./components/images/cycle.png"

function App(){
    return(
    <div>
        <Navbar/>
        <Hero />
        <section className="container">
        <Card 
        image={image2}
        num={5}
        con="USA"
        para="im one of the useless guy  in the world"
        />
        <Card 
        image={image3}
        num={5}
        con="USA"
        para="im one of the useless guy  in the world"
        />
        <Card 
        image={image4}
        num={5}
        con="USA"
        para="im one of the useless guy  in the world"
        />
        </section>
    </div>
    )
}

export default App;