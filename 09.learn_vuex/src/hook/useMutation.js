import { mapMutations, createNamespacedHelpers } from 'vuex';
import { useMethodsMapper } from './useMethodsMapper';

export function useMutation(moduleName, mapper) {
  let mapperFn = mapMutations;
  if (typeof moduleName === 'string' && moduleName) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations;
  } else {
    mapper = moduleName;
  }

  return useMethodsMapper(mapper, mapperFn);
}
