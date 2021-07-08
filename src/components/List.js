import React from 'react'

function List(props) {
    const {itemList} = props;
    return (
        <div>
            {itemList.map((item) => {
                return <p>{item}</p>
            })}
        </div>
    )
}

export default List;