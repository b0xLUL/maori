function translator() {
    var input = String(document.getElementsByName('input')[0].value);
    var gvv = document.getElementsByName('gvv')[0].value;

    output = `Input is: ${input}. Gvv is: ${String(gvv)}.`
    document.getElementsByName('output')[0].value = output;
}