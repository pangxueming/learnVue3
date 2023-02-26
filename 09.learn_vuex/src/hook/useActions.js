import { mapActions } from 'vuex';
import { useMethodsMapper } from './useMethodsMapper';

export function useActions(mapper) {
  return useMethodsMapper(mapper, mapActions);
}
