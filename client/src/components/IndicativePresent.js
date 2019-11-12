// Level 1
// no reflexive verbs, no irregular verbs
import React, { useEffect, useState } from 'react'
const IndicativePresent = (props) => {
    const [randVerb, setRandVerb] = useState()
    const [randomizedTense, setRandomizedTense] = useState()

    //creates an object to check if verb is reflexive
    let checker = props.indPresent.map(item => {
        let obj = { reflexiveCheck: item.spanishVerb, spanVerb: item.spanishVerb, tense: item.firstPersonSingular }

        obj.reflexiveCheck = obj.reflexiveCheck.split('')

        obj.reflexiveCheck = obj.reflexiveCheck.slice(obj.reflexiveCheck.length - 2, obj.reflexiveCheck.length)

        obj.reflexiveCheck = obj.reflexiveCheck.join('')

        return obj
    })

    //if verb is reflexive, filter it out
    checker = checker.filter(item => {
        if (item.reflexiveCheck !== 'se') {
            return item
        }
    })

    //create new array with filtered reflexive verbs
    let nonReflexiveVerbs = []

    props.indPresent.forEach(item => {
        for (let i = 0; i < checker.length; i++) {
            if (item.spanishVerb === checker[i].spanVerb) {
                nonReflexiveVerbs = [...nonReflexiveVerbs, item]
            }
        }
    })

    useEffect(() => {
        //randomly selects a verb from an array of indictive present verbs
        setRandVerb(nonReflexiveVerbs[Math.floor(Math.random() * nonReflexiveVerbs.length)])

    }, [props.totalQs])

    useEffect(() => {
        if (randVerb) viewPicker(randVerb)
    }, [randVerb])

    if (!randVerb) {
        return <h2>Loading...</h2>
    }

    function viewPicker(verb) {
        let verbKey = Object.keys(verb)
        let verbValues = Object.values(verb)

        //this is to filter the values to only include the points of view and their conjugations
        verbKey = verbKey.filter((item, index) => index > 4)
        verbValues = verbValues.filter((item, index) => index > 4)

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
        setRandomizedTense(pOVToString)
        props.setCurrentQ(verbValues[randomizer])
    }

    return (
        <div>
            Conjugate {randVerb.spanishVerb} in {randomizedTense}
        </div>
    )
}

export default IndicativePresent