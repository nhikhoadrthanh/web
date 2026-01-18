document.addEventListener('DOMContentLoaded', () => {
    console.log('DrThanh Website Loaded');

    // CONFIGURATION
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpS2M9igvBhg26zZVevxmEcf4WfbIDz-SUFBTOAyI-nfHM8_SLlCL_Xcwsypns-ZTB1A/exec';

    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ==========================================
    // FORM HANDLERS (Google Sheet Integration)
    // ==========================================
    const handleFormSubmit = async (event, formType) => {
        event.preventDefault();
        const form = event.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;

        submitBtn.innerText = 'Đang gửi...';
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.formType = formType;

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            alert('Thành công! Thông tin đã được gửi. DrThanh sẽ liên hệ sớm.');
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Lỗi gửi đi. Vui lòng liên hệ Hotline/Zalo.');
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    };

    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) bookingForm.addEventListener('submit', (e) => handleFormSubmit(e, 'booking'));

    const homeLeadForm = document.getElementById('home-lead-form');
    if (homeLeadForm) homeLeadForm.addEventListener('submit', (e) => handleFormSubmit(e, 'lead'));

    document.querySelectorAll('.lead-form-resource').forEach(form => {
        form.addEventListener('submit', (e) => handleFormSubmit(e, 'lead'));
    });

    // ==========================================
    // ADMIN LOGIC & BLOG ENGINE
    // ==========================================

    // 1. Check Login Status
    const checkAdmin = () => {
        return localStorage.getItem('isAdmin') === 'true';
    };

    // 2. Login Function
    window.handleAdminLogin = (e) => {
        e.preventDefault();
        const u = document.getElementById('username').value;
        const p = document.getElementById('password').value;

        if (u === 'Admin' && p === 'Admin321') {
            localStorage.setItem('isAdmin', 'true');
            alert('Đăng nhập thành công!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Sai tài khoản hoặc mật khẩu!');
        }
    };

    // 3. Logout Function
    window.handleLogout = () => {
        localStorage.removeItem('isAdmin');
        window.location.href = 'index.html';
    };

    // 4. Create Post Function (Dashboard)
    window.handleCreatePost = (e) => {
        e.preventDefault();
        const title = document.getElementById('post-title').value;
        const img = document.getElementById('post-img').value || 'https://via.placeholder.com/600';
        const desc = document.getElementById('post-desc').value;
        const category = document.getElementById('post-category').value;

        const newPost = {
            id: Date.now(), // Unique ID based on time
            title: title,
            image: img,
            desc: desc,
            category: category,
            date: new Date().toLocaleDateString('vi-VN')
        };

        // Save to LocalStorage
        let posts = JSON.parse(localStorage.getItem('posts') || '[]');
        posts.unshift(newPost); // Add to top
        localStorage.setItem('posts', JSON.stringify(posts));

        alert('Đăng bài thành công!');
        window.location.href = 'blog.html';
    };

    // 5. Render Blog (Blog Page)
    const blogContainer = document.getElementById('blog-grid');
    if (blogContainer && typeof BLOG_DATA !== 'undefined') {
        // Merge Local Storage posts with Static Data
        let localPosts = JSON.parse(localStorage.getItem('posts') || '[]');
        const allPosts = [...localPosts, ...BLOG_DATA];

        blogContainer.innerHTML = ''; // Clear existing

        allPosts.forEach(post => {
            const card = document.createElement('a');
            card.href = 'blog-detail.html'; // Dynamic ID link not implemented in static, just linking to template
            card.className = 'article-card card-hover';
            card.innerHTML = `
                <div class="article-img" style="background-image: url('${post.image}'); background-size: cover; background-position: center; color: transparent;">Img</div>
                <div class="article-content">
                    <div class="article-meta">
                        <span style="color: var(--primary-color); font-weight: bold;">${post.category}</span> • ${post.date}
                    </div>
                    <h3>${post.title}</h3>
                    <p style="font-size: 0.9rem; color: #555;">${post.desc}</p>
                </div>
            `;
            blogContainer.appendChild(card);
        });

        // Populate "Recent Posts" for Sidebar/Footer if needed
    }

    // Check Dashboard Access
    if (window.location.pathname.includes('dashboard.html')) {
        if (!checkAdmin()) {
            alert('Vui lòng đăng nhập!');
            window.location.href = 'admin.html';
        }
    }
});
