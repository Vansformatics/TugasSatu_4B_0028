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

    listBaru.appendChild(span);
    daftarTugas.appendChild(listBaru);
    inputValue.value = "";
    inputDate.value = ""; // Reset nilai tanggal
    inputValue.focus();

    const btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    listBaru.appendChild(btnHapus);
});