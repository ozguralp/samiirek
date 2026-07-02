document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  })
);

const io = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll('.section, .release').forEach(el => io.observe(el));

const cal = document.getElementById('addToCalendar');
if (cal) {
  const ua = navigator.userAgent || navigator.platform || '';
  const isApple = /iPhone|iPad|iPod|Macintosh|Mac OS X/.test(ua) && !/Android|Windows/.test(ua);
  cal.setAttribute('href', isApple ? cal.dataset.apple : cal.dataset.google);
}

const cd = document.getElementById('countdown');
if (cd) {
  const target = new Date(cd.dataset.date).getTime();
  const el = { d: 'cd-days', h: 'cd-hours', m: 'cd-mins', s: 'cd-secs' };
  const set = (id, v) => { const n = document.getElementById(id); if (n) n.textContent = String(v).padStart(2, '0'); };
  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      cd.classList.add('countdown--past');
      const ev = document.getElementById('cd-event');
      if (ev) ev.textContent = 'Bir sonraki konser yakında duyurulacak.';
      cd.querySelector('.countdown__label').textContent = '';
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    set(el.d, Math.floor(s / 86400));
    set(el.h, Math.floor((s % 86400) / 3600));
    set(el.m, Math.floor((s % 3600) / 60));
    set(el.s, s % 60);
  };
  tick();
  const timer = setInterval(tick, 1000);
}

