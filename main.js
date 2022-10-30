function per(){
    let a  = parseInt(document.getElementById("aplus").value);
    let a_ = parseInt(document.getElementById("a_").value); 
    let b  = parseInt(document.getElementById("bplus").value) ;
    let b_ = parseInt(document.getElementById("b_").value);
    let c  = parseInt(document.getElementById("cplus").value) ;
    let c_ = parseInt(document.getElementById("c_").value);
    let d  = parseInt(document.getElementById("dplus").value);
    let d_ = parseInt(document.getElementById("d_").value);
    let e  = parseInt(document.getElementById("e_").value);
    
    let sum = eval((a*9)+(a_*8)+(b*7)+(b_*6)+(c*5)+(c_*4)+(d*3)+(d_*2)+(e*1));
    let percen = (sum/90)*100;

    window.alert("Yor percentage is " + percen + " %");
}
