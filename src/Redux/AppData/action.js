// import axios from "axios"
import {
  GET_ADMINDATA_ERROR,
  GET_ADMINDATA_SUCCESS,
  GET_ADMINSEARCH_ERROR,
  GET_ADMINSEARCH_REQUEST,
  GET_ADMINSEARCH_SUCCESS,
  GET_MONTHLYUNIQUEUSER_ERROR,
  GET_MONTHLYUNIQUEUSER_SUCCESS,
  GET_PAYMENTHISTORY_ERROR,
  GET_PAYMENTHISTORY_REQUEST,
  GET_PAYMENTHISTORY_SUCCESS,
  GET_SINGLEADMINDATA_ERROR,
  GET_SINGLEADMINDATA_SUCCESS,
  GET_SUPPORTREQUEST_ERROR,
  GET_SUPPORTREQUEST_SUCCESS,
  GET_TOTALUNIQUEUSER_ERROR,
  GET_TOTALUNIQUEUSER_SUCCESS,
  GET_UNIQUEUSER_ERROR,
  GET_UNIQUEUSER_SUCCESS,
  GET_USERFEEDBACK_ERROR,
  GET_USERFEEDBACK_REQUEST,
  GET_USERFEEDBACK_SUCCESS,
  GET_WEEKLYUNIQUEUSER_ERROR,
  GET_WEEKLYUNIQUEUSER_SUCCESS,
  POST_ADDADMIN_ERROR,
  POST_ADDADMIN_REQUEST,
  POST_ADDADMIN_SUCCESS,
  POST_SENDMESSAGE_ERROR,
  POST_SENDMESSAGE_REQUEST,
  POST_SENDMESSAGE_SUCCESS,
  POST_SUPPORTREQUEST_ERROR,
  POST_SUPPORTREQUEST_SUCCESS,
  POST_USERFEEDBACK_ERROR,
  POST_USERFEEDBACK_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const getPaymentHistoryRequest = () => {
  return {
    type: GET_PAYMENTHISTORY_REQUEST,
  };
};
const getPaymentHistorySuccess = (payload) => {
  return {
    type: GET_PAYMENTHISTORY_SUCCESS,
    payload,
  };
};
const getPaymentHistoryError = () => {
  return {
    type: GET_PAYMENTHISTORY_ERROR,
  };
};

const getUserFeedbackRequest = () => {
  return {
    type: GET_USERFEEDBACK_REQUEST,
  };
};
const getUserFeedbackSuccess = (payload) => {
  return {
    type: GET_USERFEEDBACK_SUCCESS,
    payload,
  };
};
const getUserFeedbackError = () => {
  return {
    type: GET_USERFEEDBACK_ERROR,
  };
};

const getAdminSearchRequest = () => {
  return {
    type: GET_ADMINSEARCH_REQUEST,
  };
};
const getAdminSearchSuccess = (payload) => {
  return {
    type: GET_ADMINSEARCH_SUCCESS,
    payload,
  };
};
const getAdminSearchError = () => {
  return {
    type: GET_ADMINSEARCH_ERROR,
  };
};

const postUserFeedbackSuccess = (payload) => {
  return {
    type: POST_USERFEEDBACK_SUCCESS,
    payload,
  };
};
const postUserFeedbackError = () => {
  return {
    type: POST_USERFEEDBACK_ERROR,
  };
};

const getAdminDataSuccess = (payload) => {
  return {
    type: GET_ADMINDATA_SUCCESS,
    payload,
  };
};
const getAdminDataError = () => {
  return {
    type: GET_ADMINDATA_ERROR,
  };
};

const getSingleAdminDataSuccess = (payload) => {
  return {
    type: GET_SINGLEADMINDATA_SUCCESS,
    payload,
  };
};
const getSingleAdminDataError = () => {
  return {
    type: GET_SINGLEADMINDATA_ERROR,
  };
};

const getSupportRequestSuccess = (payload) => {
  return {
    type: GET_SUPPORTREQUEST_SUCCESS,
    payload,
  };
};
const getSupportRequestError = () => {
  return {
    type: GET_SUPPORTREQUEST_ERROR,
  };
};

const postSupportRequestSuccess = (payload) => {
  return {
    type: POST_SUPPORTREQUEST_SUCCESS,
    payload,
  };
};
const postSupportRequestError = () => {
  return {
    type: POST_SUPPORTREQUEST_ERROR,
  };
};

const postAddAdminRequest = () => {
  return {
    type: POST_ADDADMIN_REQUEST,
  };
};
const postAddAdminSuccess = (payload) => {
  return {
    type: POST_ADDADMIN_SUCCESS,
    payload,
  };
};
const postAddAdminError = () => {
  return {
    type: POST_ADDADMIN_ERROR,
  };
};

const postSendMessageRequest = () => {
  return {
    type: POST_SENDMESSAGE_REQUEST,
  };
};
const postSendMessageSuccess = (payload) => {
  return {
    type: POST_SENDMESSAGE_SUCCESS,
    payload,
  };
};
const postSendMessageError = () => {
  return {
    type: POST_SENDMESSAGE_ERROR,
  };
};

const getUniqueUserSuccess = (payload) => {
  return {
    type: GET_UNIQUEUSER_SUCCESS,
    payload,
  };
};
const getUniqueUserError = () => {
  return {
    type: GET_UNIQUEUSER_ERROR,
  };
};

const getTotalUniqueUserSuccess = (payload) => {
  return {
    type: GET_TOTALUNIQUEUSER_SUCCESS,
    payload,
  };
};
const getTotalUniqueUserError = () => {
  return {
    type: GET_TOTALUNIQUEUSER_ERROR,
  };
};

const getWeeklyUniqueUserSuccess = (payload) => {
  return {
    type: GET_WEEKLYUNIQUEUSER_SUCCESS,
    payload,
  };
};
const getWeeklyUniqueUserError = () => {
  return {
    type: GET_WEEKLYUNIQUEUSER_ERROR,
  };
};

const getMonthlyUniqueUserSuccess = (payload) => {
  return {
    type: GET_MONTHLYUNIQUEUSER_SUCCESS,
    payload,
  };
};
const getMonthlyUniqueUserError = () => {
  return {
    type: GET_MONTHLYUNIQUEUSER_ERROR,
  };
};

const getPaymentHistory = (params) => (dispatch) => {
  dispatch(getPaymentHistoryRequest());
  return axios
    .get(
      `https://admin-bot.furation.tech/api/v1/payment/admin/${params.adminId}`
    )
    .then((res) => {
      dispatch(getPaymentHistorySuccess(res.data));
    })
    .catch((error) => {
      dispatch(getPaymentHistoryError());
    });
};

const getAdminSearchInput = (params) => (dispatch) => {
  dispatch(getAdminSearchRequest());
  return axios
    .get(`https://admin-bot.furation.tech/api/v1/admin/search`, { params })
    .then((res) => {
      dispatch(getAdminSearchSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getAdminSearchError());
    });
};

const getUserFeedback = (params) => (dispatch) => {
  dispatch(getUserFeedbackRequest());
  return axios
    .get(`https://what-bot.furation.tech/feedback`, { params })
    .then((res) => {
      dispatch(getUserFeedbackSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(getUserFeedbackError());
    });
};

const postUserFeedback = (payload) => (dispatch) => {
  return axios
    .post("https://what-bot.furation.tech/feedback", payload)
    .then((r) => {
      dispatch(postUserFeedbackSuccess());
    })
    .catch((e) => {
      dispatch(postUserFeedbackError());
    });
};

const getAdminData = (params) => (dispatch) => {
  return axios
    .get(`https://admin-bot.furation.tech/api/v1/admin`, { params })
    .then((res) => {
      dispatch(getAdminDataSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getAdminDataError());
    });
};

const getSingleAdminData = (params) => (dispatch) => {
  return axios
    .get(`https://admin-bot.furation.tech/api/v1/admin/id/${params.adminId}`)
    .then((res) => {
      dispatch(getSingleAdminDataSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getSingleAdminDataError());
    });
};

const getSupportRequest = (params) => (dispatch) => {
  return axios
    .get(`https://what-bot.furation.tech/requestsupport`, { params })
    .then((res) => {
      dispatch(getSupportRequestSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(getSupportRequestError());
    });
};

const postSendMessage = (payload) => (dispatch) => {
  dispatch(postSendMessageRequest());
  return axios
    .post("https://what-bot.furation.tech/sendmessage", payload)
    .then((r) => {
      dispatch(postSendMessageSuccess());
    })
    .catch((e) => {
      dispatch(postSendMessageError());
    });
};

const postImageSendMessage = (payload) => (dispatch) => {
  dispatch(postSendMessageRequest());

  const adminId = JSON.parse(localStorage.getItem("admin")).adminId;

  let presignedURL = "";
  let mediaURL = "";

  return axios
    .post("https://what-bot.furation.tech/uploadImage", {
      adminId,
      fileExtension: payload.image.type,
    })
    .then((response) => {
      presignedURL = response.data.data.presignedURL;
      mediaURL = response.data.data.mediaURL;

      const selectedImage = payload.image;
      if (selectedImage) {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const imageDataUrl = event.target.result;
          const headers = {
            "Content-Type": "image/png",
          };
          await axios.put(presignedURL, selectedImage, { headers });
        };

        reader.readAsDataURL(selectedImage);
      }
      return axios
        .post("https://what-bot.furation.tech/sendmessage", {
          ...payload,
          image: [mediaURL],
        })
        .then((r) => {
          dispatch(postSendMessageSuccess());
        })
        .catch((error) => {
          dispatch(postSendMessageError());
        });
    })
    .catch((error) => {
      dispatch(postSendMessageError());
    });
};
// const postImageSendMessage= (payload)=> (dispatch)=>{
//     dispatch(postSendMessageRequest());
//     const adminId= JSON.parse(localStorage.getItem("admin")).adminId;
//     let presignedURL="";
//     let mediaURL="";
//    axios.post("https://what-bot.furation.tech/uploadImage", { adminId })
//     .then((r)=>{
//         presignedURL= r.data.data.presignedURL;
//         mediaURL= r.data.data.mediaURL;
//         console.log("pre",presignedURL)
//        axios.put(r.data.data.presignedURL, payload.image).then((res)=>{
//         console.log(res)

//        })
//      })
//     .catch((e)=>{dispatch(postSendMessageError())})
//     // if(presignedURL!==""){
//     //     axios.put(presignedURL, payload.image)
//     //     console.log({presignedURL, mediaURL});
//     // }
//     return axios.post("https://what-bot.furation.tech/sendmessage", {...payload, "image": mediaURL})
//     .then((r)=>{dispatch(postSendMessageSuccess())})
//     .catch((e)=>{dispatch(postSendMessageError())})
// }

// const postImageSendMessage = (payload) => (dispatch) => {
//     dispatch(postSendMessageRequest());
//     const adminId = JSON.parse(localStorage.getItem("admin")).adminId;
//     let presignedURL = "";
//     let mediaURL = "";

//     axios
//       .post("https://what-bot.furation.tech/uploadImage", { adminId })
//       .then((r) => {
//         presignedURL = r.data.data.presignedURL;
//         mediaURL = r.data.data.mediaURL;
//         console.log({ presignedURL, mediaURL });
//         console.log(payload.image)
//         if (presignedURL !== "") {

//           // Move the axios.put request inside tconhe .then block
//           axios.put(r.data.data.presignedURL, payload.image, { headers: { 'Content-Type': 'application/octet-stream'}})
//             .then(() => {
//               console.log({ presignedURL, mediaURL });

//               // After successfully uploading the image, send the message
//               axios
//                 .post("https://what-bot.furation.tech/sendmessage", {
//                   ...payload,
//                   image: mediaURL,
//                 })
//                 .then((r) => {
//                   dispatch(postSendMessageSuccess());
//                 })
//                 .catch((e) => {
//                   dispatch(postSendMessageError());
//                 });
//             })
//             .catch((e) => {
//               dispatch(postSendMessageError());
//             });
//         }else {
//             dispatch(postSendMessageError());
//         }
//       })
//       .catch((e) => {
//         dispatch(postSendMessageError());
//       });
//   };

const postSupportRequest = (payload) => (dispatch) => {
  return axios
    .post("https://what-bot.furation.tech/requestsupport", payload)
    .then((r) => {
      dispatch(postSupportRequestSuccess());
    })
    .catch((e) => {
      dispatch(postSupportRequestError());
    });
};

const postAddAdmin = (payload) => (dispatch) => {
  dispatch(postAddAdminRequest());
  return axios
    .post("https://admin-bot.furation.tech/api/v1/admin/new", payload)
    .then((r) => {
      dispatch(postAddAdminSuccess());
    })
    .catch((e) => {
      dispatch(postAddAdminError());
    });
};

const getUniqueUser = () => (dispatch) => {
  return axios
    .get(`https://what-bot.furation.tech/dailyuser`)
    .then((res) => {
      dispatch(getUniqueUserSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getUniqueUserError());
    });
};

const getTotalUniqueUser = (params) => (dispatch) => {
  return axios
    .get(`https://what-bot.furation.tech/totaluser`, { params })
    .then((res) => {
      dispatch(getTotalUniqueUserSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getTotalUniqueUserError());
    });
};

const getWeeklyUniqueUser = () => (dispatch) => {
  return axios
    .get(`https://what-bot.furation.tech/weeklyuser`)
    .then((res) => {
      dispatch(getWeeklyUniqueUserSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getWeeklyUniqueUserError());
    });
};

const getMonthlyUniqueUser = (params) => (dispatch) => {
  return axios
    .get(`https://what-bot.furation.tech/monthlyuser`, { params })
    .then((res) => {
      dispatch(getMonthlyUniqueUserSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getMonthlyUniqueUserError());
    });
};

export {
  getPaymentHistory,
  getAdminSearchInput,
  getUserFeedback,
  postUserFeedback,
  getAdminData,
  getSingleAdminData,
  getSupportRequest,
  postSendMessage,
  postImageSendMessage,
  postSupportRequest,
  postAddAdmin,
  getUniqueUser,
  getTotalUniqueUser,
  getWeeklyUniqueUser,
  getMonthlyUniqueUser,
};
