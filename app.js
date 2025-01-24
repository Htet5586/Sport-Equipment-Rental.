// app.js

function updateOutput() {
    const inputText = document.getElementById("inputBox").value;
    const outputBox = document.getElementById("utputBox");

    if (inputText === "Ball") {
        outputBox.value = "10$";
    } else if (inputText === "Helmet") {
        outputBox.value = "15$";
    } else if (inputText === "Shirt") {
        outputBox.value = "8$";
    } else if (inputText === "Skate Board") {
        outputBox.value = "20$";
    } else {
        outputBox.value = "";
    }
}

function resetFields() {
    document.getElementById("inputBox").value = "";
    document.getElementById("utputBox").value = "";
}

function pdateOutput() {
    const inputText = document.getElementById("nputBox").value;
    const outputBox = document.getElementById("tputBox");

    if (inputText === "Ball") {
        outputBox.value = "Available";
    } else if (inputText === "Helmet") {
        outputBox.value = "Absence";
    } else if (inputText === "Shirt") {
        outputBox.value = "Available";
    } else if (inputText === "Skate Board") {
        outputBox.value = "Absence";
    } else {
        outputBox.value = "";
    }
}

function esetFields() {
    document.getElementById("nputBox").value = "";
    document.getElementById("tputBox").value = "";
}

function nnn() {
    document.getElementById("discount").value = "15%";
}

// Export the functions to make them testable
module.exports = {
    updateOutput,
    resetFields,
    pdateOutput,
    esetFields,
    nnn
};