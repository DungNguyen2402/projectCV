import axios from "axios";
import Footer from "../component/Footer";
import Header from "../component/Header"
import { useEffect, useState } from "../lib";

const ProjectDetailPage = ({data:{id}}) => {
  console.log(id);
const [get_pr,set_pr]=useState({});
useEffect(function(){
  axios.get("http://localhost:3000/projects/"+id).then(({data})=>set_pr(data));
},[]);
//console.log(get_pr.name);
  return `
        <div class="container h-100">
            ${Header()}
            <h1 class="tw-text-7xl tw-font-extrabold tw-text-sky-300 tw-text-center tw-py-10">Project-Detail</h1>
       
            <div class="tw-flex row p-4">
            <img  class="rounded col-md-6 sol-sm-12" src="${get_pr.gallery}" alt="">
            <div class="tw-pl-20 col-md-6 col-sm-12">
            <div class="row">
              <div class="col-4">
                <p class="tw-text-white tw-text-lg tw-font-medium tw-pr-10">Họ Tên: </p>
                <p class="tw-text-white tw-text-lg tw-font-medium tw-pr-10">Mô tả dự án</p>
                <p class="tw-text-white tw-text-lg tw-font-medium tw-pr-10">Ngày làm dự án</p>
                <p class="tw-text-white tw-text-lg tw-font-medium tw-pr-10">Công nghệ sử dụng</p>
              </div>
              <div class="col-8">
                <p class="tw-text-slate-300 tw-text-lg tw-font-medium">${get_pr.name}</p>
                <p class="tw-text-slate-300 tw-text-lg tw-font-medium">${get_pr.des}</p>
                <p class="tw-text-slate-300 tw-text-lg tw-font-medium">${get_pr.date}</p>
                <p class="tw-text-slate-300 tw-text-lg tw-font-medium">${get_pr.technology}</p>
              </div>
        </div>
        </div>
        
        ${Footer()}
            `;
}

export default ProjectDetailPage