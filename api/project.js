import instance from "./config";

const getProjects = () => {
    return instance.get("/projects");
}

const getProject = (id) => {
    return instance.get(`/projects/${id}`);
}

const addProjects = (project) => {
    return instance.post(`/projects`, project);
}

const updateProject = (project) => {
    return instance.put(`/projects/${project.id}`, project);
}

const deleteProject = (id) => {
    return instance.delete(`/projects/${id}`);
}

// post
const getPosts = () => {
    return instance.get("/blogs");
}

const getPost = (id) => {
    return instance.get(`/blogs/${id}`);
}

const deletePost = (id) => {
    return instance.delete(`/blogs/${id}`);
}

const addBlogs = (blog) => {
    return instance.post(`/blogs`, blog);
}

const updateBlogs = (blog) => {
    return instance.put(`/blogs/${blog.id}`, blog);
}

// category
const getCategories = () => {
    return instance.get("/categories");
}

const deleteCategory = (id) => {
    return instance.delete(`/categories/${id}`);
}

export {getProjects , getProject, addProjects, updateProject, deleteProject,getPosts, getPost, deletePost , addBlogs,updateBlogs, deleteCategory,getCategories }