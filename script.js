document.addEventListener('DOMContentLoaded', function() {
    // --- Kode Fade-in ---
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // --- Data dan Fungsi Terjemahan ---
    const translations = {
        "id": {
            "org-name-1": "BADAN LEGISLATIF MAHASISWA",
            "org-name-2": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
            "nav-home": "Beranda",
            "nav-about": "Tentang Kami",
            "nav-vision": "Visi & Misi",
            "nav-contact": "Kontak",
            "lang-indonesia": "Indonesia",
            "lang-english": "English",
            "hero-heading": "Selamat Datang di Badan Legislatif Mahasiswa ITS",
            "hero-subtext": "Lembaga legislatif tertinggi di Keluarga Mahasiswa ITS.",
            "cta-learn-more": "Pelajari Lebih Lanjut",
            "cta-view-cabinet": "Lihat Kabinet",
            "modal-heading": "Selamat Datang di Kabinet Asvakarana!",
            "modal-text": "Silakan gulir ke bawah untuk melihat informasi lebih lanjut mengenai visi dan misi kami.",
            "legis-heading": "Produk Legislasi",
            "legis-1-title": "Musyawarah Besar V ITS",
            "legis-2-title": "Undang-Undang KM ITS",
            "legis-3-title": "Ketetapan MTT ITS",
            "legis-4-title": "Jaring Aspirasi Terpadu",
            "legis-5-title": "SOP Kerja Sama / Visitasi",
            "legis-6-title": "Contact Person",
            "about-heading": "Informasi Umum BLM ITS",
            "about-text": "Badan Legislatif Mahasiswa Institut Teknologi Sepuluh Nopember (BLM ITS) adalah lembaga legislatif tertinggi di Keluarga Mahasiswa ITS yang bersifat representatif terhadap seluruh mahasiswa ITS. BLM ITS terdiri atas Dewan Mahasiswa dan Senat Mahasiswa. Secara struktural, BLM ITS terdiri dari satu Ketua Umum dan dua Sekretaris Jenderal yang berfungsi sebagai koordinator dan anggota-anggota. Ketua Umum ini berasal dari Dewan Mahasiswa dan dua Sekretaris Jenderal masing-masing berasal dari Senat Mahasiswa dan Dewan Mahasiswa. Berdasarkan Buku KDKM dan HDPSM MUBES V ITS, BAB III tentang Legislatif Mahasiswa pasal 25, BLM ITS bertugas:",
            "cta-read-more": "Baca Selengkapnya",
            "task-1": "Melakukan kontrol terhadap kinerja BEM ITS.",
            "task-2": "Melakukan penjaringan aspirasi.",
            "task-3": "Memasyarakatkan Ketetapan MUBES ITS.",
            "task-4": "Mengajukan RUU kepada BEM ITS.",
            "task-5": "Melakukan penjaringan dan uji kelayakan kandidat anggota Mahkamah Mahasiswa.",
            "task-6": "Melakukan penjaringan dan uji kelayakan kandidat anggota Komisi Pemilihan Umum dan Badan Pemeriksa Dana Kampanye Pemilihan Umum ITS.",
            "task-7": "Menyelenggarakan Musyawarah Mahasiswa ITS dan Musyawarah Tingkat Tinggi ITS.",
            "title-about": "Tentang Kami - BLM ITS",
            "vision-mission-heading": "Visi & Misi Kabinet Asvakarana",
            "vision-heading": "Visi",
            "vision-text": "Mewujudkan BLM ITS yang iklusif dan profesional, serta berintegritas untuk mendukung kemajuan KM ITS yang berkelanjutan.",
            "mission-heading": "Misi",
            "mission1-title": "1. Eskalasi Legislasi",
            "mission1-text": "Prioritas utama untuk memastikan setiap produk hukum sesuai kebutuhan mahasiswa. Mengoptimalkan Program Legislasi ITS sebagai panduan utama.",
            "mission2-title": "2. Optimalisasi Aspirasi",
            "mission2-text": "Membangun sistem penjaringan aspirasi yang efektif dan sistematis, serta meningkatkan partisipasi aktif mahasiswa.",
            "mission3-title": "3. Efektivitas Kontrol",
            "mission3-text": "Mendorong fungsi kontrol untuk memastikan pelaksanaan program kerja BEM ITS sesuai Garis Besar Haluan Kerja melalui evaluasi berkala.",
            "mission4-title": "4. Sinergi dan Kolaborasi",
            "mission4-text": "Meningkatkan efektivitas melalui ruang diskusi partisipatif untuk menjembatani perbedaan pandangan dan menciptakan kesinergisan KM ITS.",
            "mission5-title": "5. Peningkatan Mutu Internal BLM ITS",
            "mission5-text": "Mengembangkan internal organisasi dengan menyusun SOP internal yang jelas untuk meningkatkan kompetensi dan profesionalisme.",
            "title-vision": "Visi & Misi - BLM ITS",
            "contact-heading": "Hubungi Kami",
            "contact-text": "Anda dapat menghubungi kami melalui media sosial atau email untuk menyampaikan aspirasi atau pertanyaan.",
            "contact-email": "Email:",
            "contact-ig": "Instagram:",
            "contact-wa": "WhatsApp:",
            "title-contact": "Kontak - BLM ITS",
            "footer-col1-heading": "Badan Legislatif Mahasiswa ITS",
            "footer-address": "SCC ITS lt. 2\nJalan Raya ITS Campus ITS\nSukolilo, Surabaya\nJawa Timur 60111",
            "footer-email-label": "Email:",
            "footer-col2-heading": "Tautan Cepat",
            "footer-link-vm": "Visi & Misi",
            "footer-link-about": "Tentang Kami",
            "footer-link-products": "Produk Legislasi",
            "footer-link-aspirations": "Aspirasi Mahasiswa",
            "footer-col3-heading": "Hubungi Kami",
            "footer-link-wa": "WhatsApp",
            "footer-link-ig": "Instagram",
            "footer-copyright": "Hak Cipta © 2025 BLM ITS. All Rights Reserved."
        },
        "en": {
            "org-name-1": "STUDENT LEGISLATIVE BOARD",
            "org-name-2": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
            "nav-home": "Home",
            "nav-about": "About Us",
            "nav-vision": "Vision & Mission",
            "nav-contact": "Contact",
            "lang-indonesia": "Indonesian",
            "lang-english": "English",
            "hero-heading": "Welcome to the Student Legislative Board of ITS",
            "hero-subtext": "The highest legislative body in the ITS Student Family.",
            "cta-learn-more": "Learn More",
            "cta-view-cabinet": "View Cabinet",
            "modal-heading": "Welcome to the Asvakarana Cabinet!",
            "modal-text": "Please scroll down to see more information about our vision and mission.",
            "legis-heading": "Legislative Products",
            "legis-1-title": "5th Great Conference of ITS",
            "legis-2-title": "ITS Student Family Law",
            "legis-3-title": "MTT ITS Decree",
            "legis-4-title": "Integrated Aspiration Network",
            "legis-5-title": "SOP of Collaboration / Visitation",
            "legis-6-title": "Contact Person",
            "about-heading": "General Information about BLM ITS",
            "about-text": "The Student Legislative Board of Institut Teknologi Sepuluh Nopember (BLM ITS) is the highest legislative body in the ITS Student Family that is representative of all ITS students. BLM ITS consists of the Student Board and the Student Senate. Structurally, BLM ITS consists of one General Chairman and two Secretary Generals who serve as coordinators and members. The General Chairman is from the Student Board and the two Secretary Generals are from the Student Senate and the Student Board, respectively. Based on the KDKM Book and the HDPSM MUBES V ITS, Chapter III on Student Legislature, Article 25, BLM ITS is tasked with:",
            "cta-read-more": "Read More",
            "task-1": "Controlling the performance of the ITS Student Executive Board (BEM).",
            "task-2": "Gathering student aspirations.",
            "task-3": "Socializing the decrees of the ITS Student Conference (MUBES).",
            "task-4": "Proposing draft laws to the BEM ITS.",
            "task-5": "Screening and conducting fit and proper tests for candidate members of the Student Court.",
            "task-6": "Screening and conducting fit and proper tests for candidate members of the General Election Commission and the Election Campaign Fund Audit Board of the ITS General Election.",
            "task-7": "Organizing the ITS Student Conference and the ITS High-Level Conference.",
            "title-about": "About Us - BLM ITS",
            "vision-mission-heading": "Vision & Mission of Asvakarana Cabinet",
            "vision-heading": "Vision",
            "vision-text": "Realizing an inclusive and professional BLM ITS, with integrity to support the sustainable progress of the ITS Student Family.",
            "mission-heading": "Mission",
            "mission1-title": "1. Escalation of Legislation",
            "mission1-text": "The primary priority is to ensure that every legal product is in accordance with student needs and can be implemented effectively. Through this escalation, BLM ITS can optimize the ITS Legislative Program as the main guide in formulating a regulation.",
            "mission2-title": "2. Optimization of Aspirations",
            "mission2-text": "In an effort to improve connectivity with students, BLM ITS is committed to building a more effective and systematic aspiration gathering system. In addition, student involvement must always be considered from aspiration gathering to the implementation of regulations or policies to increase active student participation and ensure harmony in the management of aspirations.",
            "mission3-title": "3. Efektivitas Kontrol",
            "mission3-text": "The control function carried out by BLM ITS must be encouraged again to ensure the implementation of BEM ITS work programs is in accordance with the Broad Outlines of Work. By compiling a matrix for evaluating the Broad Outlines of Work, BEM ITS performance evaluation needs to be carried out periodically. The results of this evaluation will then be integrated into a constructive recommendation that supports the improvement of work programs.",
            "mission4-title": "4. Sinergi dan Kolaborasi",
            "mission4-text": "Strong synergy and collaboration are very important to increase the effectiveness of BLM ITS. With participatory discussion forums, BLM ITS can strive to bridge differences in student views to create the synergy of the ITS Student Family.",
            "mission5-title": "5. Peningkatan Mutu Internal BLM ITS",
            "mission5-text": "Internal organizational development is also a priority in increasing the competence and professionalism of the layers of BLM ITS. There needs to be a clear internal SOP to ensure effective task division and measurable performance evaluation, so that BLM ITS can function optimally.",
            "title-vision": "Vision & Mission - BLM ITS",
            "contact-heading": "Contact Us",
            "contact-text": "You can contact us through social media or email to submit aspirations or questions.",
            "contact-email": "Email:",
            "contact-ig": "Instagram:",
            "contact-wa": "WhatsApp:",
            "title-contact": "Contact - BLM ITS",
            "footer-col1-heading": "Student Legislative Board of ITS",
            "footer-address": "SCC ITS 2nd Floor\nJalan Raya ITS Campus\nSukolilo, Surabaya\nEast Java 60111",
            "footer-email-label": "Email:",
            "footer-col2-heading": "Quick Links",
            "footer-link-vm": "Vision & Mission",
            "footer-link-about": "About Us",
            "footer-link-products": "Legislative Products",
            "footer-link-aspirations": "Student Aspirations",
            "footer-col3-heading": "Contact Us",
            "footer-link-wa": "WhatsApp",
            "footer-link-ig": "Instagram",
            "footer-copyright": "Copyright © 2025 BLM ITS. All Rights Reserved."
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-key');
            if (translations[lang][titleKey]) {
                titleElement.textContent = translations[lang][titleKey];
            }
        }
    }

    // --- Dropdown Bahasa ---
    const langDisplay = document.querySelector('.lang-display');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentFlag = document.getElementById('current-flag');
    const currentLangCode = document.getElementById('current-lang-code');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Toggle dropdown saat .lang-display diklik
    if (langDisplay) {
        langDisplay.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });
    }

    // Pilih bahasa dari dropdown
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            const selectedImg = this.querySelector('img');

            if (selectedImg) {
                currentFlag.src = selectedImg.src;
                currentFlag.alt = selectedImg.alt;
                localStorage.setItem("flag", selectedImg.src);
            }
            currentLangCode.textContent = selectedLang.toUpperCase();

            // Terapkan terjemahan
            setLanguage(selectedLang);

            // Simpan preferensi
            localStorage.setItem("lang", selectedLang);

            // Tutup dropdown
            langDropdown.classList.remove('show');
        });
    });

    // Klik di luar area → sembunyikan dropdown
    window.addEventListener('click', (e) => {
        if (!langDisplay.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('show');
        }
    });

    // Set bahasa saat reload halaman
    const savedLang = localStorage.getItem("lang");
    const savedFlag = localStorage.getItem("flag");
    if (savedLang && savedFlag) {
        currentFlag.src = savedFlag;
        currentLangCode.textContent = savedLang.toUpperCase();
        setLanguage(savedLang);
    } else {
        setLanguage('id'); // default
    }

    // --- Kode untuk pop-up modal ---
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close-button")[0];

    // Cek apakah elemen ada sebelum menambahkan event listener
    if (btn) {
        btn.addEventListener('click', function() {
            if (modal) {
                modal.style.display = "block";
            }
        });
    }
    if (span) {
        span.addEventListener('click', function() {
            if (modal) {
                modal.style.display = "none";
            }
        });
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    // --- Kode untuk Carousel Manual & Otomatis ---
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide-page');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const totalPages = slides.length;
    let slideIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        carouselTrack.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            slideIndex++;
            if (slideIndex >= totalPages) {
                slideIndex = 0;
            }
            updateCarousel();
        }, 5000);
    }
    
    // Fungsi geser manual
    if(nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            slideIndex++;
            if (slideIndex >= totalPages) {
                slideIndex = 0;
            }
            updateCarousel();
            resetAutoSlide();
        });

        prevButton.addEventListener('click', () => {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = totalPages - 1;
            }
            updateCarousel();
            resetAutoSlide();
        });
    }

    // Mulai geser otomatis saat halaman dimuat
    if (carouselTrack) {
        resetAutoSlide();
    }
});