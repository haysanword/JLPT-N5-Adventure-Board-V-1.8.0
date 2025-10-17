import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-kanji-3',
    level: 'N3',
    title: 'Kanji N3: Verba & Tindakan Penting',
    description: 'Pelajari kanji yang membentuk kata kerja inti untuk tindakan sehari-hari dan bisnis.',
    xp: 260,
    content: `
      <h1>Kanji N3: Verba & Tindakan Penting</h1>
      <p>Menguasai kanji-kanji ini akan secara dramatis meningkatkan kemampuan Anda untuk membaca kalimat yang mengandung berbagai macam tindakan.</p>
      
      <h2>Kategori: Tindakan Dasar & Interaksi</h2>
      <table>
        <tr><td>助 (jo/tasu) - menolong</td><td>調 (chou/shira) - menyelidiki</td></tr>
        <tr><td>運 (un/hako) - membawa/keberuntungan</td><td>紹 (shou) - memperkenalkan</td></tr>
        <tr><td>介 (kai) - perantara</td><td>返 (hen/kae) - mengembalikan</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 助ける (tasukeru - menolong), 調査 (chousa - investigasi), 運ぶ (hakobu - membawa), 運動 (undou - olahraga), 紹介 (shoukai - perkenalan), 返事 (henji - balasan)</p>
      
      <h2>Kategori: Perubahan & Keputusan</h2>
      <table>
        <tr><td>続 (zoku/tsuzu) - berlanjut</td><td>辞 (ji/ya) - berhenti/kata</td></tr>
        <tr><td>落 (raku/o) - jatuh</td><td>残 (zan/noko) - sisa</td></tr>
        <tr><td>決 (ketsu/ki) - memutuskan</td><td>予 (yo) - sebelumnya</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 続ける (tsuzukeru - melanjutkan), 辞める (yameru - berhenti), 辞書 (jisho - kamus), 落とす (otosu - menjatuhkan), 残業 (zangyou - lembur), 決定 (kettei - keputusan), 予約 (yoyaku - reservasi)</p>
    `,
    audioScript: 'Kanji N3 kali ini fokus pada kata kerja. "Tasukeru" artinya menolong. "Shiraberu" artinya menyelidiki. "Shoukai" adalah perkenalan. "Yameru" artinya berhenti. Dan "yoyaku" adalah reservasi.',
    listeningSituation: {
      title: 'Situasi: Meminta Bantuan',
      japaneseText: `A: すみません、この荷物を運ぶのを手伝っていただけませんか。
B: はい、いいですよ。どこへ運びますか。
A: あちらの部屋までお願いします。助かります。`,
      indonesianText: `A: Permisi, maukah Anda membantu saya membawa barang ini?
B: Ya, tentu. Mau dibawa ke mana?
A: Tolong sampai ke ruangan sebelah sana. Sangat membantu.`,
      audioScript: 'A: すみません、この荷物を運ぶのを手伝っていただけませんか。 B: はい、いいですよ。どこへ運びますか。 A: あちらの部屋までお願いします。助かります。'
    },
    quiz: [
      { question: 'Gabungan kanji 「紹介」 dibaca...', options: ['しょうかい', 'じょうかい', 'しょうがい', 'じょうがい'], correctAnswer: 'しょうかい' },
      { question: 'Apa arti dari 「続ける」 (tsuzukeru)?', options: ['Memutuskan', 'Berhenti', 'Melanjutkan', 'Menjatuhkan'], correctAnswer: 'Melanjutkan' },
      { question: 'Kanji untuk "reservasi" adalah...', options: ['決定', '返事', '予約', '調査'], correctAnswer: '予約' },
    ],
    vocabulary: [
        { japanese: '助ける', romaji: 'tasukeru', indonesian: 'Menolong' },
        { japanese: '調べる', romaji: 'shiraberu', indonesian: 'Menyelidiki / Mencari tahu' },
        { japanese: '紹介', romaji: 'shoukai', indonesian: 'Perkenalan' },
        { japanese: '続ける', romaji: 'tsuzukeru', indonesian: 'Melanjutkan' },
        { japanese: '辞める', romaji: 'yameru', indonesian: 'Berhenti' },
        { japanese: '予約', romaji: 'yoyaku', indonesian: 'Reservasi' },
    ],
    minimalPairs: [
      { options: ['しらべる', 'くらべる'], romaji: ['shiraberu (menyelidiki)', 'kuraberu (membandingkan)'], correctAnswer: 'しらべる' },
      { options: ['かえす', 'かえる'], romaji: ['kaesu (mengembalikan)', 'kaeru (pulang/mengubah)'], correctAnswer: 'かえす' }
    ]
  };