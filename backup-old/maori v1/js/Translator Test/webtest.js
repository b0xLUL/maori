function trans() {
    var prompt = document.getElementsByName('prompt_input')[0].value;
    if (prompt.length > 500) {
      return;
    }
    
    var degree = document.getElementsByName('degree_input')[0].value;
    if (isNaN(degree)) {
      return;
    }
    else if (degree > 10) {
      return;
    }
    
    var out = prompt.repeat(degree)
    document.getElementsByName('output')[0].value= out;
  }