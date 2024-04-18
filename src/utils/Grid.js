function generateArr(size) {
  const arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push(i, i);
  }
  return arr;
}

export function shuffleArr(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

const arr = generateArr(8);

export const res = shuffleArr(arr);