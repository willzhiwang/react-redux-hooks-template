import { SET_FIRST_NAME, SET_LAST_NAME, RESET_NAME } from "../types";
export const updateFirstName = (firstName) => (dispatch, getState) => {
  try {
    console.log(firstName, getState());
    dispatch({
      type: SET_FIRST_NAME,
      payload: {
        firstName,
        message: `Update Firstname ${
          getState().nameReducer.firstName
        } to ${firstName} `,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};
export const updateLastName = (lastName) => (dispatch, getState) => {
  try {
    console.log(lastName);
    dispatch({
      type: SET_LAST_NAME,
      payload: {
        lastName,
        message: `Update Lastname ${
          getState().nameReducer.lastName
        } to ${lastName} `,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const resetName = () => (dispatch, getState) => {
  try {
    dispatch({
      type: RESET_NAME,
      payload: {
        message: `Reset Name to Default`,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};
