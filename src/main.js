// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title: { show: false },
    tooltip: {
        trigger: 'item'
    },
    legend: { show: false },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 90, name: '静态页面' },
                { value: 73, name: '编程基础' },
                { value: 75, name: '项目开发' },
                { value: 85, name: 'React' },
                { value: 75, name: 'Vue' },
                { value: 75, name: '沟通能力' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);