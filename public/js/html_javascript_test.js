function translator() {
    var input = str(document.getElementsByName('input')[0].value);
    var gvv = document.getElementsByName('gvv')[0].value;

    output = `Input is: ${input}. Gvv is: ${str(gvv)}.`
    document.getElementsByName('output')[0].value = output;
}