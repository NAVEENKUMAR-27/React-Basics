import React from 'react'

export const Details = (props) => {
    return (
            <>
                <h1>{props.type?.name}</h1>
                <h2>{props.type?.place}</h2>
                <h3>{props.type?.age}</h3>
                <h4>{props.type?.blood}</h4>
                <h5>{props.type?.grade}</h5>
            </>
    )
}

