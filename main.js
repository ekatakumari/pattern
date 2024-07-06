let pattern1 =document.getElementById("pattern1")
let str=""
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        str=str+"*"
    }
    str+='\n'
}
pattern1.innerHTML= "<pre>" + str + "</pre>";

let pattern2= document.getElementById("pattern2")
let str1=""
for(let i=1;i<=6;i++){
    for(let j=1;j<i;j++){
        str1=str1+"*"
    }
    str1=str1+"\n"
}
pattern2.innerHTML="<pre>"+str1+"</pre>"

let pattern3= document.getElementById("pattern3")
let str2=""

for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        str2=str2+(j+1)
    }
    str2=str2+"\n"
}
pattern3.innerHTML="<pre>"+str2+"</pre>"

let pattern4= document.getElementById("pattern4")
let str3=""

for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        str3=str3+(i+1)
    }
    str3=str3+"\n"
}
pattern4.innerHTML="<pre>"+str3+"</pre>"

let pattern5= document.getElementById("pattern5")
let str4=""

for(let i=0;i<5;i++){
    for(let j=0;j<(5-i);j++){
        str4=str4+"*"
    }
    str4=str4+"\n"
}

pattern5.innerHTML="<pre>"+str4+"</pre>"

// let pattern6= document.getElementById("pattern6")
// let str5=""

// for(let i=0;i<5;i++){
//     for(let j=0;j<(5-i);j++){
//         str5=str5+"*"
//     }
//     str5=str5+"\n"
// }
// pattern6.innerHTML="<pre>"+str5+"</pre>"
let pattern7= document.getElementById("pattern7")
let str6=""

for(let i=0;i<5;i++){
    for(let j=0;j<(5-i);j++){
        str6=str6+(j+1)
    }
    str6=str6+"\n"
}

pattern7.innerHTML="<pre>"+str6+"</pre>"



let pattern8= document.getElementById("pattern8")
let str7=""

for(let i=1;i<=5;i++){
    for(let j=i;j<=5;j++){
        str7=str7+" "
    }
    for(let k=1;k<=(2*i-1);k++){
        str7=str7+"*"
    }
    str7=str7+"\n"
}

pattern8.innerHTML = "<pre>" + str7 + "</pre>";


let pattern9 = document.getElementById("pattern9");
let str8 = "";

for (let i = 5; i >= 1; i--) {
    for (let j = i; j < 5; j++) {
        str8 += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        str8 += "*";
    }
    str8 += "\n";
}

pattern9.innerHTML = "<pre>" + str8 + "</pre>";


let patter10=document.getElementById("pattern10");
let str9=str7+" "+str8
pattern10.innerHTML = "<pre>" + str9 + "</pre>";




let pattern11 = document.getElementById("pattern11");
let str10 = "";
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        str10=str10+"*"
    }
    str10=str10+"\n"
}
for(let i=3;i>=0;i--){
    for(let j=0;j<=i;j++){
        str10=str10+"*"
    }
    str10=str10+"\n"
}
pattern11.innerHTML="<pre>" + str10 + "</pre>";



let pattern12 = document.getElementById("pattern12");
let str11 = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        str11 += j;
    }
    for (let k = 1; k <= 2 * (5 - i); k++) {
        str11 += " ";
    }
    for (let l = i; l >= 1; l--) {
        str11 += l;
    }
    str11 += '\n';
}
pattern12.innerHTML = "<pre>" + str11 + "</pre>";
