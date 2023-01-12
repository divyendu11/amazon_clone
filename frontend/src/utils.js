export const getError = (error) => {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  };
  

// 1) This function will fetch the error from backend
// 2) If error is the expected one then it will return the respective message from backend.
// 3) Else it will just display the error