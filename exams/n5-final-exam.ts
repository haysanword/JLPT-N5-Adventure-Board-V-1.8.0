import { FinalExam } from '../types';

export const exam: FinalExam = {
  id: 'n5-final-exam',
  level: 'N5',
  title: 'Ujian Akhir N5',
  description: 'Uji pemahaman komprehensif Anda tentang kosakata, kanji, dan tata bahasa level N5.',
  questions: [
    // Section 1: Kanji & Vocabulary (15 questions)
    {
      type: 'kanji',
      question: '「川」のよみかたは どれですか。',
      options: ['やま', 'かわ', 'た', 'き'],
      correctAnswer: 'かわ',
    },
    {
      type: 'kanji',
      question: '「私」は どんな いみですか。',
      options: ['Kamu', 'Dia', 'Saya', 'Mereka'],
      correctAnswer: 'Saya',
    },
    {
      type: 'kanji',
      question: '「食べます」のかんじは どれですか。',
      options: ['食', '飲', '見', '聞'],
      correctAnswer: '食',
    },
    {
        type: 'kanji',
        question: '「月曜日」のよみかたは どれですか。',
        options: ['かようび', 'げつようび', 'すいようび', 'もくようび'],
        correctAnswer: 'げつようび',
    },
    {
        type: 'kanji',
        question: '「大きい」の はんたいは どれですか。',
        options: ['小さい', '高い', '安い', '新しい'],
        correctAnswer: '小さい',
    },
    {
      type: 'vocabulary',
      question: '毎日、としょかん＿＿ 本を よみます。',
      options: ['で', 'に', 'を', 'へ'],
      correctAnswer: 'で',
    },
    {
      type: 'vocabulary',
      question: 'きのう、あたらしい くつを＿＿＿。',
      options: ['かいました', 'みました', 'たべました', 'のみました'],
      correctAnswer: 'かいました',
    },
    {
      type: 'vocabulary',
      question: 'すみません、＿＿＿は どこですか。',
      options: ['えき', 'さかな', 'にく', 'ほん'],
      correctAnswer: 'えき',
    },
     {
      type: 'vocabulary',
      question: 'この りんごは とても＿＿＿ですね。',
      options: ['おそい', 'おいしい', 'きたない', 'くらい'],
      correctAnswer: 'おいしい',
    },
    {
      type: 'vocabulary',
      question: 'へやに つくえが ＿＿＿あります。',
      options: ['ふたつ', 'ふたり', 'にまい', 'にほん'],
      correctAnswer: 'ふたつ',
    },
    {
      type: 'vocabulary',
      question: 'あしたは ＿＿＿から、かいしゃは やすみです。',
      options: ['げつようび', 'どようび', 'すいようび', 'かようび'],
      correctAnswer: 'どようび',
    },
    {
      type: 'vocabulary',
      question: 'かれは ＿＿＿くるまで がっこうへ いきます。',
      options: ['しろい', 'あおい', 'あかい', 'くろい'],
      correctAnswer: 'あかい',
    },
    {
        type: 'kanji',
        question: '「三百」は いくらですか。',
        options: ['30', '300', '3000', '30000'],
        correctAnswer: '300',
    },
    {
        type: 'kanji',
        question: '「女の人」のよみかたは どれですか。',
        options: ['おとこのひと', 'おんなのひと', 'こども', 'おとな'],
        correctAnswer: 'おんなのひと',
    },
    {
        type: 'vocabulary',
        question: 'わたしは ときどき えいがを＿＿＿。',
        options: ['みます', 'ききます', 'はなします', 'いきます'],
        correctAnswer: 'みます',
    },

    // Section 2: Grammar (10 questions)
    {
      type: 'grammar',
      question: 'これは わたし＿＿＿ほんです。',
      options: ['が', 'は', 'の', 'を'],
      correctAnswer: 'の',
    },
    {
      type: 'grammar',
      question: 'わたしも がくせいです＿＿＿',
      options: ['か', 'ね', '。', 'と'],
      correctAnswer: '。',
    },
    {
      type: 'grammar',
      question: 'いっしょに ひるごはんを たべ＿＿＿か。',
      options: ['ます', 'ましょう', 'ませんか', 'たい'],
      correctAnswer: 'ませんか',
    },
    {
        type: 'grammar',
        question: 'あした、ともだち＿＿＿あいます。',
        options: ['に', 'で', 'を', 'が'],
        correctAnswer: 'に',
    },
    {
        type: 'grammar',
        question: 'バス＿＿＿えきまで いきました。',
        options: ['で', 'に', 'へ', 'と'],
        correctAnswer: 'で',
    },
    {
        type: 'grammar',
        question: 'このテストは むずかしく＿＿＿。',
        options: ['ないです', 'ありません', 'じゃないです', 'ではありません'],
        correctAnswer: 'ないです',
    },
    {
        type: 'grammar',
        question: 'きのう、たくさん べんきょうした＿＿＿、ねむいです。',
        options: ['から', 'ので', 'のに', 'ても'],
        correctAnswer: 'から',
    },
    {
        type: 'grammar',
        question: 'わたしは かんじを よむこと＿＿＿できます。',
        options: ['が', 'を', 'は', 'も'],
        correctAnswer: 'が',
    },
    {
        type: 'grammar',
        question: 'としょかんで ほんを かりた＿＿＿、うちへ かえりました。',
        options: ['あとで', 'から', 'まえに', 'ながら'],
        correctAnswer: 'あとで',
    },
    {
        type: 'grammar',
        question: 'ここで しゃしんを とらないで＿＿＿。',
        options: ['ください', 'ましょう', 'ませんか', 'たいです'],
        correctAnswer: 'ください',
    },

    // Section 3: Reading (5 questions)
    {
      type: 'reading',
      readingText: `わたしの なまえは キムです。かんこくじんです。
せんしゅう、にほんへ きました。
いま、ともだちのうちに すんでいます。
うちから だいがくまでは とおいです。だから、まいにち でんしゃで いきます。
にほんの でんしゃは とても べんりです。`,
      question: 'キムさんは どこから きましたか。',
      options: ['にほん', 'かんこく', 'ちゅうごく', 'アメリカ'],
      correctAnswer: 'かんこく',
    },
    {
      type: 'reading',
      question: 'いま、キムさんは どこに すんでいますか。',
      options: ['だいがくの りょう', 'じぶんの アパート', 'ともだちの うち', 'ホテル'],
      correctAnswer: 'ともだちの うち',
    },
    {
      type: 'reading',
      question: 'キムさんは なんで だいがくへ いきますか。',
      options: ['バス', 'じてんしゃ', 'くるま', 'でんしゃ'],
      correctAnswer: 'でんしゃ',
    },
    {
        type: 'reading',
        question: 'うちから だいがくまでは どうですか。',
        options: ['ちかいです', 'とおいです', 'しずかです', 'にぎやかです'],
        correctAnswer: 'とおいです',
    },
    {
        type: 'reading',
        question: 'キムさんは にほんのでんしゃは どうだと おもっていますか。',
        options: ['ふべんだと おもっています', 'べんりだと おもっています', 'たかいと おもっています', 'やすいと おもっています'],
        correctAnswer: 'べんりだと おもっています',
    },
  ],
};
