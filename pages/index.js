import { useState } from 'react';

const Index = (props) => {
  const [services, _] = useState([
    {
      title: 'High Accuracy Location Tracking',
      desc: 'Aplikasi coronator didesign untuk mengambil lokasi menggunakan GPS dengan akurasi yang tinggi dan memungkinkan untuk pengembangan fitur-fitur lain lebih jauh kedepan.'
    },
    {
      title: 'Open Source',
      desc: 'Coronator dibuat dengan menggunakan metode open source dimana semua orang bisa berkontribusi dan source code-nya terbuka untuk umum agar bisa dipelajari, direview, diubah, ditingkatkan dan disebarluaskan.'
    },
    {
      title: 'Secure',
      desc: 'Kami menggunakan best practice keamanan seperti oauth, OTP dan hashing untuk data-data penting yang masuk kedalam basis data coronator.'
    },
  ]);

  return (
    <div>
      <section className="section ">
        <div className="container min-h-52 flex items-center justify-center">
          <div className="py-5 md:py-8">
            <div className="mb-6">
              <img src="/icons/logo.png" alt="" className="h-20 w-20 mx-auto" />
            </div>
            <h1 className="text-center font-title">
              CORONATOR
            </h1>
            <p className="text-center max-w-screen-md mb-5">
              Satu langkah maju untuk menuju aplikasi <b>"perfect contact tracing"</b>. Ikuti perjuangan kami <a href="https://github.com/coronatorid" className="underline text-blue-400">disini</a>.
            </p>
            <div className="text-center">
              <span className="rounded-lg bg-lotus px-3 py-2 text-gray-100 font-semiboldd text-3xl tracking-widest font-title font-bold mx-auto inline-block">
                Beta v0.0.1
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
