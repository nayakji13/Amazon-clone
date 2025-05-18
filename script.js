document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
    
    // Product Data with direct image URLs
    const products = [
        {
            id: 1,
            title: 'Apple iPhone 14 Pro (128 GB) - Space Black',
            price: '₹1,29,900',
            rating: 4.5,
            image: 'https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UF1000,1000_QL80_.jpg',
            link: 'https://www.amazon.in/Apple-iPhone-14-Pro-128/dp/B0BDK62PDX/'
        },
        {
            id: 2,
            title: 'Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)',
            price: '₹1,24,999',
            rating: 4.6,
            image: 'https://m.media-amazon.com/images/I/71PvHfU+pwL._AC_UF1000,1000_QL80_.jpg',
            link: 'https://www.amazon.in/Samsung-Galaxy-Ultra-Green-Storage/dp/B0BTYWFX4D/'
        },
        {
            id: 3,
            title: 'OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage)',
            price: '₹61,999',
            rating: 4.4,
            image: 'https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UF1000,1000_QL80_.jpg',
            link: 'https://www.amazon.in/OnePlus-Titan-Black-256GB-Storage/dp/B0BQJ6X1V4/'
        },
        {
            id: 5,
            title: 'Apple MacBook Air (M2, 8GB RAM, 256GB SSD) - Space Grey',
            price: '₹1,04,900',
            rating: 4.7,
            image: 'data:image/jpeg;base64,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',
            link: 'https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B0B3C5T6Q9/'
        },
    ];
    
    // Render Products
    const productContainer = document.querySelector('.product-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <a href="${product.link}" target="_blank">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">${product.price}</div>
                    <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                    <button class="buy-btn">Add to Cart</button>
                </div>
            </a>
        `;
        productContainer.appendChild(productCard);
    });
    
    // Add to Cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-btn')) {
            e.preventDefault();
            alert('Product added to cart! (This is a demo. On real Amazon, it would add to cart.)');
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.open(`https://www.amazon.in/s?k=${encodeURIComponent(query)}`, '_blank');
        }
    }
    
    searchIcon.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Navigation links
    const navSignin = document.querySelector('.nav-signin');
    const navCart = document.querySelector('.nav-cart');
    const navReturn = document.querySelector('.nav-return');
    
    navSignin.addEventListener('click', () => {
        window.open('https://www.amazon.in/ap/signin', '_blank');
    });
    
    navCart.addEventListener('click', () => {
        window.open('https://www.amazon.in/gp/cart/view.html', '_blank');
    });
    
    navReturn.addEventListener('click', () => {
        window.open('https://www.amazon.in/gp/css/order-history', '_blank');
    });
    
    // Panel links
    const panelAll = document.querySelector('.panel-all');
    const panelDeals = document.querySelector('.panel-deals');
    
    panelAll.addEventListener('click', () => {
        window.open('https://www.amazon.in/gp/browse.html?node=976419031&ref_=nav_em__all_categories_0_1_1_2', '_blank');
    });
    
    panelDeals.addEventListener('click', () => {
        window.open('https://www.amazon.in/deals?ref_=nav_cs_gb', '_blank');
    });
    
    // Footer back to top
    const footPanel1 = document.querySelector('.foot-panel1');
    footPanel1.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});