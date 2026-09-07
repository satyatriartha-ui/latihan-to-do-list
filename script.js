const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Fungsi menampilkan tugas
function displayTasks() {

    // Jika belum ada tugas
    if (taskList.children.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.classList.add("empty");
        emptyMessage.textContent = "Belum ada tugas.";
        taskList.appendChild(emptyMessage);
    }
}

// Fungsi menambahkan tugas
function addTask() {

    const taskText = taskInput.value.trim();

    // Tidak boleh kosong
    if (taskText === "") {
        alert("Silakan masukkan tugas terlebih dahulu!");
        return;
    }

    // Hapus tulisan "Belum ada tugas"
    const emptyMessage = document.querySelector(".empty");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    // Membuat elemen tugas
    const task = document.createElement("li");
    task.classList.add("task");

    // Teks tugas
    const text = document.createElement("span");
    text.classList.add("task-text");
    text.textContent = taskText;

    // Container tombol
    const buttons = document.createElement("div");
    buttons.classList.add("task-buttons");

    // Tombol selesai
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.textContent = "✓";

    // Tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "🗑️";

    // menandai tugas selesai
    completeButton.addEventListener("click", function () {
        task.classList.toggle("completed");
    });

    // Fungsi menghapus tugas
    deleteButton.addEventListener("click", function () {
        task.remove();
        displayTasks();
    });

    // Masukkan tombol ke container
    buttons.appendChild(completeButton);
    buttons.appendChild(deleteButton);

    // Masukkan teks dan tombol ke tugas
    task.appendChild(text);
    task.appendChild(buttons);

    // Masukkan tugas ke daftar
    taskList.appendChild(task);

    // Kosongkan inputgit init
    taskInput.value = "";

    // Fokus kembali ke input
    taskInput.focus();
}

// Tombol tambah
addButton.addEventListener("click", addTask);

// Bisa menambahkan tugas dengan tombol Enter
taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});         