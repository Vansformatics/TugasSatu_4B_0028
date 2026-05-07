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
        } 
    };

    const btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    listBaru.appendChild(btnHapus);
});