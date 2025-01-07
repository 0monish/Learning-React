import React, { useState } from "react"

const App = () => {

    //return "hello"

    // CREATING A VARIABLE 
    // let message = "THIS IS REACT"
    // return (    
    //     <div>
    //         {/* ACCESSING THE VARIABLE */}
    //         <h1>{message}</h1>
    //     </div>
    // )


    // TRYING TO CHANGE THE NAME ON BUTTON CLICK
    // let username = "Monish"

    // const changeName = () => { // CREATING A FUNCTION TO CHANGE THE NAME
    //     console.log(username)
    //     username = "Monish Khandelwal"
    //     console.log(username)
    // }

    // return (
    // FISRT IMPORTANT THING TO NOTE THAT REACT RETURNS ONLY ONE ELEMENT
    // I.E. SUPPOSE USE TRY TO RETURN H1 AND H2 THEN IT WILL GIVE ERROR SO TO HANDLE THIS 
    // YOU NEED ENCLOSE OTHER ELEMETS INTO ONE ELEMENT FOR THIS WE CAN PREFER TO USE DIV ELEMENT 
    // <div>
    //     <h1>{username}</h1>
    {/* IF YOU TRY TO DO THIS WAY THEN FUNCTION WILL BE EXECUTED WITH OUT WAITING FOR THE BUTTON BE CLICKED */ }
    {/* <button onClick={changeName()}></button> */ }

    {/* INSTEAD LIKE THIS */ }
    {/* <button onClick={changeName}>CHANGE</button>
        </div> */}

    // YOU WILL BE ABLE TO SEE THAT USERNAME DOESN'T GOT CHANGED IN DOM  
    // BECAUSE WE ARE TRYING TO MANIULATE THE DOM DIRECTLY WHICH SHOULDN'T BE THE CASE

    // )

    // SO RESOLVE THE ABOVE ISSUE THE IS A CONCEPT useState HOOK

    const [no, setNo] = useState(10)
    // no IS A READABLE ABLE ELLEMENT
    // setNO IS A WRITEABLE FUNCTION WHICH IS USED TO SET THE VALUE OF no 
    // AND IN useState() FUNCTION WE CAN ASSIGN THE VALUE FOR no. IT'S MORE LIKE INITIALIZATION

    return (
        // HERE EMPTY TAGS ARE CALLED FRAGMENTS AS WE RETURN ONLY ONE ELEMENT 
        // SO INSTEAD OF RETURNING THE DIV ELEMENT AS WRAPER LIKE WE DID EARLIER
        // WE CAN USE THIS FRAGMENTS AS A WRAPER BY NOT CREATING UNNESSARILY EXTRA ELEMENT(DIV)
        <>
            <h1>THE NUMBER IS {no}</h1>
            <button onClick={() => setNo(no + 10)}>INCREMENT</button>
            &emsp;<button onClick={() => setNo(no - 10)}>DECREMENT</button>
        </>
    )

}


export default App