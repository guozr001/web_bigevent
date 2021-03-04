// 监控模块
(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this).addClass("active").siblings("a").removeClass("active");
        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
    })
})();

// 点位分布
(function() {
    //实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    //制定配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: [
            "#006cff",
            "#60cda4",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff",
        ],
        series: [{
            name: '点位统计',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                { value: 30, name: '山东' },
                { value: 28, name: '北京' },
                { value: 26, name: '天津' },
                { value: 24, name: '广东' },
                { value: 22, name: '江苏' },
                { value: 20, name: '浙江' },
                { value: 18, name: '重庆' },
                { value: 16, name: '四川' }
            ],
            lable: {
                fontSize: 10
            },
            lableLine: {
                length: 6,
                length: 8
            }
        }]
    };
    //配置项和数据给我们实例化对象
    myChart.setOption(option);
    //当浏览器缩放的时候，图表也等比例缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// 柱形图
(function() {
    var item = {
        name: "",
        value: 1200,
        itemStyle: {
            color: "#254065"
        },
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        tooltip: {
            extraCssText: "opacity:0"
        }
    }
    var myChart = echarts.init(document.querySelector(".bar"));
    var option = {
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [
                { offset: 0, color: "#00fffb" },
                { offset: 1, color: "#0061ce" }
            ]
        ),
        tooltip: {
            trigger: 'item',

        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: "3%",
            containLabel: true,
            show: true,
            borderColor: "rgba(0,240,255,0.3)"
        },
        xAxis: [{
            type: 'category',
            data: [
                "上海",
                "广州",
                "北京",
                "深圳",
                "合肥",
                "",
                "......",
                "",
                "杭州",
                "厦门",
                "济南",
                "成都",
                "重庆"
            ],

            axisTick: {
                alignWithLabel: false,
                show: false
            },
            axisLabel: {
                interval: 0,
                color: "#4c9bfd"
            },
            axisLine: {
                lineStyle: {

                    color: "rgba(0,240,255,0.3)"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                alignWithLabel: false,
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(0,240,255,0.3)"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(0,240,255,0.3)"
                }
            },
        }],
        series: [{
            name: '用户统计',
            type: 'bar',
            barWidth: '60%',
            data: [
                2100,
                1900,
                1700,
                1560,
                1400,
                item,
                item,
                item,
                900,
                750,
                600,
                480,
                240
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
// 订单模块
(function() {
    $(".order .filter").on("click", "a", function() {
        $(this).addClass("active").siblings("a").removeClass("active");
        $(".order .data").eq($(this).index()).show().siblings(".data").hide();
    })
})();

// 销售额模块
(function() {
    var data = {
        year: [
            [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90],
            [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
        ],
        quarter: [
            [20, 32, 1, 34, 0, 30, 20, 10, 12, 101, 34, 90],
            [20, 82, 91, 34, 20, 30, 30, 20, 12, 91, 24, 90]
        ],
        month: [
            [220, 232, 21, 234, 20, 320, 220, 120, 122, 101, 324, 290],
            [220, 282, 291, 324, 220, 320, 230, 220, 122, 921, 224, 920]
        ],
        week: [
            [320, 332, 313, 334, 330, 330, 320, 310, 123, 101, 334, 333],
            [230, 382, 931, 343, 230, 330, 330, 230, 132, 931, 234, 930]
        ],
    };
    var myChart = echarts.init(document.querySelector('.line'));
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            right: "10%",
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4996f5'
            }
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: '预期销售额',
                type: 'line',

                smooth: true,
                data: data.year[0]
            },
            {
                name: '实际销售额',
                type: 'line',

                smooth: true,
                data: data.year[1]
            },
        ]
    };
    myChart.setOption(option);
    // tab栏切换
    $(".sales .caption").on("click", "a", function() {
        $(this).addClass("active").siblings("a").removeClass("active");
        var arr = data[this.dataset.type];
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        myChart.setOption(option);
    });


    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
/* 渠道分布以及季度销售模块 */
(function() {
    var myChart = echarts.init(document.querySelector(".channel .radar"));
    var dataBJ = [
        [50, 19, 56, 11, 34, 76],

    ];



    var lineStyle = {
        normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5
        }
    };

    option = {
        tooltip: {
            show: true,
            position: ["50%", "10%"],
            textStyle: {
                fontSize: 8
            },
            padding: 5
        },
        // backgroundColor: trans,

        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            radius: "60%",
            shape: 'circle',
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(255, 255, 255, 0.5)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [{
                name: '北京',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: "#fff",
                    fontSize: 10,
                },
                areaStyle: {
                    color: "rgba(238,197,102,0.6)"

                }
            },

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();

// 季度销售进度
(function() {
    var myChart = echarts.init(document.querySelector(".quarter .gauge"));
    var option = {

        series: [{
            name: '销售进度',
            type: 'pie',
            radius: ['130%', '150%'],
            center: ["48%", "80%"],
            labelLine: {
                show: false
            },
            startAngle: 180,
            hoverOffset: 0,
            data: [{
                    value: 100,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [
                                { offset: 0, color: "#00c9e0" },
                                { offset: 1, color: "#005fc1" }
                            ]
                        )
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: "#12274d"
                    }
                },
                {
                    value: 200,
                    itemStyle: {
                        color: "transparent"
                    }

                },
            ]
        }]
    };
    myChart.setOption(option);
})();

// 全国热榜
(function() {
    var hotData = [{
            city: "北京", // 城市
            sales: "25, 179", // 销售额
            flag: true, //  上升还是下降
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼", num: "2,170", flag: true }
            ]
        },
        {
            city: "河北",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼", num: "1,170", flag: false }
            ]
        },
        {
            city: "上海",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼", num: "2,998", flag: true }
            ]
        },
        {
            city: "江苏",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼", num: "1,770", flag: false }
            ]
        },
        {
            city: "山东",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼", num: "9,999", flag: true }
            ]
        }
    ];
    // 遍历hotdata对象
    var supHtml = "";
    $.each(hotData, function(index, item) {
        supHtml += `<li>
    <span>${item.city}</span>
    <span>${item.sales} <s class=${item.flag ? "icon-up":"icon-down"}></s></span>
</li>`;
        $(".sup").html(supHtml);
    });
    $(".province .sup").on('mouseenter', 'li', function() {
        index = $(this).index();
        render($(this));
    })

    function render(that) {
        that.addClass('active').siblings('li').removeClass('active');
        // console.log($(this).index());
        // console.log(hotData[($(this).index())].brands);
        // 遍历品牌对象
        var subHtml = "";
        $.each(hotData[that.index()].brands, function(index, items) {
            subHtml += `<li><span>${items.name}</span><span> ${items.num}<s class="${items.flag ? "icon-up":"icon-down" }"></s></span></li>`
            $(".sub").html(subHtml);
        })
    }
    var lis = $(".province .sup li")
    lis.eq(0).mouseenter();
    // 开启定时器
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 5) {
            index = 0;
        };
        render(lis.eq(index));
    }, 2000)
    $(".province .sup").hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= 5) {
                index = 0;
            };
            render(lis.eq(index));
        }, 2000)
    })
})();