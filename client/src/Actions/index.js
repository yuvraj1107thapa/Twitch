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
    const response = await Streams.post("/streams", formValues);
    dispatch({
      type: "CREATE_STREAM",
      payload: response.data,
    });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await Streams.get(`/streams/${id}`);
    dispatch({
      type: "FETCH_STREAM",
      payload: response.data,
    });
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await Streams.get("/streams");
    dispatch({
      type: "FETCH_STREAMS",
      payload: response.data,
    });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await Streams.put(`/streams${id}`, formValues);
    dispatch({
      type: "EDIT_STREAM",
      payload: response.data,
    });
  };
};

export const deleteStream = (id, formValues) => {
  return async (dispatch) => {
    Streams.delete("/streams", formValues);
    dispatch({
      type: "DELETE_STREAM",
      payload: id,
    });
  };
};
