import { mapGetters } from 'vuex';
import { useComputedMapper } from './useComputedMapper';

export function useGetters(mapper) {
  return useComputedMapper(mapper, mapGetters);
}
