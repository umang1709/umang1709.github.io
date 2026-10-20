// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Nav: compact on scroll =====
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile menu =====
const burger = document.getElementById('burger');
const links = document.getElementById('navLinks');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// ===== Theme toggle (remembers choice when storage is available) =====
const root = document.documentElement;
const currentTheme = () =>
  root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ===== Scroll reveal =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
    e.target.querySelectorAll?.('[data-count]').forEach(countUp);
    if (e.target.matches('[data-count]')) countUp(e.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});

// ===== Count-up stats =====
function countUp(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseInt(el.dataset.count, 10);
  const pre = el.dataset.prefix || '';
  const suf = el.dataset.suffix || '';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = pre + target + suf; return; }
  const dur = 1300;
  let start = null;
  const step = (ts) => {
    start ??= ts;
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = pre + Math.round(target * (1 - Math.pow(1 - p, 3))) + suf;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}