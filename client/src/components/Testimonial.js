import  '../styles/Testimonial.css';
function Testimonial({image,review,tittle}){
    return(
        <div>
            <div className="testimonial-container" >
                    <div className="testimonial-left-container">
                            <img src = {image} alt="" />
                    </div>
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
        </div>
    )
}

export default Testimonial;