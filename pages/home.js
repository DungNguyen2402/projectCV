import Header from "../component/Header"
import Footer from "../component/Footer"
import {Intro} from "../db.json"
import { useEffect ,useState } from "../lib"

const HomePage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/projects")
        .then((response) => response.json()
        .then((data) => setData(data))
        )
    },[])
    //console.log(Intro);


    return /*html */`
    <div class="container">
        ${Header()}
        ${ Intro.map((info) => {
            return `
            <div class=" tw-mr-12 tw-ml-8 ">
            <div class="tw-flex">
                <div class="tw-py-20 tw-px-10">
                   
                    <h1 class="p-3 tw-text-red-500 tw-text-4xl tw-font-sans">${info.title}-------------------</h1>
                    <h1 class="p-3 tw-text-5xl fw-bold ">${info.name}</h1>
                    <h1 class="p-2 tw-text-slate-500">${info.des}</h1>
                    <div class="tw-flex">
                        <button type="button" class="btn btn-primary">HIRE ME</button>
                        <button type="button" class="mx-3 btn btn-outline-primary">GET CV</button>
                    </div>

                </div>
                <img width="50%" class="" src="./img/home.png" alt="">
            </div>
        </div>
            `
        }).join("") }
            <div>
                <div class="tw-mb-10 tw-bg-white ">
                <h1 class="tw-py-6 tw-pl-8">About me</h1>
                    <div class="tw-flex">
                    <img width="50%" class="tw-px-6" src="./img/about-us.png" alt="">
                    <div class="tw-p-10">
                        <h3 class=" tw-text-black tw-text-5xl">Giới thiệu bản thân</h3>
                        <p class="py-3 fs-5">Hiện tại mình đang học kì 5 tại trường FPT Polytechnic.  Ngoài việc học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend, ...
                        Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend.</p>
                        <button class="tw-rounded-lg tw-bg-indigo-700 tw-p-4 tw-px-8 "><a class="tw-text-white tw-text-lg tw-no-underline" href="https://drive.google.com/file/d/1DgWaESWIqQDYiFTkBbNd5bBUdV7vNwRP/view?usp=sharing">DOWNLOAD CV</a></button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="container">
            <h1 class="tw-text-center tw-py-8 tw-text-red-600">Project</h1>
            <div class="row">
            ${data.map((project) => {
                return `
                <div class="col-md-4 ">
                    <div class="project tw-border-8 tw-border-red-500 tw-my-20 tw-bg-slate-800 tw-text-white">
                        <img width="500px" src="${project.gallery}" alt="">
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
            ${Footer()}
        </div>
    `
}
  
  export default HomePage