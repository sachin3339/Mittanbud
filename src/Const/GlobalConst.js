let HOSTNAME = window.location.origin;

HOSTNAME = "http://localhost:5000"
// HOSTNAME = "https://learnlytica.assessments.live"

export const API_PATH = HOSTNAME;
let API = HOSTNAME + "/api/";

const GLOBELCONSTANT = {
    AUTH: {
        REGISTER: API + "user",
        LOGIN: API + "user/login",
        LOGOUT: API + "user/logout",
    }
    
}
export default GLOBELCONSTANT;