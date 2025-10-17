import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-listening-2',
    level: 'N3',
    title: 'Latihan Mendengar N3: Pengumuman Toko',
    description: 'Dengarkan pengumuman di sebuah department store dan pahami informasi pentingnya.',
    xp: 250,
    content: `
      <h1>Latihan Pemahaman Mendengarkan (聴解 - Choukai)</h1>
      <p>Pengumuman di tempat umum seringkali menggunakan bahasa yang sedikit formal (Keigo) dan diucapkan dengan cepat. Latihan ini akan membantu Anda terbiasa menangkap informasi penting dalam situasi seperti itu.</p>
      
      <h2>Skenario: Pengumuman Anak Hilang</h2>
      <p>Anda sedang berada di sebuah department store dan mendengar pengumuman berikut melalui pengeras suara. Coba tangkap detail tentang anak yang hilang.</p>

      <h3>Kosakata Kunci:</h3>
      <ul>
        <li><strong>迷子 (maigo):</strong> Anak hilang</li>
        <li><strong>お知らせいたします (oshirase itashimasu):</strong> Kami akan menginformasikan (Kenjougo)</li>
        <li><strong>服装 (fukusou):</strong> Pakaian</li>
        <li><strong>心当たりのある方 (kokoroatari no aru kata):</strong> Bagi yang merasa kenal/tahu</li>
        <li><strong>インフォメーションカウンター (infomeeshon kauntaa):</strong> Meja informasi</li>
      </ul>
    `,
    audioScript: 'Ini adalah latihan mendengar pengumuman anak hilang di department store. Dengarkan baik-baik ciri-ciri anak tersebut dan apa yang harus dilakukan jika Anda menemukannya.',
    listeningSituation: {
      title: 'Pengumuman Anak Hilang',
      japaneseText: `「お客様にお知らせいたします。迷子のお知らせです。赤い帽子をかぶり、青いシャツを着た、５歳くらいの男の子が、お母様を探しております。お心当たりのある方は、１階のインフォメーションカウンターまでお越しください。」`,
      indonesianText: `「Kami informasikan kepada para pelanggan. Pengumuman anak hilang. Seorang anak laki-laki berusia sekitar 5 tahun, yang mengenakan topi merah dan kemeja biru, sedang mencari ibunya. Bagi yang merasa mengenali ciri-ciri tersebut, silakan datang ke meja informasi di lantai 1.」`,
      audioScript: 'お客様にお知らせいたします。迷子のお知らせです。赤い帽子をかぶり、青いシャツを着た、５歳くらいの男の子が、お母様を探しております。お心当たりのある方は、１階のインフォメーションカウンターまでお越しください。'
    },
    quiz: [
      { 
        question: 'Siapa yang dicari dalam pengumuman ini?', 
        options: ['Seorang ibu', 'Seorang anak laki-laki', 'Seorang anak perempuan', 'Seorang pegawai toko'], 
        correctAnswer: 'Seorang anak laki-laki' 
      },
      { 
        question: 'Apa warna topi yang dikenakan anak tersebut?', 
        options: ['Biru', 'Putih', 'Kuning', 'Merah'], 
        correctAnswer: 'Merah' 
      },
      { 
        question: 'Jika Anda menemukan anak tersebut, ke mana Anda harus pergi?', 
        options: ['Lantai 5', 'Pintu keluar', 'Kantor polisi', 'Meja informasi di lantai 1'], 
        correctAnswer: 'Meja informasi di lantai 1' 
      }
    ],
    vocabulary: [
        { japanese: '迷子', romaji: 'maigo', indonesian: 'Anak hilang' },
        { japanese: '服装', romaji: 'fukusou', indonesian: 'Pakaian' },
        { japanese: '心当たり', romaji: 'kokoroatari', indonesian: 'Mengenali / Punya ide' },
    ],
    minimalPairs: [
      { options: ['ぼうし', 'ほうし'], romaji: ['boushi (topi)', 'houshi (pelayanan)'], correctAnswer: 'ぼうし' }
    ]
  };