import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-gr-2',
    level: 'N4',
    title: 'Tata Bahasa: Memberi & Menerima Jasa',
    description: 'Pelajari ～てあげる, ～てくれる, dan ～てもらう untuk membicarakan aksi yang dilakukan untuk orang lain.',
    xp: 250,
    content: `
      <h1>Memberi dan Menerima Jasa: ～てあげる, ～てくれる, ～てもらう</h1>
      <p>Ini adalah perluasan dari konsep あげる, くれる, dan もらう yang telah Anda pelajari untuk benda. Sekarang, kita menggunakannya untuk "jasa" atau "tindakan". Aturan arahnya (uchi-soto) tetap sama!</p>
      
      <h2>1. ～てあげる (te ageru) - Melakukan Sesuatu untuk Orang Lain (Arah: Keluar)</h2>
      <p>Gunakan pola ini ketika <strong>Anda</strong> (atau kelompok Anda) melakukan sesuatu <strong>untuk</strong> orang lain. Ini menunjukkan niat baik dari si pelaku.</p>
      <p><strong>Pola:</strong> <code>[Pelaku] は [Penerima] に [Kata Kerja bentuk Te] + あげます。</code></p>
      <ul>
        <li><strong>Contoh:</strong> 私は ともだち<strong>に</strong> ほんを <strong>かしてあげました</strong>。(Watashi wa tomodachi <strong>ni</strong> hon o <strong>kashite agemashita</strong>.) - Saya meminjamkan buku kepada teman.</li>
        <li><strong>Contoh:</strong> あなたが しゃしんを <strong>とってあげましょうか</strong>。(Anata ga shashin o <strong>totte agemashou ka</strong>?) - Maukah saya fotokan untuk Anda?</li>
      </ul>
      <p><strong>Peringatan:</strong> Jangan gunakan ～てあげる kepada atasan atau orang yang lebih tua karena bisa terdengar sombong, seolah-olah Anda menganggap tindakan Anda sebagai sebuah "kebaikan".</p>

      <h2>2. ～てくれる (te kureru) - Orang Lain Melakukan untuk Saya (Arah: Masuk)</h2>
      <p>Gunakan pola ini ketika <strong>orang lain</strong> melakukan sesuatu <strong>untuk Anda</strong> (atau kelompok Anda). Ini mengandung nuansa rasa terima kasih dari Anda sebagai penerima jasa.</p>
      <p><strong>Pola:</strong> <code>[Pelaku] が/は (私に) [Kata Kerja bentuk Te] + くれます。</code></p>
      <ul>
        <li><strong>Contoh:</strong> ともだち<strong>が</strong> (私に) にほんごを <strong>おしえてくれました</strong>。(Tomodachi <strong>ga</strong> (watashi ni) Nihongo o <strong>oshiete kuremashita</strong>.) - Teman (berbaik hati) mengajarkan bahasa Jepang kepada saya.</li>
        <li><strong>Contoh:</strong> せんせい<strong>が</strong> ほんを <strong>かしてくださいました</strong>。(Sensei <strong>ga</strong> hon o <strong>kashite kudasaimashita</strong>.) - Guru (dengan hormat) meminjamkan buku kepada saya. (<code>kudasaimasu</code> adalah bentuk hormat).</li>
      </ul>

      <h2>3. ～てもらう (te morau) - Saya Menerima Jasa dari Orang Lain</h2>
      <p>Gunakan pola ini dari sudut pandang <strong>penerima jasa</strong>. Anda fokus pada fakta bahwa Anda "mendapatkan" seseorang untuk melakukan sesuatu untuk Anda. Ini sering digunakan saat Anda yang meminta bantuan.</p>
      <p><strong>Pola:</strong> <code>[Penerima] は [Pelaku] に [Kata Kerja bentuk Te] + もらいます。</code></p>
      <ul>
        <li><strong>Contoh:</strong> 私は ともだち<strong>に</strong> しゅくだいを <strong>てつだってもらいました</strong>。(Watashi wa tomodachi <strong>ni</strong> shukudai o <strong>tetsudatte moraimashita</strong>.) - Saya dibantu mengerjakan PR oleh teman. (Secara harfiah: Saya menerima jasa bantuan PR dari teman).</li>
        <li><strong>Contoh:</strong> びょういんで いしゃ<strong>に</strong> みて<strong>もらいました</strong>。(Byouin de isha <strong>ni</strong> mite <strong>moraimashita</strong>.) - Saya diperiksa oleh dokter di rumah sakit.</li>
      </ul>
    `,
    audioScript: 'Ini adalah versi tindakan dari memberi dan menerima. Te-ageru artinya melakukan untuk orang lain. Te-kureru artinya orang lain melakukan untuk kita. Te-morau artinya kita menerima jasa dari orang lain.',
    listeningSituation: {
      title: 'Cerita Pendek: Rencana Membalas Budi',
      japaneseText: `「昨日、田中さんにレポートをチェックしてもらった。とても助かった。お礼に、今度、昼ご飯をおごってあげようと思う。田中さんはカレーが好きだから、駅の前の新しいカレー屋がいいかな。」`,
      indonesianText: `"Kemarin, saya meminta Tanaka-san memeriksa laporan saya. Itu sangat membantu. Sebagai tanda terima kasih, saya berpikir untuk mentraktirnya makan siang lain kali. Tanaka-san suka kari, jadi mungkin restoran kari baru di depan stasiun bagus ya."`,
      audioScript: '昨日、田中さんにレポートをチェックしてもらった。とても助かった。お礼に、今度、昼ご飯をおごってあげようと思う。田中さんはカレーが好きだから、駅の前の新しいカレー屋がいいかな。'
    },
    quiz: [
      { question: 'Lengkapi kalimat: "Saya membelikan tiket untuk teman." (私は 友達に きっぷを ___。)', options: ['買ってあげました', '買ってもらいました', '買ってくれました', '買ってくださいました'], correctAnswer: '買ってあげました' },
      { question: 'Kalimat "Teman mengajari saya kanji" paling alami diungkapkan dengan...', options: ['ともだちが かんじを おしえてあげました。', 'ともだちが かんじを おしえてもらいました。', 'ともだちが かんじを おしえてくれました。', 'わたしは ともだちに かんじを おしえてあげました。'], correctAnswer: 'ともだちが かんじを おしえてくれました。' },
      { question: 'Anda meminta seseorang mengambilkan foto. Setelah itu, Anda berkata, "Saya difoto oleh Tanaka-san." Kalimat yang tepat adalah...', options: ['田中さんに 写真を 撮ってあげました。', '田中さんに 写真を 撮ってもらいました。', '田中さんが 写真を 撮ってくれました。', '田中さんに 写真を 撮らせました。'], correctAnswer: '田中さんに 写真を 撮ってもらいました。' },
      { question: 'Pola 「～てくれる」 digunakan saat...', options: ['Anda melakukan sesuatu untuk orang lain', 'Orang lain melakukan sesuatu untuk Anda', 'Anda menerima sesuatu dari orang lain', 'Anda menyuruh orang lain melakukan sesuatu'], correctAnswer: 'Orang lain melakukan sesuatu untuk Anda' },
      { question: 'Mana kalimat yang terdengar tidak sopan jika diucapkan kepada atasan?', options: ['てつだってください。', 'てつだっていただけませんか。', 'てつだってあげましょうか。', 'てつだってもらえませんか。'], correctAnswer: 'てつだってあげましょうか。' },
      { question: 'Situasi: Adik Anda sakit. Anda membuatkannya bubur. Kalimat mana yang paling tepat untuk menggambarkan tindakan Anda?', options: ['弟に おかゆを 作ってもらいました。', '弟が おかゆを 作ってくれました。', '弟に おかゆを 作ってあげました。'], correctAnswer: '弟に おかゆを 作ってあげました。' }
    ],
    vocabulary: [
        { japanese: '～てあげます', romaji: 'te agemasu', indonesian: 'Melakukan (untuk orang lain)' },
        { japanese: '～てくれます', romaji: 'te kuremasu', indonesian: '(Orang lain) melakukan (untuk saya)' },
        { japanese: '～てもらいます', romaji: 'te moraimasu', indonesian: 'Menerima jasa (dari orang lain)' },
        { japanese: '手伝います (てつだいます)', romaji: 'tetsudaimasu', indonesian: 'Membantu' },
        { japanese: '教えます (おしえます)', romaji: 'oshiemasu', indonesian: 'Mengajar, Memberi tahu' },
    ],
    minimalPairs: [
      { options: ['あげる', 'あける'], romaji: ['ageru (memberi)', 'akeru (membuka)'], correctAnswer: 'あげる' },
      { options: ['もらう', 'わらう'], romaji: ['morau (menerima)', 'warau (tertawa)'], correctAnswer: 'もらう' },
      { options: ['くれる', 'くろい'], romaji: ['kureru (memberi ke saya)', 'kuroi (hitam)'], correctAnswer: 'くれる' },
      { options: ['かす', 'たつ'], romaji: ['kasu (meminjamkan)', 'tatsu (berdiri)'], correctAnswer: 'かす' },
      { options: ['おしえる', 'おくれる'], romaji: ['oshieru (mengajar)', 'okureru (terlambat)'], correctAnswer: 'おしえる' },
    ]
  };