export default function round(number, decimals = 4, showDecimals = false) {
  if (showDecimals) {
    return number.toFixed(decimals);
  }

  return +number.toFixed(decimals);
}
