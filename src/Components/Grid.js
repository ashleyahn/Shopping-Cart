import { Column } from 'rbx';
import React from 'react';
import Item from './Item';

const Grid = items => {
    console.log(items);
    return (
        <Column.Group>
            {items.map(product => (
            <Column>
                <Item key={product.sku} title = {product.title}/>
            </Column>
            ))}
        </Column.Group>
    );
}

export default Grid;
