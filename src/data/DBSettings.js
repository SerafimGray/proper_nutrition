const DBName = 'ProperNutritionDB'

const conditions = {
  objective: 1008,
  constraints: [
    [1008, '>=', 1800],
    [1008, '<=', 2800],
    [1003, '>=', 65],
    [1003, '<=', 117],
    [1004, '>=', 70],
    [1004, '<=', 154],
    [1005, '>=', 87],
    [1005, '<=', 586],
    [1018, '>=', 0],
    [1018, '<=', 24],
    [1057, '>=', 0],
    [1057, '<=', 300],
    [1058, '>=', 0],
    [1058, '<=', 250],
    [1079, '>=', 20],
    [1087, '>=', 1000],
    [1089, '>=', 20],
    [1090, '>=', 420],
    [1090, '<=', 770],
    [1091, '>=', 1000],
    [1092, '>=', 1800],
    [1092, '<=', 5000],
    [1093, '>=', 500],
    [1093, '<=', 1500],
    [1095, '>=', 11],
    [1098, '>=', 0.9],
    [1103, '>=', 70],
    [1103, '<=', 100],
    [1105, '>=', 900],
    [1106, '>=', 900],
    [1107, '>=', 5000],
    [1109, '>=', 10],
    [1114, '>=', 15],
    [1114, '<=', 100],
    [1122, '>=', 5000],
    [1123, '>=', 5000],
    [1162, '>=', 90],
    [1165, '>=', 1.2],
    [1166, '>=', 1.3],
    [1167, '>=', 20],
    [1175, '>=', 2.0],
    [1177, '>=', 200],
    [1178, '>=', 2.4],
    [1180, '>=', 550],
    [1180, '<=', 3500],
    [1185, '>=', 120],
    [1242, '>=', 15],
    [1246, '>=', 2.4],
    [1246, '<=', 55],
    [1253, '>=', 0],
    [1253, '<=', 3000]
  ],
  optimizationType: 'max'
}

export { DBName, conditions }
