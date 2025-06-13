// Data contoh
const samplePosts = [
    {
        id: 1,
        title: "10 Teknologi Revolusioner 2024",
        category: "Teknologi",
        excerpt: "Teknologi baru yang akan mengubah dunia...",
        date: "15 Juni 2024",
        image: "images/tech.jpg"
    },
    {
        id: 2,
        title: "Resep Makanan Nusantara",
        category: "Kuliner",
        excerpt: "Kumpulan resep makanan tradisional...",
        date: "12 Juni 2024",
        image: "images/food.jpg"
    }
];

const sampleCategories = [
    { name: "Teknologi", count: 12 },
    { name: "Kuliner", count: 8 },
    { name: "Kesehatan", count: 5 }
];

// Load posts
function loadPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    
    samplePosts.forEach(post => {
        const postHTML = `
            <div class="post-card">
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="post-content">
                    <span class="post-category">${post.category}</span>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-meta">
                        <span><i class="far fa-calendar"></i> ${post.date}</span>
                    </div>
                </div>
            </div>
        `;
        postsContainer.innerHTML += postHTML;
    });
}

// Load categories
function loadCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    
    sampleCategories.forEach(category => {
        const categoryHTML = `
            <li class="category-item">
                <a href="#">${category.name} <span class="category-count">${category.count}</span></a>
            </li>
        `;
        categoryList.innerHTML += categoryHTML;
    });
}

// Event listener untuk tombol login
document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = "admin.html";
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
    loadCategories();
});
