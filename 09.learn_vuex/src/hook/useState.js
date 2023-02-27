import { mapState, createNamespacedHelpers } from 'vuex';
import { useComputedMapper } from './useComputedMapper';

export function useState(moduleName, mapper) {
  let mapperFn = mapState;
  if (typeof moduleName === 'string' && moduleName) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  } else {
    mapper = moduleName;
  }

  return useComputedMapper(mapper, mapperFn);
}
