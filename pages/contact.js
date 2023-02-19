import Footer from "../component/Footer"
import Header from "../component/Header"

const ContactPage = () => {
  return `
        <div class="container">
        ${Header()}
        <div class=" tw-bg-white tw-pl-10">
                  
                  <h1 class="tw-py-6 tw-pl-8">Contact</h1>
                  <div class="tw-flex">
                    <div>
                      <p class="tw-text-lg"><i class="tw-text-red-600 tw-pr-2 fa fa-user"></i>Dung Nguyễn</p>
                      <p class="tw-text-lg"><i class="tw-text-red-600 tw-pr-2 fa fa-envelope"></i><a href="mailto:info@example.com">dungdungnguyen2402@gmail.com</a></p>
                      <p class="tw-text-lg"><i class="tw-text-red-600 tw-pr-2 fa fa-phone"></i><a href="tel:+1234567890">0366462025</a></p>
                      <p class="tw-text-lg"><i class="tw-text-red-600 tw-pr-2 fa fa-map-marker"></i> Nam Từ Liêm , Hà Nội</p>
                      <div class="social">
                        <a class="btn" href=""><i class="tw-bg-red-400 tw-p-2 fab fa-twitter"></i></a>
                        <a class="btn" href=""><i class="tw-bg-red-400 tw-p-2 fab fa-facebook-f"></i></a>
                        <a class="btn" href=""><i class="tw-bg-red-400 tw-p-2 fab fa-linkedin-in"></i></a>
                        <a class="btn" href=""><i class="tw-bg-red-400 tw-p-2 fab fa-instagram"></i></a>
                        <a class="btn" href=""><i class="tw-bg-red-400 tw-p-2 fab fa-youtube"></i></a>
                      </div>
                    </div>
                    <div class="tw-pl-10">
                    <div class="tw-flex">
                      <input type="text" class="tw-border-2 tw-p-2 tw-mr-4" value="Your name" name="" id="">
                      <input type="text" class="tw-border-2 tw-p-2" value="Email" name="" id="">
                    </div>
                    <input type="text" class="tw-border-2 tw-p-2 tw-my-2 tw-w-full " value="Y kien" name="" id=""><br>
                    <textarea name="" class="tw-border-2" id="" cols="54" rows="5"></textarea><br>
                    <button class="tw-border-2 tw-p-2 tw-bg-red-400 tw-text-white">Send Message</button>
                  </div>
                  </div>
                  
                  
                </div>
                ${Footer()}
        </div>
  `
}

export default ContactPage