'use strict';
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('language-toggle');
  const description = document.querySelector('meta[name="description"]');
  const descriptions = {
    en: 'Qian Sen, a Computer Science undergraduate at Hohai University. Research interests: efficient LLM inference, KV cache compression, and head-wise budget allocation.',
    zh: '钱森，河海大学计算机科学与技术专业本科生，关注大模型推理优化、KV Cache 压缩与注意力头预算分配。'
  };
  function applyLanguage(language, updateUrl = false) {
    const isChinese = language === 'zh';
    root.lang = isChinese ? 'zh-CN' : 'en';
    toggle.innerHTML = isChinese ? 'English <span aria-hidden="true">↔</span>' : '中文 <span aria-hidden="true">↔</span>';
    toggle.setAttribute('aria-label', isChinese ? 'Switch to English' : 'Switch to Chinese');
    toggle.title = isChinese ? 'Switch to English' : 'Switch to Chinese';
    document.title = isChinese ? '钱森 Qian Sen | 个人学术主页' : 'Qian Sen | Academic Homepage';
    if (description) description.content = descriptions[isChinese ? 'zh' : 'en'];
    if (updateUrl) {
      try {
        const url = new URL(window.location.href);
        if (isChinese) url.searchParams.set('lang', 'zh');
        else url.searchParams.delete('lang');
        window.history.replaceState(null, '', url);
      } catch (_) { /* The page also works when opened as a local file. */ }
    }
  }
  applyLanguage(new URLSearchParams(window.location.search).get('lang') === 'zh' ? 'zh' : 'en');
  toggle.addEventListener('click', () => applyLanguage(root.lang === 'en' ? 'zh' : 'en', true));
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const links = [...document.querySelectorAll('.header-inner nav a')];
  const targets = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  let scheduled = false;
  function updateNavigation() {
    let current = targets[0];
    for (const section of targets) {
      if (section.getBoundingClientRect().top <= 160) current = section;
    }
    for (const link of links) {
      const active = current && link.getAttribute('href') === '#' + current.id;
      link.classList.toggle('active', Boolean(active));
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateNavigation); }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
})();
