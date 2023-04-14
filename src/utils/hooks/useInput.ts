import { useReducer } from "react";
import { ChangeEvent, FocusEvent } from "react";

export type useInputState = {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangeHandler: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputBlurHandler: (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  reset: () => void;
};


type inputState = {
  value: string,
  isTouched: boolean
}

const initialInputState: inputState = {
  value: "",
  isTouched: false,
};

type ACTIONTYPE =
  | { type: "INPUT"; payload: string }
  | { type: "BLUR"; }
  | { type: "RESET"; };

function inputStateReducer(
  state: inputState,
  action: ACTIONTYPE
): inputState {
  switch (action.type) {
    case "INPUT":
      return { value: action.payload, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      throw new Error();
  }
}

const useInput = (validateInput: (value: string) => boolean): useInputState => {
  const [state, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateInput(state.value);
  const hasError: boolean = !valueIsValid && state.isTouched;

  const valueChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({type: "INPUT", payload: event.target.value});
  };

  const inputBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({type: "BLUR"});
  };

  const reset = () => {
    dispatch({type: "RESET"});
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChange,
    inputBlurHandler: inputBlur,
    reset: reset,
  };
};

export default useInput;
