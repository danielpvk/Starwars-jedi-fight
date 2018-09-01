
    var scr={  //an object to fill the screen with the figthers in different positions
      jedis:[[120,100,150,180],[8,10,12,14],[10,25,20,15]],//power, attack, counterattack
      br:'<button class="button-red" ',
      bw:'<button class="button-white" ',
      be:'</button>',
      j1:'id="vader-b" >  <h5> Darth Vader </h5> <img class="jedis" src="assets/images/darkVader.jpg"><br>',
      j2:'id="maul-b" > <h5> Darth Maul </h5> <img class="jedis" src="assets/images/darth-maul.jpg"><br>',
      j3:'id="sith-b" > <h5> Darth Sith </h5> <img class="jedis" src="assets/images/darth-sith.jpg"><br>',
      j4:'id="obi-b" > <h5> Obi Wan Kenobi </h5> <img class="jedis" src="assets/images/obi.jpg"><br>',
      
      sortJedis:function (v1,p1,v2,p2,v3,p3,v4,p4){
          if (v1!=""){  
          $("#jedi-1").html(this.bw+v1+p1+this.be);
          }
          else {$("#jedi-1").html("");}
          if (v2!=""){
          $("#jedi-2").html(this.bw+v2+p2+this.be);
          }
          else {$("#jedi-2").html("")};
          if (v3!=""){
          $("#jedi-3").html(this.bw+v3+p3+this.be);
          }
          else {$("#jedi-3").html("")};
          if (v4!=""){ 
          $("#jedi-4").html(this.bw+v4+p4+this.be);
          }
          else {$("#jedi-4").html("")};
        },
      sortEnemies:function (v1,p1,v2,p2,v3,p3){

            if (v1!=""){  
                $("#enemy-1").html(this.br+v1+p1+this.be);
                }
                else {$("#enemy-1").html("");}
            if ((v2!="") && (v2!=null)){  
                $("#enemy-2").html(this.br+v2+p2+this.be);
                 }
               else {$("#enemy-2").html("");}  
               if ((v3!="") && (v3!=null)) {  
                $("#enemy-3").html(this.br+v3+p3+this.be);
                 }
               else {$("#enemy-3").html("");}               
               
         },
         
      sortDefender:function (d1,p1){
          if (d1!=""){
             $("#defender-1").html(this.br+d1+p1+this.be);}
          else {$("#defender-1").html("");}
         },

      init:function (){
              this.sortJedis(this.j1,this.jedis[0][0],this.j2,this.jedis[0][1],this.j3,this.jedis[0][2],this.j4,this.jedis[0][3]);
              this.sortEnemies("","","","","","","");     
              $("#character-text").html("<h2>Your Character</h2>");
              $("#enemies-text").html("<h2>Enemies Available to Attack</h2>");
              $("#defender-text").html("<h2>Defender</h2>");
              $("#continue-text").html("");
              game.stage=0;
          }
    };
    var game={  //an object to save the data of the actual game
        stage:0, // this variable stores in which stage of the game we are;
        player1Power:0,  // this variable stores the power level of the player1
        player1NewAttack:0,// this variable stores the health of the player1
        player1Attack:0,
        player1:"",
        player2Power:0,
        player2CounterAttack:0,
        player2:"",
        fillPlayers: function (p,a){ //this function will do the math an fill the player caracteristics
            this.player1Power=p;
            this.player1Attack=a;
            this.player1NewAttack=a;
            },
        fillEnemy: function (p,c){
            this.player2Power=p;
            this.player2CounterAttack=c;
        },
        possibleEnemies:[],        
        chooseJedi: function(j){
            if (this.stage==0){
            switch (j) {
                case 0:{
                    scr.sortJedis(scr.j1,scr.jedis[0][0],"","","","","",""); 
                    scr.sortEnemies(scr.j2,scr.jedis[0][1],scr.j3,scr.jedis[0][2],scr.j4,scr.jedis[0][3]);
                      this.possibleEnemies=[1,2,3];
                      game.player1=scr.j1;
                    break;
                    }
                case 1:{
                    scr.sortJedis(scr.j2,scr.jedis[0][1],"","","","","","");
                    scr.sortEnemies(scr.j1,scr.jedis[0][0],scr.j3,scr.jedis[0][2],scr.j4,scr.jedis[0][3]);
                    this.possibleEnemies=[0,2,3];
                    game.player1=scr.j2;
                    break;
                }
                case 2:{
                    scr.sortJedis(scr.j3,scr.jedis[0][2],"","","","","");
                    scr.sortEnemies(scr.j1,scr.jedis[0][0],scr.j2,scr.jedis[0][1],scr.j4,scr.jedis[0][3]);
                    this.possibleEnemies=[0,1,3];
                    game.player1=scr.j3;
                    break;
                }
                case 3:{
                    scr.sortJedis(scr.j4,scr.jedis[0][3],"","","","","");
                   scr.sortEnemies(scr.j1,scr.jedis[0][0],scr.j2,scr.jedis[0][1],scr.j3,scr.jedis[0][2]);
                   this.possibleEnemies=[0,1,2];
                   game.player1=scr.j4;
                   break;
                }
               }
               this.stage=1;
               this.fillPlayers(scr.jedis[0][j],scr.jedis[1][j]);
            }


       

        },
        chooseEnemy: function(j){
            debugger;
            if ((this.stage==1) || (this.stage==3) || (this.stage==5)){
                switch (this.possibleEnemies[j]){
                    case 0: {
                        scr.sortDefender(scr.j1,scr.jedis[0][0]);
                      //  game.player2Index=0;
                        game.player2=scr.j1;
                        break;
                    }
                    case 1: {
                        scr.sortDefender(scr.j2,scr.jedis[0][1]);
                        //game.player2Index=1;
                        game.player2=scr.j2;
                        break;
                    }
                    case 2: {
                        scr.sortDefender(scr.j3,scr.jedis[0][2]);
                        //game.player2Index=2;
                        game.player2=scr.j3;
                        break;
                    }
                    case 3: {
                        scr.sortDefender(scr.j4,scr.jedis[0][3]);
                        //game.player2Index=3;
                        game.player2=scr.j4;
                        break;
                    }
                }
                this.fillEnemy(scr.jedis[0][this.possibleEnemies[j]],scr.jedis[2][this.possibleEnemies[j]]);
                game.stage++;    
                //game.possibleEnemies.splice(game.player2Index,1);
                game.possibleEnemies.splice(j,1);
                debugger;
                this.displayEnemies();
            }  
        },
        displayEnemies( ){
           var enemies=[];
           for (var j=0; j<this.possibleEnemies.length;j++ ){
            switch (this.possibleEnemies[j]){
                case 0: {
                    enemies.push(scr.j1);
                    enemies.push(scr.jedis[0][0]);
                    break;
                }
                case 1: {
                    enemies.push(scr.j2);
                    enemies.push(scr.jedis[0][1]);
                    break;
                }
                case 2: {
                    enemies.push(scr.j3);
                    enemies.push(scr.jedis[0][2]);
                    break;
                }
                case 3: {
                    enemies.push(scr.j4);
                    enemies.push(scr.jedis[0][3]);
                    break;
                }
            }
            }
            scr.sortEnemies(enemies[0],enemies[1],enemies[2],enemies[3],enemies[4],enemies[5]); 
          
        },
        attack:function(){
            this.player2Power=this.player2Power-this.player1NewAttack;
            this.player1NewAttack=this.player1NewAttack+this.player1Attack;
            this.player1Power=this.player1Power-this.player2CounterAttack;
            if ((this.player1Power>0)&&(this.player2Power>0))  // fight continues
            {    $("#attack-result").html("<p>You attacked for a "+this.player1NewAttack+" damage</p>");
                $("#attack-result").append("<p>You where hitted back for a "+this.player2CounterAttack+" damage</p>");
                scr.sortJedis(game.player1,game.player1Power,"","","","","","");
                scr.sortDefender(game.player2,game.player2Power);
            }
            else if (this.player1Power>0)  //player win
            {
                scr.sortJedis(game.player1,game.player1Power,"","","","","","");
                $("#attack-result").html("<p>You attacked for a "+this.player1NewAttack+" damage</p>");
                $("#attack-result").append("<p>And you defeated your enemy, YOU WIN!!</p>");
                this.stage++;
                $("#continue-text").html('<button class="btn-danger btn-lg" id="continue-b" >  <h5> YOU WIN! </h5> PRESS TO PLAY AGAIN</button>');
                debugger;   
           //     this.possibleEnemies.splice(this.player2Index,1);  //removes the defeated enemy of the list of enemies to fight
                scr.sortEnemies("","","","","","");
                this.displayEnemies();
                scr.sortDefender("",""); 
                $("#continue-text").html('');
            }
            else {  //player loose
                $("#attack-result").html("<p>You where hitted back for a "+this.player2CounterAttack+" damage</p>");
                $("#attack-result").append("<p>And you were killed, YOU LOOSE!!</p>");
                $("#continue-text").html('<button class="btn-danger btn-lg" id="continue-b" >  <h5> YOU LOOSE! </h5> PRESS TO PLAY AGAIN</button>');
                game.stage=10; //the stage 10 is the stage where continue button is activated
                scr.sortDefender("","");
            }
        }

    };
  
    $("#jedi-1").on("click",function(){
        if (game.stage==0){
         game.chooseJedi(0);
        }
    });
    $("#jedi-2").on("click",function(){
        if (game.stage==0){
            game.chooseJedi(1);
           }
    });
    $("#jedi-3").on("click",function(){
        if (game.stage==0){
            game.chooseJedi(2);
           }
      });
    $("#jedi-4").on("click",function(){
        if (game.stage==0){
            game.chooseJedi(3);
           }
    });
    $("#enemy-1").on("click",function(){

        game.chooseEnemy(0);
     });
    $("#enemy-2").on("click",function(){
        game.chooseEnemy(1);
     });
    $("#enemy-3").on("click",function(){
        game.chooseEnemy(2);
    
    });
    $("#attack-button").on("click",function(){
  
        game.attack();
    });
    $("#continue-text").on("click",function(){
        if (game.stage=10){
            scr.init();//the stage 10 is the stage where continue button is activated
            //this is to avoid that a continue button div is click in other stage
            $("#continue-text").html('');
        }
    });
    scr.init();

