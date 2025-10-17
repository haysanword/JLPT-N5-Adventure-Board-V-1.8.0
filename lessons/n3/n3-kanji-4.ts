import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-kanji-4',
    level: 'N3',
    title: 'Kanji N3: Masyarakat & Konsep',
    description: 'Pelajari kanji yang berhubungan dengan politik, ekonomi, hukum, dan konsep-konsep sosial lainnya.',
    xp: 260,
    content: `
      <h1>Kanji N3: Masyarakat & Konsep</h1>
      <p>Kanji-kanji ini adalah kunci untuk membaca berita, artikel, dan memahami diskusi tentang isu-isu sosial.</p>
      
      <h2>Kategori: Politik & Hukum</h2>
      <table>
        <tr><td>政 (sei) - politik</td><td>府 (fu) - pemerintah</td></tr>
        <tr><td>法 (hou) - hukum</td><td>律 (ritsu) - aturan</td></tr>
        <tr><td>民 (min) - rakyat</td><td>主 (shu/nushi) - utama/pemilik</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 政府 (seifu - pemerintah), 政治 (seiji - politik), 法律 (houritsu - hukum), 民主主義 (minshushugi - demokrasi), 国民 (kokumin - warga negara)</p>
      
      <h2>Kategori: Ekonomi & Bisnis</h2>
      <table>
        <tr><td>経 (kei) - mengelola/lulus</td><td>済 (sai/sumu) - selesai/membantu</td></tr>
        <tr><td>営 (ei) - mengelola/menjalankan</td><td>資 (shi) - sumber daya/modal</td></tr>
        <tr><td>増 (zou/ma) - meningkat</td><td>減 (gen/he) - menurun</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 経済 (keizai - ekonomi), 経営 (keiei - manajemen), 資本 (shihon - modal), 増加 (zouka - peningkatan), 減少 (genshou - penurunan)</p>
    `,
    audioScript: 'Kanji N3 kali ini tentang masyarakat. 政 (sei) dan 治 (ji) menjadi 政治 (seiji) atau politik. 経 (kei) dan 済 (sai) menjadi 経済 (keizai) atau ekonomi. 増 (zou) berarti meningkat, dan 減 (gen) berarti menurun.',
    listeningSituation: {
      title: 'Situasi: Cuplikan Berita Ekonomi',
      japaneseText: `政府の発表によると、今月の輸出は増加しましたが、輸入は減少したとのことです。専門家は、今後の経済への影響を分析しています。`,
      indonesianText: `Menurut pengumuman pemerintah, ekspor bulan ini mengalami peningkatan, namun impor mengalami penurunan. Para ahli sedang menganalisis dampaknya terhadap ekonomi di masa depan.`,
      audioScript: '政府の発表によると、今月の輸出は増加しましたが、輸入は減少したとのことです。専門家は、今後の経済への影響を分析しています。'
    },
    quiz: [
      { question: 'Gabungan kanji 「経済」 dibaca...', options: ['けいざい', 'けいさい', 'きょうざい', 'きょうさい'], correctAnswer: 'けいざい' },
      { question: 'Apa arti dari 「法律」 (houritsu)?', options: ['Manajemen', 'Politik', 'Hukum/Undang-undang', 'Demokrasi'], correctAnswer: 'Hukum/Undang-undang' },
      { question: 'Lawan kata dari 「増加」 (zouka - peningkatan) adalah...', options: ['経営 (keiei)', '資本 (shihon)', '減少 (genshou)', '政治 (seiji)'], correctAnswer: '減少 (genshou)' },
    ],
    vocabulary: [
        { japanese: '政府', romaji: 'seifu', indonesian: 'Pemerintah' },
        { japanese: '法律', romaji: 'houritsu', indonesian: 'Hukum / Undang-undang' },
        { japanese: '経済', romaji: 'keizai', indonesian: 'Ekonomi' },
        { japanese: '経営', romaji: 'keiei', indonesian: 'Manajemen' },
        { japanese: '増加', romaji: 'zouka', indonesian: 'Peningkatan' },
        { japanese: '減少', romaji: 'genshou', indonesian: 'Penurunan' },
    ],
    minimalPairs: [
      { options: ['せいじ', 'せいじ'], romaji: ['seiji (politik)', 'seiji (nama orang)'], correctAnswer: 'せいじ' }
    ]
  };