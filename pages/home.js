import Header from "../component/Header"
import Footer from "../component/Footer"
import { useEffect ,useState } from "../lib"

const HomePage = () => {
    const [data, setData] = useState([])
    const [projects, setProject] = useState([])
    const [self, setSelf] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/intro")
        .then((response) => response.json()
        .then((data) => setData(data))
        )
    },[])

    useEffect(() => {
        fetch("http://localhost:3000/projects")
        .then((response) => response.json()
        .then((projects) => setProject(projects))
        )
    },[])

    useEffect(() => {
        fetch("http://localhost:3000/self")
        .then((response) => response.json()
        .then((data) => setSelf(data))
        )
    },[])
    //console.log(self);



    return /*html */`
    <div class="container ">
        ${Header()}
        ${ data.map((info) => {

            return `
            <div class=" tw-mr-12 tw-ml-8 ">
            <div class="tw-grid tw-grid-cols-2 ">
                <div class="tw-py-20 tw-px-10">
                    <h1 class="p-3 tw-text-red-700 tw-text-6xl tw-font-sans">${info.title},</h1>
                    <h1 class="p-3 tw-text-7xl tw-font-extrabold tw-text-white">${info.name}</h1>
                    <h1 class="p-2 tw-text-slate-400">${info.des}</h1>
                    <div class="tw-flex">
                        <button type="button" class="btn btn-primary">HIRE ME</button>
                    </div>

                </div>
                <img  width="90%" src="./img/avat2.png" alt="">
            </div>
        </div>
            `
        }).join("") }
            
            ${self.map((myself) => {
                return `
                <div class="tw-text-white container mb-2">
            <div class="p-3">
            <div class="container w-25">
            <h1 class="tw-text-center tw-text-6xl  tw-font-extrabold tw-text-white">Project</h1>
                
            </div>
        </div>
    </div>
    <div class="container tw-text-white">
        <div class="row container">
            <div class="col-md-4 col-sm-12">
                <img class="tw-rounded-full w-100 h-auto" src="./img/avt2.jpg" alt="">
            </div>
            <div class="col-md-4 p-3">
                <h4 class="tw-text-4xl tw-font-extrabold tw-text-purple-500">Giới thiệu về bản thân</h4>
                <p class="tw-text-2xl tw-text-cyan-100 justify-content-center">${myself.des}</p>
            </div>
            <div class="col-md-4 col-sm-12 row p-3 tw-text-xl">
                <!-- #1 -->
                <div class="col-3 col-sm-6 text-md-start text-sm-center font-weight-bold">
                    <p class="font-weight-bold">Tuổi:</p>
                </div>
                <div class="col-9 col-sm-6 text-md-start text-sm-center">
                    <p>${myself.age}</p>
                </div>
                <!-- #2 -->
                <div class="col-3 col-sm-6 text-md-start text-sm-center font-weight-bold">
                    <p class="font-weight-bold">Địa chỉ:</p>
                </div>
                <div class="col-9 col-sm-6 text-md-start text-sm-center">
                    <p>${myself.address}</p>
                </div>
        
                <!-- #4 -->
                <div class="col-3 col-sm-6 text-md-start text-sm-center font-weight-bold">
                    <p class="font-weight-bold">Email:</p>
                </div>
                <div class="col-9 col-sm-6 text-md-start text-sm-center">
                    <p>${myself.email}</p>
                </div>
                <!-- #5 -->
                <div class="col-3 col-sm-6 text-md-start text-sm-center font-weight-bold">
                    <p class="font-weight-bold">Phone:</p>
                </div>
                <div class="col-9 col-sm-6 text-md-start text-sm-center">
                    <p>${myself.phone}</p>
                </div>
                <!-- #6 -->
                
                <div class="w-100 font-icon float-end">
                    <i class="tw-text-red-600 tw-bg-white  tw-p-4 tw-mr-6 tw-rounded-full fa-brands fa-facebook"></i>
                    <i class="tw-text-red-600 tw-bg-white  tw-p-4 tw-mr-6 tw-rounded-full fa-brands fa-instagram"></i>
                    <i class="tw-text-red-600 tw-bg-white  tw-p-4 tw-mr-6 tw-rounded-full fa-solid fa-envelope"></i>
                    <i class="tw-text-red-600 tw-bg-white  tw-p-4 tw-mr-6 tw-rounded-full fa-solid fa-phone"></i>
                </div>
                <button class="tw-rounded-lg tw-bg-green-300 tw-font-serif"><a class="tw-text-fuchsia-600 tw-text-2xl tw-text-lg tw-no-underline" href="https://drive.google.com/file/d/1DgWaESWIqQDYiFTkBbNd5bBUdV7vNwRP/view?usp=sharing">DOWNLOAD CV</a></button>
            </div>
        </div>
    </div>
    <div class="container">
        <h4 class="p-2 mt-3 title-services">Services</h4>
       
    </div>
                `
            }).join("")}
                
            
            <div class="container">
            <h1 class="tw-text-center tw-text-6xl tw-font-extrabold tw-text-white">Project</h1>
            <div class="row">
            ${projects.map((project) => {
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
        </div>
        </div>
            ${Footer()}
        </div>
    `
}

  
  export default HomePage