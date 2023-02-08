import dayjs from "dayjs";

export default function registerFormatTime(app) {
  let formatStrValue = 'YYYY-MM-DD HH:mm:ss';
  app.directive('format-time', {
    created: (el, bindings) => {
      const { value } = bindings;
      if (value) formatStrValue = value;
    },
    mounted: (el, bindings) => {
      const { textContent } = el;

      let timestamp = parseInt(textContent);
      if (textContent.length === 10) {
        timestamp = timestamp * 1000;
      }

      el.textContent = dayjs(timestamp).format(formatStrValue);
    }
  })
}
