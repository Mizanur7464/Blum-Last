// Initialize Telegram WebApp
let tg = window.Telegram.WebApp;
tg.expand();
tg.setHeaderColor('#000000');

// Farming functionality
let farmingInterval;
let farmingAmount = 16.126;
let isFarming = false;
let farmingStartTime;
const FARMING_RATE = 0.002;
const FARMING_DURATION = 7200000; // 2 hours

// Navigation functionality
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        const page = this.querySelector('span').textContent.toLowerCase();
        
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Handle navigation
        switch(page) {
            case 'home':
                window.location.href = '/index.html';
                break;
            case 'earn':
                window.location.href = '/earn/index.html';
                break;
            case 'memepad':
                window.location.href = '/memepad/index.html';
                break;
            case 'frens':
                window.location.href = '/friends/index.html';
                break;
            case 'wallet':
                window.location.href = '/wallet/index.html';
                break;
        }
    });
});

// Game icon animation
if (document.querySelector('.game-icon')) {
    const gameIcon = document.querySelector('.game-icon');
    let rotation = 0;
    setInterval(() => {
        rotation += 3;
        gameIcon.style.transform = `rotate(${rotation}deg)`;
    }, 50);
}

// Farming functionality
function startFarming() {
    const farmingBtn = document.querySelector('.farming-btn');
    const farmingInitial = document.querySelector('.farming-initial');
    const farmingDetails = document.querySelector('.farming-details');
    
    if (!isFarming) {
        // Hide initial text and show farming details
        farmingInitial.style.display = 'none';
        farmingDetails.style.display = 'flex';
        
        // Start farming
        isFarming = true;
        farmingStartTime = Date.now();
        
        // Start the interval
        farmingInterval = setInterval(() => {
            farmingAmount += FARMING_RATE;
            updateFarmingUI();
            
            if (Date.now() - farmingStartTime >= FARMING_DURATION) {
                restartFarming();
            }
        }, 1000);
        
        saveFarmingState();
        updateFarmingUI();
    }
}

function restartFarming() {
    clearInterval(farmingInterval);
    farmingStartTime = Date.now();
    startFarming();
    saveFarmingState();
}

function updateFarmingUI() {
    const farmingAmountEl = document.querySelector('.farming-amount');
    if (farmingAmountEl) {
        farmingAmountEl.textContent = `₿ ${farmingAmount.toFixed(3)}`;
    }
    
    if (isFarming) {
        const remainingTime = FARMING_DURATION - (Date.now() - farmingStartTime);
        updateRemainingTime(remainingTime);
    }
}

function updateRemainingTime(remainingMs) {
    const remainingTimeEl = document.querySelector('.farming-time');
    if (remainingTimeEl) {
        const hours = Math.floor(remainingMs / 3600000);
        const minutes = Math.floor((remainingMs % 3600000) / 60000);
        remainingTimeEl.textContent = `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m`;
    }
}

function saveFarmingState() {
    const farmingState = {
        startTime: farmingStartTime,
        amount: farmingAmount,
        isFarming: isFarming
    };
    localStorage.setItem('farmingState', JSON.stringify(farmingState));
}

function loadFarmingState() {
    const savedState = localStorage.getItem('farmingState');
    if (savedState) {
        const state = JSON.parse(savedState);
        farmingAmount = state.amount;
        isFarming = state.isFarming;
        
        if (isFarming) {
            farmingStartTime = state.startTime;
            const timePassed = Date.now() - farmingStartTime;
            
            // Add accumulated amount for offline time
            const accumulatedAmount = (timePassed / 1000) * FARMING_RATE;
            farmingAmount += accumulatedAmount;
            
            // Restart farming if it was active
            startFarming();
        }
    }
    updateFarmingUI();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadFarmingState();
    
    // Add click handler for farming button
    const farmingBtn = document.querySelector('.farming-btn');
    if (farmingBtn) {
        farmingBtn.addEventListener('click', startFarming);
    }
});
 