// ===== NAVBAR SCROLL EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// ===== PARTICLES SYSTEM =====
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        particlesContainer.appendChild(particle);
    }
});

// ===== SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(function(el) {
        observer.observe(el);
    });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Create mobile menu overlay
            let mobileMenu = document.querySelector('.mobile-menu');

            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.style.cssText = `
                    position: fixed;
                    top: 72px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255,255,255,0.98);
                    backdrop-filter: blur(20px);
                    z-index: 999;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                `;

                // Clone nav links
                const linksClone = navLinks.cloneNode(true);
                linksClone.style.cssText = 'flex-direction: column; gap: 20px; list-style: none;';
                linksClone.querySelectorAll('a').forEach(function(link) {
                    link.style.cssText = 'font-size: 1.2rem; color: var(--dark); text-decoration: none; font-weight: 600;';
                });

                // Clone CTA buttons
                const ctaClone = navCta.cloneNode(true);
                ctaClone.style.cssText = 'flex-direction: column; gap: 12px;';

                mobileMenu.appendChild(linksClone);
                mobileMenu.appendChild(ctaClone);
                document.body.appendChild(mobileMenu);

                // Close menu when clicking a link
                mobileMenu.querySelectorAll('a').forEach(function(link) {
                    link.addEventListener('click', function() {
                        mobileMenu.style.transform = 'translateX(100%)';
                    });
                });
            }

            // Toggle menu
            if (mobileMenu.style.transform === 'translateX(0px)') {
                mobileMenu.style.transform = 'translateX(100%)';
            } else {
                mobileMenu.style.transform = 'translateX(0px)';
            }
        });
    }
});

// ===== PARALLAX EFFECT FOR HERO =====
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const heroVisual = document.querySelector('.hero-visual');

    if (hero && heroVisual) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;

            if (scrolled < window.innerHeight) {
                heroVisual.style.transform = 'translateY(' + rate + 'px)';
            }
        });
    }
});

// ===== COUNTER ANIMATION FOR STATS =====
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.support-stat-number');

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;

                // Simple animation for text-based stats
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';

                setTimeout(function() {
                    el.style.transition = 'all 0.6s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 200);

                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(function(el) {
        counterObserver.observe(el);
    });
});

// ===== SOLUTION CARD HOVER EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    const solutionCards = document.querySelectorAll('.solution-card');

    solutionCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ===== STACK ITEM INTERACTION =====
document.addEventListener('DOMContentLoaded', function() {
    const stackItems = document.querySelectorAll('.stack-item');

    stackItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove active class from all items
            stackItems.forEach(function(i) {
                i.style.borderColor = 'var(--border)';
                i.style.boxShadow = 'none';
            });

            // Add active state to clicked item
            this.style.borderColor = 'var(--primary)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
});

// ===== INTEGRATION NODE INTERACTION =====
document.addEventListener('DOMContentLoaded', function() {
    const integrationNodes = document.querySelectorAll('.integration-node');

    integrationNodes.forEach(function(node) {
        node.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.zIndex = '20';
        });

        node.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });
});

// ===== SECURITY BADGE ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const securityBadges = document.querySelectorAll('.security-badge');

    securityBadges.forEach(function(badge, index) {
        badge.style.animationDelay = (index * 0.2) + 's';
        badge.style.animation = 'fadeInUp 0.6s ease ' + (index * 0.2) + 's both';
    });
});

// ===== TYPING EFFECT FOR HERO TITLE =====
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // The title is already rendered, but we can add a subtle glow effect
    const highlight = heroTitle.querySelector('.highlight');
    if (highlight) {
        setInterval(function() {
            highlight.style.textShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
            setTimeout(function() {
                highlight.style.textShadow = 'none';
            }, 1000);
        }, 3000);
    }
});

// ===== PERFORMANCE: LAZY LOAD IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
    // This is a placeholder for lazy loading if images were added
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    }
});

// ===== SCROLL PROGRESS INDICATOR =====
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.style.transform = 'translateX(100%)';
        }
    }
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log('%c Zoho ERP Clone ', 'background: linear-gradient(135deg, #0066cc, #00a3e0); color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Built with modern web technologies ', 'color: #0066cc; font-size: 14px;');

























window.addEventListener('load', function() {
            const container = document.getElementById('globe-container');
            if(!container) return;

            const scene = new THREE.Scene();
            
            const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.set(0, 0, 6);

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Accessing OrbitControls instance explicitly via the global instantiation hook
            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableZoom = false;
            controls.enablePan = false;
            controls.rotateSpeed = 0.3;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.5; 

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);

            const globeGroup = new THREE.Group();
            scene.add(globeGroup);

            // Generate Points Geometry 
            const count = 4000;
            const radius = 2.2;
            const positions = new Float32Array(count * 3);
            for (let i = 0; i < count; i++) {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i * 3 + 2] = radius * Math.cos(phi);
            }
            const pointsGeometry = new THREE.BufferGeometry();
            pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const pointsMaterial = new THREE.PointsMaterial({
                size: 0.035,
                color: new THREE.Color("#226EB4"),
                transparent: true,
                opacity: 0.85,
                sizeAttenuation: true,
                blending: THREE.AdditiveBlending
            });
            globeGroup.add(new THREE.Points(pointsGeometry, pointsMaterial));

            // Generate Grid Matrix
            const gridPoints = [];
            const gridRadius = 2.25;
            for (let lat = -80; lat <= 80; lat += 20) {
                const phi = (90 - lat) * (Math.PI / 180);
                for (let i = 0; i <= 64; i++) {
                    const theta = (i / 64) * Math.PI * 2;
                    gridPoints.push(gridRadius * Math.sin(phi) * Math.cos(theta), gridRadius * Math.cos(phi), gridRadius * Math.sin(phi) * Math.sin(theta));
                }
            }
            for (let lon = 0; lon < 360; lon += 30) {
                const theta = lon * (Math.PI / 180);
                for (let i = 0; i <= 64; i++) {
                    const phi = (i / 64) * Math.PI;
                    gridPoints.push(gridRadius * Math.sin(phi) * Math.cos(theta), gridRadius * Math.cos(phi), gridRadius * Math.sin(phi) * Math.sin(theta));
                }
            }
            const gridGeometry = new THREE.BufferGeometry();
            gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(gridPoints, 3));
            const gridMaterial = new THREE.LineBasicMaterial({ color: new THREE.Color("#226EB4"), transparent: true, opacity: 0.15 });
            globeGroup.add(new THREE.LineSegments(gridGeometry, gridMaterial));

            // Generate Interconnection Vector Arcs
            const arcsData = [
                { from: [0.5, 0.3], to: [0.8, 0.7] },
                { from: [0.2, 0.6], to: [0.9, 0.2] },
                { from: [0.7, 0.1], to: [0.3, 0.9] },
                { from: [0.1, 0.4], to: [0.6, 0.8] },
                { from: [0.4, 0.8], to: [0.9, 0.5] },
                { from: [0.6, 0.2], to: [0.1, 0.7] },
            ];
            arcsData.forEach(({ from, to }) => {
                const theta1 = from[0] * Math.PI * 2;
                const phi1 = Math.acos(2 * from[1] - 1);
                const theta2 = to[0] * Math.PI * 2;
                const phi2 = Math.acos(2 * to[1] - 1);

                const p1 = new THREE.Vector3(gridRadius * Math.sin(phi1) * Math.cos(theta1), gridRadius * Math.sin(phi1) * Math.sin(theta1), gridRadius * Math.cos(phi1));
                const p2 = new THREE.Vector3(gridRadius * Math.sin(phi2) * Math.cos(theta2), gridRadius * Math.sin(phi2) * Math.sin(theta2), gridRadius * Math.cos(phi2));
                const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
                mid.normalize().multiplyScalar(gridRadius + p1.distanceTo(p2) * 0.3);

                const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
                const curvePoints = curve.getPoints(50);
                const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
                const arcMat = new THREE.LineBasicMaterial({ color: new THREE.Color("#226EB4"), transparent: true, opacity: 0.3 });
                globeGroup.add(new THREE.Line(arcGeo, arcMat));

                const lastPoint = curvePoints[curvePoints.length - 1];
                const dotMesh = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color("#60a5fa") }));
                dotMesh.position.set(lastPoint.x, lastPoint.y, lastPoint.z);
                globeGroup.add(dotMesh);
            });

            // Run Viewport Frame Rendering Loop
            const clock = new THREE.Clock();
            function animate() {
                requestAnimationFrame(animate);
                globeGroup.rotation.y = clock.getElapsedTime() * 0.05;
                controls.update();
                renderer.render(scene, camera);
            }
            animate();

            // Resize Engine Dynamic Listeners
            window.addEventListener('resize', () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        });