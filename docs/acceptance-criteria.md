# Acceptance Criteria

Acceptance of others, their looks, their behaviors, their beliefs, bring you an inner peace and tranquility—instead of anger and resentment. — Anonymous

## 14.1 TYPES OF ACCEPTANCE TESTING
Suatu produk siap untuk dikirimkan kepada pelanggan setelah kelompok pengujian sistem merasa puas dengan produk tersebut dengan melakukan pengujian tingkat sistem. Pelanggan melaksanakan pengujian penerimaan berdasarkan ekspektasi mereka terhadap produk tersebut. Layanan yang ditawarkan oleh suatu produk perangkat lunak dapat digunakan oleh jutaan pengguna. Misalnya, penyedia layanan jaringan telepon seluler merupakan pelanggan sistem perangkat lunak yang menjalankan jaringan telepon tersebut, sedangkan masyarakat umum membentuk basis pengguna dengan berlangganan layanan telepon tersebut. Tidak jarang seseorang memiliki peran ganda sebagai pelanggan dan pengguna. Penyedia layanan perlu memastikan bahwa produk tersebut memenuhi kriteria tertentu sebelum penyedia menyediakan layanan tersebut kepada masyarakat umum. Pengujian penerimaan adalah pengujian formal yang dilakukan untuk menentukan apakah suatu sistem memenuhi kriteria penerimaannya—kriteria yang harus dipenuhi oleh sistem tersebut agar dapat diterima oleh pelanggan. Pengujian ini membantu pelanggan untuk menentukan apakah akan menerima sistem tersebut atau tidak [1]. Pelanggan pada umumnya berhak untuk menolak menerima pengiriman produk jika kasus pengujian penerimaan tidak lulus. Ada dua kategori pengujian penerimaan:

* User acceptance testing (UAT).
* Business acceptance testing (BAT).

UAT dilakukan oleh pelanggan untuk memastikan bahwa sistem memenuhi kriteria penerimaan kontraktual sebelum disetujui sebagai pemenuhan kebutuhan pengguna. Perencanaan dan pelaksanaan aktual pengujian penerimaan tidak harus dilakukan langsung oleh pelanggan. Sering kali firma konsultan pihak ketiga menawarkan layanan mereka untuk melakukan tugas ini. Namun, pelanggan harus menentukan kriteria penerimaan agar pihak ketiga dapat mencarinya dalam produk. BAT dilakukan dalam organisasi pengembangan pemasok untuk memastikan bahwa sistem pada akhirnya akan lulus UAT. Ini adalah latihan UAT di tempat pemasok. Organisasi pengembangan pemasok memperoleh dan melaksanakan kasus uji dari kontrak klien, yang mencakup kriteria penerimaan.

Kriteria penerimaan harus ditetapkan dan disetujui antara pemasok dan pelanggan untuk menghindari segala jenis argumen yang berlarut-larut. Salah satu pihak atau firma konsultan pihak ketiga dapat merancang rencana pengujian penerimaan. Dokumen kriteria penerimaan merupakan bagian dari kontrak dalam kasus pengembangan yang dialihdayakan berdasarkan perjanjian OEM. Jika beberapa perangkat keras merupakan bagian integral dari sistem, maka kriteria penerimaan perangkat keras disertakan dalam perjanjian kontraktual. Secara umum, organisasi pemasaran pembeli menentukan kriteria penerimaan. Akan tetapi, penting bagi tim jaminan kualitas perangkat lunak dari organisasi pembeli untuk memulai dialog dengan penjual dan memberikan serangkaian kriteria penerimaan "straw man" agar departemen pemasaran dapat meninjau dan menanggapinya. Pengguna, teknisi sistem, teknisi dukungan pelanggan, dan kelompok jaminan kualitas perangkat lunak dari organisasi pembeli melakukan perencanaan dan pelaksanaan aktual pengujian penerimaan setelah kriteria disetujui. Personel yang mengembangkan rencana pengujian penerimaan harus memiliki pemahaman menyeluruh tentang kriteria penerimaan yang telah disetujui. Tidak mungkin sistem lulus semua kriteria penerimaan sekaligus untuk sistem yang besar dan kompleks. Berguna untuk fokus pada tiga tujuan utama pengujian penerimaan berikut karena alasan praktis:

* Pastikan bahwa sistem memenuhi kriteria yang disepakati. Kategori kriteria yang luas dijelaskan di Bagian 14.2.
* Identifikasi dan atasi ketidaksesuaian, jika ada. Sumber ketidaksesuaian dan mekanisme penyelesaiannya telah dijelaskan di Bagian 14.5.
* Tentukan kesiapan sistem untuk operasi langsung. Penerimaan akhir sistem untuk penerapan bergantung pada hasil pengujian penerimaan. Tim pengujian penerimaan membuat laporan pengujian penerimaan yang menguraikan ketentuan penerimaan. Rincian laporan pengujian penerimaan telah dijelaskan di Bagian 14.6.

Pengujian penerimaan hanyalah satu aspek dari pemenuhan kontraktual perjanjian antara pemasok dan pembeli. Perjanjian kontraktual mungkin mengharuskan penjual untuk menyediakan materi lain, seperti dokumen solusi desain yang membahas dokumen persyaratan pembeli. Tim pengujian penerimaan dapat mengevaluasi penerimaan desain sistem dalam hal antarmuka pengguna grafis, penanganan kesalahan, dan kontrol akses.

14.2 ACCEPTANCE CRITERIA
At the core of any contractual agreement is a set of acceptance criteria. A key question is what criteria must the system meet in order to be acceptable? The acceptance criteria must be measurable and, preferably, quantifiable. The basic principle of designing the acceptance criteria is to ensure that the quality of the system is acceptable. One must understand the meaning of the quality of a system, which is a complex concept. It means different things to different people, and it is highly context dependent.

Meskipun orang yang berbeda mungkin memiliki pandangan yang berbeda tentang kualitas, pendapat pelangganlah yang berlaku. Konsep kualitas, pada kenyataannya, rumit dan beraneka ragam. Lima pandangan tentang kualitas, yaitu, pandangan transendental, pandangan pengguna, pandangan manufaktur, pandangan produk, dan pandangan berbasis nilai, telah dijelaskan dalam Bab 17. Kelima pandangan tersebut dalam konteks produksi dan manufaktur secara umum dan dijelaskan dalam konteks pengembangan perangkat lunak. Kelima pandangan tersebut disajikan di bawah ini dalam bentuk yang ringkas:
1. Pandangan transendental melihat kualitas sebagai sesuatu yang dapat dikenali tetapi sulit untuk dijelaskan atau didefinisikan.
2. Pandangan pengguna melihat kualitas sebagai sesuatu yang memuaskan tujuan.
3. Pandangan manufaktur melihat kualitas sebagai sesuatu yang sesuai dengan spesifikasi.
4. Pandangan produk mengaitkan kualitas dengan karakteristik bawaan produk.
5. Pandangan berbasis nilai memberikan angka biaya pada kualitas—jumlah yang bersedia dibayarkan pelanggan untuk itu.

Kriteria penerimaan ditetapkan berdasarkan berbagai aspek atribut kualitas ini. Atribut-atribut ini menentukan ada atau tidaknya kualitas dalam suatu sistem. Pembeli, atau Pelanggan, harus memikirkan relevansi dan kepentingan relatif atribut-atribut ini dalam situasi unik mereka pada saat merumuskan kriteria penerimaan. Atribut kualitas dibahas di bawah ini dan contoh kriteria penerimaan untuk setiap atribut kualitas diberikan.

Ketepatan dan Kelengkapan Fungsional Pertanyaan yang dapat diajukan adalah: Apakah sistem melakukan apa yang kita inginkan? Semua fitur yang dijelaskan dalam spesifikasi persyaratan harus ada dalam sistem yang dikirimkan. Penting untuk menunjukkan bahwa sistem bekerja dengan benar setidaknya dalam dua hingga tiga kondisi untuk setiap fitur sebagai bagian dari penerimaan.

Seseorang dapat menunjukkan ketepatan fungsional suatu sistem dengan menggunakan basis data persyaratan, seperti yang dibahas dalam Bab 11. Basis data digunakan dalam menghasilkan matriks ketertelusuran persyaratan selama pengujian tingkat sistem. Pada dasarnya, matriks ketertelusuran memberi tahu kita kasus uji yang digunakan untuk memverifikasi persyaratan dan semua persyaratan yang sebagian diverifikasi oleh kasus uji. Matriks ketertelusuran tersebut merupakan alat yang ampuh dalam menunjukkan kepada pelanggan tentang ketepatan fungsional sistem. Penting untuk memperoleh umpan balik awal dari pelanggan tentang matriks ketertelusuran persyaratan. Gagasan di balik umpan balik tersebut adalah untuk mencapai kesepakatan tentang metode validasi yang akan digunakan untuk setiap persyaratan. Keputusan tersebut sangat penting karena beberapa metode validasi lebih mudah diterapkan dan tidak memakan banyak waktu dibandingkan metode lainnya. Misalnya, metode demonstrasi tidak memakan banyak waktu dibandingkan metode pengujian.

Pada kenyataannya, pengujian kebenaran fungsional yang ketat dilakukan selama fase pengujian sistem, bukan selama pengujian penerimaan. Namun, pembeli dapat meminta matriks ketertelusuran persyaratan sebelum dimulainya pengujian penerimaan untuk memastikan bahwa sistem berfungsi sesuai dengan spesifikasi persyaratan.

Akurasi Pertanyaannya adalah: Apakah sistem memberikan hasil yang benar? Akurasi mengukur sejauh mana nilai yang dihitung tetap mendekati nilai yang diharapkan. Akurasi umumnya didefinisikan dalam hal besarnya kesalahan. Kesenjangan kecil—juga disebut kesalahan dalam analisis numerik, misalnya—antara nilai aktual yang dihitung oleh sistem dan nilai yang diharapkan umumnya ditoleransi dalam ruang kontinu. Masalah akurasi berbeda dalam ruang diskrit, yang mengarah ke hasil positif palsu dan negatif palsu. Positif palsu dan negatif palsu merupakan kelemahan serius dalam perangkat lunak diagnostik dan pemantauan apa pun.

Integritas Data Integritas data mengacu pada pelestarian data saat ditransmisikan atau disimpan sedemikian rupa sehingga nilai data tetap tidak berubah saat operasi penerimaan atau pengambilan yang sesuai dijalankan di lain waktu. Dengan demikian, data tidak boleh dikompromikan dengan melakukan operasi pembaruan, pemulihan, pengambilan, transmisi, dan penerimaan. Persyaratan integritas data disertakan dalam kriteria uji penerimaan untuk mengungkap kelemahan desain yang dapat mengakibatkan kerusakan data. Dalam sistem komunikasi, penyusup dapat mengubah data tanpa pengirim dan penerima mendeteksi perubahan tersebut. Jika mekanisme pemeriksaan integritas diterapkan, data dapat diubah, tetapi mekanisme akan mendeteksi gangguan tersebut. Mekanisme integritas data mendeteksi perubahan dalam kumpulan data. Konsep intisari pesan dan tanda tangan digital digunakan dalam menjaga integritas data. Catatan. Algoritme intisari pesan menerima pesan masukan dengan panjang yang berubah-ubah dan menghasilkan kode dengan panjang tetap. Kode dengan panjang tetap disebut intisari dari pesan asli. Algoritma intisari pesan yang umum digunakan adalah Message Digest 5 (MD5) dan Secure Hash Algorithm 1 dan 2 (SHA-1 dan SHA-2).

Catatan. Tanda tangan digital adalah intisari pesan terenkripsi yang ditambahkan ke dokumen yang akan disimpan atau dikirimkan. Intisari pesan diperoleh dengan menggunakan, misalnya, algoritma MD5, SHA-1, atau SHA-2. Intisari pesan dienkripsi dengan kunci pribadi pihak yang menyimpan atau mengirimkan pesan.

Konversi Data Konversi data adalah konversi dari satu bentuk data komputer ke bentuk lainnya. Misalnya, konversi file dari satu versi Microsoft Word ke versi sebelumnya demi mereka yang tidak menginstal versi terbaru Word. Pengujian konversi data adalah pengujian program atau prosedur yang digunakan untuk mengonversi data dari sistem yang ada untuk digunakan dalam sistem pengganti. Data dapat dikonversi ke format yang tidak valid yang tidak dapat diproses oleh sistem baru jika ini tidak dilakukan dengan benar; dengan demikian data tidak akan memiliki nilai. Selain itu, data dapat dihilangkan dari proses konversi yang mengakibatkan kesenjangan atau kesalahan sistem dalam sistem baru. Ketidakmampuan untuk memproses file cadangan atau arsip mengakibatkan ketidakmampuan untuk memulihkan atau menginterogasi data lama.

Kriteria penerimaan untuk konversi data mengukur dan melaporkan kemampuan perangkat lunak untuk mengonversi data aplikasi yang ada ke format baru. Pertanyaan-pertanyaan berikut harus dijawab dalam menentukan kriteria penerimaan konversi data:
* Bagaimana kita dapat membatalkan konversi dan mengembalikan ke versi basis data sebelumnya jika perlu?
* Seberapa banyak keterlibatan manusia yang diperlukan untuk memvalidasi hasil konversi?
* Bagaimana data saat ini digunakan dan bagaimana data yang dikonversi akan digunakan?
* Apakah perangkat lunak konversi data juga akan melakukan pemeriksaan integritas?

Pencadangan dan Pemulihan Pencadangan dan pemulihan data merupakan fungsi bawaan dari sistem yang besar dan kompleks. Hal ini karena, meskipun sistem tidak diharapkan mengalami crash, pada kenyataannya, crash sistem bukanlah hal yang jarang terjadi. Kriteria penerimaan pencadangan dan pemulihan menentukan tingkat ketahanan dan pemulihan perangkat lunak di setiap platform perangkat keras. Tujuan dari kriteria uji penerimaan pemulihan adalah untuk menguraikan sejauh mana data dapat dipulihkan setelah sistem crash. Pertanyaan-pertanyaan berikut harus dijawab dalam menentukan kriteria penerimaan pemulihan:
* Berapa banyak data yang dapat dipulihkan setelah crash dan bagaimana?
* Apakah data yang dipulihkan diharapkan konsisten?

Umumnya, sistem tidak dapat pulih dari crash kecuali data telah dicadangkan sebelumnya. Proses pencadangan mencakup pengambilan snapshot berkala dari status sistem dan menyimpannya dalam penyimpanan yang stabil untuk diambil nanti. Pertanyaan-pertanyaan berikut harus dijawab dalam menentukan kriteria penerimaan pencadangan:
* Seberapa sering proses pencadangan dimulai?
* Berapa lama proses pencadangan berlangsung?
* Apakah pencadangan diharapkan bekerja secara online atau offline dengan operasi normal ditangguhkan selama pencadangan? * Apakah proses pencadangan memeriksa apakah ruang penyimpanan yang tersedia cukup untuk menampung semua data?

Apakah proses pencadangan sepenuhnya otomatis?

Keunggulan Kompetitif Sistem harus memberikan keunggulan tersendiri dibandingkan metode yang ada dan produk pesaing melalui fitur-fitur inovatif. Analisis daya saing produk diberikan kepada pembeli. Dokumen ini berisi studi perbandingan sistem dengan produk yang tersedia di pasar dari vendor lain. Analisis kompetitif dilakukan oleh kelompok rekayasa sistem dari organisasi pemasaran. Pertanyaan-pertanyaan berikut perlu dijawab dalam menentukan kriteria penerimaan laporan analisis kompetitif:
* Siapa pesaing langsung terdekat dari produk tersebut?
* Siapa pesaing tidak langsung dari produk tersebut?
* Siapa pesaing potensial?
* Apakah bisnis di area produk tersebut stabil, berkembang, atau menurun?
* Apa yang dapat dipelajari dari operasi produk atau dari iklan pesaing?
* Apa kekuatan dan kelemahan pesaing?
* Bagaimana produk mereka berbeda dari produk yang sedang dikembangkan?

Usability The question is: How easy it is to use the system and how easy it is to learn? The goal of usability acceptance criteria is to ensure that the system is flexible, it is easy to configure and customize the system, on-line help is available, work-around is available, and userinterface is friendly. The following questions need to be addressed in specifying the usability acceptance criteria:
* How will the system help the user in the day-to-day job?
* Will the productivity, customer satisfaction, reliability, and quality of work life of the user improve by using the system?
* Are the menus, commands, screens, and on-line help clear to a typical user?
* Are the user procedures simple, logical, and clear to the typical user?
* Is the user guide clear, easy to access, and understandable for a typical user?
* Will the methods of error and exception handling utilized by the system increase reliability and productivity?
* Are the reports generated by the system in order, consistent, and clear?
* Is the system easy to install?

Performance The desired performance characteristics of the system must be defined for the measured data to be useful. The following questions relate to specification of the performance acceptance criteria:
* What types of performance characteristics of the system need to be measured?
* What is the acceptable value for each performance parameter?
* With what external data source or system does the application interact?
* What kind of workload should be used while running the performance tests? The workload should be a representative of the likely real-world operating condition in terms of low load, average load, and peak load.
Is it required to perform a before-and-after comparison of the performance
results with the prior version of the system?
Start-Up Time The system start-up time reflects the time taken to boot up
to become operational. The following questions address the start-up acceptance
criteria:
* How is the start-up time defined?
* Does the start-up time include the power-on self-test of all the system
hardware?
* What is the longest acceptable start-up time?
Stress The system should be capable of handling extremely high or stressful
load. It is necessary to identify the system limitations and then stress the system to
find the results when the system is pushed to the border and beyond. The system
limitation must be identified in the acceptance criteria. The following questions
must be addressed in specifying the stress acceptance criteria:
* What are the design limits of the system?
* What is the expected and acceptable behavior of the recovery mechanism?
* What test environment, close to customer deployment architecture, is needed in order to force the system to be stressed?

Reliability and Availability Software reliability is defined as the probability that the software executes without failure for a specified amount of time in a specified environment. The longer a system runs without failure, the more reliable it is. A large number of reliability models are available to predict the reliability of software. A software reliability model provides a family of growth curves that describe the decline of failure rate as defects are submitted and closed during the system testing phase. The failure rate is often calculated in terms of MTBF. A growth model can answer the following questions, which can be part of the reliability acceptance criteria:
* What is the current failure rate of the software?
* What will be the failure rate if the customer continues acceptance testing for a long time?
* How many defects are likely to be in the software?
* How much testing has to be performed to reach a particular failure rate?
The failure rate goal that is acceptable must be set separately for each level of problem severity—from critical to low. A customer may be willing to tolerate tens of low-severity issues per day but not more than one critical problem in a year.

System availability consists of proactive methods for maximizing service uptime, for minimizing the downtime, and for minimizing the time needed to recover from an outage. Downtime is measured in terms of MTTR. The creation of a customer environment is facilitated by gathering an operational profile from the customer. An operational profile describes the ways the system is to be used. One can uncover several deficiencies in the system while tuning the parameters of the system; parameter tuning will improve system availability level. Customers must be willing to share the operational profile of their computing environment to improve the target availability level, which may be proprietary information.

Maintainability and Serviceability The maintainability of a system is its ability to undergo repair and evolution. One way to characterize maintainability is to measure the MTTR, which reflects the time it takes to analyze a corrective defect, design a modification, implement the change, test it, and distribute it. The important factors, from a customer’s perspective, is the responsiveness of the service rather than the internal technical maintainability of the system. The following are useful acceptance criteria from a customer’s perspective:
* The customer is the final arbiter of setting the severity of a system problem. If the customer calls a problem critical, it must be fixed immediately.
* If a system problem is assessed as critical by the customer, then staff must be assigned to work on resolving the problem immediately with utmost priority.
* If the severity of a system problem is assessed as high by the customer, then staff must be assigned to work on resolving the problem during normal business hours until it is resolved or until a work-around has been delivered as an interim solution. The staff responsible for resolving the problem must ensure that there is significant effort made toward resolving the problem. However, they may spend time on other activities as priorities dictate.
* If a system problem is assessed as low by the customer, then staff must be assigned to work on resolving the problem during normal business hours as time permits. If the problem solution involves a software change, it will normally wait until the next software release has been implemented to provide the resolution.
* All the critical- and high-severity fixes must work 100% when installed.

Serviceability is closely related to maintainability of the system, which are designed to ensure the correctness of the tools that are used to diagnose and service the system. For example, the software may need to be serviced remotely via an Internet connection. Diagnostic utilities are used to monitor the operation and the cause of any malfunction. The following questions must be addressed in specifying the serviceability acceptance criteria:
* What kind of tools will be available for servicing the system?
* How should these tools be used?

Robustness The robustness of a system is defined as its ability to recover from errors, continue to operate under worst conditions, and operate reliably for an extended period of time. The following questions must be addressed in specifying the robustness acceptance criteria:
* What are the types of errors from which the system is expected to recover?
* What are the causes, or sources, of the errors so that these can be simulated in a test environment?
* How are the errors initiated, or triggered, in the real world?
* What types of corrective and recovery actions are required for each type of error?
* What kinds of disasters can strike? What are those scenarios?
* What is an acceptable response to each of these identified scenarios?
* What is the recovery mechanism for each of the scenarios? Is it workable, understood, and accepted?
* How can disaster be simulated in order to test recovery?

Timeliness Time to market is an important aspect of any contractual agreement. The supplier must be able to deliver the system to the buyer within the time frame agreed upon. Rewards and penalties are associated with the timeliness acceptance criteria as follows:
* If coding is completed on time, the buyer will reward 5% extra money on top of the contractual agreement.
* If system-level testing is completed on time, the buyer will reward 10% extra money on top of the contractual agreement.
* For every week of delay in completing the system tests, the supplier has to pay 2% penalty on top of the contractual agreement, with a maximum of 20% penalty.

Confidentiality and Availability The confidentiality acceptance criteria reter to the requirement that the data must be protected from unauthorized disclosure and the availability acceptance criteria to the requirement that the data must be protected from a denial of service (DoS) to authorized users. Different types of possible confidentiality and availability acceptance criteria are as follows:
* No unauthorized access to the system is permitted, that is, user authentication is performed.
* Files and other data are protected from unauthorized access.
* The system is protected against virus, worm, and bot attacks.
* Tools are available for detecting attacks.
* There is support against DoS attack.
* Privacy in communication is achieved by using encryption.
* All the customer data must be stored in a secure place in accordance withthe policies of customer right, such as confidentiality.

Remark. A worm is defined as a software component that is capable of, under its own means, infecting a computer system in an automated fashion. On the other hand, a virus spreads rapidly to a large number of computers. However, it cannot do so with its own capability; it spreads using the assistance of another program.

Remark. A bot is a software agent. A bot interacts with other network services intended for people as if it were a person. One typical use of bots is to gather information. Another more malicious use for bots is the coordination and operation of an automated attack on networked computers, such as a distributed DoS attack.

Compatibility and Interoperability The compatibility of a system is defined as the ability to operate in the same way across different platforms and network configurations and in the presence of different mixes of other applications. On the other hand, the interoperability of a system is defined as the ability to interface with other network elements and work correctly as expected. The major challenge is in determining the platforms, configurations, and other applications with which the system is compatible. The following questions must be addressed in specifying the compatibility and interoperability acceptance criteria:
* What are the platforms, or configurations, on which the system must
operate?
* Does the system have to work exactly the same way across different configurations? If not, what are the acceptable variations?
* What are the applications that must coexist with the system?
* With what network elements must the system interoperate?

Compliance The system should comply with the relevant technical standards,
such as the IEEE standards, operating system interface standards, and the IP standards. In addition, the system should comply with regulatory requirements as
established by external agencies. The following questions must be addressed in
specifying the acceptance criteria for compliance:
* With what technical standards should the system comply? Are there any
exceptions to these standards? If yes, specify the exceptions.
* Identify the regulatory bodies that must certify the system?

Installability and Upgradability The purpose of system installability and upgradability is to ensure that the system can be correctly installed and upgraded in the customer environment. If for some reason the customer wants to uninstall or downgrade the system software, it is required to be done smoothly. Installation and upgradation of a system is planned by identifying the major milestones and contingency steps. The system installation and upgradation process document must be available with specific steps. The acceptance criteria of system installation and upgradation are as follows:
* The document must identify the person to install the system, for example, the end user or a trained technician from the supplier side.
* Over what range of platforms, configurations, and versions of support software is the installation or upgradation process expected to work? The hardware and software requirements must be clearly explained in the document.
* Can the installation or upgradation process change the user’s existing environment? If yes, the risks of this change should be clearly documented.
* The installation or upgradation process should include diagnostic and corrective steps to be used in the event of the process not progressing as expected.
* The installation or upgradation process should contain a workable uninstall, downgrade, or backoff process in case a specific installation does not proceed as expected.
* The installation or upgradation process should correctly work from all of
the various delivery media, such as download via File Transfer Protocol (FTP), CD-ROM, and DVD.
* If the system includes a licensing and registration process, it should work smoothly and should be documented.
* The installation or upgradation instructions should be complete, correct, and usable.
* The installation or upgradation process should be verified during system testing.
* There should be zero defects outstanding against a system installation or upgradation process.

Scalability The scalability of a system is defined as its ability to effectively provide acceptable performance as the following quantities increase: (i) geographic area of coverage of a system, (ii) system size in terms of the number of elements in the system, (iii) number of users, and (iv) volume of workload per unit time. A system may work as expected in limited-use scenarios but may not scale up very well. The following questions must be addressed in specifying the scalability acceptance criteria:
* How many concurrent users is the system expected to handle?
* How many transactions per unit time is the system expected to process?
* How many database records is the system expected to support?
* How many elements, or objects, must be managed in live operation?
* What is the largest geographic area the system can cover?

Documentation The quality of the system user’s guide must be high. The documentation acceptance criteria are formulated as follows:
* All the user documents should be reviewed and approved by the software quality assurance group for correctness, accuracy, readability, and usefulness.
* The on-line help should be reviewed and signed off by the software quality assurance group.

14.3 SELECTION OF ACCEPTANCE CRITERIA
The acceptance criteria discussed above provide a broad idea about customer needs and expectations, but those are too many and very general. The customer needs to select a subset of the quality attributes and prioritize them to suit their specific situation. Next, the customer identifies the acceptance criteria for each of the selected quality attributes. When the customer and the software vendor reach an agreement on the acceptance criteria, both parties must keep in mind that satisfaction of the acceptance criteria is a trade-off between time, cost, and quality. As Ed Yourdon opined, sometimes less than perfect is good enough. Only business goals and priority can determine the degree of “less than perfect” that is acceptable to both the parties. Ultimately, the acceptance criteria must be related to the business goals of the customer’s organization.

Many organizations associated with different application domains have selected and customized existing quality attributes to define quality for themselves, taking into consideration their specific business and market situation. For example, IBM used the quality attribute list CUPRIMDS—capability, usability, performance, reliability, installation, maintenance, documentation, and service—for its products. Similarly, for web-based applications [8], a set of quality attributes are identified in decreasing order of priority: reliability, usability, security, availability, scalability, maintainability, and time to market. Such a prioritization scheme is often used in specific application domains. For example, usability and maintainability take precedence over performance and reliability for a word processor software. On the other hand, it might be the other way around for a real-time operating system or telecommunication software.

14.4 ACCEPTANCE TEST PLAN
Planning for acceptance testing begins as soon as the acceptance criteria are known. Early development of an acceptance test plan (ATP) gives us a good picture of the final product. The purpose of an ATP is to develop a detailed outline of the process to test the system prior to making a transition to the actual business use of the system. Often, the ATP is delivered by the vendor as a contractual agreement, so that the business acceptance testing can be undertaken within the vendor’s development
organization to ensure that the system eventually passes the acceptance test.

In developing an ATP, emphasis is put on demonstrating that the system works according to the customer’s expectation, rather than passing a set of comprehensive tests. In any case, the system is expected to have already passed a set of comprehensive tests during system-level testing. The ATP must be kept very simple because the audience of this plan may include people from diverse backgrounds, such as marketing and business managers. Some people argue that the ATP is redundant and unnecessary if a comprehensive system test plan is developed. We believe that even if a system test plan is adequate, acceptance tests usually uncover additional significant problems. Moreover, user’s concerns are not addressed during system-level testing.

An ATP needs to be written and executed by the customer’s special user group. The user group consists of people from different backgrounds, such as software quality assurance engineers, business associates, and customer support engineers. In addition, the acceptance test cases are executed at the user’s operational environment, whereas the system-level test cases are executed in a laboratory environment. An overall test plan for acceptance testing and description of specific tests are documented in the ATP. The structure of a typical ATP is outlined in Table 14.1.

The introduction section of the ATP describes the structure of the test plan and what we intend to accomplish with this test plan. This section typically includes (i) test project name, (ii) revision history, (iii) terminology and definitions, (iv) names of the approvers and the date of approval, (v) an overview of the lan, and (vi) references. For each quality category from the acceptance criteria signed-off document two subsections are created: operational environment and test case specification. The operational environment deals with discussion on site preparation for the execution of the acceptance test cases. Test cases are specified for each acceptance criteria within the quality category.

An outline of the timeline of execution of acceptance tests is provided in the schedule section of the ATP. Acceptance test execution is not intended to be exhaustive, and therefore it does not continue for long. The acceptance test may take up to six weeks for a large system. The point here is that comprehensive acceptance testing, to the same extent and depth as targeted by system-level testing, is not required to demonstrate that the acceptance criteria are satisfied by the system.

The human resources section of the ATP deals with (i) the identification of the acceptance testers that form the client organization and (ii) their specific roles in the execution of acceptance test cases. The section includes acceptance test site preparation, overseeing installation of new hardware, upgrading the software, and setting up of the networks. These are the people who are knowledgeable in the operational environment and business operations. In addition, the human resources requirement from the supplier organization during the acceptance testing is included in this section. These engineers are usually from the supplier’s system test group, who participated in testing the system.

The ATP is reviewed and approved by the relevant groups, such as the marketing, customer support, and software quality assurance groups. It can be shared with the system supplier organization.

14.5 ACCEPTANCE TEST EXECUTION
The acceptance test cases are divided into two subgroups. The first subgroup consists of basic test cases, and the second consists of test cases that are more complex to execute. The acceptance tests are executed in two phases. In the first phase, the test cases from the basic test group are executed. If the test results are satisfactory, then the second phase, in which the complex test cases are executed, is taken up. In addition to the basic test cases, a subset of the system-level test cases are executed by the acceptance test engineers to independently confirm the test results. Obviously, a key question is: Which subset of the system-level test cases are selected? It is recommended to randomly select 5–10 test cases from each test category. If a very large fraction, say more than 0.95, of the basic test cases pass, then the second phase can proceed. It may be counterproductive to carry out the execution of the more complex tests if a significant fraction of the basic tests fail.

Acceptance test execution is an important activity performed by the customer with much support from the developers. The activity includes the following detailed actions:
* The developers train the customer on the usage of the system.
* The developers and the customer coordinate the fixing of any problem discovered during acceptance testing.
* The developers and the customer resolve the issues arising out of any acceptance criteria discrepancy.

System-level test personnel from the development organization travel to the customer location where the acceptance tests are to be conducted. They assist the customer in preparing a test site and train the acceptance test engineers on how to use the system. They provide the earlier system-level test results to the customer’s test engineers in order to make informal decisions about the direction and focus of the acceptance testing effort. In addition, the on-site system test engineers answer the customer’s questions about the system and assist the acceptance test engineers in executing the acceptance tests.

Any defect encountered during acceptance testing are reported to the software development organization through the on-site system test engineers. The defects are submitted through the defect tracking system. The software build is retested by the supplier and a satisfactory software image is made available to the customer for continuation of acceptance testing when the defects are fixed. The failed tests are repeated after the system is upgraded with a new software image. An agreement must be reached between the on-site system test engineers and the acceptance test engineers when to accept a new software image for acceptance testing. The number of times the system can be upgraded to a new software image during acceptance testing is negotiated between the customer and the supplier. Multiple failures of a system during acceptance testing are an indication of poor system quality.

It is possible that an acceptance test engineer may encounter issues related to acceptance criteria during the execution of acceptance test cases. The system may not provide services to the users as described in the acceptance criteria. Any deviation from the acceptance criteria discovered at this stage may not be fixed immediately. The acceptance test engineer may create an acceptance criteria change (ACC) document to communicate the deficiency in the acceptance criteria to the supplier. A representative format of an ACC document is shown in Table 14.2. An ACC report is generally given to the supplier’s marketing department through the on-site system test engineers.

14.6 ACCEPTANCE TEST REPORT
Acceptance test activities are designed to reach one of three conclusions: Accept the system as delivered, accept the system after the requested modifications have been made, or do not accept the system. Usually some useful intermediate decisions are made before making the final decision:
* A decision is made about the continuation of acceptance testing if the results of the first phase of acceptance testing are not promising. One may recall that the basic tests are executed in the first phase.
* If the test results are unsatisfactory, changes will be made to the system before acceptance testing can proceed to the next phase. 

The intermediate decisions are made based on evaluation of the results of the first phase of testing. Moreover, during the execution of acceptance tests, the status of testing is reviewed at the end of every working day by the leader of the acceptance test team, on-site system test engineers, and project managers of the customer and the supplier. The acceptance team prepares a test report which
forms the basis of discussion at the review meeting before they meet for a review. A template of the test report is given in Table 14.3.

The test report is reviewed on a daily basis to understand the status and progress of acceptance testing. If serious problems are encountered during acceptance testing, the project manager flags the issues to the senior management.

At the end of the first and the second phases of acceptance testing an acceptance test report is generated by the test team leader. A template for a test report is outlined in Table 14.4. Most of the information from the test status report can be used in the acceptance test summary report.

The report identifier uniquely identifies the report. It is used to keep track of the document under version control. 

The summary section summarizes what acceptance testing activities took place, including the test phases, releases of the software used, and the test environment. This section normally includes references to the ATP, acceptance criteria, and requirements specification.

The variances section describes any difference between the testing that was planned and the actual testing carried out. It provides an insight into a process for improving acceptance test planning in the future.

In the summary of results section of the document test results are summarized. The section gives the total number of test cases executed, the number of passing test cases, and the number of failing test cases; identifies all the defects; and summarizes the acceptance criteria to be changed.

The evaluation section provides an overall assessment of each category of the quality attributes identified in the acceptance criteria document, including their limitations. This evaluation is based on the test results from each category of the test plan. The deviations of the acceptance criteria that are captured in the ACC during the acceptance testing are discussed.

The recommendations section includes the acceptance test team’s overall recommendation: (i) unconditionally accept the system, (ii) accept the system subject to certain conditions being met, or (iii) reject the system. However, the ultimate decision is made by the business experts of the supplier and the buyer organization.

The summary of activities section summarizes the testing activities and the major events. This section includes information about the resources consumed by the various activities. For example, the total manpower involved in and the time spent for each of the major testing activities are given. This section is useful to management for accurately estimating future acceptance testing efforts.

Finally, the names and titles of all the people that will approve this report are listed in the approvals section. Ideally, the approvers of this report should be the same people who approved the corresponding ATP because the summary report describes all the activities outlined in the ATP. If some of the reviewers have minor disagreements, they may note their views before signing off on the document.

14.8 SUMMARY
This chapter began with an introduction to two types of acceptance testing: user acceptance testing and business acceptance testing. Next, the chapter described acceptance criteria in terms of quality attributes. Formulation of acceptances criteria is governed by the business goals of the customer’s organization.

We presented an outline of an acceptance test plan and described in detail how to create such a plan. Emphasis must be put on the notion that the system works according to the customer’s expectations in developing an acceptance test plan, rather than just passing comprehensive testing. Less emphasis is put on a system passing a comprehensive set of tests because rigorous testing is assumed to have already occurred during the system testing phase.

Next, we discussed the execution of acceptance tests, which is an important activity performed by the customer with much needed support from the developers. Three major activities were identified and discussed: (i) providing training to the customer’s test engineers, (ii) fixing problems during acceptance testing, and (iii) resolving issues concerning any discrepancy related to acceptance criteria. After that, we described the generation of an acceptance test report, which must
be completed at the end of acceptance testing.

Finally, we explained how user stories are used in XP as acceptance criteria and acceptance test cases are created. These tests are reviewed, automated, and executed multiple times per day as a regression acceptance test suite in the presence of on-site customers.