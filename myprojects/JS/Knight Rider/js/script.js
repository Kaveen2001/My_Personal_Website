var knightRider = {
    count:0,
    temArray:[],
    leftColorArray: ['white', 'white', 'white', 'white', 'white', 'white',"rgba(217,0,44,0.12)", 'rgba(217,0,44,0.34)', 'rgba(217,0,44,0.53)', 'rgba(217,0,44,0.71)', 'rgba(217,0,44,0.89)', 'RED'],
    rightColorArray: ['white', 'white', 'white', 'white', 'white', 'white','RED','rgba(217,0,44,0.89)','rgba(217,0,44,0.71)','rgba(217,0,44,0.53)','rgba(217,0,44,0.34)','rgba(217,0,44,0.12)' ],
    /*leftColorArray: ['blue','yellow','red','white','orange'],
    rightColorArray: ['orange', 'white', 'red', 'yellow', 'blue' ],*/

    animateLeft: function () {
        var lastColor = this.temArray.pop();
        this.temArray.unshift(lastColor);
    },
    animateRight:function (){
        var firstColor = this.temArray.shift();
        this.temArray.push(firstColor);
    },
    animate:function (){
        this.count++;
        if(this.count<=this.leftColorArray.length){
            this.temArray=this.leftColorArray;
            this.animateLeft();
        }else{
            if (this.count>=(this.rightColorArray.length*2)){
                this.count=0;
            }
            this.temArray=this.rightColorArray;
            this.animateRight();
        }
    }
}

renderDivs();

function renderDivs() {
    $('#container').empty();
    for (let i = 0; i < (knightRider.temArray.length) / 2; i++) {
        $('#container').append(`<div style="background-color: ${knightRider.temArray[i]}"></div>`);
    }
    knightRider.animate();
}

var id=setInterval(renderDivs, 90);


$("#btnStart").click(function (){
    clearInterval(id);
    $('#KnigthRider-audio')[0].play();
    id=setInterval(renderDivs, 90);
    console.log("ID when Start btn Called",id);
});

$("#btnEnd").click(function (){
    clearInterval(id);
    $('#KnigthRider-audio')[0].pause();
    console.log("ID when End Btn Called",id);
});