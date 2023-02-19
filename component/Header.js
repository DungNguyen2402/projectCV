
const Header = () => {
  return `
        <header class=" nav justify-content-evenly " style="background-color:tomato">
        <img class="" width="100px" src="./img/logo (1).png" alt="">
            <div>
                <ul class="">     
                    <li class="py-4 ">             
                        <a class="p-4 fw-bolder text-black text-decoration-none" href="">HOME</a>                  
                        <a class="p-4 fw-bolder text-black text-decoration-none" href="/projects">PROJECTS</a>
                        <a class="p-4 fw-bolder text-black text-decoration-none" href="/blog">BLOG</a>
                        <a class="p-4 fw-bolder text-black text-decoration-none" href="/contact">CONTACT</a>
                        
                    </li>
                </ul> 
            </div>  
            <a href="/login" class="p-4 text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a> 
        </header>

  `
}

export default Header