const inputValue = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate"); // Ambil elemen tanggal
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function() {

    // Ambil nilai input
    const taskValue = inputTask.value;
    const dateValue = inputDate.value;

    // Validasi input
    if (inputTask.value === "" || inputDate.value === "") {
        alert("Tugas dan Tanggal tidak boleh kosong!");
        return;
    }

    // Elemen list baru untuk tugas
    const listBaru = document.createElement("li");

    // Kontainer untuk informasi tugas
    const infoTugas = document.createElement("div");
    infoTugas.style.flex = "1";
    infoTugas.innerHTML = `
        <strong class="nama-tugas">${taskValue}</strong> 
        <br>
        <small>${dateValue}</small> - <span class="status-teks">Progress</span>
    `;

    // Tombol "Selesai" (Fitur Ganti Status)
    const btnStatus = document.createElement("button");
    btnStatus.innerHTML = "Selesai";
    btnStatus.className = "status-btn";
    btnStatus.onclick = function() {
        const status = infoTugas.querySelector(".status-teks");
        const teks = infoTugas.querySelector(".nama-tugas");

        // Logika saklar untuk mengubah status tugas
        if (status.innerHTML === "Progress") {
            status.innerHTML = "Done";
            teks.style.textDecoration = "line-through"; // Coret tulisannya
            btnStatus.innerHTML = "Batal";             // Ganti tulisan tombol
        } else {
            status.innerHTML = "Progress";
            teks.style.textDecoration = "none";         // Hapus coretan
            btnStatus.innerHTML = "Selesai";
        }
    };

    // Tombol Edit (Fitur Ubah Data)
    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.className = "edit-btn";
    btnEdit.onclick = function() {
        const teksLama = infoTugas.querySelector(".nama-tugas").innerHTML;

        // kotak input untuk mengubah nama tugas
        const teksBaru = prompt("Ubah tugas kamu:", teksLama);
        
        // Logika untuk memperbarui nama tugas jika pengguna memasukkan teks baru
        if (teksBaru) {
            infoTugas.querySelector(".nama-tugas").innerHTML = teksBaru;
        }
    };

});