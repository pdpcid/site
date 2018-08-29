import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Tentang PDPC</h1>
    <p>
      Product &amp; Development Podcast Community (PDPC) adalah komunitas yang
      terdiri dari para penyiar podcast yang murni membahas seputar produk dan
      pengembangannya. Apakah itu dari sisi manajerial proyek, perancangan
      arsitektur (backend, teknologi cloud), perancangan visualisasi (UI/UX),
      platform produk (Mobile / Desktop / Web), maupun teknologi yang dipakai
      secara spesifik. Mereka sangat berhasrat dengan topik ini sehingga tidak
      membahas hal-hal lain di luar itu secara kuantitatif (jumlah episode)
      maupun kualitatif (secara dalam).
    </p>
    <p>
      Berawal dari gagasan dua penyiar podcast Riza Fahmi (
      <a href="https://ceritanyadeveloper.com/" target="_blank">
        Ceritanya Developer
      </a>
      ) &amp; Adinda Praditya (
      <a href="https://devmuslim.id" target="_blank">
        Developer Muslim
      </a>
      ) yang melihat bahwa dengan maraknya podcast-podcast baru yang
      mentargetkan orang-orang Indonesia maka diperlukan wadah komunitas untuk
      para penyiar ini agar bisa saling membantu dan bekerjasama di atas visi
      dan misi yang sama.
    </p>
    <h2>Tujuan</h2>
    <div>
      PDPC bertujuan untuk:
      <ul>
        <li>Menjadi tempat untuk saling membantu dan bertukar pikiran</li>
        <li>
          Menjadi alat untuk mengembangkan isi dan format dari podcast-podcast
          peserta
        </li>
        <li>Menjadi tempat untuk menemukan nara sumber</li>
      </ul>
    </div>
    <h2>Visi &amp; Misi</h2>
    <div>
      <ul>
        <li>
          Menjadikan PDPC sebagai pencetak dan pengembang podcast yang
          berkualitas dan bermanfaat bagi para pendengarnya
        </li>
        <li>
          Ikut membantu perkembangan kualitas para profesional yang berkaitan
          dengan Product &amp; Development
        </li>
      </ul>
      <h2>Keanggotaan</h2>
      <div>
        Berikut adalah syarat &amp; ketentuan dari keanggotaan PDPC
        <ol>
          <li>
            Terlibat dalam pembuatan podcast, entah itu sebagai produser,
            penyiar atau yang lainnya. Selanjutnya bisa disebut sebagai Pengurus
            Podcast.
          </li>
          <li>
            Podcast peserta harus memenuhi syarat berikut:
            <ol>
              <li>
                Tidak membahas materi politik &amp; agama sama sekali di dalam
                semua episode podcast
              </li>
              <li>
                Tidak sering membahas topik yang tidak berkaitan dengan Product
                &amp; Development. Maksimal 1 kali dalam 1 bulan.
              </li>
            </ol>
          </li>
          <li>
            Keanggotaan PDPC sementara ini terbatas dengan undangan dari
            Pengurus Podcast sampai aturan ini diubah berdasarkan kesepakatan
            pengurus PDPC.
          </li>
        </ol>
      </div>
    </div>
  </Layout>
)

export default IndexPage
