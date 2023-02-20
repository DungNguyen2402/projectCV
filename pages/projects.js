import Header from "../component/Header"
import Footer from "../component/Footer"
import { useEffect ,useState } from "../lib"

const ProjectPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/projects")
        .then((response) => response.json()
        .then((data) => setData(data))
        )
    },[])
    
    return /**html */`
        ${Header()}
        <div class="container">
        <h1 class="tw-text-center tw-py-8 tw-text-red-600">Project</h1>
        <div class="row">
            ${data.map((project) => {
                return `
                <div class="col-md-4 ">
                    <div class="tw-border-8 tw-border-red-500 tw-my-20 tw-bg-slate-800 tw-text-white">
                        <img width="100%" src="${project.gallery}" alt="">
                        <h3 class="tw-py-4 tw-pl-4">${project.name}</h3>
                        <a class="tw-bg-white tw-text-black text-decoration-none py-2">${project.category}</a>
                        <p class=" tw-text-white tw-py-2 tw-mx-4 tw-text-center">${project.des}</p>
                        <button class="tw-w-full tw-bg-gray-400 tw-py-2"><a class="tw-text-white text-decoration-none" href="${project.link}">View githup</a></button>
                    </div>
                </div>
                `
            }).join("")}
            
            ${Footer()}
        </div>
        </div>
    `
  }
  
  export default ProjectPage