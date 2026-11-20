# Apa itu Croaster?

Croaster adalah **sistem pemantauan suhu pemanggangan kopi open-source** yang dirancang untuk roaster rumahan, usaha kecil, dan para penggemar kopi. Croaster menyediakan **pemantauan suhu secara real-time** dan terintegrasi sempurna dengan **aplikasi ICRM**.

------------------------------------------------------------------------

#### Q: Apa fungsi Croaster?

**A:** Croaster mengukur dan menampilkan **Suhu Lingkungan (ET)** dan **Suhu Biji (BT)** selama proses pemanggangan kopi. Alat ini membantu Anda memantau dan mengendalikan proses pemanggangan untuk hasil yang konsisten dan berkualitas tinggi.

------------------------------------------------------------------------

#### Q: Perangkat keras apa yang digunakan Croaster?

**A:** Croaster didukung oleh: 
  - **ESP8266** (hanya Wi-Fi) atau **ESP32C3** (Wi-Fi + Bluetooth Low Energy). 
  - **Dua sensor termokopel MAX6675** (untuk ET dan BT). 
  - **Layar OLED 128×64 (SSD1306)** untuk tampilan langsung di perangkat.

------------------------------------------------------------------------

#### Q: Bagaimana Croaster terhubung dengan ICRM?

**A:** Croaster terhubung melalui: 
  - **Wi-Fi (WebSocket)**: Cocok untuk koneksi jarak jauh yang stabil. 
  - **Bluetooth Low Energy (BLE)**: Praktis untuk koneksi cepat dan nirkabel (hanya ESP32).

------------------------------------------------------------------------

#### Q: Mengapa menggunakan Croaster dengan ICRM?

**A:** Aplikasi ICRM meningkatkan fungsionalitas Croaster dengan menyediakan: 
  - **Grafik real-time** untuk ET, BT, dan Laju Peningkatan (RoR). 
  - **Riwayat pemanggangan**: Simpan setiap sesi pemanggangan beserta kurva, peristiwa, dan catatannya. 
  - **Manajemen pustaka kopi & inventaris**. 
  - **Penanda peristiwa** (misalnya, Dry End, First Crack). 
  - **Alarm & notifikasi** untuk titik-titik penting. 
  - **Pembaruan firmware OTA** (Wi-Fi).

------------------------------------------------------------------------

#### Q: Apakah saya memerlukan Artisan atau perangkat lunak lain untuk menggunakan Croaster?

**A:** Tidak, Croaster dapat digunakan **langsung dengan ICRM**. Namun, Croaster juga kompatibel dengan **Artisan Roaster Scope** untuk pengguna tingkat lanjut.

------------------------------------------------------------------------

#### Q: Apakah Croaster bersifat open-source?

**A:** Ya. Anda dapat mengakses kode sumber lengkap dan dokumentasi perangkat keras di [GitHub](https://github.com/IiemB/Croaster).

------------------------------------------------------------------------

#### Q: Croaster ditujukan untuk siapa?

**A:** Siapa pun yang ingin memiliki kendali lebih baik atas pemanggangan kopi mereka, mulai dari pemula yang belajar kurva pemanggangan hingga profesional yang menyempurnakan profil.

------------------------------------------------------------------------

## Catatan Akhir

Croaster, jika dipadukan dengan ICRM, menghadirkan **solusi pemanggangan yang lengkap, terjangkau, dan fleksibel**, membantu Anda memanggang dengan lebih cerdas, bukan lebih sulit.
