// sol 1
var isValid = function (s) {
  let st = [];

  const pairs = { "(": ")", "{": "}", "[": "]" };

  for (const b of s) {
    const n = st.length;
    if (pairs[st[n - 1]] === b) {
      st.pop();
    } else if (pairs[st[n - 1]] === b) {
      st.pop();
    } else if (pairs[st[n - 1]] === b) {
      st.pop();
    } else if (b === "]" || b === ")" || b === "}") {
      return false;
    } else {
      st.push(b);
    }
  }
  return st.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("[()]}"));
