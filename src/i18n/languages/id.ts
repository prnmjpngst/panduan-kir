import Key from "../i18nKey";
import type { Translation } from "../translation";

export const id: Translation = {
	[Key.home]: "Beranda",
	[Key.about]: "Tentang",
	[Key.archive]: "Arsip",
	[Key.search]: "Cari",
	[Key.searchNoResults]: "Tidak ada hasil ditemukan.",
	[Key.searchTypeSomething]: "Ketik sesuatu untuk mencari...",
	[Key.searchLoading]: "Mencari...",
	[Key.searchSummary]: "Ringkasan",
	[Key.searchContent]: "Konten",
	[Key.searchViewMore]: "Lihat hasil lainnya ({count} lainnya)",
	[Key.other]: "Lainnya",
	[Key.all]: "Semua",

	[Key.tags]: "Tag",
	[Key.categories]: "Kategori",
	[Key.recentPosts]: "Postingan Terbaru",
	[Key.postList]: "Daftar Postingan",
	[Key.tableOfContents]: "Daftar Isi",
	[Key.tocEmpty]: "Tidak ada daftar isi di halaman ini",
	[Key.music]: "Musik",
	[Key.musicNoPlaying]: "Tidak ada yang diputar",
	[Key.musicLyrics]: "Lirik",
	[Key.musicVolume]: "Volume",
	[Key.musicPlayMode]: "Ubah Mode Putar",
	[Key.musicPrev]: "Sebelumnya",
	[Key.musicNext]: "Berikutnya",
	[Key.musicPlaylist]: "Daftar Putar",
	[Key.musicNoLyrics]: "Tidak ada lirik tersedia",
	[Key.musicLoadingLyrics]: "Memuat lirik...",
	[Key.musicFailedLyrics]: "Gagal memuat lirik",
	[Key.musicNoSongs]: "Tidak ada lagu",
	[Key.musicError]: "Kesalahan Pemutar",
	[Key.musicPlay]: "Putar",
	[Key.musicPause]: "Jeda",
	[Key.musicProgress]: "Progres Pemutaran",
	[Key.musicCover]: "Sampul",
	[Key.musicNoCover]: "Tidak ada sampul tersedia",
	[Key.musicAudioPlayer]: "Pemutar Audio",

	// Announcement
	[Key.announcement]: "Pengumuman",
	[Key.announcementClose]: "Tutup",

	[Key.comments]: "Komentar",
	[Key.commentSection]: "Komentar",
	[Key.commentSubtitle]: "Bagikan pemikiran Anda dan berdiskusi dengan semua orang",
	[Key.commentNotConfigured]: "Sistem komentar belum dikonfigurasi",
	[Key.guestbookCommentHint]:
		"Anda belum mengaktifkan sistem komentar dalam file konfigurasi. Setelah diaktifkan, pengunjung akan dapat meninggalkan pesan di sini",
	[Key.friends]: "Teman",
	[Key.friendsDescription]:
		"Berikut adalah teman-teman saya, selamat berkunjung dan saling berkomunikasi",
	[Key.guestbook]: "Buku Tamu",
	[Key.guestbookDescription]:
		"Selamat datang untuk meninggalkan jejak Anda di sini, bagikan pemikiran dan saran Anda",
	[Key.untitled]: "Tanpa Judul",
	[Key.uncategorized]: "Tidak Dikategorikan",
	[Key.noTags]: "Tanpa Tag",

	[Key.wordCount]: "kata",
	[Key.wordsCount]: "kata",
	[Key.minuteCount]: "menit",
	[Key.minutesCount]: "menit",
	[Key.postCount]: "postingan",
	[Key.postsCount]: "postingan",

	[Key.themeColor]: "Warna Tema",

	[Key.lightMode]: "Terang",
	[Key.darkMode]: "Gelap",
	[Key.systemMode]: "Sistem",

	[Key.more]: "Lainnya",
	[Key.collapse]: "Tutup",

	[Key.author]: "Penulis",
	[Key.publishedAt]: "Diterbitkan pada",
	[Key.updatedAt]: "Diperbarui pada",
	[Key.readTime]: "Waktu baca",
	[Key.license]: "Lisensi",
	[Key.bangumi]: "Bangumi",

	// Bangumi Filter and Status Text
	[Key.bangumiTitle]: "Bangumi Saya",
	[Key.bangumiSubtitle]: "Rekam perjalanan ACG saya",
	[Key.bangumiFilterAll]: "Semua",
	[Key.bangumiFilterWatched]: "Ditonton",
	[Key.bangumiFilterWatching]: "Menonton",
	[Key.bangumiFilterWish]: "Ingin",
	[Key.bangumiFilterOnHold]: "Ditunda",
	[Key.bangumiFilterDropped]: "Ditinggalkan",
	[Key.bangumiFilterGamePlayed]: "Dimainkan",
	[Key.bangumiFilterGamePlaying]: "Memainkan",
	[Key.bangumiFilterGameWish]: "Ingin Dimainkan",
	[Key.bangumiFilterBookRead]: "Dibaca",
	[Key.bangumiFilterBookReading]: "Membaca",
	[Key.bangumiFilterBookWish]: "Ingin Dibaca",
	[Key.bangumiFilterMusicListened]: "Didengar",
	[Key.bangumiFilterMusicListening]: "Mendengar",
	[Key.bangumiFilterMusicWish]: "Ingin Didengar",
	[Key.bangumiStatusWish]: "Ingin",
	[Key.bangumiStatusWatched]: "Ditonton",
	[Key.bangumiStatusWatching]: "Menonton",
	[Key.bangumiStatusOnHold]: "Ditunda",
	[Key.bangumiStatusDropped]: "Ditinggalkan",
	[Key.bangumiStatusGameWish]: "Ingin Dimainkan",
	[Key.bangumiStatusGamePlayed]: "Dimainkan",
	[Key.bangumiStatusGamePlaying]: "Memainkan",
	[Key.bangumiStatusBookWish]: "Ingin Dibaca",
	[Key.bangumiStatusBookRead]: "Dibaca",
	[Key.bangumiStatusBookReading]: "Membaca",
	[Key.bangumiStatusMusicWish]: "Ingin Didengar",
	[Key.bangumiStatusMusicListened]: "Didengar",
	[Key.bangumiStatusMusicListening]: "Mendengar",
	[Key.bangumiStatusUnknown]: "Tidak Diketahui",
	[Key.bangumiNoData]: "Tidak Ada Data",
	[Key.bangumiNoDataDescription]: "Tidak ada item dalam kategori ini",
	[Key.bangumiEmpty]: "Tidak Ada Data",
	[Key.bangumiEmptyReason]:
		"Kemungkinan alasan: nama pengguna tidak ada, masalah koneksi jaringan, atau batas API",
	[Key.bangumiUsername]: "Nama Pengguna",
	[Key.bangumiApi]: "API",
	[Key.bangumiConfigTip]:
		"Tip: Harap atur nama pengguna Bangumi yang benar di konfigurasi halaman",
	[Key.bangumiPrevPage]: "Sebelumnya",
	[Key.bangumiNextPage]: "Berikutnya",
	[Key.bangumiCurrentPage]: "Halaman",
	[Key.bangumiTotalPages]: "dari",
	[Key.bangumiPage]: "halaman",

	// Bangumi Categories
	[Key.bangumiCategoryBook]: "Buku",
	[Key.bangumiCategoryAnime]: "Anime",
	[Key.bangumiCategoryMusic]: "Musik",
	[Key.bangumiCategoryGame]: "Game",
	[Key.bangumiCategoryReal]: "Nyata",

	// Bangumi Data Update
	[Key.bangumiLastUpdated]: "Data diperbarui pada",
	[Key.bangumiUpdatedAt]: "Waktu build",
	[Key.bangumiDataStatic]: "Data statis",

	// Pagination
	[Key.paginationFirst]: "Pertama",
	[Key.paginationPrev]: "Sebelumnya",
	[Key.paginationNext]: "Berikutnya",
	[Key.paginationLast]: "Terakhir",
	[Key.paginationPage]: "Halaman",
	[Key.paginationOf]: "dari",
	[Key.paginationTotal]: ", Total",
	[Key.paginationRecords]: " catatan",

	// 404 Page
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "Halaman Tidak Ditemukan",
	[Key.notFoundDescription]:
		"Maaf, halaman yang Anda kunjungi tidak ada atau telah dipindahkan.",
	[Key.backToHome]: "Kembali ke Beranda",

	// RSS Page
	[Key.rss]: "RSS Feed",
	[Key.rssDescription]: "Berlangganan untuk mendapatkan pembaruan terbaru",
	[Key.rssSubtitle]:
		"Berlangganan melalui RSS untuk segera mendapatkan artikel dan pembaruan terbaru",
	[Key.rssLink]: "Tautan RSS",
	[Key.rssCopyToReader]: "Salin tautan ke pembaca RSS Anda",
	[Key.rssCopyLink]: "Salin Tautan",
	[Key.rssLatestPosts]: "Postingan Terbaru",
	[Key.rssWhatIsRSS]: "Apa itu RSS?",
	[Key.rssWhatIsRSSDescription]:
		"RSS (Really Simple Syndication) adalah format standar untuk menerbitkan konten yang sering diperbarui. Dengan RSS, Anda dapat:",
	[Key.rssBenefit1]:
		"Mendapatkan konten situs web terbaru tepat waktu tanpa harus mengunjungi secara manual",
	[Key.rssBenefit2]: "Mengelola langganan ke beberapa situs web di satu tempat",
	[Key.rssBenefit3]: "Menghindari melewatkan pembaruan dan artikel penting",
	[Key.rssBenefit4]: "Menikmati pengalaman membaca yang bersih dan bebas iklan",
	[Key.rssHowToUse]:
		"Disarankan untuk menggunakan Feedly, Inoreader, atau pembaca RSS lainnya untuk berlangganan situs ini.",
	[Key.rssCopied]: "Tautan RSS disalin ke papan klip!",
	[Key.rssCopyFailed]: "Gagal menyalin, harap salin tautan secara manual",

	// Last Modified Time Card
	[Key.lastModifiedPrefix]: "Terakhir diperbarui pada ",
	[Key.lastModifiedOutdated]: "Beberapa konten mungkin sudah usang",
	[Key.lastModifiedDaysAgo]: "{days} hari yang lalu",
	[Key.year]: "tahun",
	[Key.month]: "bulan",
	[Key.day]: "hari",
	[Key.hour]: "jam",
	[Key.minute]: "menit",
	[Key.second]: "detik",

	// Page Views Statistics
	[Key.pageViews]: "Dilihat",
	[Key.pageViewsLoading]: "Memuat...",
	[Key.pageViewsError]: "Statistik tidak tersedia",

	// Pinned
	[Key.pinned]: "Disematkan",

	// Related Posts
	[Key.relatedPosts]: "Postingan Terkait",
	[Key.randomPosts]: "Postingan Acak",
	[Key.smartRecommend]: "Cerdas",
	[Key.randomRecommend]: "Acak",
	[Key.noRelatedPosts]: "Tidak ada postingan terkait",
	[Key.noRandomPosts]: "Tidak ada postingan acak",

	// Encrypted
	[Key.postEncrypted]: "Postingan ini dienkripsi",

	// Wallpaper Mode
	[Key.wallpaperMode]: "Mode Wallpaper",
	[Key.wallpaperBannerMode]: "Wallpaper Banner",
	[Key.wallpaperFullscreenMode]: "Wallpaper Layar Penuh",
	[Key.wallpaperOverlayMode]: "Wallpaper Overlay",
	[Key.wallpaperNoneMode]: "Tanpa Wallpaper",

	// Wallpaper Settings
	[Key.wallpaperSettings]: "Pengaturan Wallpaper",
	[Key.wallpaperTitle]: "Judul Wallpaper Beranda",
	[Key.wallpaperCarousel]: "Carousel Wallpaper",
	[Key.wavesAnimation]: "Animasi Gelombang",
	[Key.gradientTransition]: "Transisi Gradien",
	[Key.sakuraEffect]: "Efek Sakura",
	[Key.effectsSettings]: "Pengaturan Efek",
	[Key.overlaySettings]: "Pengaturan Transparansi",
	[Key.overlayOpacity]: "Opasitas Wallpaper",
	[Key.overlayBlur]: "Blur Latar Belakang",
	[Key.overlayCardOpacity]: "Opasitas Kartu",

	// Post List Layout
	[Key.postListLayout]: "Tata Letak Daftar Postingan",
	[Key.postListLayoutList]: "Daftar",
	[Key.postListLayoutGrid]: "Kisi",

	// Sponsor Page
	[Key.sponsor]: "Sponsor",
	[Key.sponsorTitle]: "Dukung Saya",
	[Key.sponsorDescription]:
		"Jika konten saya bermanfaat bagi Anda, silakan dukung saya melalui metode berikut. Dukungan Anda adalah kekuatan pendorong bagi saya untuk terus berkarya!",
	[Key.sponsorMethods]: "Metode Pembayaran",
	[Key.sponsorList]: "Sponsor",
	[Key.sponsorEmpty]: "Belum ada sponsor",
	[Key.sponsorAmount]: "Jumlah",
	[Key.sponsorDate]: "Tanggal",
	[Key.sponsorMessage]: "Pesan",
	[Key.sponsorAnonymous]: "Anonim",
	[Key.scanToSponsor]: "Pindai untuk Sponsor",
	[Key.sponsorGoTo]: "Pergi ke Sponsor",
	[Key.sponsorButton]: "Dukung & Bagikan",
	[Key.sponsorButtonText]:
		"Jika artikel ini membantu Anda, silakan bagikan atau dukung!",

	[Key.shareOnSocial]: "Bagikan Artikel",
	[Key.shareOnSocialDescription]:
		"Jika artikel ini membantu Anda, silakan bagikan kepada orang lain!",

	// Site Statistics
	[Key.siteStats]: "Statistik Situs",
	[Key.siteStatsPostCount]: "Postingan",
	[Key.siteStatsCategoryCount]: "Kategori",
	[Key.siteStatsTagCount]: "Tag",
	[Key.siteStatsTotalWords]: "Total Kata",
	[Key.siteStatsRunningDays]: "Hari Berjalan",
	[Key.siteStatsLastUpdate]: "Aktivitas Terakhir",
	[Key.siteStatsDaysAgo]: "{days} hari yang lalu",
	[Key.siteStatsDays]: "{days} hari",
	[Key.today]: "Hari ini",

	// Calendar Component
	[Key.calendarSunday]: "Min",
	[Key.calendarMonday]: "Sen",
	[Key.calendarTuesday]: "Sel",
	[Key.calendarWednesday]: "Rab",
	[Key.calendarThursday]: "Kam",
	[Key.calendarFriday]: "Jum",
	[Key.calendarSaturday]: "Sab",
	[Key.calendarJanuary]: "Jan",
	[Key.calendarFebruary]: "Feb",
	[Key.calendarMarch]: "Mar",
	[Key.calendarApril]: "Apr",
	[Key.calendarMay]: "Mei",
	[Key.calendarJune]: "Jun",
	[Key.calendarJuly]: "Jul",
	[Key.calendarAugust]: "Agu",
	[Key.calendarSeptember]: "Sep",
	[Key.calendarOctober]: "Okt",
	[Key.calendarNovember]: "Nov",
	[Key.calendarDecember]: "Des",

	[Key.shareArticle]: "Bagikan",
	[Key.generatingPoster]: "Membuat Poster...",
	[Key.copied]: "Disalin",
	[Key.copyLink]: "Salin Tautan",
	[Key.savePoster]: "Simpan Poster",
	[Key.scanToRead]: "Pindai untuk Membaca",

	// Code Block Collapsible Configuration
	[Key.codeCollapsibleShowMore]: "Tampilkan lebih banyak",
	[Key.codeCollapsibleShowLess]: "Tampilkan lebih sedikit",
	[Key.codeCollapsibleExpanded]: "Blok kode diperluas",
	[Key.codeCollapsibleCollapsed]: "Blok kode diciutkan",

	// Gallery Page
	[Key.gallery]: "Galeri",
	[Key.galleryDescription]: "Menangkap momen indah dalam hidup",
	[Key.galleryPhotos]: "foto",
	[Key.galleryAlbums]: "album",
	[Key.galleryNoAlbums]: "Belum ada album",
	[Key.galleryBackToAlbums]: "Kembali ke album",

	// Password Protection
	[Key.passwordProtected]: "Dilindungi Kata Sandi",
	[Key.passwordProtectedDesc]:
		"Konten ini dilindungi kata sandi. Harap masukkan kata sandi untuk melihat.",
	[Key.passwordHint]: "Petunjuk",
	[Key.passwordPlaceholder]: "Masukkan kata sandi",
	[Key.passwordSubmit]: "Buka",
	[Key.passwordError]: "Kata sandi salah, silakan coba lagi.",
	[Key.passwordProtectedRss]:
		"Artikel ini dienkripsi. Silakan kunjungi situs web untuk melihatnya.",
};
