const yearNow = new Date();
const Footer = (props) => {
  return (
    <footer class="pt-5 w-full bg-lightCoral text-gray-200">
        <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-3">

                <div class="flex-1 mb-6 pr-5">
                    <a class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gradient gradient"  href="#">
                      <a className="flex no-underline hover:no-underline" href="/">
                       <div className="inline mx-1 col-start-1 my-auto">
                         <img src="/icons/logo.png" alt="Coronator Logo" className="h-6 w-6" />
                       </div>
                       <div className="inline mx-1 my-auto col-start-1">
                         <p className="text-white font-medium">Coronator</p>
                       </div>
                     </a>
                    </a>
                    <img width="200" src="https://xwing.app/img/android.png"></img>
                </div>

                <div class="flex-1 pr-5 pb-5">
                  Coronator for Android is still being worked on. <br></br>Sign up for updates or to help beta test.<br></br>
                  <form action="#">
                      <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                          <input type="email" placeholder="yourmail@example.com"
                              class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"></input>
                          <button type="submit"
                              class="bg-lotus-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-lotus p-3">Subscribe</button>
                      </div>
                  </form>
                </div>

                <div class="flex-1">
                    <p class="uppercase font-black md:mb-6">Links</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://kitabisa.com/campaign/coronator" class="no-underline hover:underline text-grey-darkest hover:text-teal-dark">Support</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://github.com/coronatorid" class="no-underline hover:underline text-grey-darkest hover:text-teal-dark">GitHub</a>
                        </li>
                    </ul>
                </div>

                <div class="flex-1">
                    <p class="uppercase font-black md:mb-6">Legal</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" class="no-underline hover:underline text-grey-darkest hover:text-teal-dark">Terms</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" class="no-underline hover:underline text-grey-darkest hover:text-teal-dark">Privacy</a>
                        </li>
                    </ul>
                </div>

                <div class="flex-1">
                    <p class="uppercase font-black md:mb-6">Social</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://twitter.com/coronatorid" class="no-underline hover:underline text-grey-darkest hover:text-teal-dark">Twitter</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="container text-center mx-auto pb-5 pt-5 px-8">
          <hr></hr>
          <p class="pt-3">
          <a href="https://coronator.id/" class="font-semibold">Coronator</a> &copy; 2020 - {yearNow.getFullYear()}
          </p>
        </div>

    </footer>
  )
}

export default Footer;
