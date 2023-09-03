import Streams from "../API/Streams";

export const signIn = (userid) => {
  return {
    type: "SIGN_IN",
    payload: userid,
  };
};

export const signOut = (userid) => {
  return {
    type: "SIGN_OUT",
    payload: userid,
  };
};

export const createStream = (formValues) => {
  return async (dispatch) => {
    Streams.post("/Streams", formValues);
  };
};
