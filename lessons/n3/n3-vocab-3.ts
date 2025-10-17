import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-vocab-3',
    level: 'N3',
    title: 'Kosakata N3: Perasaan & Hubungan Manusia',
    description: 'Pelajari kata-kata untuk mengekspresikan perasaan dan mendeskripsikan hubungan antar manusia.',
    xp: 250,
    content: `
      <h1>Kosakata N3: Perasaan & Hubungan Manusia</h1>
      <p>Memahami kosakata ini akan memungkinkan Anda untuk berbicara tentang hubungan interpersonal dan perasaan dengan nuansa yang lebih dalam.</p>
      
      <h2>Perasaan & Kondisi Mental</h2>
      <ul>
        <li><strong>満足 (manzoku)</strong> - kepuasan. <em>Contoh: 結果に満足しています。(Kekka ni manzoku shiteimasu.) - Saya puas dengan hasilnya.</em></li>
        <li><strong>不安 (fuan)</strong> - kecemasan, kegelisahan. <em>Contoh: 将来に不安を感じる。(Shourai ni fuan o kanjiru.) - Merasa cemas tentang masa depan.</em></li>
        <li><strong>緊張 (kinchou)</strong> - ketegangan, kegugupan. <em>Contoh: スピーチの前はいつも緊張します。(Supiichi no mae wa itsumo kinchou shimasu.) - Saya selalu gugup sebelum pidato.</em></li>
        <li><strong>がっかりする (gakkari suru)</strong> - kecewa.</li>
      </ul>
      
      <h2>Hubungan Antar Manusia</h2>
      <ul>
        <li><strong>尊敬 (sonkei)</strong> - rasa hormat. <em>Contoh: 私は両親を尊敬しています。(Watashi wa ryoushin o sonkei shiteimasu.) - Saya menghormati orang tua saya.</em></li>
        <li><strong>信頼 (shinrai)</strong> - kepercayaan. <em>Contoh: 彼を信頼できます。(Kare o shinrai dekimasu.) - Saya bisa mempercayai dia.</em></li>
        <li><strong>先輩 (senpai)</strong> - senior ↔ <strong>後輩 (kouhai)</strong> - junior.</li>
        <li><strong>関係 (kankei)</strong> - hubungan. <em>Contoh: 私たちの関係は良好です。(Watashitachi no kankei wa ryoukou desu.) - Hubungan kami baik.</em></li>
      </ul>
    `,
    audioScript: 'Kosakata N3 kali ini tentang perasaan. "Manzoku" adalah puas, "fuan" adalah cemas. Dalam hubungan, "sonkei" berarti hormat, dan "shinrai" berarti kepercayaan. Anda juga akan belajar perbedaan antara "senpai" dan "kouhai".',
    listeningSituation: {
      title: 'Situasi: Diskusi Antar Rekan Kerja',
      japaneseText: `A: 先輩、新しいプロジェクト、不安でいっぱいです。
B: 大丈夫だよ。私も最初はそうだった。何かあったら、いつでも相談して。君を信頼しているから。
A: ありがとうございます。がんばります！`,
      indonesianText: `A: Senior, saya sangat cemas dengan proyek baru ini.
B: Tidak apa-apa. Saya juga begitu pada awalnya. Kalau ada apa-apa, konsultasi saja kapan pun. Karena saya percaya padamu.
A: Terima kasih banyak. Saya akan berusaha!`,
      audioScript: 'A: 先輩、新しいプロジェクト、不安でいっぱいです。 B: 大丈夫だよ。私も最初はそうだった。何かあったら、いつでも相談して。君を信頼しているから。 A: ありがとうございます。がんばります！'
    },
    quiz: [
      { question: 'Apa arti dari 「満足」 (manzoku)?', options: ['Kekecewaan', 'Kepuasan', 'Kecemasan', 'Ketegangan'], correctAnswer: 'Kepuasan' },
      { question: 'Seseorang yang lebih tua atau lebih berpengalaman di sekolah atau tempat kerja disebut...', options: ['こうはい (kouhai)', 'せんぱい (senpai)', 'ともだち (tomodachi)', 'かぞく (kazoku)'], correctAnswer: 'せんぱい (senpai)' },
      { question: 'Jika Anda merasa gugup sebelum presentasi, kata yang tepat adalah...', options: ['不安 (fuan)', '満足 (manzoku)', '緊張 (kinchou)', 'がっかり (gakkari)'], correctAnswer: '緊張 (kinchou)' },
    ],
    vocabulary: [
        { japanese: '満足', romaji: 'manzoku', indonesian: 'Kepuasan' },
        { japanese: '不安', romaji: 'fuan', indonesian: 'Kecemasan, Kegelisahan' },
        { japanese: '緊張', romaji: 'kinchou', indonesian: 'Ketegangan, Kegugupan' },
        { japanese: '尊敬', romaji: 'sonkei', indonesian: 'Rasa Hormat' },
        { japanese: '信頼', romaji: 'shinrai', indonesian: 'Kepercayaan' },
        { japanese: '先輩', romaji: 'senpai', indonesian: 'Senior' },
    ],
    minimalPairs: [
      { options: ['ふあん', 'ファン'], romaji: ['fuan (cemas)', 'fan (penggemar)'], correctAnswer: 'ふあん' },
      { options: ['かんけい', 'かんげい'], romaji: ['kankei (hubungan)', 'kangei (sambutan)'], correctAnswer: 'かんけい' }
    ]
  };