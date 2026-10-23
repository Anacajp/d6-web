export function range(start, end, step) {
  if (step === undefined) step = start < end ? 1 : -1;
  const result = [];
  if (step === 0 || (start < end && step < 0) || (start > end && step > 0)) return result;
  for (let n = start; step > 0 ? n <= end : n >= end; n += step) result.push(n);
  return result;
}
