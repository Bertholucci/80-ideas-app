function main()
{
    var numeroBinario = document.getElementById('valorBinario').value;
    var digit = parseInt(numeroBinario,2);

    document.getElementById('decvalue').innerHTML=digit;
    console.log(digit);
}

$(document).ready(function() {
    $("#valorBinario").keyup(function() {
        $("#valorBinario").val(this.value.match(/[0-1]*/));
    });
});
