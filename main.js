import _ from "lodash";

const userA = [
  { usereId: "1", name: "HEROPY" },
  { usereId: "2", name: "Neo" },
];

const userB = [
  { usereId: "1", name: "HEROPY" },
  { usereId: "2", name: "any" },
];

const userC = userA.concat(userB);
console.log("concat", userC);

console.log("hello!! World!!");
console.log(_.camelCase("hello world"));
