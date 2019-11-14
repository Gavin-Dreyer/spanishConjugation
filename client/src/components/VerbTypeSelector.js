import React from 'react'

const VerbTypeSelector = (props) => {

    const typeSelector = (word) => {
        if (props.verbType.includes(word)) {
            props.setVerbType(props.verbType.filter(item => item !== word))
        } else {
            props.setVerbType([...props.verbType, word])
        }

    }

    return (
        <div>
            <button onClick={() => typeSelector('ref')}>Include reflexive verbs</button>
            <button onClick={() => typeSelector('irr')}>Include irregular verbs</button>
        </div>
    )
}

export default VerbTypeSelector