import { mapMutations } from 'vuex';
import { useMethodsMapper } from './useMethodsMapper';

export function useMutation(mapper) {
  return useMethodsMapper(mapper, mapMutations);
}
