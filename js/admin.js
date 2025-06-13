// Data contoh untuk admin
const adminPosts = [
    {
        id: 1,
        title: "10 Teknologi Revolusioner 2024",
        category: "Teknologi",
        date: "15 Juni 2024",
        status: "published"
    },
    {
        id: 2,
        title: "Resep Makanan Nusantara",
        category: "Kuliner",
        date: "12 Juni 2024",
        status: "draft"
    }
];

// Load data dashboard
function loadDashboard() {
    document.getElementById('postCount').textContent = adminPosts.length;
}

// Load tabel posts
function loadPostsTable() {
    const tableBody = document.querySelector('#postsTable tbody');
    tableBody.innerHTML = '';
    
    adminPosts.forEach(post => {
        const row = `
            <tr>
                <td>${post.title}</td>
                <td>${post.category}</td>
                <td>${post.date}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${post.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-btn" data-id="${post.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Navigasi admin
document.querySelectorAll('.admin-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Sembunyikan semua section
        document.querySelectorAll('.admin-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Tampilkan section yang dipilih
        const targetSection = document.getElementById(this.dataset.section);
        targetSection.classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.admin-nav-link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    loadDashboard();
    loadPostsTable();
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', function() {
        window.location.href = "index.html";
    });
    
    // Add post button
    document.getElementById('addPostBtn').addEventListener('click', function() {
        alert('Fitur tambah artikel akan diimplementasikan!');
    });
});
