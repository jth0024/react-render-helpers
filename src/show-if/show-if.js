import { hideIf } from '../hide-if/hide-if';

export const showIf = condition => hideIf(!condition);
