import axios from "axios";
import Header from "../../component/Header";
import { useEffect, useState } from "../../lib";

const ProjectCT = ({data:{id}}) => {
    console.log(id);
    
    // category
    // const [getAll,setAll]=useState([]);
    // useEffect(function(){
    //     fetch("http://localhost:3000/categories")
    //     .then((ok1)=>ok1.json())
    //     .then((ok2)=>setAll(ok2));
    // },[]);

    // console.log(getAll.name);
    
    const [get,set]=useState([]);
    useEffect(function(){
        fetch("http://localhost:3000/projects")
        .then((ok1)=>ok1.json())
        .then((ok2)=>set(ok2));
    },[]);

    const xem = get.filter((xuat)=>xuat.categoriesId == id);
    //console.log(xem);
    return`
    <div class="container">
    ${Header()}
    
    <h1 class="tw-text-7xl tw-font-extrabold tw-text-sky-300 tw-text-center tw-py-10">Project-Detail</h1>
        ${xem.map((projectct) => {
            return `
            <div class="tw-flex tw-border-2 tw-border-lime-50">
            <img class="tw-rounded-xl"  width="40%" src="${projectct.gallery}" alt="">
            <div class="tw-pl-20"> 
                <div class="tw-flex tw-py-10">
                    <p class="tw-text-white tw-text-lg tw-font-medium tw-pr-10">Tên dự án:</p>
                    <p class="tw-text-slate-300 tw-text-lg tw-font-medium">${projectct.name}</p>
                </div>
                <div class="tw-flex">
                    <p class="tw-text-white tw-text-lg tw-font-medium tw-pr-10">Mô tả:</p>
                    <p class="tw-text-slate-300 tw-text-lg tw-font-medium">${projectct.des}</p>
                </div>
                <div class="tw-flex">
                    <p class="tw-text-white tw-text-lg tw-font-medium tw-pr-10">Ngày làm dự án:</p>
                    <p class="tw-text-slate-300 tw-text-lg tw-font-medium">${projectct.date}</p>
                </div>
                <div class="tw-flex">
                    <p class="tw-text-white tw-text-lg tw-font-medium tw-pr-10">Công nghệ sử dụng:</p>
                    <p class="tw-text-slate-300 tw-text-lg tw-font-medium">${projectct.technology}</p>
                </div>
                
            </div>
        </div>
            `
        })}
        </div>
    `;
    
}

export default ProjectCT;