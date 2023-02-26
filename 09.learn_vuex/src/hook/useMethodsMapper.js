import { useStore } from 'vuex';

export function useMethodsMapper(mapper, mapFn) {
  const store = useStore();
  const storeStatus = {};
  const storeFns = mapFn(mapper);

  Object.keys(storeFns).forEach(key => {
    const fn = storeFns[key].bind({ $store: store });
    storeStatus[key] = fn;
  })

  // return value is an object's function, use in options api methods
  return storeStatus;
}