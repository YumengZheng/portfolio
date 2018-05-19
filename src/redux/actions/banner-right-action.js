/* eslint-disable */
const changeRightClickHandleOn = (newClass) => {
  console.log('action 1',newClass)
  return {
    type: 'CHANGE_RIGHT_BANNER_HANDLE',
    newClass: newClass
    }
}
const changeRightOnHover = (newClass) => {
  console.log('action 2',newClass)
  return {
    type: 'CHANGE_RIGHT_BANNER_HOVER',
    newClass: newClass
    }
}
export default{
  changeRightClickHandleOn,
  changeRightOnHover
}