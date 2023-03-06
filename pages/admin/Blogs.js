import axios from "axios"
import { getPosts, deletePost } from "../../api/project"
import { useEffect,useState } from "../../lib"


const AdminBlogsPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async() => {
            try {
                setData(await getPosts());
            } catch (error) {
                console.log(error);
            }
        })()


    },[])

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-xoa")
        //console.log(btns);
        for(let btn of btns) {
            btn.addEventListener("click",async function() {
                const id = this.dataset.id;
                console.log(id);
                const confirm = window.confirm('Bạn có chắc chắn muốn xóa hay không?');
                if(confirm) {
                    try {
                        await deletePost(id);
                        const newPost = data.filter((post) => post.id !== id);
                        setData(newPost)
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
          
          <h1 class="tw-text-white">Quản lí trang blog</h1>
          <button class="btn btn-success tw-my-10 tw-ml-10" ><a class="tw-no-underline tw-text-white" href="/admin/blogs/add">Thêm blog</a></button>
        <table class="table table-bordered">
            <thead>
                <tr class="tw-text-white">
                    <th>STT</th>
                    <th>Tên blog</th>
                    <th>Mo ta</th>
                    <th>Tac gia</th>
                    <th>Image</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${data.map((blog, index) => {
                    return  `
                        <tr class="tw-text-white">
                            <td>${index + 1}</td>
                            <td>${blog.name}</td>
                            <td>${blog.des}</td>
                            <td>${blog.author}</td>
                            <td><img width="80px" src="${blog.gallery}"></td>
                            <td><button data-id="${blog.id}" class="btn btn-danger btn-xoa" >Xóa</button></td>
                            <td><a href="/admin/blogs/${blog.id}/edit"><button class="btn btn-primary">Sửa</button></a></td>

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

export default AdminBlogsPage