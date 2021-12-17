import { CHANGESWITCH } from "./actionTypes";

const changeSwitch = checked => {
  return {
    type: CHANGESWITCH,
    checked,
  }
};

export {
  changeSwitch,
}