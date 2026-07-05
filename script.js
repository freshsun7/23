// ============================================
// 23 💌 | İyi ki Doğdun Kocam - Birthday Website
// ============================================

const CONFIG = {
    startDate: new Date('2025-04-03'),
    letter: `23. yaş günün kutlu olsunnn. Benden uzakta geçirdiğin ilk ve umarım tek doğum günün bu... Geçen yıl da tam anlamıyla yanında olamamıştım ama bu yıl yanında olmayı o kadar çok isterdim kiii... Sana sarılıp doğum gününü ilk ben kutlamak, yüzünü görmek, o güzel gülüşünü izlemek isterdimmm ama şimdilik bunu sana küçük bir sürprizle hissettirmeye çalışıyorum. Kocamla yaşıt olduğumm sadeceee 3 ay varrr. Yazmaya nereden başlayacağımı gerçekten bilmiyorum kocammmm çünkü seninle geçen bu koca bir yılı birkaç paragrafa sığdırmak çok zor. Ama şunu biliyorum ömrümdeki en güzel yıllardan biri seninle geçti. Birlikte o kadar çok şey yaşadık ki... İyi günlerimiz oldu, kötü günlerimiz oldu, stresli zamanlarımız oldu, yorulduğumuz günler oldu, çok heyecanlandığımız anlar oldu, kahkahalar attığımız zamanlar oldu... Ama dönüp baktığımda hiçbirini değiştirmek istememmm çünkü hepsinde sen vardınnn bebeğiimm. Seni tanımak, seni bilmek, seni sevmek ve en önemlisi biz olabilmek bana dünyanın en güzel hislerinden birini yaşatıyor. Bazen durup senin bir olaya nasıl tepki vereceğini tahmin edebilmek beni çokk ama çookk mutlu ediyor. Seni bu kadar iyi tanıyor olmak bana kendimi çok şanslı hissettiriyor. Arada minik ufak tefek kavgalarımız da oluyor... (Bence kavgalarımız bile eğlenceli) çünkü ne olursa olsun günün sonunda yine birbirimize dönüyoruz. İşte en sevdiğim şey de bu. Her şeye rağmen hep biz olabiliyoruz. Seni düşündüğümde aklıma ilk gelen şey hep gülüşün oluyor. Sana bunu kaç kere söyledim bilmiyorum ama bir kez daha söyleyeceğim. Gülüşüne gerçekten aşığımmm kocammmm. Dünyanın en güzel gülüşü. Ne zaman gülsen benim de istemsizce yüzüm gülüyor. Bazen seni izlerken kendi kendime düşünüyorum... İyi ki o gece sana reels atmışım çünkü küçücük görünen o hareket, benim hayatımdaki en güzel başlangıçlardan biri olmuş. İyi ki benimle konuşmuşsun iyi ki hayatıma girmişsin veee en önemlisiii iyi ki benim olmuşsun kocammm. Bugün benim kocam 23 yaşına giriyorrrrr. Bu yeni yaşın sana önce sağlık getirsin. Sonra huzur getirsin. Sonra hayalini kurduğun her şeyi tek tek gerçekleştirebileceğin fırsatlar getirsin. Yaptığın işlerden keyif aldığın, kendini geliştirdiğin, mutlu olduğun ve her gün biraz daha gurur duyduğun bir yıl olsun. Ve bol para getirsin tabii çunkuu ben huzuru, mutluluğu, kaosu ve en önemlisiii benii sonsuz zorbalayabilmenii de getiriyorummm hem de hepsi ücretsiz. Böyle bir hizmeti başka yerde bulamazsınn kocammm. Seninle birlikte büyümekk hayatımınn en özell şansıı. Geleceği düşünürken yanında kendimi hayal etmek, kurduğumuz hayaller, ettiğimiz sohbetler bunların hepsi bana evim gibi hissettiriyor. Hayat bazen istediğimiz gibi gitmeyebilir. Yorulabiliriz, üzülebiliriz, hatta bazen birbirimize kızabiliriz ama ben şunu biliyorumm bütün bunların sonunda yine elini tutmak istediğimm kişi sensin çünküü benim en güvenli yerim hep sen oldun biricikk kocammm. Birlikte daha kutlayacağımız o kadar çok doğum günü var ki... İnşallah bir sonrakilerde mumlarını birlikte üfleriz, pastanı birlikte yeriz, gece sarılarak uyuruz ve artık uzakta kelimesini hiç kullanmak zorunda kalmayız. Seni tarif etmeye kelimeler yetmiyor. Ama şunu çok rahat söyleyebilirimmm bebeğimmm İyi ki doğmuşsun. İyi ki benim sevgilim olmuşsun. İyi ki benim en yakın arkadaşım olmuşsun. İyi ki hayatıma gelmişsin. Ve her şeyden önemlisi... İyi ki benim kocamsın. Seni bugün dünden daha çok seviyorum. Yarın ise bugünden daha çok seveceğim. Nice yaşlara bebeğim... İyi ki doğdun.`,
    
    photos: [
        { emoji: '🍼', caption: '👶 Başı böyle güzel', color1: '#FF6B9D', color2: '#C44569' },
        { emoji: '🎓', caption: '👨‍🎓 Gelecek parlak', color1: '#4ECDC4', color2: '#44A08D' },
        { emoji: '💑', caption: '💑 İlk buluşma', color1: '#FF6348', color2: '#F2A359' },
        { emoji: '🌴', caption: '🌴 Tatil anısı', color1: '#95E1D3', color2: '#38ADA9' },
        { emoji: '😂', caption: '😂 Kahkahalar', color1: '#FFD93D', color2: '#FEC93F' },
        { emoji: '💕', caption: '💕 Romantik an', color1: '#FF69B4', color2: '#DB0A5B' },
        { emoji: '🎂', caption: '🎂 Bugün senin gün', color1: '#A8D8EA', color2: '#AA96DA' }
    ],
    
    finalMessages: [
        'Eğer bu satırı okuyorsan... demek ki sonuna kadar geldin.',
        'Tıpkı benim de hayatımın sonuna kadar senin yanında olmak istediğim gibi...',
        'Seni seçtim.',
        'Bugün da...',
        'Yarın da...',
        'Her zaman...',
        'Sonsuza Kadar Sen ❤️',
        '03.04.2025 ∞'
    ]
};

let currentScreenIndex = 0;
let isScrolling = false;

// ============================================
// Initialize
// ============================================
function init() {
    createStars();
    createFloatingHearts();
    setupEnvelopeInteraction();
    setupNavigation();
    setupMiniPlayer();
    startCountdown();
    createGallery();
    displayLetter();
    setupScrolling();
}

// ============================================
// Stars Creation
// ============================================
function createStars() {
    document.querySelectorAll('.stars-container').forEach(container => {
        for (let i = 0; i < 80; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (3 + Math.random() * 2) + 's';
            container.appendChild(star);
        }
    });
}

// ============================================
// Floating Hearts
// ============================================
function createFloatingHearts() {
    function addHeart() {
        const containers = document.querySelectorAll('.hearts-container');
        containers.forEach(container => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = '0s';
            heart.style.setProperty('--rotate', Math.random() * 360 + 'deg');
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        });
    }
    
    addHeart();
    setInterval(addHeart, 3000);
}

// ============================================
// Envelope Interaction
// ============================================
function setupEnvelopeInteraction() {
    const envelope = document.getElementById('envelope');
    
    envelope.addEventListener('click', () => {
        envelope.classList.add('opened');
        playMusic();
        createConfetti();
        
        setTimeout(() => {
            scrollToScreen(2);
        }, 1500);
    });
}

// ============================================
// Confetti Effect
// ============================================
function createConfetti() {
    const container = document.querySelector('.envelope-container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = (container.offsetLeft + 150) + 'px';
        confetti.style.top = (container.offsetTop + 100) + 'px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = ['#ff69b4', '#8b5fbf', '#ff1493', '#a565d8'][Math.floor(Math.random() * 4)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '999';
        
        document.body.appendChild(confetti);
        
        const angle = (Math.PI * 2 * i) / 50;
        const velocity = 5 + Math.random() * 8;
        const tx = Math.cos(angle) * velocity * 80;
        const ty = Math.sin(angle) * velocity * 80;
        
        confetti.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => confetti.remove(), 1200);
    }
}

// ============================================
// Music Player
// ============================================
function setupMiniPlayer() {
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const vinyl = document.getElementById('vinyl');
    
    playBtn.addEventListener('click', () => {
        playBtn.classList.add('hidden');
        pauseBtn.classList.remove('hidden');
        vinyl.classList.remove('paused');
        playMusic();
    });
    
    pauseBtn.addEventListener('click', () => {
        pauseBtn.classList.add('hidden');
        playBtn.classList.remove('hidden');
        vinyl.classList.add('paused');
        pauseMusic();
    });
}

let audioElement = null;

function playMusic() {
    if (!audioElement) {
        audioElement = new Audio();
        audioElement.loop = true;
        audioElement.volume = 0.3;
        // Using a public MP3 URL
        audioElement.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    }
    audioElement.play().catch(err => console.log('Audio play failed:', err));
}

function pauseMusic() {
    if (audioElement) {
        audioElement.pause();
    }
}

// ============================================
// Letter Typewriter
// ============================================
function displayLetter() {
    const letterContent = document.getElementById('letterContent');
    letterContent.innerHTML = '';
    
    const paragraphs = CONFIG.letter.split('\n\n');
    
    paragraphs.forEach((para, index) => {
        const p = document.createElement('p');
        p.textContent = para.trim();
        letterContent.appendChild(p);
    });
}

// ============================================
// Countdown Timer
// ============================================
function startCountdown() {
    function updateCounter() {
        const now = new Date();
        const diff = now - CONFIG.startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCounter();
    setInterval(updateCounter, 1000);
}

// ============================================
// Gallery
// ============================================
function createGallery() {
    const gallery = document.getElementById('galleryContainer');
    gallery.innerHTML = '';
    
    CONFIG.photos.forEach((photo, index) => {
        const polaroid = document.createElement('div');
        polaroid.classList.add('polaroid');
        
        const rotation = (Math.random() - 0.5) * 25;
        const randomX = Math.random() * (window.innerWidth - 250);
        const randomY = Math.random() * (window.innerHeight - 400) + 100;
        
        polaroid.style.setProperty('--rotate', rotation + 'deg');
        polaroid.style.left = randomX + 'px';
        polaroid.style.top = randomY + 'px';
        polaroid.style.animationDelay = (index * 0.3) + 's';
        
        const img = document.createElement('img');
        img.style.background = `linear-gradient(135deg, ${photo.color1} 0%, ${photo.color2} 100%)`;
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.innerHTML = photo.emoji;
        
        const caption = document.createElement('div');
        caption.classList.add('polaroid-caption');
        caption.textContent = photo.caption;
        
        polaroid.appendChild(img);
        polaroid.appendChild(caption);
        
        polaroid.addEventListener('click', (e) => {
            e.stopPropagation();
            showLightbox(photo.emoji, photo.caption);
        });
        
        gallery.appendChild(polaroid);
    });
}

// ============================================
// Lightbox
// ============================================
function showLightbox(emoji, caption) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const captionEl = document.getElementById('lightboxCaption');
    
    img.innerHTML = emoji;
    img.style.fontSize = '10rem';
    captionEl.textContent = caption;
    
    lightbox.classList.remove('hidden');
}

document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
    }
});

document.querySelector('.close')?.addEventListener('click', () => {
    document.getElementById('lightbox').classList.add('hidden');
});

// ============================================
// Fireworks
// ============================================
function createFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    for (let i = 0; i < 50; i++) {
        const angle = (Math.PI * 2 * i) / 50;
        const speed = 3 + Math.random() * 5;
        
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            emoji: ['✨', '💫', '⭐', '💝', '❤️'][Math.floor(Math.random() * 5)]
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let activeParticles = 0;
        particles.forEach(p => {
            if (p.life > 0) {
                activeParticles++;
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1; // gravity
                p.life -= 0.02;
                
                ctx.globalAlpha = p.life;
                ctx.font = '2rem Arial';
                ctx.fillText(p.emoji, p.x, p.y);
            }
        });
        
        ctx.globalAlpha = 1;
        
        if (activeParticles > 0) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// ============================================
// Screen Navigation
// ============================================
const screens = [
    'opening',
    'envelope-screen',
    'letter-screen',
    'counter-screen',
    'gallery-screen',
    'memories-screen',
    'forever-screen',
    'final-screen'
];

function scrollToScreen(index) {
    if (isScrolling || index < 0 || index >= screens.length) return;
    
    isScrolling = true;
    currentScreenIndex = index;
    
    // Update active screen
    screens.forEach((screenId, i) => {
        const screen = document.getElementById(screenId);
        if (i === index) {
            screen.classList.add('active');
        } else {
            screen.classList.remove('active');
        }
    });
    
    // Update page counter
    document.getElementById('currentPage').textContent = index + 1;
    document.getElementById('totalPages').textContent = screens.length;
    
    // Execute screen-specific logic
    if (index === 5) { // Memories screen
        displayMemory();
    } else if (index === 6) { // Forever screen
        createFireworks();
    } else if (index === 7) { // Final screen
        displayFinal();
    }
    
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}

function displayMemory() {
    const memoryImage = document.getElementById('memoryImage');
    memoryImage.style.background = 'linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)';
    memoryImage.innerHTML = '👶';
    memoryImage.style.fontSize = '4rem';
    memoryImage.style.display = 'flex';
    memoryImage.style.alignItems = 'center';
    memoryImage.style.justifyContent = 'center';
}

function displayFinal() {
    const finalMessages = document.getElementById('finalMessages');
    finalMessages.innerHTML = '';
    
    CONFIG.finalMessages.forEach((msg, index) => {
        const line = document.createElement('div');
        line.classList.add('final-line');
        line.textContent = msg;
        line.style.animationDelay = (index * 2.5) + 's';
        finalMessages.appendChild(line);
    });
}

// ============================================
// Scrolling
// ============================================
function setupScrolling() {
    document.getElementById('scrollDown').addEventListener('click', () => {
        scrollToScreen(currentScreenIndex + 1);
    });
    
    document.getElementById('scrollUp').addEventListener('click', () => {
        scrollToScreen(currentScreenIndex - 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            scrollToScreen(currentScreenIndex + 1);
        } else if (e.key === 'ArrowUp') {
            scrollToScreen(currentScreenIndex - 1);
        }
    });
    
    // Wheel scrolling
    let wheelTimeout;
    document.addEventListener('wheel', (e) => {
        if (wheelTimeout) return;
        
        if (e.deltaY > 0) {
            scrollToScreen(currentScreenIndex + 1);
        } else if (e.deltaY < 0) {
            scrollToScreen(currentScreenIndex - 1);
        }
        
        wheelTimeout = setTimeout(() => {
            wheelTimeout = null;
        }, 1000);
    }, { passive: true });
}

// ============================================
// Start
// ============================================
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', () => {
    const canvas = document.getElementById('fireworksCanvas');
    if (canvas && currentScreenIndex === 6) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});