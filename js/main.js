// this function stops bpm from going over 3 characters

function limit(element) {
  var max_chars = 3;

  if (element.value.length >= max_chars) {
    element.value = element.value.substr(0, max_chars);
  }
}
