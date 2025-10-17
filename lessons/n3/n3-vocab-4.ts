import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-vocab-4',
    level: 'N3',
    title: 'Kosakata N3: Pekerjaan & Masyarakat',
    description: 'Kosakata untuk diskusi yang lebih mendalam tentang dunia kerja dan struktur sosial.',
    xp: 250,
    content: `
      <h1>Kosakata N3: Pekerjaan & Masyarakat</h1>
      <p>Kosakata ini penting untuk memahami artikel berita, diskusi, dan topik-topik yang berkaitan dengan struktur masyarakat dan dunia profesional.</p>
      
      <h2>Pekerjaan & Ekonomi</h2>
      <ul>
        <li><strong>責任 (sekinin)</strong> - tanggung jawab. <em>Contoh: この仕事は責任が重いです。(Kono shigoto wa sekinin ga omoi desu.) - Pekerjaan ini tanggung jawabnya berat.</em></li>
        <li><strong>生産 (seisan)</strong> - produksi. <em>Contoh: 工場で車を生産しています。(Koujou de kuruma o seisan shiteimasu.) - Memproduksi mobil di pabrik.</em></li>
        <li><strong>消費 (shouhi)</strong> - konsumsi. <em>Contoh: 日本は石油の消費が多い。(Nihon wa sekiyu no shouhi ga ooi.) - Konsumsi minyak bumi di Jepang banyak.</em></li>
        <li><strong>給料 (kyuuryou)</strong> - gaji.</li>
      </ul>
      
      <h2>Struktur & Aturan Sosial</h2>
      <ul>
        <li><strong>政府 (seifu)</strong> - pemerintah. <em>Contoh: 政府が新しい法律を発表しました。(Seifu ga atarashii houritsu o happyou shimashita.) - Pemerintah mengumumkan undang-undang baru.</em></li>
        <li><strong>法律 (houritsu)</strong> - hukum/undang-undang.</li>
        <li><strong>安全 (anzen)</strong> - keamanan ↔ <strong>危険 (kiken)</strong> - bahaya.</li>
        <li><strong>自由 (jiyuu)</strong> - kebebasan. <em>Contoh: 自由に意見を言ってください。(Jiyuu ni iken o itte kudasai.) - Silakan sampaikan pendapat Anda dengan bebas.</em></li>
      </ul>
    `,
    audioScript: 'Kosakata N3 ini tentang kerja dan masyarakat. "Sekinin" adalah tanggung jawab. "Seisan" produksi, "shouhi" konsumsi. "Seifu" adalah pemerintah, dan "houritsu" adalah hukum.',
    listeningSituation: {
      title: 'Situasi: Cuplikan Berita',
      japaneseText: `政府は、来月から新しい法律を実施すると発表しました。この法律は、国民の安全を守ることを目的としています。`,
      indonesianText: `Pemerintah mengumumkan akan memberlakukan undang-undang baru mulai bulan depan. Undang-undang ini bertujuan untuk melindungi keamanan warga negara.`,
      audioScript: '政府は、来月から新しい法律を実施すると発表しました。この法律は、国民の安全を守ることを目的としています。'
    },
    quiz: [
      { question: 'Apa arti dari 「責任」 (sekinin)?', options: ['Gaji', 'Produksi', 'Tanggung Jawab', 'Konsumsi'], correctAnswer: 'Tanggung Jawab' },
      { question: 'Lawan kata dari 「安全」 (anzen) adalah...', options: ['じゆう (jiyuu)', 'きけん (kiken)', 'ほうりつ (houritsu)', 'せいふ (seifu)'], correctAnswer: 'きけん (kiken)' },
      { question: 'Kata untuk "pemerintah" adalah...', options: ['せいふ (seifu)', 'しゃかい (shakai)', 'けいざい (keizai)', 'せいさん (seisan)'], correctAnswer: 'せいふ (seifu)' },
    ],
    vocabulary: [
        { japanese: '責任', romaji: 'sekinin', indonesian: 'Tanggung Jawab' },
        { japanese: '生産', romaji: 'seisan', indonesian: 'Produksi' },
        { japanese: '消費', romaji: 'shouhi', indonesian: 'Konsumsi' },
        { japanese: '給料', romaji: 'kyuuryou', indonesian: 'Gaji' },
        { japanese: '政府', romaji: 'seifu', indonesian: 'Pemerintah' },
        { japanese: '法律', romaji: 'houritsu', indonesian: 'Hukum / Undang-undang' },
    ],
    minimalPairs: [
      { options: ['せいふ', 'さいふ'], romaji: ['seifu (pemerintah)', 'saifu (dompet)'], correctAnswer: 'せいふ' },
      { options: ['あんぜん', 'かんぜん'], romaji: ['anzen (aman)', 'kanzen (sempurna)'], correctAnswer: 'あんぜん' }
    ]
  };