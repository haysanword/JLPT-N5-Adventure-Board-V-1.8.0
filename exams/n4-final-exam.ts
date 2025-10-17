import { FinalExam } from '../types';

export const exam: FinalExam = {
  id: 'n4-final-exam',
  level: 'N4',
  title: 'Ujian Akhir N4',
  description: 'Uji pemahaman komprehensif Anda tentang kosakata, kanji, dan tata bahasa level N4.',
  questions: [
    // Section 1: Kanji & Vocabulary (15 questions)
    {
      type: 'kanji',
      question: '「旅行」のよみかたは どれですか。',
      options: ['りょこう', 'りょかん', 'りょうり', 'りゆう'],
      correctAnswer: 'りょこう',
    },
    {
      type: 'kanji',
      question: '「広い」の はんたいは どれですか。',
      options: ['せまい', 'ちかい', 'とおい', 'かるい'],
      correctAnswer: 'せまい',
    },
    {
      type: 'vocabulary',
      question: 'かぜを ひいたので、＿＿＿を のみました。',
      options: ['ごはん', 'くすり', 'ジュース', 'みず'],
      correctAnswer: 'くすり',
    },
    {
      type: 'vocabulary',
      question: 'レポートの＿＿＿は あしたです。',
      options: ['しめきり', 'よやく', 'しゅくだい', 'あんない'],
      correctAnswer: 'しめきり',
    },
    {
      type: 'vocabulary',
      question: 'ホテルを＿＿＿しました。',
      options: ['よやく', 'ちゅうもん', 'しょうたい', 'せつめい'],
      correctAnswer: 'よやく',
    },
     {
      type: 'kanji',
      question: '「意見」のいみは どれですか。',
      options: ['Pengalaman', 'Pendapat', 'Keputusan', 'Alasan'],
      correctAnswer: 'Pendapat',
    },
    {
      type: 'kanji',
      question: '「歩く」のよみかたは どれですか。',
      options: ['はしる', 'あるく', 'およぐ', 'とぶ'],
      correctAnswer: 'あるく',
    },
     {
      type: 'vocabulary',
      question: 'あたらしい プロジェクトについて ＿＿＿が あります。',
      options: ['かいぎ', 'しけん', 'しゅくだい', 'そうじ'],
      correctAnswer: 'かいぎ',
    },
    {
      type: 'vocabulary',
      question: 'テストの＿＿＿が よかったです。',
      options: ['けいけん', 'もくてき', 'けっか', 'りゆう'],
      correctAnswer: 'けっか',
    },
    {
      type: 'kanji',
      question: '「空港」のいみは どれですか。',
      options: ['Pelabuhan', 'Stasiun', 'Bandara', 'Halte bus'],
      correctAnswer: 'Bandara',
    },

    // Section 2: Grammar (10 questions)
    {
      type: 'grammar',
      question: 'わたしは にほんごが すこし＿＿＿。',
      options: ['はなします', 'はなせます', 'はなさせます', 'はなされます'],
      correctAnswer: 'はなせます',
    },
    {
      type: 'grammar',
      question: 'あめが ふっている＿＿＿、きょうは うちに います。',
      options: ['から', 'ので', 'のに', 'ても'],
      correctAnswer: 'ので',
    },
    {
      type: 'grammar',
      question: 'ともだちが にもつを もって＿＿＿。',
      options: ['あげました', 'くれました', 'もらいました', 'させました'],
      correctAnswer: 'くれました',
    },
    {
        type: 'grammar',
        question: 'せんせいに しから＿＿＿。',
        options: ['れました', 'せました', 'ました', 'させられました'],
        correctAnswer: 'れました',
    },
    {
        type: 'grammar',
        question: 'てんきよほうによると、あしたは あつく なる＿＿＿。',
        options: ['そうです', 'そうです（見た目）', 'ようです', 'らしいです'],
        correctAnswer: 'そうです',
    },
    {
        type: 'grammar',
        question: 'やくそくした＿＿＿、かれは きませんでした。',
        options: ['から', 'ので', 'のに', 'なら'],
        correctAnswer: 'のに',
    },
    {
        type: 'grammar',
        question: 'ははに やさいを たべ＿＿＿。',
        options: ['させられました', 'られました', 'させました', 'てあげました'],
        correctAnswer: 'させられました',
    },
    {
        type: 'grammar',
        question: 'ふじさんに のぼったこと＿＿＿ありますか。',
        options: ['が', 'を', 'は', 'も'],
        correctAnswer: 'が',
    },
    {
        type: 'grammar',
        question: 'まいにち れんしゅうすれば、じょうずに なる＿＿＿。',
        options: ['はずです', 'そうです', 'ようです', 'らしいです'],
        correctAnswer: 'はずです',
    },
    {
        type: 'grammar',
        question: 'しゅくだいを わすれた＿＿＿は、せんせいに いってください。',
        options: ['ばあい', 'とき', 'なら', 'ため'],
        correctAnswer: 'ばあい',
    },

    // Section 3: Reading (5 questions)
    {
      type: 'reading',
      readingText: `さくら図書館からのお知らせ
      来週の月曜日（10月5日）は、図書館のコンピューターシステムの更新のため、一日休みます。
      本を返す日がその日にあたる人は、火曜日に返してください。
      ご迷惑をおかけしますが、ご協力をお願いいたします。`,
      question: 'なぜ 図書館は 休みますか。',
      options: ['そうじのため', 'イベントのため', 'システムのこうしんのため', '祝日のため'],
      correctAnswer: 'システムのこうしんのため',
    },
    {
      type: 'reading',
      question: '図書館は いつ 休みますか。',
      options: ['10月5日の火曜日', '10月5日の月曜日', '毎月の5日', '毎週月曜日'],
      correctAnswer: '10月5日の月曜日',
    },
    {
      type: 'reading',
      question: '月曜日に 本を 返す人は どうすればいいですか。',
      options: ['前の日に返す', '火曜日に返す', '水曜日に返す', '返す必要はない'],
      correctAnswer: '火曜日に返す',
    },
    {
      type: 'reading',
      question: '「更新」のよみかたはどれですか。',
      options: ['こうしん', 'こうしん', 'こうじん', 'こうし'],
      correctAnswer: 'こうしん',
    },
     {
      type: 'reading',
      question: 'このお知らせは 何についてですか。',
      options: ['新しい本の案内', '図書館の休館日', 'ボランティアの募集', 'コンピューター教室の案内'],
      correctAnswer: '図書館の休館日',
    },
  ],
};