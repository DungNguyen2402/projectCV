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
        <div class="container">
            ${Header()}
            ${data.map((project) => {
                return `
                <div class="tw-grid tw-grid-cols-3 tw-gap-x-10 ">
                <div class="tw-border-8 tw-border-red-500 tw-my-20 tw-bg-slate-800 tw-text-white">
                    <img width="100%" src="./img/preview1.png" alt="">
                    <h3 class="tw-py-4 tw-pl-4">${project.name}</h3>
                    <p class=" tw-text-white tw-w-3/12 tw-py-2 tw-mx-4 tw-text-center">${project.des}</p>
                    <p class="tw-mx-4">${project.link}</p>
                    <button class="tw-w-full tw-bg-gray-400 tw-py-2"><a class="tw-text-white text-decoration-none" href="">View githup</a></button>
                </div>
                <div class="tw-border-8 tw-border-red-500 tw-my-20 tw-bg-slate-800 tw-text-white">
                    <img width="100%" src="./img/preview2.png" alt="">
                    <h3 class="tw-py-4 tw-pl-4">${project.name}</h3>
                    <p class=" tw-text-white tw-w-3/12 tw-py-2 tw-mx-4 tw-text-center">${project.des}</p>
                    <p class="tw-mx-4">${project.link}</p>
                    <button class="tw-w-full tw-bg-gray-400 tw-py-2"><a class="tw-text-white text-decoration-none" href="">View githup</a></button>
                </div>
                </div>
                `
            }).join("")}
            
            ${Footer()}
        </div>
    `
  }
  
  export default ProjectPage