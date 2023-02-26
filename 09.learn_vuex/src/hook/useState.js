import { mapState } from 'vuex';
import { useComputedMapper } from './useComputedMapper';

export function useState(mapper) {
  return useComputedMapper(mapper, mapState);
}
