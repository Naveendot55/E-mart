import './Products.css'
import { useEffect, useState } from 'react'
import Productcarousel from '../../compoments/Productcarousel/Productcarousel'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function Product({ onAddToCart, cartItems = [], onIncrease, onDecrease }){
    let [product,setproduct]= useState({ })
        let {id}= useParams()
    const navigate = useNavigate()
    const inCart = cartItems.find((p) => p.id === product.id);
             
  
    useEffect(()=> {
      async  function productdetails(){
          if(id){ 
          let product = await axios.get('https://dummyjson.com/products/'+id)

           setproduct(product.data)
          }
        }
            productdetails()
        }, [id])


    return(
        <div className='Productpage  d-flex ' >
         <div className='productImage halfdiv d-flex justify-content-center align-items-center'>
            <Productcarousel images={product.images} />
            {/* {product.images.map(img =>{
                return < img src={img} width={'200px'} />
            })} */}
         </div>
         <div className='productInfo halfdiv d-flex align-items-start'>
            <div className=' d-flex flex-column row-gap-3 p-4'>
                <h1>{product.title}</h1>
                <h3>Price ${product.price}</h3>
                <h5>{product.category}</h5>
                <p>{product.description}</p>
            {!inCart && (
              <button
                className='btn btn-primary btn-lg w-25'
                onClick={() => {
                  onAddToCart && onAddToCart(product)
                  navigate('/MyCart')
                }}
              >
                Add to Cart
              </button>
            )}
            {inCart && (
              <div className='d-flex align-items-center column-gap-3'>
                <button
                  className='btn btn-outline-secondary btn-lg'
                  onClick={() => {
                    onDecrease && onDecrease(product.id)
                    navigate('/MyCart')
                  }}
                >
                  -
                </button>
                <span>Qty: {inCart.qty}</span>
                <button
                  className='btn btn-outline-secondary btn-lg'
                  onClick={() => {
                    onIncrease && onIncrease(product.id)
                    navigate('/MyCart')
                  }}
                >
                  +
                </button>
              </div>
            )}
            </div>
         </div>
        </div>
    )
}

export default Product
