import Footer from "../component/Footer"
import Header from "../component/Header"

const BlogPage = () => {
    return `
        <div class="container">
        ${Header()}
        <div>
                <div class="tw-mb-10 tw-bg-white ">
                <h1 class="tw-py-6 tw-pl-8">About me</h1>
                    <div class="tw-flex">
                    <img width="50%" class="tw-px-6" src="./img/about-us.png" alt="">
                    <div class="tw-p-10">
                        <h3 class=" tw-text-black tw-text-5xl">Giới thiệu bản thân</h3>
                        <p class="py-3 fs-5">Hiện tại mình đang học kì 5 tại trường FPT Polytechnic.  Ngoài việc học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend, ...
                        Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend.</p>
                        <button class="tw-rounded-lg tw-bg-red-400 tw-p-2 "><a class="tw-text-white tw-text-2xl tw-no-underline" href="">Download CV</a></button>
                    </div>
                    </div>
                </div>
            </div>
            <div>
        </div>
        ${Footer()}
    `
  }
  
  export default BlogPage