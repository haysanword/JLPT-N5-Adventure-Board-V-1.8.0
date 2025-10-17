import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-kanji-2',
    level: 'N3',
    title: 'Kanji N3: Konsep Abstrak & Alam',
    description: 'Pelajari kanji untuk ide, perasaan, dan elemen alam yang lebih kompleks.',
    xp: 260,
    content: `
      <h1>Kanji N3: Konsep Abstrak & Alam</h1>
      <p>Di bagian ini, kita akan fokus pada kanji yang membantu Anda mengekspresikan ide-ide yang tidak berwujud serta mendeskripsikan alam dengan lebih detail.</p>
      
      <h2>Kategori: Konsep & Kualitas Abstrak</h2>
      <p>Kanji ini sering digunakan untuk membentuk kata sifat dan kata benda yang kompleks.</p>
      <table>
        <tr><td>然 (zen/shika) - alami/begitu</td><td>幸 (kou/shiawa) - kebahagiaan</td><td>悲 (hi/kana) - kesedihan</td></tr>
        <tr><td>苦 (ku/kuru) - penderitaan</td><td>愛 (ai) - cinta</td><td>絶対 (zettai) - absolut/pasti</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 自然 (shizen - alam), 幸福 (koufuku - kebahagiaan), 悲劇 (higeki - tragedi), 苦労 (kurou - kesulitan), 愛情 (aijou - kasih sayang)</p>
      
      <h2>Kategori: Elemen Alam & Lingkungan</h2>
      <p>Kanji untuk mendeskripsikan lingkungan Anda dengan lebih kaya.</p>
      <table>
        <tr><td>緑 (ryoku/midori) - hijau</td><td>空 (kuu/sora) - langit/kosong</td><td>港 (kou/minato) - pelabuhan</td></tr>
        <tr><td>環境 (kankyou) - lingkungan</td><td>公 (kou/ooyake) - publik</td><td>園 (en/sono) - taman</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 緑茶 (ryokucha - teh hijau), 空気 (kuuki - udara), 空港 (kuukou - bandara), 公園 (kouen - taman publik)</p>
      
      <h2>Kategori: Tindakan & Perubahan</h2>
      <p>Kanji yang sering ditemukan dalam kata kerja yang menunjukkan perubahan atau interaksi.</p>
      <table>
        <tr><td>変 (hen/ka) - aneh/berubah</td><td>選 (sen/era) - memilih</td><td>直 (choku/nao) - langsung/memperbaiki</td></tr>
        <tr><td>残 (zan/noko) - sisa</td><td>続く (tsuzuku) - berlanjut</td><td>比べる (kuraberu) - membandingkan</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 変更 (henkou - perubahan), 大変 (taihen - gawat/sulit), 選挙 (senkyo - pemilu), 直す (naosu - memperbaiki), 残業 (zangyou - lembur)</p>
    `,
    audioScript: 'Kanji N3 kali ini membahas konsep abstrak. Misalnya, 自 (ji) dan 然 (zen) menjadi 自然 (shizen) atau alam. 空 (kuu) dan 気 (ki) menjadi 空気 (kuuki) atau udara. 残 (zan) dan 業 (gyou) menjadi 残業 (zangyou) atau lembur.',
    listeningSituation: {
      title: 'Situasi: Di Taman',
      japaneseText: `A: この公園は空気がきれいですね。緑も多くて。
B: 本当ですね。都会の中なのに、とても自然を感じます。
A: ええ、だから散歩するのに最適な場所だと思います。`,
      indonesianText: `A: Udara di taman ini bersih ya. Hijaunya juga banyak.
B: Benar sekali ya. Meskipun di tengah kota, rasanya sangat alami.
A: Iya, karena itu saya pikir ini adalah tempat yang paling pas untuk jalan-jalan.`,
      audioScript: 'A: この公園は空気がきれいですね。緑も多くて。 B: 本当ですね。都会の中なのに、とても自然を感じます。 A: ええ、だから散歩するのに最適な場所だと思います。'
    },
    quiz: [
      { question: 'Gabungan kanji 「自然」 dibaca...', options: ['じねん (jinen)', 'しぜん (shizen)', 'じぜん (jizen)', 'しねん (shinen)'], correctAnswer: 'しぜん (shizen)' },
      { question: 'Kanji 「残業」 (zangyou) berarti...', options: ['Sisa makanan', 'Lembur', 'Gaji sisa', 'Hari libur'], correctAnswer: 'Lembur' },
      { question: 'Apa arti dari 「選ぶ」 (erabu)?', options: ['Mengubah', 'Memperbaiki', 'Memilih', 'Membandingkan'], correctAnswer: 'Memilih' },
      { question: 'Jukugo 「空港」 (kuukou) adalah gabungan dari kanji 空 (langit/kosong) dan...', options: ['港 (pelabuhan)', '園 (taman)', '続く (berlanjut)', '然 (alami)'], correctAnswer: '港 (pelabuhan)' },
      { question: 'Kata 「大変」 (taihen) berarti...', options: ['Perubahan besar', 'Aneh', 'Sangat mudah', 'Gawat/Sangat sulit'], correctAnswer: 'Gawat/Sangat sulit' }
    ],
    vocabulary: [
        { japanese: '自然', romaji: 'shizen', indonesian: 'Alam' },
        { japanese: '幸福', romaji: 'koufuku', indonesian: 'Kebahagiaan' },
        { japanese: '空気', romaji: 'kuuki', indonesian: 'Udara' },
        { japanese: '残業', romaji: 'zangyou', indonesian: 'Lembur' },
        { japanese: '選ぶ', romaji: 'erabu', indonesian: 'Memilih' }
    ],
    minimalPairs: [
      { options: ['そら', 'それ'], romaji: ['sora (langit)', 'sore (itu)'], correctAnswer: 'そら' },
      { options: ['くうき', 'くき'], romaji: ['kuuki (udara)', 'kuki (batang)'], correctAnswer: 'くうき' },
      { options: ['えらぶ', 'ならぶ'], romaji: ['erabu (memilih)', 'narabu (berbaris)'], correctAnswer: 'えらぶ' }
    ]
  };