var isValid = function(s) {
    if (s == "()" || s == "{}" || s == "[]"){
        console.log(true,s)
    }else{
        console.log(false,s)
    }
};
isValid("{[]}")