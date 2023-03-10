import { mapActions, createNamespacedHelpers } from 'vuex';
import { useMethodsMapper } from './useMethodsMapper';

export function useActions(moduleName, mapper) {
  let mapperFn = mapActions;
  if (typeof moduleName === 'string' && moduleName) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions;
  } else {
    mapper = moduleName;
  }

  return useMethodsMapper(mapper, mapperFn);
}
