import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-vocab-2',
    level: 'N4',
    title: 'Kosakata N4: Hobi, Perjalanan & Alam',
    description: 'Perkaya percakapan Anda dengan kosakata seputar hobi, perjalanan, dan alam.',
    xp: 200,
    content: `
      <h1>Kosakata N4: Hobi, Perjalanan & Alam</h1>
      <p>Mari perluas kemampuan Anda untuk berbicara tentang kegiatan di waktu luang, merencanakan perjalanan, dan mendeskripsikan lingkungan sekitar.</p>
      
      <h2>Hobi & Waktu Luang (趣味 - shumi)</h2>
      <ul>
        <li><strong>趣味 (shumi)</strong> - hobi. <em>Contoh: 私の趣味は読書です (Watashi no shumi wa dokusho desu) - Hobi saya adalah membaca.</em></li>
        <li><strong>絵 (e)</strong> - gambar/lukisan. <em>Contoh: 絵を描くのが好きです (E o kaku no ga suki desu) - Saya suka menggambar.</em></li>
        <li><strong>写真 (shashin)</strong> - foto. <em>Contoh: 写真を撮ってもいいですか (Shashin o totte mo ii desu ka) - Bolehkah saya mengambil foto?</em></li>
        <li><strong>音楽 (ongaku)</strong> - musik</li>
        <li><strong>散歩 (sanpo)</strong> - jalan-jalan santai. <em>Contoh: 公園を散歩します (Kouen o sanpo shimasu) - Jalan-jalan di taman.</em></li>
      </ul>
      
      <h2>Perjalanan & Transportasi (旅行 - ryokou)</h2>
      <ul>
        <li><strong>空港 (kuukou)</strong> - bandara</li>
        <li><strong>地図 (chizu)</strong> - peta. <em>Contoh: 地図を見てください (Chizu o mite kudasai) - Tolong lihat petanya.</em></li>
        <li><strong>予約 (yoyaku)</strong> - reservasi/pemesanan. <em>Contoh: ホテルを予約しました (Hoteru o yoyaku shimashita) - Saya sudah memesan hotel.</em></li>
        <li><strong>荷物 (nimotsu)</strong> - bagasi/barang bawaan</li>
        <li><strong>旅館 (ryokan)</strong> - penginapan gaya Jepang</li>
      </ul>
      
      <h2>Alam & Geografi (自然 - shizen)</h2>
      <ul>
        <li><strong>海 (umi)</strong> - laut</li>
        <li><strong>山 (yama)</strong> - gunung</li>
        <li><strong>川 (kawa)</strong> - sungai</li>
        <li><strong>森 (mori)</strong> - hutan</li>
        <li><strong>湖 (mizuumi)</strong> - danau</li>
        <li><strong>島 (shima)</strong> - pulau</li>
      </ul>
    `,
    audioScript: 'Kosakata kali ini tentang hobi dan perjalanan. "Shumi" adalah hobi. "Shashin" adalah foto. Saat bepergian, Anda akan ke "kuukou" (bandara) dan membawa "nimotsu" (bagasi). Kita juga belajar kata-kata alam seperti "umi" (laut) dan "mori" (hutan).',
    quiz: [
      { question: 'Apa bahasa Jepangnya "bandara"?', options: ['くうこう', 'ちず', 'よやく', 'にもつ'], correctAnswer: 'くうこう' },
      { question: 'Kata "shumi" (趣味) memiliki arti...', options: ['Foto', 'Musik', 'Hobi', 'Gambar'], correctAnswer: 'Hobi' },
      { question: 'Jika Anda ingin memesan kamar hotel, kata yang digunakan adalah...', options: ['さんぽ (sanpo)', 'よやく (yoyaku)', 'しゃしん (shashin)', 'おんがく (ongaku)'], correctAnswer: 'よやく (yoyaku)' },
      { question: 'Apa arti dari 「森」 (mori)?', options: ['Danau', 'Pulau', 'Hutan', 'Sungai'], correctAnswer: 'Hutan' },
      { question: 'Jalan-jalan santai di taman disebut...', options: ['りょこう (ryokou)', 'うんどう (undou)', 'かいもの (kaimono)', 'さんぽ (sanpo)'], correctAnswer: 'さんぽ (sanpo)' },
      { question: 'Barang bawaan atau bagasi disebut...', options: ['にもつ (nimotsu)', 'てがみ (tegami)', 'どうぐ (dougu)', 'かし (kashi)'], correctAnswer: 'にもつ (nimotsu)' },
      { question: 'Penginapan tradisional gaya Jepang adalah...', options: ['ホテル (hoteru)', 'アパート (apaato)', 'りょかん (ryokan)', 'マンション (manshon)'], correctAnswer: 'りょかん (ryokan)' },
      { question: '「湖」 (mizuumi) berarti...', options: ['Laut', 'Sungai', 'Danau', 'Kolam'], correctAnswer: 'Danau' },
      { question: 'Untuk mengatakan "Saya suka mengambil foto", kalimat yang tepat adalah...', options: ['写真が好きです', '絵が好きです', '音楽が好きです', '散歩が好きです'], correctAnswer: '写真が好きです' },
      { question: '「地図」 (chizu) adalah...', options: ['Jadwal', 'Tiket', 'Peta', 'Kamus'], correctAnswer: 'Peta' },
    ]
  };