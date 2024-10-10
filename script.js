import CryptoJS from 'crypto-js';

let swiper;

function initializeAll() {
    console.log("初始化开始");
    initializeSwiper();
    initializeMap();
    console.log("初始化完成");
}

function initializeSwiper() {
    // 保持不变
}

function initializeMap() {
    // 保持不变
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll);
} else {
    initializeAll();
}

// 删除 initializeMusicPlayer 函数和相关的事件监听器