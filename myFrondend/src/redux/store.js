import { createStore, applyMiddleware } from "redux";

import rootReducer from "./rootReducer";

//redux-persist
import { persistStore } from "redux-persist";

//redux-saga
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware)
);

sagaMiddleware.run(watcherSaga);

export const persistor = persistStore(store);

export default { store, persistor };
