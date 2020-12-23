function getRandom() {
    let num = Math.random() * 100;
    num = Math.ceil(num) * 1000;
    document.querySelector("#amount").value =
        num.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' });
}

window.onload = function() {
    document.querySelector("#setAmount").addEventListener("click", getRandom);
    readFromStorage();
};


function touchNumber() { //전화번호 하이픈
    // $("#phoneNumber").val($("#phoneNumber").val() + this.value);
    // $("#phoneNumber").val($("#phoneNumber").val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
    let number = this.innerHTML;
    let input = document.getElementById("phoneNumber");
    input.value += number;
    if (($("#phoneNumber").val() + "").length == 3)
        $("#phoneNumber").val($("#phoneNumber").val() + "-");
    else if (($("#phoneNumber").val() + "").length == 8)
        $("#phoneNumber").val($("#phoneNumber").val() + "-");


}

function deleteNumber() { //X버튼
    let input = document.getElementById("phoneNumber");
    input.value = input.value.slice(0, -2);
    $("#phoneNumber").val(($("#phoneNumber").val() + "").substring(0, ($("#phoneNumber").val() + "").length - 1));
}


$(document).ready(function() {
    //버튼의 이벤트 핸들러를 등록
    $(".btnNumber").click(touchNumber);
    $("#clear").click(function() { $("#phoneNumber").val(""); });
    $("#delete").click(deleteNumber);


});
$("#setAmount").click(function() {
    let random = document.getElementById("amount");
    random.value = Random;
});

function saveTostorage() {
    let value = document.querySelector("input").value;
    document.querySelector("input").value = "";
    localStorage.setItem("item", value);
}

function readFromStorage() {
    let itemValue = localStorage.getItem("item");
    document.querySelector("span").innerHTML = itemValue;
}

function kbd() {
    document.querySelector("#save").addEventListener("click", saveTostorage);

}