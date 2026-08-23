/* =========================================================
   TIQA 2025 友好拼布手作節
   活動門票 DATA
   /events/2025/ticket/ticket-data.js
========================================================= */

const ticketData = {

    purchaseMethods: [

        {
            title: "線上購買電子門票",
            description:
                "原活動透過 Accupass 活動通販售電子門票，線上售票期間至 2025/11/21 上午 11:00 截止。",
            links: [
                {
                    label: "原 Accupass 活動頁",
                    url: "https://www.accupass.com/event/2504230416099020710100"
                },
                {
                    label: "Android App",
                    url: "https://play.google.com/store/apps/details?id=com.accuvally.android.accupass"
                },
                {
                    label: "iOS App",
                    url: "https://apps.apple.com/us/app/accupass/id516844208"
                }
            ],
            note:
                "原線上訂購支援信用卡、國泰世華 ATM、全家超商繳費、LINE Pay、街口支付等付款方式。"
        },

        {
            title: "實體售票點",
            description:
                "原活動由參與或支持活動的廠商及教室老師協助販售紙本門票；各售票點營業時間不同，前往前應先查詢或電話聯繫。",
            links: [],
            note:
                "下方保留 2025 年全省售票點資料，供歷史紀錄查閱。"
        }

    ],


    prices: [

        {
            title: "超早鳥票",
            price: "$200",
            period: "即日起～2025/07/31"
        },

        {
            title: "早鳥票",
            price: "$250",
            period: "2025/08/01～2025/10/31"
        },

        {
            title: "一般票",
            price: "$300",
            period: "2025/11/01～2025/11/23"
        },

        {
            title: "愛心票",
            price: "$180",
            period: "即日起～2025/11/23",
            note: "適用持有身障手冊之本人及必要陪同者 1 人"
        }

    ],


    /* =====================================================
       全省售票點
    ===================================================== */

    salesRegions: [

        {
            title: "臺灣喜佳股份有限公司－全省 10 家生活館",

            stores: [

                {
                    name: "台北生活館",
                    phone: "02-2523-3440",
                    address: "台北市中山區長安東路一段4-1號1樓",
                    url: "http://www.cces.com.tw/m/412-1383-15777-1.php?Lang=zh-tw#"
                },

                {
                    name: "士林生活館",
                    phone: "02-2834-9808",
                    address: "台北市士林區文林路511號",
                    url: "http://www.cces.com.tw/m/405-1383-27382,c15777.php?Lang=zh-tw"
                },

                {
                    name: "桃園生活館",
                    phone: "03-337-9570",
                    address: "桃園市中山路139號",
                    url: "http://www.cces.com.tw/m/405-1383-27383,c15777.php?Lang=zh-tw"
                },

                {
                    name: "喜佳手作空間",
                    phone: "03-425-9048",
                    address: "桃園市中壢區慈惠三街155號1-2樓",
                    url: "http://www.cces.com.tw/m/405-1383-27384,c15777.php?Lang=zh-tw"
                },

                {
                    name: "新竹生活館",
                    phone: "03-528-6308",
                    address: "新竹市中正路91號",
                    url: "http://www.cces.com.tw/m/405-1383-27393,c15777.php?Lang=zh-tw"
                },

                {
                    name: "台中生活館",
                    phone: "04-2223-6618",
                    address: "台中市中區台灣大道一段247號1樓",
                    url: "http://www.cces.com.tw/m/405-1383-27398,c15777.php?Lang=zh-tw"
                },

                {
                    name: "彰化生活館",
                    phone: "04-728-5795",
                    address: "彰化市曉陽路247號",
                    url: "http://www.cces.com.tw/m/405-1383-27399,c15777.php?Lang=zh-tw"
                },

                {
                    name: "嘉義生活館",
                    phone: "05-225-5387",
                    address: "嘉義市中正路617號1樓",
                    url: "http://www.cces.com.tw/m/405-1383-27400,c15777.php?Lang=zh-tw"
                },

                {
                    name: "台南生活館",
                    phone: "06-220-0618",
                    address: "台南市中西區民族路二段289號",
                    url: "http://www.cces.com.tw/m/405-1383-27402,c15777.php?Lang=zh-tw"
                },

                {
                    name: "高雄生活館",
                    phone: "07-235-9738",
                    address: "高雄市新興區中正三路110號1樓",
                    url: "http://www.cces.com.tw/m/405-1383-27403,c15777.php?Lang=zh-tw"
                }

            ]
        },


        {
            title: "北北基地區－21 個售票點",

            stores: [

                {
                    name: "一個小袋子工作室－李依宸老師",
                    phone: "02-27322636",
                    address: "台北市信義區基隆路二段77號4樓之六",
                    url: "https://www.facebook.com/profile.php?id=100064331545911"
                },

                {
                    name: "小野布房拼布教室－魏廷伃老師",
                    phone: "(02)2351-8007",
                    address: "台北市中正區新生南路一段144號",
                    url: "https://linshouse0.gogoshopapp.com/"
                },

                {
                    name: "木棉拼布美學藝坊－洪藝芳老師",
                    phone: "0915-800-129",
                    address: "基隆市仁愛區獅球路44巷54號",
                    url: "https://www.facebook.com/profile.php?id=100057533556271"
                },

                {
                    name: "光喬有限公司",
                    phone: "02-27402905",
                    address: "",
                    url: "http://www.tpq.com.tw/Big5/index.asp"
                },

                {
                    name: "麗華拼布工作室－伍麗華老師",
                    phone: "0933-917555",
                    address: "台北市信義區信義路五段5號三樓3A-13",
                    url: "https://www.facebook.com/profile.php?id=100001698492091"
                },

                {
                    name: "快樂屋拼布才藝坊－張碧恩老師",
                    phone: "(02)2234-3025",
                    address: "台北市文山區木新路三段215巷3號",
                    url: "https://www.facebook.com/bn.chang.3"
                },

                {
                    name: "李婷姿老師",
                    phone: "0932-927986",
                    address: "新北市林口區公園路231號3樓之3",
                    url: "https://www.facebook.com/jyenilee"
                },

                {
                    name: "松芝車樂美有限公司－旗艦店",
                    phone: "(02)2704-1808",
                    address: "台北市大安區復興南路二段210巷3-1號",
                    url: "https://www.janome.com.tw/"
                },

                {
                    name: "松芝車樂美有限公司－新北市展示中心",
                    phone: "(02)2262-4365",
                    address: "新北市土城區清水路126號",
                    url: "https://www.janome.com.tw/"
                },

                {
                    name: "林美鈴老師",
                    phone: "0933-755852",
                    address: "新北市林口區仁愛路二段235號7樓之2",
                    url: "https://www.facebook.com/profile.php?id=100000897817458"
                },

                {
                    name: "貝佳時尚布工坊",
                    phone: "(02)2559-5881",
                    address: "台北市大同區延平北路一段140號",
                    url: "https://www.facebook.com/profile.php?id=100086218608395"
                },

                {
                    name: "紅綾手藝－王琼玲老師",
                    phone: "0933-903603",
                    address: "台北市中山北路七段219巷3弄87號6F",
                    url: ""
                },

                {
                    name: "拼布花園 Patchwork Garden－龎慧如老師",
                    phone: "(02)2311-2578",
                    address: "台北市中正區延平南路61號10樓C室",
                    url: "https://www.patchworkgarden.com.tw/"
                },

                {
                    name: "徐老師拼布刺繡－徐淑賢老師",
                    phone: "0919-303567",
                    address: "台北市內湖區",
                    url: ""
                },

                {
                    name: "塔雅拼布・薔薇手作－鄭華琪老師",
                    phone: "(02)2555-1275",
                    address: "台北市大同區南京西路344巷21號",
                    url: "https://www.facebook.com/roseateltd"
                },

                {
                    name: "熊好作工作坊－熊嘉玲老師",
                    phone: "0913-253665",
                    address: "台北市大同區迪化街一段21號4樓006室（永樂市場四樓）",
                    url: "https://www.facebook.com/chialing.hsiung.3"
                },

                {
                    name: "臺灣拼布網－郭芷廷老師",
                    phone: "02-26548287",
                    address: "台北市南港區忠孝東路六段232號",
                    url: "https://www.quiltwork.com.tw/"
                },

                {
                    name: "賴芳慧老師",
                    phone: "0920-486701",
                    address: "",
                    url: "https://www.facebook.com/profile.php?id=100004020961248"
                },

                {
                    name: "聯興拼布教室－吳寶桂老師",
                    phone: "(02)2556-9665",
                    address: "台北市大同區迪化街一段21號（永樂市場2樓2070室）",
                    url: "https://www.facebook.com/profile.php?id=100057375013363"
                },

                {
                    name: "SED 鴿子の窩（信義町針車有限公司）",
                    phone: "02-2367-0222",
                    address: "台北市中正區牯嶺街119號",
                    url: "https://www.facebook.com/SEDSEWING"
                },

                {
                    name: "建燁針車行",
                    phone: "02-2257-3077",
                    address: "新北市板橋區民有街130號1樓",
                    url: "https://www.facebook.com/Jianye1979"
                }

            ]
        },


        {
            title: "桃竹苗地區－3 個售票點",

            stores: [

                {
                    name: "三色堇拼布坊－徐中秀老師",
                    phone: "(03)552-0646",
                    address: "新竹縣竹北市文昌街74號",
                    url: "https://www.facebook.com/profile.php?id=100057450490164"
                },

                {
                    name: "洋裁夫人－楊彩汝老師",
                    phone: "0935-508316",
                    address: "桃園市中壢區元化路一號2樓",
                    url: "https://www.facebook.com/quilt.nini"
                },

                {
                    name: "綠座 Quilt Art & Line 線上教室－鍾國蘭老師",
                    phone: "0933-788396",
                    address: "桃園市中壢區成章二街577號4樓",
                    url: "https://www.facebook.com/quileline"
                }

            ]
        },


        {
            title: "中彰雲地區－3 個售票點",

            stores: [

                {
                    name: "川久屋拼布藝術工作室－藍玉娟老師",
                    phone: "(04)728-5319",
                    address: "彰化市實踐路66號",
                    url: "https://www.facebook.com/profile.php?id=100063959353538"
                },

                {
                    name: "立家手創館",
                    phone: "(04)2278-5177 分機666",
                    address: "台中市太平區永成路78號",
                    url: "https://www.lovericcar.com/"
                },

                {
                    name: "雅櫻手作舖－林雅櫻老師",
                    phone: "(04)2255-9090",
                    address: "台中市大墩十街354號",
                    url: "https://www.facebook.com/profile.php?id=100063996245336"
                }

            ]
        },


        {
            title: "嘉南高屏地區－3 個售票點",

            stores: [

                {
                    name: "松芝車樂美有限公司－高雄店",
                    phone: "07-322-1733",
                    address: "高雄市三民區博愛一路172號",
                    url: "https://www.janome.com.tw/"
                },

                {
                    name: "歐老師拼布工作室－歐秀桂老師",
                    phone: "0907-098399",
                    address: "高雄",
                    url: "https://www.facebook.com/OmghHandMadeBag"
                },

                {
                    name: "綉繪拼布教室－莊秀慧老師",
                    phone: "06-2094632",
                    address: "台南市北區東豐路277號",
                    url: "https://www.facebook.com/jill.quilt"
                }

            ]
        },


        {
            title: "宜花東地區－2 個售票點",

            stores: [

                {
                    name: "阿華拼布－劉秀華老師",
                    phone: "0911-247482",
                    address: "花蓮縣吉安鄉南山一街74號",
                    url: "https://www.facebook.com/profile.php?id=100057267355763"
                },

                {
                    name: "傅珠巧染－傅菊珠老師",
                    phone: "0932-664637",
                    address: "台東市仁昌街113號4樓之6",
                    url: "https://www.facebook.com/profile.php?id=100065198400415"
                }

            ]
        }

    ],


    notices: [

        "本活動由「台灣國際拼布友好會」主辦，票券收入全數用於展覽支出。",

        "主辦單位為非營利組織，無法開立發票；若需收據，可於入場時持門票至服務台索取。",

        "於 Accupass 購買電子票券者，原活動規定須出示電子票 QR Code，至入場服務台兌換紙本門票及活動券。",

        "紙本票券為一日票，經打孔或撕角即失效；若當日需離場，可憑手章於當日內多次進出。",

        "紙本票券包含摸彩序號、$50 抵用格 5 格、闖關格 6 格；並非每攤皆提供闖關或接受抵用券，遊戲規則以攤商現場公告為準。",

        "票券僅限 2025/11/21～11/23 展覽期間使用，票券售出後恕不退換。",

        "為維護展覽品質，場內禁止攜帶飲食（飲用水除外）。",

        "為保障展品與孩童安全，身高 110 公分以下孩童請勿入場。",

        "國小、國中及高中學生憑有效學生證可免費入場。",

        "場內禁止攜帶寵物入場。",

        "參觀期間可自由拍照，但請勿觸碰展出作品。",

        "凡購票即視為同意遵守活動注意事項及現場規範，並同意主辦單位於活動期間拍攝現場影像，用於電子媒體、網站、社群平台及其他活動相關宣傳用途。",

        "若注意事項有未盡事宜，悉依主辦單位公告、規定與最終解釋為準。",

        "主辦單位保留修改、變更或取消活動及相關規範之權利。"

    ]

};
