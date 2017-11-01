// p1
function p1f(x) {
    return 5 * x - 3 * (x * x) + 13;
}

function p1e() {
    var x = document.getElementById("p1in").value;
    document.getElementById("p1").textContent = p1f(x);
}

