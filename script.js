// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    
    // Handle navigation button clicks
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            
            // Remove active class from all buttons and pages
            navButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding page
            const targetPageElement = document.getElementById(targetPage + '-page');
            if (targetPageElement) {
                targetPageElement.classList.add('active');
            }
        });
    });
    
    // Click me button functionality
    const clickMeBtn = document.getElementById('clickMeBtn');
    const clickMessage = document.getElementById('clickMessage');
    let isMessageVisible = false;
    
    if (clickMeBtn && clickMessage) {
        clickMeBtn.addEventListener('click', function() {
            if (isMessageVisible) {
                // Hide message
                clickMessage.classList.remove('show');
                isMessageVisible = false;
            } else {
                // Show message
                clickMessage.classList.add('show');
                isMessageVisible = true;
            }
        });
    }
    
    // Alert button functionality
    const alertBtn = document.getElementById('alertBtn');
    
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            // User data
            const userData = {
                name: "Abhyuday Gupta",
                registrationNumber: "240905576",
                phoneNumber: "9350845982"
            };
            
            const alertMessage = `Name: ${userData.name}\nRegistration Number: ${userData.registrationNumber}\nPhone Number: ${userData.phoneNumber}`;
            
            alert(alertMessage);
        });
    }
    
    // Add smooth scrolling for better UX
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a subtle click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Initialize the page
    console.log('MIST Website loaded successfully!');
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key to close message if visible
        if (e.key === 'Escape' && isMessageVisible) {
            clickMessage.classList.remove('show');
            isMessageVisible = false;
        }
        
        // Number keys for navigation (1, 2, 3)
        if (e.key >= '1' && e.key <= '3') {
            const pageIndex = parseInt(e.key) - 1;
            const targetButton = navButtons[pageIndex];
            if (targetButton) {
                targetButton.click();
            }
        }
    });
    
    // Add hover effects for image cards
    const imageCards = document.querySelectorAll('.image-placeholder');
    imageCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #ff9500, #ffb000)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #ff7b00, #ff9500)';
        });
        
        // Optional: Add click functionality to image cards
        card.addEventListener('click', function() {
            console.log(`Image ${index + 1} clicked!`);
            // You could add modal functionality or navigation here
        });
    });
    
    // Add animation when pages load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Observe all page elements for animation
    pages.forEach(page => {
        page.style.opacity = '0';
        page.style.transform = 'translateY(20px)';
        page.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(page);
    });
    
    // Show the active page immediately
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        activePage.style.opacity = '1';
        activePage.style.transform = 'translateY(0)';
    }
});
