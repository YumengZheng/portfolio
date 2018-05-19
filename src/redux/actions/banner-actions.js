/* eslint-disable */
const changeLeftBannerClass = (newClass) => {
  // console.log('action 1',newClass)
  return {
    type: 'CHANGE_LEFT_BANNER_CLASS',
    newClass: newClass
    }
}

const changeLeftImageClass = (newClass) => {
  // console.log('action 2',newClass)
  return {
    type: 'CHANGE_LEFT_BANNER_IMAGE_CLASS',
    newClass: newClass
    }
}

const changeLeftShowChart = (newClass) => {
  // console.log('action 3',newClass)
  return {
    type: 'CHANGE_LEFT_BANNER_CHART_STATUS',
    newClass: newClass
    }
}

const changeLeftShowBackground = (newClass) => {
  // console.log('action 4',newClass)
  return {
    type: 'CHANGE_LEFT_BANNER_BACKGROUND_STATUS',
    newClass: newClass
    }
}

const changeRightBannerClass = (newClass) => {
  // console.log('action 1',newClass)
  return {
    type: 'CHANGE_RIGHT_BANNER_CLASS',
    newClass: newClass
    }
}

const changeRightImageClass = (newClass) => {
  // console.log('action 2',newClass)
  return {
    type: 'CHANGE_RIGHT_BANNER_IMAGE_CLASS',
    newClass: newClass
    }
}

const changeRightShowChart = (newClass) => {
  // console.log('action 3',newClass)
  return {
    type: 'CHANGE_RIGHT_BANNER_CHART_STATUS',
    newClass: newClass
    }
}

const changeRightShowBackground = (newClass) => {
  // console.log('action 4',newClass)
  return {
    type: 'CHANGE_RIGHT_BANNER_BACKGROUND_STATUS',
    newClass: newClass
    }
}

const changeLeftArrow = (newClass) => {
  // console.log('action 4',newClass)
  return {
    type: 'CHANGE_LEFT_ARROW_STATUS',
    newClass: newClass
    }
}

const changeRightArrow = (newClass) => {
  // console.log('action 4',newClass)
  return {
    type: 'CHANGE_RIGHT_ARROW_STATUS',
    newClass: newClass
    }
}
const changeShowArrow = (newClass) => {
  console.log('action 4',newClass)
  return {
    type: 'CHANGE_ARROW_STATUS',
    newClass: newClass
    }
}



export default {
  changeLeftBannerClass,
  changeLeftImageClass,
  changeLeftShowChart,
  changeLeftShowBackground,
  changeRightBannerClass,
  changeRightImageClass,
  changeRightShowChart,
  changeRightShowBackground,
  changeLeftArrow,
  changeRightArrow,
  changeShowArrow 
}