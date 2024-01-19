declare global {
  interface Window {
    config: { [k: string]: string }
  }
}

export const ALCHEMY_API_KEY = window.config.REACT_APP_ALCHEMY_API_KEY
export const WC_PROJECT_ID = window.config.REACT_APP_WC_PROJECT_ID
