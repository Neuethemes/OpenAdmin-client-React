import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert
});

export default rootReducer;