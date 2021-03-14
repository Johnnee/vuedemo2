<template>
  <div id="container"></div><hr>
  <div id="container2"></div><hr>
  <div id="container3"></div><hr>
  <div id="container4"></div><hr>
  <div id="container5"></div>
</template>

<script>

import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Wordcloud from "highcharts/modules/wordcloud";
import Highmaps from "highcharts/modules/map"; //导入Highmaps
import Highcharts3D from "highcharts/highcharts-3d";
// import Highmaps from "highcharts/highmaps";
import map from "../map";
import worldmap from '../worldmap'


// import $ from 'jquery'

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Wordcloud(Highcharts);
Highmaps(Highcharts);

export default {
  data() {
    return {
      mapdata: [
        {
          "code3": "ABW",
          "z": 105,
          "code": "AW"
        },
        {
          "code3": "AFG",
          "z": 34656,
          "code": "AF"
        },
        {
          "code3": "AGO",
          "z": 28813,
          "code": "AO"
        },
        {
          "code3": "ALB",
          "z": 2876,
          "code": "AL"
        },
        {
          "code3": "AND",
          "z": 77,
          "code": "AD"
        },
        {
          "code3": "ARE",
          "z": 9270,
          "code": "AE"
        },
        {
          "code3": "ARG",
          "z": 43847,
          "code": "AR"
        },
        {
          "code3": "ARM",
          "z": 2925,
          "code": "AM"
        },
        {
          "code3": "ASM",
          "z": 56,
          "code": "AS"
        },
        {
          "code3": "ATG",
          "z": 101,
          "code": "AG"
        },
        {
          "code3": "AUS",
          "z": 24211,
          "code": "AU"
        },
        {
          "code3": "AUT",
          "z": 8731,
          "code": "AT"
        },
        {
          "code3": "AZE",
          "z": 9758,
          "code": "AZ"
        },
        {
          "code3": "BDI",
          "z": 10524,
          "code": "BI"
        },
        {
          "code3": "BEL",
          "z": 11338,
          "code": "BE"
        },
        {
          "code3": "BEN",
          "z": 10872,
          "code": "BJ"
        },
        {
          "code3": "BFA",
          "z": 18646,
          "code": "BF"
        },
        {
          "code3": "BGD",
          "z": 162952,
          "code": "BD"
        },
        {
          "code3": "BGR",
          "z": 7128,
          "code": "BG"
        },
        {
          "code3": "BHR",
          "z": 1425,
          "code": "BH"
        },
        {
          "code3": "BHS",
          "z": 391,
          "code": "BS"
        },
        {
          "code3": "BIH",
          "z": 3517,
          "code": "BA"
        },
        {
          "code3": "BLR",
          "z": 9502,
          "code": "BY"
        },
        {
          "code3": "BLZ",
          "z": 367,
          "code": "BZ"
        },
        {
          "code3": "BMU",
          "z": 65,
          "code": "BM"
        },
        {
          "code3": "BOL",
          "z": 10888,
          "code": "BO"
        },
        {
          "code3": "BRA",
          "z": 207653,
          "code": "BR"
        },
        {
          "code3": "BRB",
          "z": 285,
          "code": "BB"
        },
        {
          "code3": "BRN",
          "z": 423,
          "code": "BN"
        },
        {
          "code3": "BTN",
          "z": 798,
          "code": "BT"
        },
        {
          "code3": "BWA",
          "z": 2250,
          "code": "BW"
        },
        {
          "code3": "CAF",
          "z": 4595,
          "code": "CF"
        },
        {
          "code3": "CAN",
          "z": 36265,
          "code": "CA"
        },
        {
          "code3": "CHE",
          "z": 8372,
          "code": "CH"
        },
        {
          "code3": "CHL",
          "z": 17910,
          "code": "CL"
        },
        {
          "code3": "CHN",
          "z": 1378665,
          "code": "CN"
        },
        {
          "code3": "CIV",
          "z": 23696,
          "code": "CI"
        },
        {
          "code3": "CMR",
          "z": 23439,
          "code": "CM"
        },
        {
          "code3": "COD",
          "z": 78736,
          "code": "CD"
        },
        {
          "code3": "COG",
          "z": 5126,
          "code": "CG"
        },
        {
          "code3": "COL",
          "z": 48653,
          "code": "CO"
        },
        {
          "code3": "COM",
          "z": 796,
          "code": "KM"
        },
        {
          "code3": "CPV",
          "z": 540,
          "code": "CV"
        },
        {
          "code3": "CRI",
          "z": 4857,
          "code": "CR"
        },
        {
          "code3": "CUB",
          "z": 11476,
          "code": "CU"
        },
        {
          "code3": "CUW",
          "z": 160,
          "code": "CW"
        },
        {
          "code3": "CYM",
          "z": 61,
          "code": "KY"
        },
        {
          "code3": "CYP",
          "z": 1170,
          "code": "CY"
        },
        {
          "code3": "CZE",
          "z": 10566,
          "code": "CZ"
        },
        {
          "code3": "DEU",
          "z": 82488,
          "code": "DE"
        },
        {
          "code3": "DJI",
          "z": 942,
          "code": "DJ"
        },
        {
          "code3": "DMA",
          "z": 74,
          "code": "DM"
        },
        {
          "code3": "DNK",
          "z": 5728,
          "code": "DK"
        },
        {
          "code3": "DOM",
          "z": 10649,
          "code": "DO"
        },
        {
          "code3": "DZA",
          "z": 40606,
          "code": "DZ"
        },
        {
          "code3": "ECU",
          "z": 16385,
          "code": "EC"
        },
        {
          "code3": "EGY",
          "z": 95689,
          "code": "EG"
        },
        {
          "code3": "ERI",
          "z": 4475,
          "code": "ER"
        },
        {
          "code3": "ESP",
          "z": 46485,
          "code": "ES"
        },
        {
          "code3": "EST",
          "z": 1316,
          "code": "EE"
        },
        {
          "code3": "ETH",
          "z": 102403,
          "code": "ET"
        },
        {
          "code3": "FIN",
          "z": 5495,
          "code": "FI"
        },
        {
          "code3": "FJI",
          "z": 899,
          "code": "FJ"
        },
        {
          "code3": "FRA",
          "z": 66892,
          "code": "FR"
        },
        {
          "code3": "FRO",
          "z": 49,
          "code": "FO"
        },
        {
          "code3": "FSM",
          "z": 105,
          "code": "FM"
        },
        {
          "code3": "GAB",
          "z": 1980,
          "code": "GA"
        },
        {
          "code3": "GBR",
          "z": 65596,
          "code": "GB"
        },
        {
          "code3": "GEO",
          "z": 3719,
          "code": "GE"
        },
        {
          "code3": "GHA",
          "z": 28207,
          "code": "GH"
        },
        {
          "code3": "GIB",
          "z": 34,
          "code": "GI"
        },
        {
          "code3": "GIN",
          "z": 12396,
          "code": "GN"
        },
        {
          "code3": "GMB",
          "z": 2039,
          "code": "GM"
        },
        {
          "code3": "GNB",
          "z": 1816,
          "code": "GW"
        },
        {
          "code3": "GNQ",
          "z": 1221,
          "code": "GQ"
        },
        {
          "code3": "GRC",
          "z": 10771,
          "code": "GR"
        },
        {
          "code3": "GRD",
          "z": 107,
          "code": "GD"
        },
        {
          "code3": "GRL",
          "z": 56,
          "code": "GL"
        },
        {
          "code3": "GTM",
          "z": 16582,
          "code": "GT"
        },
        {
          "code3": "GUM",
          "z": 163,
          "code": "GU"
        },
        {
          "code3": "GUY",
          "z": 773,
          "code": "GY"
        },
        {
          "code3": "HKG",
          "z": 7337,
          "code": "HK"
        },
        {
          "code3": "HND",
          "z": 9113,
          "code": "HN"
        },
        {
          "code3": "HRV",
          "z": 4174,
          "code": "HR"
        },
        {
          "code3": "HTI",
          "z": 10847,
          "code": "HT"
        },
        {
          "code3": "HUN",
          "z": 9814,
          "code": "HU"
        },
        {
          "code3": "IDN",
          "z": 261115,
          "code": "ID"
        },
        {
          "code3": "IMN",
          "z": 84,
          "code": "IM"
        },
        {
          "code3": "IND",
          "z": 1324171,
          "code": "IN"
        },
        {
          "code3": "IRL",
          "z": 4750,
          "code": "IE"
        },
        {
          "code3": "IRN",
          "z": 80277,
          "code": "IR"
        },
        {
          "code3": "IRQ",
          "z": 37203,
          "code": "IQ"
        },
        {
          "code3": "ISL",
          "z": 335,
          "code": "IS"
        },
        {
          "code3": "ISR",
          "z": 8546,
          "code": "IL"
        },
        {
          "code3": "ITA",
          "z": 60627,
          "code": "IT"
        },
        {
          "code3": "JAM",
          "z": 2881,
          "code": "JM"
        },
        {
          "code3": "JOR",
          "z": 9456,
          "code": "JO"
        },
        {
          "code3": "JPN",
          "z": 126995,
          "code": "JP"
        },
        {
          "code3": "KAZ",
          "z": 17794,
          "code": "KZ"
        },
        {
          "code3": "KEN",
          "z": 48462,
          "code": "KE"
        },
        {
          "code3": "KGZ",
          "z": 6080,
          "code": "KG"
        },
        {
          "code3": "KHM",
          "z": 15762,
          "code": "KH"
        },
        {
          "code3": "KIR",
          "z": 114,
          "code": "KI"
        },
        {
          "code3": "KNA",
          "z": 55,
          "code": "KN"
        },
        {
          "code3": "KOR",
          "z": 51246,
          "code": "KR"
        },
        {
          "code3": "KWT",
          "z": 4053,
          "code": "KW"
        },
        {
          "code3": "LAO",
          "z": 6758,
          "code": "LA"
        },
        {
          "code3": "LBN",
          "z": 6007,
          "code": "LB"
        },
        {
          "code3": "LBR",
          "z": 4614,
          "code": "LR"
        },
        {
          "code3": "LBY",
          "z": 6293,
          "code": "LY"
        },
        {
          "code3": "LCA",
          "z": 178,
          "code": "LC"
        },
        {
          "code3": "LIE",
          "z": 38,
          "code": "LI"
        },
        {
          "code3": "LKA",
          "z": 21203,
          "code": "LK"
        },
        {
          "code3": "LSO",
          "z": 2204,
          "code": "LS"
        },
        {
          "code3": "LTU",
          "z": 2868,
          "code": "LT"
        },
        {
          "code3": "LUX",
          "z": 582,
          "code": "LU"
        },
        {
          "code3": "LVA",
          "z": 1960,
          "code": "LV"
        },
        {
          "code3": "MAC",
          "z": 612,
          "code": "MO"
        },
        {
          "code3": "MAF",
          "z": 32,
          "code": "MF"
        },
        {
          "code3": "MAR",
          "z": 35277,
          "code": "MA"
        },
        {
          "code3": "MCO",
          "z": 38,
          "code": "MC"
        },
        {
          "code3": "MDA",
          "z": 3552,
          "code": "MD"
        },
        {
          "code3": "MDG",
          "z": 24895,
          "code": "MG"
        },
        {
          "code3": "MDV",
          "z": 428,
          "code": "MV"
        },
        {
          "code3": "MEX",
          "z": 127540,
          "code": "MX"
        },
        {
          "code3": "MHL",
          "z": 53,
          "code": "MH"
        },
        {
          "code3": "MKD",
          "z": 2081,
          "code": "MK"
        },
        {
          "code3": "MLI",
          "z": 17995,
          "code": "ML"
        },
        {
          "code3": "MLT",
          "z": 437,
          "code": "MT"
        },
        {
          "code3": "MMR",
          "z": 52885,
          "code": "MM"
        },
        {
          "code3": "MNE",
          "z": 622,
          "code": "ME"
        },
        {
          "code3": "MNG",
          "z": 3027,
          "code": "MN"
        },
        {
          "code3": "MNP",
          "z": 55,
          "code": "MP"
        },
        {
          "code3": "MOZ",
          "z": 28829,
          "code": "MZ"
        },
        {
          "code3": "MRT",
          "z": 4301,
          "code": "MR"
        },
        {
          "code3": "MUS",
          "z": 1263,
          "code": "MU"
        },
        {
          "code3": "MWI",
          "z": 18092,
          "code": "MW"
        },
        {
          "code3": "MYS",
          "z": 31187,
          "code": "MY"
        },
        {
          "code3": "NAM",
          "z": 2480,
          "code": "NA"
        },
        {
          "code3": "NCL",
          "z": 277,
          "code": "NC"
        },
        {
          "code3": "NER",
          "z": 20673,
          "code": "NE"
        },
        {
          "code3": "NGA",
          "z": 185990,
          "code": "NG"
        },
        {
          "code3": "NIC",
          "z": 6150,
          "code": "NI"
        },
        {
          "code3": "NLD",
          "z": 17030,
          "code": "NL"
        },
        {
          "code3": "NOR",
          "z": 5236,
          "code": "NO"
        },
        {
          "code3": "NPL",
          "z": 28983,
          "code": "NP"
        },
        {
          "code3": "NRU",
          "z": 13,
          "code": "NR"
        },
        {
          "code3": "NZL",
          "z": 4693,
          "code": "NZ"
        },
        {
          "code3": "OMN",
          "z": 4425,
          "code": "OM"
        },
        {
          "code3": "PAK",
          "z": 193203,
          "code": "PK"
        },
        {
          "code3": "PAN",
          "z": 4034,
          "code": "PA"
        },
        {
          "code3": "PER",
          "z": 31774,
          "code": "PE"
        },
        {
          "code3": "PHL",
          "z": 103320,
          "code": "PH"
        },
        {
          "code3": "PLW",
          "z": 22,
          "code": "PW"
        },
        {
          "code3": "PNG",
          "z": 8085,
          "code": "PG"
        },
        {
          "code3": "POL",
          "z": 37970,
          "code": "PL"
        },
        {
          "code3": "PRI",
          "z": 3411,
          "code": "PR"
        },
        {
          "code3": "PRK",
          "z": 25369,
          "code": "KP"
        },
        {
          "code3": "PRT",
          "z": 10325,
          "code": "PT"
        },
        {
          "code3": "PRY",
          "z": 6725,
          "code": "PY"
        },
        {
          "code3": "PSE",
          "z": 4552,
          "code": "PS"
        },
        {
          "code3": "PYF",
          "z": 280,
          "code": "PF"
        },
        {
          "code3": "QAT",
          "z": 2570,
          "code": "QA"
        },
        {
          "code3": "ROU",
          "z": 19699,
          "code": "RO"
        },
        {
          "code3": "RUS",
          "z": 144342,
          "code": "RU"
        },
        {
          "code3": "RWA",
          "z": 11918,
          "code": "RW"
        },
        {
          "code3": "SAU",
          "z": 32276,
          "code": "SA"
        },
        {
          "code3": "SDN",
          "z": 39579,
          "code": "SD"
        },
        {
          "code3": "SEN",
          "z": 15412,
          "code": "SN"
        },
        {
          "code3": "SGP",
          "z": 5607,
          "code": "SG"
        },
        {
          "code3": "SLB",
          "z": 599,
          "code": "SB"
        },
        {
          "code3": "SLE",
          "z": 7396,
          "code": "SL"
        },
        {
          "code3": "SLV",
          "z": 6345,
          "code": "SV"
        },
        {
          "code3": "SMR",
          "z": 33,
          "code": "SM"
        },
        {
          "code3": "SOM",
          "z": 14318,
          "code": "SO"
        },
        {
          "code3": "SRB",
          "z": 7058,
          "code": "RS"
        },
        {
          "code3": "SSD",
          "z": 12231,
          "code": "SS"
        },
        {
          "code3": "STP",
          "z": 200,
          "code": "ST"
        },
        {
          "code3": "SUR",
          "z": 558,
          "code": "SR"
        },
        {
          "code3": "SVK",
          "z": 5431,
          "code": "SK"
        },
        {
          "code3": "SVN",
          "z": 2065,
          "code": "SI"
        },
        {
          "code3": "SWE",
          "z": 9923,
          "code": "SE"
        },
        {
          "code3": "SWZ",
          "z": 1343,
          "code": "SZ"
        },
        {
          "code3": "SXM",
          "z": 40,
          "code": "SX"
        },
        {
          "code3": "SYC",
          "z": 95,
          "code": "SC"
        },
        {
          "code3": "SYR",
          "z": 18430,
          "code": "SY"
        },
        {
          "code3": "TCA",
          "z": 35,
          "code": "TC"
        },
        {
          "code3": "TCD",
          "z": 14453,
          "code": "TD"
        },
        {
          "code3": "TGO",
          "z": 7606,
          "code": "TG"
        },
        {
          "code3": "THA",
          "z": 68864,
          "code": "TH"
        },
        {
          "code3": "TJK",
          "z": 8735,
          "code": "TJ"
        },
        {
          "code3": "TKM",
          "z": 5663,
          "code": "TM"
        },
        {
          "code3": "TLS",
          "z": 1269,
          "code": "TL"
        },
        {
          "code3": "TON",
          "z": 107,
          "code": "TO"
        },
        {
          "code3": "TTO",
          "z": 1365,
          "code": "TT"
        },
        {
          "code3": "TUN",
          "z": 11403,
          "code": "TN"
        },
        {
          "code3": "TUR",
          "z": 79512,
          "code": "TR"
        },
        {
          "code3": "TUV",
          "z": 11,
          "code": "TV"
        },
        {
          "code3": "TZA",
          "z": 55572,
          "code": "TZ"
        },
        {
          "code3": "UGA",
          "z": 41488,
          "code": "UG"
        },
        {
          "code3": "UKR",
          "z": 45005,
          "code": "UA"
        },
        {
          "code3": "URY",
          "z": 3444,
          "code": "UY"
        },
        {
          "code3": "USA",
          "z": 323128,
          "code": "US"
        },
        {
          "code3": "UZB",
          "z": 31848,
          "code": "UZ"
        },
        {
          "code3": "VCT",
          "z": 110,
          "code": "VC"
        },
        {
          "code3": "VEN",
          "z": 31568,
          "code": "VE"
        },
        {
          "code3": "VGB",
          "z": 31,
          "code": "VG"
        },
        {
          "code3": "VIR",
          "z": 108,
          "code": "VI"
        },
        {
          "code3": "VNM",
          "z": 94569,
          "code": "VN"
        },
        {
          "code3": "VUT",
          "z": 270,
          "code": "VU"
        },
        {
          "code3": "WSM",
          "z": 195,
          "code": "WS"
        },
        {
          "code3": "YEM",
          "z": 27584,
          "code": "YE"
        },
        {
          "code3": "ZAF",
          "z": 56015,
          "code": "ZA"
        },
        {
          "code3": "ZMB",
          "z": 16591,
          "code": "ZM"
        },
        {
          "code3": "ZWE",
          "z": 16150,
          "code": "ZW"
        }
      ],
      data3: [
        {
          "code3": "ABW",
          "name": "Aruba",
          "value": 582.34,
          "code": "AW"
        },
        {
          "code3": "AFG",
          "name": "Afghanistan",
          "value": 53.08,
          "code": "AF"
        },
        {
          "code3": "AGO",
          "name": "Angola",
          "value": 23.11,
          "code": "AO"
        },
        {
          "code3": "ALB",
          "name": "Albania",
          "value": 104.97,
          "code": "AL"
        },
        {
          "code3": "AND",
          "name": "Andorra",
          "value": 164.43,
          "code": "AD"
        },
        {
          "code3": "ARE",
          "name": "United Arab Emirates",
          "value": 110.88,
          "code": "AE"
        },
        {
          "code3": "ARG",
          "name": "Argentina",
          "value": 16.02,
          "code": "AR"
        },
        {
          "code3": "ARM",
          "name": "Armenia",
          "value": 102.73,
          "code": "AM"
        },
        {
          "code3": "ASM",
          "name": "American Samoa",
          "value": 278,
          "code": "AS"
        },
        {
          "code3": "ATG",
          "name": "Antigua and Barbuda",
          "value": 229.46,
          "code": "AG"
        },
        {
          "code3": "AUS",
          "name": "Australia",
          "value": 3.15,
          "code": "AU"
        },
        {
          "code3": "AUT",
          "name": "Austria",
          "value": 105.81,
          "code": "AT"
        },
        {
          "code3": "AZE",
          "name": "Azerbaijan",
          "value": 118.04,
          "code": "AZ"
        },
        {
          "code3": "BDI",
          "name": "Burundi",
          "value": 409.82,
          "code": "BI"
        },
        {
          "code3": "BEL",
          "name": "Belgium",
          "value": 374.45,
          "code": "BE"
        },
        {
          "code3": "BEN",
          "name": "Benin",
          "value": 96.42,
          "code": "BJ"
        },
        {
          "code3": "BFA",
          "name": "Burkina Faso",
          "value": 68.15,
          "code": "BF"
        },
        {
          "code3": "BGD",
          "name": "Bangladesh",
          "value": 1251.84,
          "code": "BD"
        },
        {
          "code3": "BGR",
          "name": "Bulgaria",
          "value": 65.66,
          "code": "BG"
        },
        {
          "code3": "BHR",
          "name": "Bahrain",
          "value": 1848.47,
          "code": "BH"
        },
        {
          "code3": "BHS",
          "name": "Bahamas, The",
          "value": 39.08,
          "code": "BS"
        },
        {
          "code3": "BIH",
          "name": "Bosnia and Herzegovina",
          "value": 68.69,
          "code": "BA"
        },
        {
          "code3": "BLR",
          "name": "Belarus",
          "value": 46.83,
          "code": "BY"
        },
        {
          "code3": "BLZ",
          "name": "Belize",
          "value": 16.09,
          "code": "BZ"
        },
        {
          "code3": "BMU",
          "name": "Bermuda",
          "value": 1307.52,
          "code": "BM"
        },
        {
          "code3": "BOL",
          "name": "Bolivia",
          "value": 10.05,
          "code": "BO"
        },
        {
          "code3": "BRA",
          "name": "Brazil",
          "value": 24.84,
          "code": "BR"
        },
        {
          "code3": "BRB",
          "name": "Barbados",
          "value": 662.78,
          "code": "BB"
        },
        {
          "code3": "BRN",
          "name": "Brunei Darussalam",
          "value": 80.3,
          "code": "BN"
        },
        {
          "code3": "BTN",
          "name": "Bhutan",
          "value": 20.93,
          "code": "BT"
        },
        {
          "code3": "BWA",
          "name": "Botswana",
          "value": 3.97,
          "code": "BW"
        },
        {
          "code3": "CAF",
          "name": "Central African Republic",
          "value": 7.38,
          "code": "CF"
        },
        {
          "code3": "CAN",
          "name": "Canada",
          "value": 3.99,
          "code": "CA"
        },
        {
          "code3": "CHE",
          "name": "Switzerland",
          "value": 211.87,
          "code": "CH"
        },
        {
          "code3": "CHL",
          "name": "Chile",
          "value": 24.09,
          "code": "CL"
        },
        {
          "code3": "CHN",
          "name": "China",
          "value": 146.85,
          "code": "CN"
        },
        {
          "code3": "CIV",
          "name": "Cote d'Ivoire",
          "value": 74.52,
          "code": "CI"
        },
        {
          "code3": "CMR",
          "name": "Cameroon",
          "value": 49.58,
          "code": "CM"
        },
        {
          "code3": "COD",
          "name": "Congo, Dem. Rep.",
          "value": 34.73,
          "code": "CD"
        },
        {
          "code3": "COG",
          "name": "Congo, Rep.",
          "value": 15.01,
          "code": "CG"
        },
        {
          "code3": "COL",
          "name": "Colombia",
          "value": 43.85,
          "code": "CO"
        },
        {
          "code3": "COM",
          "name": "Comoros",
          "value": 427.51,
          "code": "KM"
        },
        {
          "code3": "CPV",
          "name": "Cabo Verde",
          "value": 133.89,
          "code": "CV"
        },
        {
          "code3": "CRI",
          "name": "Costa Rica",
          "value": 95.13,
          "code": "CR"
        },
        {
          "code3": "CUB",
          "name": "Cuba",
          "value": 110.32,
          "code": "CU"
        },
        {
          "code3": "CUW",
          "name": "Curacao",
          "value": 359.6,
          "code": "CW"
        },
        {
          "code3": "CYM",
          "name": "Cayman Islands",
          "value": 253.19,
          "code": "KY"
        },
        {
          "code3": "CYP",
          "name": "Cyprus",
          "value": 126.64,
          "code": "CY"
        },
        {
          "code3": "CZE",
          "name": "Czech Republic",
          "value": 136.85,
          "code": "CZ"
        },
        {
          "code3": "DEU",
          "name": "Germany",
          "value": 236.42,
          "code": "DE"
        },
        {
          "code3": "DJI",
          "name": "Djibouti",
          "value": 40.65,
          "code": "DJ"
        },
        {
          "code3": "DMA",
          "name": "Dominica",
          "value": 98.06,
          "code": "DM"
        },
        {
          "code3": "DNK",
          "name": "Denmark",
          "value": 135.54,
          "code": "DK"
        },
        {
          "code3": "DOM",
          "name": "Dominican Republic",
          "value": 220.43,
          "code": "DO"
        },
        {
          "code3": "DZA",
          "name": "Algeria",
          "value": 17.05,
          "code": "DZ"
        },
        {
          "code3": "ECU",
          "name": "Ecuador",
          "value": 65.97,
          "code": "EC"
        },
        {
          "code3": "EGY",
          "name": "Egypt, Arab Rep.",
          "value": 96.13,
          "code": "EG"
        },
        {
          "code3": "ESP",
          "name": "Spain",
          "value": 92.93,
          "code": "ES"
        },
        {
          "code3": "EST",
          "name": "Estonia",
          "value": 31.04,
          "code": "EE"
        },
        {
          "code3": "ETH",
          "name": "Ethiopia",
          "value": 102.4,
          "code": "ET"
        },
        {
          "code3": "FIN",
          "name": "Finland",
          "value": 18.08,
          "code": "FI"
        },
        {
          "code3": "FJI",
          "name": "Fiji",
          "value": 49.19,
          "code": "FJ"
        },
        {
          "code3": "FRA",
          "name": "France",
          "value": 122.16,
          "code": "FR"
        },
        {
          "code3": "FRO",
          "name": "Faroe Islands",
          "value": 35.18,
          "code": "FO"
        },
        {
          "code3": "FSM",
          "name": "Micronesia, Fed. Sts.",
          "value": 149.91,
          "code": "FM"
        },
        {
          "code3": "GAB",
          "name": "Gabon",
          "value": 7.68,
          "code": "GA"
        },
        {
          "code3": "GBR",
          "name": "United Kingdom",
          "value": 271.13,
          "code": "GB"
        },
        {
          "code3": "GEO",
          "name": "Georgia",
          "value": 53.52,
          "code": "GE"
        },
        {
          "code3": "GHA",
          "name": "Ghana",
          "value": 123.96,
          "code": "GH"
        },
        {
          "code3": "GIB",
          "name": "Gibraltar",
          "value": 3440.8,
          "code": "GI"
        },
        {
          "code3": "GIN",
          "name": "Guinea",
          "value": 50.45,
          "code": "GN"
        },
        {
          "code3": "GMB",
          "name": "Gambia, The",
          "value": 201.43,
          "code": "GM"
        },
        {
          "code3": "GNB",
          "name": "Guinea-Bissau",
          "value": 64.57,
          "code": "GW"
        },
        {
          "code3": "GNQ",
          "name": "Equatorial Guinea",
          "value": 43.55,
          "code": "GQ"
        },
        {
          "code3": "GRC",
          "name": "Greece",
          "value": 83.56,
          "code": "GR"
        },
        {
          "code3": "GRD",
          "name": "Grenada",
          "value": 315.64,
          "code": "GD"
        },
        {
          "code3": "GRL",
          "name": "Greenland",
          "value": 0.14,
          "code": "GL"
        },
        {
          "code3": "GTM",
          "name": "Guatemala",
          "value": 154.74,
          "code": "GT"
        },
        {
          "code3": "GUM",
          "name": "Guam",
          "value": 301.66,
          "code": "GU"
        },
        {
          "code3": "GUY",
          "name": "Guyana",
          "value": 3.93,
          "code": "GY"
        },
        {
          "code3": "HKG",
          "name": "Hong Kong SAR, China",
          "value": 6987.24,
          "code": "HK"
        },
        {
          "code3": "HND",
          "name": "Honduras",
          "value": 81.44,
          "code": "HN"
        },
        {
          "code3": "HRV",
          "name": "Croatia",
          "value": 74.6,
          "code": "HR"
        },
        {
          "code3": "HTI",
          "name": "Haiti",
          "value": 393.59,
          "code": "HT"
        },
        {
          "code3": "HUN",
          "name": "Hungary",
          "value": 108.41,
          "code": "HU"
        },
        {
          "code3": "IDN",
          "name": "Indonesia",
          "value": 144.14,
          "code": "ID"
        },
        {
          "code3": "IMN",
          "name": "Isle of Man",
          "value": 146.91,
          "code": "IM"
        },
        {
          "code3": "IND",
          "name": "India",
          "value": 445.37,
          "code": "IN"
        },
        {
          "code3": "IRL",
          "name": "Ireland",
          "value": 68.95,
          "code": "IE"
        },
        {
          "code3": "IRN",
          "name": "Iran, Islamic Rep.",
          "value": 49.29,
          "code": "IR"
        },
        {
          "code3": "IRQ",
          "name": "Iraq",
          "value": 85.66,
          "code": "IQ"
        },
        {
          "code3": "ISL",
          "name": "Iceland",
          "value": 3.35,
          "code": "IS"
        },
        {
          "code3": "ISR",
          "name": "Israel",
          "value": 394.92,
          "code": "IL"
        },
        {
          "code3": "ITA",
          "name": "Italy",
          "value": 206.12,
          "code": "IT"
        },
        {
          "code3": "JAM",
          "name": "Jamaica",
          "value": 266.05,
          "code": "JM"
        },
        {
          "code3": "JOR",
          "name": "Jordan",
          "value": 106.51,
          "code": "JO"
        },
        {
          "code3": "JPN",
          "name": "Japan",
          "value": 348.35,
          "code": "JP"
        },
        {
          "code3": "KAZ",
          "name": "Kazakhstan",
          "value": 6.59,
          "code": "KZ"
        },
        {
          "code3": "KEN",
          "name": "Kenya",
          "value": 85.15,
          "code": "KE"
        },
        {
          "code3": "KGZ",
          "name": "Kyrgyz Republic",
          "value": 31.7,
          "code": "KG"
        },
        {
          "code3": "KHM",
          "name": "Cambodia",
          "value": 89.3,
          "code": "KH"
        },
        {
          "code3": "KIR",
          "name": "Kiribati",
          "value": 141.23,
          "code": "KI"
        },
        {
          "code3": "KNA",
          "name": "St. Kitts and Nevis",
          "value": 210.85,
          "code": "KN"
        },
        {
          "code3": "KOR",
          "name": "Korea, Rep.",
          "value": 525.7,
          "code": "KR"
        },
        {
          "code3": "KWT",
          "name": "Kuwait",
          "value": 227.42,
          "code": "KW"
        },
        {
          "code3": "LAO",
          "name": "Lao PDR",
          "value": 29.28,
          "code": "LA"
        },
        {
          "code3": "LBN",
          "name": "Lebanon",
          "value": 587.16,
          "code": "LB"
        },
        {
          "code3": "LBR",
          "name": "Liberia",
          "value": 47.9,
          "code": "LR"
        },
        {
          "code3": "LBY",
          "name": "Libya",
          "value": 3.58,
          "code": "LY"
        },
        {
          "code3": "LCA",
          "name": "St. Lucia",
          "value": 291.83,
          "code": "LC"
        },
        {
          "code3": "LIE",
          "name": "Liechtenstein",
          "value": 235.41,
          "code": "LI"
        },
        {
          "code3": "LKA",
          "name": "Sri Lanka",
          "value": 338.11,
          "code": "LK"
        },
        {
          "code3": "LSO",
          "name": "Lesotho",
          "value": 72.59,
          "code": "LS"
        },
        {
          "code3": "LTU",
          "name": "Lithuania",
          "value": 45.78,
          "code": "LT"
        },
        {
          "code3": "LUX",
          "name": "Luxembourg",
          "value": 224.72,
          "code": "LU"
        },
        {
          "code3": "LVA",
          "name": "Latvia",
          "value": 31.51,
          "code": "LV"
        },
        {
          "code3": "MAC",
          "name": "Macao SAR, China",
          "value": 20405.57,
          "code": "MO"
        },
        {
          "code3": "MAF",
          "name": "St. Martin (French part)",
          "value": 591.65,
          "code": "MF"
        },
        {
          "code3": "MAR",
          "name": "Morocco",
          "value": 79.04,
          "code": "MA"
        },
        {
          "code3": "MCO",
          "name": "Monaco",
          "value": 19249.5,
          "code": "MC"
        },
        {
          "code3": "MDA",
          "name": "Moldova",
          "value": 108.06,
          "code": "MD"
        },
        {
          "code3": "MDG",
          "name": "Madagascar",
          "value": 42.79,
          "code": "MG"
        },
        {
          "code3": "MDV",
          "name": "Maldives",
          "value": 1425.85,
          "code": "MV"
        },
        {
          "code3": "MEX",
          "name": "Mexico",
          "value": 65.61,
          "code": "MX"
        },
        {
          "code3": "MHL",
          "name": "Marshall Islands",
          "value": 294.81,
          "code": "MH"
        },
        {
          "code3": "MKD",
          "name": "Macedonia, FYR",
          "value": 82.52,
          "code": "MK"
        },
        {
          "code3": "MLI",
          "name": "Mali",
          "value": 14.75,
          "code": "ML"
        },
        {
          "code3": "MLT",
          "name": "Malta",
          "value": 1366.93,
          "code": "MT"
        },
        {
          "code3": "MMR",
          "name": "Myanmar",
          "value": 80.98,
          "code": "MM"
        },
        {
          "code3": "MNE",
          "name": "Montenegro",
          "value": 46.27,
          "code": "ME"
        },
        {
          "code3": "MNG",
          "name": "Mongolia",
          "value": 1.95,
          "code": "MN"
        },
        {
          "code3": "MNP",
          "name": "Northern Mariana Islands",
          "value": 119.62,
          "code": "MP"
        },
        {
          "code3": "MOZ",
          "name": "Mozambique",
          "value": 36.66,
          "code": "MZ"
        },
        {
          "code3": "MRT",
          "name": "Mauritania",
          "value": 4.17,
          "code": "MR"
        },
        {
          "code3": "MUS",
          "name": "Mauritius",
          "value": 622.4,
          "code": "MU"
        },
        {
          "code3": "MWI",
          "name": "Malawi",
          "value": 191.89,
          "code": "MW"
        },
        {
          "code3": "MYS",
          "name": "Malaysia",
          "value": 94.92,
          "code": "MY"
        },
        {
          "code3": "NAM",
          "name": "Namibia",
          "value": 3.01,
          "code": "NA"
        },
        {
          "code3": "NCL",
          "name": "New Caledonia",
          "value": 15.15,
          "code": "NC"
        },
        {
          "code3": "NER",
          "name": "Niger",
          "value": 16.32,
          "code": "NE"
        },
        {
          "code3": "NGA",
          "name": "Nigeria",
          "value": 204.21,
          "code": "NG"
        },
        {
          "code3": "NIC",
          "name": "Nicaragua",
          "value": 51.1,
          "code": "NI"
        },
        {
          "code3": "NLD",
          "name": "Netherlands",
          "value": 505.5,
          "code": "NL"
        },
        {
          "code3": "NOR",
          "name": "Norway",
          "value": 14.34,
          "code": "NO"
        },
        {
          "code3": "NPL",
          "name": "Nepal",
          "value": 202.18,
          "code": "NP"
        },
        {
          "code3": "NRU",
          "name": "Nauru",
          "value": 652.45,
          "code": "NR"
        },
        {
          "code3": "NZL",
          "name": "New Zealand",
          "value": 17.82,
          "code": "NZ"
        },
        {
          "code3": "OMN",
          "name": "Oman",
          "value": 14.3,
          "code": "OM"
        },
        {
          "code3": "PAK",
          "name": "Pakistan",
          "value": 250.63,
          "code": "PK"
        },
        {
          "code3": "PAN",
          "name": "Panama",
          "value": 54.27,
          "code": "PA"
        },
        {
          "code3": "PER",
          "name": "Peru",
          "value": 24.82,
          "code": "PE"
        },
        {
          "code3": "PHL",
          "name": "Philippines",
          "value": 346.51,
          "code": "PH"
        },
        {
          "code3": "PLW",
          "name": "Palau",
          "value": 46.75,
          "code": "PW"
        },
        {
          "code3": "PNG",
          "name": "Papua New Guinea",
          "value": 17.85,
          "code": "PG"
        },
        {
          "code3": "POL",
          "name": "Poland",
          "value": 124.01,
          "code": "PL"
        },
        {
          "code3": "PRI",
          "name": "Puerto Rico",
          "value": 384.59,
          "code": "PR"
        },
        {
          "code3": "PRK",
          "name": "Korea, Dem. People’s Rep.",
          "value": 210.69,
          "code": "KP"
        },
        {
          "code3": "PRT",
          "name": "Portugal",
          "value": 112.72,
          "code": "PT"
        },
        {
          "code3": "PRY",
          "name": "Paraguay",
          "value": 16.93,
          "code": "PY"
        },
        {
          "code3": "PSE",
          "name": "West Bank and Gaza",
          "value": 756.07,
          "code": "PS"
        },
        {
          "code3": "PYF",
          "name": "French Polynesia",
          "value": 76.56,
          "code": "PF"
        },
        {
          "code3": "QAT",
          "name": "Qatar",
          "value": 221.34,
          "code": "QA"
        },
        {
          "code3": "ROU",
          "name": "Romania",
          "value": 85.62,
          "code": "RO"
        },
        {
          "code3": "RUS",
          "name": "Russian Federation",
          "value": 8.81,
          "code": "RU"
        },
        {
          "code3": "RWA",
          "name": "Rwanda",
          "value": 483.08,
          "code": "RW"
        },
        {
          "code3": "SAU",
          "name": "Saudi Arabia",
          "value": 15.01,
          "code": "SA"
        },
        {
          "code3": "SDN",
          "name": "Sudan",
          "value": 16.66,
          "code": "SD"
        },
        {
          "code3": "SEN",
          "name": "Senegal",
          "value": 80.05,
          "code": "SN"
        },
        {
          "code3": "SGP",
          "name": "Singapore",
          "value": 7908.72,
          "code": "SG"
        },
        {
          "code3": "SLB",
          "name": "Solomon Islands",
          "value": 21.42,
          "code": "SB"
        },
        {
          "code3": "SLE",
          "name": "Sierra Leone",
          "value": 102.47,
          "code": "SL"
        },
        {
          "code3": "SLV",
          "name": "El Salvador",
          "value": 306.21,
          "code": "SV"
        },
        {
          "code3": "SMR",
          "name": "San Marino",
          "value": 553.38,
          "code": "SM"
        },
        {
          "code3": "SOM",
          "name": "Somalia",
          "value": 22.82,
          "code": "SO"
        },
        {
          "code3": "SRB",
          "name": "Serbia",
          "value": 80.7,
          "code": "RS"
        },
        {
          "code3": "STP",
          "name": "Sao Tome and Principe",
          "value": 208.24,
          "code": "ST"
        },
        {
          "code3": "SUR",
          "name": "Suriname",
          "value": 3.58,
          "code": "SR"
        },
        {
          "code3": "SVK",
          "name": "Slovak Republic",
          "value": 112.94,
          "code": "SK"
        },
        {
          "code3": "SVN",
          "name": "Slovenia",
          "value": 102.53,
          "code": "SI"
        },
        {
          "code3": "SWE",
          "name": "Sweden",
          "value": 24.36,
          "code": "SE"
        },
        {
          "code3": "SWZ",
          "name": "Swaziland",
          "value": 78.09,
          "code": "SZ"
        },
        {
          "code3": "SXM",
          "name": "Sint Maarten (Dutch part)",
          "value": 1175.56,
          "code": "SX"
        },
        {
          "code3": "SYC",
          "name": "Seychelles",
          "value": 205.82,
          "code": "SC"
        },
        {
          "code3": "SYR",
          "name": "Syrian Arab Republic",
          "value": 100.37,
          "code": "SY"
        },
        {
          "code3": "TCA",
          "name": "Turks and Caicos Islands",
          "value": 36.74,
          "code": "TC"
        },
        {
          "code3": "TCD",
          "name": "Chad",
          "value": 11.48,
          "code": "TD"
        },
        {
          "code3": "TGO",
          "name": "Togo",
          "value": 139.85,
          "code": "TG"
        },
        {
          "code3": "THA",
          "name": "Thailand",
          "value": 134.79,
          "code": "TH"
        },
        {
          "code3": "TJK",
          "name": "Tajikistan",
          "value": 62.94,
          "code": "TJ"
        },
        {
          "code3": "TKM",
          "name": "Turkmenistan",
          "value": 12.05,
          "code": "TM"
        },
        {
          "code3": "TLS",
          "name": "Timor-Leste",
          "value": 85.32,
          "code": "TL"
        },
        {
          "code3": "TON",
          "name": "Tonga",
          "value": 148.78,
          "code": "TO"
        },
        {
          "code3": "TTO",
          "name": "Trinidad and Tobago",
          "value": 266.07,
          "code": "TT"
        },
        {
          "code3": "TUN",
          "name": "Tunisia",
          "value": 73.4,
          "code": "TN"
        },
        {
          "code3": "TUR",
          "name": "Turkey",
          "value": 103.31,
          "code": "TR"
        },
        {
          "code3": "TUV",
          "name": "Tuvalu",
          "value": 369.9,
          "code": "TV"
        },
        {
          "code3": "TZA",
          "name": "Tanzania",
          "value": 62.74,
          "code": "TZ"
        },
        {
          "code3": "UGA",
          "name": "Uganda",
          "value": 206.9,
          "code": "UG"
        },
        {
          "code3": "UKR",
          "name": "Ukraine",
          "value": 77.69,
          "code": "UA"
        },
        {
          "code3": "URY",
          "name": "Uruguay",
          "value": 19.68,
          "code": "UY"
        },
        {
          "code3": "USA",
          "name": "United States",
          "value": 35.32,
          "code": "US"
        },
        {
          "code3": "UZB",
          "name": "Uzbekistan",
          "value": 74.87,
          "code": "UZ"
        },
        {
          "code3": "VCT",
          "name": "St. Vincent and the Grenadines",
          "value": 281.14,
          "code": "VC"
        },
        {
          "code3": "VEN",
          "name": "Venezuela, RB",
          "value": 35.79,
          "code": "VE"
        },
        {
          "code3": "VGB",
          "name": "British Virgin Islands",
          "value": 204.41,
          "code": "VG"
        },
        {
          "code3": "VIR",
          "name": "Virgin Islands (U.S.)",
          "value": 307.17,
          "code": "VI"
        },
        {
          "code3": "VNM",
          "name": "Vietnam",
          "value": 304.99,
          "code": "VN"
        },
        {
          "code3": "VUT",
          "name": "Vanuatu",
          "value": 22.18,
          "code": "VU"
        },
        {
          "code3": "WSM",
          "name": "Samoa",
          "value": 68.95,
          "code": "WS"
        },
        {
          "code3": "YEM",
          "name": "Yemen, Rep.",
          "value": 52.25,
          "code": "YE"
        },
        {
          "code3": "ZAF",
          "name": "South Africa",
          "value": 46.18,
          "code": "ZA"
        },
        {
          "code3": "ZMB",
          "name": "Zambia",
          "value": 22.32,
          "code": "ZM"
        },
        {
          "code3": "ZWE",
          "name": "Zimbabwe",
          "value": 41.75,
          "code": "ZW"
        }
      ],
      data4: [{ "code": "AFG", "name": "Afghanistan", "value": 53 },
      { "code": "ALB", "name": "Albania", "value": 105 },
      { "code": "DZA", "name": "Algeria", "value": 17 },
      { "code": "ASM", "name": "American Samoa", "value": 278 },
      { "code": "AND", "name": "Andorra", "value": 164 },
      { "code": "AGO", "name": "Angola", "value": 23 },
      { "code": "ATG", "name": "Antigua and Barbuda", "value": 229 },
      { "code": "ARG", "name": "Argentina", "value": 16 },
      { "code": "ARM", "name": "Armenia", "value": 103 },
      { "code": "ABW", "name": "Aruba", "value": 582 },
      { "code": "AUS", "name": "Australia", "value": 3 },
      { "code": "AUT", "name": "Austria", "value": 106 },
      { "code": "AZE", "name": "Azerbaijan", "value": 118 },
      { "code": "BHS", "name": "Bahamas, The", "value": 39 },
      { "code": "BHR", "name": "Bahrain", "value": 1848 },
      { "code": "BGD", "name": "Bangladesh", "value": 1252 },
      { "code": "BRB", "name": "Barbados", "value": 663 },
      { "code": "BLR", "name": "Belarus", "value": 47 },
      { "code": "BEL", "name": "Belgium", "value": 375 },
      { "code": "BLZ", "name": "Belize", "value": 16 },
      { "code": "BEN", "name": "Benin", "value": 96 },
      { "code": "BMU", "name": "Bermuda", "value": 1307 },
      { "code": "BTN", "name": "Bhutan", "value": 21 },
      { "code": "BOL", "name": "Bolivia", "value": 10 },
      { "code": "BIH", "name": "Bosnia and Herzegovina", "value": 69 },
      { "code": "BWA", "name": "Botswana", "value": 4 },
      { "code": "BRA", "name": "Brazil", "value": 25 },
      { "code": "VGB", "name": "British Virgin Islands", "value": 204 },
      { "code": "BRN", "name": "Brunei Darussalam", "value": 80 },
      { "code": "BGR", "name": "Bulgaria", "value": 66 },
      { "code": "BFA", "name": "Burkina Faso", "value": 68 },
      { "code": "BDI", "name": "Burundi", "value": 410 },
      { "code": "CPV", "name": "Cabo Verde", "value": 134 },
      { "code": "KHM", "name": "Cambodia", "value": 89 },
      { "code": "CMR", "name": "Cameroon", "value": 50 },
      { "code": "CAN", "name": "Canada", "value": 4 },
      { "code": "CYM", "name": "Cayman Islands", "value": 253 },
      { "code": "CAF", "name": "Central African Republic", "value": 7 },
      { "code": "TCD", "name": "Chad", "value": 11 },
      { "code": "CHI", "name": "Channel Islands", "value": 866 },
      { "code": "CHL", "name": "Chile", "value": 24 },
      { "code": "CHN", "name": "China", "value": 147 },
      { "code": "COL", "name": "Colombia", "value": 44 },
      { "code": "COM", "name": "Comoros", "value": 428 },
      { "code": "COD", "name": "Congo, Dem. Rep.", "value": 35 },
      { "code": "COG", "name": "Congo, Rep.", "value": 15 },
      { "code": "CRI", "name": "Costa Rica", "value": 95 },
      { "code": "CIV", "name": "Cote d'Ivoire", "value": 75 },
      { "code": "HRV", "name": "Croatia", "value": 75 },
      { "code": "CUB", "name": "Cuba", "value": 110 },
      { "code": "CUW", "name": "Curacao", "value": 360 },
      { "code": "CYP", "name": "Cyprus", "value": 127 },
      { "code": "CZE", "name": "Czech Republic", "value": 137 },
      { "code": "DNK", "name": "Denmark", "value": 136 },
      { "code": "DJI", "name": "Djibouti", "value": 41 },
      { "code": "DMA", "name": "Dominica", "value": 98 },
      { "code": "DOM", "name": "Dominican Republic", "value": 220 },
      { "code": "ECU", "name": "Ecuador", "value": 66 },
      { "code": "EGY", "name": "Egypt, Arab Rep.", "value": 96 },
      { "code": "SLV", "name": "El Salvador", "value": 306 },
      { "code": "GNQ", "name": "Equatorial Guinea", "value": 44 },
      { "code": "EST", "name": "Estonia", "value": 31 },
      { "code": "ETH", "name": "Ethiopia", "value": 102 },
      { "code": "FRO", "name": "Faroe Islands", "value": 35 },
      { "code": "FJI", "name": "Fiji", "value": 49 },
      { "code": "FIN", "name": "Finland", "value": 18 },
      { "code": "FRA", "name": "France", "value": 122 },
      { "code": "PYF", "name": "French Polynesia", "value": 77 },
      { "code": "GAB", "name": "Gabon", "value": 8 },
      { "code": "GMB", "name": "Gambia, The", "value": 201 },
      { "code": "GEO", "name": "Georgia", "value": 54 },
      { "code": "DEU", "name": "Germany", "value": 237 },
      { "code": "GHA", "name": "Ghana", "value": 124 },
      { "code": "GIB", "name": "Gibraltar", "value": 3441 },
      { "code": "GRC", "name": "Greece", "value": 83 },
      { "code": "GRL", "name": "Greenland", "value": 0 },
      { "code": "GRD", "name": "Grenada", "value": 316 },
      { "code": "GUM", "name": "Guam", "value": 302 },
      { "code": "GTM", "name": "Guatemala", "value": 155 },
      { "code": "GIN", "name": "Guinea", "value": 50 },
      { "code": "GNB", "name": "Guinea-Bissau", "value": 65 },
      { "code": "GUY", "name": "Guyana", "value": 4 },
      { "code": "HTI", "name": "Haiti", "value": 394 },
      { "code": "HND", "name": "Honduras", "value": 81 },
      { "code": "HKG", "name": "Hong Kong SAR, China", "value": 6997 },
      { "code": "HUN", "name": "Hungary", "value": 108 },
      { "code": "ISL", "name": "Iceland", "value": 3 },
      { "code": "IND", "name": "India", "value": 445 },
      { "code": "IDN", "name": "Indonesia", "value": 144 },
      { "code": "IRN", "name": "Iran, Islamic Rep.", "value": 49 },
      { "code": "IRQ", "name": "Iraq", "value": 86 },
      { "code": "IRL", "name": "Ireland", "value": 69 },
      { "code": "IMN", "name": "Isle of Man", "value": 147 },
      { "code": "ISR", "name": "Israel", "value": 395 },
      { "code": "ITA", "name": "Italy", "value": 206 },
      { "code": "JAM", "name": "Jamaica", "value": 266 },
      { "code": "JPN", "name": "Japan", "value": 348 },
      { "code": "JOR", "name": "Jordan", "value": 107 },
      { "code": "KAZ", "name": "Kazakhstan", "value": 7 },
      { "code": "KEN", "name": "Kenya", "value": 85 },
      { "code": "KIR", "name": "Kiribati", "value": 141 },
      { "code": "PRK", "name": "Korea, Dem. People’s Rep.", "value": 211 },
      { "code": "KOR", "name": "Korea, Rep.", "value": 526 },
      { "code": "XKX", "name": "Kosovo", "value": 167 },
      { "code": "KWT", "name": "Kuwait", "value": 227 },
      { "code": "KGZ", "name": "Kyrgyz Republic", "value": 32 },
      { "code": "LAO", "name": "Lao PDR", "value": 29 },
      { "code": "LVA", "name": "Latvia", "value": 32 },
      { "code": "LBN", "name": "Lebanon", "value": 587 },
      { "code": "LSO", "name": "Lesotho", "value": 73 },
      { "code": "LBR", "name": "Liberia", "value": 48 },
      { "code": "LBY", "name": "Libya", "value": 4 },
      { "code": "LIE", "name": "Liechtenstein", "value": 235 },
      { "code": "LTU", "name": "Lithuania", "value": 46 },
      { "code": "LUX", "name": "Luxembourg", "value": 225 },
      { "code": "MAC", "name": "Macao SAR, China", "value": 20406 },
      { "code": "MKD", "name": "Macedonia, FYR", "value": 83 },
      { "code": "MDG", "name": "Madagascar", "value": 43 },
      { "code": "MWI", "name": "Malawi", "value": 192 },
      { "code": "MYS", "name": "Malaysia", "value": 95 },
      { "code": "MDV", "name": "Maldives", "value": 1392 },
      { "code": "MLI", "name": "Mali", "value": 15 },
      { "code": "MLT", "name": "Malta", "value": 1365 },
      { "code": "MHL", "name": "Marshall Islands", "value": 295 },
      { "code": "MRT", "name": "Mauritania", "value": 4 },
      { "code": "MUS", "name": "Mauritius", "value": 622 },
      { "code": "MEX", "name": "Mexico", "value": 66 },
      { "code": "FSM", "name": "Micronesia, Fed. Sts.", "value": 150 },
      { "code": "MDA", "name": "Moldova", "value": 108 },
      { "code": "MCO", "name": "Monaco", "value": 19250 },
      { "code": "MNG", "name": "Mongolia", "value": 2 },
      { "code": "MNE", "name": "Montenegro", "value": 46 },
      { "code": "MAR", "name": "Morocco", "value": 79 },
      { "code": "MOZ", "name": "Mozambique", "value": 37 },
      { "code": "MMR", "name": "Myanmar", "value": 81 },
      { "code": "NAM", "name": "Namibia", "value": 3 },
      { "code": "NRU", "name": "Nauru", "value": 652 },
      { "code": "NPL", "name": "Nepal", "value": 202 },
      { "code": "NLD", "name": "Netherlands", "value": 505 },
      { "code": "NCL", "name": "New Caledonia", "value": 15 },
      { "code": "NZL", "name": "New Zealand", "value": 18 },
      { "code": "NIC", "name": "Nicaragua", "value": 51 },
      { "code": "NER", "name": "Niger", "value": 16 },
      { "code": "NGA", "name": "Nigeria", "value": 204 },
      { "code": "NAC", "name": "North America", "value": 20 },
      { "code": "MNP", "name": "Northern Mariana Islands", "value": 120 },
      { "code": "NOR", "name": "Norway", "value": 14 },
      { "code": "OMN", "name": "Oman", "value": 14 },
      { "code": "PAK", "name": "Pakistan", "value": 251 },
      { "code": "PLW", "name": "Palau", "value": 47 },
      { "code": "PAN", "name": "Panama", "value": 54 },
      { "code": "PNG", "name": "Papua New Guinea", "value": 18 },
      { "code": "PRY", "name": "Paraguay", "value": 17 },
      { "code": "PER", "name": "Peru", "value": 25 },
      { "code": "PHL", "name": "Philippines", "value": 347 },
      { "code": "POL", "name": "Poland", "value": 124 },
      { "code": "PRT", "name": "Portugal", "value": 113 },
      { "code": "PRI", "name": "Puerto Rico", "value": 385 },
      { "code": "QAT", "name": "Qatar", "value": 221 },
      { "code": "ROU", "name": "Romania", "value": 86 },
      { "code": "RUS", "name": "Russian Federation", "value": 9 },
      { "code": "RWA", "name": "Rwanda", "value": 483 },
      { "code": "WSM", "name": "Samoa", "value": 69 },
      { "code": "SMR", "name": "San Marino", "value": 553 },
      { "code": "STP", "name": "Sao Tome and Principe", "value": 208 },
      { "code": "SAU", "name": "Saudi Arabia", "value": 15 },
      { "code": "SEN", "name": "Senegal", "value": 80 },
      { "code": "SRB", "name": "Serbia", "value": 81 },
      { "code": "SYC", "name": "Seychelles", "value": 206 },
      { "code": "SLE", "name": "Sierra Leone", "value": 102 },
      { "code": "SGP", "name": "Singapore", "value": 7909 },
      { "code": "SXM", "name": "Sint Maarten (Dutch part)", "value": 1177 },
      { "code": "SVK", "name": "Slovak Republic", "value": 113 },
      { "code": "SVN", "name": "Slovenia", "value": 103 },
      { "code": "SLB", "name": "Solomon Islands", "value": 21 },
      { "code": "SOM", "name": "Somalia", "value": 23 },
      { "code": "ZAF", "name": "South Africa", "value": 46 },
      { "code": "ESP", "name": "Spain", "value": 93 },
      { "code": "LKA", "name": "Sri Lanka", "value": 338 },
      { "code": "KNA", "name": "St. Kitts and Nevis", "value": 211 },
      { "code": "LCA", "name": "St. Lucia", "value": 292 },
      { "code": "MAF", "name": "St. Martin (French part)", "value": 592 },
      { "code": "VCT", "name": "St. Vincent and the Grenadines", "value": 281 },
      { "code": "SDN", "name": "Sudan", "value": 17 },
      { "code": "SUR", "name": "Suriname", "value": 4 },
      { "code": "SWZ", "name": "Swaziland", "value": 78 },
      { "code": "SWE", "name": "Sweden", "value": 24 },
      { "code": "CHE", "name": "Switzerland", "value": 212 },
      { "code": "SYR", "name": "Syrian Arab Republic", "value": 100 },
      { "code": "TJK", "name": "Tajikistan", "value": 63 },
      { "code": "TZA", "name": "Tanzania", "value": 63 },
      { "code": "THA", "name": "Thailand", "value": 135 },
      { "code": "TLS", "name": "Timor-Leste", "value": 85 },
      { "code": "TGO", "name": "Togo", "value": 140 },
      { "code": "TON", "name": "Tonga", "value": 149 },
      { "code": "TTO", "name": "Trinidad and Tobago", "value": 266 },
      { "code": "TUN", "name": "Tunisia", "value": 73 },
      { "code": "TUR", "name": "Turkey", "value": 103 },
      { "code": "TKM", "name": "Turkmenistan", "value": 12 },
      { "code": "TCA", "name": "Turks and Caicos Islands", "value": 37 },
      { "code": "TUV", "name": "Tuvalu", "value": 370 },
      { "code": "UGA", "name": "Uganda", "value": 207 },
      { "code": "UKR", "name": "Ukraine", "value": 78 },
      { "code": "ARE", "name": "United Arab Emirates", "value": 111 },
      { "code": "GBR", "name": "United Kingdom", "value": 271 },
      { "code": "USA", "name": "United States", "value": 35 },
      { "code": "URY", "name": "Uruguay", "value": 20 },
      { "code": "UZB", "name": "Uzbekistan", "value": 75 },
      { "code": "VUT", "name": "Vanuatu", "value": 22 },
      { "code": "VEN", "name": "Venezuela, RB", "value": 36 },
      { "code": "VNM", "name": "Vietnam", "value": 299 },
      { "code": "VIR", "name": "Virgin Islands (U.S.)", "value": 294 },
      { "code": "PSE", "name": "West Bank and Gaza", "value": 756 },
      { "code": "YEM", "name": "Yemen, Rep.", "value": 52 },
      { "code": "ZMB", "name": "Zambia", "value": 22 },
      { "code": "ZWE", "name": "Zimbabwe", "value": 42 }]
    }
  },
  mounted() {
    this.init()
    this.init2()
    this.init3()
    this.init4()
    // this.init5()
  },
  methods: {
    init(){
      var chart = Highcharts.mapChart("container", {
        title: {
          text: "Highmaps simple flight routes demo",
        },

        legend: {
          align: "left",
          layout: "vertical",
          floating: true,
        },

        mapNavigation: {
          enabled: true,
        },

        tooltip: {
          formatter: function () {
            return (
              this.point.id +
              (this.point.lat
                ? "<br>Lat: " + this.point.lat + " Lon: " + this.point.lon
                : "")
            );
          },
        },

        plotOptions: {
          series: {
            marker: {
              fillColor: "#FFFFFF",
              lineWidth: 2,
              lineColor: Highcharts.getOptions().colors[1],
            },
          },
        },

        series: [
          {
            // Use the gb-all map with no data as a basemap
            // mapData: Highcharts.maps["countries/gb/gb-all"],
            mapData: map,
            name: "Basemap",
            borderColor: "#707070",
            nullColor: "rgba(200, 200, 200, 0.3)",
            showInLegend: false,
          },
          {
            name: "Separators",
            type: "mapline",
            data: Highcharts.geojson(
              // Highcharts.maps["countries/gb/gb-all"],
              map,
              "mapline"
            ),
            color: "#707070",
            showInLegend: false,
            enableMouseTracking: false,
          },
          {
            // Specify cities using lat/lon
            type: "mappoint",
            name: "Cities",
            dataLabels: {
              format: "{point.id}",
            },
            // Use id instead of name to allow for referencing points later using
            // chart.get
            data: [
              {
                id: "London",
                lat: 51.507222,
                lon: -0.1275,
              },
              {
                id: "Birmingham",
                lat: 52.483056,
                lon: -1.893611,
              },
              {
                id: "Leeds",
                lat: 53.799722,
                lon: -1.549167,
              },
              {
                id: "Glasgow",
                lat: 55.858,
                lon: -4.259,
              },
              {
                id: "Sheffield",
                lat: 53.383611,
                lon: -1.466944,
              },
              {
                id: "Liverpool",
                lat: 53.4,
                lon: -3,
              },
              {
                id: "Bristol",
                lat: 51.45,
                lon: -2.583333,
              },
              {
                id: "Belfast",
                lat: 54.597,
                lon: -5.93,
              },
              {
                id: "Lerwick",
                lat: 60.155,
                lon: -1.145,
                dataLabels: {
                  align: "left",
                  x: 5,
                  verticalAlign: "middle",
                },
              },
            ],
          },
        ],
      });

      // Function to return an SVG path between two points, with an arc
      function pointsToPath(from, to, invertArc) {
        var arcPointX = (from.x + to.x) / (invertArc ? 2.4 : 1.6),
          arcPointY = (from.y + to.y) / (invertArc ? 2.4 : 1.6);
        return (
          "M" +
          from.x +
          "," +
          from.y +
          "Q" +
          arcPointX +
          " " +
          arcPointY +
          "," +
          to.x +
          " " +
          to.y
        );
      }

      var londonPoint = chart.get("London"),
        lerwickPoint = chart.get("Lerwick");

      // Add a series of lines for London
      chart.addSeries({
        name: "London flight routes",
        type: "mapline",
        lineWidth: 2,
        color: Highcharts.getOptions().colors[3],
        data: [
          {
            id: "London - Glasgow",
            path: pointsToPath(londonPoint, chart.get("Glasgow")),
          },
          {
            id: "London - Belfast",
            path: pointsToPath(londonPoint, chart.get("Belfast"), true),
          },
          {
            id: "London - Leeds",
            path: pointsToPath(londonPoint, chart.get("Leeds")),
          },
          {
            id: "London - Liverpool",
            path: pointsToPath(londonPoint, chart.get("Liverpool"), true),
          },
          {
            id: "London - Sheffield",
            path: pointsToPath(londonPoint, chart.get("Sheffield")),
          },
          {
            id: "London - Birmingham",
            path: pointsToPath(londonPoint, chart.get("Birmingham"), true),
          },
          {
            id: "London - Bristol",
            path: pointsToPath(londonPoint, chart.get("Bristol"), true),
          },
        ],
      });

      // Add a series of lines for Lerwick
      chart.addSeries({
        name: "Lerwick flight routes",
        type: "mapline",
        lineWidth: 2,
        color: Highcharts.getOptions().colors[5],
        data: [
          {
            id: "Lerwick - Glasgow",
            path: pointsToPath(lerwickPoint, chart.get("Glasgow")),
          },
          {
            id: "Lerwick - Belfast",
            path: pointsToPath(lerwickPoint, chart.get("Belfast")),
          },
          {
            id: "Lerwick - Leeds",
            path: pointsToPath(lerwickPoint, chart.get("Leeds")),
          },
          {
            id: "Lerwick - Liverpool",
            path: pointsToPath(lerwickPoint, chart.get("Liverpool")),
          },
        ],
      });
    },
    init2(){
        Highcharts.mapChart('container2', {
          chart: {
            borderWidth: 1,
            // map: 'custom/world'
            map:worldmap
          },

          title: {
            text: 'World population 2013 by country'
          },

          subtitle: {
            text: 'Demo of Highcharts map with bubbles'
          },

          legend: {
            enabled: false
          },

          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom'
            }
          },
          tooltip: {
            // pointFormat: '{point.properties.hc-a2}: {point.z} thousands'
            shadow: true,
            // useHTML可显示国旗图片
            useHTML: true,
            padding: 10,
            pointFormat: '<span class="f16"><span class="flag {point.properties.hc-key}">' +
              '</span></span> {point.name}<br>' +
              '<span style="font-size:10px">{point.z} thousands</span>',
          },
          series: [{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
          }, {
            type: 'mapbubble',
            name: 'Population 2016',
            joinBy: ['iso-a3', 'code3'],
            data: this.mapdata,
            minSize: 4,
            maxSize: '10%',
          }]
        });
    },
    init3(){
      Highcharts.mapChart('container3', {

        chart: {
          // map: 'custom/world'
          map:worldmap
        },

        title: {
          text: 'Fixed tooltip with HTML'
        },

        legend: {
          title: {
            text: 'Population density per km²',
            style: {
              color: ( // theme
                Highcharts.defaultOptions &&
                Highcharts.defaultOptions.legend &&
                Highcharts.defaultOptions.legend.title &&
                Highcharts.defaultOptions.legend.title.style &&
                Highcharts.defaultOptions.legend.title.style.color
              ) || 'black'
            }
          }
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        tooltip: {
          backgroundColor: '#f8f8f8',
          borderWidth: 0,
          shadow: true,
          useHTML: true,
          padding: 10,
          //图例固定
          pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
            '</span></span> {point.name}<br>' +
            '<span>{point.value}/km²</span>',
          positioner: function () {
            return { x: 0, y: 200 };
          },
          //图例跟随鼠标变动
          // headerFormat: '<span style="font-size:10px">{series.name}</span><br/>',
          // pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' + '{point.name}: <b>{point.value:.1f} individs/km²</b><br/>',
          // footerFormat: '<span style="font-size:10px">Source: Wikipedia</span><br/>'
        },

        colorAxis: {
          min: 1,
          max: 1000,
          type: 'logarithmic'
        },

        series: [{
          data: this.data3,
          joinBy: ['iso-a3', 'code3'],
          name: 'Population density',
          states: {
            hover: {
              color: '#a4edba'
              // color: '#a4edba'
            }
          }
        }]
      });
    },
    init4(){
        Highcharts.mapChart('container4', {
        chart: {
          // map: 'custom/world',
          map:worldmap,
          // 整个图的边框宽度
          borderWidth: 0
        },

        colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
          'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'],

        title: {
          text: 'Population density by country (/km²)'
        },

        mapNavigation: {
          enabled: true,
          //双击放大点击的区域
          enableDoubleClickZoomTo: true
        },

        legend: {
          title: {
            text: 'Individuals per km²',
            style: {
              color: ( // theme
                Highcharts.defaultOptions &&
                Highcharts.defaultOptions.legend &&
                Highcharts.defaultOptions.legend.title &&
                Highcharts.defaultOptions.legend.title.style &&
                Highcharts.defaultOptions.legend.title.style.color
              ) || 'black'
            }
          },
          align: 'left',
          verticalAlign: 'bottom',
          floating: true,
          layout: 'vertical',
          valueDecimals: 0,
          backgroundColor: ( // theme
            Highcharts.defaultOptions &&
            Highcharts.defaultOptions.legend &&
            Highcharts.defaultOptions.legend.backgroundColor
          ) || 'rgba(255, 255, 255, 0.85)',
          symbolRadius: 0,
          symbolHeight: 14
        },
        tooltip: {
          // valueSuffix: '<span class="f32"><span class="flag {point.properties.hc-key}">' + '/km²',
          borderWidth: 0,
          shadow: true,
          useHTML: true,
          padding: 10,
          //图例固定
          pointFormat: '<span class="f16"><span class="flag {point.properties.hc-key}">' +
            '</span></span> {point.name}<br>' +
            '<span>值：{point.value}/km²</span>',
          // positioner: function () {
          //   return { x: 0, y: 200 };
          // },
        },
        colorAxis: {
          dataClasses: [{
            to: 3
          }, {
            from: 3,
            to: 10
          }, {
            from: 10,
            to: 30
          }, {
            from: 30,
            to: 100
          }, {
            from: 100,
            to: 300
          }, {
            from: 300,
            to: 1000
          }, {
            from: 1000
          }]
        },

        series: [{
          data: this.data4,
          joinBy: ['iso-a3', 'code'],
          animation: true,
          name: 'Population density',
          states: {
            hover: {
              color: '#a4edba'
            }
          },

          shadow: false
        }]
      });
    },
    init5(){
      }
  },
};
</script>

<style>
#container {
  width: 600px;
  height: 600px;
  margin: 0 auto;
}
#container2 {
  width: 800px;
  height: 500px;
  margin: 0 auto;
}
#container3 {
  width: 800px;
  height: 500px;
  margin: 0 auto;
}
#container4 {
  width: 800px;
  height: 500px;
  margin: 0 auto;
}
#container5 {
  width: 800px;
  height: 500px;
  margin: 0 auto;
}
.f32 .flag {
  vertical-align: middle !important;
}
</style>