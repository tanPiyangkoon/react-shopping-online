const TOGGLE_DARK_MODE = 'ui/TOGGLE_DARK_MODE'
const SET_DARK_MODE = 'ui/SET_DARK_MODE'
const SET_FLASH_MESSAGE = 'ui/SET_FLASH_MESSAGE'
const CLEAR_FLASH_MESSAGE = 'ui/CLEAR_FLASH_MESSAGE'

function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  }
}

function setFlashMessage(message) {
  return {
    type: SET_FLASH_MESSAGE,
    payload: {
      message,
    },
  }
}

function clearFlashMessage() {
  return {
    type: CLEAR_FLASH_MESSAGE,
  }
}

function setDarkMode(darkMode) {
  return {
    type: SET_DARK_MODE,
    payload: {
      darkMode,
    },
  }
}

export {
  TOGGLE_DARK_MODE,
  SET_DARK_MODE,
  SET_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE,
  toggleDarkMode,
  setFlashMessage,
  setDarkMode,
  clearFlashMessage,
}
