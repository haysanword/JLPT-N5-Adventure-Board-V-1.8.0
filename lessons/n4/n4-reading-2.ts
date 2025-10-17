import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-reading-2',
    level: 'N4',
    title: 'Latihan Membaca: Pengumuman Acara Sekolah',
    description: 'Baca dan pahami pengumuman tentang festival budaya sekolah (Bunkasai).',
    xp: 210,
    content: `
      <h1>Membaca Pengumuman: Festival Budaya (文化祭)</h1>
      <p>Pengumuman seperti ini sering ditemukan di papan buletin sekolah atau komunitas. Kunci membacanya adalah menemukan 5W (What, Who, Where, When, Why) dengan cepat.</p>

      <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; font-family: 'Meiryo', sans-serif;">
        <p style="text-align: center; font-weight: bold; font-size: 1.2em;">さくら高校「文化祭」のお知らせ</p>
        <p>
        皆さん、
        <br/>今年の文化祭が近づいてきました。学生たちが準備した楽しいイベントがたくさんあります。
        </p>
        <ul>
          <li><strong>日時：</strong>１１月３日（土）午前１０時 ～ 午後４時</li>
          <li><strong>場所：</strong>さくら高校の体育館と教室</li>
          <li><strong>内容：</strong>
            <ul>
              <li>クラスの出し物（カフェ、お化け屋敷など）</li>
              <li>クラブ活動の発表（音楽、ダンス）</li>
              <li>食べ物の販売</li>
            </ul>
          </li>
        </ul>
        <p>
        家族や友達を連れて、ぜひ来てください。入場は無料です。
        <br/>雨天の場合も行います。
        </p>
      </div>
      
      <h2>Analisis Teks</h2>
      <p><strong>(What?) Apa acaranya?</strong> → 文化祭 (Bunkasai - Festival Budaya) di さくら高校 (SMA Sakura).</p>
      <p><strong>(When?) Kapan?</strong> → １１月３日（土）午前１０時 ～ 午後４時 (3 November (Sabtu), jam 10 pagi - 4 sore).</p>
      <p><strong>(Where?) Di mana?</strong> → 体育館と教室 (Taiikukan to kyoushitsu - GOR dan ruang kelas).</p>
      <p><strong>(What kind of activities?) Aktivitas apa saja?</strong> → 出し物 (dashimono - pertunjukan/stan kelas) seperti kafe dan rumah hantu, 発表 (happyou - presentasi/pertunjukan) klub, dan penjualan makanan.</p>
      <p><strong>(Other Info) Info lain?</strong> → Boleh mengajak keluarga/teman, 入場は無料 (nyuujou wa muryou - tiket masuk gratis), dan tetap diadakan meskipun hujan (雨天の場合も行います - uten no baai mo okonaimasu).</p>
    `,
    audioScript: 'Ini adalah pengumuman tentang Bunkasai atau festival budaya di SMA Sakura. Acara diadakan pada 3 November dari jam 10 pagi sampai 4 sore. Lokasinya di GOR dan ruang kelas. Masuknya gratis dan tetap diadakan meski hujan.',
    quiz: [
      { question: 'Kapan festival budaya akan diadakan?', options: ['11 November', '3 Oktober', '3 November', 'Setiap hari Sabtu'], correctAnswer: '3 November' },
      { question: 'Di mana lokasi utama acara?', options: ['Hanya di GOR', 'Hanya di ruang kelas', 'Di GOR dan ruang kelas', 'Di lapangan sekolah'], correctAnswer: 'Di GOR dan ruang kelas' },
      { question: 'Manakah dari berikut ini yang BUKAN merupakan acara di festival?', options: ['Kafe', 'Ujian akhir', 'Rumah hantu', 'Pertunjukan dansa'], correctAnswer: 'Ujian akhir' },
      { question: 'Berapa biaya untuk masuk ke festival ini?', options: ['1000 yen', '500 yen', 'Tergantung acara', 'Gratis'], correctAnswer: 'Gratis' },
      { question: 'Apa yang terjadi jika pada hari itu hujan?', options: ['Acara dibatalkan', 'Acara ditunda', 'Acara tetap dilaksanakan', 'Hanya acara di dalam ruangan yang dilaksanakan'], correctAnswer: 'Acara tetap dilaksanakan' }
    ]
  };