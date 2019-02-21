module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] || str[i] == bracketsConfig[j][1]) {
        if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
          if (stack[stack.length - 1] == bracketsConfig[j][0]) {
            stack.pop();
            break;
          }
          stack.push(str[i]);
          break;
        }
        if (str[i] == bracketsConfig[j][0]) {
          stack.push(str[i]);
          break;
        }
        if (stack[stack.length - 1] !== bracketsConfig[j][0] || stack.length == 0) {
          return false;
        }
        stack.pop();
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};
