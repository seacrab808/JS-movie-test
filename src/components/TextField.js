import { Component } from "../core/heropy";
import messageStore from "../store/message";

export default class TextField extends Component {
  render() {
    this.el.innerHTML = /*html*/ `
      <input value="${messageStore.state.message}" /> 
    `; // getter 함수 실행
    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      messageStore.state.message = inputEl.value; //setter 함수 실행
    });
  }
}
