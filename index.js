var katzDeliLine = [];

function takeANumber(line, newCustomer) {
  line.push(newCustomer);
  var position = line.length;
  return `Welcome, ${newCustomer}. You are number ${position} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  var name = line.shift();
  return `Currently serving ${name}.`;
  }
}