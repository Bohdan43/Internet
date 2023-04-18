
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss"

const ProductList = () => {
const [products,setProdusts]=useState ([]);
        useEffect (()=>{
            fetchData();
        },[]   );

const fetchData = async () => {
    const response = await fetch ('http://localhost:8180/products');
    const data = await response.json ();
    setProdusts(data);
}

const deleteProduct = async (id) =>{
       await fetch ('http://localhost:8180/products/${id}', {
       metod: "DELETE",
       headers:{
        'Content-Type':'application/json'
       }
    })
    fetchData();
    }
    return(
        <div>
            <Link to ="/add"className="button is-primare mt-5">Add new</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                    

                </tbody>
            </table>
        </div>
    )
}

export default ProductList;