// Handle meme upload
document.querySelector('.upload-btn').addEventListener('click', function() {
    // You can implement file upload functionality here
    console.log('Upload button clicked');
    
    // Example: Show file picker
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            console.log('Selected file:', file.name);
            // Implement your upload logic here
        }
    };
    input.click();
});

// Handle meme interactions
document.querySelectorAll('.meme-card').forEach(card => {
    card.addEventListener('click', function() {
        // Handle meme click - could open full view
        console.log('Meme clicked');
    });

    const likeBtn = card.querySelector('.meme-likes');
    if (likeBtn) {
        likeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Handle like functionality
            console.log('Like clicked');
        });
    }

    const shareBtn = card.querySelector('.meme-shares');
    if (shareBtn) {
        shareBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Handle share functionality
            console.log('Share clicked');
        });
    }
});

// Update stats periodically (example)
function updateStats() {
    // You can implement real-time stats update here
    const views = Math.floor(Math.random() * 1000) + 500;
    document.querySelector('.stat-card:nth-child(2) .stat-value').textContent = 
        views > 1000 ? (views/1000).toFixed(1) + 'K' : views;
}

// Update stats every 30 seconds
setInterval(updateStats, 30000); 