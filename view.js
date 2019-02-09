Handlebars.registerHelper('formatBDay', bday => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const [day, month] = (bday || '').split(".");

  return [day, months[month-1]].join(' ');
});

Handlebars.registerHelper('formatDate', ts => {
  return new Date(ts * 1000).toLocaleString();
});

export default {
  render(templateName, model) {
    templateName = `${templateName}Template`;

    const templateEl = document.querySelector(`#${templateName}`)
    const templateHtml = templateEl.innerHTML;
    const renderFn = Handlebars.compile(templateHtml);

    return renderFn(model)
  }
}