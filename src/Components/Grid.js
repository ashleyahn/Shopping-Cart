import { Column } from 'rbx';
import React from 'react';
import ItemCard from './ItemCard';

const Grid = ( {state} ) => {
    const products = Object.values(state.data);
    return (
        <Column.Group vcentered multiline>
        {products.map(product => 
          <Column size="one-quarter">
            <ItemCard
              key = {product.sku}
              sku = {product.sku}
              title = {product.title}
              description = {product.description}
              price = {product.price}/>
          </Column>
        )}
      </Column.Group>
    );
}

export default Grid;
