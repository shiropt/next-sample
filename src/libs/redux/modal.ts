import { Reducer } from "react";

const IS_SHOW_MODAL = "IS_SHOW_MODAL";
const states = {
  isShow: false,
  title: "",
  okButton: "OK",
  cancelButton: "",
};

export const showModal = (payload: typeof states) =>
  ({
    type: IS_SHOW_MODAL,
    payload: payload,
  } as const);

type Action = ReturnType<typeof showModal>;

export const modalReducer: Reducer<typeof states, Action> = (
  state = states,
  action
) => {
  switch (action.type) {
    case IS_SHOW_MODAL:
      return action.payload;
    default:
      return state;
  }
};
