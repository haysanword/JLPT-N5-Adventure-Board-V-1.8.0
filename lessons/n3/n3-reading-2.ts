import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-reading-2',
    level: 'N3',
    title: 'Latihan Membaca N3: Blog Perjalanan',
    description: 'Baca sebuah entri blog singkat tentang perjalanan ke Kyoto dan pahami kesan penulis.',
    xp: 270,
    content: `
      <h1>Membaca Blog Singkat: Perjalanan ke Kyoto</h1>
      <p>Blog adalah jenis tulisan yang umum dijumpai. Biasanya menggunakan gaya bahasa yang lebih santai (bentuk biasa) dan ekspresif. Mari kita baca entri blog dari seseorang yang baru saja berlibur.</p>
      
      <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; background-color: #f9f9f9; dark:bg-slate-800;">
        <h2>京都旅行の思い出</h2>
        <p>
        先日、初めて京都へ一人旅に行った。古いお寺やきれいな庭がたくさんあって、とても感動した。特に金閣寺は、写真で見るよりずっと美しくて、言葉が出なかった。
        </p>
        <p>
        食べ物も、もちろん最高だった。抹茶のデザートを色々食べたおかげで、少し太ったかもしれない。夜は、静かな旅館に泊まって、ゆっくり休むことができた。
        </p>
        <p>
        写真をたくさん撮りすぎたせいで、整理するのが大変そうだけど、本当にいい思い出になった。また絶対行きたい場所だ。
        </p>
      </div>
      
      <h2>Analisis Teks</h2>
      <p><strong>Paragraf 1:</strong><br/>
      "Beberapa hari yang lalu, untuk pertama kalinya aku pergi solo traveling ke Kyoto. Ada banyak kuil tua dan taman yang cantik, aku sangat terkesan. Terutama Kinkakuji, jauh lebih indah daripada yang kulihat di foto, aku sampai tidak bisa berkata-kata."</p>

      <p><strong>Paragraf 2:</strong><br/>
      "Makanannya, tentu saja, juga yang terbaik. Berkat makan berbagai macam dessert matcha, mungkin aku jadi sedikit gemuk. Malamnya, aku menginap di penginapan tradisional yang tenang dan bisa beristirahat dengan santai."</p>

      <p><strong>Paragraf 3:</strong><br/>
      "Gara-gara mengambil terlalu banyak foto, sepertinya akan repot untuk merapikannya, tapi ini benar-benar menjadi kenangan yang indah. Ini adalah tempat yang pasti ingin kukunjungi lagi."</p>

      <h2>Ekspresi Kunci N3:</h2>
      <ul>
        <li><strong>～よりずっと:</strong> Jauh lebih... daripada...</li>
        <li><strong>言葉が出なかった:</strong> Tidak bisa berkata-kata (saking takjubnya).</li>
        <li><strong>～おかげで:</strong> Berkat... (hasil positif)</li>
        <li><strong>～かもしれない:</strong> Mungkin...</li>
        <li><strong>～せいで:</strong> Gara-gara... (hasil negatif/merepotkan)</li>
        <li><strong>～そうだ (tampak):</strong> Tampaknya/kelihatannya...</li>
      </ul>
    `,
    audioScript: 'Ini adalah blog tentang perjalanan ke Kyoto. Penulis sangat terkesan dengan Kinkakuji. Dia juga menikmati banyak dessert matcha. Meskipun mengambil terlalu banyak foto membuatnya repot, perjalanan itu menjadi kenangan indah.',
    listeningSituation: {
      title: 'Situasi: Menceritakan Kembali Pengalaman',
      japaneseText: `A: この間の京都旅行、どうだった？
B: 最高だったよ！特に金閣寺には感動したなあ。
A: いいなあ。僕もいつか一人旅してみたいんだ。`,
      indonesianText: `A: Perjalanan ke Kyoto tempo hari bagaimana?
B: Luar biasa! Terutama Kinkakuji, aku sangat terkesan.
A: Asyik ya. Aku juga suatu saat nanti ingin coba solo traveling.`,
      audioScript: 'A: この間の京都旅行、どうだった？ B: 最高だったよ！特に金閣寺には感動したなあ。 A: いいなあ。僕もいつか一人旅してみたいんだ。'
    },
    quiz: [
      { question: 'Apa yang paling membuat penulis terkesan di Kyoto?', options: ['Makanannya', 'Penginapannya', 'Kuil Kinkakuji', 'Berbelanja'], correctAnswer: 'Kuil Kinkakuji' },
      { question: 'Mengapa penulis berpikir dia mungkin menjadi gemuk?', options: ['Karena makan terlalu banyak ramen', 'Karena makan berbagai macam dessert matcha', 'Karena tidak berolahraga', 'Karena terlalu banyak istirahat'], correctAnswer: 'Karena makan berbagai macam dessert matcha' },
      { question: 'Apa "masalah" kecil yang dihadapi penulis setelah perjalanan?', options: ['Dia kehilangan kameranya', 'Penginapannya mahal', 'Dia harus merapikan banyak sekali foto', 'Dia sakit perut'], correctAnswer: 'Dia harus merapikan banyak sekali foto' },
      { question: 'Bagaimana perasaan penulis secara keseluruhan tentang perjalanannya?', options: ['Mengecewakan', 'Biasa saja', 'Menjadi kenangan yang sangat indah', 'Melelahkan'], correctAnswer: 'Menjadi kenangan yang sangat indah' },
      { question: 'Frasa 「言葉が出なかった」 digunakan untuk mengekspresikan...', options: ['Kemarahan', 'Ketakutan', 'Rasa sangat takjub atau terkesan', 'Kesedihan'], correctAnswer: 'Rasa sangat takjub atau terkesan' }
    ],
    vocabulary: [
        { japanese: '先日 (せんじつ)', romaji: 'senjitsu', indonesian: 'Beberapa hari yang lalu (formal)' },
        { japanese: '一人旅 (ひとりたび)', romaji: 'hitoritabi', indonesian: 'Solo traveling' },
        { japanese: '感動する (かんどうする)', romaji: 'kandou suru', indonesian: 'Terkesan / Terharu' },
        { japanese: '特に (とくに)', romaji: 'toku ni', indonesian: 'Terutama' },
        { japanese: '整理する (せいりする)', romaji: 'seiri suru', indonesian: 'Merapikan / Mengorganisir' }
    ],
    minimalPairs: [
      { options: ['おもいで', 'おもたい'], romaji: ['omoide (kenangan)', 'omotai (berat)'], correctAnswer: 'おもいで' },
      { options: ['しゃしん', 'じしん'], romaji: ['shashin (foto)', 'jishin (gempa/percaya diri)'], correctAnswer: 'しゃしん' }
    ]
  };