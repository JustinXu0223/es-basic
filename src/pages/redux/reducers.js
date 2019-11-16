const router = {
  name: 'router',
};

const demo = {
  name: 'demo',
};

function combineReducers(reducers) {
  return Object.keys(reducers).reduce((prevVal, currVal) => {
    prevVal[currVal] = reducers[currVal];
    return prevVal;
  }, {});
}

export const rootReducers = combineReducers({
  router,
  demo,
});

console.log(rootReducers);
