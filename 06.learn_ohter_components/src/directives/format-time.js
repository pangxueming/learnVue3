import dayjs from "dayjs";

export default function registerFormatTime(app) {
  app.directive('format-time', {
    created: (el, bindings) => {
      bindings.formatStrValue = 'YYYY-MM-DD HH:mm:ss';
      const { value } = bindings;
      if (value) bindings.formatStrValue = value;
    },
    mounted: (el, bindings) => {
      const { textContent } = el;

      let timestamp = parseInt(textContent);
      if (textContent.length === 10) {
        timestamp = timestamp * 1000;
      }

      el.textContent = dayjs(timestamp).format(bindings.formatStrValue);
    }
  })
}
