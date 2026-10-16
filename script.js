(() => {
    'use strict';

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // Dynamic year and compact reading progress bar.
    const year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());
    const progressBar = $('#reading-progress-bar');
    const header = $('.site-header');
    let scrollTicking = false;
    const updateScrollUI = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 16);
        scrollTicking = false;
    };
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(updateScrollUI);
            scrollTicking = true;
        }
    }, { passive: true });
    updateScrollUI();

    // Small-screen navigation, usable with keyboard and touch.
    const menuToggle = $('.menu-toggle');
    const primaryNav = $('#primary-nav');
    const closeMenu = () => {
        if (!menuToggle || !primaryNav) return;
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
        primaryNav.classList.remove('is-open');
    };
    if (menuToggle && primaryNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
            primaryNav.classList.toggle('is-open', !isOpen);
        });
        $$('a', primaryNav).forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
        document.addEventListener('click', event => {
            if (primaryNav.classList.contains('is-open') && !primaryNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
        });
    }

    // Draw the process timeline progressively while the section scrolls through view.
    const processSection = $('.process');
    const processRail = $('.process-rail');
    const processDots = $$('.process-rail-dot');
    const processSteps = $$('[data-process-step]');
    let processFrame = 0;
    const updateProcessTimeline = () => {
        processFrame = 0;
        if (!processSection || !processRail) return;
        const rect = processSection.getBoundingClientRect();
        const viewport = Math.max(1, window.innerHeight || 1);
        const startAnchor = viewport * .78;
        const endAnchor = viewport * .28;
        const fullTravel = Math.max(1, rect.height + startAnchor - endAnchor);
        const progress = Math.max(0, Math.min(1, (startAnchor - rect.top) / fullTravel));
        processRail.style.setProperty('--process-progress', progress.toFixed(4));
        const dotThresholds = [0.015, 0.31, 0.62, 0.93];
        const stepThresholds = [0.025, 0.29, 0.56, 0.82];
        processDots.forEach((dot, index) => dot.classList.toggle('is-active', progress >= dotThresholds[index]));
        processSteps.forEach((step, index) => step.classList.toggle('is-active', progress >= stepThresholds[index]));
    };
    const scheduleProcessTimeline = () => {
        if (!processFrame) processFrame = window.requestAnimationFrame(updateProcessTimeline);
    };
    window.addEventListener('scroll', scheduleProcessTimeline, { passive: true });
    window.addEventListener('resize', scheduleProcessTimeline, { passive: true });
    updateProcessTimeline();

    // Signature headline: type both parts of the phrase, with a complete-text fallback.
    const typedIdea = $('#typed-idea');
    const typedEngineering = $('#typed-engineering');
    const typewriterPhrase = 'Ideas into reality. Innovation into impact.';
    const firstPhrasePart = 'Ideas into reality.';
    const secondPhrasePart = 'Innovation into impact.';
    if (typedIdea && typedEngineering) {
        const setCompleteHeadline = () => {
            typedIdea.textContent = firstPhrasePart;
            typedEngineering.textContent = secondPhrasePart;
            const caret = document.createElement('i');
            caret.className = 'typewriter-caret';
            caret.setAttribute('aria-hidden', 'true');
            typedEngineering.appendChild(caret);
        };
        if (reducedMotion) {
            setCompleteHeadline();
        } else {
            typedIdea.textContent = '';
            typedEngineering.textContent = '';
            const caret = document.createElement('i');
            caret.className = 'typewriter-caret';
            caret.setAttribute('aria-hidden', 'true');
            typedEngineering.appendChild(caret);
            let count = 0;
            const typeNext = () => {
                count += 1;
                typedIdea.textContent = typewriterPhrase.slice(0, Math.min(count, firstPhrasePart.length));
                if (count > firstPhrasePart.length) {
                    typedEngineering.textContent = typewriterPhrase.slice(firstPhrasePart.length + 1, count);
                    if (caret) typedEngineering.appendChild(caret);
                }
                if (count < typewriterPhrase.length) {
                    window.setTimeout(typeNext, count < firstPhrasePart.length ? 78 : 58);
                } else if (caret) {
                    caret.classList.add('is-typed');
                }
            };
            window.setTimeout(typeNext, 430);
        }
    }

    // Muted autoplay loop for the founding-team film.
    const teamFilmVideo = $('.team-film-video');
    const teamFilmPlay = $('.team-film-play');
    const teamFilmStatus = $('.team-film-status');
    if (teamFilmVideo) {
        teamFilmVideo.muted = true;
        teamFilmVideo.defaultMuted = true;
        teamFilmVideo.volume = 0;
        teamFilmVideo.loop = true;
        teamFilmVideo.autoplay = true;
        teamFilmVideo.playsInline = true;
        teamFilmVideo.setAttribute('muted', '');
        teamFilmVideo.setAttribute('playsinline', '');
        teamFilmVideo.setAttribute('webkit-playsinline', '');
        teamFilmVideo.setAttribute('loop', '');
        let playbackRequest = null;
        const playbackSucceeded = () => {
            if (teamFilmPlay) teamFilmPlay.hidden = true;
            if (teamFilmStatus) teamFilmStatus.textContent = 'MUTED · LOOPING';
            teamFilmVideo.classList.add('is-playing');
        };
        const playbackNeedsTap = () => {
            if (teamFilmPlay) teamFilmPlay.hidden = false;
            if (teamFilmStatus) teamFilmStatus.textContent = 'TAP TO PLAY';
            teamFilmVideo.classList.remove('is-playing');
        };
        const startTeamFilm = async () => {
            if (document.hidden || !teamFilmVideo.isConnected || playbackRequest) return;
            playbackRequest = (async () => {
                try {
                    teamFilmVideo.muted = true;
                    teamFilmVideo.volume = 0;
                    await teamFilmVideo.play();
                    playbackSucceeded();
                } catch (error) {
                    playbackNeedsTap();
                } finally {
                    playbackRequest = null;
                }
            })();
            await playbackRequest;
        };
        teamFilmVideo.addEventListener('playing', playbackSucceeded);
        teamFilmVideo.addEventListener('canplay', () => {
            if (teamFilmVideo.paused && !document.hidden) startTeamFilm();
        });
        teamFilmVideo.addEventListener('error', () => {
            if (teamFilmStatus) teamFilmStatus.textContent = 'VIDEO UNAVAILABLE';
            if (teamFilmPlay) teamFilmPlay.hidden = true;
        });
        if (teamFilmPlay) teamFilmPlay.addEventListener('click', () => {
            startTeamFilm();
        });
        teamFilmVideo.load();
        startTeamFilm();
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) teamFilmVideo.pause();
            else startTeamFilm();
        });
    }

    // Cursor halo + restrained magnetic hover on desktop only.
    const cursorGlow = $('#cursor-glow');
    if (finePointer && !reducedMotion) {
        document.body.classList.add('has-cursor');
        let pointerX = window.innerWidth / 2;
        let pointerY = window.innerHeight / 2;
        let cursorFrame = false;
        window.addEventListener('pointermove', event => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            if (cursorGlow && !cursorFrame) {
                cursorFrame = true;
                window.requestAnimationFrame(() => {
                    cursorGlow.style.left = `${pointerX}px`;
                    cursorGlow.style.top = `${pointerY}px`;
                    cursorFrame = false;
                });
            }
        }, { passive: true });

        $$('.magnetic').forEach(button => {
            button.addEventListener('pointermove', event => {
                if (event.pointerType !== 'mouse') return;
                const rect = button.getBoundingClientRect();
                const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
                button.style.transform = `translate(${x * 5}px, ${y * 4}px)`;
            });
            button.addEventListener('pointerleave', () => { button.style.transform = ''; });
        });
    }

    // Tilt is intentionally subtle and disabled for coarse pointers / reduced motion.
    if (finePointer && !reducedMotion) {
        $$('[data-tilt]').forEach(card => {
            card.addEventListener('pointermove', event => {
                if (event.pointerType !== 'mouse') return;
                const rect = card.getBoundingClientRect();
                const px = (event.clientX - rect.left) / rect.width;
                const py = (event.clientY - rect.top) / rect.height;
                const rotateY = (px - .5) * 3;
                const rotateX = (.5 - py) * 3;
                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            });
            card.addEventListener('pointerleave', () => { card.style.transform = ''; });
        });
    }

    // Progressive entrance animation: without GSAP, all content remains visible.
    if (window.gsap && window.ScrollTrigger && !reducedMotion) {
        gsap.registerPlugin(ScrollTrigger);
        $$('.reveal:not(.service-card)').forEach((element) => {
            gsap.from(element, {
                opacity: 0, y: 24, duration: .72, ease: 'power2.out',
                scrollTrigger: { trigger: element, start: 'top 88%', once: true },
                clearProps: 'opacity,transform'
            });
        });
        const serviceCards = $$('.service-grid .service-card');
        if (serviceCards.length) {
            gsap.from(serviceCards, {
                opacity: 0, y: 18, duration: .72, stagger: .09, ease: 'power3.out',
                scrollTrigger: { trigger: $('.service-grid'), start: 'top 86%', once: true },
                clearProps: 'opacity,transform'
            });
        }
        ScrollTrigger.refresh();
    } else {
        $$('.reveal').forEach(element => element.classList.add('is-visible'));
    }

    // Muted, inline looping playback for the selected project demo.
    const projectDemoVideo = $('.project-demo-video');
    const projectVideoStatus = $('.project-video-status');
    if (projectDemoVideo) {
        projectDemoVideo.muted = true;
        projectDemoVideo.defaultMuted = true;
        projectDemoVideo.volume = 0;
        projectDemoVideo.loop = true;
        projectDemoVideo.autoplay = true;
        projectDemoVideo.playsInline = true;
        projectDemoVideo.setAttribute('muted', '');
        projectDemoVideo.setAttribute('playsinline', '');
        projectDemoVideo.setAttribute('webkit-playsinline', '');
        projectDemoVideo.setAttribute('loop', '');
        const startProjectDemo = async () => {
            if (document.hidden || !projectDemoVideo.isConnected) return;
            try {
                projectDemoVideo.muted = true;
                projectDemoVideo.volume = 0;
                await projectDemoVideo.play();
            } catch (_) {
                if (projectVideoStatus) projectVideoStatus.textContent = 'DEMO READY';
            }
        };
        projectDemoVideo.addEventListener('playing', () => {
            if (projectVideoStatus) projectVideoStatus.textContent = 'MUTED · LOOPING';
        });
        projectDemoVideo.addEventListener('error', () => {
            if (projectVideoStatus) projectVideoStatus.textContent = 'DEMO PREVIEW';
        });
        projectDemoVideo.addEventListener('canplay', () => {
            if (projectDemoVideo.paused && !document.hidden) startProjectDemo();
        });
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) projectDemoVideo.pause();
            else startProjectDemo();
        });
        startProjectDemo();
    }

    // 1. Hero 3D spiral galaxy behind the hero visual (Strictly centered at 0,0,0)
    const canvas = $('#hero-canvas');
    const stage = $('#hero-stage');
    if (canvas && stage && window.THREE) {
        try {
            const THREE = window.THREE;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 100);
            camera.position.set(0, 0, 6.9);

            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true,
                powerPreference: 'low-power'
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.45));
            renderer.setClearColor(0x000000, 0);
            renderer.outputColorSpace = THREE.SRGBColorSpace;

            const initW = Math.max(1, stage.clientWidth);
            const initH = Math.max(1, stage.clientHeight);
            camera.aspect = initW / initH;
            camera.updateProjectionMatrix();
            renderer.setSize(initW, initH, false);

            const galaxy = new THREE.Group();
            scene.add(galaxy);

            const particleCount = window.innerWidth < 720 ? 520 : 1100;
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);
            const cyan = new THREE.Color(0x20e4f0);
            const blue = new THREE.Color(0x286cff);
            const violet = new THREE.Color(0x996cff);

            for (let i = 0; i < particleCount; i++) {
                const arm = i % 4;
                const radius = (0.22 + Math.pow(Math.random(), 0.72) * 2.45) * 0.39;
                const armAngle = arm * ((Math.PI * 2) / 4);
                const spiral = radius * 1.38;
                const scatter = (Math.random() - 0.5) * (0.11 + radius * 0.1);
                const theta = armAngle + spiral + scatter;
                const vertical = (Math.random() - 0.5) * (0.12 + radius * 0.075);

                positions[i * 3]     = Math.cos(theta) * radius;
                positions[i * 3 + 1] = Math.sin(theta) * radius * 0.56 + vertical;
                positions[i * 3 + 2] = (Math.random() - 0.5) * (0.22 + radius * 0.04);

                const mixColor = new THREE.Color();
                const blend = Math.min(1, Math.max(0, radius / 2.8));
                if (blend < 0.52) mixColor.copy(cyan).lerp(blue, blend / 0.52);
                else mixColor.copy(blue).lerp(violet, (blend - 0.52) / 0.48);

                const brightness = 0.66 + Math.random() * 0.34;
                colors[i * 3]     = mixColor.r * brightness;
                colors[i * 3 + 1] = mixColor.g * brightness;
                colors[i * 3 + 2] = mixColor.b * brightness;
                sizes[i] = 0.55 + Math.random() * 1.55;
            }

            const starGeometry = new THREE.BufferGeometry();
            starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            starGeometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

            const starMaterial = new THREE.PointsMaterial({
                size: window.innerWidth < 720 ? 0.038 : 0.045,
                vertexColors: true,
                transparent: true,
                opacity: 1,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });
            const galaxyStars = new THREE.Points(starGeometry, starMaterial);
            galaxy.add(galaxyStars);

            const orbitA = new THREE.Mesh(
                new THREE.TorusGeometry(1.24, 0.004, 6, 180),
                new THREE.MeshBasicMaterial({ color: 0x18d9ec, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false })
            );
            orbitA.rotation.set(0.98, 0.14, -0.22);

            const orbitB = new THREE.Mesh(
                new THREE.TorusGeometry(1.08, 0.003, 6, 160),
                new THREE.MeshBasicMaterial({ color: 0x7369ff, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false })
            );
            orbitB.rotation.set(0.34, 0.87, 0.48);

            const orbitC = new THREE.Mesh(
                new THREE.TorusGeometry(0.94, 0.0025, 6, 160),
                new THREE.MeshBasicMaterial({ color: 0x3979ff, transparent: true, opacity: 0.24, side: THREE.DoubleSide, depthWrite: false })
            );
            orbitC.rotation.set(1.18, 0.28, 0.92);
            galaxy.add(orbitA, orbitB, orbitC);

            const core = new THREE.Mesh(
                new THREE.SphereGeometry(0.16, 20, 16),
                new THREE.MeshBasicMaterial({ color: 0x5af4ff, transparent: true, opacity: 0.82 })
            );
            const coreHalo = new THREE.Mesh(
                new THREE.SphereGeometry(0.31, 20, 16),
                new THREE.MeshBasicMaterial({ color: 0x126dff, transparent: true, opacity: 0.11, wireframe: true })
            );
            galaxy.add(core, coreHalo);
            scene.add(new THREE.AmbientLight(0x8aaaff, 0.65));

            let lastWidth = initW;
            let lastHeight = initH;
            const resizeRenderer = () => {
                const width = Math.max(1, stage.clientWidth);
                const height = Math.max(1, stage.clientHeight);
                if (width === lastWidth && height === lastHeight) return;
                lastWidth = width;
                lastHeight = height;
                renderer.setSize(width, height, false);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                if (reducedMotion) renderer.render(scene, camera);
            };
            if (window.ResizeObserver) new ResizeObserver(resizeRenderer).observe(stage);
            else window.addEventListener('resize', resizeRenderer, { passive: true });

            const draw = (time) => {
                if (document.hidden) return;
                resizeRenderer();
                const t = (typeof time === 'number' ? time : 0) * 0.001;
                galaxy.position.set(0, 0, 0);
                if (!reducedMotion) {
                    galaxy.rotation.x = 0.12;
                    galaxy.rotation.y = 0;
                    galaxy.rotation.z = t * 0.035;
                    galaxyStars.rotation.z = -t * 0.012;
                    orbitA.rotation.z = -0.22 + t * 0.035;
                    orbitB.rotation.z = 0.48 - t * 0.028; // Rotate in-plane so it never tumbles wildly
                    orbitC.rotation.z = 0.92 + t * 0.022;
                    core.scale.setScalar(1 + Math.sin(t * 1.5) * 0.045);
                    coreHalo.rotation.z = -t * 0.08;
                }
                renderer.render(scene, camera);
            };
            stage.classList.add('webgl-ready');
            if (reducedMotion) draw(0);
            else renderer.setAnimationLoop(draw);
            document.addEventListener('visibilitychange', () => {
                if (reducedMotion) return;
                renderer.setAnimationLoop(document.hidden ? null : draw);
            });
        } catch (error) {
            canvas.style.display = 'none';
        }
    }

    // 2. Manifesto 3D Core (#approach): Locked-Center Harmonic Orbits & Extruded Quata Mark
    const manifestoOrb = $('#manifesto-orb');
    const manifestoCanvas = $('#manifesto-3d-canvas');
    if (manifestoOrb && manifestoCanvas && window.THREE) {
        try {
            const THREE = window.THREE;
            const mScene = new THREE.Scene();
            // Pull camera back to 7.4 so the entire 3D system stays compactly inside the center orb
            const mCamera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
            mCamera.position.set(0, 0, 7.4);

            const mRenderer = new THREE.WebGLRenderer({
                canvas: manifestoCanvas,
                alpha: true,
                antialias: true,
                powerPreference: 'high-performance'
            });
            mRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            mRenderer.setClearColor(0x000000, 0);
            manifestoOrb.classList.add('has-3d-logo');

            // Master group anchored strictly at (0, 0, 0)
            const coreSystem = new THREE.Group();
            const logoGroup = new THREE.Group();
            const harmonicOrbits = new THREE.Group();
            coreSystem.add(logoGroup);
            coreSystem.add(harmonicOrbits);
            mScene.add(coreSystem);

            // Custom GLSL Shader for the 3D Quata Ribbon Mark
            const createRibbonMaterial = (mode) => new THREE.ShaderMaterial({
                uniforms: {
                    uMode: { value: mode },
                    uTime: { value: 0 }
                },
                vertexShader: `
          varying vec3 vPos;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vPos = position;
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
                fragmentShader: `
          uniform float uMode;
          uniform float uTime;
          varying vec3 vPos;
          varying vec3 vNormal;
          varying vec3 vViewPosition;

          void main() {
            vec3 violet = vec3(0.66, 0.36, 1.00);
            vec3 royal  = vec3(0.08, 0.34, 0.96);
            vec3 cyan   = vec3(0.04, 0.90, 0.98);

            vec3 baseColor;
            if (uMode < 0.5) {
              float t = clamp((vPos.x + vPos.y * 0.7 + 0.6) / 1.7, 0.0, 1.0);
              baseColor = mix(royal, cyan, smoothstep(0.0, 0.85, t));
            } else if (uMode < 1.5) {
              float tY = clamp((vPos.y + 0.95) / 1.75, 0.0, 1.0);
              vec3 bottomMix = mix(cyan * 0.85, royal, clamp((vPos.y + 0.95) * 1.4, 0.0, 1.0));
              baseColor = mix(bottomMix, violet, smoothstep(0.45, 0.98, tY));
            } else {
              float diag = clamp((vPos.x - vPos.y) / 1.6, 0.0, 1.0);
              vec3 midMix = mix(cyan, royal, smoothstep(0.0, 0.48, diag));
              baseColor = mix(midMix, cyan, smoothstep(0.55, 1.0, diag));
            }

            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            // Gently orbiting key light gives a living metallic sheen without moving the geometry wildly
            vec3 lightA = normalize(vec3(sin(uTime * 0.8) * 2.0 + 1.5, cos(uTime * 0.6) * 2.0 + 2.0, 4.0));
            vec3 lightB = normalize(vec3(-2.5, -2.0, 2.5));

            float diffA = max(dot(normal, lightA), 0.0);
            float diffB = max(dot(normal, lightB), 0.0) * 0.35;

            vec3 halfVec = normalize(lightA + viewDir);
            float spec = pow(max(dot(normal, halfVec), 0.0), 40.0);

            float sideDarken = mix(0.64, 1.06, abs(normal.z));
            float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.5);

            vec3 finalColor = baseColor * sideDarken * (0.60 + diffA * 0.50 + diffB);
            finalColor += vec3(0.55, 0.95, 1.0) * spec * 0.48;
            finalColor += mix(cyan, violet, 0.4) * fresnel * 0.35;

            gl_FragColor = vec4(finalColor, 1.0);
          }
        `
            });

            const createRoundedPolygon = (pts, radius = 0.06) => {
                const shape = new THREE.Shape();
                const len = pts.length;
                for (let i = 0; i < len; i++) {
                    const curr = pts[i];
                    const prev = pts[(i - 1 + len) % len];
                    const next = pts[(i + 1) % len];

                    const vPrev = new THREE.Vector2(prev[0] - curr[0], prev[1] - curr[1]);
                    const vNext = new THREE.Vector2(next[0] - curr[0], next[1] - curr[1]);
                    const r = Math.min(radius, vPrev.length() * 0.35, vNext.length() * 0.35);

                    vPrev.normalize();
                    vNext.normalize();

                    const startPt = [curr[0] + vPrev.x * r, curr[1] + vPrev.y * r];
                    const endPt = [curr[0] + vNext.x * r, curr[1] + vNext.y * r];

                    if (i === 0) shape.moveTo(startPt[0], startPt[1]);
                    else shape.lineTo(startPt[0], startPt[1]);

                    shape.quadraticCurveTo(curr[0], curr[1], endPt[0], endPt[1]);
                }
                shape.closePath();
                return shape;
            };

            const extrudeConfig = {
                depth: 0.22,
                bevelEnabled: true,
                bevelSegments: 5,
                steps: 1,
                bevelSize: 0.032,
                bevelThickness: 0.032
            };

            const mat0 = createRibbonMaterial(0);
            const mat1 = createRibbonMaterial(1);
            const mat2 = createRibbonMaterial(2);

            // Segment 1: Top-Right Cyan Arch
            const seg1Pts = [
                [-0.56, 0.64], [ 0.02, 0.98], [ 0.84, 0.48],
                [ 0.84,-0.46], [ 0.66,-0.56], [ 0.44,-0.28],
                [ 0.44, 0.28], [-0.02, 0.56], [-0.46, 0.28]
            ];
            const seg1Geo = new THREE.ExtrudeGeometry(createRoundedPolygon(seg1Pts, 0.09), extrudeConfig);
            seg1Geo.center();
            const seg1Mesh = new THREE.Mesh(seg1Geo, mat0);
            seg1Mesh.position.set(0.14, 0.21, -0.04);

            // Segment 2: Left-Bottom Violet-to-Blue Ribbon Fold
            const seg2Pts = [
                [-0.50, 0.72], [-0.88, 0.46], [-0.88,-0.46],
                [-0.08,-0.96], [ 0.22,-0.78], [-0.46,-0.32],
                [-0.46, 0.36], [-0.22, 0.54]
            ];
            const seg2Geo = new THREE.ExtrudeGeometry(createRoundedPolygon(seg2Pts, 0.09), extrudeConfig);
            seg2Geo.center();
            const seg2Mesh = new THREE.Mesh(seg2Geo, mat1);
            seg2Mesh.position.set(-0.33, -0.12, 0.04);

            // Segment 3: Diagonal Q-Tail
            const seg3Pts = [
                [-0.26,-0.12], [ 0.30,-0.12], [ 0.98,-0.88], [ 0.42,-0.88]
            ];
            const seg3Geo = new THREE.ExtrudeGeometry(createRoundedPolygon(seg3Pts, 0.05), extrudeConfig);
            seg3Geo.center();
            const seg3Mesh = new THREE.Mesh(seg3Geo, mat2);
            seg3Mesh.position.set(0.36, -0.50, 0.08);

            logoGroup.add(seg1Mesh, seg2Mesh, seg3Mesh);
            logoGroup.scale.setScalar(0.92); // Compact scale so it sits comfortably inside the core

            // --- Fixed-Plane Harmonic Orbits (Never tumble out of bounds) ---
            const orbitPlanes = [
                { radius: 1.18, color: 0x17d9ed, opacity: 0.36, rotX: 1.12,  rotY: -0.38, speed: 0.65, nodes: 2 },
                { radius: 1.34, color: 0x9861ff, opacity: 0.28, rotX: -1.05, rotY: 0.46,  speed: -0.52, nodes: 1 },
                { radius: 1.48, color: 0x2478ff, opacity: 0.22, rotX: 1.28,  rotY: 0.18,  speed: 0.42, nodes: 1 }
            ];

            const spinners = [];
            const satGeo = new THREE.SphereGeometry(0.045, 16, 16);
            const haloGeo = new THREE.SphereGeometry(0.09, 12, 12);

            orbitPlanes.forEach((cfg, idx) => {
                // Fixed tilted plane group
                const planeGroup = new THREE.Group();
                planeGroup.rotation.set(cfg.rotX, cfg.rotY, 0);
                harmonicOrbits.add(planeGroup);

                // Static ring on that plane
                const ringMesh = new THREE.Mesh(
                    new THREE.TorusGeometry(cfg.radius, 0.008, 12, 120),
                    new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: cfg.opacity })
                );
                planeGroup.add(ringMesh);

                // Spinner group rotates strictly around Z (in-plane circumference only!)
                const spinner = new THREE.Group();
                planeGroup.add(spinner);

                for (let n = 0; n < cfg.nodes; n++) {
                    const angle = n * Math.PI + idx * 1.1;
                    const nodeWrap = new THREE.Group();
                    nodeWrap.position.set(Math.cos(angle) * cfg.radius, Math.sin(angle) * cfg.radius, 0);

                    const dot = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: cfg.color }));
                    const glow = new THREE.Mesh(
                        haloGeo,
                        new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.28 })
                    );
                    nodeWrap.add(dot, glow);
                    spinner.add(nodeWrap);
                }

                spinners.push({ group: spinner, speed: cfg.speed });
            });

            // Sizing strictly matched to #manifesto-orb
            const resizeManifesto = () => {
                const width = Math.max(260, manifestoOrb.clientWidth);
                const height = Math.max(260, manifestoOrb.clientHeight);
                mRenderer.setSize(width, height, false);
                mCamera.aspect = width / height;
                mCamera.updateProjectionMatrix();
            };
            resizeManifesto();
            if (window.ResizeObserver) new ResizeObserver(resizeManifesto).observe(manifestoOrb);
            else window.addEventListener('resize', resizeManifesto, { passive: true });

            // Local-only hover interaction (does not react when cursor is elsewhere on the page)
            const hoverState = { x: 0, y: 0, targetX: 0, targetY: 0 };
            manifestoOrb.addEventListener('pointermove', (e) => {
                const rect = manifestoOrb.getBoundingClientRect();
                const nx = ((e.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
                const ny = ((e.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
                hoverState.targetX = Math.max(-1, Math.min(1, nx));
                hoverState.targetY = Math.max(-1, Math.min(1, ny));
            }, { passive: true });

            manifestoOrb.addEventListener('pointerleave', () => {
                hoverState.targetX = 0;
                hoverState.targetY = 0;
            });

            let mVisible = true;
            if ('IntersectionObserver' in window) {
                new IntersectionObserver((entries) => {
                    mVisible = entries[0]?.isIntersecting ?? true;
                }, { threshold: 0.05 }).observe(manifestoOrb);
            }

            const drawManifesto = (time) => {
                if (document.hidden || !mVisible) return;
                const t = (typeof time === 'number' ? time : 0) * 0.001;

                hoverState.x += (hoverState.targetX - hoverState.x) * 0.07;
                hoverState.y += (hoverState.targetY - hoverState.y) * 0.07;

                mat0.uniforms.uTime.value = t;
                mat1.uniforms.uTime.value = t;
                mat2.uniforms.uTime.value = t;

                // Keep entire system pinned to (0, 0, 0)
                coreSystem.position.set(0, 0, 0);

                if (!reducedMotion) {
                    // Gentle, dignified 3D poise (max ±10 deg on local hover)
                    logoGroup.rotation.y = Math.sin(t * 0.65) * 0.18 + hoverState.x * 0.22;
                    logoGroup.rotation.x = Math.cos(t * 0.5) * 0.08 - hoverState.y * 0.18;
                    logoGroup.position.y = Math.sin(t * 1.2) * 0.04;

                    // Subtle micro-breathing of the 3 ribbon segments (stays tightly unified)
                    const microPulse = Math.sin(t * 1.6) * 0.012;
                    seg1Mesh.position.set(0.14 + microPulse, 0.21 + microPulse, -0.04);
                    seg2Mesh.position.set(-0.33 - microPulse, -0.12, 0.04);
                    seg3Mesh.position.set(0.36 + microPulse, -0.50 - microPulse, 0.08);

                    // Rotate the 4 founder satellites strictly along their fixed ring tracks
                    spinners.forEach((s) => {
                        s.group.rotation.z = t * s.speed;
                    });

                    // Slight counter-tilt on the orbital cage for 3D parallax depth
                    harmonicOrbits.rotation.y = hoverState.x * 0.1;
                    harmonicOrbits.rotation.x = -hoverState.y * 0.1;
                }

                mRenderer.render(mScene, mCamera);
            };

            if (reducedMotion) drawManifesto(0);
            else mRenderer.setAnimationLoop(drawManifesto);
        } catch (err) {
            manifestoCanvas.style.display = 'none';
            manifestoOrb.classList.remove('has-3d-logo');
        }
    }

    // Format client form answers into a readable enquiry email.
    const projectRequestForm = $('#project-request-form');
    const requestStatus = $('#request-form-status');
    if (projectRequestForm) projectRequestForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        if (String(data.get('contact_company_website') || '').trim()) return;
        const value = (key, fallback = 'Not specified') => { const v = data.get(key); return v && String(v).trim() ? String(v).trim() : fallback; };
        const name=value('client_name'), email=value('client_email'), company=value('company','not specified');
        const type=value('project_type'), needs=data.getAll('project_needs').join(', ') || 'to be discussed';
        const budget=value('budget'), timeline=value('timeline'), details=value('project_details');
        const reference=value('reference_url','No reference link provided');
        const subject=`New project enquiry — ${type} — ${name}`;
        const message=[`Hello Quata Labs team,`,'',`My name is ${name}${company !== 'not specified' ? `, representing ${company},` : ''} and I’d like to discuss a ${type.toLowerCase()} project.`,'',`The areas where I may need support include ${needs}.`,'','Project overview:',details,'',`Estimated budget: ${budget}.`,`Preferred timeline: ${timeline}.`,`Reference link: ${reference}.`,'',`Please reply to ${email} so we can discuss the next steps.`,'',`Thank you for your time,`,name,email].join('\n');
        const config=window.QUATALABS_EMAILJS_CONFIG||{};
        const button=$('.request-submit',form), label=$('.request-submit-label',form);
        if(button) button.disabled=true; if(label) label.textContent='Preparing request…';
        if(window.emailjs && config.publicKey && config.serviceId && config.templateId){
            try { window.emailjs.init({publicKey:config.publicKey}); await window.emailjs.send(config.serviceId,config.templateId,{to_email:'quatalabs@gmail.com',reply_to:email,from_name:name,subject,message,company_name:company,project_type:type,project_needs:needs,budget_range:budget,target_timeline:timeline,project_details:details,website_url:reference}); if(requestStatus) requestStatus.textContent='Thanks — your project request has been sent to Quata Labs.'; form.reset(); }
            catch(error){if(requestStatus)requestStatus.textContent='Direct delivery failed. Opening an email draft instead.';window.location.href=`mailto:quatalabs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;}
        } else { if(requestStatus)requestStatus.textContent='Your project brief is ready. Your email app will open so you can send it to Quata Labs.'; window.location.href=`mailto:quatalabs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`; }
        if(button)button.disabled=false;if(label)label.textContent='Send project request';
    });

})();