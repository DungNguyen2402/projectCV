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

export {getProjects , getProject, addProjects, updateProject, deleteProject}