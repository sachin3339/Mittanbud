/* Note : Calling Api Standard
* E.g : getListing Axios call accept params in following seq
* Url : service url
  payload : post data
  param : url parameter
  config : if config object
  config = {
    loader : '#container'  //loader will show for the div having id = 'container'
  }
  if any api fails or empty response comes then related messge will be shown

  Ex:
  getListing(payload,config) {
    var params ={
      viewType :'detail'
    };
    return AxiosService.post('/api/listing', payload,params,config);
  },

*
*/

import GLOBELCONSTANT from "../Const/GlobalConst.js";
import AxiosService from "./axios.service.js";

const RestService = {
  //auth
  registerUser: (payload) => AxiosService.post(GLOBELCONSTANT.AUTH.REGISTER, payload),
  loginUser: (payload) => AxiosService.post(GLOBELCONSTANT.AUTH.LOGIN, payload),
  logoutUser: (payload) => AxiosService.post(GLOBELCONSTANT.AUTH.LOGOUT, payload)
 
};



export default RestService;