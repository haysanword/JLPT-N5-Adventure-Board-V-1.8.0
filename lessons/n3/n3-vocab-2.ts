import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-vocab-2',
    level: 'N3',
    title: 'Kosakata N3: Masyarakat & Teknologi',
    description: 'Kosakata untuk berbicara tentang masyarakat modern, teknologi, dan isu-isu terkait.',
    xp: 250,
    content: `
      <h1>Kosakata N3: Masyarakat & Teknologi</h1>
      <p>Dengan kosakata ini, Anda bisa mulai memahami dan mendiskusikan topik-topik yang muncul di berita atau artikel online.</p>
      
      <h2>Masyarakat (社会 - shakai)</h2>
      <ul>
        <li><strong>社会 (shakai)</strong> - masyarakat. <em>Contoh: 日本の社会問題 (Nihon no shakai mondai) - Masalah sosial Jepang.</em></li>
        <li><strong>人口 (jinkou)</strong> - populasi. <em>Contoh: 東京の人口は多いです。(Tokyo no jinkou wa ooi desu.) - Populasi Tokyo banyak.</em></li>
        <li><strong>若者 (wakamono)</strong> - anak muda</li>
        <li><strong>教育 (kyouiku)</strong> - pendidikan</li>
        <li><strong>ルール (ruuru)</strong> - aturan (dari kata 'rule')</li>
      </ul>
      
      <h2>Teknologi (技術 - gijutsu)</h2>
      <ul>
        <li><strong>技術 (gijutsu)</strong> - teknologi/skill. <em>Contoh: 最新の技術 (saishin no gijutsu) - teknologi terbaru.</em></li>
        <li><strong>影響 (eikyou)</strong> - pengaruh/dampak. <em>Contoh: スマホは若者に大きな影響を与えます。(Sumaho wa wakamono ni ookina eikyou o ataemasu.) - Smartphone memberikan pengaruh besar pada anak muda.</em></li>
        <li><strong>発展 (hatten)</strong> - perkembangan. <em>Contoh: 技術の発展は速いです。(Gijutsu no hatten wa hayai desu.) - Perkembangan teknologi sangat cepat.</em></li>
        <li><strong>解決 (kaiketsu)</strong> - solusi/penyelesaian. <em>Contoh: 問題を解決する (Mondai o kaiketsu suru) - Menyelesaikan masalah.</em></li>
        <li><strong>利用 (riyou)</strong> - penggunaan/pemanfaatan. <em>Contoh: インターネットを利用する (intaanetto o riyou suru) - Menggunakan internet.</em></li>
      </ul>
    `,
    audioScript: 'Kosakata N3 ini tentang masyarakat dan teknologi. "Shakai" adalah masyarakat. "Gijutsu" adalah teknologi. "Eikyou" berarti pengaruh, dan "hatten" berarti perkembangan. "Kaiketsu" adalah solusi untuk sebuah "mondai" atau masalah.',
    listeningSituation: {
      title: 'Situasi: Diskusi tentang Teknologi',
      japaneseText: `A: 最近の技術の発展はすごいですね。
B: 本当に。特にスマートフォンの影響は大きいと思います。
A: ええ、でも、それが社会にいい影響だけを与えるわけではないのが問題ですね。`,
      indonesianText: `A: Perkembangan teknologi akhir-akhir ini luar biasa ya.
B: Benar sekali. Terutama menurut saya pengaruh smartphone sangat besar.
A: Iya, tapi masalahnya adalah hal itu tidak hanya memberikan dampak baik saja kepada masyarakat.`,
      audioScript: 'A: 最近の技術の発展はすごいですね。 B: 本当に。特にスマートフォンの影響は大きいと思います。 A: ええ、でも、それが社会にいい影響だけを与えるわけではないのが問題ですね。'
    },
    quiz: [
      { question: 'Apa bahasa Jepangnya "masyarakat"?', options: ['じんこう', 'きょういく', 'しゃかい', 'わかもの'], correctAnswer: 'しゃかい' },
      { question: 'Kata "eikyou" (影響) memiliki arti...', options: ['Perkembangan', 'Pengaruh/Dampak', 'Solusi', 'Pendidikan'], correctAnswer: 'Pengaruh/Dampak' },
      { question: 'Jika Anda ingin berbicara tentang "perkembangan teknologi", frasa yang tepat adalah...', options: ['技術の発展 (gijutsu no hatten)', '技術の解決 (gijutsu no kaiketsu)', '技術の影響 (gijutsu no eikyou)', '技術の利用 (gijutsu no riyou)'], correctAnswer: '技術の発展 (gijutsu no hatten)' },
      { question: 'Kata 「人口」 (jinkou) berarti...', options: ['Pintu masuk', 'Populasi', 'Mulut', 'Orang populer'], correctAnswer: 'Populasi' },
      { question: 'Untuk "menyelesaikan masalah", kata kerja yang paling tepat adalah...', options: ['問題を解決する (mondai o kaiketsu suru)', '問題を利用する (mondai o riyou suru)', '問題を発展する (mondai o hatten suru)', '問題に影響する (mondai ni eikyou suru)'], correctAnswer: '問題を解決する (mondai o kaiketsu suru)' }
    ],
    vocabulary: [
        { japanese: '社会', romaji: 'shakai', indonesian: 'Masyarakat' },
        { japanese: '技術', romaji: 'gijutsu', indonesian: 'Teknologi' },
        { japanese: '影響', romaji: 'eikyou', indonesian: 'Pengaruh / Dampak' },
        { japanese: '発展', romaji: 'hatten', indonesian: 'Perkembangan' },
        { japanese: '解決', romaji: 'kaiketsu', indonesian: 'Solusi / Penyelesaian' }
    ],
    minimalPairs: [
      { options: ['しゃかい', 'しょうかい'], romaji: ['shakai (masyarakat)', 'shoukai (perkenalan)'], correctAnswer: 'しゃかい' },
      { options: ['きょういく', 'きゅういく'], romaji: ['kyouiku (pendidikan)', 'kyuuiku (penyelamatan)'], correctAnswer: 'きょういく' }
    ]
  };