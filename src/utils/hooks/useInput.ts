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

const initialInputState = {
  value: "",
  isTouched: false,
};

type ACTIONTYPE =
  | { type: "INPUT"; payload: string }
  | { type: "BLUR"; payload: string }
  | { type: "RESET"; payload: string };

function inputStateReducer(
  state: typeof initialInputState,
  action: ACTIONTYPE
) {
  switch (action.type) {
    case "INPUT":
      return { value: action.payload, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: action.payload };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      throw new Error();
  }
}

const useInput = (validateInput: () => {}): useInputState => {
  const [state, dispatch] = useReducer(inputStateReducer, initialInputState);
  //   const [inputState, inputDispach] = useReducer(
  //     inputStateReducer,
  //     initialInputState
  //   );

  const valueChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    //dispatch();
  };

  const inputBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {};

  const reset = () => {};

  return {
    value: "",
    isValid: false,
    hasError: false,
    valueChangeHandler: valueChange,
    inputBlurHandler: inputBlur,
    reset: reset,
  };
};

export default useInput;
