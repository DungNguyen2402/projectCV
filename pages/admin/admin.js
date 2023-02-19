
const adminPage = () => {
  return `
  <div class="container tw-flex tw-mx-auto">
      <div class="tw-mt-20 tw-h-full tw-w-1/4 tw-bg-zinc-500 ">
            <div class="tw-justify-center tw-items-center">
                <img src="./img/logo.png" alt="" class="w-2/4 ">
            </div>
              <ul>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/adminpage">Dashboard</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4"><a  class="tw-text-black text-decoration-none" href="/admin/projects">Quản lí dự án</a></li>
                  <li class="tw-bg-white tw-border tw-w-56 tw-p-2 tw-my-4" ><a class="tw-text-black text-decoration-none"  href="">Đăng xuất</a></li>
              </ul>
      </div>
      <div class="tw-w-4/5 tw-py-2 ">
          <div class="tw-flex tw-border tw-justify-end">
              <i class="tw-pt-1 tw-text-blue-500 fa-solid fa-bell"></i>
              <p class="tw-mx-2">Xin chào</p>
              <p class="tw-text-blue-500">Dung Nguyen</p>
              
          </div>
          <div class="tw-mt-5">
              <div class="tw-absolute tw-text-white ">
                  <p class="tw-pl-96 tw-py-14 tw-font-bold tw-text-2xl">Welcome to Dashboard</p>
              </div>
              <img src="./img/Rectangle 152 (1).png" alt="">
          </div>
          
      </div>

  </div>

  `
}

export default adminPage