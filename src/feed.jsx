import { post } from "./post";
export default function feed() {
  console.log("i am feed function");
  post();
  post();
  post();
}

export function another() {
  console.log("i am another func");
}
