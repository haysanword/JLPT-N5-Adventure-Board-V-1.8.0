import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-reading-3',
    level: 'N3',
    title: 'Latihan Membaca N3: Email Bisnis Formal',
    description: 'Pahami struktur dan bahasa dalam email bisnis, termasuk penggunaan Keigo.',
    xp: 280,
    content: `
      <h1>Membaca Email Bisnis Formal</h1>
      <p>Email bisnis di Jepang memiliki struktur dan tingkat kesopanan yang khas. Memahaminya adalah keterampilan penting dalam dunia profesional. Mari kita analisis email permintaan data dari Tanaka kepada manajer Suzuki.</p>
      
      <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; font-family: 'Meiryo', sans-serif;">
        <p><strong>件名：</strong>【ご確認】先月の売上データについて</p>
        <p>鈴木部長</p>
        <p>お疲れ様です。
        <br/>営業部の田中です。</p>
        <p>
        先月の売上データについてですが、本日中に拝見することは可能でしょうか。
        <br/>新しい企画書の作成のため、至急確認させていただきたいと考えております。
        </p>
        <p>
        お忙しいところ恐縮ですが、ご確認いただけますと幸いです。
        <br/>よろしくお願いいたします。
        </p>
        <p>
        --------------------<br/>
        田中 太郎<br/>
        営業部<br/>
        内線：1234
        </p>
      </div>
      
      <h2>Analisis Teks</h2>
      <p><strong>件名 (Kenmei):</strong> Subjek.【ご確認】(Gokakunin - Mohon Konfirmasi) menunjukkan email ini butuh perhatian.</p>
      <p><strong>鈴木部長 (Suzuki-buchou):</strong> Ditujukan kepada Manajer Suzuki.</p>
      <p><strong>お疲れ様です (Otsukaresama desu):</strong> Salam pembuka standar di lingkungan kerja.</p>
      <p><strong>拝見することは可能でしょうか (Haiken suru koto wa kanou deshou ka):</strong> "Apakah memungkinkan bagi saya untuk melihatnya?" - <code>Haiken suru</code> adalah Kenjougo (bahasa rendah hati) dari <code>見る</code> (miru - melihat).</p>
      <p><strong>至急確認させていただきたい (Shikyuu kakunin sasete itadakitai):</strong> "Saya ingin izin untuk segera mengonfirmasinya." - Ungkapan sangat sopan untuk menyatakan keinginan melakukan sesuatu.</p>
      <p><strong>お忙しいところ恐縮ですが (Oisogashii tokoro kyoushuku desu ga):</strong> "Maaf mengganggu di tengah kesibukan Anda, tapi..." - Frasa wajib saat meminta sesuatu dari atasan.</p>
      <p><strong>ご確認いただけますと幸いです (Gokakunin itadakemasu to saiwai desu):</strong> "Saya akan sangat berterima kasih jika Anda bisa mengonfirmasinya." - Ungkapan penutup permintaan yang sangat sopan.</p>
    `,
    audioScript: 'Ini adalah contoh email bisnis formal. Tanaka meminta data penjualan bulan lalu kepada Manajer Suzuki. Perhatikan penggunaan bahasa hormat seperti "haiken suru" untuk melihat dan "itadakemasu" untuk meminta.',
    listeningSituation: {
      title: 'Situasi: Respon dari Manajer',
      japaneseText: `(Suzuki membaca email dan membalas)
「田中さん、
ご連絡ありがとうございます。
承知いたしました。データは共有フォルダに入れておきましたので、ご確認ください。
よろしくお願いします。」`,
      indonesianText: `(Suzuki membaca email dan membalas)
"Tanaka-san,
Terima kasih atas informasinya.
Baik, saya mengerti. Datanya sudah saya letakkan di folder bersama, jadi silakan diperiksa.
Terima kasih."`,
      audioScript: '田中さん、ご連絡ありがとうございます。承知いたしました。データは共有フォルダに入れておきましたので、ご確認ください。よろしくお願いします。'
    },
    quiz: [
      { question: 'Apa tujuan utama Tanaka mengirim email ini?', options: ['Mengirim data penjualan', 'Meminta data penjualan', 'Mengajak rapat', 'Melaporkan masalah'], correctAnswer: 'Meminta data penjualan' },
      { question: 'Kapan Tanaka membutuhkan data tersebut?', options: ['Minggu depan', 'Kapan saja', 'Segera (hari ini)', 'Besok'], correctAnswer: 'Segera (hari ini)' },
      { question: 'Kata「拝見する」(haiken suru) adalah bentuk Kenjougo dari kata kerja...', options: ['言う (iu)', 'する (suru)', '見る (miru)', '行く (iku)'], correctAnswer: '見る (miru)' },
    ],
    vocabulary: [
        { japanese: '売上 (うりあげ)', romaji: 'uriage', indonesian: 'Penjualan' },
        { japanese: '企画書 (きかくしょ)', romaji: 'kikakusho', indonesian: 'Proposal Proyek' },
        { japanese: '至急 (しきゅう)', romaji: 'shikyuu', indonesian: 'Segera / Urgent' },
        { japanese: '恐縮 (きょうしゅく)', romaji: 'kyoushuku', indonesian: 'Merasa sangat menyesal/berterima kasih' },
        { japanese: '幸いです (さいわいです)', romaji: 'saiwai desu', indonesian: 'Saya akan sangat berterima kasih/senang' },
    ],
    minimalPairs: [
      { options: ['しきゅう', 'しきゅう'], romaji: ['shikyuu (urgent)', 'shikyuu (pembayaran)'], correctAnswer: 'しきゅう' }
    ]
  };