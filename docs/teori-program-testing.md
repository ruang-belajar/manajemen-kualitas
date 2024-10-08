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