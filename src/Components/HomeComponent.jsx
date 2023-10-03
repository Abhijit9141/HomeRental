
import "../Styles/HomeComp.css"
import HomeList from "./HomeList";
import "../App.css"
import { useState } from "react";
import { data } from "../Home";
import BottomAppBar from "./BottomAppBar";
import NavBar from "./NavBar";
import houses from "../Data.json"
function HomesComponent() {


    return (
        
        <div className="Container">
            <NavBar />
            <div className="nav-button">
                <p>New York</p>
                <p>Mumbai</p>
                <p>Paris</p>
                <p>Londen</p>
            </div>
            <div className="display-grid">
                {
                    houses.house.map((home, index) => {
                        if(index>5) return
                        return <div>
                            <HomeList  key={index} home={home} />    
                        </div>
                    })
                }
            </div>
         </div>
              );
}

export default HomesComponent;
