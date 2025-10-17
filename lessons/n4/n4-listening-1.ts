import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-listening-1',
    level: 'N4',
    title: 'Latihan Mendengar: Membuat Janji',
    description: 'Dengarkan percakapan dua orang yang sedang mengatur jadwal bertemu dan jawab pertanyaannya.',
    xp: 200,
    content: `
      <h1>Latihan Pemahaman Mendengarkan (聴解 - choukai)</h1>
      <p>Pemahaman mendengarkan adalah keterampilan aktif. Sebelum mendengarkan, baca dulu pertanyaan-pertanyaannya. Ini akan membantu Anda fokus mencari informasi spesifik saat dialog diputar.</p>
      <p>Dalam percakapan berikut, Tanaka-san dan Yamada-san sedang mencoba membuat janji untuk bertemu. Dengarkan baik-baik kapan dan di mana mereka akhirnya memutuskan untuk bertemu.</p>
    `,
    audioScript: 'Ini adalah pelajaran mendengarkan. Anda akan mendengar dialog tentang membuat janji dan harus menjawab pertanyaan berdasarkan dialog tersebut.',
    listeningSituation: {
      title: 'Percakapan: Membuat Janji Bertemu',
      japaneseText: `
田中：もしもし、山田さん？田中です。
山田：ああ、田中さん。こんにちは。
田中：こんにちは。あのう、来週、一緒に映画を見ませんか。
山田：いいですね。いつがいいですか。
田中：水曜日の午後はどうですか。
山田：うーん、水曜日はちょっと仕事が。。。木曜日なら大丈夫です。
田中：分かりました。じゃあ、木曜日にしましょう。どこで会いましょうか。
山田：渋谷駅のハチ公前はどうですか。午後７時に。
田中：はい、いいですよ。じゃあ、木曜日の午後７時に、渋谷駅のハチ公前で。楽しみにしています。
山田：はい、私もです。
      `,
      indonesianText: `
Tanaka: Halo, Yamada-san? Ini Tanaka.
Yamada: Ah, Tanaka-san. Halo.
Tanaka: Halo. Umm, minggu depan, maukah kita nonton film bersama?
Yamada: Ide bagus. Kapan bagusnya?
Tanaka: Bagaimana kalau hari Rabu sore?
Yamada: Hmm, hari Rabu ada sedikit kerjaan... Kalau hari Kamis, bisa.
Tanaka: Oke. Kalau begitu, ayo kita putuskan hari Kamis. Di mana kita bertemu?
Yamada: Bagaimana kalau di depan patung Hachiko di stasiun Shibuya? Jam 7 malam.
Tanaka: Ya, boleh. Kalau begitu, hari Kamis jam 7 malam, di depan Hachiko stasiun Shibuya. Saya menantikannya.
Yamada: Ya, saya juga.
      `,
      audioScript: 'もしもし、山田さん？田中です。ああ、田中さん。こんにちは。こんにちは。あのう、来週、一緒に映画を見ませんか。いいですね。いつがいいですか。水曜日の午後はどうですか。うーん、水曜日はちょっと仕事が。。。木曜日なら大丈夫です。分かりました。じゃあ、木曜日にしましょう。どこで会いましょうか。渋谷駅のハチ公前はどうですか。午後７時に。はい、いいですよ。じゃあ、木曜日の午後７時に、渋谷駅のハチ公前で。楽しみにしています。はい、私もです。'
    },
    quiz: [
      { question: 'Kapan Tanaka-san dan Yamada-san akan bertemu?', options: ['Rabu sore', 'Rabu malam', 'Kamis sore', 'Kamis malam'], correctAnswer: 'Kamis malam' },
      { question: 'Jam berapa mereka akan bertemu?', options: ['Jam 6 sore', 'Jam 7 malam', 'Jam 8 malam', 'Jam 9 malam'], correctAnswer: 'Jam 7 malam' },
      { question: 'Di mana lokasi pertemuan mereka?', options: ['Di depan bioskop', 'Di dalam stasiun Shibuya', 'Di depan patung Hachiko', 'Di rumah Tanaka-san'], correctAnswer: 'Di depan patung Hachiko' },
      { question: 'Apa yang akan mereka lakukan bersama?', options: ['Makan malam', 'Menonton film', 'Berbelanja', 'Pergi ke konser'], correctAnswer: 'Menonton film' },
      { question: 'Mengapa mereka tidak bisa bertemu pada hari Rabu?', options: ['Yamada-san sakit', 'Yamada-san ada janji lain', 'Yamada-san ada pekerjaan', 'Tanaka-san tidak bisa'], correctAnswer: 'Yamada-san ada pekerjaan' }
    ],
    minimalPairs: [
      { options: ['しごと', 'じこ'], romaji: ['shigoto (pekerjaan)', 'jiko (kecelakaan)'], correctAnswer: 'しごと' },
      { options: ['えいが', 'えいご'], romaji: ['eiga (film)', 'eigo (bahasa Inggris)'], correctAnswer: 'えいが' },
      { options: ['きのう', 'きょう'], romaji: ['kinou (kemarin)', 'kyou (hari ini)'], correctAnswer: 'きのう' },
      { options: ['まち', 'みち'], romaji: ['machi (kota)', 'michi (jalan)'], correctAnswer: 'まち' },
      { options: ['ごご', 'ここ'], romaji: ['gogo (P.M./sore)', 'koko (di sini)'], correctAnswer: 'ごご' }
    ]
  };