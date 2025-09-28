// Sample event data
const events = [
    {
        id: 1,
        title: "Avengers: Endgame",
        category: "movies",
        date: "2024-10-15",
        time: "19:30",
        venue: "PVR Cinemas",
        location: "Mumbai, Maharashtra",
        city: "mumbai",
        price: {
            regular: 300,
            premium: 500
        },
        description: "The epic conclusion to the Infinity Saga.",
        icon: "fas fa-film"
    },
    {
        id: 2,
        title: "AR Rahman Live Concert",
        category: "concerts",
        date: "2024-10-20",
        time: "20:00",
        venue: "NSCI Dome",
        location: "Mumbai, Maharashtra",
        city: "mumbai",
        price: {
            regular: 1500,
            premium: 3000
        },
        description: "An unforgettable musical journey with the maestro.",
        icon: "fas fa-music"
    },
    {
        id: 3,
        title: "Mumbai Indians vs Chennai Super Kings",
        category: "sports",
        date: "2024-10-25",
        time: "19:30",
        venue: "Wankhede Stadium",
        location: "Mumbai, Maharashtra",
        city: "mumbai",
        price: {
            regular: 800,
            premium: 2000
        },
        description: "The ultimate cricket showdown.",
        icon: "fas fa-baseball-ball"
    },
    {
        id: 4,
        title: "Hamilton - The Musical",
        category: "theater",
        date: "2024-10-30",
        time: "19:00",
        venue: "Jamshed Bhabha Theatre",
        location: "Mumbai, Maharashtra",
        city: "mumbai",
        price: {
            regular: 1200,
            premium: 2500
        },
        description: "The revolutionary musical about America's founding father.",
        icon: "fas fa-theater-masks"
    },
    {
        id: 5,
        title: "Kapil Sharma Live",
        category: "comedy",
        date: "2024-11-05",
        time: "20:30",
        venue: "Phoenix Marketcity",
        location: "Mumbai, Maharashtra",
        city: "mumbai",
        price: {
            regular: 800,
            premium: 1500
        },
        description: "An evening full of laughter and entertainment.",
        icon: "fas fa-laugh"
    },
    {
        id: 6,
        title: "Spider-Man: No Way Home",
        category: "movies",
        date: "2024-11-10",
        time: "18:00",
        venue: "INOX Megaplex",
        location: "Mumbai, Maharashtra",
        city: "mumbai",
        price: {
            regular: 350,
            premium: 600
        },
        description: "The multiverse collides in this epic adventure.",
        icon: "fas fa-film"
    },
    {
        id: 7,
        title: "Coldplay World Tour",
        category: "concerts",
        date: "2024-11-15",
        time: "19:00",
        venue: "DY Patil Stadium",
        location: "Mumbai, Maharashtra",
        city: "mumbai",
        price: {
            regular: 2500,
            premium: 5000
        },
        description: "Experience the magic of Coldplay live.",
        icon: "fas fa-music"
    },
    {
        id: 8,
        title: "Stand-up Comedy Night",
        category: "comedy",
        date: "2024-11-18",
        time: "21:00",
        venue: "The Comedy Store",
        location: "Mumbai, Maharashtra",
        city: "mumbai",
        price: {
            regular: 500,
            premium: 800
        },
        description: "A night of hilarious stand-up performances.",
        icon: "fas fa-laugh"
    },
    // Delhi Events
    {
        id: 9,
        title: "Iron Man 3",
        category: "movies",
        date: "2024-10-16",
        time: "20:00",
        venue: "PVR Select City Walk",
        location: "Delhi, NCR",
        city: "delhi",
        price: {
            regular: 400,
            premium: 700
        },
        description: "Tony Stark's greatest adventure yet.",
        icon: "fas fa-film"
    },
    {
        id: 10,
        title: "Ed Sheeran Concert",
        category: "concerts",
        date: "2024-10-22",
        time: "19:30",
        venue: "Jawaharlal Nehru Stadium",
        location: "Delhi, NCR",
        city: "delhi",
        price: {
            regular: 2000,
            premium: 4000
        },
        description: "An intimate evening with Ed Sheeran.",
        icon: "fas fa-music"
    },
    {
        id: 11,
        title: "Delhi Capitals vs Royal Challengers",
        category: "sports",
        date: "2024-10-28",
        time: "19:30",
        venue: "Feroz Shah Kotla",
        location: "Delhi, NCR",
        city: "delhi",
        price: {
            regular: 1000,
            premium: 2500
        },
        description: "High-octane cricket action.",
        icon: "fas fa-baseball-ball"
    },
    // Bangalore Events
    {
        id: 12,
        title: "Black Panther",
        category: "movies",
        date: "2024-10-18",
        time: "18:30",
        venue: "Cinepolis Forum Mall",
        location: "Bangalore, Karnataka",
        city: "bangalore",
        price: {
            regular: 350,
            premium: 600
        },
        description: "Wakanda forever!",
        icon: "fas fa-film"
    },
    {
        id: 13,
        title: "Imagine Dragons Concert",
        category: "concerts",
        date: "2024-10-24",
        time: "20:00",
        venue: "Kanteerava Indoor Stadium",
        location: "Bangalore, Karnataka",
        city: "bangalore",
        price: {
            regular: 1800,
            premium: 3500
        },
        description: "Thunder and lightning with Imagine Dragons.",
        icon: "fas fa-music"
    },
    {
        id: 14,
        title: "Royal Challengers vs Mumbai Indians",
        category: "sports",
        date: "2024-10-26",
        time: "19:30",
        venue: "M. Chinnaswamy Stadium",
        location: "Bangalore, Karnataka",
        city: "bangalore",
        price: {
            regular: 1200,
            premium: 3000
        },
        description: "The ultimate IPL clash.",
        icon: "fas fa-baseball-ball"
    }
];

// Global variables
let currentEvents = [...events];
let selectedEvent = null;
let favorites = JSON.parse(localStorage.getItem('eventFavorites') || '[]');
let isGridView = true;
let showingFavorites = false;
let currentSort = 'date';
let currentPriceFilter = 'all';
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
let selectedCity = localStorage.getItem('selectedCity') || 'All Cities';

// DOM elements
const eventsGrid = document.getElementById('eventsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const bookingModal = document.getElementById('bookingModal');
const successModal = document.getElementById('successModal');
const sortSelect = document.getElementById('sortSelect');
const priceFilter = document.getElementById('priceFilter');
const viewToggle = document.getElementById('viewToggle');
const favoritesToggle = document.getElementById('favoritesToggle');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateCityDisplay();
    updateLoginState();
    // Apply initial filters including city
    applyFiltersAndSort();
});

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterEvents(category);
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Modal close functionality
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === bookingModal) {
            closeModal();
        }
        if (e.target === successModal) {
            closeSuccessModal();
        }
    });

    // Advanced filter controls
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            applyFiltersAndSort();
        });
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', function() {
            currentPriceFilter = this.value;
            applyFiltersAndSort();
        });
    }

    if (viewToggle) {
        viewToggle.addEventListener('click', toggleView);
    }

    if (favoritesToggle) {
        favoritesToggle.addEventListener('click', toggleFavorites);
    }
}

// Render events to the grid
function renderEvents(eventsToRender) {
    eventsGrid.innerHTML = '';
    
    if (eventsToRender.length === 0) {
        eventsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666;">No events found</h3>
                <p style="color: #999;">Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    eventsToRender.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

// Create individual event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.setAttribute('data-category', event.category);
    
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const isFavorite = favorites.includes(event.id);
    
    card.innerHTML = `
        <div class="event-image">
            <i class="${event.icon}"></i>
        </div>
        <div class="event-info">
            <div class="event-header">
                <span class="event-category">${event.category}</span>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${event.id})" title="Add to favorites">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <h3 class="event-title">${event.title}</h3>
            <div class="event-date">
                <i class="fas fa-calendar-alt"></i>
                <span>${formattedDate} at ${event.time}</span>
            </div>
            <div class="event-venue">
                <i class="fas fa-map-marker-alt"></i>
                <span>${event.venue}, ${event.location}</span>
            </div>
            <div class="event-price">
                Starting from ₹${event.price.regular}
            </div>
            <button class="book-btn" onclick="openBookingModal(${event.id})">
                Book Now
            </button>
        </div>
    `;

    return card;
}

// Filter events by category
function filterEvents(category) {
    if (category === 'all') {
        currentEvents = [...events];
    } else {
        currentEvents = events.filter(event => event.category === category);
    }
    renderEvents(currentEvents);
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        currentEvents = [...events];
    } else {
        currentEvents = events.filter(event => 
            event.title.toLowerCase().includes(searchTerm) ||
            event.category.toLowerCase().includes(searchTerm) ||
            event.venue.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
    }
    
    renderEvents(currentEvents);
    
    // Reset filter buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
}

// Open booking modal
function openBookingModal(eventId) {
    selectedEvent = events.find(event => event.id === eventId);
    
    if (!selectedEvent) return;

    // Populate modal with event details
    document.getElementById('modalEventTitle').textContent = selectedEvent.title;
    
    const eventDate = new Date(selectedEvent.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    document.getElementById('modalEventDate').textContent = `${formattedDate} at ${selectedEvent.time}`;
    document.getElementById('modalVenue').textContent = selectedEvent.venue;
    document.getElementById('modalLocation').textContent = selectedEvent.location;
    document.getElementById('regularPrice').textContent = `₹${selectedEvent.price.regular}`;
    document.getElementById('premiumPrice').textContent = `₹${selectedEvent.price.premium}`;

    // Reset ticket quantities
    document.getElementById('regularTickets').value = 0;
    document.getElementById('premiumTickets').value = 0;
    updateBookingSummary();

    // Show modal
    bookingModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close booking modal
function closeModal() {
    bookingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedEvent = null;
}

// Close success modal
function closeSuccessModal() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Change ticket quantity
function changeQuantity(type, change) {
    const input = document.getElementById(type + 'Tickets');
    let currentValue = parseInt(input.value);
    let newValue = currentValue + change;
    
    // Ensure value stays within bounds
    if (newValue < 0) newValue = 0;
    if (newValue > 10) newValue = 10;
    
    input.value = newValue;
    updateBookingSummary();
}

// Update booking summary
function updateBookingSummary() {
    if (!selectedEvent) return;

    const regularQty = parseInt(document.getElementById('regularTickets').value);
    const premiumQty = parseInt(document.getElementById('premiumTickets').value);
    
    const totalTickets = regularQty + premiumQty;
    const totalAmount = (regularQty * selectedEvent.price.regular) + (premiumQty * selectedEvent.price.premium);
    
    document.getElementById('totalTickets').textContent = totalTickets;
    document.getElementById('totalAmount').textContent = `₹${totalAmount}`;
}

// Confirm booking
function confirmBooking() {
    const regularQty = parseInt(document.getElementById('regularTickets').value);
    const premiumQty = parseInt(document.getElementById('premiumTickets').value);
    const totalTickets = regularQty + premiumQty;
    
    if (totalTickets === 0) {
        showNotification('Please select at least one ticket.', 'error');
        return;
    }
    
    // Simulate booking process with loading
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingOverlay);
    
    setTimeout(() => {
        // Remove loading overlay
        loadingOverlay.remove();
        
        // Simulate booking process
        const totalAmount = (regularQty * selectedEvent.price.regular) + (premiumQty * selectedEvent.price.premium);
        
        // Close booking modal
        closeModal();
        
        // Show success modal
        successModal.style.display = 'block';
        
        // Show success notification
        showNotification(`Successfully booked ${totalTickets} ticket(s) for ${selectedEvent.title}!`);
        
        // Store booking info (in a real app, this would go to a backend)
        const bookingInfo = {
            eventId: selectedEvent.id,
            eventTitle: selectedEvent.title,
            regularTickets: regularQty,
            premiumTickets: premiumQty,
            totalAmount: totalAmount,
            bookingDate: new Date().toISOString(),
            bookingId: 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase()
        };
        
        console.log('Booking confirmed:', bookingInfo);
        
        // In a real application, you would send this data to your backend
        // and handle payment processing here
    }, 1500); // Simulate network delay
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation for event cards
function addLoadingAnimation() {
    eventsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
            <div class="loading-spinner" style="
                width: 40px; 
                height: 40px; 
                border: 4px solid #f3f3f3; 
                border-top: 4px solid #667eea; 
                border-radius: 50%; 
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            "></div>
            <p style="color: #666;">Loading events...</p>
        </div>
    `;
}

// CSS animation for spinner (added via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply scroll animation to event cards when they're created
function addScrollAnimation() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call animation after rendering events
const originalRenderEvents = renderEvents;
renderEvents = function(eventsToRender) {
    originalRenderEvents(eventsToRender);
    setTimeout(addScrollAnimation, 100);
};

// Advanced filtering and sorting functions
function applyFiltersAndSort() {
    let filteredEvents = [...events];
    
    // Apply city filter
    if (selectedCity && selectedCity.toLowerCase() !== 'all cities') {
        filteredEvents = filteredEvents.filter(event => 
            event.city === selectedCity.toLowerCase()
        );
    }
    
    // Apply category filter if not showing all
    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter && activeFilter.dataset.category !== 'all') {
        filteredEvents = filteredEvents.filter(event => 
            event.category === activeFilter.dataset.category
        );
    }
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredEvents = filteredEvents.filter(event => 
            event.title.toLowerCase().includes(searchTerm) ||
            event.category.toLowerCase().includes(searchTerm) ||
            event.venue.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply price filter
    if (currentPriceFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => {
            const price = event.price.regular;
            switch (currentPriceFilter) {
                case '0-500': return price < 500;
                case '500-1000': return price >= 500 && price < 1000;
                case '1000-2000': return price >= 1000 && price < 2000;
                case '2000+': return price >= 2000;
                default: return true;
            }
        });
    }
    
    // Apply favorites filter
    if (showingFavorites) {
        filteredEvents = filteredEvents.filter(event => 
            favorites.includes(event.id)
        );
    }
    
    // Apply sorting
    filteredEvents.sort((a, b) => {
        switch (currentSort) {
            case 'price-low':
                return a.price.regular - b.price.regular;
            case 'price-high':
                return b.price.regular - a.price.regular;
            case 'popularity':
                // Simulate popularity based on favorites and random factor
                const aPopularity = favorites.includes(a.id) ? 1000 : 0 + Math.random() * 100;
                const bPopularity = favorites.includes(b.id) ? 1000 : 0 + Math.random() * 100;
                return bPopularity - aPopularity;
            case 'date':
            default:
                return new Date(a.date) - new Date(b.date);
        }
    });
    
    currentEvents = filteredEvents;
    renderEvents(currentEvents);
}

// Toggle favorite status
function toggleFavorite(eventId) {
    const index = favorites.indexOf(eventId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(eventId);
    }
    
    // Save to localStorage
    localStorage.setItem('eventFavorites', JSON.stringify(favorites));
    
    // Update the UI
    renderEvents(currentEvents);
}

// Toggle between grid and list view
function toggleView() {
    isGridView = !isGridView;
    const eventsGrid = document.getElementById('eventsGrid');
    const viewIcon = viewToggle.querySelector('i');
    
    if (isGridView) {
        eventsGrid.classList.remove('list-view');
        viewIcon.className = 'fas fa-th';
        viewToggle.title = 'Switch to List View';
    } else {
        eventsGrid.classList.add('list-view');
        viewIcon.className = 'fas fa-list';
        viewToggle.title = 'Switch to Grid View';
    }
}

// Toggle favorites view
function toggleFavorites() {
    showingFavorites = !showingFavorites;
    favoritesToggle.classList.toggle('active', showingFavorites);
    
    if (showingFavorites) {
        favoritesToggle.title = 'Show All Events';
    } else {
        favoritesToggle.title = 'Show Favorites';
    }
    
    applyFiltersAndSort();
}

// Enhanced filter events function
function filterEvents(category) {
    // Reset other filters when category changes
    if (category === 'all') {
        currentEvents = [...events];
    } else {
        currentEvents = events.filter(event => event.category === category);
    }
    
    // Apply current filters and sorting
    applyFiltersAndSort();
}

// Enhanced search function
function handleSearch() {
    applyFiltersAndSort();
    
    // Reset category filter to show all categories in search results
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
}

// Add notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';
    if (type === 'info') icon = 'fa-info-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Authentication Functions
function openLoginModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset forms
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function closeLoginModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchToRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function switchToLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login validation
    if (email && password) {
        // Create user object
        const user = {
            id: Math.random().toString(36).substr(2, 9),
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email: email,
            city: selectedCity,
            loginTime: new Date().toISOString()
        };
        
        // Store user
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUser = user;
        
        // Update UI
        updateLoginState();
        closeLoginModal();
        
        showNotification(`Welcome back, ${user.name}!`);
    } else {
        showNotification('Please fill in all fields', 'error');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const city = document.getElementById('registerCity').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validation
    if (!name || !email || !phone || !city || !password || !confirmPassword) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    if (!agreeTerms) {
        showNotification('Please agree to the terms and conditions', 'error');
        return;
    }
    
    // Create user object
    const user = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        phone: phone,
        city: city,
        registrationTime: new Date().toISOString()
    };
    
    // Store user
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    
    // Update selected city
    selectedCity = city;
    localStorage.setItem('selectedCity', selectedCity);
    updateCityDisplay();
    
    // Update UI
    updateLoginState();
    closeLoginModal();
    
    showNotification(`Welcome to EventHub, ${user.name}!`);
}

function updateLoginState() {
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    const userName = document.getElementById('userName');
    
    if (currentUser) {
        loginBtn.style.display = 'none';
        userMenu.style.display = 'block';
        userName.textContent = currentUser.name;
    } else {
        loginBtn.style.display = 'flex';
        userMenu.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    updateLoginState();
    showNotification('You have been logged out successfully');
}

// City Selection Functions
function openCityModal() {
    const cityModal = document.getElementById('cityModal');
    cityModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCityModal() {
    const cityModal = document.getElementById('cityModal');
    cityModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectCity(city) {
    if (city === 'all') {
        selectedCity = 'All Cities';
    } else {
        selectedCity = city.charAt(0).toUpperCase() + city.slice(1);
    }
    localStorage.setItem('selectedCity', selectedCity);
    updateCityDisplay();
    closeCityModal();
    showNotification(`City changed to ${selectedCity}`);
    
    // Apply filters with new city
    applyFiltersAndSort();
}

function updateCityDisplay() {
    const cityDisplay = document.getElementById('selectedCity');
    if (cityDisplay) {
        cityDisplay.textContent = selectedCity;
    }
}

// Contact Form Functions
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    if (name && email && subject && message) {
        // Simulate form submission
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(loadingOverlay);
        
        setTimeout(() => {
            loadingOverlay.remove();
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            showNotification('Your message has been sent successfully!');
        }, 1500);
    } else {
        showNotification('Please fill in all required fields', 'error');
    }
});

// User Profile Functions
function showProfile() {
    if (currentUser) {
        alert(`Profile Information:\n\nName: ${currentUser.name}\nEmail: ${currentUser.email}\nCity: ${currentUser.city || selectedCity}`);
    }
}

function showBookings() {
    showNotification('Booking history feature will be available soon!', 'info');
}

function showFavorites() {
    if (favorites.length > 0) {
        showingFavorites = true;
        favoritesToggle.classList.add('active');
        applyFiltersAndSort();
        showNotification(`Showing ${favorites.length} favorite events`);
    } else {
        showNotification('You have no favorite events yet!', 'info');
    }
}

// Enhanced scroll animations with intersection observer
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add staggered animation for feature items
            if (entry.target.classList.contains('feature-item') || 
                entry.target.classList.contains('stat-item') || 
                entry.target.classList.contains('contact-item')) {
                const items = Array.from(entry.target.parentElement.children);
                const index = items.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        }
    });
};

const scrollObserver = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements when page loads
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-item, .stat-item, .contact-item, .about-text, .contact-form-container');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollObserver.observe(el);
    });
});
