import axios from "axios";
import { useEffect,router } from "../../lib";
import {addProjects} from "../../api/project"
//import { projects } from "../../data";

const AdminProjectsAdd = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name")
        const projectDes = document.querySelector("#project-des")
        const projectLinkgit = document.querySelector("#project-githup")
        const projectDate = document.querySelector("#project-date")
        const projectTechnology = document.querySelector("#project-technology")
        const projectCategory = document.querySelector("#project-category")


        form.addEventListener("submit", function(e) {
            e.preventDefault();

            addProjects({
                name: projectName.value,
                des: projectDes.value,
                link: projectLinkgit.value,
                date: projectDate.value,
                technology: projectTechnology.value,
                category: projectCategory.value,
            }).then(() => router.navigate('/admin/projects'))
              .catch(error => console.log(error));

            // axios.post('http://localhost:3000/projects',newProject )
            // .then(() => {
            //     router.navigate('/admin/projects')
            // })

            // Thêm vào mảng projects
            //projects.push(newProject)
            //console.log(projects);

            

        })

    })

    return `<div>
                <h1>Thêm dự án</h1>
                <form id="form-add">
                    <div class="form-group mb-3">
                        <label for="">Tên dự án</label>
                        <input type="text" name="" id="project-name" class="form-control">
                    </div>
                    
                    <div class="form-group mb-3">
                        <label for="">Mô tả</label>
                        <input type="text" name="" id="project-des" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="">Linkgit</label>
                        <input type="text" name="" id="project-githup" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="">Ngày làm</label>
                        <input type="text" name="" id="project-date" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <select id="project-technology">    
                            <option>Visual Studio code</option>
                            <option>XAMPP</option>
                            <option>GitHup</option>
                        </select>
                    </div>
                    <div class="form-group mb-3 bordered" >
                        <select id="project-category">    
                            <option>HTML/CSS/JS</option>
                            <option>Reactjs</option>
                            <option>PHP Larvel</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" >Thêm sản phẩm</button>
                    </div>
                </form>
            </div>
        `;
}

export default AdminProjectsAdd