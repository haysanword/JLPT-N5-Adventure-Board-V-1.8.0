import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-kanji-2',
    level: 'N4',
    title: 'Kanji N4: Tindakan, Objek & Konsep',
    description: 'Perluas pemahaman kanji Anda dengan karakter untuk tindakan sehari-hari, benda, dan ide-ide penting.',
    xp: 220,
    content: `
      <h1>Kanji N4 Lanjutan: Tindakan, Objek & Konsep</h1>
      <p>Di bagian ini, kita akan mempelajari kanji yang sering muncul dalam kata kerja, deskripsi benda, dan konsep yang sedikit lebih abstrak. Menguasai ini akan sangat membantu Anda dalam membaca kalimat yang lebih bervariasi.</p>
      
      <h2>Kategori: Tindakan & Gerakan</h2>
      <p>Kanji-kanji ini sering menjadi inti dari sebuah kata kerja.</p>
      <table>
        <tr><td>動 (ugoku) - bergerak</td><td>止 (tomaru) - berhenti</td></tr>
        <tr><td>開 (akeru) - membuka</td><td>閉 (shimeru) - menutup</td></tr>
        <tr><td>始 (hajimaru) - mulai</td><td>終 (owaru) - selesai</td></tr>
        <tr><td>貸 (kasu) - meminjamkan</td><td>借 (kariru) - meminjam</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 運動 (undou - olahraga), 禁止 (kinshi - larangan), 開始 (kaishi - permulaan), 終了 (shuuryou - akhir), 貸し出し (kashidashi - peminjaman)</p>
      
      <h2>Kategori: Benda & Materi</h2>
      <p>Kanji untuk benda-benda yang sering Anda temui.</p>
      <table>
        <tr><td>服 (fuku) - pakaian</td><td>物 (mono) - benda</td></tr>
        <tr><td>肉 (niku) - daging</td><td>鳥 (tori) - burung</td></tr>
        <tr><td>地 (chi) - tanah/bumi</td><td>図 (zu) - gambar/peta</td></tr>
        <tr><td>館 (kan) - gedung besar</td><td>品 (shina) - barang</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 洋服 (youfuku - pakaian gaya barat), 食べ物 (tabemono - makanan), 地図 (chizu - peta), 図書館 (toshokan - perpustakaan), 品物 (shinamono - barang dagangan)</p>
      
      <h2>Kategori: Konsep & Arah</h2>
      <p>Kanji-kanji ini membantu mendeskripsikan ide, kualitas, dan arah.</p>
      <table>
        <tr><td>特 (toku) - spesial</td><td>別 (betsu/waka) - terpisah/lain</td></tr>
        <tr><td>有 (aru) - ada/memiliki</td><td>無 (nai) - tidak ada</td></tr>
        <tr><td>便 (ben) - nyaman/pos</td><td>利 (ri) - keuntungan</td></tr>
        <tr><td>不 (fu) - tidak (awalan negatif)</td><td>以 (i) - dengan/sejak</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 特別 (tokubetsu - spesial), 有名 (yuumei - terkenal), 無料 (muryou - gratis), 便利 (benri - praktis), 不便 (fuben - tidak praktis), 以上 (ijou - lebih dari/selesai)</p>
    `,
    audioScript: 'Kanji N4 kali ini mencakup kata kerja seperti "ugoku" (bergerak) dan "tomaru" (berhenti). Ada juga kanji benda seperti "fuku" (pakaian) dan "niku" (daging). Konsep penting seperti "benri" (praktis) dan "fuben" (tidak praktis) juga diperkenalkan.',
    quiz: [
      { question: 'Gabungan kanji 「図書館」 berarti...', options: ['Museum', 'Gedung Bioskop', 'Perpustakaan', 'Rumah Sakit'], correctAnswer: 'Perpustakaan' },
      { question: 'Apa lawan kata dari 「貸す」 (kasu - meminjamkan)?', options: ['借りる (kariru)', '返す (kaesu)', '売る (uru)', '買う (kau)'], correctAnswer: '借りる (kariru)' },
      { question: 'Kanji untuk "mulai" adalah...', options: ['終', '始', '動', '止'], correctAnswer: '始' },
      { question: 'Jukugo 「便利」 (benri) berarti...', options: ['Spesial', 'Gratis', 'Terkenal', 'Praktis'], correctAnswer: 'Praktis' },
      { question: 'Apa arti dari 「食べ物」?', options: ['Minuman', 'Pakaian', 'Makanan', 'Barang'], correctAnswer: 'Makanan' },
      { question: 'Kanji 「閉」 (shimeru) berarti...', options: ['Membuka', 'Menutup', 'Mendorong', 'Menarik'], correctAnswer: 'Menutup' },
      { question: 'Gabungan 「有名」 (yuumei) berarti...', options: ['Tidak ada nama', 'Memiliki nama', 'Terkenal', 'Penuh nama'], correctAnswer: 'Terkenal' },
      { question: 'Awalan 「不」 (fu) biasanya memberikan arti...', options: ['Sangat', 'Akan', 'Super', 'Negatif/Tidak'], correctAnswer: 'Negatif/Tidak' },
      { question: 'Kanji apa yang digunakan dalam kata 「地図」 (chizu - peta)?', options: ['地 dan 図', '土 dan 図', '血 dan 図', '値 dan 図'], correctAnswer: '地 dan 図' },
      { question: 'Apa arti dari 「終了」 (shuuryou)?', options: ['Permulaan', 'Pembukaan', 'Pertengahan', 'Akhir/Selesai'], correctAnswer: 'Akhir/Selesai' }
    ],
    vocabulary: [
        { japanese: '動く', romaji: 'ugoku', indonesian: 'Bergerak' },
        { japanese: '止まる', romaji: 'tomaru', indonesian: 'Berhenti' },
        { japanese: '始める', romaji: 'hajimeru', indonesian: 'Memulai' },
        { japanese: '終わる', romaji: 'owaru', indonesian: 'Selesai' },
        { japanese: '便利', romaji: 'benri', indonesian: 'Praktis' },
        { japanese: '有名', romaji: 'yuumei', indonesian: 'Terkenal' },
    ]
  };