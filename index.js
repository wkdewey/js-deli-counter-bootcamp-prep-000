var katzDeliLine = [];

function takeANumber(line, newCustomer) {
  line.push(newCustomer);
  var position = line.length
  return `Welcome, ${newCustomer}. You are number ${position} in line.`
}

function