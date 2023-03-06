import axios from "axios";
import { useEffect,router } from "../../lib";
import {addProjects} from "../../api/project"

const AdminProjectsAdd = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name")
        const projectDes = document.querySelector("#project-des")
        const projectLinkgit = document.querySelector("#project-githup")
        const projectDate = document.querySelector("#project-date")
        const projectTechnology = document.querySelector("#project-technology")
        const projectCategory = document.querySelector("#project-category")
        const projectImages = document.querySelector("#project-images");


        form.addEventListener("submit",async function(e) {
            e.preventDefault();

            const urls = await uploadFiles(projectImages.files);
            addProjects({
                    name: projectName.value,
                    des: projectDes.value,
                    link: projectLinkgit.value,
                    date: projectDate.value,
                    technology: projectTechnology.value,
                    categoriesId: projectCategory.value,
                    gallery: urls,
                })
                    .then(() => router.navigate('/admin/projects')) 
                    .catch((error) => console.log(error))

        });
    });

    const uploadFiles = async (files) => {
        if (files ) {
            const CLOUD_NAME = "dwbelze6q";
            const PRESET_NAME = "upload-image";
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
            const formProject = new FormData();

        formProject.append('upload_preset', PRESET_NAME);
        formProject.append('folder', FOLDER_NAME);

        for (const file of files) {
            formProject.append('file', file);
            const response = await axios
            .post(api, formProject, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            urls.push(response.data.secure_url);
            //console.log(urls);
        }
        return urls;
        }
        
    }

    return `<div class="container tw-text-white">
                <h1>Thêm dự án</h1>
                <form id="form-add">
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Name project</label>
                        <input type="text" placeholder="Dự án 1" id="project-name" class="form-control">
                    </div>
                    
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Description</label>
                        <input type="text" placeholder="Mô tả dự án" id="project-des" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Linkgit</label>
                        <input type="text" placeholder="Link githup" id="project-githup" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Date</label>
                        <input type="text" placeholder="dd/mm/yy" id="project-date" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Image project</label>
                        <input type="file" name="" id="project-images" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Description</label>
                        <input type="text" placeholder="Mô tả dự án" id="project-des" class="form-control">
                    </div>
                    <div class="tw-text-black tw-w-1/3 form-group mb-3 bordered" >
                        <select id="project-category">    
                            <option >HTML/CSS/JS</option>
                            <option>Reactjs</option>
                            <option>PHP Leravel</option>
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