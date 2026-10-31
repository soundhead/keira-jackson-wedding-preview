(() => {
  const todayParts = new Intl.DateTimeFormat('en-AU', { timeZone: 'Australia/Brisbane', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const part = name => Number(todayParts.find(item => item.type === name).value);
  const today = Date.UTC(part('year'), part('month') - 1, part('day'));
  for (const element of document.querySelectorAll('[data-wedding-countdown]')) {
    const [year, month, day] = element.dataset.date.split('-').map(Number);
    const days = Math.max(0, Math.round((Date.UTC(year, month - 1, day) - today) / 86400000));
    element.textContent = days > 0 ? `${days} days to go` : 'The day is here';
  }
})();
