const yearNow = new Date();
const Footer = (props) => {
  return (
    <footer className="pt-5 w-full bg-lightCoral text-gray-200">
        <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-3">

                <div className="flex-1 mb-6 pr-5">
                    <a className="no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gradient gradient"  href="#">
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

                <div className="flex-1 pr-5 pb-5">
                  Coronator for Android is still being worked on. <br></br>Sign up for updates or to help beta test.<br></br>
                  <form action="#">
                      <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                          <input type="email" placeholder="yourmail@example.com"
                              className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"></input>
                          <button type="submit"
                              className="bg-lotus-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-lotus p-3">Subscribe</button>
                      </div>
                  </form>
                </div>

                <div className="flex-1">
                    <p className="uppercase font-black md:mb-6">Links</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://kitabisa.com/campaign/coronator" className="no-underline hover:underline text-grey-darkest hover:text-teal-dark">Support</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://github.com/coronatorid" className="no-underline hover:underline text-grey-darkest hover:text-teal-dark">GitHub</a>
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <p className="uppercase font-black md:mb-6">Legal</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="/terms" className="no-underline hover:underline text-grey-darkest hover:text-teal-dark">Terms</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="/privacy" className="no-underline hover:underline text-grey-darkest hover:text-teal-dark">Privacy</a>
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <p className="uppercase font-black md:mb-6">Social</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://twitter.com/coronatorid" className="no-underline hover:underline text-grey-darkest hover:text-teal-dark">Twitter</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="container text-center mx-auto pb-5 pt-5 px-8">
          <hr></hr>
          <p className="pt-3">
          <a href="https://coronator.id/" className="font-semibold">Coronator</a> &copy; 2020 - {yearNow.getFullYear()}
          </p>
        </div>

    </footer>
  )
}

export default Footer;
