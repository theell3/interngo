Vue.component('my-list-com',{
    data() {
        return {
            companyImg:'./images/comLogo3.jpg',
            companyName : 'Dr. Right 精準關懷',
            numberOfCompant:'50',
            companyAddress:'100台北市中正區濟南路一段321號',
            capital:150,
        }
    },
    template:`
    <div class="companyWrapperTitle">
            <div class="companyWrapperTitImg">

            </div>
            <div class="companyWrapperTitMain">
                <div class="companyWrapperTitMainImg">
                    <img :src="companyImg" alt="">
                </div>
                <div class="companyWrapperTitMainIcon">
                    <div>
                        <h2>{{companyName}}</h2>
                    </div>
                    <div class="companyIcon">
                        <div>
                            <a href="" title="總人數"><i class="fa-solid fa-users"></i><p>{{numberOfCompant}}</p></a>
                        </div>
                        <div>
                            <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{companyAddress}}</p></a>
                        </div>
                        <div>
                            <a href="" title="資本額"><i class="fa-solid fa-landmark"></i><p>$ {{capital}}萬</p></a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
            `,
    
})
Vue.component('my-list-com2',{
    data() {
        return {
            companyAbout:'Dr.Right 成立於 2016 年，是由精品公關、醫管顧問、數據分析師所組成的團隊。協助醫療團隊第一時間與患者關懷溝通，改善院所執行流程、進而提升營運績效，使得醫病雙方都能夠從中受益的 CRM 服務。我們期許能用創新技術與高端服務思維，來打造美好的醫病互動關係。在網路社群越來越開放的環境底下，醫病關係反而是逐漸惡化的。醫師與患者間，經常是因為就診溝通時的誤解或是不順暢，患者們就直接上網發出公開的負面評論。醫師們也因此感到挫折甚至憤怒，最後轉為雙方對簿公堂。因而往往患者的疑問沒得到解答，醫師也陷入情緒中無法專心看診，社群平台上盡是充斥著醫病關係的仇恨言論。Dr. Right 為醫病間搭起了一個新橋樑，患者離診後有任何疑問或是不愉快，都可以透過專屬的手機應用程式直接反映給院所端。溫馨的醫療客服團隊會立即在黃金 48 小時內，協助院所透過電話關心病患的現況、照顧不安的情緒、協助釐清問題確切點後，馬上反映至院內做後續處理。不但即時解決醫病雙方資訊不對稱的問題，醫療單位也因此有依據來改善醫療品質。我們希望透過這個服務，讓整個社會產生更多的好醫師與好病患。醫病關係能不再緊張，民眾也能夠接受到更好的醫療品質照護 !',

            serviceItems:`(一) AdTech廣告科技：精準分群與成效優化，妥善運用廣告主的廣告預算。
            ATS人工智慧平台：
            透過專利技術提供從資料蒐集、演算到產生模型、資料整合等一站式自動化服務，並可以整合各家媒體，建立完整的數位行銷生態系統。
            DMP數據管理平台：
            串連千隻繁體APP、高流量媒體、全台萬個wi-fi熱點、中華電信與電子發票第三方數據，掌握龐大資訊轉為精準消費者洞察。
            第三方數據資料庫：
            獲得中華電信唯一正式授權，建立全台最龐大的第三方數據資料庫。洞悉用戶最即時的線上行為模式與消費習慣。
            創意廣告版位：
            艾普特每季開發3-4個全新廣告版位，提供客戶最新奇且不受干擾的廣告展示。
            CGP內容藝廊：
            內建多款動態廣告模板，直接插入素材套件，即可快速產出多款不同形式的廣告版位。
            <br>
            (二) MarTech行銷科技：帶領品牌和企業跟上行銷自動化和個人化趨勢。
            1. CDP顧客數據平台：
            整合第一方與第三方顧客資料，描繪出360度的消費者輪廓。
            2. MBP自動化行銷歷程：
            串接不同行銷渠道，並模擬各種消費者的溝通情境，即時且準確地提供客戶行銷內容。
            3. CGP內容藝廊：
            提供素材編輯工具模板，並透過直覺化的介面，輕鬆設計出行銷活動素材。
            <br>
            (三) EC-Tech電商科技：把握微網紅行銷的商機刻不容緩。
            1. Varich社群網紅平台：
            透過一站式社群電商平台，串接「品牌端」與「微網紅」，替品牌達成商品免費上架，而
            微網紅透過平台取得專屬連結，並直接分享於社群媒體進行導購，輕鬆收取分潤。
            <br>
            (四) ManTech管理科技：中小企業必備的數位治理系統。
            1. 人資雲：評估企業生命週期及盤點人才技能，以聚焦企業長期策略。
            2. 財務雲：整合五合一的即時財務報表，且具有數位化簽核流程。
            3. 業務雲：圖表化各項業績維度的儀表板，且能將顧客分級及管理售後服務。
            4. 管理雲：掌握企業的營運計畫和知識財產。`,

            Welfare :`
            【安心保障】正派經營：勞保、健保、勞退提撥6%，該有的保障一定有！<br>
            【工作環境】公司位於中山國中站樓上，享受出站即到公司的便利！<br>
            【彈性打卡】9:00-10:00彈性上下班，睡飽再上工！<br>
            【年終獎金】基本保障一個月年終<br>
            【各部門績效獎金】除了業務部門外，所有後勤協作部門也都有績效獎金制度！<br>
            【尾牙活動】每年尾牙基本兩天一夜起跳，老闆發獎金也沒在手軟的！<br>
            【部門聚餐】每季每人1,000元聚餐補助，大餐吃起來！<br>
            【飲料零食】零食箱＆飲料櫃隨你拿，每月每人還可喝兩瓶啤酒，上班喝(酒)也OK！<br>
            【Macbook】不用帶筆電上下班，公司提供高規MAC 電腦，展現時尚與效率！<br>
            【生日假】不管你到職多久，生日直接給，生日當天就放自己一天假吧！<br>
            【A Sharing】A sharing點數制度，點數換贈品，輕鬆累積榮譽假！<br>
            【便當日】每月一天便當日，執行長暖男＆營運長賢內助現做午餐給妳/你吃！<br>
            【在職週年禮】在職滿1年精選禮品送給你，滿3年以上送你控金A金牌～<br>`,
            comImg:['./images/company/company1.jpg','./images/company/company2.jpg','./images/company/company3.jpg']
        }
    },
    template:
    `
    <div class="companyWrapperMain">
            <div class="companyWrapperContent">
                <div class="company">
                    <div class="companyStatement"><h3>公司介紹</h3></div>
                    <div><p>{{companyAbout}}</p></div>
                </div>
                <div class="company">
                    <div class="companyStatement"><h3>產品或服務</h3></div>
                    <div><p>服務項目</p></div>
                    <div><p v-html='serviceItems'></p></div>
                </div>
                <div class="company">
                    <div class="companyStatement"><h3>員工福利</h3></div>
                    <div><p v-html='Welfare'></p>
                    </div>
                </div>
                    <div class="company">
                        <div class="companyStatement"><h3>公司照片</h3></div>
                        <div>
                            <div>
                                <img :src="comImgAll" alt="" v-for="comImgAll in comImg">
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
            `,
    
})
Vue.component('my-list-com3',{
    data() {
        return {
            companyDepartment:'溝通部門',
            jobTitle:'醫療客服專案管理師',
            vacancies : 6,
            placeDist : '台北',
            salary : 200,
        }
    },
    template:`
    <div class="jobMainWrapperOther">
            <div class="jobMainWrapperOthSec">
                <div class="jobMainWrapperOthTitle">
                    <h2>所有職缺</h2>
                </div>
                <div class="jobMainWrapperOthMain">
                    <div>
                        <p>{{companyDepartment}}</p>
                        <p>{{jobTitle}}</p>
                        <div class="findJobVacanciesIcTitle">
                            <div class="findJobVacanciesIcon">
                                <a href="" title="職缺人數"><i class="fa-solid fa-user-tie"></i><p>{{vacancies}}</p></a>
                            </div>
                            <div class="findJobVacanciesIcon">
                                <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{placeDist}}</p></a>
                            </div>
                            <div class="findJobVacanciesIcon">
                                <a href="" title="薪資"><i class="fa-solid fa-dollar-sign"></i><p>{{salary}} / h</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="jobMainWrapperOthBtn">
                        <div class="btna5 saveApplyOpen" @click='openSave'>儲存職缺</div>
                        <div class="btna6 moveToJob" @click='goApply'>立即應徵</div>
                    </div>
                </div>
                <div class="jobMainWrapperOthMain">
                    <div class="btna19">查看更多職缺</div>
                </div>
            
            `,
            methods: {
                openSave(){
                    this.$emit('save-click')
                },
                goApply(){
                    location = './jobMain.html';
                }
            },
    
})
new Vue({
    el:'#companyApp',
    data:{
        isShowSave:false,
    },
    methods: {
        saveGo(){
            this.isShowSave =!this.isShowSave
        },
        saveClose(){
            this.isShowSave =!this.isShowSave
        },
    },
    
})