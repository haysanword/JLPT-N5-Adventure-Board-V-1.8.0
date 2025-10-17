import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-gr-5',
    level: 'N4',
    title: 'Tata Bahasa N4: Bentuk Kausatif',
    description: 'Pelajari bentuk kausatif (～させる) untuk menyatakan "menyuruh/membuat/membiarkan" seseorang melakukan sesuatu.',
    xp: 250,
    content: `
      <h1>Kalimat Kausatif (しえき) - Menyuruh, Membuat, atau Membiarkan</h1>
      <p>Bentuk kausatif digunakan ketika subjek kalimat <strong>menyebabkan</strong> orang lain melakukan sebuah aksi. Ini bisa berarti "menyuruh", "membuat", atau "mengizinkan/membiarkan".</p>
      
      <h2>Cara Membentuk:</h2>
      <ul>
        <li><strong>Grup 1 (-u):</strong> Ubah vokal akhir ke vokal <code>-a</code> lalu tambah <code>せる</code>.<br/><em>Contoh: <strong>かく (kaku - menulis)</strong> → <strong>かかせる (kakaseru - menyuruh menulis)</strong></em></li>
        <li><strong>Grup 2 (-ru):</strong> Ganti <code>る</code> dengan <code>させる</code>.<br/><em>Contoh: <strong>たべる (taberu - makan)</strong> → <strong>たべさせる (tabesaseru - menyuruh/membiarkan makan)</strong></em></li>
        <li><strong>Grup 3:</strong><br/>
            <ul>
                <li><strong>する (suru)</strong> → <strong>させる (saseru - menyuruh melakukan)</strong></li>
                <li><strong>くる (kuru)</strong> → <strong>こさせる (kosaseru - menyuruh datang)</strong></li>
            </ul>
        </li>
      </ul>
      
      <h2>Siapa yang Disuruh? (Partikel に atau を)</h2>
      <p>Ini bagian yang sedikit rumit. Partikel yang menandai "orang yang disuruh" bergantung pada jenis kata kerjanya.</p>
      <ul>
          <li><strong>Jika kata kerja Intransitif (tidak punya objek):</strong> Gunakan partikel <code>を</code>.<br/><em>Contoh: わたしは こども<strong>を</strong> いかせます。(Watashi wa kodomo <strong>o</strong> ikasemasu.) - Saya membiarkan anak pergi.</em></li>
          <li><strong>Jika kata kerja Transitif (punya objek):</strong> Gunakan partikel <code>に</code>.<br/><em>Contoh: せんせいは がくせい<strong>に</strong> しゅくだいを させました。(Sensei wa gakusei <strong>ni</strong> shukudai o sasemashita.) - Guru menyuruh murid mengerjakan PR.</em> (PR adalah objeknya).</li>
      </ul>

      <h2>Bentuk ～ていただけませんか (Maukah Anda...?)</h2>
      <p>Ini adalah cara yang sangat sopan untuk meminta seseorang melakukan sesuatu untuk Anda. Ini adalah bentuk yang lebih sopan dari <code>～てください</code>.</p>
      <p><em>Contoh: <strong>すみません、この漢字の読み方を教えていただけませんか。</strong> (Sumimasen, kono kanji no yomikata o oshiete itadakemasen ka.) - Permisi, maukah Anda memberitahu saya cara membaca kanji ini?</em></p>
    `,
    audioScript: 'Bentuk kausatif digunakan untuk menyuruh, membuat, atau membiarkan seseorang melakukan sesuatu. Misalnya, "kakaseru" berarti menyuruh menulis. Untuk meminta tolong dengan sangat sopan, gunakan pola "te itadakemasen ka".',
    listeningSituation: {
      title: 'Situasi: Perintah dari Ibu',
      japaneseText: `母：太郎、部屋を掃除させますよ。
太郎：えー、今から？
母：はい、今からです。友達が来る前に、きれいにしてください。`,
      indonesianText: `Ibu: Taro, Ibu suruh kamu bersihkan kamar ya.
Taro: Hah, sekarang?
Ibu: Ya, dari sekarang. Tolong bersihkan sebelum temanmu datang.`,
      audioScript: '母：太郎、部屋を掃除させますよ。 太郎：えー、今から？ 母：はい、今からです。友達が来る前に、きれいにしてください。'
    },
    quiz: [
      { question: 'Bentuk kausatif dari kata kerja "yomu" (membaca) adalah...', options: ['よませる', 'よめせる', 'よみさせる', 'よまれる'], correctAnswer: 'よませる' },
      { question: 'Bagaimana cara mengatakan "Guru menyuruh murid menulis kanji"?', options: ['先生は学生に漢字を書かせました。', '先生は学生が漢字を書きました。', '先生は学生に漢字を書かれました。', '学生は先生に漢字を書きました。'], correctAnswer: '先生は学生に漢字を書かせました。' },
      { question: 'Bentuk kausatif dari "miru" (melihat) adalah...', options: ['みさせる', 'みられる', 'みえる', 'みせる'], correctAnswer: 'みさせる' },
      { question: 'Pilih partikel yang tepat: "母は子供＿＿＿野菜を食べさせました。"', options: ['を', 'に', 'が', 'で'], correctAnswer: 'に' },
      { question: 'Kalimat "Saya membiarkan anak saya pergi ke taman" yang benar adalah...', options: ['子供を公園に行かせました。', '子供に公園に行かせました。', '子供が公園に行きました。', '子供は公園に行かれました。'], correctAnswer: '子供を公園に行かせました。' },
      { question: 'Ungkapan "Maukah Anda membantu saya?" yang paling sopan adalah...', options: ['手伝ってください。', '手伝ってくれませんか。', '手伝っていただけませんか。', '手伝ってあげます。'], correctAnswer: '手伝っていただけませんか。' }
    ],
    vocabulary: [
        { japanese: '～させる', romaji: '-(s)aseru', indonesian: 'Menyuruh/Membuat/Membiarkan' },
        { japanese: 'よませる', romaji: 'yomaseru', indonesian: 'Menyuruh membaca' },
        { japanese: 'たべさせる', romaji: 'tabesaseru', indonesian: 'Menyuruh makan' },
        { japanese: 'させる', romaji: 'saseru', indonesian: 'Menyuruh melakukan' },
        { japanese: '～ていただけませんか', romaji: 'te itadakemasen ka', indonesian: 'Maukah Anda... (sangat sopan)' },
    ],
    minimalPairs: [
        { options: ['またせる', 'わたせる'], romaji: ['mataseru (menyuruh tunggu)', 'wataseru (bisa menyerahkan)'], correctAnswer: 'またせる' },
        { options: ['いかせる', 'いかされる'], romaji: ['ikaseru (membiarkan pergi)', 'ikasareru (dibiarkan hidup)'], correctAnswer: 'いかせる' },
        { options: ['こさせる', 'こわさせる'], romaji: ['kosaseru (menyuruh datang)', 'kowasaseru (menyuruh rusak)'], correctAnswer: 'こさせる' }
    ]
  };