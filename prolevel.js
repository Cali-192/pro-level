// --- 1. Stats Counter Logic ---
const stats = document.querySelectorAll('.stat-num');
const statsSection = document.querySelector('.stats');

const startCounter = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stats.forEach(stat => {
                const target = +stat.getAttribute('data-val');
                const count = +stat.innerText;
                const speed = 200; // Sa më e vogël, aq më shpejt
                
                const updateCount = () => {
                    const current = +stat.innerText;
                    const increment = target / speed;

                    if (current < target) {
                        stat.innerText = Math.ceil(current + increment);
                        setTimeout(updateCount, 10);
                    } else {
                        stat.innerText = target + "+";
                    }
                };
                updateCount();
            });
            // Ndalo vëzhgimin pasi të fillojë numërimi një herë
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(startCounter, {
    threshold: 0.5 // Fillon kur 50% e seksionit shihet në ekran
});

observer.observe(statsSection);


// --- 2. 3D Mouse Parallax Effect ---
const grid = document.querySelector('.grid-overlay');

document.addEventListener('mousemove', (e) => {
    // Marrja e pozicionit të miut
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;

    // Aplikimi i transformimit për efektin 3D
    // Ruajmë rotacionin X prej 60 gradësh që kemi në CSS dhe shtojmë lëvizjen e miut
    grid.style.transform = `perspective(500px) rotateX(60deg) rotateY(${x}deg) translateY(${y - 100}px)`;
});


// --- 3. Smooth Scroll për Navigimin ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log("PRO-LEVEL Script i ngarkuar me sukses! 🚀");

// --- BMI Calculator Logic ---
const calculateBtn = document.getElementById('calculate-bmi');
const resultCard = document.getElementById('bmi-result-card');
const bmiValue = document.getElementById('bmi-value');
const bmiStatus = document.getElementById('bmi-status');
const proAdvice = document.getElementById('pro-advice');
const adviceBtn = document.getElementById('advice-btn');

calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Shndërrimi në metra

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        bmiValue.innerText = bmi;

        // Shfaq kartelën e rezultatit me animacion
        resultCard.classList.remove('hidden');

        // Logjika e këshillave PRO e përshtatur me 3 paketat e reja
        if (bmi < 18.5) {
            bmiStatus.innerText = "Nën peshë (Ektomorf)";
            bmiStatus.style.color = "#ffcc00";
            proAdvice.innerText = "Këshilla PRO: Ti je në fazën perfekte për një 'Bulk' serioz. Trupi yt ka nevojë për tepricë kalorike shkencore dhe stërvitje me pesha të rënda për të shtuar masë të pastër.";
            adviceBtn.innerText = "Merre PRO-BULK GUIDE";
            adviceBtn.href = "#programs";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiStatus.innerText = "Normal (Atletik)";
            bmiStatus.style.color = "var(--neon-lime)";
            proAdvice.innerText = "Këshilla PRO: Je në formë të shkëlqyer fizike. Koha për t'u fokusuar maksimalisht në performancë, shpejtësi, reflekse dhe eksplozivitet elitar.";
            adviceBtn.innerText = "Shiko GOALKEEPER PRO";
            adviceBtn.href = "#programs";
        } else {
            bmiStatus.innerText = "Mbi peshë (Duhet Definicion)";
            bmiStatus.style.color = "#ff4444";
            proAdvice.innerText = "Këshilla PRO: Rekomandojmë fokus absolut në deficit kalorik shkencor për të shkrirë dhjamin e tepërt duke ruajtur në maksimum masën muskulore.";
            adviceBtn.innerText = "Shiko PRO-SHRED GUIDE"; // Ndryshuar për t'u lidhur me paketën e re
            adviceBtn.href = "#programs";
        }

        // Scroll smooth te rezultati në celular
        if (window.innerWidth < 768) {
            resultCard.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        alert("Ju lutem plotësoni të dhënat saktë!");
    }
});
// --- Preloader Logic (Performance Optimized) ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // E lëmë një vonesë të vogël artificiale prej 400ms që përdoruesi ta shijojë animacionin profesional, pastaj e zhdukim
    setTimeout(() => {
        preloader.classList.add('fade-out');
        
        // Pasi përfundon tranzicioni i CSS (0.6s), e heqim komplet nga DOM për të mos harxhuar memorie
        setTimeout(() => {
            preloader.remove();
        }, 600);
        
    }, 400); 
});

// --- 3-Step Process Animation (Reveal Effect) ---
const processSteps = document.querySelectorAll('.process-step');
const processSection = document.querySelector('.process-section');

const revealSteps = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            processSteps.forEach((step, index) => {
                // Shton klasën me një vonesë (delay) prej 200ms për çdo kartë pasardhëse
                setTimeout(() => {
                    step.classList.add('revealed');
                }, index * 200);
            });
            // Ndalo vëzhgimin pasi u shfaqën
            observer.unobserve(entry.target);
        }
    });
};

const processObserver = new IntersectionObserver(revealSteps, {
    threshold: 0.2 // Fillon kur 20% e seksionit hyn në ekran
});

if (processSection) {
    processObserver.observe(processSection);
}

// --- Guarantee Box Glow Trigger ---
const guaranteeBox = document.getElementById('guarantee-trigger');

const triggerGlow = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Shton efektin e dritës kur hyn në ekran
            guaranteeBox.classList.add('active-glow');
            // Ndalo vëzhgimin pasi u ndez një herë
            observer.unobserve(entry.target);
        }
    });
};

const guaranteeObserver = new IntersectionObserver(triggerGlow, {
    threshold: 0.4 // Aktivizohet kur 40% e kutisë shihet në ekran
});

if (guaranteeBox) {
    guaranteeObserver.observe(guaranteeBox);
}

// --- Mobile Sticky Bar Logic ---
const stickyBar = document.getElementById('mobile-sticky-bar');

if (window.innerWidth <= 768) {
    window.addEventListener('scroll', () => {
        // Nëse përdoruesi ka bërë scroll më shumë se 300px poshtë
        if (window.scrollY > 300) {
            stickyBar.classList.add('show-bar');
        } else {
            stickyBar.classList.remove('show-bar');
        }
    });
}

// --- Pricing Toggle Logic ---
let isQuarterly = false;

function togglePricing() {
    const toggle = document.querySelector('.pricing-toggle');
    const labelMonthly = document.getElementById('label-monthly');
    const labelQuarterly = document.getElementById('label-quarterly');
    const priceElements = document.querySelectorAll('.price-value');
    
    isQuarterly = !isQuarterly;
    
    // Ndryshimi vizual i butonit dhe labelave
    toggle.classList.toggle('yearly-active', isQuarterly);
    labelMonthly.classList.toggle('active', !isQuarterly);
    labelQuarterly.classList.toggle('active', isQuarterly);
    
    // Ndryshimi i numrave me animacion
    priceElements.forEach(price => {
        price.classList.add('pop-effect');
        
        setTimeout(() => {
            if (isQuarterly) {
                price.innerText = price.getAttribute('data-quarterly');
                // Ndryshon periudhën nëse do, p.sh: / 3 muaj
                const periodId = price.id.replace('price', 'period');
                document.getElementById(periodId).innerText = "/ 3 muaj";
            } else {
                price.innerText = price.getAttribute('data-monthly');
                const periodId = price.id.replace('price', 'period');
                document.getElementById(periodId).innerText = "/ muaj";
            }
            
            setTimeout(() => {
                price.classList.remove('pop-effect');
            }, 100);
        }, 150);
    });
}

// --- Global UI Polish: Scroll Progress & Back To Top ---
const progressBar = document.getElementById('scroll-progress-bar');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {     // 1. Kalkulimi i Progresit të Scroll-it
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
});

// --- Form Redirect to WhatsApp Logic ---
function sendToWhatsApp(event) {
    event.preventDefault(); // Ndalon rifreskimin e faqes

    // Kapja e vlerave nga inputet
    const name = document.getElementById('client-name').value;
    const weight = document.getElementById('client-weight').value;
    const goal = document.getElementById('client-goal').value;

    // Numri yt i telefonit (Shto numrin tënd pa shenjën + në fillim, p.sh. 38344XXXXXX)
    const phoneNumber = "38343910849"; 

    // Strukturimi i mesazhit profesional që do të pranosh në WhatsApp
    const message = `*APLIKIM I RI - PRO-LEVEL*%0A` +
                    `----------------------------%0A` +
                    `*Emri:* ${encodeURIComponent(name)}%0A` +
                    `*Pesha:* ${encodeURIComponent(weight)} KG%0A` +
                    `*Programi:* ${encodeURIComponent(goal)}%0A` +
                    `----------------------------%0A` +
                    `_Dërguar automatikisht nga uebsajti PRO-LEVEL._`;

    // Krijimi i URL-së së plotë të WhatsApp-it
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Hapja e bisedës në një dritare të re
    window.open(whatsappURL, '_blank');
}

// --- FAQ Accordion Smooth Logic ---
function toggleFaq(button) {
    // Gjejmë div-in prind (.faq-item) të këtij butoni
    const faqItem = button.parentElement;
    // Gjejmë div-in pasardhës (.faq-answer) që mban tekstin
    const faqAnswer = button.nextElementSibling;
    
    // Kontrollojmë nëse ky bllok është aktualisht i hapur
    const isOpen = faqItem.classList.contains('faq-active');

    // Kjo pjesë i mbyll automatikisht të gjitha pyetjet e tjera kur ti klikon një të re
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('faq-active');
        const answer = item.querySelector('.faq-answer');
        if (answer) {
            answer.style.maxHeight = null;
        }
    });

    // Nëse blloku nuk ishte i hapur, e hapim tani duke llogaritur lartësinë dinamike
    if (!isOpen) {
        faqItem.classList.add('faq-active');
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
}

    // Nis ciklin: njoftimi i parë dal pas 3 sekondave, të tjerët çdo 12 sekonda
    // --- LIVE SALES TOAST LOGIC (UNIVERSAL) ---
(function() {
    const container = document.getElementById('sales-toast');
    const textElement = document.getElementById('toast-text');

    // Nëse elementet nuk ekzistojnë në HTML, kodi ndalon këtu pa dhënë error
    if (!container || !textElement) return;

    const names = [
        "Liridoni nga Prishtina", 
        "Arbi nga Mitrovica", 
        "Dardani nga Gjilani", 
        "Eroni nga Skenderaj", 
        "Besarti nga Peja", 
        "Valoni nga Ferizaj", 
        "Iliri nga Prizreni"
    ];
    
    const programs = ["PRO-BULK GUIDE", "GOALKEEPER PRO"];

    function triggerToast() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomProgram = programs[Math.floor(Math.random() * programs.length)];

        // Injektojmë përmbajtjen e re dinamike
        textElement.innerHTML = `<strong>${randomName}</strong> sapo bleu <strong>${randomProgram}</strong>`;

        // Shfaqim toast-in duke shtuar klasën CSS
        container.classList.add('toast-show');

        // Pas 5 sekondave e fshehim përsëri nën ekran
        setTimeout(() => {
            container.classList.remove('toast-show');
        }, 5000);
    }

    // Nis ciklin: njoftimi i parë del pas 3 sekondave, të tjerët çdo 14 sekonda
    setTimeout(triggerToast, 3000);
    setInterval(triggerToast, 14000);
})();

// --- PRO-LEVEL Counter Animation Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 60; // Sa më i vogël numri, aq më shpejt lëvizin numrat

    const startCounter = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Llogaritja e hapit të rritjes (për 100 rritet më shpejt, për 1 rritet saktë)
            const increment = target / speed;

            if (count < target) {
                // Rrit numrin dhe sigurohu që mos të nxjerrë dhjetore të gjata
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 25); // Koha në milisekonda mes çdo lëvizjeje
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    // Intersection Observer: E ndez animacionin VETËM kur klienti e sheh seksionin
    const observerOptions = {
        root: null, // Përdor viewport-in e ekranit
        threshold: 0.4 // Animohet kur 40% e seksionit është e dukshme
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                startCounter(counter);
                observer.unobserve(counter); // E ndalon vëzhgimin që mos të animohet përsëri kur ngjitet lart
            }
        });
    }, observerOptions);

    // Vendos vëzhguesin mbi çdo element me klasën counter
    counters.forEach(counter => {
        observer.observe(counter);
    });
});