// BEGIN
export default (text) => {
  const result = [];
  // before, inside, after
  let state = 'before';
  let word = [];
  Array.from(text).forEach((symbol) => {
    switch (state) {
      case 'before':
        if (symbol !== ' ' && symbol !== '\n') {
          state = 'inside';
          word.push(symbol);
        }
        break;
      case 'inside':
        if (symbol === ' ' || symbol === '\n') {
          result.push(word.join(''));
          word = [];
          state = symbol === ' ' ? 'after' : 'before';
        } else {
          word.push(symbol);
        }
        break;
      case 'after':
        if (symbol === '\n') {
          state = 'before';
        }
        break;
      default:
        throw new Error(`Unexpected state '${state}'`);
    }
  });

  if (word.length > 0) {
    result.push(word.join(''));
  }

  return result;
};

// export default (text) => {
//   let result = [];
//
//   for (const line of text.split('\n')) {
//     let startIndex = 0;
//
//     let currentSymbol = line[startIndex];
//     while (currentSymbol === ' ') {
//       startIndex++;
//       currentSymbol = line[startIndex];
//     }
//
//     let endIndex = startIndex;
//     while (currentSymbol !== ' ' && endIndex !== line.length) {
//       endIndex++;
//       currentSymbol = line[endIndex];
//     }
//
//     const word = [];
//     for (let i = startIndex; i < endIndex; i++) {
//       word.push(line[i]);
//     }
//
//     if (word.length > 0) {
//       result.push(word.join(''));
//     }
//   }
//
//   return result;
// };
// END
