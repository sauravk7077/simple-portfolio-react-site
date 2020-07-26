import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome, faSuitcase} from "@fortawesome/free-solid-svg-icons"

class NavBar extends React.Component{
    constructor() {
        super();
        this.state = {
            menuButtonEnabled: false
        }
    }

    handleClick= (e)=> {
        this.setState(prev=>(
            {
                menuButtonEnabled: !prev.menuButtonEnabled
            }
        ))
    }

    render() {
        let menuBar;
        if(this.state.menuButtonEnabled){
            menuBar = (
                <div className="flex nav">
                    <div className="brand">Portfolio Site</div>                    
                    <div className="menuContainer flex">
                        <div className="link flex button">
                            <a href="#home"><FontAwesomeIcon icon={faHome}/> Home</a>
                        </div>
                        <div className="link flex button">
                            <a href="#">About</a>
                        </div>
                        <div className="link flex button">
                            <a href="#portfolio"><FontAwesomeIcon icon={faSuitcase}/> Portfolio</a>
                        </div>
                        <div className="link flex button">
                            <a href="#">Contact</a>
                        </div>
                        <div className="flex"><button onClick={this.handleClick} className="button">X</button></div>
                    </div>
                    
                </div>
            )
        }   else {
        menuBar = (
                <div className="flex nav">
                    <div className="brand">Portfolio Site</div>
                    <div className="flex menuHandle"><button onClick={this.handleClick} className="button">Menu</button></div>
                </div>
            )
        }
        return menuBar;
    }
}

export default NavBar;