import { request } from 'graphql-request';
import gql from 'graphql-tag'
const endpoint = 'http://34.95.164.146/api';

export const getOffProducts = () => async (dispatch) => {
   const query = gql `
    {
      getProducts {
        _id
        urlImage
        name
        salePrice
        description
      }
    }
  `

  try {
    const response = await request(endpoint, query);
    const data = response.getProducts;
    dispatch({
      type: 'DATA_OFF_PRODUCTS',
      payload: data,
    });
  } catch (error) {
    console.error('get Offer products -> err', error);
  }
};

export const getProducts = () => async (dispatch) => {
   const query = gql `
    {
      getProducts {
        _id
        urlImage
        name
        salePrice
        description
      }
    }
  `
  try {
    const response = await request(endpoint, query);
    const data = response.getProducts;
    dispatch({
      type: 'DATA_PRODUCTS',
      payload: products,
    });
  } catch (error) {
    console.error('get All products -> err', error);
  }
};

export const getProductById = (id) => async (dispatch) => {
 const query = gql `
    query generalSearch ($keyword: String!){
      searchItems(keyword: $keyword) {
        __typename
          ...on Product {
            _id
            urlImage
            name
            salePrice
            description
          }
      }
    }
  `
  try {
    const response = await request(endpoint, query, id);
    const data = response.getProducts;
    dispatch({
      type: 'PRODUCT_BY_ID',
      payload: data,
    });
  } catch (error) {
    console.error('get products by Id-> err', error);
  }
};

export const getProductByName = (name) => async (dispatch) => {
   const query = gql `
    query generalSearch ($keyword: String!){
      searchItems(keyword: $keyword) {
        __typename
          ...on Product {
            _id
            urlImage
            name
            salePrice
            description
          }
      }
    }
  `

  const nameProduct = { keyword: name }

   try {
    const response = await request(endpoint, query, nameProduct);
    const data = response.getProducts;
    dispatch({
      type: 'PRODUCT_BY_NAME',
      payload: data,
    });
  } catch (error) {
    console.error('get products by Id-> err', error);
  }
};