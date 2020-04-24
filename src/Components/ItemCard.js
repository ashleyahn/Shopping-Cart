import React from 'react';
import 'rbx/index.css';
import { Card, Image, Media, Title, Content } from 'rbx';


const ItemCard = (props) => {
    var thumbnail = "data/products/" + props.sku + "_2.jpg";
    var price = "$" + props.price;
    return (
        <Card>
        <Card.Image>
            <Image.Container>
            <Image src= { thumbnail } />
            </Image.Container>
        </Card.Image>
        <Card.Content>
            <Media>
            <Media.Item>
                <Title as="p" size={4}>
                { props.title }
                </Title>
            </Media.Item>
            </Media>
            <Content>
            { props.description }
            </Content>
            <Title>
                { price }
            </Title>
        </Card.Content>
        </Card>
    );
};

export default ItemCard;