import React from 'react'

const DataCard = ({ userId, id, title, completed }) => {
    return (
        <div>
            <p>{id}. {title}</p>
        </div>
    )
}

export default DataCard