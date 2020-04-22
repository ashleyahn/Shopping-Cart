import React from 'react';
import 'rbx/index.css';
import { Card, Image } from 'rbx';


const ItemCard = (props) => {
    var thumbnail = "data/products/" + props.sku + "_2.jpg";
    return (
        <Card>
            <Image.Container size="4by3">
                <Image src= { thumbnail }/>
            </Image.Container>
            <Card.Content>{ props.title } </Card.Content>
        </Card>
    );
};

export default ItemCard;
