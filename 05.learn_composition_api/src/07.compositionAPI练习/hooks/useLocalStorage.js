import { ref, watch } from 'vue';

export default function (key, value) {
  const data = ref(value);

  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    data.value = window.localStorage.getItem(key);
  }

  watch(
    data,
    (newVal) => {
      window.localStorage.setItem(key, JSON.stringify(newVal));
    })

  return {
    data
  }
}
