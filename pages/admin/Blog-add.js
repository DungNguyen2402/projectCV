import axios from "axios";
import { useEffect,router } from "../../lib";
import {addBlogs} from "../../api/project";

const AdminBlogsAdd = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const blogName = document.querySelector("#blog-name")
        const blogDes = document.querySelector("#blog-des")
        const blogDate = document.querySelector("#blog-date")
        const blogAuthor = document.querySelector("#blog-author")
        const blogImages = document.querySelector("#blog-images");


        form.addEventListener("submit",async function(e) {
            e.preventDefault();

            const urls = await uploadFiles(blogImages.files);
            addBlogs({
                    name: blogName.value,
                    des: blogDes.value,
                    date: blogDate.value,
                    author: blogAuthor.value,
                    gallery: urls,
                })
                    .then(() => router.navigate('/admin/blogs')) 
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
                <h1 >Thêm blog</h1>
                <form id="form-add" >
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Tên blog</label>
                        <input type="text" name="" id="blog-name" class="form-control">
                    </div>
                    
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Mô tả</label>
                        <input type="text" name="" id="blog-des" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Date</label>
                        <input type="text" name="" id="blog-date" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Tác giả</label>
                        <input type="text" name="" id="blog-author" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Image</label>
                        <input type="file" name="" id="blog-images" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group">
                        <button class="btn btn-primary" >Thêm sản phẩm</button>
                    </div>
                </form>
            </div>
        `;
}

export default AdminBlogsAdd