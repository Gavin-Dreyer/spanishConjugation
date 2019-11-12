// Level 1
import React, { useEffect, useState } from 'react'
const IndicativePresent = (props) => {
    const [randVerb, setRandVerb] = useState()
    const [randomize, setRandomize] = useState()

    useEffect(() => {
        //randomly selects a verb from an array of indictive present verbs
        setRandVerb(props.indPresent[Math.floor(Math.random() * props.indPresent.length)])

    }, [props.totalQs])

    useEffect(() => {
        console.log(randVerb)
        if (randVerb) viewPicker(randVerb)
    }, [randVerb])

    props.setCurrentQ(randVerb)

    if (!randVerb) {
        return <h2>Loading...</h2>
    }

    function viewPicker(verb) {
        let verbKey = Object.keys(verb)
        let verbObject = Object.values(verb)

        //this is to filter the values to only include the points of view and their conjugations
        verbKey = verbKey.filter((item, index) => index > 4)
        verbObject = verbObject.filter((item, index) => index > 4)

        let randomizer = Math.floor(Math.random() * verbKey.length)

        //this converts the key asscoiated with the value to a normal string format
        let pOVToString = verbKey[randomizer]
        pOVToString = pOVToString.split('')
        pOVToString = pOVToString.map(item => {
            if (item === item.toUpperCase()) {
                return ' ' + item
            } else {
                return item
            }
        })
        pOVToString = pOVToString.map((item, index) => {
            if (index === 0) {
                return item.toUpperCase()
            } else {
                return item
            }
        })
        pOVToString = pOVToString.join('')
        setRandomize(pOVToString)
    }

    console.log(randomize)

    return (
        <div>
            Conjugate {randVerb.spanishVerb} in {randomize}
        </div>
    )
}

export default IndicativePresent