import Testimonial from "./Testimonial";
import '../styles/Work.css'
function Work({testimonials}){
    return(
        <div >
            {/* <div className= "work-tittle" >
                Our Work
            </div> */}
            <div className="testimonial-wrapper" >

        {
            testimonials.map( (testimonial) =>{
                return <Testimonial {...testimonial} ></Testimonial>
            } )
        }
        </div>
        </div>
    )
}

export default Work;


