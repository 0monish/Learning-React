import React, { createContext } from 'react'

// CREATING THE CONTEXT AND EXPORTING SO THAT IT CAN BE ACCESSED BY ANY COMPONENT
export const MovContext = createContext()

const Moviecontext = (props) => {

    // HERE WRAP THE App COMPONENT WITH THIS COMPONENT SEE IN main.jsx

    // SUPPOSE WE NEED TO SHARE THE DATA OF MOVIE LETS TAKE MOVIE NAME WHICH WILL BE  
    // SHARED TO EACH AND EVERY COMPONENT IN THIS REACT APP TO DO THIS CONTEXT NEEDS TO BE CREATED IT WILL BE CREATED 
    // BEFORE Moviecontext 
    const movieName = "Animal"
    return (
        <div>
            {/* NOW WHEN YOU RUN THE APP YOU WILL BE ABLE TO SEE THE BELOW H1 TAG INSTEAD OF
                H1 TAG PRESENT IN App.jsx 
                SO WHY THIS IS HAPPENING BECAUSE NOW APP IS THE CHILD OF Moviecontext SO TO ACCESS 
                THE CHILD WE NEED TO USE props        
            */}
            {/* <h1 className="absolute top-1/2 left-1/3 translate-y-1/2 text-5xl">THIS IS Moviecontext </h1> */}

            {/* WHEN YOU LOG THE props THEN YOU WILL SEE THE IT RETURN OBJECT WHICH CONTAINS CHILDREN SO HERE CHILDREN IS App component */}
            {/* console.log(props) */}

            {/* ACCESSING THE App COMPONENT */}
            {/* {props.children} */}

            {/* ANOTHER WAY OF ACCESS CAN BE BY DESTRUCTURING ABOVE IN THE PARAMETER OF THE WHERE props IS USED INSTEAD 
            IT CAN BE LIKE 
            const Moviecontext = ({children}) => {
                // some code..
                {children}
                //some code.. 
            }
            */}

            {/* NOW TO PASS THE DATA TO THE COMPONENTS FOR EXAMPLES WE TAKE pages/About and pages/Contact and App */}
            {/* HERE WE USED A PROPERTY CALLED Provider WHICH WILL PROVIDE THE DATA TO COMPONENTS */}
            <MovContext.Provider value={movieName}>
                {props.children}
            </MovContext.Provider>

        </div>
    )
}

export default Moviecontext