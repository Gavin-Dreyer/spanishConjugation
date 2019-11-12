// Level 1
import React, { useEffect, useState } from 'react'
const IndicativePresent = (props) => {
    const [randVerb, setRandVerb] = useState()
    const [randomizedTense, setRandomizedTense] = useState()

    let checker = props.indPresent.map(item => {
        let obj = { reflexiveCheck: item.spanishVerb, spanVerb: item.spanishVerb, tense: item.firstPersonSingular }

        obj.reflexiveCheck = obj.reflexiveCheck.split('')

        obj.reflexiveCheck = obj.reflexiveCheck.slice(obj.reflexiveCheck.length - 2, obj.reflexiveCheck.length)

        obj.reflexiveCheck = obj.reflexiveCheck.join('')

        return obj
    })

    checker = checker.filter(item => {
        if (item.reflexiveCheck !== 'se') {
            return item
        }
    })

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
        setRandomizedTense(pOVToString)
    }

    return (
        <div>
            Conjugate {randVerb.spanishVerb} in {randomizedTense}
        </div>
    )
}

export default IndicativePresent