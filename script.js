/* ==========================================
   AURA CONTEMPORARY FASHION - VANILLA JS
   Complete State Management, DOM Manipulation & UI Interactions
   ========================================== */

// 1. PRODUCT CATALOG DATA
const PRODUCTS = [
  // --- WOMEN CLOTHING ---
  {
    id: 'w-c-1',
    name: 'Atelier Italian Wool Trench Coat',
    category: 'women',
    type: 'clothing',
    price: 480,
    origPrice: 560,
    rating: 4.9,
    reviewsCount: 128,
    isBestseller: true,
    isNew: false,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    colors: ['#27272a', '#d4b996', '#52525b'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Crafted in Biella, Italy from 100% virgin wool. Features storm flaps, horn buttons, and a removable self-tie belt for timeless architectural outerwear.',
    details: ['100% Italian Virgin Wool', 'Satin Bemberg Lining', 'Dry Clean Only', 'Made in Italy']
  },
  {
    id: 'w-c-2',
    name: 'Mulberry Silk Wrap Evening Dress',
    category: 'women',
    type: 'clothing',
    price: 320,
    origPrice: null,
    rating: 4.8,
    reviewsCount: 84,
    isBestseller: false,
    isNew: true,
    isEco: false,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop',
    colors: ['#09090b', '#7c2d12', '#1e3a8a'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Liquid Mulberry silk satin wrap dress with subtle puff shoulders and a fluid flared skirt. Drapes effortlessly for formal galas or summer soirees.',
    details: ['100% 22 Momme Mulberry Silk', 'French Seam Construction', 'Delicate Hand Wash']
  },
  {
    id: 'w-c-3',
    name: 'Oversized Cashmere Crewneck Sweater',
    category: 'women',
    type: 'clothing',
    price: 260,
    origPrice: 310,
    rating: 4.9,
    reviewsCount: 210,
    isBestseller: true,
    isNew: false,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    colors: ['#e4e4e7', '#a1a1aa', '#9a7b38'],
    sizes: ['S', 'M', 'L'],
    description: 'Knitted from grade-A Mongolian cashmere yarns. Unmatched softness with drop shoulders and ribbed trims.',
    details: ['100% Mongolian Cashmere', '7-Gauge Knit', 'Hand Wash Cold']
  },
  {
    id: 'w-c-4',
    name: 'High-Waisted Tailored Linen Trousers',
    category: 'women',
    type: 'clothing',
    price: 190,
    origPrice: null,
    rating: 4.7,
    reviewsCount: 56,
    isBestseller: false,
    isNew: true,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop',
    colors: ['#f4f4f5', '#27272a', '#ca8a04'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Relaxed wide-leg trousers cut from airy European flax linen. Pleated front waistband with hidden side pockets.',
    details: ['100% European Flax Linen', 'Corozo Nut Buttons', 'Machine Wash Gentle']
  },

  // --- WOMEN ACCESSORIES ---
  {
    id: 'w-a-1',
    name: 'Florence Grain Leather Carryall Tote',
    category: 'women',
    type: 'accessories',
    price: 390,
    origPrice: 450,
    rating: 4.9,
    reviewsCount: 95,
    isBestseller: true,
    isNew: false,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
    colors: ['#78350f', '#18181b', '#d4d4d8'],
    sizes: ['One Size'],
    description: 'Handcrafted in Florence from full-grain vegetable-tanned leather. Includes a removable zip pouch and magnetic closure.',
    details: ['Italian Calfskin Leather', 'Suede Interior Lining', 'Fits 15" Laptop']
  },
  {
    id: 'w-a-2',
    name: '18k Gold-Plated Sculptural Necklace',
    category: 'women',
    type: 'accessories',
    price: 145,
    origPrice: null,
    rating: 4.8,
    reviewsCount: 42,
    isBestseller: false,
    isNew: true,
    isEco: false,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1611591475179-62cd347e09e3?q=80&w=800&auto=format&fit=crop',
    colors: ['#eab308'],
    sizes: ['One Size'],
    description: 'Cast from recycled brass plated in 18-karat gold. Organic molten link design with toggle clasp.',
    details: ['18k Gold Vermeil', 'Recycled Brass Core', 'Hypoallergenic']
  },

  // --- MEN CLOTHING ---
  {
    id: 'm-c-1',
    name: 'Architectural Italian Wool Blazer',
    category: 'men',
    type: 'clothing',
    price: 520,
    origPrice: 600,
    rating: 4.9,
    reviewsCount: 164,
    isBestseller: true,
    isNew: false,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    colors: ['#18181b', '#1e293b', '#475569'],
    sizes: ['38R', '40R', '42R', '44R'],
    description: 'Half-canvas tailoring crafted from Super 130s Italian wool. Structured shoulders, notched lapel, and mother-of-pearl buttons.',
    details: ['Super 130s Italian Wool', 'Cupro Lining', 'Made in Naples']
  },
  {
    id: 'm-c-2',
    name: 'Japanese Selvedge Denim Jacket',
    category: 'men',
    type: 'clothing',
    price: 240,
    origPrice: null,
    rating: 4.8,
    reviewsCount: 91,
    isBestseller: false,
    isNew: true,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=800&auto=format&fit=crop',
    colors: ['#1e3a8a', '#18181b'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '14oz raw selvedge denim woven on shuttle looms in Okayama, Japan. Custom brass shank buttons and contrast orange stitching.',
    details: ['100% Okayama Cotton', '14oz Raw Denim', 'Unwashed Finish']
  },
  {
    id: 'm-c-3',
    name: 'Organic Oxford Cotton Button-Down',
    category: 'men',
    type: 'clothing',
    price: 140,
    origPrice: 165,
    rating: 4.7,
    reviewsCount: 110,
    isBestseller: true,
    isNew: false,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    colors: ['#ffffff', '#93c5fd', '#fca5a5'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Heavyweight organic cotton oxford shirt with roll collar, box pleat, and genuine mother-of-pearl buttons.',
    details: ['100% GOTS Organic Cotton', 'Pre-shrunk Fabric', 'Machine Wash Warm']
  },

  // --- MEN ACCESSORIES ---
  {
    id: 'm-a-1',
    name: 'Minimalist Automatic Leather Watch',
    category: 'men',
    type: 'accessories',
    price: 350,
    origPrice: null,
    rating: 4.9,
    reviewsCount: 78,
    isBestseller: true,
    isNew: false,
    isEco: false,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop',
    colors: ['#18181b', '#78350f'],
    sizes: ['One Size'],
    description: '38mm brushed stainless steel case housing a Swiss automatic movement with 42-hour power reserve and sapphire crystal glass.',
    details: ['Swiss Movement', 'Sapphire Crystal', '50m Water Resistance']
  },
  {
    id: 'm-a-2',
    name: 'Full-Grain Leather Weekender Bag',
    category: 'men',
    type: 'accessories',
    price: 450,
    origPrice: 520,
    rating: 4.9,
    reviewsCount: 54,
    isBestseller: false,
    isNew: true,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop',
    colors: ['#451a03', '#18181b'],
    sizes: ['One Size'],
    description: 'Spacious 45L duffel bag in Tuscan full-grain leather with dedicated shoe compartment and brass hardware.',
    details: ['Tuscan Full-Grain Leather', 'Solid Brass Hardware', 'TSA Approved Size']
  },

  // --- KIDS CLOTHING ---
  {
    id: 'k-c-1',
    name: 'Kids Organic Cotton Fleece Hoodie',
    category: 'kids',
    type: 'clothing',
    price: 65,
    origPrice: null,
    rating: 4.8,
    reviewsCount: 67,
    isBestseller: true,
    isNew: false,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop',
    colors: ['#fed7aa', '#bae6fd', '#e9d5ff'],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    description: 'Ultra-soft brushed fleece pullover made from 100% organic cotton. Gentle on sensitive skin with tagless neckline.',
    details: ['100% GOTS Organic Cotton', 'Hypoallergenic Dyes', 'Machine Washable']
  },
  {
    id: 'k-c-2',
    name: 'Junior Selvedge Denim Jacket',
    category: 'kids',
    type: 'clothing',
    price: 85,
    origPrice: 95,
    rating: 4.9,
    reviewsCount: 38,
    isBestseller: false,
    isNew: true,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop',
    colors: ['#1d4ed8'],
    sizes: ['6Y', '8Y', '10Y', '12Y'],
    description: 'Miniature version of our classic denim jacket. Softened for immediate comfort and all-day outdoor adventures.',
    details: ['Softened Stretch Denim', 'Adjustable Waist Tabs', 'Machine Wash']
  },

  // --- KIDS ACCESSORIES ---
  {
    id: 'k-a-1',
    name: 'Kids Eco Canvas School Backpack',
    category: 'kids',
    type: 'accessories',
    price: 55,
    origPrice: null,
    rating: 4.8,
    reviewsCount: 49,
    isBestseller: true,
    isNew: false,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    colors: ['#0284c7', '#ea580c', '#16a34a'],
    sizes: ['One Size'],
    description: 'Water-resistant recycled polyester canvas backpack with reflective safety patches and padded shoulder straps.',
    details: ['Recycled Ocean Plastic Canvas', 'Reflective Details', 'Dual Water Bottle Pockets']
  },
  {
    id: 'k-a-2',
    name: 'Embroidered Organic Cotton Cap',
    category: 'kids',
    type: 'accessories',
    price: 32,
    origPrice: null,
    rating: 4.7,
    reviewsCount: 31,
    isBestseller: false,
    isNew: true,
    isEco: true,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
    colors: ['#fef08a', '#bbf7d0', '#fbcfe8'],
    sizes: ['One Size'],
    description: 'Adjustable baseball cap with sun protection visor and signature AURA emblem embroidery.',
    details: ['100% Organic Cotton Canvas', 'Brass Buckle Strap', 'UPF 50+ Sun Protection']
  }
];

// 2. REVIEWS INITIAL DATA
const REVIEWS = [
  {
    id: 1,
    name: 'Elena Rostova',
    rating: 5,
    title: 'Impeccable Wool Trench Coat',
    comment: 'The quality of the Atelier Trench Coat rivals heritage luxury houses charging 4x the price. The wool is heavy yet fluid, and the tailoring fits like a glove!',
    date: '2 days ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Marcus Vance',
    rating: 5,
    title: 'Okayama Denim at its Finest',
    comment: 'As a denim enthusiast, the 14oz raw selvedge jacket is stunning. Rigid at first, but molding perfectly after two weeks of daily wear.',
    date: '1 week ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sophia Chen',
    rating: 5,
    title: 'Cashmere perfection & eco-packaging',
    comment: 'Softest sweater I own! Arrived in 100% biodegradable zero-plastic packaging. AURA has earned a customer for life.',
    date: '2 weeks ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop'
  }
];

// 3. APPLICATION STATE
let state = {
  cart: JSON.parse(localStorage.getItem('aura_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('aura_wishlist')) || [],
  activeFilter: 'all',
  activeSort: 'featured',
  activeGenderCat: 'women',
  appliedPromo: null,
  currentHeroSlide: 0
};

// 4. INITIALIZATION ON DOM LOADED
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initCategoryTabs();
  renderProducts();
  renderReviews();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  setupScrollAnimations();
});

// 5. HERO SLIDER FUNCTIONALITY
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  if (!slides.length) return;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    state.currentHeroSlide = index;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(state.currentHeroSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(state.currentHeroSlide + 1));

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index, 10);
      showSlide(idx);
    });
  });

  // Autoplay slider every 6 seconds
  setInterval(() => {
    showSlide(state.currentHeroSlide + 1);
  }, 6000);
}

// 6. CATEGORY DEPARTMENT TABS (Women, Men, Kids)
function initCategoryTabs() {
  const tabBtns = document.querySelectorAll('#category-gender-tabs .cat-tab-btn');
  const contents = document.querySelectorAll('.gender-category-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const gender = btn.dataset.gender;

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      contents.forEach(c => c.classList.remove('active'));
      const activeContent = document.getElementById(`cat-content-${gender}`);
      if (activeContent) activeContent.classList.add('active');

      state.activeGenderCat = gender;
    });
  });
}

// Global Filter shortcut from Category cards & Footer links
window.filterCategory = function(gender, type) {
  // Update section tab if visible
  const genderBtn = document.querySelector(`#category-gender-tabs .cat-tab-btn[data-gender="${gender}"]`);
  if (genderBtn) genderBtn.click();

  // Scroll to products
  const productsSection = document.getElementById('products');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Filter items
  if (type === 'all') {
    setFilter(gender);
  } else if (type === 'clothing' || type === 'accessories') {
    setFilter(type);
  }
};

function setFilter(filterName) {
  state.activeFilter = filterName;

  // Update pills UI
  const pills = document.querySelectorAll('#product-filter-pills .pill-btn');
  pills.forEach(p => {
    if (p.dataset.filter === filterName) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  renderProducts();
}

// 7. PRODUCT RENDERING & FILTERING
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  // 1. Filter products
  let filtered = PRODUCTS.filter(p => {
    if (state.activeFilter === 'all') return true;
    if (state.activeFilter === 'bestseller') return p.isBestseller;
    if (state.activeFilter === 'women') return p.category === 'women';
    if (state.activeFilter === 'men') return p.category === 'men';
    if (state.activeFilter === 'kids') return p.category === 'kids';
    if (state.activeFilter === 'clothing') return p.type === 'clothing';
    if (state.activeFilter === 'accessories') return p.type === 'accessories';
    return true;
  });

  // 2. Sort products
  if (state.activeSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.activeSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.activeSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0;">
        <p style="font-size: 1.2rem; color: var(--color-text-muted);">No products found matching the selected filter.</p>
        <button class="btn-outline" style="margin-top: 16px;" onclick="setFilter('all')">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    const stars = '★'.repeat(Math.floor(product.rating));

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-media">
          <div class="badge-stack">
            ${product.origPrice ? `<span class="product-badge sale">-$${product.origPrice - product.price}</span>` : ''}
            ${product.isBestseller ? `<span class="product-badge bestseller">Best Seller</span>` : ''}
            ${product.isEco ? `<span class="product-badge eco">Eco Cotton</span>` : ''}
          </div>

          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  aria-label="Save to wishlist">
            <svg class="icon" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <img src="${product.image}" alt="${product.name}" class="product-img-main" loading="lazy" />
          <img src="${product.hoverImage}" alt="${product.name} hover preview" class="product-img-hover" loading="lazy" />

          <div class="card-quick-actions">
            <button class="quick-btn" onclick="openQuickView('${product.id}')">Quick View</button>
            <button class="quick-btn" onclick="quickAddToCart('${product.id}')">+ Add</button>
          </div>
        </div>

        <div class="product-details">
          <span class="product-category">${product.category} • ${product.type}</span>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-rating">
            <span>${stars}</span>
            <span>(${product.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <span class="current-price">$${product.price}.00</span>
            ${product.origPrice ? `<span class="original-price">$${product.origPrice}.00</span>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 8. CART & WISHLIST STATE MANAGERS
window.quickAddToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const size = product.sizes[0] || 'M';
  const color = product.colors[0] || '#18181b';

  addToCart(product.id, size, color, 1);
};

window.addToCart = function(productId, size, color, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item =>
    item.id === productId && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to Shopping Bag`, '🛍️');
  openDrawer('cart');
};

function saveCart() {
  localStorage.setItem('aura_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const cartBadge = document.getElementById('cart-badge');
  const cartSummary = document.getElementById('cart-count-summary');
  const cartContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const discountEl = document.getElementById('cart-discount');
  const discountLine = document.getElementById('discount-line');
  const shippingProgressFill = document.getElementById('shipping-progress-fill');
  const shippingMsg = document.getElementById('shipping-msg');

  const totalItemCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  if (cartBadge) cartBadge.textContent = totalItemCount;
  if (cartSummary) cartSummary.textContent = `(${totalItemCount} ${totalItemCount === 1 ? 'item' : 'items'})`;

  // Calculate Subtotal
  const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  let discount = 0;

  if (state.appliedPromo) {
    discount = subtotal * state.appliedPromo.discount;
    if (discountLine) discountLine.style.display = 'flex';
    if (discountEl) discountEl.textContent = `-$${discount.toFixed(2)}`;
  } else {
    if (discountLine) discountLine.style.display = 'none';
  }

  const grandTotal = subtotal - discount;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;

  // Free shipping tracker ($150 threshold)
  const freeShippingThreshold = 150;
  if (subtotal >= freeShippingThreshold) {
    if (shippingProgressFill) shippingProgressFill.style.width = '100%';
    if (shippingMsg) shippingMsg.textContent = '🎉 You unlocked FREE Express Shipping!';
  } else {
    const remaining = freeShippingThreshold - subtotal;
    const percent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
    if (shippingProgressFill) shippingProgressFill.style.width = `${percent}%`;
    if (shippingMsg) shippingMsg.textContent = `Add $${remaining.toFixed(2)} more for FREE Express Delivery!`;
  }

  // Render items
  if (!cartContainer) return;

  if (state.cart.length === 0) {
    cartContainer.innerHTML = `
      <div style="text-align: center; padding: 60px 0;">
        <svg style="width: 48px; height: 48px; color: var(--color-text-light); margin-bottom: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
        </svg>
        <p style="font-size: 1.1rem; font-weight: 600;">Your Shopping Bag is empty</p>
        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 4px;">Explore our luxury collections to add items.</p>
      </div>
    `;
    return;
  }

  cartContainer.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-variant">Size: ${item.size}</span>
        <span class="cart-item-price">$${item.price}.00</span>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${index}, -1)">&minus;</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQty(${index}, 1)">&plus;</button>
          </div>
          <button class="remove-item-btn" onclick="removeCartItem(${index})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

window.updateCartQty = function(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
};

window.removeCartItem = function(index) {
  if (state.cart[index]) {
    state.cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast('Item removed from Shopping Bag', '🗑️');
  }
};

// WISHLIST FUNCTIONALITY
window.toggleWishlist = function(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast('Removed from Saved Favorites', '🤍');
  } else {
    state.wishlist.push(productId);
    showToast('Saved to Favorites', '❤️');
  }
  localStorage.setItem('aura_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProducts(); // Update heart icons in grid
};

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-badge');
  const summary = document.getElementById('wishlist-count-summary');
  const container = document.getElementById('wishlist-items-container');

  if (badge) badge.textContent = state.wishlist.length;
  if (summary) summary.textContent = `(${state.wishlist.length} ${state.wishlist.length === 1 ? 'item' : 'items'})`;

  if (!container) return;

  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 0;">
        <p style="font-size: 1.05rem; font-weight: 600;">No saved items yet</p>
        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 4px;">Click the heart icon on any product to save it here.</p>
      </div>
    `;
    return;
  }

  const wishlistProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));

  container.innerHTML = wishlistProducts.map(product => `
    <div class="cart-item">
      <img src="${product.image}" alt="${product.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h4 class="cart-item-title">${product.name}</h4>
        <span class="cart-item-price">$${product.price}.00</span>
        <div class="cart-item-controls" style="margin-top: 12px;">
          <button class="btn-primary" style="padding: 6px 12px; font-size: 0.75rem;" onclick="quickAddToCart('${product.id}')">+ Move to Bag</button>
          <button class="remove-item-btn" onclick="toggleWishlist('${product.id}')">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

// 9. QUICK VIEW MODAL
window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalContent = document.getElementById('quick-view-content');
  if (!modalContent) return;

  modalContent.innerHTML = `
    <div class="qv-media">
      <img src="${product.image}" alt="${product.name}" class="qv-main-img" id="qv-img" />
    </div>

    <div class="qv-details">
      <span class="product-category">${product.category} • ${product.type}</span>
      <h2 class="qv-title">${product.name}</h2>
      <div class="product-rating" style="margin-bottom: 12px;">
        <span>${'★'.repeat(Math.floor(product.rating))}</span>
        <span>(${product.reviewsCount} verified reviews)</span>
      </div>
      <div class="qv-price">$${product.price}.00</div>
      <p class="qv-description">${product.description}</p>

      <div style="margin-bottom: 20px;">
        <span class="selector-label">Select Size</span>
        <div class="size-selector" id="qv-size-selector">
          ${product.sizes.map((size, idx) => `
            <div class="size-opt ${idx === 0 ? 'active' : ''}" data-size="${size}">${size}</div>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 16px; margin-top: auto;">
        <button class="btn-primary btn-block" id="qv-add-btn">Add to Shopping Bag</button>
      </div>
    </div>
  `;

  // Attach interactive size selection
  const sizeOptions = modalContent.querySelectorAll('.size-opt');
  let selectedSize = product.sizes[0] || 'M';

  sizeOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      sizeOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedSize = opt.dataset.size;
    });
  });

  document.getElementById('qv-add-btn').addEventListener('click', () => {
    addToCart(product.id, selectedSize, product.colors[0] || '#18181b', 1);
    closeModal('quick-view');
  });

  openModal('quick-view');
};

// 10. REVIEWS & CUSTOMER RATING RENDERING
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  grid.innerHTML = REVIEWS.map(rev => `
    <article class="review-card">
      <div class="review-stars">${'★'.repeat(rev.rating)}</div>
      <h4 class="review-title">"${rev.title}"</h4>
      <p class="review-body">${rev.comment}</p>
      <div class="reviewer-profile">
        <img src="${rev.avatar}" alt="${rev.name}" class="reviewer-avatar" />
        <div class="reviewer-info">
          <h5>${rev.name}</h5>
          <span class="verified-tag">✓ Verified Buyer • ${rev.date}</span>
        </div>
      </div>
    </article>
  `).join('');
}

// 11. QUICK SEARCH OVERLAY
window.quickSearch = function(tagQuery) {
  const input = document.getElementById('search-input');
  if (input) {
    input.value = tagQuery;
    triggerSearch(tagQuery);
  }
};

function triggerSearch(query) {
  const resultsContainer = document.getElementById('search-results-grid');
  if (!resultsContainer) return;

  if (!query || query.trim() === '') {
    resultsContainer.innerHTML = '';
    return;
  }

  const q = query.toLowerCase().trim();
  const matched = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.type.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );

  if (matched.length === 0) {
    resultsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 0;">
        <p style="color: var(--color-text-muted);">No products found matching "${query}".</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matched.map(p => `
    <div style="display: flex; gap: 12px; align-items: center; border: 1px solid var(--color-border); padding: 10px; border-radius: var(--radius-sm); cursor: pointer;" onclick="openQuickView('${p.id}'); closeOverlay('search-overlay');">
      <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 65px; object-fit: cover; border-radius: 4px;" />
      <div>
        <h5 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 2px;">${p.name}</h5>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-text-main);">$${p.price}.00</span>
      </div>
    </div>
  `).join('');
}

// 12. EVENT LISTENERS & MODALS SETUP
function setupEventListeners() {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mainNav = document.getElementById('main-nav');
  const mobileBackdrop = document.getElementById('mobile-backdrop');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.add('active');
      mobileBackdrop.classList.add('active');
    });
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMobileNav);
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileNav);
  }

  function closeMobileNav() {
    if (mainNav) mainNav.classList.remove('active');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
  }

  // Drawers (Cart & Wishlist)
  document.getElementById('cart-toggle-btn')?.addEventListener('click', () => openDrawer('cart'));
  document.getElementById('close-cart-btn')?.addEventListener('click', () => closeDrawer('cart'));
  document.getElementById('cart-overlay')?.addEventListener('click', () => closeDrawer('cart'));

  document.getElementById('wishlist-toggle-btn')?.addEventListener('click', () => openDrawer('wishlist'));
  document.getElementById('close-wishlist-btn')?.addEventListener('click', () => closeDrawer('wishlist'));
  document.getElementById('wishlist-overlay')?.addEventListener('click', () => closeDrawer('wishlist'));

  // Search Overlay
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput?.focus(), 200);
    });
  }

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => searchOverlay.classList.remove('active'));
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        triggerSearch('');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => triggerSearch(e.target.value));
  }

  // Quick View Modal Close
  document.getElementById('close-quick-view-btn')?.addEventListener('click', () => closeModal('quick-view'));
  document.getElementById('quick-view-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'quick-view-overlay') closeModal('quick-view');
  });

  // Filter Pills click
  const pills = document.querySelectorAll('#product-filter-pills .pill-btn');
  pills.forEach(p => {
    p.addEventListener('click', () => setFilter(p.dataset.filter));
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.activeSort = e.target.value;
      renderProducts();
    });
  }

  // Apply Promo Code
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const promoInput = document.getElementById('promo-input');
  const promoMsg = document.getElementById('promo-message');

  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'AURA15') {
        state.appliedPromo = { code: 'AURA15', discount: 0.15 };
        promoMsg.className = 'promo-message success';
        promoMsg.textContent = '✓ Promo code AURA15 applied (15% OFF)';
        updateCartUI();
        showToast('15% Discount Applied!', '🎉');
      } else {
        promoMsg.className = 'promo-message error';
        promoMsg.textContent = 'Invalid promo code. Try AURA15';
      }
    });
  }

  // Checkout Modal
  const checkoutBtn = document.getElementById('checkout-btn');
  const closeCheckoutBtn = document.getElementById('close-checkout-btn');
  const checkoutOverlay = document.getElementById('checkout-overlay');
  const checkoutForm = document.getElementById('checkout-form');
  const checkoutTotal = document.getElementById('checkout-final-total');

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your bag is empty!', '⚠️');
        return;
      }
      closeDrawer('cart');
      const totalText = document.getElementById('cart-total')?.textContent || '$0.00';
      if (checkoutTotal) checkoutTotal.textContent = totalText;
      openModal('checkout');
    });
  }

  if (closeCheckoutBtn) {
    closeCheckoutBtn.addEventListener('click', () => closeModal('checkout'));
  }

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('checkout');
      state.cart = [];
      state.appliedPromo = null;
      saveCart();
      updateCartUI();
      showToast('Order Placed Successfully! Thank you for choosing AURA.', '✨');
    });
  }

  // Write Review Modal
  const openReviewBtn = document.getElementById('open-write-review-btn');
  const closeReviewBtn = document.getElementById('close-review-btn');
  const reviewForm = document.getElementById('write-review-form');
  const starInputs = document.querySelectorAll('#star-rating-input .star-selectable');
  let selectedRating = 5;

  if (openReviewBtn) {
    openReviewBtn.addEventListener('click', () => openModal('review'));
  }
  if (closeReviewBtn) {
    closeReviewBtn.addEventListener('click', () => closeModal('review'));
  }

  starInputs.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.value, 10);
      starInputs.forEach(s => {
        if (parseInt(s.dataset.value, 10) <= selectedRating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('r-name').value;
      const title = document.getElementById('r-title').value;
      const comment = document.getElementById('r-comment').value;

      REVIEWS.unshift({
        id: Date.now(),
        name: name,
        rating: selectedRating,
        title: title,
        comment: comment,
        date: 'Just now',
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'
      });

      renderReviews();
      closeModal('review');
      reviewForm.reset();
      showToast('Thank you! Your review has been published.', '⭐');
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterForm.style.display = 'none';
      if (newsletterSuccess) newsletterSuccess.style.display = 'block';
      showToast('Welcome to the AURA Circle!', '🎁');
    });
  }
}

// 13. DRAWER & MODAL HELPERS
function openDrawer(type) {
  const drawer = document.getElementById(`${type}-drawer`);
  const overlay = document.getElementById(`${type}-overlay`);
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function closeDrawer(type) {
  const drawer = document.getElementById(`${type}-drawer`);
  const overlay = document.getElementById(`${type}-overlay`);
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

function openModal(type) {
  const overlay = document.getElementById(`${type}-overlay`);
  if (overlay) overlay.classList.add('active');
}

function closeModal(type) {
  const overlay = document.getElementById(`${type}-overlay`);
  if (overlay) overlay.classList.remove('active');
}

// 14. TOAST NOTIFICATION SYSTEM
function showToast(message, icon = '✨') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastIn 0.3s reverse ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 15. INTERSECTION OBSERVER SCROLL ANIMATIONS
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-title, .product-card, .category-card, .review-card, .pillar-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}
