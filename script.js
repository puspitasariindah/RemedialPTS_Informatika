let timerInterval;
let waktuMulai;

// Fungsi untuk memilih kelas
function pilihKelas() {
    const kelas = document.getElementById('kelas').value;
    const siswaDropdown = document.getElementById('siswa');

    // Reset opsi nama siswa
    siswaDropdown.innerHTML = '<option value="" disabled selected>Pilih Nama Siswa</option>';

     const siswaData = {
        "10 RPL A": [
            { noAbsen: 1, nama: 'AIDAH MEYTRI UTAMI' },
            { noAbsen: 2, nama: 'ANDIKA SATRIO PERMANA' },
            { noAbsen: 3, nama: 'ANNISA INDRI NOVIYANTI' },
            { noAbsen: 4, nama: 'BANYU BANING PUTRA NUGRAHA' },
            { noAbsen: 5, nama: 'BINTANG PRATAMA' },
            { noAbsen: 6, nama: 'CALLYSTA SHAFAA PUTRI AFIANTO' },
            { noAbsen: 7, nama: 'CARRISA PUTRI RAHMADHANI' },
            { noAbsen: 8, nama: 'DIVINA KHANZA NADHIVA ANDIRYL' },
            { noAbsen: 9, nama: 'DZAKY ALMER JAMAIL' },
            { noAbsen: 10, nama: 'FAKHIH SAIFAN' },
            { noAbsen: 11, nama: 'GUSTI PRATAMA ADNI' },
            { noAbsen: 12, nama: 'HAYDEN FERANDY' },
            { noAbsen: 13, nama: 'HIBBAN AHMAD IBRAHIM' },
            { noAbsen: 14, nama: 'IMTINAN NUHA QANITA RAFIFAH' },
            { noAbsen: 15, nama: 'KENTARO ANDI RAFIF' },
            { noAbsen: 16, nama: 'LUTFI ANA FITRI AINURRAHNA },
            { noAbsen: 17, nama: 'MUHAMMAD ABDUL HAFIZ' },
            { noAbsen: 18, nama: 'MUHAMMAD ADRI ALFARIZI },
            { noAbsen: 19, nama: 'MUHAMMAD FACHRI HIBRIZI' },
            { noAbsen: 20, nama: 'MUHAMMAD KHAVI ILHAM' },
            { noAbsen: 21, nama: 'NAFISAH SYARIFAH WIDYADHANA' },
            { noAbsen: 22, nama: 'NAILA DESTYANA ALYSA' },
            { noAbsen: 23, nama: 'NAILA SAFIRA' },
            { noAbsen: 24, nama: 'NAJLA DALILAH ENDARSYAH' },
            { noAbsen: 25, nama: 'NATHASYA CORNELIA NUR'IMAN' },
            { noAbsen: 26, nama: 'NAYLA PUTRI LESTARI' },
            { noAbsen: 27, nama: 'NOVIANI PUTRI' },
            { noAbsen: 28, nama: 'PRINCE MUHAMMAD ALFAREZA' },
            { noAbsen: 29, nama: 'RAYA ALTAF HUSAIN' },
            { noAbsen: 30, nama: 'REYZA TRI JULIANI' },
            { noAbsen: 31, nama: 'REZA BUDI KURNIAWAN' },
            { noAbsen: 32, nama: 'SAFIRA TRI APRILIA' },
            { noAbsen: 33, nama: 'SOLEFAH AJI MUSTIKA' },
            { noAbsen: 34, nama: 'SYARIF KHOIRUL RIFA' },
            { noAbsen: 35, nama: 'TENGKU AHMAD ABID KHOIRI' },
            { noAbsen: 36, nama: 'TYAGA AXELLATIO FATHIRIZQI APRIYANTO' }
            ],
        "10 RPL B": [
            { noAbsen: 1, nama: 'AHMAD SATRIA HASUGIAN' },
            { noAbsen: 2, nama: 'ALTHAMIRA AURELI HIDAYAT' },
            { noAbsen: 3, nama: 'AMIRA NAIFA JANNAH' },
            { noAbsen: 4, nama: 'ANDHIKA ATHALLAH PUTRA DARSONO' },
            { noAbsen: 5, nama: 'AULIA NURAINI' },
            { noAbsen: 6, nama: 'AYESHA CHANDANI' },
            { noAbsen: 7, nama: 'BAGAS SETIAWAN' },
            { noAbsen: 8, nama: 'FAIZ ALBARK' },
            { noAbsen: 9, nama: 'FITRIANISYA AZZAHRA R' },
            { noAbsen: 10, nama: 'GANIS ALYA KIRANA PUTRI' },
            { noAbsen: 11, nama: 'HAIKAL ANANDA MUZAQI' },
            { noAbsen: 12, nama: 'HARIS ADRIAN RAMADHANI' },
            { noAbsen: 13, nama: 'I GEDE MADE RAYI DARSANAPARIGA' },
            { noAbsen: 14, nama: 'MALSYAZIA NAOMI ZHAFIRA' },
            { noAbsen: 15, nama: 'MELDA ALTAMIRA' },
            { noAbsen: 16, nama: 'MIFTAKHUL JANAH' },
            { noAbsen: 17, nama: 'MUHAMAD NAWFAL HAKIM' },
            { noAbsen: 18, nama: 'MUHAMMAD FAJRI' },
            { noAbsen: 19, nama: 'MUHAMMAD FIKRI' },
            { noAbsen: 20, nama: 'MUHAMMAD REVAN ADZANUAR' },
            { noAbsen: 21, nama: 'NAYZILLA PRAMESWARI' },
            { noAbsen: 22, nama: 'PEDROSA SIMANJUNTAK' },
            { noAbsen: 23, nama: 'PUTRI RIZQI FAUZIAH' },
            { noAbsen: 24, nama: 'QAISER GENTZA ABYAZ' },
            { noAbsen: 25, nama: 'RAAFI HASBI ASSIDIQI' },
            { noAbsen: 26, nama: 'RAZIF ARBA PERMANA' },
            { noAbsen: 27, nama: 'REGITA AULIA PUTRI' },
            { noAbsen: 28, nama: 'REISYA PRAJNA ARAMITA' },
            { noAbsen: 29, nama: 'RESTI ELVINA DAMAYANTI' },
            { noAbsen: 30, nama: 'RATU SYARAH SHAFYRA RIZQIN' },
            { noAbsen: 31, nama: 'RIKA HALIMATU SA'DIYAH' },
            { noAbsen: 32, nama: 'SABRINA HAFIZA PUTRI' },
            { noAbsen: 33, nama: 'SAVIRA MEDINA PUTRI' },
            { noAbsen: 34, nama: 'SYAHDANURASIK FATHIR QUDRATILLAH' },
            { noAbsen: 35, nama: 'ZAHRA AULIA AHMAD' },
            { noAbsen: 36, nama: 'ZAHRA OKTAVIA }
            ]
    };

// Tambahkan opsi siswa berdasarkan kelas yang dipilih
    if (siswaData[kelas]) {
        siswaData[kelas].forEach(siswa => {
            const option = document.createElement('option');
            option.value = siswa.noAbsen;
            option.text = `${siswa.noAbsen}. ${siswa.nama}`;
            siswaDropdown.appendChild(option);
        });
    }
}

// Fungsi untuk memulai timer
function startTimer(duration) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

// Fungsi untuk memulai ujian
function startExam() {
    const kelas = document.getElementById('kelas').value;
    const noAbsen = document.getElementById('siswa').value;

    if (kelas && noAbsen) {
        const nama = document.querySelector(`#siswa option[value='${noAbsen}']`).textContent.split(". ")[1];
        //document.getElementById("examInfo").innerHTML = `Kelas: ${kelas}<br>No Absen: ${noAbsen}<br>Nama: ${nama}`;

        // Sembunyikan form dan tampilkan soal ujian
        document.querySelector(".form-section").style.display = 'none';
        document.getElementById("soalSection").style.display = 'block';
        document.getElementById('timerSection').style.display = 'block';

        // Mulai timer
        startTimer(1200); // 1 jam (1200 detik)

        // Catat waktu mulai
        waktuMulai = new Date();
        
    } else {
        alert("Silahkan pilih kelas dan siswa terlebih dahulu!");
        }
}


// Fungsi untuk menghitung skor
function calculateScore() {
    const jawabanBenar = {
        soal1: 'c',
        soal2: 'a',
        soal3: 'b',
        soal4: 'a',
        soal5: 'c',
        soal6: 'b',
        soal7: 'c'
    };
    
    let score = 0;

    for (let soal in jawabanBenar) {
        const jawabanDipilih = document.querySelector(`input[name="${soal}"]:checked`);
        if (jawabanDipilih && jawabanDipilih.value === jawabanBenar[soal]) {
            score += 1;
        }
    }

    return score;
}

// Fungsi untuk submit ujian
function submitExam() {
    clearInterval(timerInterval); // Hentikan timer

    // Sembunyikan soal
    document.getElementById('soalSection').style.display = 'none';
    document.getElementById('timerSection').style.display = 'none';

    // Ambil data
    const kelas = document.getElementById('kelas').value;
    const noAbsen = document.getElementById('siswa').value;
    const nama = document.querySelector(`#siswa option[value='${noAbsen}']`).textContent.split(". ")[1];
    const waktuSelesaiFormatted = new Date().toLocaleTimeString();
    const waktuMulaiFormatted = waktuMulai.toLocaleTimeString();

    // Hitung skor
    const score = calculateScore();

    // Tampilkan hasil
    document.getElementById('hasil').innerHTML = `
        <h3>Hasil Ujian</h3>
        Kelas: ${kelas}<br>
        No Absen: ${noAbsen} <br>
        Nama: ${nama}<br>
        Waktu Mulai: ${waktuMulaiFormatted}<br>
        Waktu Selesai: ${waktuSelesaiFormatted}<br>
        Skor: ${score}
    `;

    document.getElementById('hasil').style.display = 'block';

    // Kirim data ke Google Forms
    kirimKeGoogleForms(score);
}

// Fungsi untuk mengirim data ke Google Forms
function kirimKeGoogleForms(score) {
    const kelas = document.getElementById('kelas').value;
    const noAbsen = document.getElementById('siswa').value;
    const nama = document.querySelector(`#siswa option[value='${noAbsen}']`).textContent.split(". ")[1];

    const waktuMulaiFormatted = waktuMulai.toLocaleTimeString();
    const waktuSelesaiFormatted = new Date().toLocaleTimeString();

    const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScxJ0ioEinKEgGchwXCjvU2nGgM2-9xCRptiQLNn6dm6OuitQ/formResponse"; // Ganti dengan URL Google Form Anda

    const data = new FormData();
    data.append('entry.553520697', kelas);  // Ganti dengan entry ID Kelas
    data.append('entry.2058714764', nama);  // Ganti dengan entry ID Nama
    data.append('entry.1476646274', noAbsen);  // Ganti dengan entry ID No Absen
    data.append('entry.887434112', score);  // Ganti dengan entry ID Skor
    data.append('entry.2130018600', waktuMulaiFormatted);  // Ganti dengan entry ID Waktu Mulai
    data.append('entry.610910249', waktuSelesaiFormatted);  // Ganti dengan entry ID Waktu Selesai

    fetch(formURL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'  // Agar tidak ada masalah dengan CORS
    }).then(() => {
        alert("Hasil ujian Anda telah disimpan.");
    }).catch(error => {
        console.error('Error:', error);
        alert("Terjadi kesalahan saat mengirim data.");
    });
}





