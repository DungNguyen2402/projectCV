import axios from "axios";
import { deleteCategory,getCategories } from "../../api/project";
import Header from "../../component/Header";
import { useEffect, useState } from "../../lib";

const Category = () => {
    const [getCt,setCt] = useState([]);
   
    useEffect(() => {
        (async() => {
            try {
                setCt(await getCategories());
            } catch (error) {
                console.log(error);
            }
        })()

    },[])


    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click",async function() {
                const id = this.dataset.id;
                const confirm = window.confirm('Bạn có chắc chắn muốn xóa hay không?');
                if (confirm) {
                    try {
                        await deleteCategory(id);
                        const newProject = data.filter((category) => category.id !== +id);
                        (newProject)
                    } catch {
                        console.log(error);
                    }
                }
            })
        }
    })

  return `
  <div class="container">
  ${Header()}
  <div class=" tw-flex tw-mx-auto">
  <div class="tw-mt-20 tw-h-full tw-w-1/4 tw-bg-zinc-500 ">
          <div class="tw-justify-center tw-items-center">
              <img src="./img/logo.png" alt="" class="w-2/4 ">
          </div>
          <div>
              <ul>
                  <li class="tw-bg-white tw-border tw-p-2"><a  class="tw-text-black text-decoration-none" href="/admin/adminpage">Dashboard</a></li>
                  <li class="tw-bg-white tw-border tw-p-2"><a  class="tw-text-black text-decoration-none" href="/admin/projects">Quản lí dự án</a></li>
                  <li class="tw-bg-white tw-border tw-p-2"><a  class="tw-text-black text-decoration-none" href="/admin/category">Quản lí danh mục</a></li>
                  <li class="tw-bg-white tw-border tw-p-2"><a  class="tw-text-black text-decoration-none" href="/admin/blogs">Quản lí blog</a></li>
                  <li class="tw-bg-white tw-border tw-p-2"><a  class="tw-text-black text-decoration-none" href="/admin/intro">Quản lí thông tin</a></li>
                  <li class="tw-bg-white tw-border tw-p-2"><a  class="tw-text-black text-decoration-none" href="">Đăng xuất</a></li>
              </ul>
          </div>
      </div>
      <div class="tw-w-4/5 tw-py-2 ">
          
          <h1 class="tw-text-white">Quản lí category</h1>
          
  <table class=" table table-bordered ">
  <thead>
      <tr class="tw-text-white">
          <th>STT</th>
          <th>Category</th>
          <th>Handle</th>
      </tr>
  </thead>
  <tbody class="tw-text-white">
      ${getCt.map((get_CT, index) => {
          return  `
              <tr>
                  <td>${index + 1}</td>
                  <td>${get_CT.name}</td>
                  <td><button data-id="${get_CT.id}" class="btn btn-danger btn-remove" >Xóa</button></td>
                  <td><a href="/admin/get_CT/${get_CT.id}/edit"><button class="btn btn-primary">Sửa</button></a></td>

              </tr>
          `
      }).join("")}
      
  </tbody>
</table>
</div>
</div>
</div>


  `
};

export default Category;