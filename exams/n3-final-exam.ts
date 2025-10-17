import { FinalExam } from '../types';

export const exam: FinalExam = {
  id: 'n3-final-exam',
  level: 'N3',
  title: 'Ujian Akhir N3',
  description: 'Uji pemahaman komprehensif Anda tentang kosakata, kanji, dan tata bahasa level N3.',
  questions: [
    // Section 1: Kanji & Vocabulary (15 questions)
    {
      type: 'kanji',
      question: '「相談」のよみかたは どれですか。',
      options: ['そうだん', 'そうでん', 'しょうだん', 'しょうでん'],
      correctAnswer: 'そうだん',
    },
    {
      type: 'kanji',
      question: '「締切」のいみは どれですか。',
      options: ['Informasi', 'Perjalanan dinas', 'Batas waktu', 'Artikel'],
      correctAnswer: 'Batas waktu',
    },
    {
      type: 'vocabulary',
      question: 'この問題の＿＿＿が分かりません。',
      options: ['かいけつ', 'はってん', 'えいきょう', 'りゆう'],
      correctAnswer: 'かいけつ',
    },
    {
      type: 'vocabulary',
      question: '父は来年＿＿＿する予定です。',
      options: ['しゅっちょう', 'たいしょく', 'せつやく', 'よやく'],
      correctAnswer: 'たいしょく',
    },
    {
      type: 'vocabulary',
      question: '日本の＿＿＿について研究しています。',
      options: ['しゃかい', 'ぎじゅつ', 'じんこう', 'きょういく'],
      correctAnswer: 'しゃかい',
    },
     {
      type: 'kanji',
      question: '「環境」のよみかたは どれですか。',
      options: ['かんきょう', 'けんきょう', 'かんぎょう', 'けんぎょう'],
      correctAnswer: 'かんきょう',
    },
    {
      type: 'kanji',
      question: '「自然」のいみは どれですか。',
      options: ['Pendidikan', 'Masyarakat', 'Alam', 'Teknologi'],
      correctAnswer: 'Alam',
    },
     {
      type: 'vocabulary',
      question: 'この仕事の＿＿＿は何ですか。',
      options: ['もくてき', 'けっか', 'りゆう', 'けいけん'],
      correctAnswer: 'もくてき',
    },
    {
      type: 'vocabulary',
      question: '彼は＿＿＿が多くて、話が面白い。',
      options: ['けいけん', 'しゅうかん', 'きじ', 'じょうほう'],
      correctAnswer: 'けいけん',
    },
    {
      type: 'kanji',
      question: '「解決」のいみは どれですか。',
      options: ['Pengaruh', 'Perkembangan', 'Solusi', 'Masalah'],
      correctAnswer: 'Solusi',
    },

    // Section 2: Grammar (10 questions)
    {
      type: 'grammar',
      question: '先生にほめ＿＿＿、うれしかったです。',
      options: ['られて', 'させて', 'られて', 'させてられて'],
      correctAnswer: 'られて',
    },
    {
      type: 'grammar',
      question: '部長に この仕事を＿＿＿。',
      options: ['させられました', 'られました', 'させました', 'てあげました'],
      correctAnswer: 'させられました',
    },
    {
      type: 'grammar',
      question: '薬を飲んだ＿＿＿、元気になりました。',
      options: ['せいで', 'おかげで', 'のに', 'ために'],
      correctAnswer: 'おかげで',
    },
    {
        type: 'grammar',
        question: '雨が降った＿＿＿、試合は中止になりました。',
        options: ['せいで', 'おかげで', 'のに', 'ように'],
        correctAnswer: 'せいで',
    },
    {
        type: 'grammar',
        question: '健康の＿＿＿、野菜を食べるようにしています。',
        options: ['ために', 'ばあいは', 'せいで', 'おかげで'],
        correctAnswer: 'ために',
    },
    {
        type: 'grammar',
        question: '一生懸命勉強した＿＿＿、試験に落ちてしまった。',
        options: ['から', 'ので', 'のに', 'なら'],
        correctAnswer: 'のに',
    },
    {
        type: 'grammar',
        question: '社長はもう＿＿＿。',
        options: ['帰りました', 'お帰りになりました', '帰らせました', '帰られました'],
        correctAnswer: 'お帰りになりました',
    },
    {
        type: 'grammar',
        question: '私がご案内＿＿＿。',
        options: ['します', 'なさいます', 'いたします', 'いらっしゃいます'],
        correctAnswer: 'いたします',
    },
    {
        type: 'grammar',
        question: 'たった今、昼ご飯を食べた＿＿＿です。',
        options: ['ところ', 'ばかり', 'はず', 'べき'],
        correctAnswer: 'ところ',
    },
    {
        type: 'grammar',
        question: '火事の＿＿＿、エレベーターを使わないでください。',
        options: ['ばあいは', 'せいで', 'おかげで', 'ために'],
        correctAnswer: 'ばあいは',
    },

    // Section 3: Reading (5 questions)
    {
      type: 'reading',
      readingText: `「健康のため、毎日運動するようにしています。以前は、少し走っただけで疲れてしまいましたが、最近は１時間ぐらい走れるようになりました。毎日続けたおかげで、体調もよくなったと感じます。これからも頑張りたいと思います。」`,
      question: 'この人は なぜ 運動をしていますか。',
      options: ['楽しいから', '医者に言われたから', '健康のため', '友達と約束したから'],
      correctAnswer: '健康のため',
    },
    {
      type: 'reading',
      question: 'この人は 以前 どうでしたか。',
      options: ['１時間ぐらい走れた', 'すぐに疲れてしまった', '運動が嫌いだった', '毎日運動していた'],
      correctAnswer: 'すぐに疲れてしまった',
    },
    {
      type: 'reading',
      question: '「走れるようになりました」は どんな意味ですか。',
      options: ['走るのが好きになった', '走るのが嫌いになった', '以前は走れなかったが、今は走れるようになった', '以前は走れたが、今は走れなくなった'],
      correctAnswer: '以前は走れなかったが、今は走れるようになった',
    },
    {
      type: 'reading',
      question: '運動を続けた結果、どうなりましたか。',
      options: ['体調が悪くなった', '何も変わらなかった', '体調がよくなった', '疲れるようになった'],
      correctAnswer: '体調がよくなった',
    },
     {
      type: 'reading',
      question: 'この文章から、この人のどんな気持ちがわかりますか。',
      options: ['後悔している', '満足していて、これからも続けたい', 'もうやめたいと思っている', 'つまらないと感じている'],
      correctAnswer: '満足していて、これからも続けたい',
    },
  ],
};