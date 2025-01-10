import React from 'react'
import Child from './Child'

const Parent = (props) => {
    return (
        <div className='m-10'>
            <h1 className='text-3xl'>My name is {props.parentName} Kumar and I am a Parent</h1>

            {/* SENDING DATA TO CHILD COMPONENT */}
            <Child pName={props.parentName} cName={props.childName} />
        </div>
    )
}

export default Parent