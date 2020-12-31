import { useState, useContext, useEffect } from 'react';
import Head from 'next/head'

import ContributorsContext from '../contexts/ContributorsContext';
import Contributor from '../components/Contributor';
import localStorageData from '../utils/localStorageData';

const Index = (props) => {
  const {contributors, fetchContributors} = useContext(ContributorsContext.Context);

  const [services, _] = useState([
    {
      title: 'Location Tracking',
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
      <Head>
        <title>Coronator - Indonesia Covid Application</title>
        <meta property="og:title" content="Coronator - Indonesia Covid Application" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Indonesia Covid Applicationlication" key="title" />
      </Head>
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
            services.map((service, index) => {
              return (
                <div className="pb-8" key={index}>
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
      <section className="section">
        <h2 className="text-center">
          The Story
        </h2>
        <div className="container min-h-52 flex items-center justify-center">
          <div className="py-5 md:py-8">
            <p className="text-center max-w-screen-md mb-5">
              Awal pembuatan aplikasi ini dimulai ketika muncul sebuah ide tentang sistem mandiri yang bisa menanggulangi covid-19 dengan kontribusi masyarakat sehingga tercipta sebuah informasi yang mendukung untuk pengambilan keputusan pengguna yang ada didalam aplikasi ini. Aplikasi ini juga harapanya bisa mengurangi penambahan kasus positif covid-19 di Indonesia.
            </p>
          </div>
        </div>
        <div className="container min-h-52 flex items-center justify-center">
          <iframe
            className="text-center"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jibQJOR1zB4"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}>
          </iframe>
        </div>
      </section>

      {
        !contributors.length
          || (
            <section className="section">
              <h2 className="text-center">
                Meet the Fighters
              </h2>
              <div className="container flex flex-wrap justify-center">
                {
                  contributors.map((contributor) => {
                    return (
                      <Contributor contributor={contributor} key={contributor.login} />
                    )
                  })
                }
              </div>
            </section>
          )
      }

    </div>
  )
}

export default Index;
