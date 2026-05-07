const inputValue = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate"); // Ambil elemen tanggal
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function() {
    // Ambil nilai input
    const taskValue = inputTask.value;
    const dateValue = inputDate.value;
    if (inputTask.value === "" || inputDate.value === "") {
        alert("Tugas dan Tanggal tidak boleh kosong!");
        return;
    }

    const listBaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    listBaru.appendChild(span);
    daftarTugas.appendChild(listBaru);
    inputValue.value = "";
    inputDate.value = ""; // Reset nilai tanggal
    inputValue.focus();

    const btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    listBaru.appendChild(btnHapus);
});