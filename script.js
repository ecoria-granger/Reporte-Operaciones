// ── DATA ──────────────────────────────────────────────────────
const RAW = {"eficiencia": [{"mes": "Enero", "semana": "Semana 01", "capacidad": 4701.0, "planificada": 3900, "efectiva": 3781, "ef_ef_pl": 0.9694871795, "ef_pl_cap": 0.8296107211, "cant_productos": 2, "cambios": 1, "ordenes": 6, "obs": ""}, {"mes": "Enero", "semana": "Semana 02", "capacidad": 31333.33333, "planificada": 14250, "efectiva": 14510, "ef_ef_pl": 1.018245614, "ef_pl_cap": 0.454787234, "cant_productos": 1, "cambios": 0, "ordenes": 38, "obs": "3 días de producción."}, {"mes": "Enero", "semana": "Semana 03", "capacidad": 31333.33333, "planificada": 10625, "efectiva": 10616, "ef_ef_pl": 0.9991529412, "ef_pl_cap": 0.3390957447, "cant_productos": 2, "cambios": 1, "ordenes": 23, "obs": "4 días de producción."}, {"mes": "Enero", "semana": "Semana 04", "capacidad": 31333.33333, "planificada": 0, "efectiva": 0, "ef_ef_pl": 0, "ef_pl_cap": 0, "cant_productos": 0, "cambios": 0, "ordenes": 0, "obs": "Sin producción."}, {"mes": "Enero", "semana": "Semana 05", "capacidad": 31333.33333, "planificada": 19575, "efectiva": 19208, "ef_ef_pl": 0.9812515964, "ef_pl_cap": 0.6247340426, "cant_productos": 4, "cambios": 3, "ordenes": 43, "obs": ""}, {"mes": "Febrero", "semana": "Semana 06", "capacidad": 31333.33333, "planificada": 21275, "efectiva": 20746, "ef_ef_pl": 0.9751351351, "ef_pl_cap": 0.6789893617, "cant_productos": 3, "cambios": 2, "ordenes": 49, "obs": "4 días de producción."}, {"mes": "Febrero", "semana": "Semana 07", "capacidad": 31333.33333, "planificada": 10683, "efectiva": 10156, "ef_ef_pl": 0.9506692877, "ef_pl_cap": 0.3409468085, "cant_productos": 6, "cambios": 5, "ordenes": 15, "obs": ""}, {"mes": "Febrero", "semana": "Semana 08", "capacidad": 31333.33333, "planificada": 18090, "efectiva": 17512, "ef_ef_pl": 0.9680486457, "ef_pl_cap": 0.5773404255, "cant_productos": 8, "cambios": 7, "ordenes": 42, "obs": ""}, {"mes": "Febrero", "semana": "Semana 09", "capacidad": 31333.33333, "planificada": 33818, "efectiva": 33245, "ef_ef_pl": 0.9830563605, "ef_pl_cap": 1.079297872, "cant_productos": 9, "cambios": 8, "ordenes": 81, "obs": ""}, {"mes": "Marzo", "semana": "Semana 10", "capacidad": 47000.0, "planificada": 52089, "efectiva": 50998, "ef_ef_pl": 0.9790550788, "ef_pl_cap": 1.108276596, "cant_productos": 7, "cambios": 6, "ordenes": 102, "obs": ""}, {"mes": "Marzo", "semana": "Semana 11", "capacidad": 47000.0, "planificada": 39242, "efectiva": 38493, "ef_ef_pl": 0.9809133072, "ef_pl_cap": 0.8349361702, "cant_productos": 8, "cambios": 7, "ordenes": 93, "obs": ""}, {"mes": "Marzo", "semana": "Semana 12", "capacidad": 47000.0, "planificada": 38099, "efectiva": 36983, "ef_ef_pl": 0.9707078926, "ef_pl_cap": 0.8106170213, "cant_productos": 9, "cambios": 8, "ordenes": 77, "obs": ""}, {"mes": "Marzo", "semana": "Semana 13", "capacidad": 47000.0, "planificada": 32900, "efectiva": 31912, "ef_ef_pl": 0.9699696049, "ef_pl_cap": 0.7, "cant_productos": 4, "cambios": 3, "ordenes": 66, "obs": ""}, {"mes": "Marzo", "semana": "Semana 14", "capacidad": 20398.0, "planificada": 8666, "efectiva": 8521, "ef_ef_pl": 0.9832679437, "ef_pl_cap": 0.4248455731, "cant_productos": 3, "cambios": 2, "ordenes": 15, "obs": ""}, {"mes": "Abril", "semana": "Semana 14", "capacidad": 26602.0, "planificada": 24950, "efectiva": 23837, "ef_ef_pl": 0.9553907816, "ef_pl_cap": 0.9378994061, "cant_productos": 5, "cambios": 4, "ordenes": 48, "obs": ""}, {"mes": "Abril", "semana": "Semana 15", "capacidad": 47000.0, "planificada": 45024, "efectiva": 44006, "ef_ef_pl": 0.9773898365, "ef_pl_cap": 0.9579574468, "cant_productos": 9, "cambios": 8, "ordenes": 102, "obs": ""}, {"mes": "Abril", "semana": "Semana 16", "capacidad": 47000.0, "planificada": 43400, "efectiva": 42436, "ef_ef_pl": 0.9777880184, "ef_pl_cap": 0.9234042553, "cant_productos": 7, "cambios": 6, "ordenes": 82, "obs": ""}, {"mes": "Abril", "semana": "Semana 17", "capacidad": 47000.0, "planificada": 48450, "efectiva": 47136, "ef_ef_pl": 0.972879257, "ef_pl_cap": 1.030851064, "cant_productos": 10, "cambios": 9, "ordenes": 100, "obs": ""}, {"mes": "Abril", "semana": "Semana 18", "capacidad": 45402.0, "planificada": 33230, "efectiva": 31116, "ef_ef_pl": 0.9363827866, "ef_pl_cap": 0.7319060834, "cant_productos": 12, "cambios": 11, "ordenes": 68, "obs": ""}, {"mes": "Mayo", "semana": "Semana 18", "capacidad": 1598.0, "planificada": 1600, "efectiva": 1553, "ef_ef_pl": 0.970625, "ef_pl_cap": 1.001251564, "cant_productos": 1, "cambios": 0, "ordenes": 0, "obs": ""}, {"mes": "Mayo", "semana": "Semana 19", "capacidad": 47000.0, "planificada": 40750, "efectiva": 39773, "ef_ef_pl": 0.9760245399, "ef_pl_cap": 0.8670212766, "cant_productos": 14, "cambios": 13, "ordenes": 83, "obs": "Atrasos por testeos en productos lanzamiento (pancake Dulde de leche y Jalapeño)"}, {"mes": "Mayo", "semana": "Semana 20", "capacidad": 47000.0, "planificada": 45377, "efectiva": 44108, "ef_ef_pl": 0.9720342905, "ef_pl_cap": 0.9654680851, "cant_productos": 10, "cambios": 9, "ordenes": 84, "obs": "Atrasos por puesta a punto exportación y reproceso (Pancake de vainilla: falta de sucralosa)."}, {"mes": "Mayo", "semana": "Semana 21", "capacidad": 47000.0, "planificada": 40120, "efectiva": 38884, "ef_ef_pl": 0.9691924227, "ef_pl_cap": 0.8536170213, "cant_productos": 13, "cambios": 12, "ordenes": 73, "obs": "Atrasos por fechadora, termoselladora, rotura boquilla dosificadora, humedad en el ambiente."}, {"mes": "Mayo", "semana": "Semana 22", "capacidad": 47000.0, "planificada": 49480, "efectiva": 48220, "ef_ef_pl": 0.9745351657, "ef_pl_cap": 1.052765957, "cant_productos": 10, "cambios": 9, "ordenes": 102, "obs": ""}, {"mes": "Junio", "semana": "Semana 23", "capacidad": 47000.0, "planificada": 49860, "efectiva": 45761, "ef_ef_pl": 0.9177898115, "ef_pl_cap": 1.060851064, "cant_productos": 7, "cambios": 6, "ordenes": 102, "obs": ""}, {"mes": "Junio", "semana": "Semana 24", "capacidad": 47000.0, "planificada": 51034, "efectiva": 49842, "ef_ef_pl": 0.9766430223, "ef_pl_cap": 1.085829787, "cant_productos": 9, "cambios": 8, "ordenes": 94, "obs": "Reproceso pancake de chocolate (faltante de sucralosa)"}, {"mes": "Junio", "semana": "Semana 25", "capacidad": 47000.0, "planificada": 42800, "efectiva": 41799, "ef_ef_pl": 0.9766121495, "ef_pl_cap": 0.9106382979, "cant_productos": 8, "cambios": 7, "ordenes": 84, "obs": "Lunes 15/06 feriado (ingreso 12 hs) - Pausa 2hs por partido."}, {"mes": "Junio", "semana": "Semana 26", "capacidad": 47000.0, "planificada": 43440, "efectiva": 42721, "ef_ef_pl": 0.9834484346, "ef_pl_cap": 0.9242553191, "cant_productos": 14, "cambios": 13, "ordenes": 90, "obs": "Pausa 2 hs por partido. - Baja eficiencia por multiproductos por falta de harina de lupino - Falla en termoselladora de l.automática. - Aumento tiempo de mezclado (40min)."}, {"mes": "Junio", "semana": "Semana 27", "capacidad": 19710.0, "planificada": 9550, "efectiva": 9295, "ef_ef_pl": 0.9732984293, "ef_pl_cap": 0.4845256215, "cant_productos": 3, "cambios": 2, "ordenes": 18, "obs": "Inventario - Falta Harino de lupino (desde 26/06 al 7/7)"}], "forecast": [{"mes": "Mayo", "sku": 61013, "producto": "Cookies proteicas", "produccion": 8903.0, "total": 9000.0, "pendiente": 97.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 61014, "producto": "Pancake caprese", "produccion": 978.0, "total": 1500.0, "pendiente": 522.0, "tiradas": -522.0}, {"mes": "Mayo", "sku": 61015, "producto": "cupcake lemon con chips", "produccion": 4358.0, "total": 3000.0, "pendiente": -1358.0, "tiradas": 1358.0}, {"mes": "Mayo", "sku": 60001, "producto": "Creatina", "produccion": 2114.0, "total": 2340.0, "pendiente": 226.0, "tiradas": -226.0}, {"mes": "Mayo", "sku": 61001, "producto": "Pancake vainilla", "produccion": 55835.0, "total": 60000.0, "pendiente": 4165.0, "tiradas": -4165.0}, {"mes": "Mayo", "sku": 61002, "producto": "Pancake chocolate", "produccion": 21910.0, "total": 30000.0, "pendiente": 8090.0, "tiradas": -8090.0}, {"mes": "Mayo", "sku": 61003, "producto": "Cupcake chocolate", "produccion": 8361.0, "total": 10000.0, "pendiente": 1639.0, "tiradas": -1639.0}, {"mes": "Mayo", "sku": 61004, "producto": "Chia pudding", "produccion": 4748.0, "total": 5500.0, "pendiente": 752.0, "tiradas": -752.0}, {"mes": "Mayo", "sku": 61005, "producto": "Pancake queso", "produccion": 0.0, "total": 10000.0, "pendiente": 10000.0, "tiradas": -10000.0}, {"mes": "Mayo", "sku": 61007, "producto": "Omelette jamón y queso", "produccion": 4699.0, "total": 2400.0, "pendiente": -2299.0, "tiradas": 2299.0}, {"mes": "Mayo", "sku": 61008, "producto": "Omelette verdura", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 61009, "producto": "Pure de papa", "produccion": 3746.0, "total": 4000.0, "pendiente": 254.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 61010, "producto": "Pure de zapallo", "produccion": 3760.0, "total": 1600.0, "pendiente": -2160.0, "tiradas": 2160.0}, {"mes": "Mayo", "sku": 61011, "producto": "Gelatina Durazno", "produccion": 0.0, "total": 1600.0, "pendiente": 1600.0, "tiradas": -1600.0}, {"mes": "Mayo", "sku": 61012, "producto": "Gelatina Frutilla", "produccion": 3062.0, "total": 3200.0, "pendiente": 138.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 61017, "producto": "Pancakes jalapeño y limón", "produccion": 6855.0, "total": 10000.0, "pendiente": 3145.0, "tiradas": -3145.0}, {"mes": "Mayo", "sku": 61018, "producto": "Pancakes dulce de leche", "produccion": 9657.0, "total": 10000.0, "pendiente": 343.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 61020, "producto": "Pancake chocolate y avellanas", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 62001, "producto": "COLAGENO HIDROLIZADO x250g", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 62002, "producto": "COLAGENO HIDROLIZADO NARANJA x250g", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 62003, "producto": "Colageno Flex (NARANJA)", "produccion": 496.0, "total": 500.0, "pendiente": 4.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 62004, "producto": "Colageno Beauty (NARANJA)", "produccion": 603.0, "total": 600.0, "pendiente": -3.0, "tiradas": 3.0}, {"mes": "Mayo", "sku": 62005, "producto": "Citrato de magnesio", "produccion": 4224.0, "total": 3300.0, "pendiente": -924.0, "tiradas": 924.0}, {"mes": "Mayo", "sku": 63001, "producto": "Keto PK Vainilla", "produccion": 12495.0, "total": 13000.0, "pendiente": 505.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 63002, "producto": "Keto PK Chocolate", "produccion": 5294.0, "total": 5600.0, "pendiente": 306.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 63003, "producto": "Keto Cupcake Vainilla", "produccion": 2675.0, "total": 2800.0, "pendiente": 125.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 63004, "producto": "Keto Cupcake Chocolate", "produccion": 2023.0, "total": 2100.0, "pendiente": 77.0, "tiradas": 0.0}, {"mes": "Mayo", "sku": 64006, "producto": "Proteina de arveja (NATURAL)", "produccion": 731.0, "total": 720.0, "pendiente": -11.0, "tiradas": 11.0}, {"mes": "Mayo", "sku": 64007, "producto": "Proteina de arveja (VAINILLA)", "produccion": 0.0, "total": 720.0, "pendiente": 720.0, "tiradas": -720.0}, {"mes": "Mayo", "sku": 64001, "producto": "Pancake Proteico Vegan", "produccion": 3458.0, "total": 3600.0, "pendiente": 142.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 61013, "producto": "Cookies proteicas", "produccion": 6426.0, "total": 14400.0, "pendiente": 7974.0, "tiradas": -7974.0}, {"mes": "Junio", "sku": 61014, "producto": "PANCAKE CAPRESE", "produccion": 0.0, "total": 3398.0, "pendiente": 3398.0, "tiradas": -3398.0}, {"mes": "Junio", "sku": 61015, "producto": "cupcake lemon con chips", "produccion": 3939.0, "total": 11000.0, "pendiente": 7061.0, "tiradas": -7061.0}, {"mes": "Junio", "sku": 60001, "producto": "Creatina", "produccion": 714.0, "total": 0.0, "pendiente": -714.0, "tiradas": 714.0}, {"mes": "Junio", "sku": 61001, "producto": "Pancake vainilla", "produccion": 76652.0, "total": 70606.0, "pendiente": -6046.0, "tiradas": 6046.0}, {"mes": "Junio", "sku": 61002, "producto": "Pancake chocolate", "produccion": 34584.0, "total": 34584.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 61003, "producto": "Cupcake chocolate", "produccion": 6415.0, "total": 11202.0, "pendiente": 4787.0, "tiradas": -4787.0}, {"mes": "Junio", "sku": 61004, "producto": "Chia pudding", "produccion": 3925.0, "total": 1000.0, "pendiente": -2925.0, "tiradas": 2925.0}, {"mes": "Junio", "sku": 61005, "producto": "Pancake queso", "produccion": 0.0, "total": 12594.0, "pendiente": 12594.0, "tiradas": -12594.0}, {"mes": "Junio", "sku": 61007, "producto": "Omelette jamón y queso", "produccion": 3130.0, "total": 1044.0, "pendiente": -2086.0, "tiradas": 2086.0}, {"mes": "Junio", "sku": 61008, "producto": "Omelette verdura", "produccion": 1538.0, "total": 253.0, "pendiente": -1285.0, "tiradas": 1285.0}, {"mes": "Junio", "sku": 61009, "producto": "Pure de papa", "produccion": 5308.0, "total": 2559.0, "pendiente": -2749.0, "tiradas": 2749.0}, {"mes": "Junio", "sku": 61010, "producto": "Pure de zapallo", "produccion": 1573.0, "total": 694.0, "pendiente": -879.0, "tiradas": 879.0}, {"mes": "Junio", "sku": 61011, "producto": "Gelatina Durazno", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 61012, "producto": "Gelatina Frutilla", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 61017, "producto": "Pancakes jalapeño y limón", "produccion": 2899.0, "total": 2899.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 61018, "producto": "Pancakes dulce de leche", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 61020, "producto": "Pancake chocolate y avellanas", "produccion": 4390.0, "total": 3530.0, "pendiente": -860.0, "tiradas": 860.0}, {"mes": "Junio", "sku": 62001, "producto": "COLAGENO HIDROLIZADO x250g", "produccion": 491.0, "total": 461.0, "pendiente": -30.0, "tiradas": 30.0}, {"mes": "Junio", "sku": 62002, "producto": "COLAGENO HIDROLIZADO NARANJA x250g", "produccion": 500.0, "total": 123.0, "pendiente": -377.0, "tiradas": 377.0}, {"mes": "Junio", "sku": 62003, "producto": "Colageno Flex (NARANJA)", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 62004, "producto": "Colageno Beauty (NARANJA)", "produccion": 598.0, "total": 320.0, "pendiente": -278.0, "tiradas": 278.0}, {"mes": "Junio", "sku": 62005, "producto": "Citrato de magnesio", "produccion": 0.0, "total": 0.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 63001, "producto": "Keto PK Vainilla", "produccion": 15637.0, "total": 15637.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 63002, "producto": "Keto PK Chocolate", "produccion": 6546.0, "total": 6546.0, "pendiente": 0.0, "tiradas": 0.0}, {"mes": "Junio", "sku": 63003, "producto": "Keto Cupcake Vainilla", "produccion": 3978.0, "total": 1890.0, "pendiente": -2088.0, "tiradas": 2088.0}, {"mes": "Junio", "sku": 63004, "producto": "Keto Cupcake Chocolate", "produccion": 3294.0, "total": 2690.0, "pendiente": -604.0, "tiradas": 604.0}, {"mes": "Junio", "sku": 64006, "producto": "Proteina de arveja (NATURAL)", "produccion": 727.0, "total": 575.0, "pendiente": -152.0, "tiradas": 152.0}, {"mes": "Junio", "sku": 64007, "producto": "Proteina de arveja (VAINILLA)", "produccion": 1434.0, "total": 1048.0, "pendiente": -386.0, "tiradas": 386.0}, {"mes": "Junio", "sku": 64001, "producto": "Pancake Proteico Vegan", "produccion": 4720.0, "total": 1608.0, "pendiente": -3112.0, "tiradas": 3112.0}], "mp": [{"MP": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "SKU": 20099, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 17816.756, "%volumen total": 0.3022221461987026, "Mes": "Marzo"}, {"MP": "[20046] LECHE DESCREMADA", "SKU": 20046, "Cant. de productos que se utiliza": 13, "Cant. volumen utilizado": 11134.43, "%volumen total": 0.18887115765065313, "Mes": "Marzo"}, {"MP": "[20128] WPC 34", "SKU": 20128, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 8846.149999999998, "%volumen total": 0.15005551171019305, "Mes": "Marzo"}, {"MP": "[20044] HUEVO EN POLVO", "SKU": 20044, "Cant. de productos que se utiliza": 16, "Cant. volumen utilizado": 6250.589999999999, "%volumen total": 0.10602753524873709, "Mes": "Marzo"}, {"MP": "[20051] POLVO DE HORNEAR", "SKU": 20051, "Cant. de productos que se utiliza": 14, "Cant. volumen utilizado": 2651.94, "%volumen total": 0.04498433937076914, "Mes": "Marzo"}, {"MP": "[20015] CACAO", "SKU": 20015, "Cant. de productos que se utiliza": 7, "Cant. volumen utilizado": 1444.2040000000002, "%volumen total": 0.02449774989502865, "Mes": "Marzo"}, {"MP": "[20052] PROTEINA DE ARVEJA 80", "SKU": 20052, "Cant. de productos que se utiliza": 8, "Cant. volumen utilizado": 111.086, "%volumen total": 0.0018843300841426506, "Mes": "Marzo"}, {"MP": "[20070] ALMIDON DE MAIZ", "SKU": 20070, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 1308.692, "%volumen total": 0.02219908635180683, "Mes": "Marzo"}, {"MP": "[20018] COLAGENO MP", "SKU": 20018, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 951.71, "%volumen total": 0.01614367052895416, "Mes": "Marzo"}, {"MP": "[20019] CREATINA MP", "SKU": 20019, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 864.0, "%volumen total": 0.014655862959322058, "Mes": "Marzo"}, {"MP": "[20130] HARINA DE LUPINO TEXTURIZADA", "SKU": 20130, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 690.7239999999999, "%volumen total": 0.011716616072586537, "Mes": "Marzo"}, {"MP": "[20017] CITRATO DE MAGNESIO MP", "SKU": 20017, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 950.4000000000001, "%volumen total": 0.016121449255254265, "Mes": "Marzo"}, {"MP": "[20041] HARINA DE COCO", "SKU": 20041, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 788.64, "%volumen total": 0.013377546023425634, "Mes": "Marzo"}, {"MP": "[20042] HARINA DE MANI", "SKU": 20042, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 530.172, "%volumen total": 0.008993203908413998, "Mes": "Marzo"}, {"MP": "[20038] HARINA DE ALMENDRAS", "SKU": 20038, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 781.956, "%volumen total": 0.0132641666391431, "Mes": "Marzo"}, {"MP": "[20143] HARINA DE CASTAÑA DE CAJÚ", "SKU": 20143, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 671.65, "%volumen total": 0.011393067542394282, "Mes": "Marzo"}, {"MP": "[20089] INULINA ORAFTI HSI", "SKU": 20089, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 538.594, "%volumen total": 0.009136064646658686, "Mes": "Marzo"}, {"MP": "[20049] MALTODEXTRINA", "SKU": 20049, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 300.36, "%volumen total": 0.005094947914886543, "Mes": "Marzo"}, {"MP": "[20121] MALTITOL", "SKU": 20121, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 216.01600000000002, "%volumen total": 0.003664237144700132, "Mes": "Marzo"}, {"MP": "[20039] HARINA DE ARROZ", "SKU": 20039, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20016] CHIA", "SKU": 20016, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 364.0, "%volumen total": 0.006174460783788459, "Mes": "Marzo"}, {"MP": "[20124] MICRO CHIPS (CHIP274B)", "SKU": 20124, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 225.87, "%volumen total": 0.003831388618775548, "Mes": "Marzo"}, {"MP": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "SKU": 20004, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 176.944, "%volumen total": 0.003001466453095234, "Mes": "Marzo"}, {"MP": "[20043] HUEVO ANÁLOGO", "SKU": 20043, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20065] ARO VAINILLA PIEDMONT 101.090", "SKU": 20065, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 155.6655, "%volumen total": 0.0026405234207110507, "Mes": "Marzo"}, {"MP": "[20114] GELATINA BLOOM 250", "SKU": 20114, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 129.078, "%volumen total": 0.0021895248600270517, "Mes": "Marzo"}, {"MP": "[20126] PAPA DESHIDRATADA", "SKU": 20126, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20140] ERITRITOL", "SKU": 20140, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 146.15, "%volumen total": 0.002479113855908471, "Mes": "Marzo"}, {"MP": "[20132] GLUTAGEL NT", "SKU": 20132, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 23.7, "%volumen total": 0.0004020184631202925, "Mes": "Marzo"}, {"MP": "[20047] LECHE ENTERA", "SKU": 20047, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 96.72, "%volumen total": 0.0016406424368352191, "Mes": "Marzo"}, {"MP": "[20125] ZAPALLO DESHIDRATADO", "SKU": 20125, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20072] ARO QUESO BA-9869-72 HARMONY", "SKU": 20072, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 86.79, "%volumen total": 0.001472201789629122, "Mes": "Marzo"}, {"MP": "[20068] NUTRILAC 7549", "SKU": 20068, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 55.980000000000004, "%volumen total": 0.0009495777875727418, "Mes": "Marzo"}, {"MP": "[20071] QUESO EN POLVO TIPO DURO 322195 HARMONY", "SKU": 20071, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 90.75, "%volumen total": 0.001539374494859348, "Mes": "Marzo"}, {"MP": "[20131] EMULCAKE 7524", "SKU": 20131, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 70.4, "%volumen total": 0.0011941814263151307, "Mes": "Marzo"}, {"MP": "[20088] Fibra Citric E 4030", "SKU": 20088, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 68.946, "%volumen total": 0.0011695175087886788, "Mes": "Marzo"}, {"MP": "[20134] FOSFATO MONOCALCICO POLVO FINO", "SKU": 20134, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 5.821000000000001, "%volumen total": 9.874048412756216e-05, "Mes": "Marzo"}, {"MP": "[20146] LEVADURA SECA INACTIVADA", "SKU": 20146, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 34.01, "%volumen total": 0.0005769049759797953, "Mes": "Marzo"}, {"MP": "[20127] ARO CAPRESE BD 043 100 2", "SKU": 20127, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 27.0, "%volumen total": 0.0004579957174788143, "Mes": "Marzo"}, {"MP": "[20136] HARINA DE ARROZ MICRONIZADA", "SKU": 20136, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 53.8, "%volumen total": 0.0009125988740874151, "Mes": "Marzo"}, {"MP": "[20058] SUCRALOSA", "SKU": 20058, "Cant. de productos que se utiliza": 17, "Cant. volumen utilizado": 27.093799999999998, "%volumen total": 0.00045958682852694437, "Mes": "Marzo"}, {"MP": "[20133] BICARBONATO DE SODIO", "SKU": 20133, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 6.996, "%volumen total": 0.00011867177924006611, "Mes": "Marzo"}, {"MP": "[20117] ARO FRUTILLA BA-7997-31", "SKU": 20117, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 19.2, "%volumen total": 0.00032568584354049015, "Mes": "Marzo"}, {"MP": "[20067] GLICINA", "SKU": 20067, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 35.0, "%volumen total": 0.0005936981522873519, "Mes": "Marzo"}, {"MP": "[20081] ACIDO CITRICO", "SKU": 20081, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 13.6, "%volumen total": 0.00023069413917451386, "Mes": "Marzo"}, {"MP": "[20011] ARO VAINILLA LK11652", "SKU": 20011, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 2.45, "%volumen total": 4.1558870660114633e-05, "Mes": "Marzo"}, {"MP": "[20082] CITRATO DE SODIO", "SKU": 20082, "Cant. de productos que se utiliza": 5, "Cant. volumen utilizado": 14.959999999999999, "%volumen total": 0.00025376355309196524, "Mes": "Marzo"}, {"MP": "[20116] ACIDO FUMARICO", "SKU": 20116, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 14.56, "%volumen total": 0.0002469784313515384, "Mes": "Marzo"}, {"MP": "[20008] NARANJA RBP 10735", "SKU": 20008, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 13.6, "%volumen total": 0.00023069413917451386, "Mes": "Marzo"}, {"MP": "[20119] ARO DURAZNO TO 292 101 6", "SKU": 20119, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 14.4, "%volumen total": 0.00024426438265536763, "Mes": "Marzo"}, {"MP": "[20013] MIX FLEX", "SKU": 20013, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.5, "%volumen total": 0.00012722103263300397, "Mes": "Marzo"}, {"MP": "[20123] ARO VAINILLA CARAMELO 52-18222", "SKU": 20123, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.577, "%volumen total": 0.00012852716856803616, "Mes": "Marzo"}, {"MP": "[20106] JAMON 74918", "SKU": 20106, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 4.2, "%volumen total": 7.124377827448222e-05, "Mes": "Marzo"}, {"MP": "[20137] GOMA XÁNTICA", "SKU": 20137, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 8.642999999999999, "%volumen total": 0.00014660951800627377, "Mes": "Marzo"}, {"MP": "[20077] TOMATE", "SKU": 20077, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20076] ZANAHORIA", "SKU": 20076, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20075] ZAPALLO", "SKU": 20075, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20122] SAL", "SKU": 20122, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 2.7859999999999996, "%volumen total": 4.72583729220732e-05, "Mes": "Marzo"}, {"MP": "[20078] ESPINACA", "SKU": 20078, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20138] ARO AVELLANA 52027 SPM /10M", "SKU": 20138, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 9.0, "%volumen total": 0.00015266523915960476, "Mes": "Marzo"}, {"MP": "[20107] MIX BEAUTY", "SKU": 20107, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 4.68, "%volumen total": 7.938592436299447e-05, "Mes": "Marzo"}, {"MP": "[20080] EMULSWEET 3094", "SKU": 20080, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 2.55, "%volumen total": 4.325515109522135e-05, "Mes": "Marzo"}, {"MP": "[20115] VITAMINA C", "SKU": 20115, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 1.632, "%volumen total": 2.7683296700941663e-05, "Mes": "Marzo"}, {"MP": "[20079] ARO ALBAHACA FRYMA 42-16886MS", "SKU": 20079, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20007] ARO LIMON LK 11831", "SKU": 20007, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 3.25, "%volumen total": 5.512911414096839e-05, "Mes": "Marzo"}, {"MP": "[20120] COLORANTE BETA CAROTENO", "SKU": 20120, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.096, "%volumen total": 1.628429217702451e-06, "Mes": "Marzo"}, {"MP": "[20118] COLORANTE CARMIN SOLUBLE", "SKU": 20118, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.048, "%volumen total": 8.142146088512255e-07, "Mes": "Marzo"}, {"MP": "[20002] ALBUMINA HIDROLIZADA", "SKU": 20002, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 79.0, "%volumen total": 0.0013400615437343085, "Mes": "Marzo"}, {"MP": "[20142] NUTRILAC 8100", "SKU": 20142, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20066] ARO CHOCOLATE (42-16281MS)", "SKU": 20066, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20009] ARO VAINILLA 12-11045 (CREMOSA)", "SKU": 20009, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20050] MODULADOR S2", "SKU": 20050, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20005] ARO FRUTILLA RBP 43", "SKU": 20005, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20006] ARO J Y Q", "SKU": 20006, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20012] MIX 902 - BEAUTY (S/ RESV)", "SKU": 20012, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20045] LACPRODAN 80", "SKU": 20045, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20053] PROTEINA DE SOJA", "SKU": 20053, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20129] MANDIOCA", "SKU": 20129, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20145] WPC 80", "SKU": 20145, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20147] MONO Y DIGLICERIDOS", "SKU": 20147, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20148] ARO PISTACHO 52-19124MS", "SKU": 20148, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20149] ARO CHOCOLATE SW 410", "SKU": 20149, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20151] NUTRILATE 80", "SKU": 20151, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20152] ARO CARAMELO 52-18298MS", "SKU": 20152, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20154] ARO CAPRESE FX-5750 SPM", "SKU": 20154, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20155] GRASA EN POLVO 80%", "SKU": 20155, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20156] LEVADURA PROTEISSIMO 102", "SKU": 20156, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20159] ARO Coco 130824 Piedmont", "SKU": 20159, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20160] ARO Dulce de leche FX-2864 SPM/10M", "SKU": 20160, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20162] ARO JAMÓN SERRANO JP56-32/0 (SAPORITI)", "SKU": 20162, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20165] ARO PICANTE JP76-32/0", "SKU": 20165, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20166] ARO JALAPEÑO  VF-318-548-3", "SKU": 20166, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20168] COLORANTE CARAMELO 3162", "SKU": 20168, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20169] COMPLEX 80i", "SKU": 20169, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "SKU": 20099, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 19950.018, "%volumen total": 0.2940668298593122, "Mes": "Abril"}, {"MP": "[20046] LECHE DESCREMADA", "SKU": 20046, "Cant. de productos que se utiliza": 13, "Cant. volumen utilizado": 12529.683000000003, "%volumen total": 0.18468976614217175, "Mes": "Abril"}, {"MP": "[20128] WPC 34", "SKU": 20128, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 9767.409999999998, "%volumen total": 0.1439733685772185, "Mes": "Abril"}, {"MP": "[20044] HUEVO EN POLVO", "SKU": 20044, "Cant. de productos que se utiliza": 16, "Cant. volumen utilizado": 7076.098, "%volumen total": 0.10430294883111481, "Mes": "Abril"}, {"MP": "[20051] POLVO DE HORNEAR", "SKU": 20051, "Cant. de productos que se utiliza": 14, "Cant. volumen utilizado": 2842.7200000000003, "%volumen total": 0.0419022007186993, "Mes": "Abril"}, {"MP": "[20015] CACAO", "SKU": 20015, "Cant. de productos que se utiliza": 7, "Cant. volumen utilizado": 1995.8944000000001, "%volumen total": 0.029419840069415178, "Mes": "Abril"}, {"MP": "[20052] PROTEINA DE ARVEJA 80", "SKU": 20052, "Cant. de productos que se utiliza": 8, "Cant. volumen utilizado": 3496.1544000000004, "%volumen total": 0.05153394052610308, "Mes": "Abril"}, {"MP": "[20070] ALMIDON DE MAIZ", "SKU": 20070, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 1106.9560000000001, "%volumen total": 0.016316729223690166, "Mes": "Abril"}, {"MP": "[20018] COLAGENO MP", "SKU": 20018, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 1204.23, "%volumen total": 0.017750565363975086, "Mes": "Abril"}, {"MP": "[20019] CREATINA MP", "SKU": 20019, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 324.0, "%volumen total": 0.004775817890210282, "Mes": "Abril"}, {"MP": "[20130] HARINA DE LUPINO TEXTURIZADA", "SKU": 20130, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 698.9960000000001, "%volumen total": 0.010303325932053787, "Mes": "Abril"}, {"MP": "[20017] CITRATO DE MAGNESIO MP", "SKU": 20017, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 316.8, "%volumen total": 0.004669688603761165, "Mes": "Abril"}, {"MP": "[20041] HARINA DE COCO", "SKU": 20041, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 516.24, "%volumen total": 0.007609469838401716, "Mes": "Abril"}, {"MP": "[20042] HARINA DE MANI", "SKU": 20042, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 638.7812, "%volumen total": 0.009415749021265409, "Mes": "Abril"}, {"MP": "[20038] HARINA DE ALMENDRAS", "SKU": 20038, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 575.172, "%volumen total": 0.008478138047987742, "Mes": "Abril"}, {"MP": "[20143] HARINA DE CASTAÑA DE CAJÚ", "SKU": 20143, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 481.16, "%volumen total": 0.007092384370535739, "Mes": "Abril"}, {"MP": "[20089] INULINA ORAFTI HSI", "SKU": 20089, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 436.848, "%volumen total": 0.006439217573156115, "Mes": "Abril"}, {"MP": "[20049] MALTODEXTRINA", "SKU": 20049, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 336.12, "%volumen total": 0.004954468855732963, "Mes": "Abril"}, {"MP": "[20121] MALTITOL", "SKU": 20121, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 307.09439999999995, "%volumen total": 0.004526626325627754, "Mes": "Abril"}, {"MP": "[20039] HARINA DE ARROZ", "SKU": 20039, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20016] CHIA", "SKU": 20016, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 218.39999999999998, "%volumen total": 0.0032192550222898933, "Mes": "Abril"}, {"MP": "[20124] MICRO CHIPS (CHIP274B)", "SKU": 20124, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 249.266, "%volumen total": 0.0036742253772257907, "Mes": "Abril"}, {"MP": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "SKU": 20004, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 264.2572, "%volumen total": 0.003895198343755792, "Mes": "Abril"}, {"MP": "[20043] HUEVO ANÁLOGO", "SKU": 20043, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 216.0, "%volumen total": 0.0031838785934735214, "Mes": "Abril"}, {"MP": "[20065] ARO VAINILLA PIEDMONT 101.090", "SKU": 20065, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 144.4722, "%volumen total": 0.0021295460413519687, "Mes": "Abril"}, {"MP": "[20114] GELATINA BLOOM 250", "SKU": 20114, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 155.96820000000002, "%volumen total": 0.002298999135382393, "Mes": "Abril"}, {"MP": "[20126] PAPA DESHIDRATADA", "SKU": 20126, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 326.4, "%volumen total": 0.0048111943190266545, "Mes": "Abril"}, {"MP": "[20140] ERITRITOL", "SKU": 20140, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 72.04, "%volumen total": 0.0010618824716381134, "Mes": "Abril"}, {"MP": "[20132] GLUTAGEL NT", "SKU": 20132, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 12.0, "%volumen total": 0.0001768821440818623, "Mes": "Abril"}, {"MP": "[20047] LECHE ENTERA", "SKU": 20047, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 137.64, "%volumen total": 0.0020288381926189605, "Mes": "Abril"}, {"MP": "[20125] ZAPALLO DESHIDRATADO", "SKU": 20125, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 244.79999999999998, "%volumen total": 0.0036083957392699906, "Mes": "Abril"}, {"MP": "[20072] ARO QUESO BA-9869-72 HARMONY", "SKU": 20072, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 101.5, "%volumen total": 0.0014961281353590853, "Mes": "Abril"}, {"MP": "[20068] NUTRILAC 7549", "SKU": 20068, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 174.72, "%volumen total": 0.002575404017831915, "Mes": "Abril"}, {"MP": "[20071] QUESO EN POLVO TIPO DURO 322195 HARMONY", "SKU": 20071, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 84.7, "%volumen total": 0.0012484931336444781, "Mes": "Abril"}, {"MP": "[20131] EMULCAKE 7524", "SKU": 20131, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 58.18, "%volumen total": 0.0008575835952235624, "Mes": "Abril"}, {"MP": "[20088] Fibra Citric E 4030", "SKU": 20088, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 61.26639999999999, "%volumen total": 0.0009030776826814172, "Mes": "Abril"}, {"MP": "[20134] FOSFATO MONOCALCICO POLVO FINO", "SKU": 20134, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.477800000000002, "%volumen total": 0.00015444464410507808, "Mes": "Abril"}, {"MP": "[20146] LEVADURA SECA INACTIVADA", "SKU": 20146, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 34.637, "%volumen total": 0.0005105555687136221, "Mes": "Abril"}, {"MP": "[20127] ARO CAPRESE BD 043 100 2", "SKU": 20127, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 18.0, "%volumen total": 0.00026532321612279347, "Mes": "Abril"}, {"MP": "[20136] HARINA DE ARROZ MICRONIZADA", "SKU": 20136, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 299.9, "%volumen total": 0.0044205795841792085, "Mes": "Abril"}, {"MP": "[20058] SUCRALOSA", "SKU": 20058, "Cant. de productos que se utiliza": 17, "Cant. volumen utilizado": 31.978799999999996, "%volumen total": 0.0004713732257637548, "Mes": "Abril"}, {"MP": "[20133] BICARBONATO DE SODIO", "SKU": 20133, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 12.5928, "%volumen total": 0.0001856201219995063, "Mes": "Abril"}, {"MP": "[20117] ARO FRUTILLA BA-7997-31", "SKU": 20117, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 28.799999999999997, "%volumen total": 0.0004245171457964695, "Mes": "Abril"}, {"MP": "[20067] GLICINA", "SKU": 20067, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 21.0, "%volumen total": 0.00030954375214325904, "Mes": "Abril"}, {"MP": "[20081] ACIDO CITRICO", "SKU": 20081, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 22.2, "%volumen total": 0.00032723196655144526, "Mes": "Abril"}, {"MP": "[20011] ARO VAINILLA LK11652", "SKU": 20011, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 66.48, "%volumen total": 0.0009799270782135173, "Mes": "Abril"}, {"MP": "[20082] CITRATO DE SODIO", "SKU": 20082, "Cant. de productos que se utiliza": 5, "Cant. volumen utilizado": 16.979999999999997, "%volumen total": 0.00025028823387583513, "Mes": "Abril"}, {"MP": "[20116] ACIDO FUMARICO", "SKU": 20116, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 16.38, "%volumen total": 0.00024144412667174203, "Mes": "Abril"}, {"MP": "[20008] NARANJA RBP 10735", "SKU": 20008, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 16.8, "%volumen total": 0.00024763500171460725, "Mes": "Abril"}, {"MP": "[20119] ARO DURAZNO TO 292 101 6", "SKU": 20119, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.8, "%volumen total": 0.0001591939296736761, "Mes": "Abril"}, {"MP": "[20013] MIX FLEX", "SKU": 20013, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 15.0, "%volumen total": 0.00022110268010232787, "Mes": "Abril"}, {"MP": "[20123] ARO VAINILLA CARAMELO 52-18222", "SKU": 20123, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 13.6386, "%volumen total": 0.0002010354008562406, "Mes": "Abril"}, {"MP": "[20106] JAMON 74918", "SKU": 20106, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 21.0, "%volumen total": 0.00030954375214325904, "Mes": "Abril"}, {"MP": "[20137] GOMA XÁNTICA", "SKU": 20137, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 6.7776, "%volumen total": 9.990303497743582e-05, "Mes": "Abril"}, {"MP": "[20077] TOMATE", "SKU": 20077, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.6, "%volumen total": 0.00017098607261246688, "Mes": "Abril"}, {"MP": "[20076] ZANAHORIA", "SKU": 20076, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.42, "%volumen total": 0.00016833284045123895, "Mes": "Abril"}, {"MP": "[20075] ZAPALLO", "SKU": 20075, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.92, "%volumen total": 0.0001609627511144947, "Mes": "Abril"}, {"MP": "[20122] SAL", "SKU": 20122, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 4.5047999999999995, "%volumen total": 6.64015568883311e-05, "Mes": "Abril"}, {"MP": "[20078] ESPINACA", "SKU": 20078, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.9, "%volumen total": 0.00011644741152055935, "Mes": "Abril"}, {"MP": "[20138] ARO AVELLANA 52027 SPM /10M", "SKU": 20138, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20107] MIX BEAUTY", "SKU": 20107, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 2.34, "%volumen total": 3.4492018095963145e-05, "Mes": "Abril"}, {"MP": "[20080] EMULSWEET 3094", "SKU": 20080, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 3.15, "%volumen total": 4.643156282148885e-05, "Mes": "Abril"}, {"MP": "[20115] VITAMINA C", "SKU": 20115, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 1.8359999999999999, "%volumen total": 2.706296804452493e-05, "Mes": "Abril"}, {"MP": "[20079] ARO ALBAHACA FRYMA 42-16886MS", "SKU": 20079, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.84, "%volumen total": 1.238175008573036e-05, "Mes": "Abril"}, {"MP": "[20007] ARO LIMON LK 11831", "SKU": 20007, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 1.7, "%volumen total": 2.5058303744930493e-05, "Mes": "Abril"}, {"MP": "[20120] COLORANTE BETA CAROTENO", "SKU": 20120, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.07200000000000001, "%volumen total": 1.061292864491174e-06, "Mes": "Abril"}, {"MP": "[20118] COLORANTE CARMIN SOLUBLE", "SKU": 20118, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.07200000000000001, "%volumen total": 1.061292864491174e-06, "Mes": "Abril"}, {"MP": "[20002] ALBUMINA HIDROLIZADA", "SKU": 20002, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20142] NUTRILAC 8100", "SKU": 20142, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20066] ARO CHOCOLATE (42-16281MS)", "SKU": 20066, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20009] ARO VAINILLA 12-11045 (CREMOSA)", "SKU": 20009, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20050] MODULADOR S2", "SKU": 20050, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20005] ARO FRUTILLA RBP 43", "SKU": 20005, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20006] ARO J Y Q", "SKU": 20006, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20012] MIX 902 - BEAUTY (S/ RESV)", "SKU": 20012, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20045] LACPRODAN 80", "SKU": 20045, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20053] PROTEINA DE SOJA", "SKU": 20053, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20129] MANDIOCA", "SKU": 20129, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20145] WPC 80", "SKU": 20145, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20147] MONO Y DIGLICERIDOS", "SKU": 20147, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20148] ARO PISTACHO 52-19124MS", "SKU": 20148, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20149] ARO CHOCOLATE SW 410", "SKU": 20149, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20151] NUTRILATE 80", "SKU": 20151, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20152] ARO CARAMELO 52-18298MS", "SKU": 20152, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20154] ARO CAPRESE FX-5750 SPM", "SKU": 20154, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20155] GRASA EN POLVO 80%", "SKU": 20155, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20156] LEVADURA PROTEISSIMO 102", "SKU": 20156, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20159] ARO Coco 130824 Piedmont", "SKU": 20159, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20160] ARO Dulce de leche FX-2864 SPM/10M", "SKU": 20160, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20162] ARO JAMÓN SERRANO JP56-32/0 (SAPORITI)", "SKU": 20162, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20165] ARO PICANTE JP76-32/0", "SKU": 20165, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20166] ARO JALAPEÑO  VF-318-548-3", "SKU": 20166, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20168] COLORANTE CARAMELO 3162", "SKU": 20168, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20169] COMPLEX 80i", "SKU": 20169, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "SKU": 20099, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 16685.66, "%volumen total": 0.29144251567085205, "Mes": "Mayo"}, {"MP": "[20046] LECHE DESCREMADA", "SKU": 20046, "Cant. de productos que se utiliza": 13, "Cant. volumen utilizado": 10455.560000000001, "%volumen total": 0.18262356473448066, "Mes": "Mayo"}, {"MP": "[20128] WPC 34", "SKU": 20128, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 8385.695000000002, "%volumen total": 0.14646996561409537, "Mes": "Mayo"}, {"MP": "[20044] HUEVO EN POLVO", "SKU": 20044, "Cant. de productos que se utiliza": 16, "Cant. volumen utilizado": 6669.025, "%volumen total": 0.11648549851020602, "Mes": "Mayo"}, {"MP": "[20051] POLVO DE HORNEAR", "SKU": 20051, "Cant. de productos que se utiliza": 14, "Cant. volumen utilizado": 2441.0099999999998, "%volumen total": 0.042636257431693234, "Mes": "Mayo"}, {"MP": "[20015] CACAO", "SKU": 20015, "Cant. de productos que se utiliza": 7, "Cant. volumen utilizado": 1275.7392, "%volumen total": 0.02228288493160716, "Mes": "Mayo"}, {"MP": "[20052] PROTEINA DE ARVEJA 80", "SKU": 20052, "Cant. de productos que se utiliza": 8, "Cant. volumen utilizado": 406.4152, "%volumen total": 0.0070987104073121764, "Mes": "Mayo"}, {"MP": "[20070] ALMIDON DE MAIZ", "SKU": 20070, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 1001.359, "%volumen total": 0.01749038312237267, "Mes": "Mayo"}, {"MP": "[20018] COLAGENO MP", "SKU": 20018, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 445.03, "%volumen total": 0.007773181447362543, "Mes": "Mayo"}, {"MP": "[20019] CREATINA MP", "SKU": 20019, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 378.0, "%volumen total": 0.006602392169298792, "Mes": "Mayo"}, {"MP": "[20130] HARINA DE LUPINO TEXTURIZADA", "SKU": 20130, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 660.547, "%volumen total": 0.011537540582682035, "Mes": "Mayo"}, {"MP": "[20017] CITRATO DE MAGNESIO MP", "SKU": 20017, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 792.0, "%volumen total": 0.013833583592816516, "Mes": "Mayo"}, {"MP": "[20041] HARINA DE COCO", "SKU": 20041, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 642.15, "%volumen total": 0.011216206697130209, "Mes": "Mayo"}, {"MP": "[20042] HARINA DE MANI", "SKU": 20042, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 795.2876, "%volumen total": 0.013891006938043465, "Mes": "Mayo"}, {"MP": "[20038] HARINA DE ALMENDRAS", "SKU": 20038, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 585.7560000000001, "%volumen total": 0.010231192665396254, "Mes": "Mayo"}, {"MP": "[20143] HARINA DE CASTAÑA DE CAJÚ", "SKU": 20143, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 566.06, "%volumen total": 0.009887169606754693, "Mes": "Mayo"}, {"MP": "[20089] INULINA ORAFTI HSI", "SKU": 20089, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 405.694, "%volumen total": 0.007086113462252657, "Mes": "Mayo"}, {"MP": "[20049] MALTODEXTRINA", "SKU": 20049, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 184.75, "%volumen total": 0.003226962839359661, "Mes": "Mayo"}, {"MP": "[20121] MALTITOL", "SKU": 20121, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 301.92719999999997, "%volumen total": 0.005273655505233624, "Mes": "Mayo"}, {"MP": "[20039] HARINA DE ARROZ", "SKU": 20039, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20016] CHIA", "SKU": 20016, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 728.0, "%volumen total": 0.012715718251982859, "Mes": "Mayo"}, {"MP": "[20124] MICRO CHIPS (CHIP274B)", "SKU": 20124, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 278.305, "%volumen total": 0.004861054901261112, "Mes": "Mayo"}, {"MP": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "SKU": 20004, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 180.54960000000003, "%volumen total": 0.0031535959397090726, "Mes": "Mayo"}, {"MP": "[20043] HUEVO ANÁLOGO", "SKU": 20043, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 288.0, "%volumen total": 0.0050303940337514605, "Mes": "Mayo"}, {"MP": "[20065] ARO VAINILLA PIEDMONT 101.090", "SKU": 20065, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 142.6821, "%volumen total": 0.002492177724177532, "Mes": "Mayo"}, {"MP": "[20114] GELATINA BLOOM 250", "SKU": 20114, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 95.5926, "%volumen total": 0.0016696820996902426, "Mes": "Mayo"}, {"MP": "[20126] PAPA DESHIDRATADA", "SKU": 20126, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 489.59999999999997, "%volumen total": 0.008551669857377483, "Mes": "Mayo"}, {"MP": "[20140] ERITRITOL", "SKU": 20140, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 128.14, "%volumen total": 0.0022381760121003894, "Mes": "Mayo"}, {"MP": "[20132] GLUTAGEL NT", "SKU": 20132, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 20.7, "%volumen total": 0.0003615595711758862, "Mes": "Mayo"}, {"MP": "[20047] LECHE ENTERA", "SKU": 20047, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 62.0, "%volumen total": 0.0010829320489326062, "Mes": "Mayo"}, {"MP": "[20125] ZAPALLO DESHIDRATADO", "SKU": 20125, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 408.0, "%volumen total": 0.007126391547814569, "Mes": "Mayo"}, {"MP": "[20072] ARO QUESO BA-9869-72 HARMONY", "SKU": 20072, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 40.32, "%volumen total": 0.0007042551647252045, "Mes": "Mayo"}, {"MP": "[20068] NUTRILAC 7549", "SKU": 20068, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 274.56, "%volumen total": 0.0047956423121763925, "Mes": "Mayo"}, {"MP": "[20071] QUESO EN POLVO TIPO DURO 322195 HARMONY", "SKU": 20071, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20131] EMULCAKE 7524", "SKU": 20131, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 77.24000000000001, "%volumen total": 0.001349123733218621, "Mes": "Mayo"}, {"MP": "[20088] Fibra Citric E 4030", "SKU": 20088, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 66.4752, "%volumen total": 0.0011610987828903996, "Mes": "Mayo"}, {"MP": "[20134] FOSFATO MONOCALCICO POLVO FINO", "SKU": 20134, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 8.7315, "%volumen total": 0.00015251001911701696, "Mes": "Mayo"}, {"MP": "[20146] LEVADURA SECA INACTIVADA", "SKU": 20146, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 20.561, "%volumen total": 0.0003591317073887631, "Mes": "Mayo"}, {"MP": "[20127] ARO CAPRESE BD 043 100 2", "SKU": 20127, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 13.5, "%volumen total": 0.0002357997203320997, "Mes": "Mayo"}, {"MP": "[20136] HARINA DE ARROZ MICRONIZADA", "SKU": 20136, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 417.8, "%volumen total": 0.007297564678129724, "Mes": "Mayo"}, {"MP": "[20058] SUCRALOSA", "SKU": 20058, "Cant. de productos que se utiliza": 17, "Cant. volumen utilizado": 26.0698, "%volumen total": 0.00045535196660102025, "Mes": "Mayo"}, {"MP": "[20133] BICARBONATO DE SODIO", "SKU": 20133, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.494, "%volumen total": 0.00018329498260481885, "Mes": "Mayo"}, {"MP": "[20117] ARO FRUTILLA BA-7997-31", "SKU": 20117, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 24.0, "%volumen total": 0.0004191995028126217, "Mes": "Mayo"}, {"MP": "[20067] GLICINA", "SKU": 20067, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 70.0, "%volumen total": 0.0012226652165368134, "Mes": "Mayo"}, {"MP": "[20081] ACIDO CITRICO", "SKU": 20081, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 16.0, "%volumen total": 0.0002794663352084145, "Mes": "Mayo"}, {"MP": "[20011] ARO VAINILLA LK11652", "SKU": 20011, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20082] CITRATO DE SODIO", "SKU": 20082, "Cant. de productos que se utiliza": 5, "Cant. volumen utilizado": 9.38, "%volumen total": 0.000163837139015933, "Mes": "Mayo"}, {"MP": "[20116] ACIDO FUMARICO", "SKU": 20116, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 9.1, "%volumen total": 0.00015894647814978572, "Mes": "Mayo"}, {"MP": "[20008] NARANJA RBP 10735", "SKU": 20008, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 8.8, "%volumen total": 0.00015370648436462798, "Mes": "Mayo"}, {"MP": "[20119] ARO DURAZNO TO 292 101 6", "SKU": 20119, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20013] MIX FLEX", "SKU": 20013, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.5, "%volumen total": 0.00013099984462894428, "Mes": "Mayo"}, {"MP": "[20123] ARO VAINILLA CARAMELO 52-18222", "SKU": 20123, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.3655, "%volumen total": 0.0001985171645507022, "Mes": "Mayo"}, {"MP": "[20106] JAMON 74918", "SKU": 20106, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 33.6, "%volumen total": 0.0005868793039376704, "Mes": "Mayo"}, {"MP": "[20137] GOMA XÁNTICA", "SKU": 20137, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 8.0358, "%volumen total": 0.00014035847352923607, "Mes": "Mayo"}, {"MP": "[20077] TOMATE", "SKU": 20077, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20076] ZANAHORIA", "SKU": 20076, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20075] ZAPALLO", "SKU": 20075, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20122] SAL", "SKU": 20122, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 3.729, "%volumen total": 6.51331227495111e-05, "Mes": "Mayo"}, {"MP": "[20078] ESPINACA", "SKU": 20078, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20138] ARO AVELLANA 52027 SPM /10M", "SKU": 20138, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20107] MIX BEAUTY", "SKU": 20107, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 2.34, "%volumen total": 4.087195152423061e-05, "Mes": "Mayo"}, {"MP": "[20080] EMULSWEET 3094", "SKU": 20080, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 1.65, "%volumen total": 2.8819965818367742e-05, "Mes": "Mayo"}, {"MP": "[20115] VITAMINA C", "SKU": 20115, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 1.02, "%volumen total": 1.7815978869536424e-05, "Mes": "Mayo"}, {"MP": "[20079] ARO ALBAHACA FRYMA 42-16886MS", "SKU": 20079, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20007] ARO LIMON LK 11831", "SKU": 20007, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 9.5, "%volumen total": 0.0001659331365299961, "Mes": "Mayo"}, {"MP": "[20120] COLORANTE BETA CAROTENO", "SKU": 20120, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20118] COLORANTE CARMIN SOLUBLE", "SKU": 20118, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.06, "%volumen total": 1.0479987570315543e-06, "Mes": "Mayo"}, {"MP": "[20002] ALBUMINA HIDROLIZADA", "SKU": 20002, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20142] NUTRILAC 8100", "SKU": 20142, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20066] ARO CHOCOLATE (42-16281MS)", "SKU": 20066, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20009] ARO VAINILLA 12-11045 (CREMOSA)", "SKU": 20009, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20050] MODULADOR S2", "SKU": 20050, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20005] ARO FRUTILLA RBP 43", "SKU": 20005, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20006] ARO J Y Q", "SKU": 20006, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20012] MIX 902 - BEAUTY (S/ RESV)", "SKU": 20012, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20045] LACPRODAN 80", "SKU": 20045, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20053] PROTEINA DE SOJA", "SKU": 20053, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20129] MANDIOCA", "SKU": 20129, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20145] WPC 80", "SKU": 20145, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20147] MONO Y DIGLICERIDOS", "SKU": 20147, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20148] ARO PISTACHO 52-19124MS", "SKU": 20148, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20149] ARO CHOCOLATE SW 410", "SKU": 20149, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20151] NUTRILATE 80", "SKU": 20151, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20152] ARO CARAMELO 52-18298MS", "SKU": 20152, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20154] ARO CAPRESE FX-5750 SPM", "SKU": 20154, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20155] GRASA EN POLVO 80%", "SKU": 20155, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20156] LEVADURA PROTEISSIMO 102", "SKU": 20156, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20159] ARO Coco 130824 Piedmont", "SKU": 20159, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20160] ARO Dulce de leche FX-2864 SPM/10M", "SKU": 20160, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 54.910000000000004, "%volumen total": 0.0009590935291433775, "Mes": "Mayo"}, {"MP": "[20162] ARO JAMÓN SERRANO JP56-32/0 (SAPORITI)", "SKU": 20162, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20165] ARO PICANTE JP76-32/0", "SKU": 20165, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 42.0, "%volumen total": 0.000733599129922088, "Mes": "Mayo"}, {"MP": "[20166] ARO JALAPEÑO  VF-318-548-3", "SKU": 20166, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 84.0, "%volumen total": 0.001467198259844176, "Mes": "Mayo"}, {"MP": "[20168] COLORANTE CARAMELO 3162", "SKU": 20168, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20169] COMPLEX 80i", "SKU": 20169, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "SKU": 20099, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 20359.250000000004, "%volumen total": 0.3556078115682446, "Mes": "Junio"}, {"MP": "[20046] LECHE DESCREMADA", "SKU": 20046, "Cant. de productos que se utiliza": 13, "Cant. volumen utilizado": 12310.647, "%volumen total": 0.2150257125709039, "Mes": "Junio"}, {"MP": "[20128] WPC 34", "SKU": 20128, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 10376.461, "%volumen total": 0.18124197050643998, "Mes": "Junio"}, {"MP": "[20044] HUEVO EN POLVO", "SKU": 20044, "Cant. de productos que se utiliza": 16, "Cant. volumen utilizado": 7632.253000000001, "%volumen total": 0.1333098609558392, "Mes": "Junio"}, {"MP": "[20051] POLVO DE HORNEAR", "SKU": 20051, "Cant. de productos que se utiliza": 14, "Cant. volumen utilizado": 3001.6800000000003, "%volumen total": 0.0524292818167746, "Mes": "Junio"}, {"MP": "[20015] CACAO", "SKU": 20015, "Cant. de productos que se utiliza": 7, "Cant. volumen utilizado": 1751.7868, "%volumen total": 0.030597839816404734, "Mes": "Junio"}, {"MP": "[20052] PROTEINA DE ARVEJA 80", "SKU": 20052, "Cant. de productos que se utiliza": 8, "Cant. volumen utilizado": 1037.2988, "%volumen total": 0.018118130884505382, "Mes": "Junio"}, {"MP": "[20070] ALMIDON DE MAIZ", "SKU": 20070, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 1088.9389999999999, "%volumen total": 0.019020111974719724, "Mes": "Junio"}, {"MP": "[20018] COLAGENO MP", "SKU": 20018, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 377.53, "%volumen total": 0.0065941828457020445, "Mes": "Junio"}, {"MP": "[20019] CREATINA MP", "SKU": 20019, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 216.0, "%volumen total": 0.0037727955253135954, "Mes": "Junio"}, {"MP": "[20130] HARINA DE LUPINO TEXTURIZADA", "SKU": 20130, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 697.915, "%volumen total": 0.012190234208561286, "Mes": "Junio"}, {"MP": "[20017] CITRATO DE MAGNESIO MP", "SKU": 20017, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20041] HARINA DE COCO", "SKU": 20041, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 880.44, "%volumen total": 0.01537833376068103, "Mes": "Junio"}, {"MP": "[20042] HARINA DE MANI", "SKU": 20042, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 861.0164, "%volumen total": 0.015039068616396393, "Mes": "Junio"}, {"MP": "[20038] HARINA DE ALMENDRAS", "SKU": 20038, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 727.1400000000001, "%volumen total": 0.012700696936465408, "Mes": "Junio"}, {"MP": "[20143] HARINA DE CASTAÑA DE CAJÚ", "SKU": 20143, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 729.54, "%volumen total": 0.012742616886746667, "Mes": "Junio"}, {"MP": "[20089] INULINA ORAFTI HSI", "SKU": 20089, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 414.72, "%volumen total": 0.0072437674086021035, "Mes": "Junio"}, {"MP": "[20049] MALTODEXTRINA", "SKU": 20049, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20121] MALTITOL", "SKU": 20121, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 222.25279999999998, "%volumen total": 0.0038820109691130437, "Mes": "Junio"}, {"MP": "[20039] HARINA DE ARROZ", "SKU": 20039, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20016] CHIA", "SKU": 20016, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 582.4, "%volumen total": 0.010172574601586286, "Mes": "Junio"}, {"MP": "[20124] MICRO CHIPS (CHIP274B)", "SKU": 20124, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 200.05700000000002, "%volumen total": 0.003494324788924361, "Mes": "Junio"}, {"MP": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "SKU": 20004, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 232.7704, "%volumen total": 0.004065718164562295, "Mes": "Junio"}, {"MP": "[20043] HUEVO ANÁLOGO", "SKU": 20043, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 396.0, "%volumen total": 0.006916791796408258, "Mes": "Junio"}, {"MP": "[20065] ARO VAINILLA PIEDMONT 101.090", "SKU": 20065, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 183.2164, "%volumen total": 0.003200175991129934, "Mes": "Junio"}, {"MP": "[20114] GELATINA BLOOM 250", "SKU": 20114, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 18.0414, "%volumen total": 0.0003151227462518181, "Mes": "Junio"}, {"MP": "[20126] PAPA DESHIDRATADA", "SKU": 20126, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 571.1999999999999, "%volumen total": 0.009976948166940397, "Mes": "Junio"}, {"MP": "[20140] ERITRITOL", "SKU": 20140, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 201.56, "%volumen total": 0.0035205771577880014, "Mes": "Junio"}, {"MP": "[20132] GLUTAGEL NT", "SKU": 20132, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 32.5, "%volumen total": 0.000567665993392092, "Mes": "Junio"}, {"MP": "[20047] LECHE ENTERA", "SKU": 20047, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 97.96, "%volumen total": 0.0017110326373135176, "Mes": "Junio"}, {"MP": "[20125] ZAPALLO DESHIDRATADO", "SKU": 20125, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 326.4, "%volumen total": 0.005701113238251655, "Mes": "Junio"}, {"MP": "[20072] ARO QUESO BA-9869-72 HARMONY", "SKU": 20072, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 25.2, "%volumen total": 0.0004401594779532528, "Mes": "Junio"}, {"MP": "[20068] NUTRILAC 7549", "SKU": 20068, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 358.53, "%volumen total": 0.006262316572642052, "Mes": "Junio"}, {"MP": "[20071] QUESO EN POLVO TIPO DURO 322195 HARMONY", "SKU": 20071, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20131] EMULCAKE 7524", "SKU": 20131, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 82.72, "%volumen total": 0.0014448409530275028, "Mes": "Junio"}, {"MP": "[20088] Fibra Citric E 4030", "SKU": 20088, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 65.61280000000001, "%volumen total": 0.0011460355474226663, "Mes": "Junio"}, {"MP": "[20134] FOSFATO MONOCALCICO POLVO FINO", "SKU": 20134, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 6.4031, "%volumen total": 0.00011184068068581243, "Mes": "Junio"}, {"MP": "[20146] LEVADURA SECA INACTIVADA", "SKU": 20146, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 15.154999999999998, "%volumen total": 0.00026470701938022007, "Mes": "Junio"}, {"MP": "[20127] ARO CAPRESE BD 043 100 2", "SKU": 20127, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20136] HARINA DE ARROZ MICRONIZADA", "SKU": 20136, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 538.16, "%volumen total": 0.00939985018473502, "Mes": "Junio"}, {"MP": "[20058] SUCRALOSA", "SKU": 20058, "Cant. de productos que se utiliza": 17, "Cant. volumen utilizado": 32.69819999999999, "%volumen total": 0.000571127882619486, "Mes": "Junio"}, {"MP": "[20133] BICARBONATO DE SODIO", "SKU": 20133, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.6956, "%volumen total": 0.00013441632057686716, "Mes": "Junio"}, {"MP": "[20117] ARO FRUTILLA BA-7997-31", "SKU": 20117, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20067] GLICINA", "SKU": 20067, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 56.0, "%volumen total": 0.0009781321732294506, "Mes": "Junio"}, {"MP": "[20081] ACIDO CITRICO", "SKU": 20081, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 18.7, "%volumen total": 0.00032662627927483443, "Mes": "Junio"}, {"MP": "[20011] ARO VAINILLA LK11652", "SKU": 20011, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 22.16, "%volumen total": 0.00038706087426365404, "Mes": "Junio"}, {"MP": "[20082] CITRATO DE SODIO", "SKU": 20082, "Cant. de productos que se utiliza": 5, "Cant. volumen utilizado": 0.88, "%volumen total": 1.5370648436462796e-05, "Mes": "Junio"}, {"MP": "[20116] ACIDO FUMARICO", "SKU": 20116, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20008] NARANJA RBP 10735", "SKU": 20008, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 8.8, "%volumen total": 0.00015370648436462798, "Mes": "Junio"}, {"MP": "[20119] ARO DURAZNO TO 292 101 6", "SKU": 20119, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20013] MIX FLEX", "SKU": 20013, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20123] ARO VAINILLA CARAMELO 52-18222", "SKU": 20123, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 8.3347, "%volumen total": 0.00014557925400384827, "Mes": "Junio"}, {"MP": "[20106] JAMON 74918", "SKU": 20106, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 21.0, "%volumen total": 0.000366799564961044, "Mes": "Junio"}, {"MP": "[20137] GOMA XÁNTICA", "SKU": 20137, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 11.8902, "%volumen total": 0.0002076819136809431, "Mes": "Junio"}, {"MP": "[20077] TOMATE", "SKU": 20077, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.6, "%volumen total": 0.0002026130930261005, "Mes": "Junio"}, {"MP": "[20076] ZANAHORIA", "SKU": 20076, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.42, "%volumen total": 0.00019946909675500583, "Mes": "Junio"}, {"MP": "[20075] ZAPALLO", "SKU": 20075, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.92, "%volumen total": 0.00019073577377974287, "Mes": "Junio"}, {"MP": "[20122] SAL", "SKU": 20122, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 2.5696, "%volumen total": 4.4882293434471364e-05, "Mes": "Junio"}, {"MP": "[20078] ESPINACA", "SKU": 20078, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.9, "%volumen total": 0.00013798650300915466, "Mes": "Junio"}, {"MP": "[20138] ARO AVELLANA 52027 SPM /10M", "SKU": 20138, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 13.5, "%volumen total": 0.0002357997203320997, "Mes": "Junio"}, {"MP": "[20107] MIX BEAUTY", "SKU": 20107, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 2.34, "%volumen total": 4.087195152423061e-05, "Mes": "Junio"}, {"MP": "[20080] EMULSWEET 3094", "SKU": 20080, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 1.65, "%volumen total": 2.8819965818367742e-05, "Mes": "Junio"}, {"MP": "[20115] VITAMINA C", "SKU": 20115, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20079] ARO ALBAHACA FRYMA 42-16886MS", "SKU": 20079, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.84, "%volumen total": 1.4671982598441759e-05, "Mes": "Junio"}, {"MP": "[20007] ARO LIMON LK 11831", "SKU": 20007, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 5.1000000000000005, "%volumen total": 8.907989434768213e-05, "Mes": "Junio"}, {"MP": "[20120] COLORANTE BETA CAROTENO", "SKU": 20120, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20118] COLORANTE CARMIN SOLUBLE", "SKU": 20118, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20002] ALBUMINA HIDROLIZADA", "SKU": 20002, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20142] NUTRILAC 8100", "SKU": 20142, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20066] ARO CHOCOLATE (42-16281MS)", "SKU": 20066, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20009] ARO VAINILLA 12-11045 (CREMOSA)", "SKU": 20009, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20050] MODULADOR S2", "SKU": 20050, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20005] ARO FRUTILLA RBP 43", "SKU": 20005, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20006] ARO J Y Q", "SKU": 20006, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20012] MIX 902 - BEAUTY (S/ RESV)", "SKU": 20012, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20045] LACPRODAN 80", "SKU": 20045, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20053] PROTEINA DE SOJA", "SKU": 20053, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20129] MANDIOCA", "SKU": 20129, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20145] WPC 80", "SKU": 20145, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20147] MONO Y DIGLICERIDOS", "SKU": 20147, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20148] ARO PISTACHO 52-19124MS", "SKU": 20148, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20149] ARO CHOCOLATE SW 410", "SKU": 20149, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20151] NUTRILATE 80", "SKU": 20151, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20152] ARO CARAMELO 52-18298MS", "SKU": 20152, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20154] ARO CAPRESE FX-5750 SPM", "SKU": 20154, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20155] GRASA EN POLVO 80%", "SKU": 20155, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20156] LEVADURA PROTEISSIMO 102", "SKU": 20156, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20159] ARO Coco 130824 Piedmont", "SKU": 20159, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20160] ARO Dulce de leche FX-2864 SPM/10M", "SKU": 20160, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20162] ARO JAMÓN SERRANO JP56-32/0 (SAPORITI)", "SKU": 20162, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20165] ARO PICANTE JP76-32/0", "SKU": 20165, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 18.0, "%volumen total": 0.0003143996271094663, "Mes": "Junio"}, {"MP": "[20166] ARO JALAPEÑO  VF-318-548-3", "SKU": 20166, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 36.0, "%volumen total": 0.0006287992542189326, "Mes": "Junio"}, {"MP": "[20168] COLORANTE CARAMELO 3162", "SKU": 20168, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20169] COMPLEX 80i", "SKU": 20169, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}], "kpi_logistica": [{"mes": "Enero", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.991, "meta": 0.98, "comentario": ""}, {"mes": "Enero", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 1, "comentario": ""}, {"mes": "Enero", "indicador": "Exactitud de Inventario MP", "valor": 0.9936, "meta": 0.98, "comentario": ""}, {"mes": "Enero", "indicador": "Dias de inventario disponible", "valor": 31.0, "meta": 18, "comentario": ""}, {"mes": "Enero", "indicador": "Exactitud de Picking B2B", "valor": 0.9798, "meta": 0.95, "comentario": ""}, {"mes": "Enero", "indicador": "Exactitud de Picking B2C", "valor": 0.9921, "meta": 0.99, "comentario": ""}, {"mes": "Enero", "indicador": "Cantidad de pedidos por canal B2B", "valor": 198.0, "meta": null, "comentario": ""}, {"mes": "Enero", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1389.0, "meta": null, "comentario": ""}, {"mes": "Enero", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 22.3, "meta": 48, "comentario": ""}, {"mes": "Enero", "indicador": "Quiebre de stock ", "valor": 0, "meta": 0, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.9889, "meta": 0.98, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 1, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Inventario MP", "valor": 0.9956, "meta": 0.98, "comentario": ""}, {"mes": "Febrero", "indicador": "Dias de inventario disponible", "valor": 18.0, "meta": 18, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Picking B2B", "valor": 0.9668, "meta": 0.95, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Picking B2C", "valor": 0.9978, "meta": 0.99, "comentario": ""}, {"mes": "Febrero", "indicador": "Cantidad de pedidos por canal B2B", "valor": 211.0, "meta": null, "comentario": ""}, {"mes": "Febrero", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1336.0, "meta": null, "comentario": ""}, {"mes": "Febrero", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 17.07, "meta": 48, "comentario": ""}, {"mes": "Febrero", "indicador": "Quiebre de stock ", "valor": 5.0, "meta": 0, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.9838, "meta": 0.98, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 1, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Inventario MP", "valor": 0.9958, "meta": 0.98, "comentario": ""}, {"mes": "Marzo", "indicador": "Dias de inventario disponible", "valor": 15.0, "meta": 18, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Picking B2B", "valor": 0.9845, "meta": 0.95, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Picking B2C", "valor": 0.9972, "meta": 0.99, "comentario": ""}, {"mes": "Marzo", "indicador": "Cantidad de pedidos por canal B2B", "valor": 258.0, "meta": null, "comentario": ""}, {"mes": "Marzo", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1422.0, "meta": null, "comentario": ""}, {"mes": "Marzo", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 19.52, "meta": 48, "comentario": ""}, {"mes": "Marzo", "indicador": "Quiebre de stock ", "valor": 7.0, "meta": 0, "comentario": ""}, {"mes": "Abril", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.9904, "meta": 0.98, "comentario": ""}, {"mes": "Abril", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 0.98, "comentario": ""}, {"mes": "Abril", "indicador": "Exactitud de Inventario MP", "valor": 0.933, "meta": 0.98, "comentario": "Se realizo un ajuste de 15,000 unidade de doypacks de pancake de vainilla - diferencia que se arrastra desde la reimplementacion del sistema."}, {"mes": "Abril", "indicador": "Exactitud de Picking B2B", "valor": 0.9782, "meta": 0.95, "comentario": ""}, {"mes": "Abril", "indicador": "Exactitud de Picking B2C", "valor": 0.9956, "meta": 0.99, "comentario": ""}, {"mes": "Abril", "indicador": "Cantidad de pedidos por canal B2B", "valor": 229.0, "meta": null, "comentario": ""}, {"mes": "Abril", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1139.0, "meta": null, "comentario": ""}, {"mes": "Abril", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 19.61, "meta": 24, "comentario": ""}, {"mes": "Abril", "indicador": "Quiebre de stock ", "valor": 0, "meta": 0, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.9942, "meta": 0.98, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 0.98, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Inventario MP", "valor": 0.9988, "meta": 0.98, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Picking B2B", "valor": 0.9922, "meta": 0.99, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Picking B2C", "valor": 0.9983, "meta": 0.99, "comentario": ""}, {"mes": "Mayo", "indicador": "Cantidad de pedidos por canal B2B", "valor": 225.0, "meta": null, "comentario": ""}, {"mes": "Mayo", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1153.0, "meta": null, "comentario": ""}, {"mes": "Mayo", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 15.31, "meta": 24, "comentario": ""}, {"mes": "Mayo", "indicador": "Quiebre de stock ", "valor": 2.0, "meta": 0, "comentario": "Pancake de queso (Faltante de MP: queso duro)  Pancake de chocolate y avellanas (Faltante doypacks)"}, {"mes": "Junio", "indicador": "Exactitud de Inventario PT Planta", "valor": 99.76, "meta": 0.98, "comentario": ""}, {"mes": "Junio", "indicador": "Exactitud de Inventario PT Enbox", "valor": 99.66, "meta": 0.98, "comentario": ""}, {"mes": "Junio", "indicador": "Exactitud de Inventario MP", "valor": 99.97, "meta": 0.98, "comentario": ""}, {"mes": "Junio", "indicador": "Exactitud de Picking B2B", "valor": 98.9, "meta": 0.99, "comentario": ""}, {"mes": "Junio", "indicador": "Exactitud de Picking B2C", "valor": 99.74, "meta": 0.99, "comentario": ""}, {"mes": "Junio", "indicador": "Cantidad de pedidos por canal B2B", "valor": 273.0, "meta": null, "comentario": ""}, {"mes": "Junio", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1147.0, "meta": null, "comentario": ""}, {"mes": "Junio", "indicador": "Tiempo de Procesamiento de Pedido ", "valor": 19.5, "meta": 24, "comentario": ""}, {"mes": "Junio", "indicador": "Ciclo completo de pedido", "valor": 62.99, "meta": 65, "comentario": ""}, {"mes": "Junio", "indicador": "Quiebre de stock ", "valor": 2.0, "meta": 0, "comentario": "Pancake de queso (Faltante de MP: queso duro)  Pancake caprese (Faltante de MP: aro caprese)"}], "kpi_compras": [{"mes": "Enero", "indicador": "Lead Time de insumos productivos - Días", "valor": 7.65, "meta": 7, "comentario": ""}, {"mes": "Enero", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 87.5, "meta": 98, "comentario": ""}, {"mes": "Enero", "indicador": "Plazo de pagos - Días", "valor": 41.0, "meta": 60, "comentario": ""}, {"mes": "Enero", "indicador": "Nivel de cumplimiento OC - %", "valor": 98.0, "meta": 100, "comentario": ""}, {"mes": "Febrero", "indicador": "Lead Time de insumos productivos - Días", "valor": 8.6, "meta": 7, "comentario": ""}, {"mes": "Febrero", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 90.0, "meta": 98, "comentario": ""}, {"mes": "Febrero", "indicador": "Plazo de pagos - Días", "valor": 42.2, "meta": 60, "comentario": ""}, {"mes": "Febrero", "indicador": "Nivel de cumplimiento OC - %", "valor": 92.0, "meta": 100, "comentario": ""}, {"mes": "Marzo", "indicador": "Lead Time de insumos productivos - Días", "valor": 6.77, "meta": 7, "comentario": ""}, {"mes": "Marzo", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 83.87, "meta": 98, "comentario": ""}, {"mes": "Marzo", "indicador": "Plazo de pagos - Días", "valor": 42.78, "meta": 60, "comentario": ""}, {"mes": "Marzo", "indicador": "Nivel de cumplimiento OC - %", "valor": 99.33, "meta": 100, "comentario": ""}, {"mes": "Abril", "indicador": "Lead Time de insumos productivos - Días", "valor": 6.2, "meta": 7, "comentario": ""}, {"mes": "Abril", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 90.38, "meta": 98, "comentario": ""}, {"mes": "Abril", "indicador": "Plazo de pagos - Días", "valor": 42.78, "meta": 60, "comentario": ""}, {"mes": "Abril", "indicador": "Nivel de cumplimiento OC - %", "valor": 97.92, "meta": 100, "comentario": "Disminuye por leche descremada (La Ramada)"}, {"mes": "Mayo", "indicador": "Lead Time de insumos productivos - Días", "valor": 6.76, "meta": 7, "comentario": "Los lead times se extendieron por pedidos de entrega a fines de mayo solicitados para Narufarma."}, {"mes": "Mayo", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 78.43, "meta": 98, "comentario": "Los retrasos fueron mínimos: máximo 3 días y, en la mayoría de los casos, de 1 día."}, {"mes": "Mayo", "indicador": "Plazo de pagos - Días", "valor": 45.0, "meta": 60, "comentario": "Warneke a 30 días e Industrias de Avena 60 días"}, {"mes": "Mayo", "indicador": "Nivel de cumplimiento OC - %", "valor": 90.38, "meta": 100, "comentario": "Retrasos en Aro caprese y Fibra citric"}, {"mes": "Junio", "indicador": "Lead Time de insumos productivos - Días", "valor": 5.42, "meta": 7, "comentario": ""}, {"mes": "Junio", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 93.55, "meta": 98, "comentario": "Harmony: No se entrego aun aro caprese"}, {"mes": "Junio", "indicador": "Plazo de pagos - Días", "valor": 45.0, "meta": 60, "comentario": ""}, {"mes": "Junio", "indicador": "Nivel de cumplimiento OC - %", "valor": 93.55, "meta": 100, "comentario": "Proveedor Elementa: demora en el abastecimiento de Harina de Lupino - Proveedor Dharma: Se entregaron 2 bolsas menos, reponen en proximo pedido."}], "tiempos_b2c": [{"provincia": "TIERRA DEL FUEGO", "operador": "OCA", "tiempo": 12, "ideal": "4 - 8+"}, {"provincia": "CHACO", "operador": "OCA", "tiempo": 9.6, "ideal": "3 - 9"}, {"provincia": "MISIONES", "operador": "OCA", "tiempo": 8.363636363636363, "ideal": "3 - 9"}, {"provincia": "FORMOSA", "operador": "OCA", "tiempo": 8.272727272727273, "ideal": "3 - 9"}, {"provincia": "LA PAMPA", "operador": "OCA", "tiempo": 7.888888888888889, "ideal": "4 - 8+"}, {"provincia": "SGO. DEL ESTERO", "operador": "OCA", "tiempo": 7.8, "ideal": "3 - 9"}, {"provincia": "SANTA FE", "operador": "OCA", "tiempo": 7.767605633802817, "ideal": "3 - 5"}, {"provincia": "RIO NEGRO", "operador": "OCA", "tiempo": 7.630434782608695, "ideal": "4 - 8+"}, {"provincia": "MENDOZA", "operador": "OCA", "tiempo": 7.46875, "ideal": "5 - 7"}, {"provincia": "JUJUY", "operador": "OCA", "tiempo": 7.428571428571429, "ideal": "3 - 9"}, {"provincia": "CHUBUT", "operador": "OCA", "tiempo": 7.388888888888889, "ideal": "4 - 8+"}, {"provincia": "LA RIOJA", "operador": "OCA", "tiempo": 7.2, "ideal": "3 - 9"}, {"provincia": "CATAMARCA", "operador": "OCA", "tiempo": 7.142857142857143, "ideal": "3 - 9"}, {"provincia": "NEUQUEN", "operador": "OCA", "tiempo": 7.112676056338028, "ideal": "4 - 8+"}, {"provincia": "CORRIENTES", "operador": "OCA", "tiempo": 6.888888888888889, "ideal": "3 - 9"}, {"provincia": "SAN JUAN", "operador": "OCA", "tiempo": 6.846153846153846, "ideal": "5 - 7"}, {"provincia": "SAN LUIS", "operador": "OCA", "tiempo": 6.714285714285714, "ideal": "5 - 7"}, {"provincia": "SALTA", "operador": "OCA", "tiempo": 6.714285714285714, "ideal": "3 - 9"}, {"provincia": "CORDOBA", "operador": "OCA", "tiempo": 6.183206106870229, "ideal": "3 - 5"}, {"provincia": "TUCUMAN", "operador": "OCA", "tiempo": 6, "ideal": "3 - 9"}, {"provincia": "BUENOS AIRES", "operador": "OCA", "tiempo": 5.903682719546742, "ideal": "3 - 5"}, {"provincia": "ENTRE RIOS", "operador": "OCA", "tiempo": 5.517241379310345, "ideal": "3 - 5"}, {"provincia": "CAPITAL FEDERAL", "operador": "OCA", "tiempo": 3, "ideal": "3 - 5"}, {"provincia": "Zona 1", "operador": "Enbox", "tiempo": "21h 56m", "ideal": "24-48 hs"}, {"provincia": "Zona 2", "operador": "Enbox", "tiempo": "21h 50m", "ideal": "24-48 hs"}, {"provincia": "Zona 3", "operador": "Enbox", "tiempo": "21h 23m", "ideal": "24-48 hs"}, {"provincia": "Zona 4", "operador": "Enbox", "tiempo": "20h 50m", "ideal": "24-48 hs"}, {"provincia": "Zona 5 (Interior)", "operador": "Enbox", "tiempo": "6h 47m", "ideal": "24-48 hs"}], "log_summary": {"by_mes": {"Enero": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 114, "unidades": 56888}, "B2C|Granger S.A.": {"pedidos": 143, "unidades": 1100}, "B2B|ENBOX": {"pedidos": 66, "unidades": 20076}, "B2C|ENBOX": {"pedidos": 641, "unidades": 2528}, "B2C|MELI FULL": {"pedidos": 630, "unidades": 1493}}, "prov_counts": {"Buenos Aires": 1103, "Santa Fe": 139, "Córdoba": 115, "Neuquén": 40, "Mendoza": 34, "Entre Ríos": 31, "Río Negro, Argentina": 26, "Tucumán": 16, "Chubut": 15, "San Juan": 11, "Chaco": 8, "Corrientes": 8, "Misiones": 8, "Santa Cruz": 7, "Jujuy": 6, "La Pampa": 5, "San Luis": 5, "Santiago Del Estero": 5, "Salta": 5, "Catamarca": 5, "La Rioja": 2}, "transp_b2b": {"Enbox": 78, "Via Cargo": 39, "Expreso Santa Rosa": 27, "Transporte Anibal": 6, "Transporte MJ": 4}, "transp_b2c": {"Mercado Libre": 630, "Enbox": 571, "OCA": 213}}, "Febrero": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 155, "unidades": 78825}, "B2C|Granger S.A.": {"pedidos": 281, "unidades": 2076}, "B2B|ENBOX": {"pedidos": 84, "unidades": 38092}, "B2C|ENBOX": {"pedidos": 670, "unidades": 2827}, "B2C|MELI FULL": {"pedidos": 409, "unidades": 976}}, "prov_counts": {"Buenos Aires": 1184, "Santa Fe": 98, "Córdoba": 81, "Neuquén": 37, "Mendoza": 33, "Río Negro, Argentina": 23, "Tucumán": 18, "San Juan": 17, "Santiago Del Estero": 15, "Entre Ríos": 15, "Salta": 13, "San Luis": 11, "Chubut": 8, "La Pampa": 7, "Chaco": 6, "Corrientes": 6, "Misiones": 6, "Santa Cruz": 6, "Tierra del Fuego": 4, "Catamarca": 4, "Jujuy": 3, "La Rioja": 2, "Formosa": 2}, "transp_b2b": {"Enbox": 109, "Via Cargo": 65, "Expreso Santa Rosa": 27, "Transporte Anibal": 6, "Transporte MJ": 6, "OCA": 3}, "transp_b2c": {"Enbox": 701, "Mercado Libre": 409, "OCA": 250}}, "Marzo": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 175, "unidades": 102075}, "B2C|Granger S.A.": {"pedidos": 343, "unidades": 2318}, "B2B|ENBOX": {"pedidos": 94, "unidades": 48971}, "B2C|ENBOX": {"pedidos": 731, "unidades": 2888}, "B2C|MELI FULL": {"pedidos": 483, "unidades": 1152}}, "prov_counts": {"Buenos Aires": 1314, "Santa Fe": 130, "Córdoba": 105, "Neuquén": 60, "Mendoza": 42, "Río Negro, Argentina": 31, "Tucumán": 24, "Chubut": 14, "Entre Ríos": 13, "San Juan": 12, "La Pampa": 12, "Chaco": 11, "Santiago Del Estero": 9, "Salta": 8, "Jujuy": 7, "Santa Cruz": 7, "Formosa": 6, "Corrientes": 5, "La Rioja": 5, "San Luis": 4, "Misiones": 4, "Catamarca": 3}, "transp_b2b": {"Enbox": 126, "Via Cargo": 63, "Expreso Santa Rosa": 32, "Transporte MJ": 9, "Transporte Anibal": 9}, "transp_b2c": {"Enbox": 777, "Mercado Libre": 483, "OCA": 296, "Via Cargo": 1}}, "Abril": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 167, "unidades": 103241}, "B2C|Granger S.A.": {"pedidos": 330, "unidades": 2009}, "B2B|ENBOX": {"pedidos": 91, "unidades": 48646}, "B2C|ENBOX": {"pedidos": 546, "unidades": 2052}, "B2C|MELI FULL": {"pedidos": 396, "unidades": 813}}, "prov_counts": {"Buenos Aires": 1092, "Santa Fe": 115, "Córdoba": 96, "Neuquén": 37, "Mendoza": 31, "Río Negro, Argentina": 31, "Tucumán": 23, "Entre Ríos": 15, "Santiago Del Estero": 12, "San Juan": 9, "Chubut": 9, "Salta": 8, "Chaco": 6, "La Pampa": 6, "Jujuy": 6, "Misiones": 6, "San Luis": 5, "Santa Cruz": 5, "Tierra del Fuego": 4, "Formosa": 4, "Catamarca": 3, "La Rioja": 3, "Corrientes": 2}, "transp_b2b": {"Enbox": 120, "Via Cargo": 66, "Expreso Santa Rosa": 22, "Transporte MJ": 9, "Transporte Anibal": 7, "OCA": 3}, "transp_b2c": {"Enbox": 611, "Mercado Libre": 396, "OCA": 265}}, "Mayo": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 130, "unidades": 70475}, "Exportación|Granger S.A.": {"pedidos": 2, "unidades": 8616}, "B2C|Granger S.A.": {"pedidos": 521, "unidades": 2472}, "B2B|ENBOX": {"pedidos": 94, "unidades": 60548}, "B2C|ENBOX": {"pedidos": 453, "unidades": 1817}, "B2C|MELI FULL": {"pedidos": 246, "unidades": 501}}, "prov_counts": {"Buenos Aires": 1018, "Santa Fe": 104, "Córdoba": 99, "Neuquén": 48, "Mendoza": 38, "Río Negro, Argentina": 19, "Tucumán": 18, "Entre Ríos": 16, "San Juan": 12, "Chubut": 11, "Salta": 7, "Chaco": 7, "Santiago Del Estero": 6, "La Pampa": 6, "San Luis": 6, "Jujuy": 6, "Formosa": 6, "Corrientes": 5, "Misiones": 5, "Tierra del Fuego": 2, "Catamarca": 2, "Santa Cruz": 2, "Maldonado": 1, "Asunción": 1, "La Rioja": 1}, "transp_b2b": {"Enbox": 115, "Via Cargo": 53, "Expreso Santa Rosa": 15, "Transporte MJ": 9, "Transporte Anibal": 6, "OCA": 1}, "transp_b2c": {"Enbox": 640, "OCA": 330, "Mercado Libre": 246, "Via Cargo": 4}}, "Junio": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 127, "unidades": 62152}, "B2C|Granger S.A.": {"pedidos": 347, "unidades": 1973}, "B2B|ENBOX": {"pedidos": 87, "unidades": 54696}, "B2C|ENBOX": {"pedidos": 506, "unidades": 2083}, "B2C|MELI FULL": {"pedidos": 348, "unidades": 917}}, "prov_counts": {"Buenos Aires": 959, "Santa Fe": 105, "Córdoba": 89, "Neuquén": 41, "Mendoza": 33, "Tucumán": 28, "Río Negro, Argentina": 22, "Entre Ríos": 22, "San Juan": 14, "Salta": 14, "Chubut": 14, "La Pampa": 12, "San Luis": 11, "Chaco": 7, "Santiago Del Estero": 7, "Jujuy": 7, "Misiones": 7, "Santa Cruz": 6, "La Rioja": 5, "Corrientes": 4, "Formosa": 4, "Catamarca": 4}, "transp_b2b": {"Enbox": 91, "Via Cargo": 68, "Expreso Santa Rosa": 11, "Transporte MJ": 10, "Transporte Anibal": 9}, "transp_b2c": {"Enbox": 586, "Mercado Libre": 348, "OCA": 267}}, "Julio": {"canal_almacen": {"B2C|Granger S.A.": {"pedidos": 2, "unidades": 13}, "B2C|ENBOX": {"pedidos": 12, "unidades": 46}, "B2C|MELI FULL": {"pedidos": 20, "unidades": 56}}, "prov_counts": {"Buenos Aires": 25, "Santa Fe": 6, "Córdoba": 1, "Entre Ríos": 1, "Tucumán": 1}, "transp_b2b": {}, "transp_b2c": {"Mercado Libre": 20, "Enbox": 13, "OCA": 1}}, "Diciembre": {"canal_almacen": {"B2C|ENBOX": {"pedidos": 1, "unidades": 1}}, "prov_counts": {"Buenos Aires": 1}, "transp_b2b": {}, "transp_b2c": {"Enbox": 1}}}, "prov_counts_total": {"Buenos Aires": 5711, "Santa Fe": 586, "Córdoba": 496, "Neuquén": 222, "Mendoza": 178, "Entre Ríos": 90, "Río Negro, Argentina": 130, "Tucumán": 99, "Chubut": 57, "San Juan": 61, "Chaco": 38, "Corrientes": 26, "Misiones": 29, "Santa Cruz": 27, "Jujuy": 28, "La Pampa": 36, "San Luis": 31, "Santiago Del Estero": 47, "Salta": 41, "Catamarca": 17, "La Rioja": 13, "Tierra del Fuego": 10, "Formosa": 18, "Maldonado": 1, "Asunción": 1}, "prov_weekly": {"Buenos Aires": 264.8, "Santa Fe": 27.2, "Córdoba": 23.0, "Neuquén": 10.3, "Mendoza": 8.3, "Entre Ríos": 4.2, "Río Negro, Argentina": 6.0, "Tucumán": 4.6, "Chubut": 2.6, "San Juan": 2.8, "Chaco": 1.8, "Corrientes": 1.2, "Misiones": 1.3, "Santa Cruz": 1.3, "Jujuy": 1.3, "La Pampa": 1.7, "San Luis": 1.4, "Santiago Del Estero": 2.2, "Salta": 1.9, "Catamarca": 0.8, "La Rioja": 0.6, "Tierra del Fuego": 0.5, "Formosa": 0.8, "Maldonado": 0.0, "Asunción": 0.0}, "meses_disponibles": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Diciembre"]}, "meses": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], "kg_by_mes": {"Enero": 48115, "Febrero": 81659, "Marzo": 166907, "Abril": 188531, "Mayo": 172538, "Junio": 189418}, "mp_list": [{"sku": "20099", "nombre": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "proveedor": "Dgrx / Industria de Avena", "moneda": "USD", "costos": {"Enero": 1.2, "Febrero": 1.2, "Marzo": 1.2, "Abril": 1.2, "Mayo": 1.2, "Junio": 1.2, "Julio": 1.2}, "lead_time": {"Enero": 6, "Febrero": 6, "Marzo": 28.2, "Abril": 14.3, "Mayo": 7.5, "Junio": 15.4}, "cond_pago": {"Enero": 45, "Febrero": 45, "Marzo": 45, "Abril": 45, "Mayo": 45, "Junio": 45}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20044", "nombre": "[20044] HUEVO EN POLVO", "proveedor": "Ovobrand", "moneda": "$", "costos": {"Enero": 12500, "Febrero": 12500, "Marzo": 12500, "Abril": 13200, "Mayo": 13200, "Junio": 13600, "Julio": 13600}, "lead_time": {"Enero": 7.1, "Febrero": 12.3, "Marzo": 8.1, "Abril": 14, "Mayo": 2.3, "Junio": 7.2}, "cond_pago": {"Enero": 60, "Febrero": 60, "Marzo": 60, "Abril": 60, "Mayo": 60, "Junio": 60}, "var_ene_jul": 0.08800000000000008, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20046", "nombre": "[20046] LECHE DESCREMADA", "proveedor": "Ramolac / La Ramada", "moneda": "$", "costos": {"Enero": 4060, "Febrero": 4300, "Marzo": 4400, "Abril": 4700, "Mayo": 4900, "Junio": 5000, "Julio": 5000}, "lead_time": {"Enero": 7.1, "Febrero": 7, "Marzo": 13.6, "Abril": 6.1, "Mayo": 18.6, "Junio": 11.5}, "cond_pago": {"Enero": 45, "Febrero": 45, "Marzo": 60, "Abril": 60, "Mayo": 60, "Junio": 60}, "var_ene_jul": 0.23152709359605916, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20128", "nombre": "[20128] WPC 34", "proveedor": "Molfino Hnos", "moneda": "$", "costos": {"Enero": 4030.63, "Febrero": 4395, "Marzo": 4460.92, "Abril": 4500, "Mayo": 4900, "Junio": 4900, "Julio": 5000}, "lead_time": {"Enero": 4, "Febrero": 7.3, "Marzo": 6.8, "Abril": 2.3, "Mayo": 3, "Junio": 3.9}, "cond_pago": {"Enero": 21, "Febrero": 28, "Marzo": 30, "Abril": 30, "Mayo": 30, "Junio": 30}, "var_ene_jul": 0.2405008646291027, "var_mes_ant": 0.02040816326530612, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20051", "nombre": "[20051] POLVO DE HORNEAR", "proveedor": "Aditivos Alimentarios", "moneda": "USD", "costos": {"Enero": 2.29, "Febrero": 2.29, "Marzo": 2.29, "Abril": 2.32, "Mayo": 2.43, "Junio": 2.48, "Julio": 2.48}, "lead_time": {"Enero": 8.1, "Febrero": 13.3, "Marzo": 8.9, "Abril": 3, "Mayo": 5.6, "Junio": 7}, "cond_pago": {"Enero": 30, "Febrero": 30, "Marzo": 30, "Abril": 30, "Mayo": 30, "Junio": 30}, "var_ene_jul": 0.08296943231441056, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20015", "nombre": "[20015] CACAO", "proveedor": "Harmony", "moneda": "USD", "costos": {"Enero": 6.5, "Febrero": 6.5, "Marzo": 6.5, "Abril": 6.5, "Mayo": 5.9, "Junio": 5.9, "Julio": 5.9}, "lead_time": {"Enero": 15.1, "Febrero": 18.2, "Marzo": 19.1, "Abril": 10.3, "Mayo": 18.9, "Junio": 9.1}, "cond_pago": {"Enero": 60, "Febrero": 60, "Marzo": 60, "Abril": 60, "Mayo": 60, "Junio": 60}, "var_ene_jul": -0.0923076923076922, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20130", "nombre": "[20130] HARINA DE LUPINO TEXTURIZADA", "proveedor": "Elementa", "moneda": "USD", "costos": {"Enero": 4.7, "Febrero": 4.7, "Marzo": 4.5, "Abril": 4.5, "Mayo": 4.5, "Junio": 4.5, "Julio": 4.5}, "lead_time": {"Enero": 1.6, "Marzo": 6, "Abril": 7.1, "Mayo": 4.1}, "cond_pago": {"Enero": 15, "Febrero": 15, "Marzo": 15, "Abril": 15, "Mayo": 30, "Junio": 30}, "var_ene_jul": -0.042553191489361764, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20058", "nombre": "[20058] SUCRALOSA", "proveedor": "Pampa Trade", "moneda": "USD", "costos": {"Enero": 23, "Febrero": 23, "Marzo": 23, "Abril": 23, "Mayo": 19.5, "Junio": 19.5, "Julio": 19.5}, "lead_time": {"Enero": 7.6, "Marzo": 18.2, "Abril": 10.3, "Mayo": 18.9, "Junio": 3.1}, "cond_pago": {"Enero": 60, "Febrero": 60, "Marzo": 60, "Abril": 60, "Mayo": 60, "Junio": 60}, "var_ene_jul": -0.15217391304347827, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20038", "nombre": "[20038] HARINA DE ALMENDRAS", "proveedor": "Warneke / Melar", "moneda": "$", "costos": {"Enero": 19703.1, "Febrero": 19703.1, "Marzo": 19703.1, "Abril": 19703.1, "Mayo": 19703.1, "Junio": 19703.1, "Julio": 19703.1}, "lead_time": {"Enero": 9.1, "Febrero": 15.3, "Marzo": 8.9, "Abril": 14.6, "Mayo": 10.6, "Junio": 10.2}, "cond_pago": {"Enero": 20, "Febrero": 20, "Marzo": 25, "Abril": 25, "Mayo": 25, "Junio": 25}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20018", "nombre": "[20018] COLAGENO MP", "proveedor": "PB Leiner", "moneda": "USD", "costos": {"Enero": 9.5, "Febrero": 9.5, "Marzo": 9.5, "Abril": 9.5, "Mayo": 9.7, "Junio": 9.7, "Julio": 9.7}, "lead_time": {"Febrero": 14.3, "Abril": 14.3, "Mayo": 8, "Junio": 31.9}, "cond_pago": {"Enero": 30, "Febrero": 30, "Marzo": 30, "Abril": 30, "Mayo": 30, "Junio": 30}, "var_ene_jul": 0.021052631578947212, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20065", "nombre": "[20065] ARO VAINILLA PIEDMONT 101.090", "proveedor": "Piedmont", "moneda": "USD", "costos": {"Enero": 30.37, "Febrero": 30.37, "Marzo": 30.37, "Abril": 30.37, "Mayo": 30.37, "Junio": 30.37, "Julio": 30.37}, "lead_time": {"Enero": 8.1, "Marzo": 7, "Abril": 9.3, "Mayo": 9.1, "Junio": 7.2}, "cond_pago": {"Enero": 30, "Febrero": 30, "Marzo": 30, "Abril": 30, "Mayo": 30, "Junio": 30}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20042", "nombre": "[20042] HARINA DE MANI", "proveedor": "Le Fit", "moneda": "$", "costos": {"Enero": 8900, "Febrero": 8900, "Marzo": 8900, "Abril": 8900, "Mayo": 8900, "Junio": 8900, "Julio": 8900}, "lead_time": {"Enero": 17, "Febrero": 0, "Marzo": 16, "Abril": 1.7, "Mayo": 3.2, "Junio": 11}, "cond_pago": {"Enero": 15, "Febrero": 15, "Marzo": 30, "Abril": 30, "Mayo": 30, "Junio": 30}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20070", "nombre": "[20070] ALMIDON DE MAIZ", "proveedor": "Dharma", "moneda": "$", "costos": {"Enero": 1190, "Febrero": 1230, "Marzo": 1230, "Abril": 1290, "Mayo": 1350, "Junio": 1390, "Julio": 1417.8}, "lead_time": {"Enero": 8.1, "Febrero": 0, "Marzo": 19.2, "Abril": 15.2, "Mayo": 8.9, "Junio": 4}, "cond_pago": {"Enero": 30, "Febrero": 30, "Marzo": 30, "Abril": 30, "Mayo": 30, "Junio": 30}, "var_ene_jul": 0.19142857142857128, "var_mes_ant": 0.019999999999999966, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20004", "nombre": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "proveedor": "Fryma", "moneda": "USD", "costos": {"Enero": 23.69, "Febrero": 23.69, "Marzo": 23.69, "Abril": 23.69, "Mayo": 23.69, "Junio": 23.69, "Julio": 23.69}, "lead_time": {"Marzo": 9.1, "Abril": 6.8, "Mayo": 13.2, "Junio": 12}, "cond_pago": {"Enero": 60, "Febrero": 60, "Marzo": 60, "Abril": 60, "Mayo": 60, "Junio": 60}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20089", "nombre": "[20089] INULINA ORAFTI HSI", "proveedor": "Saporiti", "moneda": "USD", "costos": {"Enero": 6.4, "Febrero": 6.4, "Marzo": 6.6, "Abril": 6.6, "Mayo": 6.6, "Junio": 6.6, "Julio": 6.6}, "lead_time": {"Marzo": 16.5, "Abril": 1.8, "Mayo": 3.2, "Junio": 17.2}, "cond_pago": {"Enero": 45, "Febrero": 45, "Marzo": 45, "Abril": 45, "Mayo": 45, "Junio": 45}, "var_ene_jul": 0.031249999999999778, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}]};

const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

// Argentina province centroids (SVG coordinate space ~600x780)
const PROV_COORDS = {
  'Buenos Aires':     {x:375,y:470},
  'Santa Fe':         {x:345,y:355},
  'Córdoba':          {x:295,y:360},
  'Mendoza':          {x:215,y:420},
  'Tucumán':          {x:280,y:230},
  'Entre Ríos':       {x:380,y:395},
  'Salta':            {x:270,y:175},
  'Chaco':            {x:335,y:255},
  'Corrientes':       {x:385,y:310},
  'Misiones':         {x:415,y:280},
  'Santiago Del Estero':{x:305,y:295},
  'San Juan':         {x:228,y:370},
  'Jujuy':            {x:260,y:148},
  'Río Negro, Argentina':{x:245,y:550},
  'Neuquén':          {x:215,y:505},
  'Formosa':          {x:310,y:200},
  'La Pampa':         {x:270,y:490},
  'Chubut':           {x:240,y:630},
  'San Luis':         {x:255,y:430},
  'Catamarca':        {x:255,y:265},
  'La Rioja':         {x:245,y:310},
  'Santa Cruz':       {x:248,y:710},
  'Tierra del Fuego': {x:262,y:790},
};

// Granger-aligned chart palette
const CP = ['#22201c','#f18a00','#f49b31','#f9be78','#3b3836','#b0c8e9','#d97706','#dc2626','#16a34a','#7c3aed'];

Chart.defaults.color = '#6b7280';
Chart.defaults.borderColor = 'rgba(0,0,0,0.06)';
Chart.defaults.font.family = 'DM Sans';

// Chart instance registry
const CHARTS = {};
function mkChart(id, type, data, opts) {
  if (CHARTS[id]) CHARTS[id].destroy();
  const el = document.getElementById(id);
  if (!el) return;
  CHARTS[id] = new Chart(el, {type, data, options: opts});
  return CHARTS[id];
}

// ── STATE ─────────────────────────────────────────────────────
let currentMes = 'Mayo';
// pedidosMode reemplazado por currentCanal (B2C/B2B)

// ── NAV ───────────────────────────────────────────────────────
function showPage(page, el) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  el.classList.add('active');
  document.getElementById('page-title').textContent = el.textContent.trim();
  setTimeout(function(){ renderAll(); if(page==='materias'){setTimeout(renderSparklines,80);} }, 30);
}

// ── INIT ──────────────────────────────────────────────────────
function init() {
  const sel = document.getElementById('mes-select');
  const mesesPresentes = [...new Set(RAW.eficiencia.map(r=>r.mes))];
  MESES.filter(m=>mesesPresentes.includes(m)).forEach(m=>{
    const o = document.createElement('option');
    o.value=m; o.textContent=m;
    if(m==='Mayo') o.selected=true;
    sel.appendChild(o);
  });
  currentMes = sel.value;

  // Forecast product filter
  const pf = document.getElementById('prod-filter');
  var skuMap={}; RAW.forecast.forEach(function(r){skuMap[r.sku]=r.producto;}); var skus=[...new Set(RAW.forecast.map(r=>r.sku))].sort(function(a,b){return String(a).localeCompare(String(b));}); skus.forEach(function(sku){var o=document.createElement('option');o.value=String(sku);o.textContent=(skuMap[sku]||String(sku)).slice(0,30);pf.appendChild(o);});

  // KPI compras selector
  const kcs = document.getElementById('kpi-compras-select');
  [...new Set(RAW.kpi_compras.map(r=>r.indicador))].forEach(i=>{
    const o=document.createElement('option'); o.value=i; o.textContent=i; kcs.appendChild(o);
  });

  document.getElementById('last-upd').textContent = 'Datos actualizados';
  renderAll();
}

function renderAll() {
  currentMes = document.getElementById('mes-select').value;
  renderProduccion();
  renderLogistica();
  renderCompras();
}

// ── HELPERS ───────────────────────────────────────────────────
function fmtN(n, decimals=0) {
  if (n==null||isNaN(n)) return '—';
  return n.toLocaleString('es-AR', {minimumFractionDigits:decimals, maximumFractionDigits:decimals});
}
function fmtPct(n) { return (n*100).toFixed(1)+'%'; }
function semColor(v, up=true) {
  // up=true: higher is better
  return up ? (v>=0.97?'#16a34a':v>=0.9?'#d97706':'#dc2626') : (v<=1.05?'#16a34a':v<=1.15?'#d97706':'#dc2626');
}

function barOptsWithLabels(stacked=false) {
  return {
    responsive:true, maintainAspectRatio:false,
    plugins:{
      legend:{display:true,labels:{color:'#4b5563',font:{size:11},boxWidth:10,padding:12}},
      tooltip:{mode:'index',intersect:false},
      datalabels: false
    },
    scales:{
      x:{stacked,grid:{display:false},ticks:{color:'#9ca3af',font:{size:10}}},
      y:{stacked,grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',font:{size:10},callback:v=>fmtN(v)}}
    }
  };
}

// Custom plugin to show values on top of bars
const topLabelPlugin = {
  id:'topLabel',
  afterDatasetsDraw(chart) {
    // Only run on bar charts, skip doughnut/pie
    if(chart.config.type==='doughnut'||chart.config.type==='pie') return;
    const {ctx} = chart;
    chart.data.datasets.forEach((ds,i)=>{
      const meta = chart.getDatasetMeta(i);
      if(meta.hidden) return;
      meta.data.forEach((bar,j)=>{
        const val = ds.data[j];
        if(val==null||val===0) return;
        const {x,y} = bar.getCenterPoint();
        const top = bar.y;
        ctx.save();
        ctx.font = '600 9px DM Sans';
        ctx.fillStyle = '#374151';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(fmtN(val), x, top-2);
        ctx.restore();
      });
    });
  }
};
Chart.register(topLabelPlugin);

// ── PRODUCCIÓN ────────────────────────────────────────────────
function renderProduccion() {
  const ef = RAW.eficiencia.filter(r=>r.mes===currentMes);
  if(!ef.length) return;

  const totalEf = ef.reduce((s,r)=>s+r.efectiva,0);
  const totalPl = ef.reduce((s,r)=>s+r.planificada,0);
  const totalCap = ef.reduce((s,r)=>s+r.capacidad,0);
  const efRows = ef.filter(r=>r.ef_ef_pl>0);
  const avgEfEfPl = efRows.length ? efRows.reduce((s,r)=>s+r.ef_ef_pl,0)/efRows.length : 0;
  const efCapRows = ef.filter(r=>r.ef_pl_cap>0);
  const avgEfPlCap = efCapRows.length ? efCapRows.reduce((s,r)=>s+r.ef_pl_cap,0)/efCapRows.length : 0;
  const totalOrdenes = ef.reduce((s,r)=>s+r.ordenes,0);

  // Quiebre de stock del mes seleccionado
  const quiebreRow = RAW.kpi_logistica.find(r=>r.mes===currentMes&&r.indicador.includes('Quiebre'));
  const quiebre = quiebreRow ? quiebreRow.valor : 0;

  document.getElementById('prod-kpis').innerHTML = `
    <div class="kpi-card">
      <div class="kpi-card-top" style="background:#1a2540"></div>
      <div class="kpi-label">Producción efectiva</div>
      <div class="kpi-value">${fmtN(totalEf)}</div>
      <div class="kpi-sub">unidades · ${currentMes}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-card-top" style="background:${semColor(avgEfEfPl)}"></div>
      <div class="kpi-label">Eficiencia real/planif</div>
      <div class="kpi-value">${fmtPct(avgEfEfPl)}</div>
      <div class="kpi-sub"><span class="badge ${avgEfEfPl>=0.97?'pos':avgEfEfPl>=0.92?'warn':'neg'}">Meta 97%</span></div>
    </div>

    <div class="kpi-card">
      <div class="kpi-card-top" style="background:#2563eb"></div>
      <div class="kpi-label">Órdenes ejecutadas</div>
      <div class="kpi-value">${fmtN(totalOrdenes)} <span style="font-size:13px;font-weight:500;color:var(--text2)">(${fmtN(RAW.kg_by_mes&&RAW.kg_by_mes[currentMes]?RAW.kg_by_mes[currentMes]:0)} kg)</span></div>
      <div class="kpi-sub">${fmtN(ef.reduce((s,r)=>s+r.cambios,0))} cambios de producto</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-card-top" style="background:${quiebre===0?'#16a34a':'#dc2626'}"></div>
      <div class="kpi-label">Quiebre de stock</div>
      <div class="kpi-value" style="color:${quiebre===0?'#16a34a':'#dc2626'}">${fmtN(quiebre)}</div>
      <div class="kpi-sub"><span class="badge ${quiebre===0?'pos':'neg'}">Meta: 0</span></div>
      ${quiebreRow&&quiebreRow.comentario?'<div style="margin-top:6px;font-size:10px;color:var(--amber);border-top:1px solid var(--border);padding-top:5px;line-height:1.4">'+quiebreRow.comentario+'</div>':''}
    </div>
  `;

  // Barras agrupadas semana
  mkChart('chart-unidades','bar',{
    labels: ef.map(r=>r.semana.replace('Semana ','')),
    datasets:[
      {label:'Capacidad', data:ef.map(r=>r.capacidad), backgroundColor:'rgba(34,32,28,0.10)', borderColor:'rgba(34,32,28,0.30)', borderWidth:1.5, borderRadius:3},
      {label:'Planificado', data:ef.map(r=>r.planificada), backgroundColor:'rgba(180,180,180,0.50)', borderColor:'rgba(100,100,100,0.50)', borderWidth:1.5, borderRadius:3},
      {label:'Efectivo', data:ef.map(r=>r.efectiva), backgroundColor:'rgba(241,138,0,0.70)', borderColor:'#f18a00', borderWidth:1.5, borderRadius:3},
    ]
  }, barOptsWithLabels());

  // Gauge
  const pct = totalCap>0 ? totalEf/totalCap : totalPl>0 ? totalEf/totalPl : 0;
  const gc = pct>=0.85?'#16a34a':pct>=0.65?'#d97706':'#dc2626';
  document.getElementById('gauge-produccion').innerHTML = `
    <div class="kpi-label" style="text-align:center">Efectivo vs Capacidad</div>
    <div class="gauge-val" style="color:${gc};font-size:36px;text-align:center;margin:8px 0">${fmtPct(pct)}</div>
    <div class="gauge-bar-wrap"><div class="gauge-bar" style="width:${Math.min(pct*100,100).toFixed(1)}%;background:${gc}"></div></div>
    <div style="text-align:center;font-size:11px;color:var(--text3)">${fmtN(totalEf)} / ${fmtN(totalCap||totalPl)} u.</div>
    <div style="margin-top:14px;border-top:1px solid var(--border);padding-top:12px;display:flex;flex-direction:column;gap:8px">
      <div style="display:flex;justify-content:space-between;font-size:11px">
        <span style="color:var(--text2)">Efic. real/plan</span>
        <span style="font-weight:700;color:${semColor(avgEfEfPl)}">${fmtPct(avgEfEfPl)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:11px">
        <span style="color:var(--text2)">Plan/Capacidad</span>
        <span style="font-weight:700">${fmtPct(avgEfPlCap)}</span>
      </div>
    </div>
  `;

  // Productos por semana
  mkChart('chart-productos','bar',{
    labels: ef.map(r=>r.semana.replace('Semana ','')),
    datasets:[{label:'Productos',data:ef.map(r=>r.cant_productos),backgroundColor:'#1a2540',borderRadius:4}]
  },{...barOptsWithLabels(),plugins:{...barOptsWithLabels().plugins,legend:{display:false}}});

  // Observaciones semanales
  const obsEl = document.getElementById('obs-semanales');
  const obsData = ef.filter(r=>r.obs);
  obsEl.innerHTML = obsData.length
    ? obsData.map(r=>`<div class="obs-item"><div class="obs-week">${r.semana.replace('Semana','Sem.')}</div><div class="obs-text">${r.obs}</div></div>`).join('')
    : `<div style="color:var(--text3);font-size:12px;padding:12px 0">Sin observaciones para este mes</div>`;

  renderAnualBarras();
  renderForecastLinea();
}

function renderWaterfall() {
  const fc = RAW.forecast.filter(r=>r.mes===currentMes&&r.tiradas!==0);
  const total = fc.reduce((s,r)=>s+Math.abs(r.tiradas),0);
  const labels = fc.map(r=>r.producto.length>16?r.producto.slice(0,16)+'…':r.producto);
  const vals = fc.map(r=>r.tiradas);

  mkChart('chart-waterfall','bar',{
    labels,
    datasets:[{
      label:'Tiradas', data:vals,
      backgroundColor:vals.map(v=>v>0?'rgba(22,163,74,0.6)':'rgba(220,38,38,0.6)'),
      borderColor:vals.map(v=>v>0?'#16a34a':'#dc2626'),
      borderWidth:1.5, borderRadius:3
    }]
  },{
    responsive:true, maintainAspectRatio:false,
    plugins:{
      legend:{display:false},
      tooltip:{callbacks:{label:ctx=>`${ctx.raw>0?'+':''}${fmtN(ctx.raw)} u.`}}
    },
    scales:{
      x:{grid:{display:false},ticks:{font:{size:9},maxRotation:45,color:'#9ca3af'}},
      y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{callback:v=>fmtN(v),color:'#9ca3af'}}
    }
  });

  // Obs: only with comentarios
  const obsEl = document.getElementById('wf-obs'); if(!obsEl) return;
  const withObs = fc.filter(r=>r.obs&&r.obs.trim());
  if(!withObs.length) {
    obsEl.innerHTML = `<div style="color:var(--text3);font-size:12px;padding:12px 0">Sin observaciones para este mes</div>`;
    return;
  }
  obsEl.innerHTML = withObs.map(r=>{
    const pct = total>0 ? (Math.abs(r.tiradas)/total*100).toFixed(1) : '0';
    const cls = r.tiradas>0?'wf-pos':'wf-neg';
    return `<div class="wf-obs-item">
      <div class="wf-obs-prod">${r.producto.slice(0,20)}</div>
      <div class="wf-obs-txt">${r.obs}</div>
      <div class="wf-obs-num ${cls}">${r.tiradas>0?'+':''}${fmtN(r.tiradas)}<br><span style="color:var(--text3);font-size:9px">${pct}%</span></div>
    </div>`;
  }).join('');
}

function renderFunnelMP() {
  const mp = RAW.mp.filter(r=>r.mes===currentMes&&r.volumen>0);
  mp.sort((a,b)=>b.volumen-a.volumen);
  const top = mp.slice(0,18);
  const maxV = top[0]?.volumen||1;
  document.getElementById('funnel-mp').innerHTML = `<div class="funnel-wrap">`+top.map(r=>`
    <div class="funnel-item">
      <div class="funnel-label" title="${r.mp}">${r.mp.replace(/\[.*?\]\s*/,'').slice(0,34)}</div>
      <div class="funnel-bar-wrap"><div class="funnel-bar" style="width:${(r.volumen/maxV*100).toFixed(1)}%"></div></div>
      <div class="funnel-val">${fmtN(r.volumen,1)} kg</div>
    </div>`).join('')+`</div>`;
}

function renderAnualBarras() {
  const byMes = {};
  RAW.eficiencia.forEach(r=>{
    if(!byMes[r.mes]) byMes[r.mes]={cap:0,plan:0,ef:0};
    byMes[r.mes].cap+=r.capacidad; byMes[r.mes].plan+=r.planificada; byMes[r.mes].ef+=r.efectiva;
  });
  const meses = MESES.filter(m=>byMes[m]);
  mkChart('chart-anual-barras','bar',{
    labels:meses,
    datasets:[
      {label:'Capacidad',data:meses.map(m=>byMes[m].cap),backgroundColor:'rgba(34,32,28,0.10)',borderColor:'rgba(34,32,28,0.30)',borderWidth:1.5,borderRadius:3},
      {label:'Planificado',data:meses.map(m=>byMes[m].plan),backgroundColor:'rgba(180,180,180,0.50)',borderColor:'rgba(100,100,100,0.50)',borderWidth:1.5,borderRadius:3},
      {label:'Efectivo',data:meses.map(m=>byMes[m].ef),backgroundColor:'rgba(241,138,0,0.70)',borderColor:'#f18a00',borderWidth:1.5,borderRadius:3},
    ]
  }, barOptsWithLabels());
  var totalEf = meses.reduce(function(s,m){return s+byMes[m].ef;},0);
  var el2 = document.getElementById('anual-acumulado');
  if(el2) el2.innerHTML = '<div style="margin-top:10px;padding:10px 14px;background:#f3f4f6;border-radius:8px;border:1px solid #e5e7eb;display:inline-flex;align-items:center;gap:8px"><span style="font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:.5px">Efectivo acumulado</span><span style="font-size:20px;font-weight:800;color:#f18a00">'+fmtN(totalEf)+'</span><span style="font-size:11px;color:#9ca3af">u.</span></div>';
}

function renderForecastLinea() {
  const sel = document.getElementById('prod-filter').value;
  const byMes = {};
  RAW.forecast.filter(function(r){return String(r.sku)===sel;}).forEach(function(r){var v=typeof r.produccion==='number'?r.produccion:parseFloat(String(r.produccion).replace(',',''))||0;byMes[r.mes]=(byMes[r.mes]||0)+v;});
  const meses = MESES.filter(m=>byMes[m]);
  mkChart('chart-anual-linea','line',{
    labels:meses.length?meses:[currentMes],
    datasets:[{label:'Producción',data:meses.length?meses.map(m=>byMes[m]||0):[byMes[currentMes]||0],borderColor:'#f18a00',backgroundColor:'rgba(241,138,0,0.08)',tension:.3,pointRadius:4,pointBackgroundColor:'#f18a00',fill:true}]
  },{
    responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false}},
    scales:{x:{grid:{display:false},ticks:{color:'#9ca3af',font:{size:10}}},y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',callback:v=>fmtN(v)}}}
  });
}

// ── LOGÍSTICA ─────────────────────────────────────────────────
function renderLogistica() {
  renderKpiLogCards();
  renderPedidosChart();
  renderEvolPedidos();
  renderPiesOperadores();
  renderMapaArg();
  renderTablaProvincias();
  renderTiemposB2C();
}

function renderKpiLogCards() {
  // Use currentMes; fall back to last available mes
  const availMeses = MESES.filter(m=>RAW.kpi_logistica.some(r=>r.mes===m));
  const lastMes = availMeses.includes(currentMes) ? currentMes : (availMeses.pop()||currentMes);
  const kpis = RAW.kpi_logistica.filter(r=>r.mes===lastMes&&!r.indicador.includes('Quiebre')&&!r.indicador.includes('Cantidad'));
  const colors = {'Exactitud de Inventario PT Planta':'#1a2540','Exactitud de Inventario PT Enbox':'#2563eb','Exactitud de Inventario MP':'#0891b2','Dias de inventario disponible':'#16a34a','Exactitud de Picking B2B':'#d97706','Exactitud de Picking B2C':'#7c3aed','Tiempo de Procesamiento de Pedido':'#dc2626'};
  const el = document.getElementById('kpi-log-cards');
  el.className = 'kpi-row';
  el.style.gridTemplateColumns = 'repeat(4,1fr)';
  // Show specific indicators in order with full names
  const WANTED = [
    'Exactitud de Inventario PT Planta',
    'Exactitud de Inventario PT Enbox',
    'Exactitud de Inventario MP',
    'Exactitud de Picking B2B',
    'Exactitud de Picking B2C',
  ];
  const kpisOrdered = WANTED.map(ind => kpis.find(r=>r.indicador.trim()===ind)).filter(Boolean);
  el.style.gridTemplateColumns = 'repeat(5,1fr)';
  el.innerHTML = kpisOrdered.map(r=>{
    // Estos 5 indicadores son siempre porcentajes de exactitud. Normalizamos a escala 0-1
    // porque algunos meses (ej. Junio) vienen cargados en escala 0-100 en el Excel de origen.
    const valorN = r.valor>2 ? r.valor/100 : r.valor;
    const metaN = (r.meta!=null && r.meta>2) ? r.meta/100 : r.meta;
    const ok = metaN!=null ? valorN>=metaN*0.98 : true;
    const val = fmtPct(valorN);
    const metaStr = metaN!=null ? 'Meta '+fmtPct(metaN) : '';
    const comentario = r.comentario ? '<div style="margin-top:6px;font-size:10px;color:var(--amber);border-top:1px solid var(--border);padding-top:5px;line-height:1.4">'+r.comentario+'</div>' : '';
    return '<div class="kpi-card">'
      +'<div class="kpi-card-top" style="background:'+(colors[r.indicador.trim()]||'#1a2540')+'"></div>'
      +'<div class="kpi-label" style="font-size:9px">'+r.indicador.trim()+'</div>'
      +'<div class="kpi-value" style="font-size:18px">'+val+'</div>'
      +'<div class="kpi-sub">'+(metaStr?'<span class="badge '+(ok?'pos':'neg')+'">'+metaStr+'</span>':'')+'<span style="color:var(--text3)">'+lastMes+'</span></div>'
      +comentario
      +'</div>';
  }).join('');
}

// Canal activo: 'B2C' o 'B2B'
var currentCanal = 'B2C';
var pedidosMode = 'pedidos';

function togglePedidos(mode) {
  pedidosMode = mode;
  document.getElementById('btn-pedidos').classList.toggle('active', mode==='pedidos');
  document.getElementById('btn-unidades').classList.toggle('active', mode==='unidades');
  renderPedidosChart();
}

function toggleCanal(canal) {
  currentCanal = canal;
  // Sincronizar ambos pares de botones del mapa
  ['btn-b2c-map'].forEach(id=>{ const el=document.getElementById(id); if(el) el.classList.toggle('active', canal==='B2C'); });
  ['btn-b2b-map'].forEach(id=>{ const el=document.getElementById(id); if(el) el.classList.toggle('active', canal==='B2B'); });
  const lbl = document.getElementById('mapa-canal-label');
  if(lbl) lbl.textContent = 'Canal: ' + canal;
  renderMapaArg();
  renderTablaProvincias();
}

function renderPedidosChart() {
  const byMes = RAW.log_summary.by_mes;
  const availMeses = RAW.log_summary.meses_disponibles;
  const mes = availMeses.includes(currentMes) ? currentMes : (availMeses[availMeses.length-1]||currentMes);
  const data = (byMes[mes] && byMes[mes].canal_almacen) || {};

  const canales = ['B2B','B2C'];
  const almacenes = [...new Set(Object.keys(data).map(k=>k.split('|')[1]))];
  const almColors = {'Granger S.A.':'#22201c','ENBOX':'#f18a00','MELI FULL':'#f49b31'};

  if(pedidosMode==='unidades'){
    const totales = canales.map(c=>Object.entries(data).filter(([k])=>k.startsWith(c+'|')).reduce((s,[,v])=>s+v.unidades,0));
    mkChart('chart-pedidos','bar',{
      labels:canales,
      datasets:[{label:'Unidades',data:totales,backgroundColor:['#1a2540','#2563eb'],borderRadius:4}]
    },{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>`${fmtN(ctx.raw)} unidades`}},datalabels:{
        anchor:'end',align:'end',color:'#4b5563',font:{size:11,weight:'600'},formatter:v=>fmtN(v)
      }},
      scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{callback:v=>fmtN(v)}}}
    });
  } else {
    mkChart('chart-pedidos','bar',{
      labels:canales,
      datasets:almacenes.map((alm,i)=>({
        label:alm,
        data:canales.map(c=>{const k=`${c}|${alm}`;return data[k]?data[k].pedidos:0;}),
        backgroundColor:almColors[alm]||CP[i],borderRadius:4
      }))
    },{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{display:true,labels:{color:'#4b5563',font:{size:11},boxWidth:10}},
        tooltip:{mode:'index',intersect:false},
        datalabels:{anchor:'center',align:'center',color:'#fff',font:{size:11,weight:'600'},formatter:(v)=>v>0?fmtN(v):''}
      },
      scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,grid:{color:'rgba(0,0,0,0.04)'},ticks:{callback:v=>fmtN(v)}}}
    });
  }

  const b2bTotal = Object.entries(data).filter(([k])=>k.startsWith('B2B')).reduce((s,[,v])=>s+(pedidosMode==='pedidos'?v.pedidos:v.unidades),0);
  const b2cTotal = Object.entries(data).filter(([k])=>k.startsWith('B2C')).reduce((s,[,v])=>s+(pedidosMode==='pedidos'?v.pedidos:v.unidades),0);
  const totEl = document.getElementById('pedidos-totales');
  if(totEl){
    const lbl = pedidosMode==='pedidos'?'pedidos':'unidades';
    totEl.innerHTML=`
      <div style="background:#1a2540;color:#fff;padding:5px 12px;border-radius:6px;font-size:12px;font-weight:700">B2B: ${fmtN(b2bTotal)} ${lbl}</div>
      <div style="background:#2563eb;color:#fff;padding:5px 12px;border-radius:6px;font-size:12px;font-weight:700">B2C: ${fmtN(b2cTotal)} ${lbl}</div>`;
  }
}

var evolCanales = {B2C: true, B2B: true};

function toggleEvolCanal(canal) {
  evolCanales[canal] = !evolCanales[canal];
  document.getElementById('btn-evol-'+canal.toLowerCase()).classList.toggle('active', evolCanales[canal]);
  renderEvolPedidos();
}

function renderEvolPedidos() {
  const MESES_ORD = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'].filter(function(m){return RAW.log_summary.by_mes[m];});
  const byMes = RAW.log_summary.by_mes;

  const b2cData = MESES_ORD.map(m => {
    const ca = (byMes[m] && byMes[m].canal_almacen) || {};
    return Object.entries(ca).filter(([k])=>k.startsWith('B2C|')).reduce((s,[,v])=>s+v.pedidos, 0);
  });
  const b2bData = MESES_ORD.map(m => {
    const ca = (byMes[m] && byMes[m].canal_almacen) || {};
    return Object.entries(ca).filter(([k])=>k.startsWith('B2B|')).reduce((s,[,v])=>s+v.pedidos, 0);
  });

  const datasets = [];
  if(evolCanales.B2C) datasets.push({
    label: 'B2C', data: b2cData,
    borderColor: '#f18a00', backgroundColor: 'rgba(241,138,0,0.08)',
    tension: 0.35, fill: true, pointRadius: 5, pointHoverRadius: 7,
    pointBackgroundColor: '#f18a00', borderWidth: 2.5
  });
  if(evolCanales.B2B) datasets.push({
    label: 'B2B', data: b2bData,
    borderColor: '#22201c', backgroundColor: 'rgba(34,32,28,0.06)',
    tension: 0.35, fill: true, pointRadius: 5, pointHoverRadius: 7,
    pointBackgroundColor: '#22201c', borderWidth: 2.5
  });

  mkChart('chart-evol-pedidos', 'line', {
    labels: MESES_ORD,
    datasets
  }, {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: {display: true, labels: {color:'#4b5563', font:{size:11}, boxWidth:12}},
      tooltip: {mode:'index', intersect:false, callbacks:{label: ctx=>`${ctx.dataset.label}: ${fmtN(ctx.raw)} pedidos`}},
      datalabels: {
        anchor:'top', align:'top', color: ctx => ctx.dataset.borderColor,
        font:{size:10, weight:'600'}, formatter: v => fmtN(v)
      }
    },
    scales: {
      x: {grid:{display:false}, ticks:{color:'#6b7280', font:{size:11}}},
      y: {grid:{color:'rgba(0,0,0,0.04)'}, ticks:{callback: v=>fmtN(v), color:'#6b7280'}, beginAtZero:false}
    }
  });
}

function renderPiesOperadores() {
  const byMes = RAW.log_summary.by_mes;
  const availMeses = RAW.log_summary.meses_disponibles;
  const mes = availMeses.includes(currentMes) ? currentMes : (availMeses[availMeses.length-1]||currentMes);
  const mesData = byMes[mes] || {};
  const canalAlmacen = mesData.canal_almacen || {};

  // B2C: cada almacén → su operador logístico
  // Granger S.A. → OCA, ENBOX → Enbox, MELI FULL → Mercado Libre
  const b2cAlmacenLabel = {'Granger S.A.':'OCA','ENBOX':'Enbox','MELI FULL':'Mercado Libre'};
  const b2c = {};
  Object.entries(canalAlmacen).forEach(([key, val]) => {
    if(key.startsWith('B2C|')) {
      const almacen = key.replace('B2C|','');
      const label = b2cAlmacenLabel[almacen] || almacen;
      b2c[label] = (b2c[label]||0) + val.pedidos;
    }
  });

  // B2B: ENBOX → Enbox; Granger S.A. → "Via Cargo / Otros" (suma de transportistas desde Granger)
  // Usamos transp_b2b para los de Granger (todos menos Enbox), y ENBOX del canal_almacen
  const transp_b2b = mesData.transp_b2b || {};
  const b2bEnbox = (canalAlmacen['B2B|ENBOX']||{}).pedidos || 0;
  const b2bGranger = (canalAlmacen['B2B|Granger S.A.']||{}).pedidos || 0;
  // Distribuir los pedidos de Granger entre sus transportistas proporcionalmente
  const grangerTransp = Object.entries(transp_b2b).filter(([k])=>k!=='Enbox'&&k!=='OCA'&&k);
  const grangerTranspTotal = grangerTransp.reduce((s,[,v])=>s+v,0)||1;
  const b2b = {'Enbox': b2bEnbox};
  grangerTransp.forEach(([k,v])=>{
    b2b[k] = Math.round(b2bGranger * v / grangerTranspTotal);
  });

  var operadorColor = {'OCA':'#22201c','Enbox':'#f18a00','Mercado Libre':'#f49b31','Via Cargo':'#3b3836','Expreso Santa Rosa':'#b0c8e9','Transporte MJ':'#f9be78','Transporte Anibal':'#d97706'};
  function makePie(id, obj) {
    var entries = Object.entries(obj).filter(function(kv){return kv[0]&&kv[1]>0;});
    var labels = entries.map(function(kv){return kv[0];});
    var vals = entries.map(function(kv){return kv[1];});
    var total = vals.reduce(function(a,b){return a+b;},0)||1;
    var colors = labels.map(function(l,i){return operadorColor[l]||CP[i];});
    mkChart(id,'doughnut',{labels:labels,datasets:[{data:vals,backgroundColor:colors,borderColor:'#fff',borderWidth:2}]},{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{color:'#4b5563',font:{size:10},padding:8,boxWidth:10}},tooltip:{callbacks:{label:function(ctx){return ctx.label+': '+(ctx.raw/total*100).toFixed(1)+'% ('+ctx.raw+')'}}},datalabels:false}});
    CHARTS[id]._pieTotal = total;
  }
  function makePie_SKIP(id, obj) {
    const entries = Object.entries(obj).filter(([k,v])=>k&&v>0);
    const labels = entries.map(([k])=>k);
    const vals = entries.map(([,v])=>v);
    const total = vals.reduce((a,b)=>a+b,0)||1;
    mkChart(id,'doughnut',{
      labels, datasets:[{data:vals, backgroundColor:CP.slice(0,labels.length), borderColor:'#fff', borderWidth:2}]
    },{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{position:'bottom',labels:{color:'#4b5563',font:{size:10},padding:8,boxWidth:10}},
        tooltip:{callbacks:{label:ctx=>`${ctx.label}: ${(ctx.raw/total*100).toFixed(1)}% (${ctx.raw})`}},
        datalabels:false
      },
    });
    CHARTS[id]._pieTotal = total;
  }
  makePie('chart-pie-b2c', b2c);
  makePie('chart-pie-b2b', b2b);
}

// Custom plugin for pie percentage labels
const pieLabelPlugin = {
  id:'piePctLabel',
  afterDatasetsDraw(chart) {
    if(chart.config.type!=='doughnut'&&chart.config.type!=='pie') return;
    const {ctx,data} = chart;
    const total = data.datasets[0].data.reduce((a,b)=>a+b,0)||1;
    chart.getDatasetMeta(0).data.forEach((arc,i)=>{
      const val = data.datasets[0].data[i];
      if(!val) return;
      const pct_num = val/total*100;
      // Only draw label if slice is >= 8% (avoids overlap on small slices)
      if(pct_num < 8) return;
      const pct = pct_num.toFixed(1)+'%';
      const angle = (arc.startAngle+arc.endAngle)/2;
      const r = (arc.innerRadius+arc.outerRadius)/2;
      const x = arc.x + r*Math.cos(angle);
      const y = arc.y + r*Math.sin(angle);
      ctx.save();
      ctx.font='bold 11px DM Sans';
      ctx.fillStyle='#fff';
      ctx.textAlign='center';
      ctx.textBaseline='middle';
      var lbl = pct+'('+Math.round(val)+')';
      ctx.fillText(lbl,x,y);
      ctx.restore();
    });
  }
};
Chart.register(pieLabelPlugin);

function renderMapaArg() {
  var byMes = RAW.log_summary.by_mes;
  var availMeses = RAW.log_summary.meses_disponibles;
  var mes = availMeses.includes(currentMes) ? currentMes : (availMeses[availMeses.length-1]||currentMes);
  var mesData = byMes[mes] || {};

  // Construir counts filtrado por canal activo a partir de canal_almacen + prov_counts
  // Como prov_counts no está separado por canal, usamos prov_counts_total ponderado por % del canal
  // Aproximación: usar prov_counts del mes y escalar por proporción del canal en ese mes
  var allCounts = mesData.prov_counts || RAW.log_summary.prov_counts_total || {};
  var canalData = Object.entries(mesData.canal_almacen||{}).filter(([k])=>k.startsWith(currentCanal+'|'));
  var totalCanal = canalData.reduce((s,[,v])=>s+v.pedidos,0);
  var totalAll = Object.entries(mesData.canal_almacen||{}).reduce((s,[,v])=>s+v.pedidos,0)||1;
  var ratio = totalCanal/totalAll;
  // Escalar counts por la proporción del canal
  var counts = {};
  Object.entries(allCounts).forEach(function([p,c]){ counts[p]=Math.round(c*ratio); });
  if(Object.values(counts).every(v=>v===0)) counts = allCounts; // fallback
  var total = Object.values(counts).reduce(function(a,b){return a+b;},0)||1;

  var PROV_LATLON = {
    'Buenos Aires':[-36.6,-60.0],'Santa Fe':[-31.0,-60.7],'Córdoba':[-31.4,-64.2],
    'Mendoza':[-34.0,-68.5],'Tucumán':[-26.8,-65.2],'Entre Ríos':[-31.8,-58.5],
    'Salta':[-24.8,-65.4],'Chaco':[-26.4,-60.8],'Corrientes':[-28.5,-58.8],
    'Misiones':[-27.0,-55.0],'Santiago Del Estero':[-27.7,-63.3],'San Juan':[-30.8,-68.8],
    'Jujuy':[-23.3,-65.7],'Río Negro, Argentina':[-40.0,-67.0],'Neuquén':[-38.5,-69.5],
    'Formosa':[-24.0,-61.5],'La Pampa':[-37.0,-65.5],'Chubut':[-44.0,-68.5],
    'San Luis':[-33.5,-66.5],'Catamarca':[-28.4,-65.8],'La Rioja':[-29.4,-67.0],
    'Santa Cruz':[-49.0,-69.0],'Tierra del Fuego':[-54.0,-68.0]
  };

  if(window._leafletMap){window._leafletMap.remove();window._leafletMap=null;}
  var mapEl = document.getElementById('arg-map');
  if(!mapEl) return;
  mapEl.innerHTML='';

  var L = window.L;
  if(!L){ mapEl.innerHTML='<div style="padding:20px;color:var(--text3);text-align:center">Conectate a internet para ver el mapa</div>'; return; }

  window._leafletMap = L.map('arg-map',{center:[-38,-65],zoom:4,zoomControl:true,attributionControl:false,scrollWheelZoom:false});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{subdomains:'abcd',maxZoom:10}).addTo(window._leafletMap);

  var mapColor = currentCanal==='B2C' ? '#2563eb' : '#1a2540';
  var maxC = Math.max.apply(null, Object.values(counts).concat([1]));
  Object.keys(counts).forEach(function(prov){
    var ll = PROV_LATLON[prov]; if(!ll) return;
    var count = counts[prov];
    if(!count) return;
    var pct = (count/total*100).toFixed(1);
    var r = 18+(count/maxC)*40;
    var opacity = 0.35+(count/maxC)*0.55;
    var circle = L.circleMarker(ll,{radius:r,color:mapColor,weight:1.5,fillColor:mapColor,fillOpacity:opacity}).addTo(window._leafletMap);
    circle.bindTooltip('<strong>'+prov+'</strong><br>'+fmtN(count)+' pedidos '+currentCanal+' · '+pct+'%',{sticky:true,className:'map-leaflet-tip'});
    L.marker(ll,{icon:L.divIcon({html:'<div style="color:white;font-weight:700;font-size:10px;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.5)">'+pct+'%</div>',iconSize:[50,16],iconAnchor:[25,8],className:''})}).addTo(window._leafletMap);
  });
}
function showMapTip(){}
function hideMapTip(){}

function renderTablaProvincias() {
  // Sumar pedidos del canal por provincia en TODOS los meses (Enero-Mayo)
  // y dividir por las semanas exactas del período: 151 días / 7 = 21.57 semanas
  var SEMANAS_PERIODO = 21.57;
  var MESES_PERIODO = ['Enero','Febrero','Marzo','Abril','Mayo'];
  var byMes = RAW.log_summary.by_mes;

  // Acumular pedidos por provincia sumando todos los meses
  var provTotales = {};
  MESES_PERIODO.forEach(function(m) {
    var mesData = byMes[m] || {};
    var prov_counts = mesData.prov_counts || {};
    var canalData = Object.entries(mesData.canal_almacen||{}).filter(([k])=>k.startsWith(currentCanal+'|'));
    var totalCanal = canalData.reduce((s,[,v])=>s+v.pedidos, 0);
    var totalAll = Object.entries(mesData.canal_almacen||{}).reduce((s,[,v])=>s+v.pedidos, 0) || 1;
    var ratio = totalCanal / totalAll;
    Object.entries(prov_counts).forEach(function([p, c]) {
      provTotales[p] = (provTotales[p] || 0) + Math.round(c * ratio);
    });
  });

  var sorted = Object.entries(provTotales)
    .filter(([,v])=>v>0)
    .sort((a,b)=>b[1]-a[1])
    .map(([p,v])=>[p, parseFloat((v/SEMANAS_PERIODO).toFixed(1))]);

  document.getElementById('tabla-provincias').innerHTML=
    `<thead><tr><th>Provincia</th><th class="td-num">Prom/sem (${currentCanal})</th></tr></thead><tbody>`+
    sorted.map(([p,v])=>`<tr><td>${p}</td><td class="td-num">${fmtN(v,1)}</td></tr>`).join('')+`</tbody>`;
}

function renderTiemposB2C() {
  const oca = RAW.tiempos_b2c.filter(r=>r.operador==='OCA').sort((a,b)=>b.tiempo-a.tiempo);
  const enbox = RAW.tiempos_b2c.filter(r=>r.operador==='Enbox');
  const colorDias = t=>t<=5?'var(--green)':t<=9?'var(--amber)':'var(--red)';

  document.getElementById('tabla-tiempos-oca').innerHTML=
    `<thead><tr><th>Provincia</th><th class="td-num">Días</th><th class="td-num" style="color:#9ca3af">Óptimo</th></tr></thead><tbody>`+
    oca.map(r=>`<tr><td>${r.provincia}</td><td class="td-num" style="color:${colorDias(r.tiempo)}">${typeof r.tiempo==='number'?r.tiempo.toFixed(1):r.tiempo}</td><td class="td-num" style="color:#9ca3af;font-size:11px">${r.ideal!=null?r.ideal:'—'}</td></tr>`).join('')+`</tbody>`;

  document.getElementById('tabla-tiempos-enbox').innerHTML=
    `<thead><tr><th>Zona</th><th class="td-num">Tiempo</th><th class="td-num" style="color:#9ca3af">Óptimo</th></tr></thead><tbody>`+
    enbox.map(r=>`<tr><td>${r.provincia}</td><td class="td-num">${r.tiempo}</td><td class="td-num" style="color:#9ca3af;font-size:11px">${r.ideal!=null?r.ideal:'—'}</td></tr>`).join('')+`</tbody>`;
}

// ── COMPRAS ───────────────────────────────────────────────────
function renderCompras() {
  const data=RAW.kpi_compras;
  const availMeses=MESES.filter(m=>data.some(r=>r.mes===m));
  const lastMes=availMeses.includes(currentMes)?currentMes:(availMeses.pop()||currentMes);
  const lastData=data.filter(r=>r.mes===lastMes);
  const barColors=['#22201c','#f18a00','#f49b31','#3b3836'];

  document.getElementById('compras-kpis').innerHTML=lastData.map((r,i)=>{
    const isPct=r.indicador.includes('%');
    const val=isPct?`${r.valor.toFixed(1)}%`:`${r.valor.toFixed(1)} d`;
    const meta=r.meta?(isPct?`Meta ${r.meta.toFixed(0)}%`:`Meta ${r.meta.toFixed(0)}d`):'';
    const ok=r.meta?(isPct?r.valor>=r.meta*0.95:r.valor<=r.meta*1.05):true;
    return `<div class="kpi-card">
      <div class="kpi-card-top" style="background:${barColors[i%barColors.length]}"></div>
      <div class="kpi-label">${r.indicador.replace(' - Días','').replace(' - %','')}</div>
      <div class="kpi-value" style="font-size:20px">${val}</div>
      <div class="kpi-sub">${meta?`<span class="badge ${ok?'pos':'neg'}">${meta}</span>`:''}<span style="color:var(--text3)">${lastMes}</span></div>
    </div>`;
  }).join('');

  renderKpiComprasChart();

  const withObs=data.filter(r=>r.comentario&&r.mes===lastMes);
  document.getElementById('compras-obs').innerHTML=withObs.length
    ?`<div class="obs-timeline">`+withObs.map(r=>`<div class="obs-item"><div class="obs-week">${r.mes}</div><div style="font-size:10px;color:var(--text3);margin-right:6px;min-width:120px">${r.indicador.slice(0,25)}</div><div class="obs-text">${r.comentario}</div></div>`).join('')+`</div>`
    :`<div style="color:var(--text3);font-size:12px;text-align:center;padding:20px">Sin observaciones</div>`;
}

function renderKpiComprasChart() {
  const ind=document.getElementById('kpi-compras-select').value;
  const data=RAW.kpi_compras.filter(r=>r.indicador===ind);
  const meses=MESES.filter(m=>data.some(r=>r.mes===m));
  const isPct=ind.includes('%');
  mkChart('chart-kpi-compras','line',{
    labels:meses,
    datasets:[
      {label:'Real',data:meses.map(m=>{const r=data.find(d=>d.mes===m);return r?r.valor:null;}),borderColor:'#1a2540',backgroundColor:'rgba(26,37,64,0.07)',tension:.3,pointRadius:4,fill:true},
      {label:'Meta',data:meses.map(m=>{const r=data.find(d=>d.mes===m);return r&&r.meta?r.meta:null;}),borderColor:'#dc2626',borderDash:[5,4],tension:0,pointRadius:2,borderWidth:1.5,fill:false},
    ]
  },{
    responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:true,labels:{color:'#4b5563',font:{size:11},boxWidth:10}},tooltip:{mode:'index',intersect:false}},
    scales:{x:{grid:{display:false},ticks:{color:'#9ca3af'}},y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',callback:v=>fmtN(v,isPct?1:0)}}}
  });
}


// ── MATERIAS PRIMAS ───────────────────────────────────────────
function toggleMP(idx) {
  var expand = document.getElementById('mpexpand-'+idx);
  var row = document.getElementById('mprow-'+idx);
  var isOpen = expand.style.display !== 'none';
  document.querySelectorAll('[id^="mpexpand-"]').forEach(function(el){ el.style.display='none'; });
  document.querySelectorAll('.mp-row').forEach(function(el){ el.style.background=''; });
  if (!isOpen) {
    expand.style.display = '';
    row.style.background = 'rgba(241,138,0,0.04)';
    setTimeout(function(){ expand.scrollIntoView({behavior:'smooth',block:'nearest'}); }, 50);
    var mp = RAW.mp_list[idx];
    var MM = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];
    var opts = {responsive:true,maintainAspectRatio:false,layout:{padding:{top:14}},
      plugins:{legend:{display:false},datalabels:{display:false},tooltip:{callbacks:{label:function(c){return c.raw;}}}},
      scales:{x:{grid:{display:false},ticks:{color:'#9ca3af',font:{size:9}}},y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',font:{size:9}}}}};
    var mesC=MM.filter(function(m){return mp.costos[m]!=null;});
    mkChart('mp-chart-costo-'+idx,'line',{labels:mesC,datasets:[{data:mesC.map(function(m){return mp.costos[m];}),borderColor:'#f18a00',backgroundColor:'rgba(241,138,0,0.1)',tension:.3,pointRadius:3,fill:true,borderWidth:2}]},opts);
    var mesLT=MM.filter(function(m){return typeof mp.lead_time[m]==='number';});
    if(mesLT.length){mkChart('mp-chart-lt-'+idx,'bar',{labels:mesLT,datasets:[{data:mesLT.map(function(m){return mp.lead_time[m];}),backgroundColor:'rgba(34,32,28,0.15)',borderColor:'rgba(34,32,28,0.4)',borderWidth:1.5,borderRadius:4}]},opts);}
    var mesCP=MM.filter(function(m){return typeof mp.cond_pago[m]==='number';});
    if(mesCP.length){mkChart('mp-chart-cp-'+idx,'bar',{labels:mesCP,datasets:[{data:mesCP.map(function(m){return mp.cond_pago[m];}),backgroundColor:'rgba(241,138,0,0.3)',borderColor:'rgba(241,138,0,0.7)',borderWidth:1.5,borderRadius:4}]},opts);}
  }
}
function renderSparklines() {
  if(!RAW.mp_list) return;
  var MM=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];
  RAW.mp_list.forEach(function(mp,i){
    var cv=document.getElementById('spark-'+i); if(!cv) return;
    var vals=MM.map(function(m){return mp.costos[m]||null;}).filter(Boolean); if(!vals.length) return;
    mkChart('spark-'+i,'line',{labels:vals.map(function(_,j){return j;}),datasets:[{data:vals,borderColor:'#f18a00',borderWidth:1.5,pointRadius:0,tension:.3,fill:false}]},{responsive:false,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{enabled:false},datalabels:{display:false}},scales:{x:{display:false},y:{display:false}}});
  });
}
function renderMP() {}

document.addEventListener('DOMContentLoaded',init);