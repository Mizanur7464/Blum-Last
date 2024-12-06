// Tab switching functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        
        // Show selected tab content
        const tabName = this.textContent.toLowerCase();
        const selectedContent = document.querySelector(`.${tabName}-content`);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
    });
});

// Start button functionality
document.querySelectorAll('.start-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.earn-card');
        const taskTitle = card.querySelector('h3')?.textContent || 
                         card.querySelector('h2')?.textContent;
        const reward = card.querySelector('.reward').textContent;
        
        console.log(`Starting task: ${taskTitle} for ${reward}`);
        
        // Add visual feedback
        this.textContent = 'Starting...';
        setTimeout(() => {
            this.textContent = 'Start';
        }, 2000);
    });
});

// Add card hover effects
document.querySelectorAll('.earn-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}); 