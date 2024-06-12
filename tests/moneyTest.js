import { formatCurrency } from "../scripts/utils/money.js";

console.log("Test Suite: formatCurrency");

console.log("Convert cents to dollars");

if (formatCurrency(2095) === "20.95") {
  console.log("Money test PASSED");
} else {
  console.log("Money test FAILED");
}

console.log("Works with zero");
if (formatCurrency(0) === "0.00") {
  console.log("Money test PASSED");
} else {
  console.log("Money test FAILED");
}

console.log("Rounds up to nearest cent");
if (formatCurrency(2000.5) === "20.01") {
  console.log("Money test PASSED");
} else {
  console.log("Money test FAILED");
}

console.log("Rounds down to nearest cent");
if (formatCurrency(2000.4) === "20.00") {
  console.log("Money test PASSED");
} else {
  console.log("Money test FAILED");
}
