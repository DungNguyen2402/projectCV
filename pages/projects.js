import Header from "../component/Header"
import Footer from "../component/Footer"
import { useEffect ,useState } from "../lib"
import axios from "axios"

const ProjectPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/projects")
        .then((response) => response.json()
        .then((data) => setData(data))
        )
    },[])
    // part category


    const [getCt,setCt]=useState([]);
    useEffect(function(){
        axios.get("http://localhost:3000/categories").then(({data})=>setCt(data));
    },[]);
    console.log(getCt.name);
    return /**html */`
        <div class="container">
        ${Header()}
        <h1 class="tw-text-7xl tw-font-extrabold tw-text-sky-300 tw-text-center">Project</h1>
        <p class="p-2 tw-text-2xl tw-text-center tw-text-slate-400 tw-pb-10">Please contact me if you need</p>
        <div class="tw-flex tw-justify-center tw-space-x-8">
            ${getCt.map((expand)=>{
                return `
                    <a class=" text-decoration-none" href="/project_category/${expand.id}">
                        <div class="tw-text-white tw-text-xl tw-bg-emerald-400 tw-w-44 tw-p-2 tw-text-black tw-text-center">
                            <p>${expand.name}</p>
                        </div>
                    </a>
                `}).join("")}
        </div>

        <div class="row">
            ${data.map((project) => {
                return `
                <div  class="col-md-4 p-2 rounded box-project">
                    <a class="text-decoration-none" href="/projects/${project.id}">
                    <div class="project tw-border-red-500 tw-my-20 tw-bg-slate-700 tw-text-white">
                        <div class="box_img">
                        <img  width="100%" src="${project.gallery}" alt="">
                    </div>
                        <h3  class="tw-py-4 tw-pl-4  text-white">${project.name}</h3>
                        <p class=" tw-text-white tw-py-2 tw-mx-4 box-content tw-text-center">${project.des}</p>
                        <button class="tw-w-full tw-bg-gray-400 tw-py-2">
                            <a class="tw-text-white text-decoration-none" href="${project.link}">View githup</a>
                        </button>
                    </div></a>
                </div>
                `
            }).join("")}
            
            ${Footer()}
        </div>
        </div>
    `
  }
  
  export default ProjectPage