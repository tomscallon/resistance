import * as Auth from './auth';
import * as Sockets from './sockets';

export const SET_CONTAINER = 'SET_CONTAINER';
export function setContainer( containerType ) {
  return {
    type: SET_CONTAINER,
    container: containerType
  }
}

export default {
  SET_CONTAINER, setContainer,
  Auth,
  Sockets
};
