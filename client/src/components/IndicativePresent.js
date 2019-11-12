// Level 1
import React, { useEffect, useState } from 'react'
const IndicativePresent = (props) => {
    const [randVerb, setRandVerb] = useState()

    useEffect(() => {
        //randomly selects a verb from an array of indictive present verbs
        setRandVerb(props.indPresent[Math.floor(Math.random() * props.indPresent.length)]);

    }, [props.totalQs])

    props.setCurrentQ(randVerb)

    if (!randVerb) {
        return <h2>Loading...</h2>
    }

    const viewPicker = () => {
        let verbKey = Object.keys(randVerb)
        let verbObject = Object.values(randVerb)

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
        return pOVToString
    }

    return (
        <div>
            Conjugate {randVerb.spanishVerb} in {viewPicker()}
        </div>
    )
}

export default IndicativePresent