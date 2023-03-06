import axios from "axios"
import Header from "../component/Header"
import { useEffect, useState } from "../lib"

const IntroPage = () => {

    const [intro , setIntro] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/self")
        .then((response) => response.json()
        .then((data) => setIntro(data)) 
        )
    },[]);

    //console.log(intro.name);
  return ` <div class="container">
  ${Header()}
  <div class=" tw-flex tw-mx-auto">
      <div class="tw-mt-20 tw-h-full tw-w-1/4 tw-bg-zinc-500 ">
          <div class="tw-justify-center tw-items-center">
              <img src="./img/logo.png" alt="" class="w-2/4 ">
          </div>
          <div>
              <ul>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/adminpage">Dashboard</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/projects">Quản lí dự án</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/category">Quản lí danh mục</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/blogs">Quản lí blog</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/intro">Quản lí thông tin</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="">Đăng xuất</a></li>
              </ul>
          </div>
      </div>
      <div class="tw-w-4/5 tw-py-2 ">
          
          <h1 class="tw-text-white">Quản lí trang cá nhân</h1>
          <button class="btn btn-success tw-my-10 tw-ml-10" ><a class="tw-no-underline tw-text-white" href="/admin/projects/add"></a></button>
        <table class="table table-bordered ">
            <thead>
                <tr class="tw-text-white">
                    <th>Name</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="tw-text-white">
            ${intro.map((intros) => {
                return `
                    <tr>             
                        <td>${intros.name}</td>
                        <td>${intros.address}</td>
                        <td>${intros.date}</td>
                        <td>${intros.des}</td>
                        <td>${intros.email}</td>
                        <td>${intros.phone}</td>
                        <td><button data-id="" class="btn btn-danger btn-remove" >Xóa</button></td>
                        <td><a href="/admin/projects//edit"><button class="btn btn-primary">Sửa</button></a></td>
                    </tr>   
                `
            })}
                        
                    
                
            </tbody>
        </table>
        </div>
          `;
        
}

export default IntroPage