import React from 'react';

const CrewLayout = (props) => {
  return (
    <>
      <header className="flex w-full fixed h-16 bg-lightCoral justify-between px-5">
        <a className="flex no-underline hover:no-underline" href="/crew">
          <div className="inline mx-1 col-start-1 my-auto">
            <img src="/icons/logo.png" alt="Coronator Logo" className="h-6 w-6" />
          </div>
          <div className="inline mx-1 my-auto col-start-1">
            <p className="text-gray-100 font-medium">Crewonator</p>
          </div>
        </a>
        <div className="flex flex-wrap items-center">
          <div>

          </div>
          <div className="">
            <div className="rounded-full bg-gray-200 w-10 h-10"></div>
          </div>
        </div>
      </header>
      <div className="content pt-16 grid grid-cols-12 gap-3 h-full">
        <div className="navigation col-span-2 hidden lg:block h-full bg-gray-100 shadow-lg border-r p-3">
          nav here ...
        </div>
        <div className="col-span-10 p-5">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default CrewLayout;
