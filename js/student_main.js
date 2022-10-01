//組件上半部
Vue.component('student-list',{
    data(){
        return{
            studentTitle:[],
            addCoin:false, //顯示or關閉 加值功能
        }
    },
    methods: {
        openAddCoin(){ //顯示or關閉 加值功能
            this.addCoin = !this.addCoin
        },
    },
    mounted() {
        fetch(`./php/student_list.php?home=${sessionStorage.getItem('StudentId')}`) //從後端JS拿到資料
        // fetch(`php/company_list.php?`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.studentTitle = userArr
            // console.log(userArr);
            // console.log(this.studentTitle);
        })
    },
    template:`

    <div>
        <!--彈窗：加值-->
        <div class="studentaddmoneywrapper" v-if="addCoin">
            <div class="contactUSInner"></div>
            <div class="card3">
                <ul class="cardUl">
                    <li>
                        <h1 class="cardH1">加值點數</h1>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark cardXmark" @click="openAddCoin"></i>
                    </li>
                </ul>
                <div class="cardInner">
                    <ul class="studentaddmoney_applyTitle">
                
                        <li class="applyTitle_main a1">
                            <div class="left">
                                <input type="radio" name="123">
                                <h2 class="nt">NT 399</h2>
                            </div>
                            <div class="right">
                                <img src="./images/header_icon/money.png" alt="金幣">
                                <h2>200金幣</h2>
                            </div>
                        </li>

                        <li class="applyTitle_main a2">
                            <div class="left">
                                <input type="radio" name="123">
                                <h2 class="nt">NT 899</h2>
                            </div>
                            <div class="right">
                                <img src="./images/header_icon/money.png" alt="金幣">
                                <h2>500金幣</h2>
                            </div>
                        </li>

                        <li class="applyTitle_main a3">
                            <div class="left">
                                <input type="radio" name="123">
                                <h2 class="nt">NT 1599</h2>
                            </div>
                            <div class="right">
                                <img src="./images/header_icon/money.png" alt="金幣">
                                <h2>1000金幣</h2>
                            </div>
                        </li>
                    </ul>                
                    <div class="btna3" @click="openAddCoin">確定</div>
                </div>
            </div>
        </div>

        <div class="studenMainWrapperTitle"  v-for="studentTitlec in studentTitle">

            <div class="studenMainWrapperTitle_left">

                <div class="student_photo">
                    <label for="upload" class="upload">
                        <input id="upload" type="file" accept="image/*">
                        <img :src="studentTitlec.PICTURE + '.jpg'" alt="">
                    </label>
                    <label for="upload"  class="Avatar"><img src=""></label>
                </div>
                <ul>
                    <li><h3>會員名稱：<span>{{studentTitlec.NAME}}</span></h3></li>
                    <li><h3>電話：<span>{{studentTitlec.PHONE}}</span></h3></li>
                    <li><h3>信箱：<span>{{studentTitlec.EMAIL}}</span></h3></li>
                    <li class="coin">
                        <h3>點數：
                            <button @click="openAddCoin"><span>{{studentTitlec.COIN}}</span></button>
                            <a href="#">歷史加值紀錄</a>
                        </h3>
                    </li>
                    <div class="btna11">
                        <a href="./userinfo_edit.html"><h4>編輯個人檔案</h4></a>
                    </div>
                </ul>
            </div>

            <div class="studenMainWrapperTitle_right">
                <button><a href="#">已儲存職缺<h1>100</h1></a></button>
                <button><a href="#">已應徵職缺<h1>30</h1></a></button>
                <button><a href="./student_interviewinvite.html">面試邀約<h1>10</h1></a></button>
                <button><a href="#">近期履歷<br>被查閱數<h1>10</h1></a></button>
            </div>
        </div>
    </div>

    `, 
})

//我的履歷
Vue.component('myResume',{
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    template:`
        <div>
        </div>
    `,
})

//父層
let vm = new Vue({
    el:"#student_main_app",
    data:{
        addResume:true, //顯示or關閉 新增履歷功能  
    },
    methods: {
        
    },
    template:`
        <div class="student_main">            

            <student-list></student-list>

            <h2>我的履歷</h2>
            <div class="studenMainWrapper_resumebottom">
                <button v-if="addResume"><a href="resume_work_space.html"><i class="fa-solid fa-file-circle-plus"></i></a></button>
            </div>
        </div>
    `,
})