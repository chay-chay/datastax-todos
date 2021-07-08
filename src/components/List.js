import React from 'react'

function List() {
    const itemList = ["Get Milk", "Buy Amazon", "Take over thr world"]
    return (
        <div>
            {itemList.map((item) => {
                return <p>{item}</p>
            })}
        </div>
    )
}

export default List;