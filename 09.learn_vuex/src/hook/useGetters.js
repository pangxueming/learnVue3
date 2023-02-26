import { mapGetters, createNamespacedHelpers } from 'vuex';
import { useComputedMapper } from './useComputedMapper';

export function useGetters(moduleName, mapper) {
  let mapperFn = mapGetters;
  if (typeof moduleName === 'string' && moduleName) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters;
  }
  
  return useComputedMapper(mapper, mapperFn);
}
