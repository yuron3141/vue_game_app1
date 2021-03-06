Vue.component('game',{
    template:`
    <div v-if="gameview === 0">
        <div style="position:absolute; top:250px; left:60%;">
            <button @click ="switchGameview" type="button" class="btn btn-light btn-outline-primary" style="width:200px; height:80px;">
                <p class="pt-1 fw-bold" style="font-size: 40px;;">始める</p>
            </button>
        </div>
        <div style="position:absolute; top:30px; left:20%;">
            <img src="src/title.png" style="width:400px;">
        </div>
        <div style="position:absolute; left:25%; bottom: 50px;">
            <img src="src/seal/00.svg" style="width:180px;">
        </div>
        <div style="position:absolute;  bottom: 50px;">
            <img src="src/sealion/01.svg" style="width:210px;">
        </div>
        <div style="position:absolute; bottom: 0; object-position:85% 20%; object-fit: none;">
            <img src="src/front_wall.svg" style="width:100%;">
        </div>
    </div>
    <div v-else-if="gameview === 1">
        <div>
            <div>
                <div style="position:absolute; top:100px;">
                    <div style="position: relative; z-index:80;">
                        <div @click="clickAnimal(0, moveAnimals[0].rare)" v-bind:class="moveAnimals[0].touch ? touchoff : touch" style="position:absolute; left:63%;" v-bind:style="{top: moveAnimals[0].position}">
                            <div v-if="moveAnimals[0].rare === false">
                                <div style="position:absolute;" v-bind:class="moveAnimals[0].touch ? hide : show">
                                    <img src="src/seal/00.svg" style="width:180px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[0].touch ? show : hide">
                                    <img src="src/seal/01.svg" style="width:180px;">
                                </div>
                            </div>
                            <div v-else="moveAnimals[0].rare === true">
                                <div style="position:absolute;" v-bind:class="moveAnimals[0].touch ? hide : show">
                                    <img src="src/sealion/01.svg" style="width:200px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[0].touch ? show : hide">
                                    <img src="src/sealion/02.svg" style="width:200px;">
                                </div>
                            </div>
                        </div>
                        <div @click="clickAnimal(1, moveAnimals[1].rare)" v-bind:class="moveAnimals[1].touch ? touchoff : touch" style="position:absolute; left:35.5%;" v-bind:style="{top: moveAnimals[1].position}">
                            <div v-if="moveAnimals[1].rare === false">
                                <div style="position:absolute;" v-bind:class="moveAnimals[1].touch ? hide : show">
                                    <img src="src/seal/00.svg" style="width:180px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[1].touch ? show : hide">
                                    <img src="src/seal/01.svg" style="width:180px;">
                                </div>
                            </div>
                            <div v-else="moveAnimals[1].rare === true">
                                <div style="position:absolute;" v-bind:class="moveAnimals[1].touch ? hide : show">
                                    <img src="src/sealion/01.svg" style="width:200px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[1].touch ? show : hide">
                                    <img src="src/sealion/02.svg" style="width:200px;">
                                </div>
                            </div>
                        </div>
                        <div @click="clickAnimal(2, moveAnimals[2].rare)" v-bind:class="moveAnimals[2].touch ? touchoff : touch" style="position:absolute; left:8%;" v-bind:style="{top: moveAnimals[2].position}">
                            <div v-if="moveAnimals[2].rare === false">
                                <div style="position:absolute;" v-bind:class="moveAnimals[2].touch ? hide : show">
                                    <img src="src/seal/00.svg" style="width:180px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[2].touch ? show : hide">
                                    <img src="src/seal/01.svg" style="width:180px;">
                                </div>
                            </div>
                            <div v-else="moveAnimals[2].rare === true">
                                <div style="position:absolute;" v-bind:class="moveAnimals[2].touch ? hide : show">
                                    <img src="src/sealion/01.svg" style="width:200px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[2].touch ? show : hide">
                                    <img src="src/sealion/02.svg" style="width:200px;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="src/wall.svg" style="position:relative; width:100%; z-index:90;">
                </div>
            </div>
            <div>
                <div style="position:absolute; bottom: 0;">
                    <div style="position: relative; z-index:95;">
                        <div @click="clickAnimal(3, moveAnimals[3].rare)" v-bind:class="moveAnimals[3].touch ? touchoff : touch" style="position:absolute; left:63%;" v-bind:style="{top: moveAnimals[3].position}">
                            <div v-if="moveAnimals[3].rare === false">
                                <div style="position:absolute;" v-bind:class="moveAnimals[3].touch ? hide : show">
                                    <img src="src/seal/00.svg" style="width:180px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[3].touch ? show : hide">
                                    <img src="src/seal/01.svg" style="width:180px;">
                                </div>
                            </div>
                            <div v-else="moveAnimals[3].rare === true">
                                <div style="position:absolute;" v-bind:class="moveAnimals[3].touch ? hide : show">
                                    <img src="src/sealion/01.svg" style="width:200px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[3].touch ? show : hide">
                                    <img src="src/sealion/02.svg" style="width:200px;">
                                </div>
                            </div>
                        </div>
                        <div @click="clickAnimal(4, moveAnimals[4].rare)" v-bind:class="moveAnimals[4].touch ? touchoff : touch" style="position:absolute; left:35.5%;" v-bind:style="{top: moveAnimals[4].position}">
                            <div v-if="moveAnimals[4].rare === false">
                                <div style="position:absolute;" v-bind:class="moveAnimals[4].touch ? hide : show">
                                    <img src="src/seal/00.svg" style="width:180px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[4].touch ? show : hide">
                                    <img src="src/seal/01.svg" style="width:180px;">
                                </div>
                            </div>
                            <div v-else="moveAnimals[4].rare === true">
                                <div style="position:absolute;" v-bind:class="moveAnimals[4].touch ? hide : show">
                                    <img src="src/sealion/01.svg" style="width:200px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[4].touch ? show : hide">
                                    <img src="src/sealion/02.svg" style="width:200px;">
                                </div>
                            </div>
                        </div>
                        <div @click="clickAnimal(5, moveAnimals[5].rare)" v-bind:class="moveAnimals[5].touch ? touchoff : touch" style="position:absolute; left:8%;" v-bind:style="{top: moveAnimals[5].position}">
                            <div v-if="moveAnimals[5].rare === false">
                                <div style="position:absolute;" v-bind:class="moveAnimals[5].touch ? hide : show">
                                    <img src="src/seal/00.svg" style="width:180px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[5].touch ? show : hide">
                                    <img src="src/seal/01.svg" style="width:180px;">
                                </div>
                            </div>
                            <div v-else="moveAnimals[5].rare === true">
                                <div style="position:absolute;" v-bind:class="moveAnimals[5].touch ? hide : show">
                                    <img src="src/sealion/01.svg" style="width:200px;">
                                </div>
                                <div style="position:absolute;" v-bind:class="moveAnimals[5].touch ? show : hide">
                                    <img src="src/sealion/02.svg" style="width:200px;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="src/wall.svg" style="position:relative; width:100%; z-index:100;">
                </div>
            </div>
        </div>
        <div style="position:absolute; width:100%; top:320px; z-index:110;">
            <div style="text-align:center;" v-bind:class="gameActive ? show : hide">
                <p style="font-size:45px;">{{ min }}:{{ sec }}</p>
                <p style="font-size:50px;">SCORE:{{ scoreStr }}</p>
            </div>
        </div>
        <div v-bind:class="guide ? show : hide" class="bg-light border border-secondary border-4 " style="position:absolute; height: 380px; width:500px; top:50px; left:11%; z-index:110;">
            <div style="text-align:center;">
                <p style="font-size:45px; font-weight: bold;">遊び方</p>
                <p style="font-size:20px;">
                    氷の隙間から出てくるアザラシやトドを叩いて<br>
                    ポイントを稼いでください。<br>
                    アザラシは100ポイント、トドは300ポイントです。
                </p>
                <img src="src/charas.png" style="position:relative; width:50%; ">
                <button @click ="startGame" type="button" class="btn btn-light btn-outline-secondary" style="width:200px; height:80px;">
                <p class="pt-1 fw-bold" style="font-size: 40px;;">スタート</p>
            </button>
            </div>
        </div>
        <div v-bind:class="result ? show : hide" class="bg-light border border-secondary border-4 " style="position:absolute; height: 380px; width:500px; top:50px; left:11%; z-index:140;">
            <div style="text-align:center;">
                <p style="font-size:45px; font-weight: bold;">結果</p>
                <p style="font-size:20px;">あなたのスコアは</p>
                <p style="font-size:30px; font-weight:bold;">{{ score }}</p>
                <p style="font-size:20px;">でした。</p>
                <button @click ="switchGameview" type="button" class="btn btn-light btn-outline-secondary" style="width:200px; height:80px;">
                    <p class="pt-1 fw-bold" style="font-size: 40px;;">戻る</p>
                </button>
            </div>
        </div>
        <div  v-if="guide === false && gameActive === false" style="position:absolute; width:100%; top:150px; z-index:130;">
            <div style="text-align:center;">
                <p style="font-size:100px;">{{ formersec }}</p>
            </div>
        </div>
    </div>
    `,
    data: () =>{
        return {
            /*調整用変数*/
            velocity: 3,

            /* ゲーム制御系変数 */
            gameview: 0, //0スタート画面,1ゲーム画面
            guide: true,//ガイド画面
            result: false,
            formersec: 3,//開始カウントダウン用
            gameActive: false, //trueでゲームスタート
            score: 0, //スコア
            scoreStr: '000000',//ディコード用スコア
            Time: 180, //3分(ゲーム時間)
            min: '03', //ディコード用分
            sec: '00', //ディコード用秒

            gameObject1: null, 
            gameObject2: null, 

            /* 出現css適用 */
            hide: 'hide',
            show: 'show',
            touch: 'touch',
            touchoff: 'touchoff',

            /* 出現アニマル制御系変数*/
            appearCount: 0,
            moveAnimals: [
                {
                    initState: false,//初期化待ちかどうか
                    appearState: false,//出現するコマかどうか
                    rare: false,//レアコマかどうか
                    touch: false,//触れられたかどうか
                    position: '40px',//位置
                    waitTime: 40,//待機時間

                },
                {
                    initState: false,
                    appearState: false,
                    rare: false,
                    touch: false,
                    position: '40px',
                    waitTime: 40,//待機時間

                },
                {
                    initState: false,
                    appearState: false,
                    rare: false,
                    touch: false,
                    position: '40px',
                    waitTime: 40,//待機時間

                },
                {
                    initState: false,
                    appearState: false,
                    rare: false,
                    touch: false,
                    position: '40px',
                    waitTime: 40,//待機時間

                },
                {
                    initState: false,
                    appearState: false,
                    rare: false,
                    touch: false,
                    position: '40px',
                    waitTime: 40,//待機時間

                },
                {
                    initState: false,
                    appearState: false,
                    rare: false,
                    touch: false,
                    position: '40px',
                    waitTime: 40,//待機時間

                },
            ],
            /*オーディオ(効果音)*/
            decisionSE: new Audio('se/decision.mp3'),
            hitSE: new Audio('se/touched.mp3'),
            hitSE2: new Audio('se/touched.mp3'),//多重再生できないので予備用Audio
            countSE: new Audio('se/countdown.mp3'),
            resultSE: new Audio('se/result.mp3'),
            /*オーディオ制御用*/
            AudioOff: false,
            toggleHit: false,
        }
    },
    mounted(){
        //ページが読み込まれたら実行
        window.addEventListener('load', ()=>{
            this.decisionSE.volume = 0.08;
            this.hitSE.volume = 0.08;
            this.hitSE2.volume = 0.08;
            this.countSE.volume = 0.08;
            this.resultSE.volume = 0.08;
        });
    },
    methods: {
        //ゲームビューを切り替える処理
        switchGameview: function(){
            if(this.gameview < 1){
                this.gameview++;

            }else{
                this.gameview=0;

                //リセット
                this.guide = true;
                this.result = false;
                this.formersec = 3;
                this.gameActive = false;
                this.score = 0; 
                this.scoreStr = '000000';
                this.Time = 180;
                this.min = '03';
                this.sec = '00';

                for(let i=0; i<this.moveAnimals.length; i++){
                    this.moveAnimals[i].position = '40px';
                }
            }
            this.decisionSE.play();
        },
        startGame: function(){
            this.guide = false;

            this.gameProcess();
        },
        gameProcess: function(){
            if(!this.gameActive){
                this.countSE.play();

                this.gameObject1 = setInterval(this.countdown, 1000);
            }
        },
        countdown: function(){
            if(this.formersec > 0){
                this.formersec --;
            }else{
                this.formersec = 0;
                this.gameActive = true;

                clearInterval(this.gameObject1);

                this.gameObject1 = setInterval(this.counter, 1000);
                this.gameObject2 = setInterval(this.mainProcess, 25);
            }
        },
        counter: function(){
            //カウントダウンタイマー処理
            if(this.Time > 0){
                this.Time --;
                this.min = (parseInt(this.Time / 60)).toString().padStart(2, '0');
                this.sec = (this.Time - parseInt(this.min)*60).toString().padStart(2, '0');
                //console.log(this.Time);
            }else{
                this.gameActive = false;

                setTimeout(this.stopGame, 1000);

                this.result = true;

                this.resultSE.play();
            }
        },
        //ゲームを終える関数
        stopGame: function(){
            clearInterval(this.gameObject1);
            clearInterval(this.gameObject2);
        },
        initAnimal: function(){
            let array = Array(2);
            const appear = Math.floor(Math.random() * 3);
            const rare = Math.floor(Math.random() * 10);

            if(appear <= 1){
                array[0] = true;
            }else{
                array[0] = false;
            }

            if(rare <= 1){
                array[1] = true;
            }else{
                array[1] = false;
            }

            return array;
        },
        mainProcess: function(){
                for(let i=0; i<this.moveAnimals.length; i++){
                    if(!this.moveAnimals[i].initState && this.gameActive){
                        //コマを初期化
                        let result = this.initAnimal();

                        if(result[0]){
                            this.appearCount ++;
                        }

                        this.moveAnimals[i].initState = true;
                        this.moveAnimals[i].appearState = result[0];
                        this.moveAnimals[i].rare = result[1];
                        this.moveAnimals[i].touch = false;
                        this.moveAnimals[i].position = '40px';
                        this.moveAnimals[i].waitTime = 20;

                    }else if(this.moveAnimals[i].appearState && this.moveAnimals[i].initState){
                        if(!this.moveAnimals[i].touch){
                            //上げる処理
                            if((parseInt(this.moveAnimals[i].position) > -90)&&(this.moveAnimals[i].waitTime > 0)){
                                let posi = parseInt(this.moveAnimals[i].position);
                                posi = posi - 3 * this.velocity;
                                this.moveAnimals[i].position = posi + 'px';

                            }else if((parseInt(this.moveAnimals[i].position) < -90)&&(this.moveAnimals[i].waitTime > 0)){
                                this.moveAnimals[i].waitTime --;
                            }else {
                                if((parseInt(this.moveAnimals[i].position) < 40)){
                                    let posi = parseInt(this.moveAnimals[i].position);
                                    posi = posi + 3 * this.velocity;
                                    this.moveAnimals[i].position = posi + 'px';
                                }else{
                                    this.moveAnimals[i].initState = false;
                                    this.appearCount--;
                                }
                            }
                        }else{
                            if(parseInt(this.moveAnimals[i].position) < 40){
                                let posi = parseInt(this.moveAnimals[i].position);
                                posi = posi + 2 * this.velocity;
                                this.moveAnimals[i].position = posi + 'px';

                            }else{
                                this.moveAnimals[i].initState = false;
                                this.appearCount--;
                            }
                        }
                    }else{
                        if(this.appearCount == 0){
                            this.moveAnimals[i].initState = false;
                        }
                    }
                }
        },
        clickAnimal: function(num, rare){
            if(!this.moveAnimals[num].touch){
                this.moveAnimals[num].touch = true;

                if(!this.toggleHit){
                    this.hitSE2.play();

                    this.toggleHit = true;
                }else{
                    this.hitSE.play();

                    this.toggleHit = false;
                }

                if(rare){
                    this.score += 300;
                }else{
                    this.score += 100;
                }

                this.scoreStr = this.score.toString().padStart(6, '0');
            }
        }
    },

});