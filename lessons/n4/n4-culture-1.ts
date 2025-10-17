import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-culture-1',
    level: 'N4',
    title: 'Budaya Jepang: Etika Sosial & Keigo Dasar',
    description: 'Pahami etika di tempat umum dan pengenalan bahasa hormat (Keigo).',
    xp: 180,
    content: `
      <h1>Etika Sosial & Pengenalan Bahasa Hormat (敬語 - Keigo)</h1>
      <p>Saat Anda semakin mahir, memahami konteks sosial menjadi semakin penting. Mari kita lihat beberapa aturan tak tertulis dan pengenalan singkat ke dunia bahasa hormat.</p>
      
      <h2>Etika di Tempat Umum: Menjaga Keharmonisan (和 - Wa)</h2>
      <p>Inti dari etika sosial Jepang adalah konsep <strong>和 (wa)</strong>, atau keharmonisan. Ini berarti mengutamakan kepentingan kelompok di atas individu dan menghindari konfrontasi. Beberapa contoh nyata:</p>
      <ul>
        <li><strong>Di Kereta (電車 - densha):</strong> Berbicara di telepon sangat tidak sopan. Jika harus, bicaralah dengan sangat pelan. Prioritaskan tempat duduk untuk lansia, wanita hamil, dan penyandang disabilitas.</li>
        <li><strong>Antrean (列 - retsu):</strong> Orang Jepang sangat tertib dalam mengantre. Jangan pernah menyerobot antrean.</li>
        <li><strong>Memberi Uang:</strong> Saat membayar di kasir, jangan berikan uang langsung ke tangan kasir. Letakkan di nampan kecil (トレイ - torei) yang disediakan. Ini dianggap lebih higienis dan sopan.</li>
      </ul>

      <h2>Pengenalan Bahasa Hormat (敬語 - Keigo)</h2>
      <p>Keigo adalah sistem bahasa yang sangat kompleks untuk menunjukkan rasa hormat. Di level N4, Anda hanya perlu memahami konsep dasarnya. Ada tiga jenis utama:</p>
      <ol>
        <li><strong>Teineigo (丁寧語) - Bahasa Sopan:</strong> Ini adalah yang sudah Anda pelajari! Menggunakan <code>～です</code> dan <code>～ます</code> adalah Teineigo. Ini adalah bentuk standar kesopanan.</li>
        <li><strong>Sonkeigo (尊敬語) - Bahasa Hormat:</strong> Digunakan saat berbicara <strong>TENTANG</strong> orang yang Anda hormati (atasan, pelanggan). Anda "meninggikan" tindakan mereka.
          <br/><em>Contoh: 先生は<strong>いらっしゃいます</strong>か。(Sensei wa <strong>irasshaimasu</strong> ka?) - Apakah guru <strong>ada</strong>? (Bentuk hormat dari います).</em></li>
        <li><strong>Kenjougo (謙譲語) - Bahasa Rendah Hati:</strong> Digunakan saat berbicara <strong>TENTANG</strong> diri Anda sendiri di hadapan orang yang Anda hormati. Anda "merendahkan" tindakan Anda untuk meninggikan mereka.
          <br/><em>Contoh: 私が<strong>まいります</strong>。(Watashi ga <strong>mairimasu</strong>.) - Saya yang akan <strong>datang/pergi</strong>. (Bentuk rendah hati dari 行きます/来ます).</em></li>
      </ol>
      <p>Memahami kapan harus menggunakan bentuk yang mana adalah keterampilan tingkat lanjut, tetapi mengenali perbedaannya adalah langkah pertama yang penting.</p>
    `,
    audioScript: 'Pelajaran ini membahas etika sosial Jepang, seperti tidak menelepon di kereta dan meletakkan uang di nampan. Kita juga akan berkenalan dengan Keigo, bahasa hormat, yang terdiri dari Teineigo, Sonkeigo untuk menghormati orang lain, dan Kenjougo untuk merendahkan diri.',
    listeningSituation: {
      title: 'Cerita Pendek: Persiapan Telepon Bisnis',
      japaneseText: `「これから、ABC社の鈴木部長に電話をしなければならない。緊張するな。うちの会社の代表として話すから、謙譲語を正しく使わないと。よし、深呼吸して、『私、XYZ社の田中と申します』から始めよう。」`,
      indonesianText: `"Sekarang, saya harus menelepon Manajer Suzuki dari Perusahaan ABC. Gugup sekali. Karena saya berbicara sebagai perwakilan perusahaan saya (uchi), saya harus menggunakan bahasa rendah hati (Kenjougo) dengan benar. Oke, tarik napas dalam-dalam, mari kita mulai dengan 'Nama saya Tanaka dari Perusahaan XYZ'."`,
      audioScript: 'これから、ABC社の鈴木部長に電話をしなければならない。緊張するな。うちの会社の代表として話すから、謙譲語を正しく使わないと。よし、深呼吸して、「私、XYZ社の田中と申します」から始めよう。'
    },
    quiz: [
      { question: 'Konsep utama dalam etika sosial Jepang yang berarti "keharmonisan" adalah...', options: ['Keigo', 'Wa', 'Uchi-soto', 'Meishi'], correctAnswer: 'Wa' },
      { question: 'Saat membayar di toko, cara yang paling sopan adalah...', options: ['Memberikan uang langsung ke tangan kasir', 'Meletakkan uang di atas meja', 'Meletakkan uang di nampan yang disediakan', 'Melemparkan uang ke kasir'], correctAnswer: 'Meletakkan uang di nampan yang disediakan' },
      { question: 'Jenis Keigo yang menggunakan bentuk ～です dan ～ます disebut...', options: ['Sonkeigo', 'Kenjougo', 'Teineigo', 'Futsuugo'], correctAnswer: 'Teineigo' },
      { question: 'Jika Anda berbicara TENTANG tindakan atasan Anda, Anda harus menggunakan...', options: ['Sonkeigo', 'Kenjougo', 'Teineigo', 'Bahasa kasual'], correctAnswer: 'Sonkeigo' },
      { question: 'Kata 「参ります」 (mairimasu) adalah contoh dari...', options: ['Sonkeigo', 'Kenjougo', 'Teineigo', 'Kata kerja biasa'], correctAnswer: 'Kenjougo' },
      { question: 'Tindakan apa yang dianggap sangat tidak sopan dilakukan di dalam kereta di Jepang?', options: ['Membaca buku', 'Mendengarkan musik dengan headphone', 'Berbicara keras di telepon', 'Tidur'], correctAnswer: 'Berbicara keras di telepon' },
      { question: 'Kata "irasshaimasu" (いらっしゃいます) yang merupakan bentuk hormat dari "imasu" (ada) adalah contoh dari...', options: ['Sonkeigo', 'Kenjougo', 'Teineigo', 'Futsuugo'], correctAnswer: 'Sonkeigo'},
      { question: 'Kapan Anda menggunakan Kenjougo (bahasa rendah hati)?', options: ['Saat berbicara tentang teman Anda', 'Saat berbicara tentang diri sendiri kepada orang yang dihormati', 'Saat berbicara dengan adik Anda', 'Saat berbicara tentang cuaca'], correctAnswer: 'Saat berbicara tentang diri sendiri kepada orang yang dihormati'}
    ],
    vocabulary: [
        { japanese: '内', romaji: 'uchi', indonesian: 'Dalam (kelompok sendiri)' },
        { japanese: '外', romaji: 'soto', indonesian: 'Luar (kelompok lain)' },
        { japanese: '名刺交換', romaji: 'meishi koukan', indonesian: 'Pertukaran Kartu Nama' },
    ],
    minimalPairs: [
        { options: ['うち', 'うし'], romaji: ['uchi (dalam/rumah)', 'ushi (sapi)'], correctAnswer: 'うち' },
        { options: ['そと', 'もっと'], romaji: ['soto (luar)', 'motto (lebih)'], correctAnswer: 'そと' },
        { options: ['めいし', 'いし'], romaji: ['meishi (kartu nama)', 'ishi (batu)'], correctAnswer: 'めいし' }
    ]
  };