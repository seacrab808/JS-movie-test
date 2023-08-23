import { Component } from "../core/heropy";
import messageStore from "../store/message";

export default class Message extends Component {
  constructor() {
    super();
    // 데이터 변경 감지, 감지 되면 콜백함수 실행
    messageStore.subscribe("message", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /*html*/ `
      <h2>${messageStore.state.message}</h2>
    `;
  }
}
