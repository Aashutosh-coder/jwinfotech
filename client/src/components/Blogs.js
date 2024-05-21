import Blogcard from "./Blogcard"
import '../styles/Blogs.css'
function Blogs(){
    return(
        <div>
            <div>Blogs</div>
            <div className="blogs-card" >
                    <Blogcard></Blogcard>
                    <Blogcard></Blogcard>
                    <Blogcard></Blogcard>
                    <Blogcard></Blogcard>
                    <Blogcard></Blogcard>
                    <Blogcard></Blogcard>
            </div>
        </div>
    )
}

export default Blogs