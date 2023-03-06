import Footer from "../component/Footer"
import Header from "../component/Header"

const ContactPage = () => {
  return `
        <div class="container">
        ${Header()}
        <div class="tw-pl-10">
                  
            <h1 class="tw-text-7xl tw-font-extrabold tw-text-sky-300 tw-text-center">Contact</h1>      
            <p class="tw-py-10 tw-text-2xl tw-text-center tw-text-slate-400">Here are the projects that I have done</p>          
                  <div class="tw-grid tw-grid-cols-2 tw-px-44">
                      <div>
                        <p class="tw-text-lg tw-text-white tw-mb-10"><i class="tw-text-red-600 tw-bg-white  tw-p-4 tw-mr-6 tw-rounded-full fa fa-user"></i>Dung Nguyễn</p>
                        <p class="tw-text-lg tw-text-white tw-mb-10"><i class="tw-text-red-600 tw-bg-white tw-p-4 tw-mr-6 tw-rounded-full fa fa-envelope"></i><a href="mailto:info@example.com">dungdungnguyen2402@gmail.com</a></p>
                        <p class="tw-text-lg tw-text-white tw-mb-10"><i class="tw-text-red-600 tw-bg-white tw-p-4 tw-mr-6 tw-rounded-full fa fa-phone"></i><a href="tel:+1234567890">0366462025</a></p>
                        <p class="tw-text-lg tw-text-white tw-mb-10"><i class="tw-text-red-600 tw-bg-white tw-p-4 tw-mr-6 tw-rounded-full fa fa-map-marker"></i> Nam Từ Liêm , Hà Nội</p>
                        
                      </div>
                    <div class="">
                      <div class="tw-flex">
                        <input type="text" class="tw-border-2 tw-p-2 tw-mr-4" value="Your name" name="" id="">
                        <input type="text" class="tw-border-2 tw-p-2" value="Email" name="" id="">
                      </div>
                        <input type="text" class="tw-border-2 tw-p-2 tw-my-2 tw-w-11/12" value="Y kien" name="" id=""><br>
                        <textarea name="" class="tw-border-2" id="" cols="54" rows="8"></textarea><br>
                        <button class="tw-border-2 tw-p-2 tw-bg-red-400 tw-text-white">Send Message</button>
                      </div>
                  </div>
                  
                  
                </div>
                ${Footer()}
        </div>
  `
}

export default ContactPage