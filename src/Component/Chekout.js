import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getpost } from '../Redux/ProductSlice'

const Chekout = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  const { product } = products
  console.log(product)
  const [total, settotal] = useState()

  useEffect(() => {
    let total = 0;
    // console.log(product[0].price)
    product.forEach(element => {
      console.log(element.price)
      total = total + parseInt(element.price)*parseInt(element.quantity)
    });
    // console.log(total)
    settotal(total)
  }, [product])

  const removeitem = (item) => {
    if (product.length > 2) {
      const res = product.filter((element) => element.id !== item.id)
      //  console.log(product.length)
      if (res.length >= 2) {
        dispatch(getpost(res))
      } else {
        alert("Add at least 2 items in thali")
      }
    } else {
      alert("Add at least 2 items in thali")
    }
  }


  const increment = (item) => {
    const updatedProducts = product.map((existing) => {
      if (existing.id === item.id) {
        return { ...existing, quantity: parseInt(existing.quantity) + 1 };
      } else {
        return existing;
      }
    });

    dispatch(getpost(updatedProducts));
  }




  const decrease = (item) => {
    if (parseInt(item.quantity) === 1) {
      alert("Quantity cannot be negative");
      return;
    }

    const updatedProducts = product.map((existing) => {
      if (existing.id === item.id) {
        return { ...existing, quantity: parseInt(existing.quantity) - 1 };
      } else {
        return existing;
      }
    });

    dispatch(getpost(updatedProducts));
  }


  



  return (
    <div className='additemContainer'>
      <div className='row'>
        <h2>Image</h2>
        <h2>Quantity</h2>
        <h2>Name</h2>
        <h2>Price</h2>
        <h2>Remove To Thali</h2>
      </div>
      {
        product && product.map((item) => {
          return (
            <>
              <div className='row' key={item.id}>
                <span className='img'>
                  <img src={item.img} alt='image' />
                </span>
                <div className='quantity'>
                  <button className='quantitybtn' onClick={() => decrease(item)}>-</button>
                  <h3>{item.quantity}</h3>
                  <button className='quantitybtn' onClick={() => increment(item)}>+</button>
                </div>
                <h3>{item.name}</h3>
                <h3>{item.price} Rs</h3>
                <button onClick={() => { removeitem(item) }}>Remove to Thali</button>
              </div>
            </>
          )
        })
      }
      <hr />
      <div className='total'>
        <h1>Price of Thali :-</h1>
        <h3>Total :- Rs {total}</h3>
      </div>
    </div>
  )
}

export default Chekout