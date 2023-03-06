import Footer from "../component/Footer"
import Header from "../component/Header"
import { useEffect ,useState } from "../lib"


const BlogPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/blogs")
        .then((response) => response.json()
        .then((data) => setData(data))
        )
    },[])
    
    return `
        <div class="container">
        ${Header()}
        <h1 class="tw-text-7xl tw-font-extrabold tw-text-sky-300 tw-text-center">Blog</h1>      
            <p class="tw-py-10 tw-text-2xl tw-text-center tw-text-slate-400">Here are the projects that I have done</p>
        <div class="row">
            ${data.map((blog) => {
                return `
                <div  class="col-md-4 p-2 rounded box-project">
                    <div class="project tw-border-red-500 tw-my-20 tw-bg-slate-700 tw-text-white">
                        <div class="box_image">
                        <img  width="100%" src="${blog.gallery}" alt="">
                    </div>
                        <h3  class="tw-py-4 tw-pl-4  text-white">${blog.name}</h3>
                        <p class=" tw-text-white tw-py-2 tw-mx-4 box-content tw-text-center">${blog.des}</p>
                    </div>
                </div>
                `
            }).join("")}
            
            ${Footer()}
        </div>
        </div>
    `
  }
  
  export default BlogPage