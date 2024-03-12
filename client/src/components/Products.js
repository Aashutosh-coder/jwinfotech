import Product from "./Product";
import  './Products.css';
function Products({products}){
    return(
        <div>

            <h1 className ="products-tittle" >Products & Subsidiaries</h1>
            <div className="products-wrapper" >

           {
               products.map( (product) =>{
                   return <Product {...product} ></Product>    
                })
            }
            </div>
        </div>
    )
}

export default Products;