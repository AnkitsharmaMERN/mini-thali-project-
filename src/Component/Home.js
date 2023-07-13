import React, { useEffect, useState } from 'react'
import './Home.css'
import { useNavigate } from "react-router-dom";
import { getpost } from '../Redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
    const item = [
        {
            id: 1,
            "name": "Chapati",
            "img": "https://media.istockphoto.com/id/508374340/photo/homemade-chapati.jpg?s=612x612&w=0&k=20&c=lozsrleZ88efHFdMYCtUkyUW5mTqXVDoFp_jtI2s53Q=",
            "price": "20",
            "quantity": 1

        },
        {
            id: 2,
            "name": "Pickle",
            "img": "https://www.archanaskitchen.com/imgcache/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2022/Authentic_Punjabi_Mango_Picke_In_Mustard_Oil_No_Sun_Method_7_400x320.jpg",
            "price": "10",
            "quantity": 1


        },
        {
            id: 3,
            "name": "Curd",
            "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/curd-rice-thayir-sadam.jpg",
            "price": "50",
            "quantity": 1


        },
        {
            id: 4,
            "name": "Sweet",
            "img": "https://t3.ftcdn.net/jpg/02/05/36/86/360_F_205368630_7w8mvcoQw7ArI6pRWeo5ntyUqEdtanDY.jpg",
            "price": "250",
            "quantity": 1

        },
        {
            id: 5,
            "name": "Daal",
            "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/chana-dal-recipe.jpg",
            "price": "100",
            "quantity": 1

        },
        {
            id: 6,
            "name": "Paneer Dish",
            "img": "https://theurbantandoor.com/wp-content/uploads/2019/08/paneer-butter-masala.jpg",
            "price": "200",
            "quantity": 1

        }
    ]
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    // console.log(products)
    const { product, loading, error } = products
    // console.log(product)

    useEffect(() => {
        dispatch(getpost(item))
    }, [])
    const [itemsId, SetItemsId] = useState([])
    const [Quant , setQuant] = useState({
        id:'',name: "",img: "", price: "",quantity: ""
    })

    const additem = (items) => {
        // console.log(items)
        if (items) {
            const found = itemsId.find((existing) => existing.id === items.id)
            // console.log(found)
            if (found) {
                alert("already add this item to thali")
            } else {
                SetItemsId([...itemsId, items])
            }
        }
        else {
            alert("please add atleast two item in thali")
        }
        console.log(itemsId)

    }

    const showitemthali = () => {
        if (itemsId.length <= 1) {
            alert("Add at least 2 items in thali")
        } else {
            console.log(itemsId)
            dispatch(getpost(itemsId))
            navigate('/chekout')
        }
    }

    



    return (
        <>

            {
                product.length === 0 ? "loading...." :
                    <div className='additemContainer'>
                        <div className='items'>
                            <h3>{itemsId.length} Items are added to your thali </h3>
                            <button onClick={showitemthali} >Check your Thali</button>
                        </div>
                        <div className='row'>
                            <h2>Image</h2>
                            <h2>Name</h2>
                            <h2>Price</h2>
                            <h2>Add To Thali</h2>
                        </div>
                        {
                            product.map((item) => {
                                return (
                                    <div className='row' key={item.id}>
                                        <span className='img'>
                                            <img src={item.img} alt='image' />
                                        </span>
                                        <h3>{item.name}</h3>
                                        <h3>{item.price} Rs</h3>
                                        <button onClick={() => additem(item)}>Add to Thali</button>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default Home