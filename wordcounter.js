function count(){
    let string = document.getElementById("input").value
    console.log(string)
    let cnt = string.split(" ").length
    let result = document.getElementById("result")
    result.innerHTML = cnt
}