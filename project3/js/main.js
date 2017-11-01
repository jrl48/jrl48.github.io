// p1
function p1f(x) {
    return 5 * x - 3 * (x * x) + 13;
}

function p1e() {
    var x = document.getElementById("p1in").value;
    document.getElementById("p1").textContent = p1f(x);
}

// p2
function p2f(x, y, z) {
    var output = "Hello, " + x + " " + y + " " + z + "!";
    return output;
}

function p2e() {
    var x = document.getElementById("p2x").value,
        y = document.getElementById("p2y").value,
        z = document.getElementById("p2z").value;
    document.getElementById("p2").textContent = p2f(x, y, z);
}
