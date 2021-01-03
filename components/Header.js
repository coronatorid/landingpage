const Header = (props) => {
  return (
    <header className="mx-auto px-2 sm:px-6 lg:px-8 py-2.5 bg-lightCoral shadow h-16 flex justify-between">
      <a className="flex no-underline hover:no-underline" href="/">
        <div className="inline mx-1 col-start-1 my-auto">
          <img src="/icons/logo.png" alt="Coronator Logo" className="h-6 w-6" />
        </div>
        <div className="inline mx-1 my-auto col-start-1">
          <p className="text-white font-medium">CORONATOR</p>
        </div>
      </a>
      <div className="flex">
        <div className="my-auto mx-3">
          <a href="https://kitabisa.com/campaign/coronator" className="text-white font-semibold outline-none no-underline hover:no-underline">Support</a>
        </div>
        {/* <div className="my-auto mx-1 inline">
          <button
            className="bg-white p-2 font-medium rounded shadow focus:outline-none hover:bg-gray-200"
          >
            <div className="font-normal text-xs">DOWNLOAD</div>
          </button>
        </div> */}
      </div>
    </header>
  )
}

export default Header;
