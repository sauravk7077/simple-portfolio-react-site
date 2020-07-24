import React from "react";

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
                    <h1 className="brand">Portfolio Site</h1>                    
                    <div className="menuContainer flex">
                        <div className="link flex button">
                            <a href="#home">Home</a>
                        </div>
                        <div className="link flex button">
                            <a href="#">About</a>
                        </div>
                        <div className="link flex button">
                            <a href="#portfolio">Portfolio</a>
                        </div>
                        <div className="link flex button">
                            <a href="#">Contact</a>
                        </div>
                        <div className="flex"><button onClick={this.handleClick}>X</button></div>
                    </div>
                    
                </div>
            )
        }   else {
        menuBar = (
                <div className="flex nav">
                    <h1 className="brand">Portfolio Site</h1>
                    <div className="flex menuHandle"><button onClick={this.handleClick}>Menu</button></div>
                </div>
            )
        }
        return menuBar;
    }
}

export default NavBar;