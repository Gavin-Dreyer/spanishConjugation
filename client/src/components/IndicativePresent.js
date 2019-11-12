// Level 1
import React, { useEffect, useState } from 'react'
const IndicativePresent = (props) => {
    const [randVerb, setRandVerb] = useState()

    useEffect(() => {
        setRandVerb(props.indPresent[Math.floor(Math.random() * props.indPresent.length)]);
    }, [])

    console.log(randVerb)

    if (!randVerb) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            Please conjugate {randVerb.spanishVerb} in First Person
        </div>
    )
}

export default IndicativePresent