# Teori dalam Pengujian Program
Pembahasan bab ini diambil dari bab 2 dari buku [Software Testing and Quality Assurance](https://drive.google.com/file/d/1UBdGl16MTPAFDFITc5Os8M84x9qIf3mI/view?usp=sharing)

> Orang yang hanya menyukai praktek tanpa teori bagaikan pelaut yang menaiki kapal tanpa kemudi dan kompas dan tidak pernah tahu ke mana ia akan berlayar. — Leonardo da Vinci

## 2.1 Konsep Dasar dalam Teori Pengujian
Gagasan pengujian program setua pemrograman komputer. Seiring dengan semakin berkembangnya program komputer sejak awal kemunculannya di tahun 1960-an, kebutuhan untuk menghilangkan cacat dari program tersebut secara sistematis semakin diperhatikan. Baik komunitas peneliti maupun praktisi semakin terlibat dalam pengujian perangkat lunak. Dengan demikian, pada tahun 1970-an, bidang penelitian baru yang disebut _teori pengujian_ muncul. Teori pengujian menekankan hal-hal berikut:

* Mendeteksi cacat melalui pengujian berbasis eksekusi
* Mendesain kasus uji dari berbagai sumber, yaitu, spesifikasi persyaratan, kode sumber, dan domain input dan output program
* Memilih sebagian kecil kasus uji dari kumpulan semua kasus uji yang memungkinkan
* Efektivitas strategi pemilihan kasus uji
* Oracle uji yang digunakan selama pengujian
* Memprioritaskan eksekusi kasus uji yang dipilih
* Analisis kecukupan kasus uji

Landasan teoritis pengujian memberikan wawasan berharga kepada penguji dan pengembang mengenai sistem perangkat lunak dan proses pengembangan. Sebagai konsekuensinya, penguji merancang kasus pengujian yang lebih efektif dengan biaya yang lebih rendah. Saat mempertimbangkan teori pengujian, mungkin ada ekspektasi yang lebih tinggi bahwa teori tersebut memungkinkan kita mendeteksi semua cacat dalam program komputer. Setiap teori pengujian harus mewarisi keterbatasan mendasar pengujian. Pengujian hanya dapat mengungkapkan keberadaan kesalahan, tidak pernah ketidakhadirannya. Terlepas dari keterbatasan tersebut, pengujian tetap menjadi metode yang paling praktis dan andal untuk deteksi cacat dan peningkatan kualitas.

Dalam bab ini, tiga teori pengujian yang terkenal dibahas. Yaitu _teori Goodenough dan Gerhart_, _teori Weyuker dan Ostrand_, dan _teori Gourlay_. _Goodenough dan Gerhart_ memperkenalkan beberapa konsep utama seperti pengujian ideal, reliabilitas dan validitas pengujian, kriteria pemilihan pengujian, pengujian menyeluruh, dan lima kategori kesalahan program. _Weyuker dan Ostrand_ menyempurnakan beberapa ide di atas dalam bentuk kriteria reliabilitas seragam, kriteria validitas seragam, dan pengujian ideal seragam. _Gourlay_ memperkenalkan konsep sistem pengujian dan metode umum untuk membandingkan berbagai metode pengujian.

## 2.2 TEORI GOODENOUGH DAN GERHART
Goodenough dan Gerhart menerbitkan paper pada tahun 1975 tentang pemilihan data uji. Makalah ini memberikan konsep pengujian mendasar, mengidentifikasi beberapa jenis kesalahan program, dan memberikan teori untuk memilih data uji dari domain input suatu program. Meskipun teori ini bukan tanpa kritik, itu dikutip secara luas dan dihargai dalam komunitas riset pengujian perangkat lunak

[TODO]

## 2.3 TEORI WEYUKER DAN OSTRAND
Masalah utama dalam teori Goodenough dan Gerhart adalah bahwa keandalan dan validitas kriteria tergantung pada keberadaan kesalahan dalam suatu program dan tipe mereka. Weyuker dan Ostrand memberikan teori yang dimodifikasi di mana validitas dan reliabilitas kriteria pemilihan uji hanya tergantung pada spesifikasi program, daripada program. Mereka mengusulkan konsep kriteria pemilihan tes yang ideal yang seragam untuk spesifikasi output yang diberikan. Dalam teori Goodenough dan Gerhart, tersirat dalam definisi predikat `OK(d)` dan `SUCCESSFUL(t)` adalah program `P`. dengan `SUCCESSFUL()` sebagai `SUCC()`, kedua predikatnya ditulis ulang sebagai berikut:

[TODO]


## 2.4 TEORI GOURLAY
Tujuan yang ideal dalam pengembangan perangkat lunak adalah untuk mengetahui apakah suatu program benar atau tidak, di mana program yang benar tidak memiliki kesalahan.Banyak hasil penelitian telah dilaporkan di bidang kebenaran program.Namun, karena sifat teknik verifikasi program yang sangat terbatas, tidak ada pengembang yang melakukan upaya untuk membuktikan kebenaran bahkan program kecil, katakanlah, beberapa ribu baris, apalagi program besar dengan jutaan baris kode. Sebaliknya, pengujian diterima di industri sebagai cara praktis untuk menemukan kesalahan dalam program. Sisi flip dari pengujian adalah bahwa ia tidak dapat digunakan untuk menyelesaikan pertanyaan tentang kebenaran program, yang merupakan tujuan yang ideal.Meskipun pengujian tidak dapat menyelesaikan masalah kebenaran program, ada kebutuhan untuk teori pengujian untuk memungkinkan kita membandingkan kekuatan metode pengujian yang berbeda.

Untuk memotivasi diskusi teoretis tentang pengujian, kami mulai dengan proses yang ideal
Untuk pengembangan perangkat lunak, yang terdiri dari langkah -langkah berikut: 40 Bab 2 Teori Pengujian Program
* Pelanggan dan tim pengembangan menentukan kebutuhan.
* Tim pengembangan mengambil spesifikasi dan upaya untuk menulis program untuk memenuhi spesifikasi.
* Seorang insinyur uji mengambil spesifikasi dan program dan memilih satu set kasus uji.Kasus uji didasarkan pada spesifikasi dan program.
* Program ini dijalankan dengan data uji yang dipilih, dan hasil tes dibandingkan dengan hasil yang diharapkan.
* Program ini dikatakan memiliki kesalahan jika beberapa tes gagal.
* Orang dapat mengatakan program yang siap digunakan jika melewati semua kasus uji.

Kami fokus pada pemilihan kasus uji dan interpretasi hasil mereka.Kami mengasumsikan bahwa spesifikasinya benar, dan spesifikasinya adalah satu -satunya wasit dari kebenaran program.Program ini dikatakan benar jika dan hanya jika memenuhi spesifikasi.Teori pengujian Gourlay membangun hubungan antara tiga set entitas, yaitu, spesifikasi, program, dan tes, dan memberikan dasar untuk membandingkan metode yang berbeda untuk memilih tes.

[TODO]


## 2.5 KECUKUPAN PENGUJIAN
Pengujian memberi desainer dan pemrogram kepercayaan pada komponen perangkat lunak atau produk lengkap jika melewati kasus uji mereka.Asumsikan bahwa satu set kasus uji `T` telah dirancang untuk menguji program P. Kami mengeksekusi `P` dengan set uji `T`. Jika `T` mengungkapkan kesalahan di `P`, maka kami memodifikasi program dalam upaya untuk memperbaiki kesalahan tersebut. Pada tahap ini, mungkin ada kebutuhan untuk merancang beberapa kasus uji baru, karena, misalnya, kami dapat memasukkan prosedur baru dalam kode.Setelah memodifikasi kode, kami menjalankan program dengan set tes baru.Dengan demikian, kami menjalankan loop tes-dan-fix sampai tidak ada lagi kesalahan yang diungkapkan oleh set uji yang diperbarui.Sekarang kita menghadapi dilema sebagai berikut: Apakah `P` benar -benar bebas kesalahan, atau tidak cukup baik untuk mengungkapkan kesalahan yang tersisa di `P`? Dari pengujian kami tidak dapat menyimpulkan bahwa `P` adalah bebas kesalahan, karena, seperti yang diamati Dijkstra, pengujian dapat mengungkapkan adanya kesalahan, tetapi bukan ketidakhadiran mereka.Oleh karena itu, jika `P` lulus `T`, kita perlu tahu bahwa `T` "cukup baik" atau, dengan kata lain, bahwa `T` adalah serangkaian tes yang memadai.Penting untuk mengevaluasi kecukupan `T` karena jika `T` ditemukan tidak memadai, maka lebih banyak kasus uji perlu dirancang, seperti yang diilustrasikan pada Gambar 2.4.Kecukupan `T` berarti apakah `T` menguji secara menyeluruh `P`.

![](images/gambar2.3.PNG)\
**Gambar 2.3**

Idealnya, pengujian harus dilakukan dengan set tes yang memadai `T`.Secara intuitif, ide di balik menentukan kriteria untuk mengevaluasi kecukupan tes adalah untuk mengetahui apakah pengujian yang cukup telah dilakukan atau tidak.Kami akan segera kembali ke gagasan kecukupan tes. Dengan tidak adanya kecukupan tes, pengembang akan dipaksa untuk menggunakan langkah-langkah yang dibutuhkan untuk memutuskan kapan harus berhenti pengujian. Beberapa contoh tindakan yang dibutuhkan untuk menghentikan pengujian adalah sebagai berikut:
* Berhenti saat waktu yang dialokasikan untuk pengujian berakhir.
* Berhenti saat tiba saatnya untuk melepaskan produk.
* Berhenti saat semua kasus uji dieksekusi tanpa mengungkapkan kesalahan

Gambar 2.4 menggambarkan dua gagasan penting tentang desain tes dan mengevaluasi tes Kecukupan sebagai berikut:

![](images/gambar2.4.PNG)\
**Gambar 2.4** Konteks dari penerapan kecukupan pengujian


* Kecukupan himpunan uji `T` dievaluasi setelah ditemukan bahwa `T` mengungkapkan tidak ada lagi kesalahan.Orang mungkin berdebat: Mengapa tidak merancang kasus uji untuk memenuhi kriteria kecukupan? Namun, penting untuk merancang kasus uji yang terlepas dari kriteria kecukupan karena tujuan utama pengujian adalah untuk menemukan kesalahan, dan, dengan demikian, desain tes tidak boleh dibatasi oleh kriteria kecukupan. Contoh kriteria desain tes adalah sebagai berikut: Pilih kasus uji untuk menjalankan semua pernyataan dalam suatu program setidaknya sekali.Namun, kesulitan dengan kriteria desain tes seperti itu adalah bahwa kita mungkin tidak dapat mengetahui apakah setiap pernyataan program dapat dieksekusi.Dengan demikian, sulit untuk menilai kecukupan set tes yang dipilih dengan demikian.Akhirnya, karena tujuan pengujian adalah untuk mengungkapkan kesalahan, tidak ada gunanya mengevaluasi kecukupan tes yang ditetapkan selama kesalahan terungkap.
* Set uji yang memadai tidak mengatakan apa -apa tentang kebenaran suatu program.Pemahaman umum tentang kebenaran adalah bahwa kami telah menemukan dan memperbaiki semua kesalahan dalam suatu program untuk membuatnya "benar."Namun, dalam praktiknya, itu tidak realistis - meskipun sangat diinginkan - untuk menemukan dan memperbaiki semua kesalahan dalam suatu program.Dengan demikian, di satu sisi, kriteria kecukupan mungkin tidak mencoba membidik kebenaran program.Di sisi lain, program bebas kesalahan tidak boleh mengubah set tes sewenang-wenang `T` menjadi tes yang memadai.

Dua poin di atas memberi tahu kami gagasan penting: bahwa kecukupan set tes dievaluasi independen dari proses desain tes untuk program yang diuji. Secara intuitif, set uji `t` dikatakan memadai jika mencakup semua aspek perhitungan aktual yang dilakukan oleh program dan semua perhitungan yang dimaksudkan oleh spesifikasinya.Dua metode praktis untuk mengevaluasi kecukupan tes adalah sebagai berikut:
* Penyemaian kesalahan: Metode ini mengacu pada menanamkan sejumlah kesalahan dalam program `p` dan mengeksekusi` p` dengan set tes `t`.Jika `t` mengungkapkan k persen dari kesalahan yang ditanamkan, kami berasumsi bahwa` t` hanya mengungkapkan k persen dari kesalahan asli.Jika 100% dari kesalahan yang ditanamkan telah diungkapkan oleh `t`, kami merasa lebih percaya diri tentang kecukupan` t`.Diskusi menyeluruh tentang penyemaian kesalahan dapat ditemukan di Bab 13.
* Mutasi program: Diberikan program `P`, mutasi adalah program yang diperoleh dengan membuat perubahan kecil ke` P`.Dalam metode mutasi program, serangkaian mutasi diperoleh dari `P`.Beberapa mutasi mungkin mengandung kesalahan dan sisanya setara dengan `P`.Tes `t` dikatakan memadai jika menyebabkan setiap mutasi yang salah menghasilkan hasil yang tidak terduga.Diskusi yang lebih menyeluruh tentang mutasi program dapat ditemukan di Bab 3.

## 2.6 KETERBATASAN PENGUJIAN
Idealnya, semua program harus benar, yaitu, tidak ada kesalahan dalam suatu program.Karena sifat tidak praktis dari membuktikan bahwa program kecil menjadi benar, pelanggan dan pengembang perangkat lunak bergantung pada kemanjuran pengujian. Di bagian ini, kami memperkenalkan dua batasan utama pengujian:
* Pengujian berarti melaksanakan program dengan subset yang umumnya kecil dan tepat dari domain input program.Subset kecil yang tepat dari domain input dipilih karena biaya mungkin tidak memungkinkan subset yang jauh lebih besar dipilih, apalagi set input penuh. Pengujian dengan set input penuh dikenal sebagai pengujian lengkap. Dengan demikian, kebutuhan yang melekat untuk menguji program dengan sebagian kecil dari domain input menimbulkan batas mendasar pada kemanjuran pengujian. Batasnya adalah dalam bentuk ketidakmampuan kita untuk mengekstrapolasi kebenaran hasil untuk subset yang tepat dari domain input untuk memprogram kebenaran.Dengan kata lain, bahkan jika suatu program lulus satu set `T` uji, kami tidak dapat menyimpulkan bahwa program tersebut benar.
* Setelah kami memilih subset dari domain input, kami dihadapkan dengan masalah memverifikasi kebenaran output program untuk input tes individu.Artinya, output program diperiksa untuk menentukan apakah program dilakukan dengan benar pada input tes. **Mekanisme yang memverifikasi kebenaran output program dikenal sebagai _oracle_.** Konsep _oracle_ dibahas secara rinci dalam Bab 9. Menentukan kebenaran output program bukanlah tugas yang sepele. Jika salah satu dari dua kondisi berikut berlaku, suatu program dianggap _tidak dapat diuji_ (_nontestable_):
- Tidak ada _oracle_.
- Terlalu sulit untuk menentukan output yang benar.

Jika tidak ada mekanisme untuk memverifikasi kebenaran output program atau membutuhkan waktu yang luar biasa untuk memverifikasi output, tidak banyak yang bisa diperoleh dengan menjalankan tes.

## 2.7 SUMMARY
Tujuan yang ideal dan abstrak pengujian adalah untuk mengungkapkan semua kesalahan dalam sistem perangkat lunak tanpa menguji perangkat lunak secara lengkap. Gagasan ini adalah dasar dari konsep tes ideal yang dikembangkan oleh Goodenough dan Gerhart. Tes yang ideal seharusnya menjadi subset kecil yang tepat dari seluruh domain input, dan kita harus dapat mengekstrapolasi hasil tes ideal untuk memprogram kebenaran. Dengan kata lain, dalam arti abstrak, jika suatu program lulus semua tes dalam set tes yang dipilih dengan cermat, yang disebut tes yang ideal, kami berada dalam posisi untuk mengklaim bahwa program tersebut benar.

Ditambah dengan konsep tes yang ideal adalah kriteria seleksi tes yang memungkinkan kita untuk memilih anggota tes yang ideal.Kriteria pemilihan tes ditandai dalam hal reliabilitas dan validitas. Kriteria yang dapat diandalkan adalah kasus yang memilih kasus uji sedemikian rupa sehingga suatu program lulus semua tes atau gagal semua tes.Di sisi lain, kriteria yang valid adalah yang memilih setidaknya satu set tes yang gagal jika program berisi kesalahan. Jika kriteria valid dan dapat diandalkan, maka tes apa pun yang dipilih oleh kriteria adalah tes yang ideal. Teori ini memiliki beberapa kelemahan. Pertama, konsep keandalan dan validitas telah didefinisikan sehubungan dengan satu program dan seluruh domain inputnya.Kedua, baik reliabilitas maupun validitas tidak dipertahankan di seluruh fase debugging pengembangan perangkat lunak.

Kesalahan terjadi karena pemahaman kami yang tidak memadai tentang semua kondisi yang harus dihadapi suatu program dan kegagalan kami untuk menyadari bahwa kombinasi kondisi tertentu memerlukan perawatan khusus.Goodenough dan Gerhart mengkategorikan kesalahan menjadi lima kategori: kesalahan logika, kesalahan persyaratan, kesalahan desain, kesalahan konstruksi, dan kesalahan kinerja.

Weyuker dan Ostrand mencoba menghilangkan kelemahan teori Goodenough dan Gerhart dengan mengusulkan konsep tes yang secara seragam ideal. Konsep ini didefinisikan sehubungan dengan semua program yang dirancang untuk memenuhi spesifikasi, bukan hanya satu program—maka dari itu muncul konsep “keseragaman” atas semua contoh program untuk spesifikasi tertentu. Lebih lanjut, gagasan keseragaman diperluas untuk menguji kriteria seleksi dalam bentuk kriteria yang andal secara seragam dan valid secara seragam. Namun, teori mereka juga tidak praktis karena kriteria yang valid secara seragam dan dapat diandalkan secara seragam memilih seluruh domain input suatu program, sehingga menyebabkan pengujian lengkap. Selanjutnya, gagasan tes yang ideal diperluas ke subset yang tepat dari domain input yang disebut subdomain, dan konsep kriteria yang mengungkapkan didefinisikan.

Meskipun pengujian tidak dapat menyelesaikan pertanyaan tentang kebenaran program, metode pengujian yang berbeda terus dikembangkan. Misalnya, ada metode pengujian berbasis spesifikasi dan metode pengujian berbasis kode.Penting untuk mengembangkan teori untuk membandingkan kekuatan metode pengujian yang berbeda.Gourlay mengedepankan teori untuk membandingkan kekuatan metode pengujian berdasarkan kemampuan deteksi kesalahan mereka.

Sistem perangkat lunak mengalami beberapa siklus _pengujian-perbaikan-pengujian ulang_ sampai, idealnya, tidak ada lagi kesalahan yang terungkap. Kesalahan diperbaiki dengan memodifikasi kode atau menambahkan kode baru ke sistem. Pada tahap ini mungkin ada kebutuhan untuk merancang kasus uji baru. Ketika tidak ada lagi kesalahan yang terungkap, kita dapat menyimpulkan dengan cara ini: _Entah tidak ada kesalahan dalam program atau tes tidak dapat menemukan kesalahan_. Karena kami tidak memiliki cara untuk mengetahui situasi yang tepat, penting untuk mengevaluasi kecukupan set tes. Tidak perlu mengevaluasi kecukupan tes selama mereka mengungkapkan kesalahan. Dua cara praktis untuk mengevaluasi kecukupan uji adalah penyemaian kesalahan dan mutasi program.

> ✳ ChatGPT prompt: _in context of test adequacy what are fault seeding and program mutation_

Akhirnya, kami membahas dua batasan pengujian.Keterbatasan pengujian pertama adalah bahwa ia tidak dapat menyelesaikan pertanyaan tentang kebenaran program. Dengan kata lain, dengan menguji program dengan subset yang tepat dari domain input dan tidak mengamati kesalahan, kami tidak dapat menyimpulkan bahwa tidak ada kesalahan yang tersisa dalam program.Keterbatasan pengujian kedua adalah bahwa dalam beberapa kasus kami tidak tahu output yang diharapkan dari suatu program. Jika untuk beberapa input, output yang diharapkan dari suatu program tidak diketahui atau tidak dapat ditentukan dalam jumlah waktu yang wajar, maka program tersebut disebut _nontestable_.