import React from 'react'
import Item from './Item'

function List(props) {
    const {itemList} = props;
    return (
        <div>
            {itemList.map((item) => {
                return <Item item={item} />
            })}
        </div>
    )
}

export default List;