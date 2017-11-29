// p1
function p1f(x) {
    return 5 * x - 3 * (x * x) + 13;
}

function p1e() {
    $("#p1").text(p1f($("#p1in").val()));
}

// p2
function p2f(x, y, z) {
    var output = "Hello, " + x + " " + y + " " + z + "!";
    return output;
}

function p2e() {
    var x = $("#p2x").val(),
        y = $("#p2y").val(),
        z = $("#p2z").val();
    $("#p2").text(p2f(x, y, z));
}

// p3
function p3f(x, y) {
    var str;
    if (x > y) {
        str = "bananas";
        return str.fontcolor("yellow");
    } else if (y > x) {
        str = "porcupine";
        return str.fontcolor("brown");
    } else if (x === y && x < 0) {
        str = "red apples";
        return str.fontcolor("red");
    } else {
        str = "green apples";
        return str.fontcolor("green");
    }
}

function p3e() {
    var x = $("#p3x").val(),
        y = $("#p3y").val();
    $("#p3").html(p3f(parseFloat(x), parseFloat(y)));
}

// p4
function p4f(x) {
    var str, xn;
    xn = x.replace(/\D/g, '');
    if (xn.length === 10 || (xn.length === 11 && xn.charAt(0) === '1')) {
        str = "valid";
        return str.fontcolor("green");
    } else {
        str = "invalid";
        return str.fontcolor("red");
    }
}

function p4e() {
    var x = $("#p4x").val();
    $("#p4").html(p4f(x));
}

// p5
function p5f(x) {
    var arr = x.split(",");
    return arr[2];
}

function p5e() {
    var x = $("#p5x").val();
    $("#p5").html(p5f(x));
}

// p6

function updatePage(event) {
    var element = $(event.target), old_color, old_next_color;
    if (element.next().is('button')) {
        element.next().css("background-color", "blue");
        setTimeout(function () {element.next().css("background-color", ''); }, 1000);
    } else {
        element.prev().prev().prev().prev().css("background-color", "red");
        element.prev().prev().prev().css("background-color", "red");
        element.prev().prev().css("background-color", "red");
        element.prev().css("background-color", "red");
        element.css("background-color", "red");
        setTimeout(function () {
            element.prev().prev().prev().prev().css("background-color", '');
            element.prev().prev().prev().css("background-color", '');
            element.prev().prev().css("background-color", '');
            element.prev().css("background-color", '');
            element.css("background-color", '');
        }, 1000);
    }
    
}
