// ============================================
// 23 💌 | İyi ki Doğdun Kocam - Birthday Page
// ============================================

// Configuration
const CONFIG = {
    startDate: new Date('2025-04-03'),
    letter: `23. yaş günün kutlu olsunnn. Benden uzakta geçirdiğin ilk ve umarım tek doğum günün bu... Geçen yıl da tam anlamıyla yanında olamamıştım ama bu yıl yanında olmayı o kadar çok isterdim kiii... Sana sarılıp doğum gününü ilk ben kutlamak, yüzünü görmek, o güzel gülüşünü izlemek isterdimmm ama şimdilik bunu sana küçük bir sürprizle hissettirmeye çalışıyorum. Kocamla yaşıt olduğumm sadeceee 3 ay varrr. Yazmaya nereden başlayacağımı gerçekten bilmiyorum kocammmm çünkü seninle geçen bu koca bir yılı birkaç paragrafa sığdırmak çok zor. Ama şunu biliyorum ömrümdeki en güzel yıllardan biri seninle geçti. Birlikte o kadar çok şey yaşadık ki... İyi günlerimiz oldu, kötü günlerimiz oldu, stresli zamanlarımız oldu, yorulduğumuz günler oldu, çok heyecanlandığımız anlar oldu, kahkahalar attığımız zamanlar oldu... Ama dönüp baktığımda hiçbirini değiştirmek istememmm çünkü hepsinde sen vardınnn bebeğiimm. Seni tanımak, seni bilmek, seni sevmek ve en önemlisi biz olabilmek bana dünyanın en güzel hislerinden birini yaşatıyor. Bazen durup senin bir olaya nasıl tepki vereceğini tahmin edebilmek beni çokk ama çookk mutlu ediyor. Seni bu kadar iyi tanıyor olmak bana kendimi çok şanslı hissettiriyor. Arada minik ufak tefek kavgalarımız da oluyor... (Bence kavgalarımız bile eğlenceli) çünkü ne olursa olsun günün sonunda yine birbirimize dönüyoruz. İşte en sevdiğim şey de bu. Her şeye rağmen hep biz olabiliyoruz. Seni düşündüğümde aklıma ilk gelen şey hep gülüşün oluyor. Sana bunu kaç kere söyledim bilmiyorum ama bir kez daha söyleyeceğim. Gülüşüne gerçekten aşığımmm kocammmm. Dünyanın en güzel gülüşü. Ne zaman gülsen benim de istemsizce yüzüm gülüyor. Bazen seni izlerken kendi kendime düşünüyorum... İyi ki o gece sana reels atmışım çünkü küçücük görünen o hareket, benim hayatımdaki en güzel başlangıçlardan biri olmuş. İyi ki benimle konuşmuşsun iyi ki hayatıma girmişsin veee en önemlisiii iyi ki benim olmuşsun kocammm. Bugün benim kocam 23 yaşına giriyorrrrr. Bu yeni yaşın sana önce sağlık getirsin. Sonra huzur getirsin. Sonra hayalini kurduğun her şeyi tek tek gerçekleştirebileceğin fırsatlar getirsin. Yaptığın işlerden keyif aldığın, kendini geliştirdiğin, mutlu olduğun ve her gün biraz daha gurur duyduğun bir yıl olsun. Ve bol para getirsin tabii çunkuu ben huzuru, mutluluğu, kaosu ve en önemlisiii benii sonsuz zorbalayabilmenii de getiriyorummm hem de hepsi ücretsiz. Böyle bir hizmeti başka yerde bulamazsınn kocammm. Seninle birlikte büyümekk hayatımınn en özell şansıı. Geleceği düşünürken yanında kendimi hayal etmek, kurduğumuz hayaller, ettiğimiz sohbetler bunların hepsi bana evim gibi hissettiriyor. Hayat bazen istediğimiz gibi gitmeyebilir. Yorulabiliriz, üzülebiliriz, hatta bazen birbirimize kızabiliriz ama ben şunu biliyorumm bütün bunların sonunda yine elini tutmak istediğimm kişi sensin çünküü benim en güvenli yerim hep sen oldun biricikk kocammm. Birlikte daha kutlayacağımız o kadar çok doğum günü var ki... İnşallah bir sonrakilerde mumlarını birlikte üfleriz, pastanı birlikte yeriz, gece sarılarak uyuruz ve artık uzakta kelimesini hiç kullanmak zorunda kalmayız. Seni tarif etmeye kelimeler yetmiyor. Ama şunu çok rahat söyleyebilirimmm bebeğimmm İyi ki doğmuşsun. İyi ki benim sevgilim olmuşsun. İyi ki benim en yakın arkadaşım olmuşsun. İyi ki hayatıma gelmişsin. Ve her şeyden önemlisi... İyi ki benim kocamsın. Seni bugün dünden daha çok seviyorum. Yarın ise bugünden daha çok seveceğim. Nice yaşlara bebeğim... İyi ki doğdun.`,
    photos: [
        { name: 'Bebeklik Fotoğrafı', caption: '🍼 Başı böyle güzel' },
        { name: 'Üniversite Günleri', caption: '👨‍🎓 Gelecek parlak' },
        { name: 'İlk Buluşma', caption: '💑 İyi ki konuştuk' },
        { name: 'Tatil Anısı', caption: '🌴 Birlikte güzel' },
        { name: 'Eğlenceli Anlar', caption: '😂 Kahkahalarımız' },
        { name: 'Romantik Moment', caption: '💕 Seninle her an' },
        { name: 'Bugün', caption: '🎂 23 yaşındaki kocamız' }
    ]
};

let currentScreen = 0;
const screens = ['opening', 'envelope-screen', 'letter-screen', 'counter-screen', 'gallery-screen', 'memories-screen', 'forever-screen', 'final-screen'];

// ============================================
// Initialize Page
// ============================================
function init() {
    createStars();
    createFloatingHearts();
    setupEnvelopeInteraction();
    setupNavigation();
    setupMiniPlayer();
    startCountdown();
    
    // Auto-play: Show opening for 10 seconds then go to envelope
    setTimeout(() => {
        goToScreen(1);
    }, 10000);
}

// ============================================
// Stars Creation
// ============================================
function createStars() {
    document.querySelectorAll('.stars-container').forEach(container => {
        for (let i = 0; i < 100; i++) {
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
    document.querySelectorAll('.hearts-container').forEach(container => {
        // Create initial hearts
        for (let i = 0; i < 5; i++) {
            createHeart(container, i * 1000);
        }
        
        // Continuously create hearts
        setInterval(() => {
            createHeart(container);
        }, 2000);
    });
}

function createHeart(container, delay = 0) {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = (delay / 1000) + 's';
    heart.style.setProperty('--rotate', Math.random() * 360 + 'deg');
    container.appendChild(heart);
    
    setTimeout(() => heart.remove(), 6000 + delay);
}

// ============================================
// Envelope Interaction
// ============================================
function setupEnvelopeInteraction() {
    const envelope = document.getElementById('envelope');
    
    envelope.addEventListener('click', () => {
        envelope.classList.add('opened');
        playMusic();
        
        // Confetti effect
        createConfetti();
        
        // Go to letter after 2 seconds
        setTimeout(() => {
            goToScreen(2);
        }, 2000);
    });
}

// ============================================
// Create Confetti
// ============================================
function createConfetti() {
    const envelopeContainer = document.querySelector('.envelope-container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = ['#ff69b4', '#8b5fbf', '#ff1493'][Math.floor(Math.random() * 3)];
        confetti.style.borderRadius = '50%';
        
        const angle = (Math.PI * 2 * i) / 50;
        const velocity = 5 + Math.random() * 5;
        const tx = Math.cos(angle) * velocity * 100;
        const ty = Math.sin(angle) * velocity * 100;
        
        confetti.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        envelopeContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1000);
    }
}

// ============================================
// Music Player
// ============================================
function playMusic() {
    // Note: Replace with actual music URL when available
    console.log('🎵 Dolu Kadehi Ters Tut - 23 started');
}

// ============================================
// Letter Typewriter Effect
// ============================================
function displayLetter() {
    const letterText = document.getElementById('letterText');
    letterText.innerHTML = '';
    
    let index = 0;
    function type() {
        if (index < CONFIG.letter.length) {
            letterText.textContent += CONFIG.letter[index];
            index++;
            setTimeout(type, 10);
        }
    }
    
    type();
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
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    updateCounter();
    setInterval(updateCounter, 1000);
}

// ============================================
// Gallery Creation with 7 Photos
// ============================================
function createGallery() {
    const gallery = document.getElementById('galleryContainer');
    gallery.innerHTML = '';
    
    // Create placeholder for all 7 photos
    CONFIG.photos.forEach((photo, index) => {
        const polaroid = document.createElement('div');
        polaroid.classList.add('polaroid');
        
        // Random rotation for polaroid effect
        const rotation = (Math.random() - 0.5) * 15;
        polaroid.style.setProperty('--rotate', rotation + 'deg');
        polaroid.style.transform = `rotate(${rotation}deg)`;
        
        // Random position
        const randomX = Math.random() * (window.innerWidth - 250);
        const randomY = Math.random() * (window.innerHeight - 350);
        polaroid.style.left = randomX + 'px';
        polaroid.style.top = randomY + 'px';
        
        // Animation delay
        polaroid.style.animationDelay = (index * 0.3) + 's';
        
        // Create placeholder image
        const img = document.createElement('div');
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.background = `linear-gradient(135deg, hsl(${Math.random()*360}, 70%, 60%), hsl(${Math.random()*360}, 70%, 60%))`;
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.style.fontSize = '2rem';
        img.textContent = ['🍼', '👨‍🎓', '💑', '🌴', '😂', '💕', '🎂'][index];
        
        const caption = document.createElement('div');
        caption.classList.add('polaroid-caption');
        caption.textContent = photo.caption;
        
        polaroid.appendChild(img);
        polaroid.appendChild(caption);
        gallery.appendChild(polaroid);
        
        // Click to expand (optional)
        polaroid.addEventListener('click', (e) => {
            e.stopPropagation();
            polaroid.style.zIndex = 1000;
        });
    });
}

// ============================================
// Screen Navigation
// ============================================
function goToScreen(screenIndex) {
    // Hide all screens
    screens.forEach(screen => {
        document.getElementById(screen).classList.add('hidden');
    });
    
    // Show target screen
    currentScreen = screenIndex;
    document.getElementById(screens[screenIndex]).classList.remove('hidden');
    
    // Execute screen-specific actions
    switch(screenIndex) {
        case 2: // Letter screen
            displayLetter();
            setTimeout(() => goToScreen(3), 30000); // Auto advance after 30 seconds
            break;
        case 3: // Counter screen
            setTimeout(() => goToScreen(4), 10000); // Auto advance after 10 seconds
            break;
        case 4: // Gallery screen
            createGallery();
            setTimeout(() => goToScreen(5), 12000); // Auto advance after 12 seconds
            break;
        case 5: // Memories screen
            displayMemory();
            setTimeout(() => goToScreen(6), 10000); // Auto advance after 10 seconds
            break;
        case 6: // Forever screen
            createForeverEffect();
            setTimeout(() => goToScreen(7), 12000); // Auto advance after 12 seconds
            break;
        case 7: // Final screen
            displayFinal();
            break;
    }
}

// ============================================
// Memory Display
// ============================================
function displayMemory() {
    document.getElementById('memoryImage').innerHTML = `
        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #8b5fbf 0%, #a565d8 100%); display: flex; align-items: center; justify-content: center; font-size: 3rem;">
            👶
        </div>
    `;
}

// ============================================
// Forever Screen Effects
// ============================================
function createForeverEffect() {
    const forever = document.getElementById('foreverHeart');
    forever.classList.add('active');
    
    // Create fireworks
    createFireworks();
}

function createFireworks() {
    const container = document.getElementById('fireworks');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            
            const angle = (Math.PI * 2 * i) / 20;
            const distance = 150 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            firework.style.setProperty('--tx', tx + 'px');
            firework.style.setProperty('--ty', ty + 'px');
            firework.style.left = '200px';
            firework.style.top = '200px';
            firework.textContent = ['✨', '💫', '⭐', '💝'][Math.floor(Math.random() * 4)];
            firework.style.fontSize = '1.5rem';
            
            container.appendChild(firework);
            setTimeout(() => firework.remove(), 1500);
        }, i * 100);
    }
}

// ============================================
// Final Screen Display
// ============================================
function displayFinal() {
    const finalText = document.getElementById('finalText');
    const messages = [
        'Eğer bu satırı okuyorsan... demek ki sonuna kadar geldin.',
        'Tıpkı benim de hayatımın sonuna kadar senin yanında olmak istediğim gibi...',
        'Seni seçtim.',
        'Bugün da...',
        'Yarın da...',
        'Her zaman...',
        'Sonsuza Kadar Sen ❤️',
        '03.04.2025 ∞'
    ];
    
    let messageIndex = 0;
    finalText.innerHTML = '';
    
    function showMessage() {
        if (messageIndex < messages.length) {
            const p = document.createElement('p');
            p.textContent = messages[messageIndex];
            p.style.opacity = '0';
            p.style.animation = 'fadeInUp 0.8s ease forwards';
            finalText.appendChild(p);
            
            messageIndex++;
            setTimeout(showMessage, 3000);
        }
    }
    
    showMessage();
}

// ============================================
// Mini Player Setup
// ============================================
function setupMiniPlayer() {
    const player = document.querySelector('.mini-player');
    
    player.addEventListener('click', () => {
        console.log('🎵 Playing: Dolu Kadehi Ters Tut - 23');
        // Add music toggle logic here
    });
}

// ============================================
// Navigation Setup
// ============================================
function setupNavigation() {
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentScreen < screens.length - 1) {
            goToScreen(currentScreen + 1);
        }
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentScreen > 0) {
            goToScreen(currentScreen - 1);
        }
    });
    
    // Show navigation from letter screen onwards
    setTimeout(() => {
        document.getElementById('navigation').classList.remove('hidden');
    }, 10000);
}

// ============================================
// Start
// ============================================
window.addEventListener('DOMContentLoaded', init);