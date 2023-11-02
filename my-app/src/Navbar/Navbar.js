import React from "react";
import './Navbar.css'
const Navbar=(props)=> {
  return (
    
    <div class="Toolbar">
        <div class="Toolbar_Navigation">
            <div class="SingIn">
                <button>
                          Sign In
                    
                </button>
            </div>






           <i onClick={props.OpenHandler} className="fa-solid fa-bars berger"></i>
            <div class="Navigation_Items">
                <div className="Logo">

                </div>
                <ul>
                <li>
                        <a href="#">Home</a>
                    </li> <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Contant</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
  }
  export default Navbar