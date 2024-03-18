import  '../styles/Testimonial.css';
function Testimonial({image,review,tittle}){
    return(
        <>
            <div className="testimonial-container" >
                <img className="testimonial-left-container"  src = {image} alt="" />
                    
                    <div className="testimonial-right-container">
                          
                          <div className="right-top-container">
                                <h2>Review from client</h2>
                                <p>{review}</p>
                          </div>

                          <div className="testimonial-tittle">
                                    {tittle}
                          </div>
                    </div>
            </div>
        </>
    )
}

export default Testimonial;