export function cToF(c: number) {
  return parseInt(((c * 1.8) + 32).toFixed(0));
}
export function fToC(f: number) {
  return parseInt(((f - 32) / 1.8).toFixed(0));
}
export function isDayTime() {
  const hours = new Date().getHours();
  return hours > 6 && hours < 20;
}
