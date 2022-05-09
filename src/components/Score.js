import React from 'react'

const Score = ({score, fullScore}) => {
    return (
        <p>You scored {score} out of {fullScore}</p>
    )
}

export default Score