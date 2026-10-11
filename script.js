(() => {
  const button = document.getElementById('language');
  const setLanguage = (language) => {
    const chinese = language === 'zh-CN';
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    document.title = chinese ? '张天舒 | 水资源工程与水文建模' : 'Tianshu Zhang | Water Resources Engineering';
    button.textContent = chinese ? 'English' : '中文';
    button.setAttribute('aria-label', chinese ? 'Switch to English' : '切换到中文');
    try { localStorage.setItem('tianshu-language', language); } catch {}
  };
  let preferred = 'en';
  try { preferred = localStorage.getItem('tianshu-language') || 'en'; } catch {}
  setLanguage(preferred);
  button.hidden = false;
  button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh-CN' : 'en'));
})();


(() => {
  const dialog = document.getElementById('figure-dialog');
  const full = document.getElementById('figure-full');
  const caption = document.getElementById('figure-caption');
  const original = document.getElementById('figure-original');
  let trigger;
  document.querySelectorAll('[data-full]').forEach(button => {
    button.addEventListener('click', () => {
      trigger = button;
      const text = document.documentElement.lang === 'zh-CN' ? button.dataset.captionZh : button.dataset.captionEn;
      full.src = button.dataset.full;
      full.alt = text;
      caption.textContent = text;
      original.href = button.dataset.full;
      dialog.showModal();
      document.body.classList.add('figure-open');
    });
  });
  dialog.querySelector('.figure-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {
    const r = dialog.getBoundingClientRect();
    if (e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('figure-open');
    if (trigger) trigger.focus();
  });
})();

(() => {
 const syncLabels = () => {
  const zh = document.documentElement.lang === 'zh-CN';
  document.querySelectorAll('[data-full]').forEach(button => {
   const label = zh ? button.dataset.captionZh : button.dataset.captionEn;
   button.setAttribute('aria-label', (zh ? '查看原图：' : 'View figure: ') + label);
   button.querySelector('img').alt = label;
  });
  document.querySelector('.figure-close').setAttribute('aria-label', zh ? '关闭图片' : 'Close figure');
 };
 document.getElementById('language').addEventListener('click', syncLabels);
 syncLabels();
})();
