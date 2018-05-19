/* eslint-disable */
const rightClickHandleOn = (state = true, action) => {
  console.log('reducer1', action.newClass)
  switch (action.type) {
  case 'CHANGE_RIGHT_BANNER_HANDLE':
    return action.newClass || null;
  default:
    return state;
  }
};
const rightOnHover = (state = false, action) => {
  console.log('reducer2', action.newClass)
  switch (action.type) {
  case 'CHANGE_RIGHT_BANNER_HOVER':
    return action.newClass || null;
  default:
    return state;
  }
};

export default{
  rightClickHandleOn,
  rightOnHover
}