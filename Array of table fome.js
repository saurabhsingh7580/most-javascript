let ary = [
["ankit",18,"female","b.com"],
["Saurabh",35,"male","BBA"],
["Neha",13,"female","b.com"],
["harry",18,"male","ba"]
];
console.log(ary+"<table border=1px>");
for (var a =0;a<ary.length;a++);{
    console.log("<tr>")
    for(var b =0;b<ary.length;b++){
        console.log("<td>+ary[a][b]+</td></tr>")
    }
  

}
document.write("</table>")
// // abhi galta hai


// Remove

// let a = ["saurabh","singh","ayush"]
// a[0]="lucky"
// console.log(a)