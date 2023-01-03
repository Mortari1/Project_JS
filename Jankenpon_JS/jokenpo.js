var elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = '';
let inimigoOpt = '';

function validaVitoria(){
    let vencedor = document.getElementById("resultPartida")
    //colocar as possibilidades do jogo
    if(playerOpt == 'paper'){
        if(inimigoOpt == 'paper'){
            //Empate
            vencedor.innerHTML = 'A partida empatou';
        }else if(inimigoOpt == 'scissor'){
            //Inimigo ganhou
            vencedor.innerHTML = 'O bot ganhou';
        }else if (inimigoOpt == 'rock'){
            //Player ganhou
            vencedor.innerHTML = 'O player ganhou';
        };
    };
    if(playerOpt == 'rock'){
        if(inimigoOpt == 'rock'){
            //Empate
            vencedor.innerHTML = 'A partida empatou';
        }else if(inimigoOpt == 'paper'){
            //Inimigo ganhou
            vencedor.innerHTML = 'O bot ganhou';
        }else if(inimigoOpt == 'scissor'){
            //Player ganhou
            vencedor.innerHTML = 'O player ganhou';
        };
    };
    if(playerOpt == 'scissor'){
        if(inimigoOpt == 'scissor'){
            //empate
            vencedor.innerHTML = 'A partida empatou';
        }else if(inimigoOpt == 'rock'){
            //inimigo ganhou
            vencedor.innerHTML = 'O bot ganhou';
        }else if (inimigoOpt =='paper'){
            //Player ganhou
            vencedor.innerHTML = 'O player ganhou';
        };
    };
};

function resetEnemy(){
    const enemyOpt = document.querySelectorAll(' .enemy-options div')
    for(i = 0; i < enemyOpt.length; i++){

        enemyOpt[i].childNodes[0].style.opacity = 0.3;
    };
};


function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOpt = document.querySelectorAll(' .enemy-options div')
    resetEnemy();
    for(i = 0; i < enemyOpt.length; i++){
        if(i == rand){
            enemyOpt[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOpt[i].childNodes[0].getAttribute('opt');
        };
    };
    validaVitoria();
};


function ResetOpacityplayer(){
    elementos.forEach((item,index)=>{
        elementos[index].style.opacity = 0.3;
    });
};


elementos.forEach((item,index)=>{
    elementos[index].addEventListener('click',(t)=>{
        ResetOpacityplayer();
        t.target.style.opacity = 1 ;
        playerOpt = t.target.getAttribute('opt');
        //alert(playerOpt)
        inimigoJogar();
       
    });

});
