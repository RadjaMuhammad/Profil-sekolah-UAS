window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  const profileData = {
    sejarah: `
        <div class="mb-4">
            <h4>Tahun 1999 (9 April)</h4>
            <div class="row align-items-center">
                <div class="col-md-8">
                    <p>SMK 5 Telkom Banda Aceh merupakan sekolah menengah kejuruan swasta yang bernaung di bawah yayasan Pendidikan Telkom. Sekolah ini didirikan pada tanggal 9 April 1999 dan berlokasi di Jl. Contoh No. 123, Lampineung, Banda Aceh.</p>
                    <p>Pendirian sekolah ini bertujuan untuk menyediakan tenaga kerja terampil di bidang teknologi informasi dan komunikasi, sejalan dengan perkembangan pesat industri telekomunikasi di Indonesia pada masa itu.</p>
                </div>
                <div class="col-md-4">
                    <img src="https://smkn5telkom.sch.id/images/front/site/gedung_kantor_SMKN5.jpg" class="img-fluid rounded shadow-sm" alt="Gedung Sekolah">
                    <p class="text-center text-muted small mt-2">Gedung SMK 5 Telkom Banda Aceh</p>
                </div>
            </div>
        </div>

        <div class="mb-4">
            <h4>Tahun 2005 (13 November)</h4>
            <p>Pada tanggal 13 November 2005, Perusahaan Terbatas Telkomsel Banda Aceh menerima penyerahan dana hibah sebesar Rp 1.5 Miliar untuk fasilitas laboratorium dan pengembangan sekolah. Bantuan ini merupakan wujud komitmen Telkomsel dalam mendukung peningkatan kualitas pendidikan vokasi di Indonesia, khususnya di Aceh pasca-tsunami.</p>
            <p>Dengan adanya bantuan ini, SMK 5 Telkom Banda Aceh dapat melengkapi fasilitas belajar mengajar dengan peralatan yang lebih modern, sehingga meningkatkan kualitas pembelajaran bagi siswa di bidang teknologi telekomunikasi dan informasi.</p>
        </div>

        <div class="mb-4">
            <h4>Tahun 2010 (Juli)</h4>
            <p>Pada tahun 2010, SMK 5 Telkom Banda Aceh membuka kompetensi keahlian Rekayasa Perangkat Lunak (RPL). Kompetensi ini dirancang untuk membekali siswa dengan pengetahuan dan keterampilan dalam mengembangkan software, aplikasi web, dan mobile.</p>
        </div>

        <div>
            <h4>Tahun 2015 (Juli)</h4>
            <p>Pada tahun 2015, SMK 5 Telkom Banda Aceh menambah kompetensi keahlian Multimedia (MM). Kompetensi Multimedia mempersiapkan siswa untuk berkarir di bidang desain grafis, animasi, video editing, dan produksi konten digital kreatif lainnya.</p>
        </div>
    `,
    identitas: `
        <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Nama Sekolah</strong>
                <span>SMK 5 Telkom Banda Aceh</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>NPSN</strong>
                <span>10111577</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Alamat</strong>
                <span>Jln. Stadion H. Dimurthala No. 5, Kuta Baro</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Akreditasi</strong>
                <span>A</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Email</strong>
                <span>smkn5telkombandaaceh@gmail.com</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Telepon</strong>
                <span>0651-7552314</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Yayasan</strong>
                <span>Yayasan Pendidikan Telkom</span>
            </li>
        </ul>
    `,
    visiMisi: `
        <h4 class="text-primary fw-bold mb-3">Visi:</h4>
        <blockquote class="blockquote bg-light p-3 rounded border-start border-primary border-5">
            <p class="mb-0">"Menjadi Lembaga Pendidikan Vokasi Unggulan yang Menghasilkan Lulusan Berkompetensi Global di Bidang Teknologi Informasi dan Komunikasi Berlandaskan Nilai-nilai Keagamaan dan Kebangsaan."</p>
        </blockquote>

        <h4 class="text-primary fw-bold mt-4 mb-3">Misi:</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">1. Melaksanakan pendidikan dan pelatihan berbasis kompetensi sesuai standar industri.</li>
            <li class="list-group-item">2. Mengembangkan kurikulum yang relevan dengan kebutuhan dunia usaha dan dunia industri (DUDI).</li>
            <li class="list-group-item">3. Meningkatkan profesionalisme tenaga pendidik dan kependidikan.</li>
            <li class="list-group-item">4. Menyelenggarakan sarana dan prasarana pendidikan yang memadai dan mutakhir.</li>
            <li class="list-group-item">5. Membangun kerjasama yang erat dengan DUDI, perguruan tinggi, dan masyarakat.</li>
            <li class="list-group-item">6. Membentuk karakter siswa yang religius, mandiri, dan berjiwa wirausaha.</li>
        </ul>
    `,
    tujuan: `
        <h4 class="text-primary fw-bold mb-3">Tujuan:</h4>
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex align-items-start">
                <div class="ms-2 me-auto">
                    Menghasilkan lulusan yang memiliki kompetensi teknis dan soft skill yang tinggi, siap bersaing di pasar kerja global.
                </div>
            </li>
            <li class="list-group-item d-flex align-items-start">
                <div class="ms-2 me-auto">
                    Mewujudkan pembelajaran yang inovatif dan adaptif terhadap perkembangan teknologi terkini.
                </div>
            </li>
            <li class="list-group-item d-flex align-items-start">
                <div class="ms-2 me-auto">
                    Menciptakan lingkungan belajar yang kondusif, aman, dan mendukung pengembangan potensi siswa secara optimal.
                </div>
            </li>
            <li class="list-group-item d-flex align-items-start">
                <div class="ms-2 me-auto">
                    Menjadi pusat pengembangan keahlian di bidang TIK yang diakui secara nasional maupun internasional.
                </div>
            </li>
            <li class="list-group-item d-flex align-items-start">
                <div class="ms-2 me-auto">
                    Mengembangkan jiwa kewirausahaan pada siswa agar mampu menciptakan lapangan kerja.
                </div>
            </li>
        </ol>
    `
};