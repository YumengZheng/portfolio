/* eslint-disable */
const clickHandleOn = (state = true, action) => {
  // console.log('reducer1', action.newClass)
  switch (action.type) {
  case 'CHANGE_LEFT_BANNER_HANDLE':
    return action.newClass || null;
  default:
    return state;
  }
};
const onHover = (state = false, action) => {
  // console.log('reducer2', action.newClass)
  switch (action.type) {
  case 'CHANGE_LEFT_BANNER_HOVER':
    return action.newClass || null;
  default:
    return state;
  }
};

export default{
  clickHandleOn,
  onHover
}