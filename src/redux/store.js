import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import { authReducer } from './auth';

// =========== with localStorage====================
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
export default { store, persistor };

// =========== without localStorage====================
// const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: { auth: authReducer, contacts: reducer },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
// export default store;
