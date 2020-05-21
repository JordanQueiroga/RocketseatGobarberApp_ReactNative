import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middleeares) => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middleeares))
    : applyMiddleware(...middleeares);

  return createStore(reducers, enhancer);
};
