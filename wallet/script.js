// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Here you can add logic to show/hide content based on selected tab
        console.log(`Switched to ${this.textContent} tab`);
    });
});

// Connect wallet button
document.querySelector('.connect-btn').addEventListener('click', function() {
    console.log('Connecting wallet...');
    // Add your wallet connection logic here
    
    // Example: Show loading state
    const originalText = this.textContent;
    this.textContent = 'Connecting...';
    
    setTimeout(() => {
        this.textContent = originalText;
        // Handle connection result
    }, 2000);
});

// Earn more card click handler
document.querySelector('.points-card.earn-more').addEventListener('click', function() {
    console.log('Navigating to earn more section...');
    // Add navigation logic here
});

// Add hover effects
document.querySelectorAll('.points-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}); 