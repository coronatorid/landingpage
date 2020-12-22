import {useState} from 'react';

const Index = (props) => {
  const [services, _] = useState([
    {
      title: 'Create tasks with a clear, achievable goal.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe amet incidunt blanditiis placeat quam'
    },
    {
      title: 'Create tasks with a clear, achievable goal.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe amet incidunt blanditiis placeat quam'
    },
    {
      title: 'Create tasks with a clear, achievable goal.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe amet incidunt blanditiis placeat quam'
    },
  ]);
  
  return (
    <div>
      <section className="section ">
        <div className="container min-h-52 flex items-center justify-center">
          <div className="py-5 md:py-8">
            <div className="mb-6">
              <img src="/icons/logo.png" alt="" className="h-20 w-20 mx-auto"/>
            </div>
            <h1 className="text-center font-title">
              CORONATORID
            </h1>
            <p className="text-center max-w-screen-md mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe amet incidunt blanditiis placeat quam eius doloremque facilis perferendis magnam praesentium voluptate in fuga repellendus, libero beatae tempora officia harum.
            </p>
            <div className="text-center">
              <span className="rounded-lg bg-lotus px-3 py-2 text-gray-100 font-semiboldd text-3xl tracking-widest font-title font-bold mx-auto inline-block">
                v 1.0.0
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-4">
          {
            services.map((service) => {
              return (
                <div className="pb-8">
                  <h3 className="font-title">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">
                    {service.desc}
                  </p>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Index;
