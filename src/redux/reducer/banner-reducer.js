/* eslint-disable */

const leftBannerClass = (state = "banner-left-cover", action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_LEFT_BANNER_CLASS':
    return action.newClass || null;
  default:
    return state;
  }
};
const leftImageClass = (state = 'left-face', action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_LEFT_BANNER_IMAGE_CLASS':
    return action.newClass || null;
  default:
    return state;
  }
};
const leftShowChart = (state = false, action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_LEFT_BANNER_CHART_STATUS':
    return action.newClass || null;
  default:
    return state;
  }
};
const leftShowBackground = (state = true, action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_LEFT_BANNER_BACKGROUND_STATUS':
    return action.newClass || null;
  default:
    return state;
  }
};
const rightBannerClass = (state = "banner-right-cover", action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_RIGHT_BANNER_CLASS':
    return action.newClass || null;
  default:
    return state;
  }
};
const rightImageClass = (state = 'right-face', action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_RIGHT_BANNER_IMAGE_CLASS':
    return action.newClass || null;
  default:
    return state;
  }
};
const rightShowChart = (state = false, action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_RIGHT_BANNER_CHART_STATUS':
    return action.newClass || null;
  default:
    return state;
  }
};
const rightShowBackground = (state = true, action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_RIGHT_BANNER_BACKGROUND_STATUS':
    return action.newClass || null;
  default:
    return state;
  }
};
const leftShowArrow = (state = false, action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_LEFT_ARROW_STATUS':
    return action.newClass || null;
  default:
    return state;
  }
};
const rightShowArrow = (state = false, action) => {
  // console.log('reducer', action.newClass)
  switch (action.type) {
  case 'CHANGE_RIGHT_ARROW_STATUS':
    return action.newClass || null;
  default:
    return state;
  }
};
const showArrow = (state = false, action) => {
  console.log('reducer a', action.newClass)
  switch (action.type) {
  case 'CHANGE_ARROW_STATUS':
    return action.newClass || null;
  default:
    return state;
  }
};



export default{
  leftBannerClass,
  leftImageClass,
  leftShowChart,
  leftShowBackground,
  rightBannerClass,
  rightImageClass,
  rightShowChart,
  rightShowBackground,
  leftShowArrow,
  rightShowArrow,
  showArrow
}