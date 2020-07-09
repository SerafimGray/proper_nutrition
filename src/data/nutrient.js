const nutrient = [
  [1002, "Nitrogen", "G", 202, 500],
  [1003, "Protein", "G", 203, 600],
  [1004, "Total lipid (fat)", "G", 204, 800],
  [1005, "Carbohydrate, by difference", "G", 205, 1110],
  [1007, "Ash", "G", 207, 1000],
  [1008, "Energy", "KCAL", 208, 300],
  [1009, "Starch", "G", 209, 2200],
  [1010, "Sucrose", "G", 210, 1600],
  [1011, "Glucose (dextrose)", "G", 211, 1700],
  [1012, "Fructose", "G", 212, 1800],
  [1013, "Lactose", "G", 213, 1900],
  [1014, "Maltose", "G", 214, 2000],
  [1018, "Alcohol, ethyl", "G", 221, 18200],
  [1024, "Specific Gravity", "SP_GR", 227, 999999],
  [1026, "Acetic acid", "MG", 230, 2900],
  [1032, "Citric acid", "MG", 236, 3500],
  [1038, "Lactic acid", "MG", 242, 4100],
  [1039, "Malic acid", "MG", 243, 4200],
  [1050, "Carbohydrate, by summation", "G", 205.2, 1120],
  [1051, "Water", "G", 255, 100],
  [1056, "Sorbitol", "G", 261, 2600],
  [1057, "Caffeine", "MG", 262, 18300],
  [1058, "Theobromine", "MG", 263, 18400],
  [1062, "Energy", "kJ", 268, 400],
  [1063, "Sugars, Total NLEA", "G", 269.3, 1500],
  [1072, "Carbohydrate, other", "G", 284, ""],
  [1075, "Galactose", "G", 287, 2100],
  [1078, "Xylitol", "G", 290, 2700],
  [1079, "Fiber, total dietary", "G", 291, 1200],
  [1081, "Ribose", "G", 294, 999999],
  [1082, "Fiber, soluble", "G", 295, 1240],
  [1084, "Fiber, insoluble", "G", 297, 1260],
  [1085, "Total fat (NLEA)", "G", 298, 900],
  [1086, "Total sugar alcohols", "G", 299, 999999],
  [1087, "Calcium, Ca", "MG", 301, 5300],
  [1088, "Chlorine, Cl", "MG", 302, 999999],
  [1089, "Iron, Fe", "MG", 303, 5400],
  [1090, "Magnesium, Mg", "MG", 304, 5500],
  [1091, "Phosphorus, P", "MG", 305, 5600],
  [1092, "Potassium, K", "MG", 306, 5700],
  [1093, "Sodium, Na", "MG", 307, 5800],
  [1094, "Sulfur, S", "MG", 308, 6241],
  [1095, "Zinc, Zn", "MG", 309, 5900],
  [1096, "Chromium, Cr", "UG", 310, 999999],
  [1097, "Cobalt, Co", "UG", 311, 6244],
  [1098, "Copper, Cu", "MG", 312, 6000],
  [1099, "Fluoride, F", "UG", 313, 6240],
  [1100, "Iodine, I", "UG", 314, 6150],
  [1101, "Manganese, Mn", "MG", 315, 6100],
  [1102, "Molybdenum, Mo", "UG", 316, 6243],
  [1103, "Selenium, Se", "UG", 317, 6200],
  [1104, "Vitamin A, IU", "IU", 318, 7500],
  [1105, "Retinol", "UG", 319, 7430],
  [1106, "Vitamin A, RAE", "UG", 320, 7420],
  [1107, "Carotene, beta", "UG", 321, 7440],
  [1108, "Carotene, alpha", "UG", 322, 7450],
  [1109, "Vitamin E (alpha-tocopherol)", "MG", 323, 7905],
  [1110, "Vitamin D (D2 + D3), International Units", "IU", 324, 8650],
  [1111, "Vitamin D2 (ergocalciferol)", "UG", 325, 8710],
  [1112, "Vitamin D3 (cholecalciferol)", "UG", 326, 8720],
  [1113, "25-hydroxycholecalciferol", "UG", 327, 8730],
  [1114, "Vitamin D (D2 + D3)", "UG", 328, 8700],
  [1116, "Phytoene", "UG", 330, 7570],
  [1117, "Phytofluene", "UG", 331, 7580],
  [1119, "Zeaxanthin", "UG", 338.2, 7564],
  [1120, "Cryptoxanthin, beta", "UG", 334, 7460],
  [1121, "Lutein", "UG", 338.1, 7562],
  [1122, "Lycopene", "UG", 337, 7530],
  [1123, "Lutein + zeaxanthin", "UG", 338, 7560],
  [1124, "Vitamin E (label entry primarily)", "IU", 340, 999999],
  [1125, "Tocopherol, beta", "MG", 341, 8000],
  [1126, "Tocopherol, gamma", "MG", 342, 8100],
  [1127, "Tocopherol, delta", "MG", 343, 8200],
  [1128, "Tocotrienol, alpha", "MG", 344, 8300],
  [1129, "Tocotrienol, beta", "MG", 345, 8400],
  [1130, "Tocotrienol, gamma", "MG", 346, 8500],
  [1131, "Tocotrienol, delta", "MG", 347, 8600],
  [1137, "Boron, B", "UG", 354, 6245],
  [1146, "Nickel, Ni", "UG", 371, 6242],
  [1158, "Vitamin E", "MG_ATE", 394, 7800],
  [1159, "cis-beta-Carotene", "UG", 321.1, 7442],
  [1160, "cis-Lycopene", "UG", 337.1, 7532],
  [1161, "cis-Lutein/Zeaxanthin", "UG", 338.3, 7561],
  [1162, "Vitamin C, total ascorbic acid", "MG", 401, 6300],
  [1165, "Thiamin", "MG", 404, 6400],
  [1166, "Riboflavin", "MG", 405, 6500],
  [1167, "Niacin", "MG", 406, 6600],
  [1170, "Pantothenic acid", "MG", 410, 6700],
  [1175, "Vitamin B-6", "MG", 415, 6800],
  [1176, "Biotin", "UG", 416, 6850],
  [1177, "Folate, total", "UG", 417, 6900],
  [1178, "Vitamin B-12", "UG", 418, 7300],
  [1180, "Choline, total", "MG", 421, 7220],
  [1181, "Inositol", "MG", 422, 2800],
  [1183, "Vitamin K (Menaquinone-4)", "UG", 428, 8950],
  [1184, "Vitamin K (Dihydrophylloquinone)", "UG", 429, 8900],
  [1185, "Vitamin K (phylloquinone)", "UG", 430, 8800],
  [1186, "Folic acid", "UG", 431, 7000],
  [1187, "Folate, food", "UG", 432, 7100],
  [1188, "5-methyl tetrahydrofolate (5-MTHF)", "UG", 433, 999999],
  [1190, "Folate, DFE", "UG", 435, 7200],
  [1191, "10-Formyl folic acid (10HCOFA)", "UG", 436, 999999],
  [1192, "5-Formyltetrahydrofolic acid (5-HCOH4", "UG", 437, 999999],
  [1194, "Choline, free", "MG", 450, 7230],
  [1195, "Choline, from phosphocholine", "MG", 451, 7240],
  [1196, "Choline, from phosphotidyl choline", "MG", 452, 7250],
  [1197, "Choline, from glycerophosphocholine", "MG", 453, 7260],
  [1198, "Betaine", "MG", 454, 7290],
  [1199, "Choline, from sphingomyelin", "MG", 455, 7270],
  [1210, "Tryptophan", "G", 501, 16300],
  [1211, "Threonine", "G", 502, 16400],
  [1212, "Isoleucine", "G", 503, 16500],
  [1213, "Leucine", "G", 504, 16600],
  [1214, "Lysine", "G", 505, 16700],
  [1215, "Methionine", "G", 506, 16800],
  [1216, "Cystine", "G", 507, 16900],
  [1217, "Phenylalanine", "G", 508, 17000],
  [1218, "Tyrosine", "G", 509, 17100],
  [1219, "Valine", "G", 510, 17200],
  [1220, "Arginine", "G", 511, 17300],
  [1221, "Histidine", "G", 512, 17400],
  [1222, "Alanine", "G", 513, 17500],
  [1223, "Aspartic acid", "G", 514, 17600],
  [1224, "Glutamic acid", "G", 515, 17700],
  [1225, "Glycine", "G", 516, 17800],
  [1226, "Proline", "G", 517, 17900],
  [1227, "Serine", "G", 518, 18000],
  [1228, "Hydroxyproline", "G", 521, 18100],
  [1232, "Cysteine", "G", 526, 999999],
  [1233, "Glutamine", "G", 528, 999999],
  [1234, "Taurine", "G", 529, 999999],
  [1235, "Sugars, added", "G", 539, 1540],
  [1242, "Vitamin E, added", "MG", 573, 7920],
  [1246, "Vitamin B-12, added", "UG", 578, 7340],
  [1253, "Cholesterol", "MG", 601, 15700],
  [1257, "Fatty acids, total trans", "G", 605, 15400],
  [1258, "Fatty acids, total saturated", "G", 606, 9700],
  [1259, "4:0", "G", 607, 9800],
  [1260, "6:0", "G", 608, 9900],
  [1261, "8:0", "G", 609, 10000],
  [1262, "10:0", "G", 610, 10100],
  [1263, "12:0", "G", 611, 10300],
  [1264, "14:0", "G", 612, 10500],
  [1265, "16:0", "G", 613, 10700],
  [1266, "18:0", "G", 614, 10900],
  [1267, "20:0", "G", 615, 11100],
  [1268, "18:1", "G", 617, 12100],
  [1269, "18:2", "G", 618, 13100],
  [1270, "18:3", "G", 619, 13900],
  [1271, "20:4", "G", 620, 14700],
  [1272, "22:6 n-3 (DHA)", "G", 621, 15300],
  [1273, "22:0", "G", 624, 11200],
  [1274, "14:1", "G", 625, 11500],
  [1275, "16:1", "G", 626, 11700],
  [1276, "18:4", "G", 627, 14250],
  [1277, "20:1", "G", 628, 12400],
  [1278, "20:5 n-3 (EPA)", "G", 629, 15000],
  [1279, "22:1", "G", 630, 12500],
  [1280, "22:5 n-3 (DPA)", "G", 631, 15200],
  [1281, "14:1 t", "G", 821, 15510],
  [1283, "Phytosterols", "MG", 636, 15800],
  [1285, "Stigmasterol", "MG", 638, 15900],
  [1286, "Campesterol", "MG", 639, 16000],
  [1287, "Brassicasterol", "MG", 640, 16100],
  [1288, "Beta-sitosterol", "MG", 641, 16200],
  [1289, "Campestanol", "MG", 642, 16221],
  [1292, "Fatty acids, total monounsaturated", "G", 645, 11400],
  [1293, "Fatty acids, total polyunsaturated", "G", 646, 12900],
  [1294, "Beta-sitostanol", "MG", 647, 16221],
  [1296, "Delta-5-avenasterol", "MG", 649, 16221],
  [1298, "Phytosterols, other", "MG", 651, 16221],
  [1299, "15:0", "G", 652, 10600],
  [1300, "17:0", "G", 653, 10800],
  [1301, "24:0", "G", 654, 11300],
  [1303, "16:1 t", "G", 662, 15520],
  [1304, "18:1 t", "G", 663, 15521],
  [1305, "22:1 t", "G", 664, 15550],
  [1306, "18:2 t not further defined", "G", 665, 15610],
  [1307, "18:2 i", "G", 666, 13350],
  [1310, "18:2 t,t", "G", 669, 15615],
  [1311, "18:2 CLAs", "G", 670, 13300],
  [1312, "24:1 c", "G", 671, 12800],
  [1313, "20:2 n-6 c,c", "G", 672, 14300],
  [1314, "16:1 c", "G", 673, 11800],
  [1315, "18:1 c", "G", 674, 12200],
  [1316, "18:2 n-6 c,c", "G", 675, 13200],
  [1317, "22:1 c", "G", 676, 12600],
  [1321, "18:3 n-6 c,c,c", "G", 685, 14100],
  [1323, "17:1", "G", 687, 12000],
  [1325, "20:3", "G", 689, 14400],
  [1329, "Fatty acids, total trans-monoenoic", "G", 693, 15500],
  [1330, "Fatty acids, total trans-dienoic", "G", 694, 15601],
  [1331, "Fatty acids, total trans-polyenoic", "G", 695, 15619],
  [1332, "13:0", "G", 696, 10400],
  [1333, "15:1", "G", 697, 11600],
  [1334, "22:2", "G", 698, 15100],
  [1335, "11:0", "G", 699, 10200],
  [1368, "Epigallocatechin-3-gallate", "MG", 753, 20700],
  [1403, "Inulin", "G", 806, 999999],
  [1404, "18:3 n-3 c,c,c (ALA)", "G", 851, 14000],
  [1405, "20:3 n-3", "G", 852, 14500],
  [1406, "20:3 n-6", "G", 853, 14600],
  [1408, "20:4 n-6", "G", 855, 14900],
  [1409, "18:3i", "G", 856, 14200],
  [1410, "21:5", "G", 857, 15100],
  [1411, "22:4", "G", 858, 15160],
  [1412, "18:1-11 t (18:1t n-7)", "G", 859, 12310],
  [1414, "20:3 n-9", "G", 861, 14650],
  [2000, "Sugars, total including NLEA", "G", 269, 1510],
  [2003, "5:0", "G", 632, 9850],
  [2004, "7:0", "G", 633, 9950],
  [2005, "9:0", "G", 634, 10050],
  [2006, "21:0", "G", 681, 11150],
  [2007, "23:0", "G", 682, 11250],
  [2008, "12:1", "G", 635, 11450],
  [2009, "14:1 c", "G", 822, 11501],
  [2010, "17:1 c", "G", 825, 12001],
  [2012, "20:1 c", "G", 829, 12401],
  [2013, "20:1 t", "G", 830, 15540],
  [2014, "22:1 n-9", "G", 676.1, 12601],
  [2015, "22:1 n-11", "G", 676.2, 12602],
  [2016, "18:2 c", "G", 831, 13150],
  [2018, "18:3 c", "G", 833, 13910],
  [2019, "18:3 t", "G", 834, 15660],
  [2020, "20:3 c", "G", 835, 14450],
  [2021, "22:3", "G", 683, 14675],
  [2022, "20:4 c", "G", 836, 14750],
  [2023, "20:5 c", "G", 837, 14950],
  [2024, "22:5 c", "G", 838, 15150],
  [2025, "22:6 c", "G", 839, 15250],
  [2026, "20:2 c", "G", 840, 14250],
  [2028, "trans-beta-Carotene", "UG", 321.2, 7444],
  [2029, "trans-Lycopene", "UG", 337.2, 7534],
  [2032, "Cryptoxanthin, alpha", "UG", 335, 7461],
  [2033, "Total dietary fiber (AOAC 2011.25)", "G", 293, 1300]
];

export { nutrient };
