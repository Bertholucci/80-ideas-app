function showDefaultValues(){
    const defaultTopLeft = document.getElementById("top_left").value;
    document.getElementById("resultTopLeft").innerText = defaultTopLeft;

    const defaultTopRight = document.getElementById("top_right").value;
    document.getElementById("resultTopRight").innerText = defaultTopRight;

    const defaultBottomRight = document.getElementById("bottom_right").value;
    document.getElementById("resultBottomRight").innerText = defaultBottomRight;

    const defaultBottomLeft = document.getElementById("bottom_left").value;
    document.getElementById("resultBottomLeft").innerText = defaultBottomLeft;
}

function alterarValores(){
    let propertyTopLeft = document.getElementById("top_left").value;
    document.getElementById("resultTopLeft").innerText = propertyTopLeft;

    let propertyTopRight= document.getElementById("top_right").value;
    document.getElementById("resultTopRight").innerText = propertyTopRight;

    let propertyBottomRight = document.getElementById("bottom_right").value;
    document.getElementById("resultBottomRight").innerText = propertyBottomRight;

    let propertyBottomLeft = document.getElementById("bottom_left").value;
    document.getElementById("resultBottomLeft").innerText = propertyBottomLeft;

    document.getElementById("box").style.borderTopLeftRadius = propertyTopLeft+"%";
    document.getElementById("box").style.borderTopRightRadius = propertyTopRight+"%";
    document.getElementById("box").style.borderBottomRightRadius = propertyBottomRight+"%";
    document.getElementById("box").style.borderBottomLeftRadius = propertyBottomLeft+"%";
}