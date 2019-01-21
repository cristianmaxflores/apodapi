
export const requestTxt = "Fetching Astronomy Picture of the Day..."
export const failureTxt = "Error Fetching from API (try with dates before today)"

const API_KEY = "api_key=V1Ty1SHoWp0MMhNkXJMGWEKYeqSCCm0Hbd7n6l7A"
const URL = "https://api.nasa.gov/planetary/apod?"
export const API_URL = URL + API_KEY
export const API_PUBLIC_IMG_URL = URL + API_KEY + "&date=2019-01-01"
export const API_VIDEO_URL = URL + API_KEY + "&date=2019-01-08"