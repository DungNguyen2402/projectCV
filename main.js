import "bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap/dist/js/bootstrap.bundle.min";

import { router , render } from "./lib";
import HomePage from "./pages/home";
import AdminBlogsPage from "./pages/admin/Blogs";
import BlogPage from "./pages/blog"
import ProjectPage from "./pages/projects";
import ContactPage from "./pages/contact";
import ProjectDetailPage from "./pages/projects-detail";
import NotFoundPage from "./pages/not-found";
import AdminProjects from "./pages/admin/Projects";
import AdminProjectsAdd from "./pages/admin/Projects-add";
import AdminBlogsAdd from "./pages/admin/Blog-add"
import AdminProjectsEdit from "./pages/admin/Project-edit";
import loginPage from "./pages/login";
import adminPage from "./pages/admin/admin";
import AdminBlogsEdit from "./pages/admin/Blog-edit"
import Category from "./pages/admin/Category";
import ProjectCT from "./pages/admin/project-category";
import IntroPage from "./pages/intro";

const app = document.querySelector("#app");
// console.log(app)

router.on("/", () => render(HomePage, app))
router.on("/contact", () => render(ContactPage, app))
router.on("/blog", () => render(BlogPage, app))
router.on("/projects", () => render(ProjectPage, app))
router.on("projects/:id", ( data ) => render(() => ProjectDetailPage(data), app))
router.on("/login", () => render(loginPage, app))
router.on("/admin", () => render(AdminProjects, app))

//admin
router.on("/admin/adminpage", () => render(adminPage, app))
router.on("/admin/projects", () => render(AdminProjects,app))
router.on("/admin/category", () => render(Category,app))//hsauh
router.on("/admin/blogs" , () => render(AdminBlogsPage ,app))
router.on("/admin/intro" , () => render(IntroPage ,app))
router.on("/admin/projects/add", () => render(AdminProjectsAdd,app))
router.on("/admin/blogs/add", () => render(AdminBlogsAdd,app))
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectsEdit(data), app))
router.on("/admin/blogs/:id/edit", ({ data }) => render(() => AdminBlogsEdit(data), app))
router.on("/project_category/:id", ( ok ) => render(() => ProjectCT(ok), app))

router.notFound(() => render(NotFoundPage, app))

router.resolve();