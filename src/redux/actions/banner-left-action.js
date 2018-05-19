/* eslint-disable */
const changeClickHandleOn = (newClass) => {
  // console.log('action 1',newClass)
  return {
    type: 'CHANGE_LEFT_BANNER_HANDLE',
    newClass: newClass
    }
}
const changeOnHover = (newClass) => {
  // console.log('action 1',newClass)
  return {
    type: 'CHANGE_LEFT_BANNER_HOVER',
    newClass: newClass
    }
}
export default{
  changeClickHandleOn,
  changeOnHover
}