import React from 'react'
import { Link } from "react-router-dom"





function Home({user}) {

    return (
    
 
        <div className ="homepage">
            {user?
            <div >
                <div className = "welcome">
                <h1>Welcome {user.toUpperCase()}</h1>
                </div>
                <div>
                <h2>Click on Plate to Start Creating</h2>
                </div>
                

    <br></br><br></br>
    <div className = "homeImage">
    <a href = "/foods"><img src = "https://myplate-prod.azureedge.us/sites/default/files/styles/medium/public/2020-11/myplate-brand--labelled.png?itok=7VtFXcBC"></img></a>
    </div>
    <br></br><br></br><br></br>
                <div className="tracker">
                <h3>Here is your current grocery list cost</h3>
                <h3>Here is your current grocery list servings/calories</h3>
                </div>
        </div>
:   <div >
<h1>Welcome Prospective User</h1>
<div className ="signUp">
<a href = "/foods"><h2>Sign Up to Start Creating</h2></a>
</div>
<div className = "homeImage">
    <a href = "/register"><img src = "https://myplate-prod.azureedge.us/sites/default/files/styles/medium/public/2020-11/myplate-brand--labelled.png?itok=7VtFXcBC"></img></a>
    </div>
</div>}
           
            
        </div>
    
    )
}

export default Home