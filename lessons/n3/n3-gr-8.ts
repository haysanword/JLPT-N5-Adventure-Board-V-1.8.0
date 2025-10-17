import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-gr-8',
    level: 'N3',
    title: 'Tata Bahasa N3: Aturan & Peran',
    description: 'Pelajari ～ことになっている (sudah menjadi aturan) dan ～として (sebagai).',
    xp: 280,
    content: `
      <h1>Aturan & Peran: ことになっている vs. として</h1>
      <p>Pola-pola ini membantu Anda berbicara tentang aturan yang sudah ditetapkan dan peran atau kapasitas seseorang atau sesuatu.</p>
      
      <h2>1. ～ことになっている (koto ni natte iru) - "Sudah Menjadi Aturan/Jadwal"</h2>
      <p>Gunakan pola ini untuk membicarakan aturan, jadwal, atau keputusan yang telah ditetapkan oleh pihak lain (bukan oleh Anda sendiri). Ini menunjukkan bahwa sesuatu adalah sebuah kebiasaan, regulasi, atau rencana yang sudah pasti.</p>
      <p><strong>Pola:</strong> <code>[Bentuk Kamus / Bentuk Nai] + ことになっている。</code></p>
      <ul>
        <li><strong>Contoh (Aturan):</strong> この寮では、夜１１時以降は外出できない<strong>ことになっています</strong>。(Kono ryou dewa, yoru juu-ichi-ji ikou wa gaishutsu dekinai <strong>koto ni natte imasu</strong>.) - Di asrama ini, <strong>aturannya adalah</strong> tidak boleh keluar setelah jam 11 malam.</li>
        <li><strong>Contoh (Jadwal):</strong> 明日、部長と大阪へ出張する<strong>ことになっています</strong>。(Ashita, buchou to Oosaka e shucchou suru <strong>koto ni natte imasu</strong>.) - <strong>Sudah dijadwalkan</strong> besok saya akan dinas ke Osaka bersama manajer.</li>
      </ul>

      <h2>2. ～として (toshite) - "Sebagai..."</h2>
      <p>Gunakan partikel ini untuk menandakan peran, kapasitas, atau kualifikasi dari seseorang atau sesuatu. Ini menjawab pertanyaan "dalam kapasitas sebagai apa?".</p>
      <p><strong>Pola:</strong> <code>[Kata Benda] + として</code></p>
      <ul>
        <li><strong>Contoh (Peran):</strong> 私は、このチームのリーダー<strong>として</strong>、責任を持ちます。(Watashi wa, kono chiimu no riidaa <strong>toshite</strong>, sekinin o mochimasu.) - Saya, <strong>sebagai</strong> pemimpin tim ini, akan bertanggung jawab.</li>
        <li><strong>Contoh (Kapasitas):</strong> 彼は医者<strong>として</strong>有名ですが、画家<strong>としても</strong>知られています。(Kare wa isha <strong>toshite</strong> yuumei desu ga, gaka <strong>toshite mo</strong> shirarete imasu.) - Dia terkenal <strong>sebagai</strong> seorang dokter, tetapi juga dikenal <strong>sebagai</strong> seorang pelukis.</li>
        <li><strong>Contoh (Kualifikasi):</strong> 彼は国費留学生<strong>として</strong>日本へ来た。(Kare wa kokuhi ryuugakusei <strong>toshite</strong> Nihon e kita.) - Dia datang ke Jepang <strong>sebagai</strong> mahasiswa penerima beasiswa pemerintah.</li>
      </ul>
    `,
    audioScript: '"Koto ni natte iru" digunakan untuk aturan atau jadwal yang sudah ditetapkan. "Toshite" digunakan untuk menyatakan peran atau kapasitas, artinya "sebagai".',
    listeningSituation: {
      title: 'Situasi: Aturan di Kantor',
      japaneseText: `A: すみません、この部屋では飲食はできますか。
B: いいえ、ここでは飲食は禁止ということになっています。休憩室をご利用ください。
A: 承知しました。`,
      indonesianText: `A: Permisi, apakah boleh makan dan minum di ruangan ini?
B: Tidak, aturannya adalah dilarang makan dan minum di sini. Silakan gunakan ruang istirahat.
A: Baik, saya mengerti.`,
      audioScript: 'A: すみません、この部屋では飲食はできますか。 B: いいえ、ここでは飲食は禁止ということになっています。休憩室をご利用ください。 A: 承知しました。'
    },
    quiz: [
      { question: 'Pola mana yang digunakan untuk menyatakan aturan atau jadwal yang sudah pasti?', options: ['～として', '～はずだ', '～ことになっている', '～べきだ'], correctAnswer: '～ことになっている' },
      { question: 'Lengkapi kalimat: "私は留学生___日本に来ました。" (Saya datang ke Jepang sebagai mahasiswa asing)', options: ['として', 'にして', 'ように', 'ために'], correctAnswer: 'として' },
      { question: 'Kalimat "Aturannya, helm wajib dipakai di sini." paling tepat diterjemahkan menjadi...', options: ['ここでヘルメットをかぶるべきだ。', 'ここでヘルメットをかぶることになっている。', 'ここでヘルメットをかぶるはずだ。', 'ここでヘルメットとしてかぶる。'], correctAnswer: 'ここでヘルメットをかぶることになっている。' },
    ],
    vocabulary: [
        { japanese: '～ことになっている', romaji: 'koto ni natte iru', indonesian: 'Sudah menjadi aturan/jadwal' },
        { japanese: '～として', romaji: 'toshite', indonesian: 'Sebagai...' },
        { japanese: '寮 (りょう)', romaji: 'ryou', indonesian: 'Asrama' },
        { japanese: '禁止 (きんし)', romaji: 'kinshi', indonesian: 'Larangan' },
    ],
    minimalPairs: [
      { options: ['として', 'そして'], romaji: ['toshite (sebagai)', 'soshite (dan/lalu)'], correctAnswer: 'として' }
    ]
  };