// @ts-nocheck
/* ==========================================================================
   LUNARFIS — script.js
   All content below is placeholder data. Edit the arrays in DATA to update
   projects, activities, gallery items and achievements.
   ========================================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Reusable subtle gradient "visual fills" so nothing depends on external
   images — easy to swap for real photos later by replacing the element's
   background with an <img>. */
const VISUAL_FILLS = [
  'linear-gradient(135deg,#1a2540,#0b0f1a)',
  'linear-gradient(135deg,#243256,#101828)',
  'linear-gradient(135deg,#2c3a5c,#0d1220)',
  'linear-gradient(135deg,#182136,#060810)',
  'linear-gradient(135deg,#334469,#0f1626)',
  'linear-gradient(135deg,#1f2c4a,#0a0d16)'
];
function fillFor(i){ return VISUAL_FILLS[i % VISUAL_FILLS.length]; }

/* ==========================================================================
   DATA
   ========================================================================== */
const DATA = {
  projects: [
    { name: 'LunarWeb', category: 'Pengembangan Web', desc: 'Sebuah proyek situs web modern yang dibuat oleh tim LUNARFIS.' },
    { name: 'Digital Archive', category: 'Sistem Informasi', desc: 'Sebuah platform digital untuk mengelola informasi dan sumber daya kreatif.' },
    { name: 'Creative Lab', category: 'Eksperimental', desc: 'Ruang eksperimen untuk menjelajahi ide dan teknologi baru.' },
    { name: 'Nightframe', category: 'Penyuntingan Video', desc: 'Serial video pendek yang mendokumentasikan proses kelompok ini.' },
    { name: 'Orbit Notes', category: 'Alat Produktivitas', desc: 'Aplikasi pencatat minimalis yang dibuat untuk sesi kerja fokus di malam hari.' },
    { name: 'Studio Type', category: 'Desain Grafis', desc: 'Sistem identitas visual yang mengeksplorasi tipografi, grid, dan gerakan.' }
  ],

  activities: [
    { title: 'Turnamen Kompetitif', desc: 'Ikut dan menggelar turnamen game bareng seluruh member.', icon: 'spark' },
    { title: 'Push Rank Bareng', desc: 'Grinding rank bareng squad, dari rank terendah sampai puncak.', icon: 'layers' },
    { title: 'Live & Konten Gaming', desc: 'Streaming, rekam highlight, dan bikin konten seru dari sesi main.', icon: 'film' },
    { title: 'Ngulik Build & Strategi', desc: 'Racik build, item, dan strategi terbaik buat naik level permainan.', icon: 'code' },
    { title: 'Riset Meta & Update', desc: 'Pantau patch note, meta terbaru, dan tren game yang lagi ramai.', icon: 'search' },
    { title: 'Ngoding Tools Komunitas', desc: 'Bikin tool, bot Discord, atau overlay kecil buat mendukung squad.', icon: 'terminal' },
    { title: 'Diskusi & Review Match', desc: 'Bahas jalannya pertandingan dan cari cara buat main lebih baik.', icon: 'chat' },
    { title: 'Malam Main Bareng', desc: 'Game night santai — cuma buat seru-seruan bareng squad.', icon: 'book' }
  ],

  gallery: [
    { img: 'images/gallery/gallery-01.jpg', label: 'Skuad' },
    { img: 'images/gallery/gallery-02.jpg', label: 'Skuad' },
    { img: 'images/gallery/gallery-03.jpg', label: 'Match' },
    { img: 'images/gallery/gallery-04.png', label: 'Event' },
    { img: 'images/gallery/gallery-05.jpg', label: 'Di Balik Layar' },
    { img: 'images/gallery/gallery-06.jpg', label: 'Di Balik Layar' },
    { img: 'images/gallery/gallery-07.jpg', label: 'Di Balik Layar' },
    { img: 'images/gallery/gallery-08.jpg', label: 'Di Balik Layar' },
    { img: 'images/gallery/gallery-09.jpg', label: 'Di Balik Layar' }
  ],

  achievements: [
    { title: 'Juara 1 Turnamen Mobile Legends Antar Sekolah', year: '2026', category: 'Turnamen', desc: 'Menjuarai turnamen Mobile Legends tingkat sekolah bersama tim inti.' },
    { title: 'Top 8 Regional Valorant Community Cup', year: '2025', category: 'Kompetisi', desc: 'Melaju ke babak top 8 dalam turnamen Valorant tingkat regional.' },
    { title: 'Booth Gaming di Event Sekolah', year: '2025', category: 'Event', desc: 'Membuka booth dan turnamen mini gaming di acara sekolah.' },
    { title: 'Server Discord Tembus 500+ Member', year: '2024', category: 'Komunitas', desc: 'Server Discord berkembang jadi ruang mabar aktif setiap hari.' },
    { title: 'Kolaborasi Mabar dengan Komunitas Lain', year: '2024', category: 'Kolaborasi', desc: 'Mengadakan sesi mabar dan scrim bareng komunitas gaming lain.' }
  ]
};

const ICONS = {
  code: '<path d="M17 8l6 8-6 8M15 8l-6 8 6 8" stroke-linecap="round" stroke-linejoin="round"/>',
  terminal: '<rect x="6" y="8" width="28" height="24" rx="3"/><path d="M12 16l6 4-6 4M22 24h6" stroke-linecap="round"/>',
  layers: '<path d="M20 6 6 14l14 8 14-8-14-8Z"/><path d="M6 22l14 8 14-8M6 28l14 8 14-8"/>',
  film: '<rect x="6" y="9" width="28" height="22" rx="2"/><path d="M6 15h28M6 25h28M13 9v6M13 25v6M27 9v6M27 25v6"/>',
  search: '<circle cx="17" cy="17" r="10"/><path d="M25 25l7 7" stroke-linecap="round"/>',
  book: '<path d="M6 8h11c2.2 0 4 1.8 4 4v20c0-2.2-1.8-4-4-4H6V8Z"/><path d="M34 8H23c-2.2 0-4 1.8-4 4v20c0-2.2 1.8-4 4-4h11V8Z"/>',
  chat: '<path d="M6 10h28v16H16l-6 6V26H6V10Z" stroke-linejoin="round"/>',
  spark: '<path d="M20 6l3 11 11 3-11 3-3 11-3-11-11-3 11-3 3-11Z" stroke-linejoin="round"/>'
};

/* ==========================================================================
   RENDER: Projects
   ========================================================================== */
function renderProjects(){
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = DATA.projects.map((p, i) => `
    <article class="project-card">
      <div class="project-card__visual">
        <div class="visual-fill" style="background:${fillFor(i)};width:100%;height:100%"></div>
      </div>
      <div class="project-card__body">
        <p class="project-card__category">${p.category}</p>
        <h3 class="project-card__title">${p.name}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <a href="#" class="project-card__link">Lihat Proyek
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   RENDER: Activities
   ========================================================================== */
function renderActivities(){
  const grid = document.getElementById('activityGrid');
  grid.innerHTML = DATA.activities.map(a => `
    <article class="activity-card">
      <span class="activity-card__icon">
        <svg viewBox="0 0 40 40" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5">${ICONS[a.icon]}</svg>
      </span>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
    </article>
  `).join('');
}

/* ==========================================================================
   RENDER: Gallery
   ========================================================================== */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = DATA.gallery.map((g, i) => `
    <figure class="gallery__item" data-category="${g.label}" data-index="${i}">
      <img class="visual-fill" src="${g.img}" alt="Momen LUNARFIS \u2014 ${g.label}" loading="lazy">
    </figure>
  `).join('');

  grid.querySelectorAll('.gallery__item').forEach(item => {
    item.setAttribute('data-label', item.dataset.category);
    item.addEventListener('click', () => openLightbox(item));
  });
}

/* ==========================================================================
   RENDER: Achievements
   ========================================================================== */
function renderAchievements(){
  const grid = document.getElementById('achievementGrid');
  grid.innerHTML = DATA.achievements.map(a => `
    <article class="achievement-card">
      <div class="achievement-card__top">
        <span class="achievement-card__year">${a.year}</span>
        <span class="achievement-card__category">${a.category}</span>
      </div>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
    </article>
  `).join('');
}

/* ==========================================================================
   Gallery filter
   ========================================================================== */
function initGalleryFilter(){
  const buttons = document.querySelectorAll('.filter-btn');
  const items = () => document.querySelectorAll('.gallery__item');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items().forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });
}

/* ==========================================================================
   Lightbox
   ========================================================================== */
function openLightbox(item){
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const src = item.querySelector('.visual-fill').src;

  img.style.backgroundImage = `url(${src})`;
  caption.textContent = `LUNARFIS \u2014 ${item.dataset.category}`;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function initLightbox(){
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ==========================================================================
   Navbar: scroll state, mobile menu
   ========================================================================== */
function initNavbar(){
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });
}

/* ==========================================================================
   Reveal on scroll
   ========================================================================== */
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  if (prefersReducedMotion){
    els.forEach(el => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Counter animation
   ========================================================================== */
function initCounters(){
  const counters = document.querySelectorAll('.stat__number:not(.js-discord-stat)');
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    if (prefersReducedMotion){ el.textContent = target; return; }
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ==========================================================================
   Discord: live stats
   Pulls the live online count (and an auto invite link) from Discord's
   public widget, identified by server (guild) ID — set via data-guild-id
   on #discordStats in discord.html. Requires "Enable Server Widget" to be
   turned on in the Discord server's settings.
   ========================================================================== */
function animateStatTo(el, target){
  if (prefersReducedMotion){ el.textContent = target; return; }
  const duration = 1200;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

/* Renders which voice channels have people in them right now, using the
   channels + members arrays returned by the widget (members only carry a
   channel_id when they're currently connected to voice). */
function renderDiscordVoice(data){
  const container = document.getElementById('discordVoice');
  if (!container) return;

  const channels = (data.channels || []).slice().sort((a, b) => a.position - b.position);
  if (!channels.length){ container.innerHTML = ''; return; }

  const membersByChannel = {};
  (data.members || []).forEach(m => {
    if (!m.channel_id) return;
    (membersByChannel[m.channel_id] = membersByChannel[m.channel_id] || []).push(m);
  });

  container.innerHTML = channels.map(ch => {
    const members = membersByChannel[ch.id] || [];
    return `
      <div class="discord-voice__channel">
        <div class="discord-voice__channel-head">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10v4h4l5 5V5L8 10H4Z" stroke-linejoin="round"/><path d="M17 8a5 5 0 0 1 0 8" stroke-linecap="round"/></svg>
          <span>${escapeHtml(ch.name)}</span>
          <span class="discord-voice__count">${members.length}</span>
        </div>
        ${members.length ? `
          <ul class="discord-voice__members">
            ${members.map(m => `
              <li>
                <img src="${escapeHtml(m.avatar_url)}" alt="" loading="lazy">
                <span>${escapeHtml(m.username)}</span>
              </li>
            `).join('')}
          </ul>
        ` : `<p class="discord-voice__empty">Belum ada yang join</p>`}
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   Discord: server avatar
   The widget doesn't expose a server icon, but Discord's public invite
   preview API does (no bot/token needed). We read the invite code straight
   from the "Gabung Server" button's href, then swap the fallback Discord
   logo for the server's real avatar once it loads.
   ========================================================================== */
function extractInviteCode(url){
  try {
    const parsed = new URL(url, window.location.href);
    const parts = parsed.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || null;
  } catch {
    return null;
  }
}

async function initDiscordAvatar(){
  const mark = document.getElementById('discordMark');
  const joinBtn = document.getElementById('discordJoinBtn');
  if (!mark || !joinBtn) return;

  const inviteCode = extractInviteCode(joinBtn.getAttribute('href'));
  if (!inviteCode) return;

  try {
    const res = await fetch(`https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`);
    if (!res.ok) throw new Error(`Invite API responded with ${res.status}`);
    const data = await res.json();
    const guild = data.guild;
    if (!guild || !guild.icon) return;
    const ext = guild.icon.startsWith('a_') ? 'gif' : 'png';
    const url = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${ext}?size=128`;
    mark.innerHTML = `<img src="${url}" alt="Ikon server LUNARFIS" loading="lazy">`;
  } catch (err){
    // Undangan tidak valid/kedaluwarsa — SVG Discord bawaan tetap tampil.
    console.warn('Tidak bisa memuat ikon server Discord:', err);
  }
}

async function initDiscordLive(){
  const statsBox = document.getElementById('discordStats');
  const onlineEl = document.getElementById('discordOnlineCount');
  const joinBtn = document.getElementById('discordJoinBtn');
  if (!statsBox || !onlineEl) return;

  const guildId = statsBox.dataset.guildId;
  const REFRESH_MS = 15000; // seberapa sering data disegarkan otomatis
  let firstLoad = true;

  const refresh = async () => {
    try {
      const res = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`);
      if (!res.ok) throw new Error(`Discord widget responded with ${res.status}`);
      const data = await res.json();

      if (firstLoad){
        animateStatTo(onlineEl, data.presence_count ?? 0);
      } else {
        onlineEl.textContent = data.presence_count ?? 0;
      }
      if (joinBtn && data.instant_invite) joinBtn.href = data.instant_invite;

      // Channel voice sementara (mis. dari sistem "join to create") ikut
      // muncul di sini karena daftarnya dibangun ulang dari respons terbaru
      // setiap kali refresh berjalan.
      renderDiscordVoice(data);
      firstLoad = false;
    } catch (err){
      // ID server salah, widget belum diaktifkan, atau permintaan diblokir (mis. offline).
      onlineEl.textContent = '—';
      console.warn('Tidak bisa memuat statistik Discord:', err);
    }
  };

  refresh();
  setInterval(refresh, REFRESH_MS);
}

/* ==========================================================================
   Starfield background (hero canvas)
   ========================================================================== */
function initStarfield(){
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let w, h, dpr;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.parentElement.offsetWidth;
    h = canvas.parentElement.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round((w * h) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2,
      base: Math.random() * 0.5 + 0.25,
      speed: Math.random() * 0.015 + 0.004,
      phase: Math.random() * Math.PI * 2
    }));
  }

  let t = 0;
  function draw(){
    ctx.clearRect(0, 0, w, h);
    t += 1;
    stars.forEach(s => {
      const twinkle = prefersReducedMotion ? s.base : s.base + Math.sin(t * s.speed + s.phase) * 0.35;
      ctx.beginPath();
      ctx.fillStyle = `rgba(230,236,250,${Math.max(twinkle, 0.05)})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

/* ==========================================================================
   Cursor glow (desktop pointer only)
   ========================================================================== */
function initCursorGlow(){
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const glow = document.querySelector('.cursor-glow');
  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

/* ==========================================================================
   Contact form (client-side only demo)
   ========================================================================== */
function initContactForm(){
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', e => {
    e.preventDefault();
    note.textContent = 'Terima kasih — pesan Anda telah tercatat. Ganti fungsi ini dengan backend atau layanan formulir Anda sendiri.';
    form.reset();
  });
}

/* ==========================================================================
   Init
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('projectGrid')) renderProjects();
  if (document.getElementById('activityGrid')) renderActivities();
  if (document.getElementById('galleryGrid')) renderGallery();
  if (document.getElementById('achievementGrid')) renderAchievements();

  initNavbar();
  if (document.getElementById('galleryGrid')) initGalleryFilter();
  if (document.getElementById('lightbox')) initLightbox();
  initReveal();
  if (document.querySelector('.stat__number')) initCounters();
  if (document.getElementById('starfield')) initStarfield();
  initCursorGlow();
  if (document.getElementById('contactForm')) initContactForm();
  if (document.getElementById('discordStats')) initDiscordLive();
  if (document.getElementById('discordMark')) initDiscordAvatar();
});