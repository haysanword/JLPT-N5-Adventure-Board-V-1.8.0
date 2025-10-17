import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-gr-3',
    level: 'N4',
    title: 'Tata Bahasa: Hearsay & Appearance',
    description: 'Pelajari perbedaan ～そうです, ～ようです, dan ～らしいです untuk menyampaikan informasi tidak langsung.',
    xp: 250,
    content: `
      <h1>Menyampaikan Informasi: "Katanya", "Kelihatannya", dan "Sepertinya"</h1>
      <p>Dalam bahasa Jepang, sangat penting untuk memperjelas sumber informasi Anda. Apakah Anda melihatnya sendiri? Mendengarnya dari orang lain? Atau hanya menebak? Tiga pola ini membantu Anda melakukannya.</p>
      
      <h2>1. ～そうです (sou desu) - "Katanya..." (Hearsay)</h2>
      <p>Gunakan pola ini ketika Anda menyampaikan informasi yang Anda <strong>dengar</strong> atau <strong>baca</strong> dari sumber lain (berita, teman, buku). Ini adalah laporan fakta dari pihak ketiga.</p>
      <p><strong>Cara membuat:</strong> Tempelkan <code>そうです</code> setelah <strong>Bentuk Biasa (futsuukei)</strong> dari kata kerja atau kata sifat.</p>
      <ul>
        <li><strong>Contoh:</strong> てんきよほうによると、あしたは あめが ふる<strong>そうです</strong>。(Tenkiyohou ni yoru to, ashita wa ame ga furu <strong>sou desu</strong>.) - Menurut ramalan cuaca, <strong>katanya</strong> besok akan hujan.</li>
        <li><strong>Contoh:</strong> たなかさんは きのう びょうきだった<strong>そうです</strong>。(Tanaka-san wa kinou byouki datta <strong>sou desu</strong>.) - <strong>Katanya</strong> Tanaka-san sakit kemarin.</li>
      </ul>

      <h2>2. ～そうです (sou desu) - "Kelihatannya akan..." (Appearance)</h2>
      <p>Ya, polanya sama tapi artinya berbeda! Pola ini digunakan ketika Anda membuat penilaian berdasarkan apa yang Anda <strong>lihat</strong> secara langsung. Ini adalah tebakan visual.</p>
      <p><strong>Cara membuat:</strong>
        <br/>- Kata Kerja (akar -masu): Buang <code>ます</code>, tambahkan <code>そうです</code>.
        <br/>- Kata Sifat-i: Buang <code>い</code>, tambahkan <code>そうです</code>.
        <br/>- Kata Sifat-na: Langsung tambahkan <code>そうです</code>.</p>
      <ul>
        <li><strong>Contoh (KK):</strong> あめが ふり<strong>そうです</strong>。(Ame ga furi<strong>sou desu</strong>.) - <strong>Kelihatannya akan</strong> hujan. (Anda melihat langit mendung).</li>
        <li><strong>Contoh (KS-i):</strong> このケーキは おいし<strong>そうです</strong>。(Kono keeki wa oishi<strong>sou desu</strong>.) - Kue ini <strong>kelihatannya</strong> enak. (Anda melihat penampilannya).</li>
        <li><strong>Contoh (KS-na):</strong> 彼は げんき<strong>そうです</strong>。(Kare wa genki<strong>sou desu</strong>.) - Dia <strong>kelihatannya</strong> sehat/bersemangat. (Anda melihat ekspresinya).</li>
      </ul>

      <h2>3. ～ようです (you desu) & ～らしいです (rashii desu) - "Sepertinya..." (Indication/Rumor)</h2>
      <p>Keduanya mirip, digunakan saat Anda menyimpulkan sesuatu berdasarkan bukti tidak langsung atau informasi yang beredar.</p>
      <ul>
        <li><strong>～ようです (you desu):</strong> Kesimpulan berdasarkan <strong>observasi sensorik</strong> (apa yang Anda lihat, dengar, cium). Lebih pasti daripada らしい.
             <br/><em>Contoh: となりの へやに だれか いる<strong>ようです</strong>。こえがします。(Tonari no heya ni dareka iru <strong>you desu</strong>. Koe ga shimasu.) - <strong>Sepertinya</strong> ada seseorang di kamar sebelah. Terdengar suara.</em>
        </li>
        <li><strong>～らしいです (rashii desu):</strong> Kesimpulan berdasarkan <strong>informasi yang didengar (rumor/gosip)</strong>. Tingkat kepastiannya lebih rendah.
             <br/><em>Contoh: たなかさんは らいげつ けっこんする<strong>らしいです</strong>。(Tanaka-san wa raigetsu kekkon suru <strong>rashii desu</strong>.) - <strong>Sepertinya/Katanya</strong> Tanaka-san akan menikah bulan depan. (Anda dengar dari gosip).</em>
        </li>
      </ul>
    `,
    audioScript: 'Untuk menyampaikan info, "sou desu" punya dua arti. Setelah bentuk biasa, artinya "katanya". Setelah akar kata, artinya "kelihatannya". "You desu" untuk kesimpulan dari indera, dan "rashii desu" untuk rumor.',
    listeningSituation: {
      title: 'Cerita Pendek: Rantai Informasi',
      japaneseText: `「山田さんから聞いたけど、佐藤課長、来月退職するらしい。最近、疲れているようだったから、本当かもしれない。ニュースによると、経済も悪いそうだし、心配だなあ。」`,
      indonesianText: `"Aku dengar dari Yamada-san, tapi sepertinya Kepala Bagian Sato akan pensiun bulan depan. Akhir-akhir ini, beliau memang terlihat lelah, jadi mungkin saja itu benar. Menurut berita, katanya ekonomi juga sedang buruk, jadi aku khawatir."`,
      audioScript: '山田さんから聞いたけど、佐藤課長、来月退職するらしい。最近、疲れているようだったから、本当かもしれない。ニュースによると、経済も悪いそうだし、心配だなあ。'
    },
    quiz: [
      { question: 'Anda melihat langit sangat mendung. Kalimat yang paling tepat adalah...', options: ['雨が降るそうです', '雨が降りそうです', '雨が降るようです', '雨が降るらしいです'], correctAnswer: '雨が降りそうです' },
      { question: 'Teman Anda memberitahu bahwa Yamada-san akan pindah. Anda menceritakannya ke orang lain. Kalimat yang tepat:', options: ['山田さんは 引っ越すそうです', '山田さんは 引っ越しそうです', '山田さんは 引っ越すらしいです', 'A atau C bisa digunakan'], correctAnswer: 'A atau C bisa digunakan' },
      { question: 'Pola 「～そうです」 yang berarti "katanya" ditempelkan setelah...', options: ['Bentuk Te', 'Bentuk Ta', 'Akar kata kerja (-masu)', 'Bentuk Biasa (Futsuukei)'], correctAnswer: 'Bentuk Biasa (Futsuukei)' },
      { question: 'Anda mencium bau masakan enak dari dapur. Kalimat yang tepat:', options: ['おいしいそうです', 'おいしいらしいです', 'おいしそうです', 'おいしいようです'], correctAnswer: 'おいしいようです' },
      { question: 'Mana yang memiliki tingkat kepastian paling rendah (berdasarkan rumor)?', options: ['～そうです (hearsay)', '～そうです (appearance)', '～ようです', '～らしいです'], correctAnswer: '～らしいです' },
      { question: 'Pilih situasi yang paling tepat untuk menggunakan 「～らしいです」:', options: ['Anda membaca di koran bahwa akan ada topan.', 'Anda melihat kue yang tampak lezat di etalase.', 'Anda mendengar gosip dari teman sekerja tentang atasan.', 'Anda merasa badan Anda akan demam.'], correctAnswer: 'Anda mendengar gosip dari teman sekerja tentang atasan.' }
    ],
    vocabulary: [
        { japanese: '～そうです (Hearsay)', romaji: 'sou desu', indonesian: 'Katanya...' },
        { japanese: '～そうです (Appearance)', romaji: 'sou desu', indonesian: 'Kelihatannya...' },
        { japanese: '～ようです', romaji: 'you desu', indonesian: 'Sepertinya... (berdasarkan indera)' },
        { japanese: '～らしいです', romaji: 'rashii desu', indonesian: 'Sepertinya... (berdasarkan rumor)' },
        { japanese: '天気予報 (てんきよほう)', romaji: 'tenki yohou', indonesian: 'Ramalan cuaca' },
    ],
    minimalPairs: [
      { options: ['そう', 'ぞう'], romaji: ['sou (begitu)', 'zou (gajah)'], correctAnswer: 'そう' },
      { options: ['よう', 'よる'], romaji: ['you (seperti)', 'yoru (malam)'], correctAnswer: 'よう' },
      { options: ['ふる', 'ふく'], romaji: ['furu (turun hujan)', 'fuku (meniup)'], correctAnswer: 'ふる' },
      { options: ['こえ', 'こい'], romaji: ['koe (suara)', 'koi (cinta/ikan mas)'], correctAnswer: 'こえ' },
      { options: ['となり', 'ともだち'], romaji: ['tonari (sebelah)', 'tomodachi (teman)'], correctAnswer: 'となり' },
    ]
  };