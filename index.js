function takeANumber(line, person) {
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if(line.length > 0) {
    let curr = line.shift();
    return "Currently serving " + curr + ".";
  }
  return "There is nobody waiting to be served!";
}

function currentLine(line) {
  let str = "The line is currently";
  if(line.length == 0) {
    str += " empty.";
    return str;
  }
  str += ": ";
  for(let i = 0; i < line.length; ++i) {
    str += i+1 + ". " + line[i];
    if(i < line.length - 1) {
      str += ", ";
    }
  }

  return str;
}
