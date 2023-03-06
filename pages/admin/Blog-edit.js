import axios from "axios";
import { updateBlogs, getPost } from "../../api/project";
import { useEffect,router, useState } from "../../lib";

const AdminBlogsEdit = ({id}) => {

    const [blog, setBlog] = useState({});

    useEffect(() => {
        (async() => {
            try {
                setBlog(await getPost(id))
            } catch (error) {
                console.log(error);
            }
        })()

        axios.get(`http://localhost:3000/blogs/${id}`)
        .then(({blog}) => {
            setBlog(blog)
        })
    }, [])

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const blogName = document.querySelector("#blog-name")
        const blogDes = document.querySelector("#blog-des")
        const blogAuthor = document.querySelector("#blog-author")
        const blogDate = document.querySelector("#blog-date")
        const blogImg = document.querySelector("#blog-img")


        form.addEventListener("submit",async function(e) {
            e.preventDefault();
            try {
                await updateBlogs ({
                    id: id,
                    name: blogName.value,
                    des: blogDes.value,
                    author: blogAuthor.value,
                    date: blogDate.value,
                    gallery: blogImg.value,
                });
                router.navigate('/admin/blogs')
            } catch (error) {
                console.log(error);
            }
            
        })

    })

    return `<div class=" tw-text-white tw-flex tw-justify-center tw-items-center tw-h-screen">
                
                <form id="form-add" class="tw-w-full tw-max-w-2xl">
                <h1 class="tw-text-center tw-text-5xl tw-font-extrabold tw-text-white">Cập nhật trang blog</h1>
                    <div class="form-group mb-3">
                        <label for="">Tên blog</label>
                        <input type="text" name="" id="blog-name" value="${blog.name}" class="form-control">
                    </div>
                    
                    <div class="form-group mb-3">
                        <label for="">Mô tả</label>
                        <input type="text" name="" id="blog-des" value="${blog.des}" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="">Tác giả</label>
                        <input type="text" name="" id="blog-author" value="${blog.author}" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="">Ngày làm</label>
                        <input type="text" name="" id="blog-date" value="${blog.date}" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="">Ngày làm</label>
                        <input name="" id="blog-img" value="${blog.gallery}" class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <button class="btn btn-primary" >Thêm sản phẩm</button>
                    </div>
                </form>
            </div>
        `;
}

export default AdminBlogsEdit