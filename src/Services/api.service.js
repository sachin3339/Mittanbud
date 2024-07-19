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

import { Axios } from "axios";
import GLOBELCONSTANT from "../Const/GlobalConst.js";
import AxiosService from "./axios.service.js";

const RestService = {
  //auth
  registerUser: (payload) => AxiosService.post(GLOBELCONSTANT.AUTH.REGISTER, payload),
  loginUser: (payload) => AxiosService.post(GLOBELCONSTANT.AUTH.LOGIN, payload),
  logoutUser: (payload) => AxiosService.post(GLOBELCONSTANT.AUTH.LOGOUT, payload),

  //job
  createJob: (payload) => AxiosService.post(GLOBELCONSTANT.JOB.CREATE_JOB, payload),
  viewAllJobs: () => AxiosService.get(GLOBELCONSTANT.JOB.VIEW_ALL_JOBS),
  viewJobById: (jobId) => AxiosService.get(GLOBELCONSTANT.JOB.VIEW_JOB_BY_ID.replace(":jobId", jobId)),
  applyJob: (jobId) => AxiosService.post(GLOBELCONSTANT.JOB.APPLY_JOB.replace(":jobId", jobId)),
  completeJob: (jobId) => AxiosService.put(GLOBELCONSTANT.JOB.COMPLETE_JOB.replace(":jobId", jobId)),
  deleteJob: (jobId) => AxiosService.delete(GLOBELCONSTANT.JOB.DELETE_JOB.replace(":jobId", jobId)),
  editJob: (jobId) => AxiosService.put(GLOBELCONSTANT.JOB.EDIT_JOB.replace(":jobId", jobId)),
  getJobApplicationsById: (jobId) => AxiosService.get(GLOBELCONSTANT.JOB.GET_JOB_APPLICATIONS_BY_ID.replace(":jobId", jobId)),
  getJobPostedByUsers: () => AxiosService.get(GLOBELCONSTANT.JOB.JOB_POSTED_BY_USERS),
  jobSelected: () => AxiosService.get(GLOBELCONSTANT.JOB.JOB_SELECTED),

  getCompaniesBycategory: (category) => AxiosService.get(GLOBELCONSTANT.JOB.GET_COMPANIES_BY_CATEGORY.replace(":category", category)),
  getJobsByCategory: (category) => AxiosService.get(GLOBELCONSTANT.JOB.GET_JOBS_BY_CATEGORY.replace(":category", category)),
  getCompaniesBySubCategory: (subcategory) => AxiosService.get(GLOBELCONSTANT.JOB.GET_COMPANIES_BY_SUBCATEGORY.replace(":subcategory", subcategory)),
  getJobsBySubCategory: (subcategory) => AxiosService.get(GLOBELCONSTANT.JOB.GET_JOBS_BY_SUBCATEGORY.replace(":subcategory", subcategory))
};



export default RestService;
