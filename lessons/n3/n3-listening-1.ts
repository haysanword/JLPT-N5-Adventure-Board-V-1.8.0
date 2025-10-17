import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-listening-1',
    level: 'N3',
    title: 'Latihan Mendengar N3: Pesan Suara',
    description: 'Dengarkan pesan suara di telepon (rusuban denwa) dan pahami permintaan di dalamnya.',
    xp: 250,
    content: `
      <h1>Latihan Pemahaman Mendengarkan (聴解 - Choukai)</h1>
      <p>Di level N3, kecepatan bicara dalam audio akan lebih natural dan mendekati percakapan sehari-hari. Anda juga akan diuji untuk memahami poin-poin penting dari sebuah monolog, seperti pesan suara.</p>
      
      <h2>Skenario: Pesan di Answering Machine</h2>
      <p>Anda akan mendengarkan pesan suara (留守番電話 - rusuban denwa) yang ditinggalkan oleh rekan kerja Anda, Tanaka-san. Dengarkan baik-baik dan coba tangkap tiga informasi kunci: <strong>siapa</strong> yang menelepon, <strong>apa topiknya</strong>, dan <strong>apa permintaannya</strong>.</p>

      <h3>Kosakata Kunci:</h3>
      <ul>
        <li><strong>留守番電話 (rusuban denwa):</strong> Answering machine / Pesan suara</li>
        <li><strong>件 (ken):</strong> Perihal / Mengenai</li>
        <li><strong>資料 (shiryou):</strong> Dokumen / Materi</li>
        <li><strong>机 (tsukue):</strong> Meja kerja</li>
        <li><strong>恐れ入りますが (osoreirimasu ga):</strong> Maaf merepotkan, tapi... (ungkapan sangat sopan)</li>
      </ul>
    `,
    audioScript: 'Ini adalah pelajaran mendengarkan N3. Anda akan mendengar sebuah pesan suara telepon dari rekan kerja dan harus menjawab pertanyaan pemahaman berdasarkan isinya.',
    listeningSituation: {
      title: 'Pesan Suara dari Tanaka-san',
      japaneseText: `「もしもし、田中です。お疲れ様です。明日の会議の件ですが、一部資料を会社に忘れてしまいました。恐れ入りますが、会議の前に、私の机の上からその資料を取ってきていただけないでしょうか。青いファイルに入っています。よろしくお願いします。」`,
      indonesianText: `「Halo, ini Tanaka. Terima kasih atas kerja kerasnya. Perihal rapat besok, saya tidak sengaja meninggalkan sebagian dokumen di kantor. Maaf sekali merepotkan, tetapi sebelum rapat, maukah Anda tolong ambilkan dokumen tersebut dari atas meja saya? Dokumennya ada di dalam map biru. Terima kasih atas bantuannya.」`,
      audioScript: 'もしもし、田中です。お疲れ様です。明日の会議の件ですが、一部資料を会社に忘れてしまいました。恐れ入りますが、会議の前に、私の机の上からその資料を取ってきていただけないでしょうか。青いファイルに入っています。よろしくお願いします。'
    },
    quiz: [
      { 
        question: 'Siapa yang meninggalkan pesan suara?', 
        options: ['Yamada-san', 'Seorang klien', 'Tanaka-san', 'Manajer'], 
        correctAnswer: 'Tanaka-san' 
      },
      { 
        question: 'Apa topik utama dari pesan ini?', 
        options: ['Membatalkan rapat', 'Mengubah jadwal rapat', 'Meminta bantuan terkait dokumen rapat', 'Mengajak makan siang'], 
        correctAnswer: 'Meminta bantuan terkait dokumen rapat' 
      },
      { 
        question: 'Apa yang Tanaka-san minta untuk Anda lakukan?', 
        options: ['Meneleponnya kembali', 'Mencetak dokumen baru', 'Membatalkan rapat untuknya', 'Mengambil dokumen dari mejanya'], 
        correctAnswer: 'Mengambil dokumen dari mejanya' 
      },
      { 
        question: 'Di mana dokumen tersebut berada?', 
        options: ['Di dalam tas Tanaka-san', 'Di ruang rapat', 'Di dalam map biru di atas mejanya', 'Di mesin fotokopi'], 
        correctAnswer: 'Di dalam map biru di atas mejanya' 
      },
      { 
        question: 'Kapan Anda diminta untuk mengambil dokumen tersebut?', 
        options: ['Setelah rapat selesai', 'Sekarang juga', 'Besok pagi sebelum rapat', 'Kapan saja'], 
        correctAnswer: 'Besok pagi sebelum rapat' 
      }
    ],
    vocabulary: [
        { japanese: '留守番電話', romaji: 'rusuban denwa', indonesian: 'Pesan Suara / Answering Machine' },
        { japanese: '件', romaji: 'ken', indonesian: 'Perihal / Mengenai' },
        { japanese: '資料', romaji: 'shiryou', indonesian: 'Dokumen / Materi' },
        { japanese: '机', romaji: 'tsukue', indonesian: 'Meja' },
        { japanese: '恐れ入りますが', romaji: 'osoreirimasu ga', indonesian: 'Maaf merepotkan, tapi... (sopan)' },
    ],
    minimalPairs: [
      { options: ['しりょう', 'しろ'], romaji: ['shiryou (dokumen)', 'shiro (putih/kastil)'], correctAnswer: 'しりょう' },
      { options: ['かいぎ', 'かいがい'], romaji: ['kaigi (rapat)', 'kaigai (luar negeri)'], correctAnswer: 'かいぎ' },
      { options: ['つくえ', 'つづく'], romaji: ['tsukue (meja)', 'tsuzuku (berlanjut)'], correctAnswer: 'つくえ' }
    ]
  };