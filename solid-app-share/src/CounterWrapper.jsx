import { render } from "solid-js/web";
import Counter from "./Counter";
// 這裡是為了提供給不同框架的專案引入使用所以要將它先行渲染出來
export default (el) => {
  render(Counter, el);
};