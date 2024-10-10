document.addEventListener('DOMContentLoaded', function() {
    // 音乐播放器功能
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeControl = document.getElementById('volumeControl');
    const playMode = document.getElementById('playMode');
    const playlist = document.getElementById('playlist');
    
    const songs = [
        { title: "大美六安-1", src: "C:\\Users\\wwwta\\Desktop\\人工智能测试\\画里六安\\音乐\\1-1\\大美六安-1 (1).mp4" },
        { title: "大美六安-2", src: "C:\\Users\\wwwta\\Desktop\\人工智能测试\\画里六安\\音乐\\1-1\\大美六安-1 (2).mp4" },
        { title: "大美六安-3", src: "C:\\Users\\wwwta\\Desktop\\人工智能测试\\画里六安\\音乐\\1-1\\大美六安-1 (3).mp4" },
        { title: "大美六安-4", src: "C:\\Users\\wwwta\\Desktop\\人工智能测试\\画里六安\\音乐\\1-1\\大美六安-1 (4).mp4" },
        { title: "大美六安-5", src: "C:\\Users\\wwwta\\Desktop\\人工智能测试\\画里六安\\音乐\\1-1\\大美六安-1 (5).mp4" },
        { title: "大美六安-6", src: "C:\\Users\\wwwta\\Desktop\\人工智能测试\\画里六安\\音乐\\1-1\\大美六安-1 (6).mp4" },
        { title: "大美六安-7", src: "C:\\Users\\wwwta\\Desktop\\人工智能测试\\画里六安\\音乐\\1-1\\大美六安-1 (7).mp4" },
    ];

    let currentSongIndex = 0;

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = song.title;
        li.addEventListener('click', () => playSong(index));
        playlist.appendChild(li);
    });

    function playSong(index) {
        currentSongIndex = index;
        audioPlayer.src = songs[index].src;
        audioPlayer.play();
    }

    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value;
    });

    playMode.addEventListener('change', () => {
        // 实现播放模式切换逻辑
    });

    // 新闻轮播功能
    const newsCarousel = document.querySelector('#newsCarousel .carousel-inner');
    const news = [
        { title: "六安市文化旅游活动开启，欢迎市民积极参与", date: "2024-10-08" },
        { title: "六安文旅局发布最新旅游政策解读", date: "2024-10-07" },
        { title: "六安举办首届茶文化节", date: "2023-05-01" },
        { title: "天堂寨景区推出新游览路线", date: "2023-04-15" },
    ];

    news.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item${index === 0 ? ' active' : ''}`;
        div.innerHTML = `
            <h5>${item.title}</h5>
            <p>${item.date}</p>
        `;
        newsCarousel.appendChild(div);
    });

    // 自动切换新闻
    setInterval(() => {
        const activeItem = newsCarousel.querySelector('.active');
        activeItem.classList.remove('active');
        const nextItem = activeItem.nextElementSibling || newsCarousel.firstElementChild;
        nextItem.classList.add('active');
    }, 5000);

    // 联系表单功能
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言，我们会尽快回复！');
        contactForm.reset();
    });
});