const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){
    if(inputValue.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    const listBaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    listBaru.appendChild(span);
    daftarTugas.appendChild(listBaru);
    inputValue = "";
    inputValue.focus();

    const btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    listBaru.appendChild(btnHapus);
});