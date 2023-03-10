import axios from "axios";
import { updateProject, getProject } from "../../api/project";
import { useEffect,router, useState } from "../../lib";
//import { projects } from "../../data";

const AdminProjectsEdit = ({id}) => {

    const [project, setProject] = useState({});

    useEffect(() => {
        (async() => {
            try {
                setProject(await getProject(id))
            } catch (error) {
                console.log(error);
            }
        })()

        axios.get(`http://localhost:3000/projects/${id}`)
        .then(({data}) => {
            setProject(data)
        })
    }, [])

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name")
        const projectDes = document.querySelector("#project-des")
        const projectLinkgit = document.querySelector("#project-githup")
        const projectDate = document.querySelector("#project-date")
        // const projectTechnology = document.querySelector("#project-technology")
        // const projectCategory = document.querySelector("#project-category")


        form.addEventListener("submit",async function(e) {
            e.preventDefault();
            try {
                await updateProject ({
                    id: id,
                    name: projectName.value,
                    des: projectDes.value,
                    link: projectLinkgit.value,
                    date: projectDate.value,
                    // technology: projectTechnology.value,
                    // category: projectCategory.value,
                });
                router.navigate('/admin/projects')
            } catch (error) {
                console.log(error);
            }


            // Sử dụng axios
            // axios.put(`http://localhost:3000/projects/${id}`, formProject)
            // .then(() => {
            //     router.navigate('/admin/projects')
            // })

            // Thêm vào mảng projects
            //projects.push(formProject)
            //console.log(projects);

            

        })

    })

    return `<div class="container tw-text-white">
                <h1 class="tw-text-center tw-text-6xl tw-font-extrabold tw-text-white">Cập nhật dự án</h1>
                <form id="form-add">
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Tên dự án</label>
                        <input type="text" name="" id="project-name" value="${project.name}" class="form-control">
                    </div>
                    
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Mô tả</label>
                        <input type="text" name="" id="project-des" value="${project.des}" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Linkgit</label>
                        <input type="text" name="" id="project-githup" value="${project.link}" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3">
                        <label for="">Ngày làm</label>
                        <input type="text" name="" id="project-date" value="${project.date}" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3" >
                    <input type="text" name="" id="project-date" value="${project.technology}" class="form-control">
                    </div>
                    <div class="tw-w-1/3 form-group mb-3 bordered" >
                    <input type="text" name="" id="project-date" value="${project.category}" class="form-control">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" >Update project</button>
                    </div>
                </form>
            </div>
        `;
}

export default AdminProjectsEdit