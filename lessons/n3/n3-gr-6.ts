import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-gr-6',
    level: 'N3',
    title: 'Tata Bahasa N3: Sebab & Akibat Lanjutan',
    description: 'Pelajari ～おかげで dan ～せいで untuk menyatakan sebab-akibat dengan nuansa positif dan negatif.',
    xp: 270,
    content: `
      <h1>Sebab & Akibat dengan Nuansa: おかげで vs. せいで</h1>
      <p>Di level N5/N4, Anda belajar <code>から</code> dan <code>ので</code> untuk menyatakan sebab-akibat secara netral. Di N3, Anda akan belajar cara menambahkan "rasa" atau "emosi" ke dalam alasan Anda.</p>
      
      <h2>1. ～おかげで (okage de) - "Berkat..." (Nuansa Positif)</h2>
      <p>Gunakan pola ini ketika Anda ingin menyatakan bahwa hasil yang baik terjadi <strong>berkat</strong> suatu sebab. Pola ini mengandung rasa terima kasih atau syukur.</p>
      <p><strong>Pola:</strong> <code>[Bentuk Biasa/Kata Benda + の] + おかげで、[Hasil Positif]。</code></p>
      <ul>
        <li><strong>Contoh:</strong> 先生のおかげで、試験に合格できました。(Sensei no <strong>okage de</strong>, shiken ni goukaku dekimashita.) - <strong>Berkat</strong> guru, saya bisa lulus ujian.</li>
        <li><strong>Contoh:</strong> 毎日練習したおかげで、ピアノが上手になりました。(Mainichi renshuu shita <strong>okage de</strong>, piano ga jouzu ni narimashita.) - <strong>Berkat</strong> latihan setiap hari, saya menjadi mahir bermain piano.</li>
      </ul>

      <h2>2. ～せいで (sei de) - "Gara-gara..." (Nuansa Negatif)</h2>
      <p>Gunakan pola ini ketika Anda ingin menyatakan bahwa hasil yang buruk terjadi <strong>gara-gara</strong> suatu sebab. Pola ini mengandung nada menyalahkan, keluhan, atau penyesalan.</p>
      <p><strong>Pola:</strong> <code>[Bentuk Biasa/Kata Benda + の] + せいで、[Hasil Negatif]。</code></p>
      <ul>
        <li><strong>Contoh:</strong> 事故のせいで、電車が遅れました。(Jiko no <strong>sei de</strong>, densha ga okuremashita.) - <strong>Gara-gara</strong> kecelakaan, kereta terlambat.</li>
        <li><strong>Contoh:</strong> 寝不足のせいで、頭が痛いです。(Nebusoku no <strong>sei de</strong>, atama ga itai desu.) - <strong>Gara-gara</strong> kurang tidur, kepala saya sakit.</li>
      </ul>
      
      <h2>Perbandingan dengan から/ので</h2>
      <p><code>から</code> dan <code>ので</code> hanya menyatakan fakta sebab-akibat. <code>おかげで</code> dan <code>せいで</code> menambahkan emosi pembicara terhadap sebab tersebut.</p>
      <ul>
        <li><strong>Netral:</strong> 薬を飲んだ<strong>から</strong>、元気になりました。(Kusuri o nonda <strong>kara</strong>, genki ni narimashita.) - Karena minum obat, saya jadi sehat.</li>
        <li><strong>Positif:</strong> 薬を飲んだ<strong>おかげで</strong>、元気になりました。(Kusuri o nonda <strong>okage de</strong>, genki ni narimashita.) - Berkat minum obat, saya jadi sehat.</li>
        <li><strong>Negatif:</strong> お酒を飲みすぎた<strong>せいで</strong>、気分が悪いです。(Osake o nomisugita <strong>sei de</strong>, kibun ga warui desu.) - Gara-gara terlalu banyak minum sake, perasaan saya tidak enak.</li>
      </ul>
    `,
    audioScript: 'Untuk sebab-akibat dengan emosi, gunakan "okage de" untuk hasil positif, artinya "berkat". Gunakan "sei de" untuk hasil negatif, artinya "gara-gara". Ini berbeda dari "kara" atau "node" yang lebih netral.',
    listeningSituation: {
      title: 'Situasi: Percakapan setelah Ujian',
      japaneseText: `A: 試験、どうだった？
B: 合格したよ！毎日、君が手伝ってくれたおかげだよ。本当にありがとう。
A: よかったね！`,
      indonesianText: `A: Ujiannya bagaimana?
B: Aku lulus! Ini semua berkat kamu yang membantuku setiap hari. Terima kasih banyak ya.
A: Syukurlah!`,
      audioScript: 'A: 試験、どうだった？ B: 合格したよ！毎日、君が手伝ってくれたおかげだよ。本当にありがとう。 A: よかったね！'
    },
    quiz: [
      { question: 'Lengkapi kalimat: "先生の___、日本語が上手になりました。" (Berkat guru, bahasa Jepang saya jadi mahir)', options: ['せいで', 'おかげで', 'ために', 'ように'], correctAnswer: 'おかげで' },
      { question: 'Pola "～せいで" digunakan untuk menyatakan sebab yang menghasilkan...', options: ['Akibat yang positif', 'Akibat yang netral', 'Akibat yang negatif', 'Sebuah tujuan'], correctAnswer: 'Akibat yang negatif' },
      { question: 'Pilih kalimat yang paling tepat: "Gara-gara topan, penerbangan dibatalkan."', options: ['台風のおかげで、飛行機がキャンセルになりました。', '台風のせいで、飛行機がキャンセルになりました。', '台風のために、飛行機がキャンセルになりました。', '台風によって、飛行機がキャンセルになりました。'], correctAnswer: '台風のせいで、飛行機がキャンセルになりました。' },
      { question: 'Kalimat "Berkat kamu, saya berhasil." adalah...', options: ['あなたのせいで、成功しました。', 'あなたのおかげで、成功しました。', 'あなただから、成功しました。', 'あなたのに、成功しました。'], correctAnswer: 'あなたのおかげで、成功しました。' },
      { question: 'Apa perbedaan utama antara 「ので」 dan 「せいで」?', options: ['Tidak ada perbedaan', '「ので」 lebih formal', '「せいで」 mengandung nuansa negatif/menyalahkan', '「ので」 hanya untuk kata kerja'], correctAnswer: '「せいで」 mengandung nuansa negatif/menyalahkan' }
    ],
    vocabulary: [
        { japanese: '～おかげで', romaji: 'okage de', indonesian: 'Berkat... (positif)' },
        { japanese: '～せいで', romaji: 'sei de', indonesian: 'Gara-gara... (negatif)' },
        { japanese: '合格 (ごうかく)', romaji: 'goukaku', indonesian: 'Lulus' },
        { japanese: '事故 (じこ)', romaji: 'jiko', indonesian: 'Kecelakaan' },
        { japanese: '寝不足 (ねぶそく)', romaji: 'nebusoku', indonesian: 'Kurang tidur' }
    ],
    minimalPairs: [
      { options: ['せい', 'せき'], romaji: ['sei (gara-gara)', 'seki (batuk/kursi)'], correctAnswer: 'せい' },
      { options: ['じこ', 'しごと'], romaji: ['jiko (kecelakaan)', 'shigoto (pekerjaan)'], correctAnswer: 'じこ' }
    ]
  };