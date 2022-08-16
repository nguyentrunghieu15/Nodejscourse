const app = Vue.createApp({
    data() {
        return {
            maxHeal:100,
            healthPlayer:100,
            healthMonster:100,
            bateLog:[],
            numTurn:0,
            numNormalAttack:0,
            isSurrender:true,
            codeHTML:'<p> Luffy</p>',
        }
    },
    methods: {
        // Random Damage
        normalAttack(){
            this.numNormalAttack++;
            this.numTurn++;
            const damage =5+Math.random()*5;
            this.bateLog.push(`You normal attack deal ${Math.round(damage)}`);
            if(this.healthMonster>damage){
                this.healthMonster-=Math.round(damage);
            }else{
                this.healthMonster=0;
            }
            this.turnMoster();
        },
        // 20 damage only after 4 turn normal
        specialAttack(){
                if(this.healthMonster>20){
                    this.bateLog.push(`You special attack deal 20`);
                    this.healthMonster-=20;
                }else{
                    this.bateLog.push(`You special attack deal 20`);
                    this.healthMonster=0;
                }
                this.numTurn++;
                this.numNormalAttack=0;
                this.turnMoster();
        },
        // 10 heal, only heal after 5 turn
        heal(){
                this.bateLog.push(`You heal 10`);
                this.healthPlayer= ((this.healthPlayer+10)>this.maxHeal) ? maxHeal:(this.healthPlayer+10) ;
                this.numTurn=0;
                this.turnMoster();
        },

        surrender(){
            this.isSurrender=false;
        },
        turnMoster(){
            this.numTurn++;
            const skill=Math.random()*100;
            if(skill>60 && skill <100){
                if(this.healthPlayer>7){
                    this.healthPlayer-=7;
                }else this.healthPlayer=0;
                this.bateLog.push(`Monster normal attack deal 7`);
            }else if(skill>10 && skill <60){
                if(this.healthMonster+10>100){
                    this.healthMonster=100;
                }else this.healthMonster+=10;
                this.bateLog.push(`Monster heal 10`);
            }else{
                if(this.healthPlayer>25){
                    this.healthPlayer-=25;
                }else this.healthPlayer=0;
                this.bateLog.push(`Monster special attack deal 25`);
            }
        }
    },
    computed:{
        results(){
            if(this.isSurrender===false || this.healthPlayer===0){
                return 'You lose';
            }else return 'You win'
        },
        disabledSpecialAttack(){
            return this.numNormalAttack<6;
        },
        disabledHeal(){
            return this.numTurn<5;
        }
    }
});

app.mount("#game");

//-------------------------




let aValue=0;

const x= new Proxy(aValue,)

