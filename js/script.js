let activePlayer=0;
let cage1,cage2,cage3;
let cage4,cage5,cage6;
let cage7,cage8,cage9;
cage1=document.getElementById("places1");
cage2=document.getElementById("places2");
cage3=document.getElementById("places3");
cage4=document.getElementById("places4");
cage5=document.getElementById("places5");
cage6=document.getElementById("places6");
cage7=document.querySelector("#places7");
cage8=document.querySelector("#places8");
cage9=document.querySelector("#places9");

function equalCageColors1(){
    if(cage7.innerHTML==cage8.innerHTML && cage8.innerHTML==cage9.innerHTML){
        if(cage7.innerHTML=="X" && cage8.innerHTML=="X" && cage9.innerHTML=="X"){
            cage7.style.color="red";
            cage8.style.color="red";
            cage9.style.color="red";
            activePlayer=11;
            let winnerName=document.querySelector("#winnername1");
            winnerName.innerHTML="PLAYER X WINNER";
            winnerName.style.color="red";
            document.getElementById("player-0").style.backgroundColor="rgb(151, 79, 245)";
            document.getElementById("current-0").style.display="none";
            document.getElementById("congrat-img").style.display="block";
        }else if(cage7.innerHTML=="0" && cage8.innerHTML=="0" && cage9.innerHTML=="0"){
            cage7.style.color="red";
            cage8.style.color="red";
            cage9.style.color="red";
            activePlayer=11;
            let winnerName=document.querySelector("#winnername2");
            winnerName.innerHTML="PLAYER Y WINNER";
            winnerName.style.color="red";
            document.getElementById("player-1").style.backgroundColor="rgb(151, 79, 245)";
            document.getElementById("current-1").style.display="none";
            document.getElementById("congrat-img1").style.display="block";
        }
    }
    equalCageColors2();
    function equalCageColors2(){
        if(cage1.innerHTML==cage2.innerHTML && cage1.innerHTML==cage3.innerHTML){
            if(cage1.innerHTML=="X" && cage2.innerHTML=="X" && cage3.innerHTML=="X"){
                cage1.style.color="red";
                cage2.style.color="red";
                cage3.style.color="red";
                activePlayer=11;
                let winnerName=document.querySelector("#winnername1");
                winnerName.innerHTML="PLAYER X WINNER";
                winnerName.style.color="red";
                document.getElementById("player-0").style.backgroundColor="rgb(151, 79, 245)";
                document.getElementById("current-0").style.display="none";
                document.getElementById("congrat-img").style.display="block";
            }else if(cage1.innerHTML=="0" && cage2.innerHTML=="0" && cage3.innerHTML=="0"){
                cage1.style.color="red";
                cage2.style.color="red";
                cage3.style.color="red";
                activePlayer=11;
                let winnerName=document.querySelector("#winnername2");
                winnerName.innerHTML="PLAYER Y WINNER";
                winnerName.style.color="red";
                document.getElementById("player-1").style.backgroundColor="rgb(151, 79, 245)";
                document.getElementById("current-1").style.display="none";
                document.getElementById("congrat-img1").style.display="block";
            }
        }
        equalCageColors3();
        function equalCageColors3(){
            if(cage4.innerHTML==cage5.innerHTML && cage4.innerHTML==cage6.innerHTML){
                if(cage4.innerHTML=="X" && cage5.innerHTML=="X" && cage6.innerHTML=="X"){
                    cage4.style.color="red";
                    cage5.style.color="red";
                    cage6.style.color="red";
                    activePlayer=11;
                    let winnerName=document.querySelector("#winnername1");
                    winnerName.innerHTML="PLAYER X WINNER";
                    winnerName.style.color="red";
                    document.getElementById("player-0").style.backgroundColor="rgb(151, 79, 245)";
                    document.getElementById("current-0").style.display="none";
                    document.getElementById("congrat-img").style.display="block";
                }else if(cage4.innerHTML=="0" && cage5.innerHTML=="0" && cage6.innerHTML=="0"){
                    cage4.style.color="red";
                    cage5.style.color="red";
                    cage6.style.color="red";
                    activePlayer=11;
                    let winnerName=document.querySelector("#winnername2");
                    winnerName.innerHTML="PLAYER Y WINNER";
                    winnerName.style.color="red";
                    document.getElementById("player-1").style.backgroundColor="rgb(151, 79, 245)";
                    document.getElementById("current-1").style.display="none";
                    document.getElementById("congrat-img1").style.display="block";
                }
            }
            equalCageColors4();
            function equalCageColors4(){
                if(cage1.innerHTML==cage4.innerHTML && cage1.innerHTML==cage7.innerHTML){
                    if(cage1.innerHTML=="X" && cage4.innerHTML=="X" && cage7.innerHTML=="X"){
                        cage1.style.color="red";
                        cage4.style.color="red";
                        cage7.style.color="red";
                        activePlayer=11;
                        let winnerName=document.querySelector("#winnername1");
                        winnerName.innerHTML="PLAYER X WINNER";
                        winnerName.style.color="red";
                        document.getElementById("player-0").style.backgroundColor="rgb(151, 79, 245)";
                        document.getElementById("current-0").style.display="none";
                        document.getElementById("congrat-img").style.display="block";
                    }else if(cage1.innerHTML=="0" && cage4.innerHTML=="0" && cage7.innerHTML=="0"){
                        cage1.style.color="red";
                        cage4.style.color="red";
                        cage7.style.color="red";
                        activePlayer=11;
                        let winnerName=document.querySelector("#winnername2");
                        winnerName.innerHTML="PLAYER Y WINNER";
                        winnerName.style.color="red";
                        document.getElementById("player-1").style.backgroundColor="rgb(151, 79, 245)";
                        document.getElementById("current-1").style.display="none";
                        document.getElementById("congrat-img1").style.display="block";
                    }
                }
                equalCageColors5();
                function equalCageColors5(){
                    if(cage2.innerHTML==cage5.innerHTML && cage2.innerHTML==cage8.innerHTML){
                        if(cage2.innerHTML=="X" && cage5.innerHTML=="X" && cage8.innerHTML=="X"){
                            cage2.style.color="red";
                            cage5.style.color="red";
                            cage8.style.color="red";
                            activePlayer=11;
                            let winnerName=document.querySelector("#winnername1");
                            winnerName.innerHTML="PLAYER X WINNER";
                            winnerName.style.color="red";
                            document.getElementById("player-0").style.backgroundColor="rgb(151, 79, 245)";
                            document.getElementById("current-0").style.display="none";
                            document.getElementById("congrat-img").style.display="block";
                        }else if(cage2.innerHTML=="0" && cage5.innerHTML=="0" && cage8.innerHTML=="0"){
                            cage2.style.color="red";
                            cage5.style.color="red";
                            cage8.style.color="red";
                            activePlayer=11;
                            let winnerName=document.querySelector("#winnername2");
                            winnerName.innerHTML="PLAYER Y WINNER";
                            winnerName.style.color="red";
                            document.getElementById("player-1").style.backgroundColor="rgb(151, 79, 245)";
                            document.getElementById("current-1").style.display="none";
                            document.getElementById("congrat-img1").style.display="block";
                        }
                    }
                    equalCageColors6();
                    function equalCageColors6(){
                        if(cage3.innerHTML==cage6.innerHTML && cage3.innerHTML==cage9.innerHTML){
                            if(cage3.innerHTML=="X" && cage6.innerHTML=="X" && cage9.innerHTML=="X"){
                                cage3.style.color="red";
                                cage6.style.color="red";
                                cage9.style.color="red";
                                activePlayer=11;
                                let winnerName=document.querySelector("#winnername1");
                                winnerName.innerHTML="PLAYER X WINNER";
                                winnerName.style.color="red";
                                document.getElementById("player-0").style.backgroundColor="rgb(151, 79, 245)";
                                document.getElementById("current-0").style.display="none";
                                document.getElementById("congrat-img").style.display="block";
                            }else if(cage3.innerHTML=="0" && cage6.innerHTML=="0" && cage9.innerHTML=="0"){
                                cage3.style.color="red";
                                cage6.style.color="red";
                                cage9.style.color="red";
                                activePlayer=11;
                                let winnerName=document.querySelector("#winnername2");
                                winnerName.innerHTML="PLAYER Y WINNER";
                                winnerName.style.color="red";
                                document.getElementById("player-1").style.backgroundColor="rgb(151, 79, 245)";
                                document.getElementById("current-1").style.display="none";
                                document.getElementById("congrat-img1").style.display="block";
                            }
                        }
                        equalCageColors7();
                        function equalCageColors7(){
                            if(cage1.innerHTML==cage5.innerHTML && cage1.innerHTML==cage9.innerHTML){
                                if(cage1.innerHTML=="X" && cage5.innerHTML=="X" && cage9.innerHTML=="X"){
                                    cage1.style.color="red";
                                    cage5.style.color="red";
                                    cage9.style.color="red";
                                    activePlayer=11;
                                    let winnerName=document.querySelector("#winnername1");
                                    winnerName.innerHTML="PLAYER X WINNER";
                                    winnerName.style.color="red";
                                    document.getElementById("player-0").style.backgroundColor="rgb(151, 79, 245)";
                                    document.getElementById("current-0").style.display="none";
                                    document.getElementById("congrat-img").style.display="block";
                                }else if(cage1.innerHTML=="0" && cage5.innerHTML=="0" && cage9.innerHTML=="0"){
                                    cage1.style.color="red";
                                    cage5.style.color="red";
                                    cage9.style.color="red";
                                    activePlayer=11;
                                    let winnerName=document.querySelector("#winnername2");
                                    winnerName.innerHTML="PLAYER Y WINNER";
                                    winnerName.style.color="red";
                                    document.getElementById("player-1").style.backgroundColor="rgb(151, 79, 245)";
                                    document.getElementById("current-1").style.display="none";
                                    document.getElementById("congrat-img1").style.display="block";
                                }
                            }
                            equalCageColors8();
                            function equalCageColors8(){
                                if(cage3.innerHTML==cage5.innerHTML && cage3.innerHTML==cage7.innerHTML){
                                    if(cage3.innerHTML=="X" && cage5.innerHTML=="X" && cage7.innerHTML=="X"){
                                        cage3.style.color="red";
                                        cage5.style.color="red";
                                        cage7.style.color="red";
                                        activePlayer=11;
                                        let winnerName=document.querySelector("#winnername1");
                                        winnerName.innerHTML="PLAYER X WINNER";
                                        winnerName.style.color="red";
                                        document.getElementById("player-0").style.backgroundColor="rgb(151, 79, 245)";
                                        document.getElementById("current-0").style.display="none";
                                        document.getElementById("congrat-img").style.display="block";
                                    }else if(cage3.innerHTML=="0" && cage5.innerHTML=="0" && cage7.innerHTML=="0"){
                                        cage3.style.color="red";
                                        cage5.style.color="red";
                                        cage7.style.color="red";
                                        activePlayer=11;
                                        let winnerName=document.querySelector("#winnername2");
                                        winnerName.innerHTML="PLAYER Y WINNER";
                                        winnerName.style.color="red";
                                        document.getElementById("player-1").style.backgroundColor="rgb(151, 79, 245)";
                                        document.getElementById("current-1").style.display="none";
                                        document.getElementById("congrat-img1").style.display="block";
                                    }
                                } 
                            }
                        }
                    }
                }
            }
        }
    }
}
function newGame(){
    cage1.innerHTML="";
    cage2.innerHTML="";
    cage3.innerHTML="";
    cage4.innerHTML="";
    cage5.innerHTML="";
    cage6.innerHTML="";
    cage7.innerHTML="";
    cage8.innerHTML="";
    cage9.innerHTML="";
    document.getElementById("player-1").style.backgroundColor="#f1f1f2d5";
    document.getElementById("player-0").style.backgroundColor="#d5d5d6b4";
    let winnerName=document.querySelector("#winnername1");
    winnerName.innerHTML="";
    let winnerName2=document.querySelector("#winnername2");
    winnerName2.innerHTML="";
    document.getElementById("current-0").style.fontWeight="600";
    document.getElementById("current-1").style.fontWeight="400";
    document.getElementById("current-0").style.display="block";
    document.getElementById("congrat-img").style.display="none";
    document.getElementById("current-1").style.display="block";
    document.getElementById("congrat-img1").style.display="none";
    activePlayer=0;
}   
function playing(element,placeNumber){
    if(activePlayer==0){
        if(element.innerHTML!=""){
            if(element.innerHTML=="X"){
                placeOrder=document.getElementById("places"+placeNumber);
                placeOrder.innerHTML="X";
            }else{
                placeOrder=document.getElementById("places"+placeNumber);
                placeOrder.innerHTML="0";
            }
        }else{
            placeOrder=document.getElementById("places"+placeNumber);
            placeOrder.innerHTML="X";
            element.style.color="#332254";
            document.getElementById("player-1").style.backgroundColor="#d5d5d6b4";
            document.getElementById("player-0").style.backgroundColor="#f1f1f2d5";
            document.getElementById("current-0").style.fontWeight="400";
            document.getElementById("current-1").style.fontWeight="600";
            activePlayer=1;
        }
    }
    if(activePlayer==1){
        if(element.innerHTML!=""){
            if(element.innerHTML=="X"){
                placeOrder=document.getElementById("places"+placeNumber);
                placeOrder.innerHTML="X";
            }else{
                placeOrder=document.getElementById("places"+placeNumber);
                placeOrder.innerHTML="0";
            }
        }else{
            placeOrder=document.getElementById("places"+placeNumber);
            placeOrder.innerHTML="0";
            element.style.color="#332254";
            document.getElementById("player-1").style.backgroundColor="#f1f1f2d5";
            document.getElementById("player-0").style.backgroundColor="#d5d5d6b4";
            document.getElementById("current-0").style.fontWeight="600";
            document.getElementById("current-1").style.fontWeight="400";
            activePlayer=0;
        }
    }
    equalCageColors1();
}







