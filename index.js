var katzDeliLine = [];

function takeANumber(line, newCustomer) {
  line.push(newCustomer);
  position = line.length
  return `Welcome, ${newCustomer}. You are number ${position} in line.`
}