import "bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap/dist/js/bootstrap.bundle.min";

import { router , render } from "./lib";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import ProjectPage from "./pages/projects";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/not-found";
import AdminProjects from "./pages/admin/Projects";
import AdminProjectsAdd from "./pages/admin/Projects-add";
import AdminProjectsEdit from "./pages/admin/Project-edit";
import loginPage from "./pages/login";
import adminPage from "./pages/admin/admin";

const app = document.querySelector("#app");
// console.log(app)

router.on("/", () => render(HomePage, app))
router.on("/contact", () => render(ContactPage, app))
router.on("/blog", () => render(BlogPage, app))
router.on("/projects", () => render(ProjectPage, app))
router.on("/login", () => render(loginPage, app))

//admin
router.on("/admin/adminpage", () => render(adminPage, app))
router.on("/admin/projects", () => render(AdminProjects,app))
router.on("/admin/projects/add", () => render(AdminProjectsAdd,app))
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectsEdit(data), app))

router.notFound(() => render(NotFoundPage, app))

router.resolve();