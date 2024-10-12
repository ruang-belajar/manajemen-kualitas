# Konsep Dasar dan Pendahuluan
Pembahasan bab ini diambil dari bab 1 dari buku [Software Testing and Quality Assurance](https://drive.google.com/file/d/1UBdGl16MTPAFDFITc5Os8M84x9qIf3mI/view?usp=sharing)

## 1.1 Latar Belakang
* Lean Thingking

## 1.2 Software Quality
Pertanyaan “Apa itu kualitas perangkat lunak?” memunculkan banyak jawaban yang berbeda. Kualitas adalah konsep yang kompleks—artinya berbeda bagi orang yang berbeda, dan sangat bergantung pada konteks. Kualitas perangkat lunak bisa dipersepsikan dengan cara yang berbeda dalam domain yang berbeda, seperti filsafat, ekonomi, pemasaran, dan manajemen. 

Ada lima sudut pandang dalam kita melihat kualitas:

1. **Trancendental View**: Pandangan ini memandang kualitas sebagai sesuatu yang dapat dikenali tetapi sulit didefinisikan. Pandangan transendental tidak hanya terbatas pada kualitas perangkat lunak saja, tetapi telah diterapkan di berbagai bidang kehidupan sehari-hari yang kompleks. Misalnya, pada tahun 1964, Hakim Potter Stewart dari Mahkamah Agung AS, saat memutuskan kasus Jacobellis v. Ohio, 378 U.S. 184 (1964), yang melibatkan negara bagian Ohio yang melarang film Prancis Les Amants (“The Lovers”) atas dasar pornografi, menulis, “Saya tidak akan mencoba lagi untuk mendefinisikan jenis materi yang saya pahami termasuk dalam deskripsi singkat itu; dan mungkin saya tidak akan pernah berhasil melakukannya dengan jelas. Namun, saya mengetahuinya saat saya melihatnya, dan film yang terlibat dalam kasus ini bukanlah itu” (penekanan ditambahkan).
2. **User View**: Pandangan ini memandang kualitas sebagai kesesuaian dengan tujuan. Menurut pandangan ini, saat mengevaluasi kualitas suatu produk, seseorang harus mengajukan pertanyaan kunci: “Apakah produk tersebut memenuhi kebutuhan dan harapan pengguna?”
3. **Manufacturing View**: Di sini kualitas dipahami sebagai kesesuaian dengan spesifikasi. Tingkat kualitas suatu produk ditentukan oleh sejauh mana produk tersebut memenuhi spesifikasinya.
4. **Produk View**: Dalam hal ini, kualitas dipandang terkait dengan karakteristik bawaan produk. Karakteristik bawaan suatu produk, yaitu kualitas internal, menentukan kualitas eksternalnya.
5. **Value-Based View**: Kualitas, dalam perspektif ini, bergantung pada jumlah yang bersedia dibayarkan pelanggan untuk produk tersebut.

## 1.3 Peran Pengujian
Pengujian memainkan peran penting dalam mencapai dan menilai kualitas produk perangkat lunak. Di satu sisi, kita meningkatkan kualitas produk saat kita mengulang siklus pengujian–menemukan cacat–memperbaiki selama pengembangan. Di sisi lain, kita menilai seberapa baik sistem kita saat kita melakukan pengujian tingkat sistem sebelum merilis produk.

Dengan demikian, pengujian perangkat lunak adalah proses verifikasi untuk penilaian dan peningkatan kualitas perangkat lunak. Secara umum, aktivitas untuk penilaian kualitas perangkat lunak dapat dibagi menjadi dua kategori besar, yaitu analisis statis dan analisis dinamis.

* Analisis Statis: Seperti yang tersirat dari istilah “statis”, analisis ini didasarkan pada pemeriksaan sejumlah dokumen, yaitu dokumen persyaratan, model perangkat lunak, dokumen desain, dan kode sumber. Analisis statis tradisional mencakup tinjauan kode, inspeksi, penelusuran, analisis algoritme, dan pembuktian kebenaran. Analisis ini tidak melibatkan eksekusi aktual kode yang sedang dikembangkan. Sebaliknya, analisis ini memeriksa kode dan alasan atas semua kemungkinan perilaku yang mungkin muncul selama waktu proses. Optimasi kompiler adalah analisis statis standar.

* Analisis Dinamis: Analisis dinamis sistem perangkat lunak melibatkan eksekusi program aktual untuk mengungkap kemungkinan kegagalan program. Properti perilaku dan kinerja program juga diamati. Program dieksekusi dengan nilai masukan yang umum dan dipilih dengan cermat. Sering kali, set masukan suatu program bisa sangat besar dan tidak praktis. Namun, untuk pertimbangan praktis, subset terbatas dari set masukan dapat dipilih. Oleh karena itu, dalam pengujian, kita mengamati beberapa perilaku program yang representatif dan mencapai kesimpulan tentang kualitas sistem. Pemilihan set pengujian terbatas yang cermat sangat penting untuk mencapai kesimpulan yang andal.

Dengan melakukan analisis statis dan dinamis, praktisi ingin mengidentifikasi sebanyak mungkin kesalahan sehingga kesalahan tersebut diperbaiki pada tahap awal pengembangan perangkat lunak. Analisis statis dan analisis dinamis bersifat saling melengkapi, dan untuk efektivitas yang lebih baik, keduanya harus dilakukan berulang kali dan bergantian. Praktisi dan peneliti perlu menghilangkan batasan antara analisis statis dan dinamis dan membuat analisis hibrida yang menggabungkan kekuatan kedua pendekatan tersebut.

## 1.4 Verifikasi dan Validasi
Dua konsep serupa yang terkait dengan pengujian perangkat lunak yang sering digunakan oleh praktisi adalah verifikasi dan validasi. Kedua konsep tersebut bersifat abstrak, dan masing-masing dapat diwujudkan melalui serangkaian aktivitas konkret yang dapat dieksekusi. Kedua konsep tersebut dijelaskan sebagai berikut:
*   Verifikasi: Aktivitas semacam ini membantu kita mengevaluasi sistem perangkat lunak
dengan menentukan apakah produk dari fase pengembangan tertentu memenuhi
persyaratan yang ditetapkan sebelum dimulainya fase tersebut. Perlu dicatat bahwa suatu produk dapat berupa produk antara, seperti spesifikasi persyaratan, spesifikasi desain, kode, buku petunjuk pengguna, atau bahkan produk akhir. Aktivitas yang memeriksa kebenaran fase pengembangan disebut
aktivitas verifikasi.
*   Validasi: Aktivitas semacam ini membantu kita mengonfirmasi bahwa suatu produk memenuhi tujuan penggunaannya. Aktivitas validasi bertujuan untuk mengonfirmasi bahwa suatu produk memenuhi harapan pelanggannya. Dengan kata lain, aktivitas validasi berfokus pada produk akhir, yang diuji secara ekstensif dari sudut pandang pelanggan. Validasi menetapkan apakah produk tersebut memenuhi harapan keseluruhan pengguna.

    Pelaksanaan kegiatan validasi yang terlambat sering kali berisiko karena menyebabkan biaya pengembangan yang lebih tinggi. Kegiatan validasi dapat dilaksanakan pada tahap awal siklus pengembangan perangkat lunak. Contoh pelaksanaan kegiatan validasi yang lebih awal dapat ditemukan dalam metodologi pengembangan perangkat lunak eXtreme Programming (XP). Dalam metodologi XP, pelanggan berinteraksi erat dengan kelompok pengembangan perangkat lunak dan melakukan uji penerimaan selama setiap iterasi pengembangan.

Proses verifikasi menetapkan korespondensi fase implementasi dari proses pengembangan perangkat lunak dengan spesifikasinya, sedangkan validasi menetapkan korespondensi antara sistem dan harapan pengguna. Seseorang dapat membandingkan verifikasi dan validasi sebagai berikut: 
*   Aktivitas verifikasi bertujuan untuk mengonfirmasi bahwa seseorang membangun produk dengan benar, sedangkan aktivitas validasi bertujuan untuk mengonfirmasi bahwa seseorang membangun produk yang benar. 
*   Aktivitas verifikasi meninjau produk kerja sementara, seperti spesifikasi persyaratan, desain, kode, dan buku petunjuk pengguna, selama siklus hidup proyek untuk memastikan kualitasnya. Atribut kualitas yang dicari oleh aktivitas verifikasi adalah konsistensi, kelengkapan, dan kebenaran pada setiap tahap utama pengembangan sistem. Di sisi lain, validasi dilakukan menjelang akhir pengembangan sistem untuk menentukan apakah seluruh sistem memenuhi kebutuhan dan harapan pelanggan.
*   Aktivitas verifikasi dilakukan pada produk sementara dengan menerapkan sebagian besar teknik analisis statis, seperti inspeksi, penelusuran, dan tinjauan, serta menggunakan standar dan daftar periksa. Verifikasi juga dapat mencakup analisis dinamis, seperti pelaksanaan program aktual. Di sisi lain, validasi dilakukan pada keseluruhan sistem dengan menjalankan sistem di lingkungan sebenarnya dan menggunakan berbagai pengujian.

## 1.5 Failure, Error, Fault dan Defect
Dalam literatur tentang pengujian perangkat lunak, seseorang dapat menemukan referensi tentang istilah Failure (kegagalan), error, fault (kesalahan), dan defect (cacat). Meskipun maknanya saling terkait, ada perbedaan penting antara keempat konsep ini.
* Failure: Kegagalan dikatakan terjadi setiap kali perilaku eksternal suatu sistem tidak sesuai dengan yang ditentukan dalam spesifikasi sistem.
* Error: Kesalahan adalah keadaan sistem. Jika tidak ada tindakan korektif oleh sistem, keadaan kesalahan dapat menyebabkan kegagalan yang tidak akan dikaitkan dengan peristiwa apa pun setelah kesalahan.
* Fault: Kesalahan adalah penyebab kesalahan yang dinilai.

Kesalahn (fault) mungkin tidak terdeteksi dalam waktu lama, hingga suatu kejadian mengaktifkannya. Ketika suatu kejadian mengaktifkan kesalahan, pertama-tama ia membawa program ke dalam status kesalahan antara. Jika komputasi dibiarkan berlanjut dari status kesalahan tanpa tindakan korektif, program tersebut akhirnya menyebabkan kegagalan (failure). Sebagai tambahan, dalam komputasi yang toleran terhadap kesalahan, tindakan korektif dapat diambil untuk mengeluarkan program dari status kesalahan ke status yang diinginkan sehingga komputasi berikutnya tidak akhirnya menyebabkan kegagalan. Oleh karena itu, proses manifestasi kegagalan dapat secara ringkas direpresentasikan sebagai rantai perilaku sebagai berikut: fault → error → failure. Rantai perilaku tersebut dapat berulang untuk sementara waktu, yaitu, kegagalan satu komponen dapat menyebabkan kegagalan komponen lain yang berinteraksi.

Definisi kegagalan di atas mengasumsikan bahwa spesifikasi yang diberikan dapat diterima oleh pelanggan. Namun, jika spesifikasi tersebut tidak memenuhi harapan pelanggan, maka, tentu saja, bahkan implementasi yang bebas kesalahan pun gagal memuaskan pelanggan. Merupakan tugas yang sulit untuk memberikan definisi yang tepat tentang kesalahan, error, atau kegagalan perangkat lunak, karena "faktor manusia" yang terlibat dalam penerimaan keseluruhan suatu sistem. Dalam bisnis perangkat lunak modern, kegagalan perangkat lunak berarti "harapan pelanggan tidak terpenuhi dan/atau pelanggan tidak dapat melakukan pekerjaan yang bermanfaat dengan produk".

Ada perbedaan tipis antara cacat dan kesalahan dalam contoh di atas, yaitu, pelaksanaan kebijakan yang cacat dapat menyebabkan promosi yang salah. Dalam konteks perangkat lunak, sistem perangkat lunak mungkin cacat karena masalah desain; status sistem tertentu akan memperlihatkan cacat, yang mengakibatkan perkembangan kesalahan yang didefinisikan sebagai nilai sinyal atau keputusan yang salah dalam sistem. Dalam industri, istilah cacat digunakan secara luas, sedangkan di kalangan peneliti istilah kesalahan lebih umum. Untuk semua tujuan praktis, kedua istilah tersebut adalah sinonim. Dalam buku ini, kami menggunakan kedua istilah tersebut secara bergantian sebagaimana diperlukan.

## 1.6 PENGERTIAN KEANDALAN (RELIABILITY) PERANGKAT LUNAK
Tidak peduli seberapa sering kita menjalankan siklus pengujian–menemukan kesalahan–memperbaiki selama pengembangan perangkat lunak, beberapa kesalahan mungkin luput dari perhatian kita, dan ini pada akhirnya akan muncul di lokasi user. Oleh karena itu, ukuran kuantitatif yang berguna dalam menilai kualitas perangkat lunak adalah keandalannya. Keandalan perangkat lunak didefinisikan sebagai probabilitas pengoperasian sistem perangkat lunak tanpa kegagalan selama waktu tertentu dalam lingkungan tertentu. Tingkat keandalan sistem bergantung pada masukan yang menyebabkan kegagalan diamati oleh pengguna akhir. Keandalan perangkat lunak dapat diperkirakan melalui pengujian acak, seperti yang disarankan oleh Hamlet. Karena pengertian keandalan bersifat khusus untuk "lingkungan tertentu", data pengujian harus diambil dari distribusi masukan agar menyerupai penggunaan sistem di masa mendatang. Menangkap pola penggunaan sistem di masa mendatang secara umum dijelaskan dalam bentuk yang disebut profil operasional. Konsep profil operasional sistem dirintis oleh John D. Musa di AT&T Bell Laboratories antara tahun 1970-an dan 1990-an

## 1.7 Tujuan Pengujian
Para pemangku kepentingan dalam proses pengujian adalah programer, _test engineer_, manajer proyek, dan user. Pemangku kepentingan adalah orang atau organisasi yang memengaruhi perilaku sistem atau yang dipengaruhi oleh sistem itu.
Pemangku kepentingan yang berbeda melihat proses pengujian dari berbagai perspektif seperti yang dijelaskan di bawah ini:
* Sistem berfungsi: Saat menerapkan unit program, programmer mungkin ingin menguji apakah unit bekerja dalam keadaan normal atau tidak.Itu Programmer mendapat kepercayaan diri jika unit bekerja untuk kepuasannya.Gagasan yang sama berlaku untuk seluruh sistem juga - setelah sistem telah diintegrasikan, pengembang mungkin ingin menguji apakah sistem melakukan fungsi dasar atau tidak.Di sini, untuk alasan psikologis, Tujuan pengujian adalah untuk menunjukkan bahwa sistem berfungsi, daripada tidak berfungsi.
* Sistem tidak berfungsi: Setelah programmer (atau tim pengembangan) puas bahwa unit (atau sistem) bekerja pada tingkat tertentu, lebih banyak tes dilakukan dengan tujuan menemukan kesalahan dalam unit (atau sistem).Di sini, idenya adalah mencoba membuat unit (atau sistem) gagal.
* Mengurangi risiko kegagalan: Sebagian besar sistem perangkat lunak yang kompleks mengandung kesalahan, yang menyebabkan sistem gagal dari waktu ke waktu.Konsep "gagal dari waktu ke waktu" ini menimbulkan gagasan tingkat kegagalan.Ketika kesalahan ditemukan dan diperbaiki saat melakukan lebih banyak tes, tingkat kegagalan suatu sistem umumnya berkurang.Dengan demikian, tujuan tingkat yang lebih tinggi dari melakukan tes adalah untuk menurunkan risiko gagal ke tingkat yang dapat diterima.
* Mengurangi biaya pengujian: Berbagai jenis biaya yang terkait dengan proses pengujian termasuk biaya merancang, memelihara, dan menjalankan kasus uji, biaya menganalisis hasil pelaksanaan setiap kasus uji, biaya mendokumentasikan kasus uji,dan biaya untuk benar -benar mengeksekusi sistem dan mendokumentasikannya.

    Oleh karena itu, semakin sedikit jumlah kasus uji yang dirancang, semakin sedikit biaya pengujian yang terkait.Namun, menghasilkan sejumlah kecil kasus uji sewenang -wenang bukanlah cara yang baik untuk menghemat biaya.Level tertinggi tujuan melakukan tes adalah untuk menghasilkan perangkat lunak berisiko rendah dengan jumlah kasus uji yang lebih sedikit.Gagasan ini membawa kita ke konsep efektivitas kasus uji.Oleh karena itu insinyur uji harus memilih kasus uji yang lebih sedikit dan efektif.

## 1.8 Apa itu test case?
Dalam bentuknya yang paling mendasar, test case adalah sepasang `<input, hasil yang diharapkan>` sederhana.Jika suatu program yang diuji diharapkan untuk menghitung akar kuadrat dari angka non -negatif, maka empat contoh kasus uji seperti yang ditunjukkan pada contoh berikut

```
TB1: <0, 0>
TB2: <25, 5>
TB3: <40, 6.02343254>
TB4: <100.5, 330.3239128>
```
**gambar 1.3**

```
TS1: <cek saldo, 1000000>, <tarik tunai, "jumlah?">, <200000, "Rp. 200.000">, <cek saldo, 800000>
```
**gambar 1.4**

Dalam _stateless system_, di mana hasilnya hanya bergantung pada input saat ini, kasus uji sangat sederhana dalam struktur, seperti yang ditunjukkan pada Gambar 1.3. Program untuk menghitung akar kuadrat dari angka positif adalah contoh dari _stateless syste_. Kompiler untuk bahasa pemrograman C adalah contoh lain dari _stateless system_. Kompiler adalah _stateless syste_ karena untuk mengkompilasi program yang tidak perlu diketahui tentang program yang dikompilasi sebelumnya.

Dalam _state-oriented system_, di mana hasil program tergantung pada keadaan saat ini sistem dan input saat ini, kasus uji dapat terdiri dari urutan `<input, hasil yang diharapkan>` yang diharapkan. Sistem switching telepon dan mesin teller otomatis (ATM) adalah contoh _state-oriented system_.Untuk mesin ATM, test case untuk pengujian fungsi penarikan ditunjukkan pada Gambar 1.4. Di sini, kita berasumsi bahwa pengguna telah memasukkan input yang divalidasi, seperti uang tunai Kartu dan Nomor PIN.

Dalam kasus uji TS1, "cek saldo" dan "tarik tunai" di set pertama, kedua, dan keempat mewakili penekanan tombol yang sesuai pada keypad ATM. Diasumsikan bahwa akun pengguna memiliki 1.000.000 di atasnya, dan pengguna ingin menarik jumlah 200.000. Hasil yang diharapkan "Rp. 200.000" dalam set ketiga mewakili uang tunai yang dikeluarkan oleh ATM. Setelah operasi penarikan, pengguna memastikan bahwa saldo yang tersisa adalah 800.000

Untuk _state-oriented system_, sebagian besar kasus ujinya berkaitan dengan memberikan input yang biasanya berhubungan dengan suatu keputusan waktu dan waktu. Contoh kasusnya akan akan dibahas pada bagian lain.

1.9 Hasil yang diharapkan
Hasil eksekusi program adalah entitas yang kompleks yang mungkin termasuk yang berikut:
* Nilai yang dihasilkan oleh program:
    Output untuk observasi lokal (integer, text, audio, image)
    Output (pesan) untuk penyimpanan jarak jauh, manipulasi, atau pengamatan
* Perubahan kondisi:
    Perubahan kondisi program
    Perubahan kondisi database (karena penambahan, penghapusan, dan operasi update)
* Urutan atau set nilai yang harus ditafsirkan bersama untuk hasilnya valid

Konsep penting dalam desain tes adalah konsep oracle.Sebuah oracle adalah entitas apa pun - program, proses, ahli manusia, atau badan data - yang memberi tahu kita hasil yang diharapkan dari tes atau serangkaian tes tertentu.Kasus uji hanya bermakna jika dimungkinkan untuk memutuskan penerimaan hasil yang dihasilkan oleh program yang sedang diuji.

Idealnya, hasil tes yang diharapkan harus dihitung saat merancang uji kasus.Dengan kata lain, hasil tes dihitung sebelum program dieksekusi dengan input tes yang dipilih.Idenya di sini adalah bahwa seseorang harus dapat menghitung hasil yang diharapkan dari pemahaman tentang persyaratan program.Prekomputasi hasil yang diharapkan akan menghilangkan bias implementasi jika kasus uji dirancang oleh pengembang.

Dalam kasus yang luar biasa, di mana sangat sulit, tidak mungkin, atau bahkan tidak diinginkan untuk menghitung hasil yang diharapkan tunggal, seseorang harus mengidentifikasi hasil yang diharapkan dengan memeriksa hasil tes yang sebenarnya, seperti yang dijelaskan dalam hal berikut:
1. Jalankan program dengan input yang dipilih.
2. Amati hasil aktual dari eksekusi program.
3. Pastikan bahwa hasil yang sebenarnya adalah hasil yang diharapkan.
4. Gunakan hasil aktual yang diverifikasi sebagai hasil yang diharapkan dalam menjalankan kasus uji berikutnya.

## 1.20 Konsep Pengujian Lengkap
Bukan hal yang aneh untuk menemukan orang membuat klaim seperti "Saya telah menguji program secara mendalam."Pengujian lengkap, atau lengkap, berarti tidak ada kesalahan yang belum ditemukan pada akhir fase uji. Semua masalah harus diketahui di akhir pengujian lengkap.Untuk sebagian besar sistem, pengujian lengkap hampir mustahil karena alasan berikut:
* Domain input yang mungkin dari suatu program terlalu besar untuk sepenuhnya digunakan dalam menguji suatu sistem. Ada kedua input yang valid dan input yang tidak valid.Program ini mungkin memiliki sejumlah besar negara bagian. Mungkin ada batasan waktu pada input, yaitu, input mungkin valid pada waktu tertentu dan tidak valid di waktu lain. Nilai input yang valid tetapi tidak tepat waktu disebut input yang tidak tepat. Domain input suatu sistem bisa sangat besar untuk sepenuhnya digunakan dalam menguji suatu program.
* Masalah desain mungkin terlalu rumit untuk diuji sepenuhnya.Desainnya mungkin termasuk keputusan dan asumsi desain implisit. Misalnya, seorang programmer dapat menggunakan variabel global atau variabel statis untuk mengontrol eksekusi program.
* Mungkin tidak mungkin untuk menciptakan semua lingkungan eksekusi yang mungkin dari sistem. Ini menjadi lebih signifikan ketika perilaku sistem perangkat lunak tergantung pada dunia yang nyata, luar, seperti cuaca, suhu, ketinggian, tekanan, dan sebagainya.