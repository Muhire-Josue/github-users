import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div>
                <br />
            <div className="alert alert-dark" role="alert">
                <p>{alert.message}</p>
            </div>
            </div>
        )
    )
}

export default Alert
