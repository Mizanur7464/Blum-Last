// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const friendCards = document.querySelectorAll('.friend-card');
    
    friendCards.forEach(card => {
        const friendName = card.querySelector('.friend-name').textContent.toLowerCase();
        if (friendName.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// Invite button functionality
document.querySelectorAll('.invite-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const friendName = this.closest('.friend-card').querySelector('.friend-name').textContent;
        
        // Toggle button state
        if (this.textContent === 'Invite') {
            this.textContent = 'Invited';
            this.style.background = '#4CAF50';
        } else {
            this.textContent = 'Invite';
            this.style.background = '#0066ff';
        }
        
        console.log(`Invited ${friendName}`);
    });
});

// Add friend button
document.querySelector('.add-friend-btn').addEventListener('click', function() {
    // Implement add friend functionality
    console.log('Add friend clicked');
    
    // Example: Show prompt for friend's username
    const username = prompt('Enter friend\'s username:');
    if (username) {
        console.log(`Adding friend: ${username}`);
        // Implement your add friend logic here
    }
});

// Update online status periodically
function updateOnlineStatus() {
    const statuses = document.querySelectorAll('.online-status');
    statuses.forEach(status => {
        // Randomly toggle online status for demo
        if (Math.random() > 0.7) {
            status.classList.toggle('active');
            const statusText = status.closest('.friend-card').querySelector('.friend-status');
            statusText.textContent = status.classList.contains('active') ? 'Online' : 'Last seen just now';
        }
    });
}

// Update status every 5 seconds
setInterval(updateOnlineStatus, 5000);

// Handle invite button click
document.querySelector('.invite-btn').addEventListener('click', function() {
    // Generate or get invitation link
    const inviteLink = 'https://t.me/BlumCryptoBot?start=ref123';
    
    // Copy to clipboard
    navigator.clipboard.writeText(inviteLink).then(() => {
        // Change button text temporarily
        const originalText = this.textContent;
        this.textContent = 'Link Copied!';
        
        setTimeout(() => {
            this.textContent = originalText;
        }, 2000);
        
        // You can also implement sharing via Telegram here
        // tg.ShareButton(inviteLink);
    });
});

// Add smooth scroll for steps
document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
}); 