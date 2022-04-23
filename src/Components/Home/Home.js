import React from 'react';
import styled from 'styled-components';
import products from '../../ProductsData/productData.json';
import Product from '../Product/Product';
const Home = () => {
    return (
        <Container>
            {
                products.map(pd => <Product  product={pd} key={pd.id}></Product> )
            }
        </Container>
    );
};

export default Home;

const Container = styled.div`

`
