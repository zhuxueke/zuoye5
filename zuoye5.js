function operate(){
    var queue =[];


    var input = document.getElementById('input');
    document.getElementById('leftIn').addEventListener("click",function(){
        queue.unshift(input.value);
        change();

    });


    document.getElementById('rightIn').addEventListener("click",function(){
        queue.push(input.value);
        change();

    });


    document.getElementById('leftOut').addEventListener("click",function(){
        if(queue.length!=0){
            var j= queue.shift();
            alert(j);
            change();
        }else{
            alert("队列为空");
        }
    });


    document.getElementById('rightOut').addEventListener("click",function(){
        if(queue.length!=0){
            var j = queue.pop();
            alert(j);
            change();
        }else{
            alert("队列为空");
        }
    });


    document.getElementById('result').addEventListener("click",function(event){
        var start = event.target.getAttribute('id');
        queue.splice(start,1);
        change();
    });


    function change(){
        var str = "";
        queue.forEach(function(a,i){
            str +="<div id='" + i + "'>"+ a +"</div>";
        });
        document.getElementById('result').innerHTML = str;
    };

}

window.onload = function(){
    operate();
}