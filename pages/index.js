import { useState, useContext, useEffect } from 'react';
import Head from 'next/head'
import Contributors from '../components/Contributors';
import ShowcaseAppSlider from '../components/ShowcaseAppSlider';

const Index = (props) => {
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
    <>
      <Head>
        <title>Coronator - Indonesia Covid Application</title>
        <meta property="og:title" content="Coronator - Indonesia Covid Application" key="title" />
        <meta name="Description" content="Aplikasi contact tracing untuk membantu mengatasi virus corona" />
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
              Satu langkah maju untuk menuju aplikasi <b>"perfect contact tracing"</b>.
            </p>
            <div className="text-center">
              <a href="#" className="inline-block h-16">
                <img src="/images/google-play-badge-comingsoon.png" alt="download google play" className="h-full w-auto" />
              </a>
            </div>
            <div className="container text-center underline">
              <a href="/changelog">See Changelog</a>
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
            title="Cerita tentang coronator"
            className="text-center"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jibQJOR1zB4"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}>
          </iframe>
        </div>
      </section>
      <section className="section">
        <h2 className="text-center">
          How It Ends
        </h2>
        <div className="container min-h-52 flex items-center justify-center">
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Built <a href="https://twitter.com/coronatorid?ref_src=twsrc%5Etfw">@coronatorid</a> was a fun process, I learn much more about flutter and found a ddd pattern that suits into my golang projects in the future.</p>&mdash; Insomnius (@insomnius_) <a href="https://twitter.com/insomnius_/status/1352235894745382917?ref_src=twsrc%5Etfw">January 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ShowcaseAppSlider />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Contributors />
        </div>
      </section>
    </>
  )
}

export default Index;
