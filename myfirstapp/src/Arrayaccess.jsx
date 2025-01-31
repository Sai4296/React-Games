import React from 'react'

function Arrayaccess() {
 
    const [arr,setArr] = React.useState([])

    const allArr = ["SAI","PRASADA","REDDY","SAMPATH","KOLUCHULAM","CHANDRA","NAKKALA"]

    const newArr = arr.map(thing => <p key={thing}> {thing} </p>)

    function addArr() {
    setArr (
        Parr => [
        ...Parr,
        allArr[Parr.length]
    ])  
    }
    return (
        <>
        <button onClick={addArr}>Add item</button>
            <section aria-live="polite">
                {newArr}
            </section>
         </>
)
}

export default Arrayaccess