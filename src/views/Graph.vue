<template>
    <div id="container">
    </div>
    <hr>
    <div id="container2"></div>
    <hr>
    <div id="container3"></div><hr>
    <div id="container4"></div><hr>
    <div id="container5"></div><hr>
    <div id="container6"></div><hr>
    <div id="container7"></div><hr>
    <div id="container8"></div><hr>
    <div id="container9">

    </div>
</template>
<script>
    import Highcharts from 'highcharts'
    import HighchartsMore from "highcharts/highcharts-more";
    import Sankey from 'highcharts/modules/sankey'
    import DependencyWheel from 'highcharts/modules/dependency-wheel'
    import NetworkGraph from 'highcharts/modules/networkgraph'

    import ldata from '../ldata.json'
    
    HighchartsMore(Highcharts)
    Sankey(Highcharts)
    DependencyWheel(Highcharts)
    NetworkGraph(Highcharts)


export default {
    name:"Graph",
    data() {
        return {
            option3: {
                chart: {
                    polar: true,
                    type: 'line'
                },

                accessibility: {
                    description: 'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.'
                },

                title: {
                    text: 'Budget vs spending',
                    x: -80
                },

                pane: {
                    size: '80%'
                },

                xAxis: {
                    categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                        'Information Technology', 'Administration'],
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },

                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
                },

                legend: {
                    align: 'right',
                    verticalAlign: 'middle',
                    layout: 'vertical'
                },

                series: [{
                    name: 'Allocated Budget',
                    data: [43000, 19000, 60000, 35000, 17000, 10000],
                    pointPlacement: 'on'
                }, {
                    name: 'Actual Spending',
                    data: [50000, 39000, 42000, 31000, 26000, 14000],
                    pointPlacement: 'on'
                }],

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom',
                                layout: 'horizontal'
                            },
                            pane: {
                                size: '70%'
                            }
                        }
                    }]
                }

            },
            option4:{
                title: {
                    text: 'Highcharts Sankey Diagram'
                },
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
                    }
                },
                series: [{
                    keys: ['from', 'to', 'weight'],
                    data: [
                        ['Brazil', 'Portugal', 5],
                        ['Brazil', 'France', 1],
                        ['Brazil', 'Spain', 1],
                        ['Brazil', 'England', 1],
                        ['Canada', 'Portugal', 1],
                        ['Canada', 'France', 5],
                        ['Canada', 'England', 1],
                        ['Mexico', 'Portugal', 1],
                        ['Mexico', 'France', 1],
                        ['Mexico', 'Spain', 5],
                        ['Mexico', 'England', 1],
                        ['USA', 'Portugal', 1],
                        ['USA', 'France', 1],
                        ['USA', 'Spain', 1],
                        ['USA', 'England', 5],
                        ['Portugal', 'Angola', 2],
                        ['Portugal', 'Senegal', 1],
                        ['Portugal', 'Morocco', 1],
                        ['Portugal', 'South Africa', 3],
                        ['France', 'Angola', 1],
                        ['France', 'Senegal', 3],
                        ['France', 'Mali', 3],
                        ['France', 'Morocco', 3],
                        ['France', 'South Africa', 1],
                        ['Spain', 'Senegal', 1],
                        ['Spain', 'Morocco', 3],
                        ['Spain', 'South Africa', 1],
                        ['England', 'Angola', 1],
                        ['England', 'Senegal', 1],
                        ['England', 'Morocco', 2],
                        ['England', 'South Africa', 7],
                        ['South Africa', 'China', 5],
                        ['South Africa', 'India', 1],
                        ['South Africa', 'Japan', 3],
                        ['Angola', 'China', 5],
                        ['Angola', 'India', 1],
                        ['Angola', 'Japan', 3],
                        ['Senegal', 'China', 5],
                        ['Senegal', 'India', 1],
                        ['Senegal', 'Japan', 3],
                        ['Mali', 'China', 5],
                        ['Mali', 'India', 1],
                        ['Mali', 'Japan', 3],
                        ['Morocco', 'China', 5],
                        ['Morocco', 'India', 1],
                        ['Morocco', 'Japan', 3]
                    ],
                    type: 'sankey',
                    name: 'Sankey demo series'
                }]

            },
            option5:{
                title: {
                    text: 'Highcharts Dependency Wheel'
                },

                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
                    }
                },

                series: [{
                    keys: ['from', 'to', 'weight'],
                    data: [
                        ['Brazil', 'Portugal', 5],
                        ['Brazil', 'France', 1],
                        ['Brazil', 'Spain', 1],
                        ['Brazil', 'England', 1],
                        ['Canada', 'Portugal', 1],
                        ['Canada', 'France', 5],
                        ['Canada', 'England', 1],
                        ['Mexico', 'Portugal', 1],
                        ['Mexico', 'France', 1],
                        ['Mexico', 'Spain', 5],
                        ['Mexico', 'England', 1],
                        ['USA', 'Portugal', 1],
                        ['USA', 'France', 1],
                        ['USA', 'Spain', 1],
                        ['USA', 'England', 5],
                        ['Portugal', 'Angola', 2],
                        ['Portugal', 'Senegal', 1],
                        ['Portugal', 'Morocco', 1],
                        ['Portugal', 'South Africa', 3],
                        ['France', 'Angola', 1],
                        ['France', 'Senegal', 3],
                        ['France', 'Mali', 3],
                        ['France', 'Morocco', 3],
                        ['France', 'South Africa', 1],
                        ['Spain', 'Senegal', 1],
                        ['Spain', 'Morocco', 3],
                        ['Spain', 'South Africa', 1],
                        ['England', 'Angola', 1],
                        ['England', 'Senegal', 1],
                        ['England', 'Morocco', 2],
                        ['England', 'South Africa', 7],
                        ['South Africa', 'China', 5],
                        ['South Africa', 'India', 1],
                        ['South Africa', 'Japan', 3],
                        ['Angola', 'China', 5],
                        ['Angola', 'India', 1],
                        ['Angola', 'Japan', 3],
                        ['Senegal', 'China', 5],
                        ['Senegal', 'India', 1],
                        ['Senegal', 'Japan', 3],
                        ['Mali', 'China', 5],
                        ['Mali', 'India', 1],
                        ['Mali', 'Japan', 3],
                        ['Morocco', 'China', 5],
                        ['Morocco', 'India', 1],
                        ['Morocco', 'Japan', 3],
                        ['Japan', 'Brazil', 1]
                    ],
                    type: 'dependencywheel',
                    name: 'Dependency wheel series',
                    dataLabels: {
                        color: '#333',
                        textPath: {
                            enabled: true,
                            attributes: {
                                dy: 5
                            }
                        },
                        distance: 10
                    },
                    size: '95%'
                }]
            },
            items: ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"],
        }
    },
    mounted() {
        Highcharts.chart('container', {

            chart: {
                type: 'bubble',
                plotBorderWidth: 1,
                zoomType: 'xy'
            },

            title: {
                text: 'Highcharts bubbles with radial gradient fill',
                align:"center"
            },

            xAxis: {
                gridLineWidth: 1,
                accessibility: {
                    rangeDescription: 'Range: 0 to 100.'
                }
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                accessibility: {
                    rangeDescription: 'Range: 0 to 100.'
                }
            },

            series: [{
                name:"系列1",
                data: [
                    [9, 81, 63],
                    [98, 5, 89],
                    [51, 50, 73],
                    [41, 22, 14],
                    [58, 24, 20],
                    [78, 37, 34],
                    [55, 56, 53],
                    [18, 45, 70],
                    [42, 44, 28],
                    [3, 52, 59],
                    [31, 18, 97],
                    [79, 91, 63],
                    [93, 23, 23],
                    [44, 83, 22]
                ],
                marker: {
                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                        ]
                    }
                }
            }, {
                name:"系列2",
                data: [
                    [42, 38, 20],
                    [6, 18, 1],
                    [1, 93, 55],
                    [57, 2, 90],
                    [80, 76, 22],
                    [11, 74, 96],
                    [88, 56, 10],
                    [30, 47, 49],
                    [57, 62, 98],
                    [4, 16, 16],
                    [46, 10, 11],
                    [22, 87, 89],
                    [57, 91, 82],
                    [45, 15, 98]
                ],
                marker: {
                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                        ]
                    }
                }
            }]

        });
        Highcharts.chart('container2',{
            chart: {
                type: 'packedbubble',
                height: '100%'
            },
            title: {
                text: 'Carbon emissions around the world (2014)'
            },
            tooltip: {
                useHTML: true,
                pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
            },
            plotOptions: {
                packedbubble: {
                    minSize: '20%',
                    maxSize: '100%',
                    zMin: 0,
                    zMax: 1000,
                    layoutAlgorithm: {
                        gravitationalConstant: 0.05,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        filter: {
                            property: 'y',
                            operator: '>',
                            value: 250
                        },
                        style: {
                            color: 'black',
                            textOutline: 'none',
                            fontWeight: 'normal'
                        }
                    }
                }
            },
            series: [{
                name: 'Europe',
                data: [{
                    name: 'Germany',
                    value: 767.1
                }, {
                    name: 'Croatia',
                    value: 20.7
                },
                {
                    name: "Belgium",
                    value: 97.2
                },
                {
                    name: "Czech Republic",
                    value: 111.7
                },
                {
                    name: "Netherlands",
                    value: 158.1
                },
                {
                    name: "Spain",
                    value: 241.6
                },
                {
                    name: "Ukraine",
                    value: 249.1
                },
                {
                    name: "Poland",
                    value: 298.1
                },
                {
                    name: "France",
                    value: 323.7
                },
                {
                    name: "Romania",
                    value: 78.3
                },
                {
                    name: "United Kingdom",
                    value: 415.4
                }, {
                    name: "Turkey",
                    value: 353.2
                }, {
                    name: "Italy",
                    value: 337.6
                },
                {
                    name: "Greece",
                    value: 71.1
                },
                {
                    name: "Austria",
                    value: 69.8
                },
                {
                    name: "Belarus",
                    value: 67.7
                },
                {
                    name: "Serbia",
                    value: 59.3
                },
                {
                    name: "Finland",
                    value: 54.8
                },
                {
                    name: "Bulgaria",
                    value: 51.2
                },
                {
                    name: "Portugal",
                    value: 48.3
                },
                {
                    name: "Norway",
                    value: 44.4
                },
                {
                    name: "Sweden",
                    value: 44.3
                },
                {
                    name: "Hungary",
                    value: 43.7
                },
                {
                    name: "Switzerland",
                    value: 40.2
                },
                {
                    name: "Denmark",
                    value: 40
                },
                {
                    name: "Slovakia",
                    value: 34.7
                },
                {
                    name: "Ireland",
                    value: 34.6
                },
                {
                    name: "Croatia",
                    value: 20.7
                },
                {
                    name: "Estonia",
                    value: 19.4
                },
                {
                    name: "Slovenia",
                    value: 16.7
                },
                {
                    name: "Lithuania",
                    value: 12.3
                },
                {
                    name: "Luxembourg",
                    value: 10.4
                },
                {
                    name: "Macedonia",
                    value: 9.5
                },
                {
                    name: "Moldova",
                    value: 7.8
                },
                {
                    name: "Latvia",
                    value: 7.5
                },
                {
                    name: "Cyprus",
                    value: 7.2
                }]
            }, {
                name: 'Africa',
                data: [{
                    name: "Senegal",
                    value: 8.2
                },
                {
                    name: "Cameroon",
                    value: 9.2
                },
                {
                    name: "Zimbabwe",
                    value: 13.1
                },
                {
                    name: "Ghana",
                    value: 14.1
                },
                {
                    name: "Kenya",
                    value: 14.1
                },
                {
                    name: "Sudan",
                    value: 17.3
                },
                {
                    name: "Tunisia",
                    value: 24.3
                },
                {
                    name: "Angola",
                    value: 25
                },
                {
                    name: "Libya",
                    value: 50.6
                },
                {
                    name: "Ivory Coast",
                    value: 7.3
                },
                {
                    name: "Morocco",
                    value: 60.7
                },
                {
                    name: "Ethiopia",
                    value: 8.9
                },
                {
                    name: "United Republic of Tanzania",
                    value: 9.1
                },
                {
                    name: "Nigeria",
                    value: 93.9
                },
                {
                    name: "South Africa",
                    value: 392.7
                }, {
                    name: "Egypt",
                    value: 225.1
                }, {
                    name: "Algeria",
                    value: 141.5
                }]
            }, {
                name: 'Oceania',
                data: [{
                    name: "Australia",
                    value: 409.4
                },
                {
                    name: "New Zealand",
                    value: 34.1
                },
                {
                    name: "Papua New Guinea",
                    value: 7.1
                }]
            }, {
                name: 'North America',
                data: [{
                    name: "Costa Rica",
                    value: 7.6
                },
                {
                    name: "Honduras",
                    value: 8.4
                },
                {
                    name: "Jamaica",
                    value: 8.3
                },
                {
                    name: "Panama",
                    value: 10.2
                },
                {
                    name: "Guatemala",
                    value: 12
                },
                {
                    name: "Dominican Republic",
                    value: 23.4
                },
                {
                    name: "Cuba",
                    value: 30.2
                },
                {
                    name: "USA",
                    value: 5334.5
                }, {
                    name: "Canada",
                    value: 566
                }, {
                    name: "Mexico",
                    value: 456.3
                }]
            }, {
                name: 'South America',
                data: [{
                    name: "El Salvador",
                    value: 7.2
                },
                {
                    name: "Uruguay",
                    value: 8.1
                },
                {
                    name: "Bolivia",
                    value: 17.8
                },
                {
                    name: "Trinidad and Tobago",
                    value: 34
                },
                {
                    name: "Ecuador",
                    value: 43
                },
                {
                    name: "Chile",
                    value: 78.6
                },
                {
                    name: "Peru",
                    value: 52
                },
                {
                    name: "Colombia",
                    value: 74.1
                },
                {
                    name: "Brazil",
                    value: 501.1
                }, {
                    name: "Argentina",
                    value: 199
                },
                {
                    name: "Venezuela",
                    value: 195.2
                }]
            }, {
                name: 'Asia',
                data: [{
                    name: "Nepal",
                    value: 6.5
                },
                {
                    name: "Georgia",
                    value: 6.5
                },
                {
                    name: "Brunei Darussalam",
                    value: 7.4
                },
                {
                    name: "Kyrgyzstan",
                    value: 7.4
                },
                {
                    name: "Afghanistan",
                    value: 7.9
                },
                {
                    name: "Myanmar",
                    value: 9.1
                },
                {
                    name: "Mongolia",
                    value: 14.7
                },
                {
                    name: "Sri Lanka",
                    value: 16.6
                },
                {
                    name: "Bahrain",
                    value: 20.5
                },
                {
                    name: "Yemen",
                    value: 22.6
                },
                {
                    name: "Jordan",
                    value: 22.3
                },
                {
                    name: "Lebanon",
                    value: 21.1
                },
                {
                    name: "Azerbaijan",
                    value: 31.7
                },
                {
                    name: "Singapore",
                    value: 47.8
                },
                {
                    name: "Hong Kong",
                    value: 49.9
                },
                {
                    name: "Syria",
                    value: 52.7
                },
                {
                    name: "DPR Korea",
                    value: 59.9
                },
                {
                    name: "Israel",
                    value: 64.8
                },
                {
                    name: "Turkmenistan",
                    value: 70.6
                },
                {
                    name: "Oman",
                    value: 74.3
                },
                {
                    name: "Qatar",
                    value: 88.8
                },
                {
                    name: "Philippines",
                    value: 96.9
                },
                {
                    name: "Kuwait",
                    value: 98.6
                },
                {
                    name: "Uzbekistan",
                    value: 122.6
                },
                {
                    name: "Iraq",
                    value: 139.9
                },
                {
                    name: "Pakistan",
                    value: 158.1
                },
                {
                    name: "Vietnam",
                    value: 190.2
                },
                {
                    name: "United Arab Emirates",
                    value: 201.1
                },
                {
                    name: "Malaysia",
                    value: 227.5
                },
                {
                    name: "Kazakhstan",
                    value: 236.2
                },
                {
                    name: "Thailand",
                    value: 272
                },
                {
                    name: "Taiwan",
                    value: 276.7
                },
                {
                    name: "Indonesia",
                    value: 453
                },
                {
                    name: "Saudi Arabia",
                    value: 494.8
                },
                {
                    name: "Japan",
                    value: 1278.9
                },
                {
                    name: "China",
                    value: 10540.8
                },
                {
                    name: "India",
                    value: 2341.9
                },
                {
                    name: "Russia",
                    value: 1766.4
                },
                {
                    name: "Iran",
                    value: 618.2
                },
                {
                    name: "Korea",
                    value: 610.1
                }]
            }]
        }),
        Highcharts.chart('container3',this.option3),
        Highcharts.chart('container4',this.option4),
        Highcharts.chart('container5',this.option5),
        Highcharts.addEvent(
                Highcharts.Series,
                'afterSetOptions',
                function (e) {
                    var colors = Highcharts.getOptions().colors,
                        i = 0,
                        nodes = {};

                    if (
                        this instanceof Highcharts.seriesTypes.networkgraph &&
                        e.options.id === 'lang-tree'
                    ) {
                        e.options.data.forEach(function (link) {

                            if (link[0] === 'Proto Indo-European') {
                                nodes['Proto Indo-European'] = {
                                    id: 'Proto Indo-European',
                                    marker: {
                                        radius: 20
                                    }
                                };
                                nodes[link[1]] = {
                                    id: link[1],
                                    marker: {
                                        radius: 10
                                    },
                                    color: colors[i++]
                                };
                            } else if (nodes[link[0]] && nodes[link[0]].color) {
                                nodes[link[1]] = {
                                    id: link[1],
                                    color: nodes[link[0]].color
                                };
                            }
                        });

                        e.options.nodes = Object.keys(nodes).map(function (id) {
                            return nodes[id];
                        });
                    }
                }
            );
        Highcharts.chart('container6',{
            chart: {
                type: 'networkgraph',
                height: '100%'
            },
            title: {
                text: 'The Indo-European Language Tree'
            },
            subtitle: {
                text: 'A Force-Directed Network Graph in Highcharts'
            },
            plotOptions: {
                networkgraph: {
                    keys: ['from', 'to'],
                    layoutAlgorithm: {
                        enableSimulation: true,
                        friction: -0.9
                    }
                }
            },
            series: [{
                dataLabels: {
                    enabled: true,
                    linkFormat: ''
                },
                id: 'lang-tree',
                data: [
                    ['Proto Indo-European', 'Balto-Slavic'],
                    ['Proto Indo-European', 'Germanic'],
                    ['Proto Indo-European', 'Celtic'],
                    ['Proto Indo-European', 'Italic'],
                    ['Proto Indo-European', 'Hellenic'],
                    ['Proto Indo-European', 'Anatolian'],
                    ['Proto Indo-European', 'Indo-Iranian'],
                    ['Proto Indo-European', 'Tocharian'],
                    ['Indo-Iranian', 'Dardic'],
                    ['Indo-Iranian', 'Indic'],
                    ['Indo-Iranian', 'Iranian'],
                    ['Iranian', 'Old Persian'],
                    ['Old Persian', 'Middle Persian'],
                    ['Indic', 'Sanskrit'],
                    ['Italic', 'Osco-Umbrian'],
                    ['Italic', 'Latino-Faliscan'],
                    ['Latino-Faliscan', 'Latin'],
                    ['Celtic', 'Brythonic'],
                    ['Celtic', 'Goidelic'],
                    ['Germanic', 'North Germanic'],
                    ['Germanic', 'West Germanic'],
                    ['Germanic', 'East Germanic'],
                    ['North Germanic', 'Old Norse'],
                    ['North Germanic', 'Old Swedish'],
                    ['North Germanic', 'Old Danish'],
                    ['West Germanic', 'Old English'],
                    ['West Germanic', 'Old Frisian'],
                    ['West Germanic', 'Old Dutch'],
                    ['West Germanic', 'Old Low German'],
                    ['West Germanic', 'Old High German'],
                    ['Old Norse', 'Old Icelandic'],
                    ['Old Norse', 'Old Norwegian'],
                    ['Old Norwegian', 'Middle Norwegian'],
                    ['Old Swedish', 'Middle Swedish'],
                    ['Old Danish', 'Middle Danish'],
                    ['Old English', 'Middle English'],
                    ['Old Dutch', 'Middle Dutch'],
                    ['Old Low German', 'Middle Low German'],
                    ['Old High German', 'Middle High German'],
                    ['Balto-Slavic', 'Baltic'],
                    ['Balto-Slavic', 'Slavic'],
                    ['Slavic', 'East Slavic'],
                    ['Slavic', 'West Slavic'],
                    ['Slavic', 'South Slavic'],
                    // Leaves:
                    ['Proto Indo-European', 'Phrygian'],
                    ['Proto Indo-European', 'Armenian'],
                    ['Proto Indo-European', 'Albanian'],
                    ['Proto Indo-European', 'Thracian'],
                    ['Tocharian', 'Tocharian A'],
                    ['Tocharian', 'Tocharian B'],
                    ['Anatolian', 'Hittite'],
                    ['Anatolian', 'Palaic'],
                    ['Anatolian', 'Luwic'],
                    ['Anatolian', 'Lydian'],
                    ['Iranian', 'Balochi'],
                    ['Iranian', 'Kurdish'],
                    ['Iranian', 'Pashto'],
                    ['Iranian', 'Sogdian'],
                    ['Old Persian', 'Pahlavi'],
                    ['Middle Persian', 'Persian'],
                    ['Hellenic', 'Greek'],
                    ['Dardic', 'Dard'],
                    ['Sanskrit', 'Sindhi'],
                    ['Sanskrit', 'Romani'],
                    ['Sanskrit', 'Urdu'],
                    ['Sanskrit', 'Hindi'],
                    ['Sanskrit', 'Bihari'],
                    ['Sanskrit', 'Assamese'],
                    ['Sanskrit', 'Bengali'],
                    ['Sanskrit', 'Marathi'],
                    ['Sanskrit', 'Gujarati'],
                    ['Sanskrit', 'Punjabi'],
                    ['Sanskrit', 'Sinhalese'],
                    ['Osco-Umbrian', 'Umbrian'],
                    ['Osco-Umbrian', 'Oscan'],
                    ['Latino-Faliscan', 'Faliscan'],
                    ['Latin', 'Portugese'],
                    ['Latin', 'Spanish'],
                    ['Latin', 'French'],
                    ['Latin', 'Romanian'],
                    ['Latin', 'Italian'],
                    ['Latin', 'Catalan'],
                    ['Latin', 'Franco-Provençal'],
                    ['Latin', 'Rhaeto-Romance'],
                    ['Brythonic', 'Welsh'],
                    ['Brythonic', 'Breton'],
                    ['Brythonic', 'Cornish'],
                    ['Brythonic', 'Cuymbric'],
                    ['Goidelic', 'Modern Irish'],
                    ['Goidelic', 'Scottish Gaelic'],
                    ['Goidelic', 'Manx'],
                    ['East Germanic', 'Gothic'],
                    ['Middle Low German', 'Low German'],
                    ['Middle High German', '(High) German'],
                    ['Middle High German', 'Yiddish'],
                    ['Middle English', 'English'],
                    ['Middle Dutch', 'Hollandic'],
                    ['Middle Dutch', 'Flemish'],
                    ['Middle Dutch', 'Dutch'],
                    ['Middle Dutch', 'Limburgish'],
                    ['Middle Dutch', 'Brabantian'],
                    ['Middle Dutch', 'Rhinelandic'],
                    ['Old Frisian', 'Frisian'],
                    ['Middle Danish', 'Danish'],
                    ['Middle Swedish', 'Swedish'],
                    ['Middle Norwegian', 'Norwegian'],
                    ['Old Norse', 'Faroese'],
                    ['Old Icelandic', 'Icelandic'],
                    ['Baltic', 'Old Prussian'],
                    ['Baltic', 'Lithuanian'],
                    ['Baltic', 'Latvian'],
                    ['West Slavic', 'Polish'],
                    ['West Slavic', 'Slovak'],
                    ['West Slavic', 'Czech'],
                    ['West Slavic', 'Wendish'],
                    ['East Slavic', 'Bulgarian'],
                    ['East Slavic', 'Old Church Slavonic'],
                    ['East Slavic', 'Macedonian'],
                    ['East Slavic', 'Serbo-Croatian'],
                    ['East Slavic', 'Slovene'],
                    ['South Slavic', 'Russian'],
                    ['South Slavic', 'Ukrainian'],
                    ['South Slavic', 'Belarusian'],
                    ['South Slavic', 'Rusyn']
                ]
            }]
        })
        Highcharts.chart('container7',{
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },

            time: {
                useUTC: false
            },

            title: {
                text: 'Live random data'
            },

            accessibility: {
                announceNewData: {
                    enabled: true,
                    minAnnounceInterval: 15000,
                    announcementFormatter: function (allSeries, newSeries, newPoint) {
                        if (newPoint) {
                            return 'New point added. Value: ' + newPoint.y;
                        }
                        return false;
                    }
                }
            },

            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },

            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },

            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
            },

            legend: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
        Highcharts.chart('container8', {

            chart: {
                polar: true
            },

            title: {
                text: 'Highcharts Polar Chart'
            },

            subtitle: {
                text: 'Also known as Radar Chart'
            },

            pane: {
                startAngle: 0,
                endAngle: 360
            },

            xAxis: {
                // tickInterval: 60,
                // min: 0,
                // max: 360,
                categories: ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6","Item6","Item6"],
                labels: {
                    // myArray: [0, 1, 2, 3, 4, 5],
                    // format: '{value}°',
                    
                    // format:'{#each(myArray,-1)}',
                    style: {
                        // color: 'red',
                        fontSize: '15px'
                    }
                    
                },
                tickmarkPlacement: 'on',
            },

            yAxis: {
                min: 0
            },

            // plotOptions: {
            //     series: {
            //         pointStart: 0,
            //         pointInterval: 45
            //     },
            //     column: {
            //         pointPadding: 0,
            //         groupPadding: 0
            //     }
            // },

            series: [{
                type: 'column',
                name: 'Column',
                data: [8, 7, 6, 5, 4, 3, 2, 1],
                pointPlacement: 'between'
            }, {
                type: 'line',
                name: 'Line',
                data: [1, 2, 3, 4, 5, 6, 7, 8]
            }, {
                type: 'area',
                name: 'Area',
                data: [1, 8, 2, 7, 3, 6, 4, 5]
            }]
        })
        Highcharts.chart('container9', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'USD to EUR exchange rate over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: ldata
            }]
        });
    },
    
}
</script>
<style>
    #container {
        width: 600px;
        height: 400px;
        margin: 0 auto;
    }
    #container2{
        width: 600px;
        height: 600px;
        margin: 0 auto;
    }
    #container3{
        width: 600px;
        height: 600px;
        margin: 0 auto;
    }
    #container4{
        width: 800px;
        height: 600px;
        margin: 0 auto;
    }
    #container5{
        width: 600px;
        height: 600px;
        margin: 0 auto;
    }
    #container6{
        width: 600px;
        height: 600px;
        margin: 0 auto;
    }
    #container7{
        width: 500px;
        height: 300px;
        margin: 0 auto;
    }
    #container8{
        width: 400px;
        height: 400px;
        margin: 0 auto;
    }
    #container9{
        width: 600px;
        height: 400px;
        margin: 0 auto;
    }
</style>