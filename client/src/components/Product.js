
import '../styles/Product.css';
function Product({image,prdname,detail}){
    return(
        <div>
             <div className = "product-card">
                <img className ="product-image"  src= {image} alt="" />
                <p className ="product-details" > {detail} </p>
                <div className ="product-tittle" >
                    {prdname}
                </div>
             </div>
        </div>
    )
}

export default Product;