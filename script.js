const body = document.body;
const toggle = document.querySelector('.toggle');
const knob = document.querySelector('.knob');

// Live GitHub star count. If the request fails (offline, rate limit), the star item stays hidden.
fetch('https://api.github.com/repos/Hamzeh75/interactive-day-night-toggle')
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(repo => {
    document.querySelector('.star-count').textContent = repo.stargazers_count;
    document.querySelectorAll('.stars-item').forEach(el => el.hidden = false);
  })
  .catch(() => {});

// Skip transitions on first paint, enable them after
requestAnimationFrame(() => requestAnimationFrame(() => body.classList.remove('preload')));

toggle.addEventListener('click', () => {
  const night = !body.classList.contains('is-night');
  body.classList.toggle('is-night', night);
  body.classList.toggle('is-day', !night);
  toggle.setAttribute('aria-checked', String(night));
  toggle.setAttribute('aria-label', night ? 'Night mode' : 'Day mode');

  // Squash-and-stretch on the knob while it travels (separate from the slide transform)
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    knob.animate(
      [
        { transform: 'scale(1, 1)' },
        { transform: 'scale(1.14, .88)', offset: .25 },
        { transform: 'scale(.94, 1.06)', offset: .55 },
        { transform: 'scale(1.02, .98)', offset: .75 },
        { transform: 'scale(1, 1)' }
      ],
      { duration: 800, easing: 'ease-out' }
    );
  }
});
