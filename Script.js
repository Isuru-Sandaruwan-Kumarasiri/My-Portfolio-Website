// Loading Screen
        window.addEventListener('load', function() {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.style.opacity = '0';
                setTimeout(() => {
                    loading.style.display = 'none';
                }, 500);
            }, 1000);
        });

        // Create Stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 150;

            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                starsContainer.appendChild(star);
            }
        }

        // Scroll Indicator
        function updateScrollIndicator() {
            const scrollIndicator = document.getElementById('scroll-indicator');
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollIndicator.style.width = scrollPercent + '%';
        }

        // Navbar Scroll Effect
        function handleNavbarScroll() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Scroll Animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Active Navigation
        function updateActiveNavigation() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        }

        // Scroll to Top Button
        function handleScrollToTop() {
            const scrollTopBtn = document.getElementById('scroll-top');
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }

        // Mobile Menu
        function initializeMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMenu = document.getElementById('close-menu');
            const menuLinks = mobileMenu.querySelectorAll('a');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('active');
            });

            closeMenu.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });

            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                }
            });
        }

        // Blog Carousel
        function initializeBlogCarousel() {
            const carousel = document.getElementById('blog-carousel');
            const prevBtn = document.getElementById('blog-prev');
            const nextBtn = document.getElementById('blog-next');

            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: -320,
                    behavior: 'smooth'
                });
            });

            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: 320,
                    behavior: 'smooth'
                });
            });
        }

        // Contact Form
        function initializeContactForm() {
            const form = document.getElementById('contact-form');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

                // Simple validation
                if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                }

                // Show success message (in real implementation, you would send data to server)
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            });
        }

        // Download Resume Function
        function downloadResume() {
           
           const link = document.createElement('a');
           link.href = './assets/documents/mycv.pdf';
           link.download = 'Isuru_Sandaruwan_Resume.pdf'; // <-- customize file name
           document.body.appendChild(link);
           link.click();
           document.body.removeChild(link);


        }

        // Smooth Scrolling for Navigation Links
        function initializeSmoothScrolling() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const navHeight = document.getElementById('navbar').offsetHeight;
                        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // Scroll to Top Function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Initialize Everything
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            initializeMobileMenu();
            initializeBlogCarousel();
            initializeContactForm();
            initializeSmoothScrolling();
            
            // Add scroll to top button functionality
            document.getElementById('scroll-top').addEventListener('click', scrollToTop);
            
            // Handle scroll events
            window.addEventListener('scroll', function() {
                updateScrollIndicator();
                handleNavbarScroll();
                handleScrollAnimations();
                updateActiveNavigation();
                handleScrollToTop();
            });

            // Trigger initial scroll animations
            handleScrollAnimations();
        });

        // Typewriter Effect
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function typing() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typing, speed);
                }
            }
            typing();
        }

        // Initialize typewriter effect when page loads
        window.addEventListener('load', function() {
            setTimeout(() => {
                const typewriterElement = document.querySelector('.typewriter');
                if (typewriterElement) {
                    typeWriter(typewriterElement, 'Data Scientist', 150);
                }
            }, 1500);
        });

        // Parallax Effect for Home Section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.particle');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Add hover effects to cards
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card-hover');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Add intersection observer for better scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => observer.observe(el));
        });

        // Add some interactive elements
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            particles.forEach((particle, index) => {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;
                
                const deltaX = mouseX - particleX;
                const deltaY = mouseY - particleY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                
                if (distance < 100) {
                    const angle = Math.atan2(deltaY, deltaX);
                    const force = (100 - distance) / 100;
                    const moveX = Math.cos(angle) * force * 10;
                    const moveY = Math.sin(angle) * force * 10;
                    
                    particle.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
                } else {
                    particle.style.transform = 'translate(0px, 0px)';
                }
            });
        });