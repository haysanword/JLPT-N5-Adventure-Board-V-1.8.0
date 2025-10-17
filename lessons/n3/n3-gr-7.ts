import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-gr-7',
    level: 'N3',
    title: 'Tata Bahasa N3: Ekspektasi & Kewajiban',
    description: 'Pelajari perbedaan antara ～はずだ (pasti/seharusnya) dan ～べきだ (sebaiknya/harus).',
    xp: 280,
    content: `
      <h1>Ekspektasi & Kewajiban: はず vs. べき</h1>
      <p>Kedua pola ini sering diterjemahkan sebagai "seharusnya" atau "harus", tetapi nuansanya sangat berbeda. Memahaminya akan membuat Anda bisa mengekspresikan kepastian dan kewajiban moral dengan lebih tepat.</p>
      
      <h2>1. ～はずだ (hazu da) - Ekspektasi Logis ("Pasti...")</h2>
      <p>Gunakan <code>はずだ</code> ketika Anda memiliki alasan kuat untuk percaya bahwa sesuatu itu benar atau akan terjadi. Ini adalah kesimpulan logis berdasarkan informasi yang Anda miliki, bukan keinginan atau kewajiban.</p>
      <p><strong>Pola:</strong> <code>[Bentuk Biasa] + はずだ。</code></p>
      <ul>
        <li><strong>Contoh:</strong> 彼は昨日日本へ行ったから、今ここにいる<strong>はずがない</strong>。(Kare wa kinou Nihon e itta kara, ima koko ni iru <strong>hazu ga nai</strong>.) - Karena dia kemarin pergi ke Jepang, <strong>tidak mungkin</strong> dia ada di sini sekarang. (Bentuk negatif)</li>
        <li><strong>Contoh:</strong> 薬を飲んだから、もうすぐ熱が下がる<strong>はずです</strong>。(Kusuri o nonda kara, mou sugu netsu ga sagaru <strong>hazu desu</strong>.) - Karena sudah minum obat, <strong>seharusnya/pasti</strong> demamnya akan segera turun.</li>
      </ul>

      <h2>2. ～べきだ (beki da) - Kewajiban Moral ("Sebaiknya...")</h2>
      <p>Gunakan <code>べきだ</code> untuk menyatakan apa yang "sebaiknya" atau "harus" dilakukan berdasarkan norma sosial, moralitas, atau akal sehat. Ini adalah bentuk saran yang kuat atau pernyataan tentang kewajiban.</p>
      <p><strong>Pola:</strong> <code>[Bentuk Kamus] + べきだ。</code> (Untuk する → すべきだ)</p>
      <ul>
        <li><strong>Contoh:</strong> 学生はもっと勉強す<strong>べきだ</strong>。(Gakusei wa motto benkyou su<strong>beki da</strong>.) - Pelajar <strong>sebaiknya/harus</strong> lebih banyak belajar.</li>
        <li><strong>Contoh:</strong> 約束は守る<strong>べきです</strong>。(Yakusoku wa mamoru <strong>beki desu</strong>.) - Janji itu <strong>harus</strong> ditepati.</li>
        <li><strong>Bentuk Negatif:</strong> <code>～べきではない</code> (sebaiknya tidak).<br/><em>Contoh: 人の悪口を言う<strong>べきではない</strong>。(Hito no waruguchi o iu <strong>beki dewa nai</strong>.) - Sebaiknya tidak membicarakan keburukan orang lain.</em></li>
      </ul>
    `,
    audioScript: '"Hazu da" digunakan untuk ekspektasi logis, artinya "pasti" atau "seharusnya". Sedangkan "beki da" digunakan untuk kewajiban moral atau saran kuat, artinya "sebaiknya" atau "harus".',
    listeningSituation: {
      title: 'Situasi: Diskusi di Kantor',
      japaneseText: `A: 田中さん、まだ来ませんね。
B: おかしいですね。もう着いているはずなのに。
A: 心配ですね。電話してみるべきでしょうか。`,
      indonesianText: `A: Tanaka-san belum datang juga ya.
B: Aneh ya. Padahal seharusnya dia sudah tiba.
A: Khawatir juga ya. Sebaiknya kita coba telepon tidak ya?`,
      audioScript: 'A: 田中さん、まだ来ませんね。 B: おかしいですね。もう着いているはずなのに。 A: 心配ですね。電話してみるべきでしょうか。'
    },
    quiz: [
      { question: 'Pola mana yang digunakan untuk menyatakan kesimpulan logis?', options: ['～べきだ', '～はずだ', '～かもしれない', '～だろう'], correctAnswer: '～はずだ' },
      { question: 'Lengkapi kalimat: "うそをつく___。" (Sebaiknya tidak berbohong)', options: ['べきだ', 'べきではない', 'はずだ', 'はずがない'], correctAnswer: 'べきではない' },
      { question: 'Kalimat "Dia sudah belajar setahun, pasti bisa lulus N4." menggunakan pola...', options: ['～べきだ', '～はずだ', '～かもしれない', '～なさい'], correctAnswer: '～はずだ' },
    ],
    vocabulary: [
        { japanese: '～はずだ', romaji: 'hazu da', indonesian: 'Pasti / Seharusnya (ekspektasi logis)' },
        { japanese: '～べきだ', romaji: 'beki da', indonesian: 'Sebaiknya / Harus (kewajiban moral)' },
        { japanese: '約束 (やくそく)', romaji: 'yakusoku', indonesian: 'Janji' },
        { japanese: '守る (まもる)', romaji: 'mamoru', indonesian: 'Menepati / Melindungi' },
    ],
    minimalPairs: [
      { options: ['はず', 'はこ'], romaji: ['hazu (seharusnya)', 'hako (kotak)'], correctAnswer: 'はず' }
    ]
  };