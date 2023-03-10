import axios from "axios"
import { getProjects, deleteProject } from "../../api/project"
import Header from "../../component/Header"
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
  ${Header()}
  <div class=" tw-flex tw-mx-auto">
      <div class="tw-mt-20 tw-h-full tw-w-1/4 tw-bg-zinc-500 ">
          <div class="tw-justify-center tw-items-center">
              <img src="./img/logo.png" alt="" class="w-2/4 ">
          </div>
          <div>
              <ul>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/#/admin/adminpage">Dashboard</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/#/admin/projects">Quản lí dự án</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/#/admin/category">Quản lí danh mục</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/#/admin/blogs">Quản lí blog</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/#/admin/intro">Quản lí thông tin</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="">Đăng xuất</a></li>
              </ul>
          </div>
      </div>
      <div class="tw-w-4/5 tw-py-2 ">
          
          <h1 class="tw-text-white">Quản lí dự án</h1>
          <button class="btn btn-success tw-my-10 tw-ml-10" ><a class="tw-no-underline tw-text-white" href="/admin/projects/add">Thêm dự án</a></button>
        <table class="table table-bordered ">
            <thead>
                <tr class="tw-text-white">
                    <th>STT</th>
                    <th>Tên dự án</th>
                    <th>Image</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="tw-text-white">
                ${data.map((project, index) => {
                    return  `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${project.name}</td>
                            <td><img width="80px" src="${project.gallery}"></td>
                            <td><button data-id="${project.id}" class="btn btn-danger btn-remove" >Xóa</button></td>
                            <td><a href="/admin/projects/${project.id}/edit"><button class="btn btn-primary">Sửa</button></a></td>

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