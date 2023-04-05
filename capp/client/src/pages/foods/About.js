import React from 'react'




const myStyle = {
    color: '#ffffff',
    backgroundColor: 'green',
    };

function About({user}) {

    return (
    <div>
    
        <div className ="homepage">
            <div style={myStyle}>
                
                <h1>This app is used to help organize your shopping habits</h1>
                <h2>Welcome {user}</h2>
        
        </div>
           
           
            
        </div>
    </div>
    )
}

export default About