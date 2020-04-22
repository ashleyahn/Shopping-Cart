import React from 'react';
import 'rbx/index.css';
import { Card } from 'rbx';


const Item = (props) => {
    return (
        <Card>
            <Card.Content>{ props.title } </Card.Content>
        </Card>
    );
};

export default Item;
