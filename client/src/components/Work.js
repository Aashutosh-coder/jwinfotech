import Testimonial from "./Testimonial";

function Work({testimonials}){
    return(
        <div>
            <div>
                Our Work
            </div>
        {
            testimonials.map( (testimonial) =>{
                return <Testimonial {...testimonial} ></Testimonial>
            } )
        }
        </div>
    )
}

export default Work;