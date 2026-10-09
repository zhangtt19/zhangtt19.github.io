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
