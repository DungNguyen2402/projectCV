import axios from "axios"
import { getProjects, deleteProject } from "../../api/project"
import { useEffect,useState } from "../../lib"


const AdminProjects = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async() => {
            try {
                setData(await getProjects());
            } catch (error) {
                console.log(error);
            }
        })()

    },[])

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove")
        //console.log(btns);
        for(let btn of btns) {
            btn.addEventListener("click",async function() {
                const id = this.dataset.id;
                const confirm = window.confirm('Bạn có chắc chắn muốn xóa hay không?');
                if(confirm) {
                    try {
                        await deleteProject(id);
                        const newProject = data.filter((project) => project.id !== +id);
                        setData(newProject)
                    } catch {
                        console.log(error);
                    }
                    
                    // deleteProject(id).then(() => {
                    //     const newProject = data.filter((project) => project.id !== +id);
                    //     setData(newProject)
                    // })
                    // .catch(error => console.log(error))
                }    
            })
        }
    })

  return ` <div class="container">
  <div class="container tw-flex tw-mx-auto">
      <div class="tw-mt-20 tw-h-full tw-w-1/4 tw-bg-zinc-500 ">
          <div class="tw-justify-center tw-items-center">
              <img src="./img/logo.png" alt="" class="w-2/4 ">
          </div>
          <div>
              <ul>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/adminpage">Dashboard</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/projects">Quản lí dự án</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/projects">Quản lí blog</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/projects">Quản lí tài khoản</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4" ><a class="tw-text-black text-decoration-none"  href="">Đăng xuất</a></li>
              </ul>
          </div>
      </div>
      <div class="tw-w-4/5 tw-py-2 ">
          <div class="tw-flex tw-border tw-justify-end">
              <i class="tw-pt-1 tw-text-blue-500 fa-solid fa-bell"></i>
              <p class="tw-mx-2">Xin chào</p>
              <p class="tw-text-blue-500">Dung Nguyen</p>
              
          </div>
          <div class="tw-mt-5">
              <div class="tw-absolute tw-text-white ">
                  <p class="tw-pl-96 tw-py-14 tw-font-bold tw-text-2xl">Welcome to Dashboard</p>
              </div>
              <img src="./img/Rectangle 152 (1).png" alt="">
          </div>
          <h1>Quản lí dự án</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên dự án</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${data.map((project, index) => {
                    return  `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${project.name}</td>
                            <td><button data-id="${project.id}" class="btn btn-danger btn-remove" >Xóa</button></td>
                            <td><button class="btn btn-primary" >Sửa</button></td>

                        </tr>
                    `
                }).join("")}
                
            </tbody>
        </table>
        </div>
          
      </div>

  </div>
        
  `
}

export default AdminProjects