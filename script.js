let timerInterval;
let waktuMulai;

// Fungsi untuk memilih kelas
function pilihKelas() {
    const kelas = document.getElementById('kelas').value;
    const siswaDropdown = document.getElementById('siswa');

    // Reset opsi nama siswa
    siswaDropdown.innerHTML = '<option value="" disabled selected>Pilih Nama Siswa</option>';

const siswaData = {
        "11 RPL A": [
            { noAbsen: 1, nama: 'ADINDA SYAHILA' },
            { noAbsen: 2, nama: 'ADRYAN PRATAMA' },
            { noAbsen: 3, nama: 'AGUNG ATHAULLAH RADJAK' },
            { noAbsen: 4, nama: 'AHMAD ILYAS DESSAR RUKMANA' },
            { noAbsen: 5, nama: 'AMELIA PUTRI' },
            { noAbsen: 6, nama: 'ANISA TRI OKTAVIA' },
            { noAbsen: 7, nama: 'AULIA PUTRI' },
            { noAbsen: 8, nama: 'AZKA FATHUR RAHMAN' },
            { noAbsen: 9, nama: 'BAGINDA MUJAHID FAJAR .S .R' },
            { noAbsen: 10, nama: 'CARISSA AUREL LIDRA' },
            { noAbsen: 11, nama: 'EKA FEBRIANTI' },
            { noAbsen: 12, nama: 'ELIANUR FAJRIYANI' },
            { noAbsen: 13, nama: 'FARID INDRAWAN' },
            { noAbsen: 14, nama: 'GHADIES NOORHAYATI SUBRATA' },
            { noAbsen: 15, nama: 'GHATFAN GALIHANDRI' },
            { noAbsen: 16, nama: 'IRGI ATTALA RAMADHAN' },
            { noAbsen: 17, nama: 'I ZAZ RAMDHANY' },
            { noAbsen: 18, nama: 'JAUZA AKRAM WIBAWA ATMADJA' },
            { noAbsen: 19, nama: 'M.AKMAL FALAH' },
            { noAbsen: 20, nama: 'MATHILDA ANNEKE WAWORUNTU' },
            { noAbsen: 21, nama: 'MOCHAMMAD ZAKY AL - ANSHORY' },
            { noAbsen: 22, nama: 'MUHAMAD AL ZAHLFAN WIRANTO' },
            { noAbsen: 23, nama: 'MUHAMMAD AGHNA SIMAMORA' },
            { noAbsen: 24, nama: 'MUHAMMAD FIQRIANSYAH AKBAR' },
            { noAbsen: 25, nama: 'MUHAMMAD IKHSAN DZUL HANNAN' },
            { noAbsen: 26, nama: 'NABILA SYIFA HARAHAP' },
            { noAbsen: 27, nama: 'ARASYA FALQI GANI' },
            { noAbsen: 28, nama: 'RATNA MUTU MANIKAM' },
            { noAbsen: 29, nama: 'RIFFAT AMILIN HAWARI' },
            { noAbsen: 30, nama: 'RIZKY SAPUTRO' },
            { noAbsen: 31, nama: 'SELVIANA RAMADANI' },
            { noAbsen: 32, nama: 'SENA AJI RAMAWIJAYA' },
            { noAbsen: 33, nama: 'SHAKILA PUTRI MAISYA' },
            { noAbsen: 34, nama: 'TAMAM ALIFIAN' },
            { noAbsen: 35, nama: 'ZAHRA PUTRI ISNAINI' },
            { noAbsen: 36, nama: 'ZIDANE FAHKRY MYLAN' }
                            
        ],
        "11 RPL B": [
            { noAbsen: 1, nama: 'ACHMAD HAIDAR MAGHRABI' },
            { noAbsen: 2, nama: 'ALAYSA IRVANY' },
            { noAbsen: 3, nama: 'ALLISA DITA SYAFIRA' },
            { noAbsen: 4, nama: 'AMANDA ROSIKI BARINGBING' },
            { noAbsen: 5, nama: 'ANNISA RAMADHANI' },
            { noAbsen: 6, nama: 'AUFA FARIDATUN NIKMAH' },
            { noAbsen: 7, nama: 'DAMAR RHAMADAN WARDIANTO' },
            { noAbsen: 8, nama: 'DWI SEFTI FAUZIA' },
            { noAbsen: 9, nama: 'FADHIL MACHYA RABBANI' },
            { noAbsen: 10, nama: 'FARREL ALI RIFALDO' },
            { noAbsen: 11, nama: 'FATHAN ABDUL MALIK' },
            { noAbsen: 12, nama: 'FATTYAH RADIN KAYLA' },
            { noAbsen: 13, nama: 'GALANG RAKA SIWA' },
            { noAbsen: 14, nama: 'GHINA SALSABILA' },
            { noAbsen: 15, nama: 'GLADIOR ALEXANDER ROSE' },
            { noAbsen: 16, nama: 'HANDIKA' },
            { noAbsen: 17, nama: 'HIRTO E TAMAMEKENG' },
            { noAbsen: 18, nama: 'KEISHA ANIRIA RAMADHANI' },
            { noAbsen: 19, nama: 'KENZIE YASIR ARRAFI' },
            { noAbsen: 20, nama: 'MICHAEL TEGUH CARLO SIMBOLON' },
            { noAbsen: 21, nama: 'MOHAMAD FADLY FAIRUS' },
            { noAbsen: 22, nama: 'MUFID IBRAHIM' },
            { noAbsen: 23, nama: 'MUHAMMAD ERYAN' },
            { noAbsen: 24, nama: 'MUHAMMAD NADHIF HAKIM' },
            { noAbsen: 25, nama: 'NANDA ANTIKA' },
            { noAbsen: 26, nama: 'NISRINA ALIFYA PUTRI YUNI YANTO' },
            { noAbsen: 27, nama: 'PUTRI AISYAH DWIJANTI' },
            { noAbsen: 28, nama: 'QATRUNADA AZURA QORISU' },
            { noAbsen: 29, nama: 'RATU AFIFAH SYAHBRINA' },
            { noAbsen: 30, nama: 'RATU SYARAH SHAFYRA RIZQIN' },
            { noAbsen: 31, nama: 'RAYNALDO RAHMAT SUHARYONO' },
            { noAbsen: 32, nama: 'RIZA FAHRUL IKHSAN' },
            { noAbsen: 33, nama: 'SANABILA ZAHRA' },
            { noAbsen: 34, nama: 'ZAHRA SHAFIYYAH PUTRI' },
            { noAbsen: 35, nama: 'ZAHROTUS SYIFA' },
            { noAbsen: 36, nama: 'ZALFA NABILA PUTRI' }
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






