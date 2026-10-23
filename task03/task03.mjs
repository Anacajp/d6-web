export function countGs(str) {
  let count = 0;
  for (const letter of str) if (letter === "G") count++;
  return count;
}
