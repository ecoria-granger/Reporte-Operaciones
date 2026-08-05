// ── DATA ──────────────────────────────────────────────────────
const RAW = {"eficiencia": [{"mes": "Enero", "semana": "Semana 01", "capacidad": 4701.0, "planificada": 3900.0, "efectiva": 3781.0, "ef_ef_pl": 0.9694871795, "ef_pl_cap": 0.8296107211, "cant_productos": 2.0, "cambios": 1, "ordenes": 6.0, "obs": "", "natufarma": false}, {"mes": "Enero", "semana": "Semana 02", "capacidad": 31333.33333, "planificada": 14250.0, "efectiva": 14510.0, "ef_ef_pl": 1.018245614, "ef_pl_cap": 0.454787234, "cant_productos": 1.0, "cambios": 0, "ordenes": 38.0, "obs": "3 días de producción.", "natufarma": false}, {"mes": "Enero", "semana": "Semana 03", "capacidad": 31333.33333, "planificada": 10625.0, "efectiva": 10616.0, "ef_ef_pl": 0.9991529412, "ef_pl_cap": 0.3390957447, "cant_productos": 2.0, "cambios": 1, "ordenes": 23.0, "obs": "4 días de producción.", "natufarma": false}, {"mes": "Enero", "semana": "Semana 04", "capacidad": 31333.33333, "planificada": 0.0, "efectiva": 0.0, "ef_ef_pl": 0.0, "ef_pl_cap": 0.0, "cant_productos": 0.0, "cambios": 0, "ordenes": 0.0, "obs": "Sin producción.", "natufarma": false}, {"mes": "Enero", "semana": "Semana 05", "capacidad": 31333.33333, "planificada": 19575.0, "efectiva": 19208.0, "ef_ef_pl": 0.9812515964, "ef_pl_cap": 0.6247340426, "cant_productos": 4.0, "cambios": 3, "ordenes": 43.0, "obs": "", "natufarma": false}, {"mes": "Febrero", "semana": "Semana 06", "capacidad": 31333.33333, "planificada": 21275.0, "efectiva": 20746.0, "ef_ef_pl": 0.9751351351, "ef_pl_cap": 0.6789893617, "cant_productos": 3.0, "cambios": 2, "ordenes": 49.0, "obs": "4 días de producción.", "natufarma": false}, {"mes": "Febrero", "semana": "Semana 07", "capacidad": 31333.33333, "planificada": 10683.0, "efectiva": 10156.0, "ef_ef_pl": 0.9506692877, "ef_pl_cap": 0.3409468085, "cant_productos": 6.0, "cambios": 5, "ordenes": 15.0, "obs": "", "natufarma": false}, {"mes": "Febrero", "semana": "Semana 08", "capacidad": 31333.33333, "planificada": 18090.0, "efectiva": 17512.0, "ef_ef_pl": 0.9680486457, "ef_pl_cap": 0.5773404255, "cant_productos": 8.0, "cambios": 7, "ordenes": 42.0, "obs": "", "natufarma": false}, {"mes": "Febrero", "semana": "Semana 09", "capacidad": 31333.33333, "planificada": 33818.0, "efectiva": 33245.0, "ef_ef_pl": 0.9830563605, "ef_pl_cap": 1.079297872, "cant_productos": 9.0, "cambios": 8, "ordenes": 81.0, "obs": "", "natufarma": false}, {"mes": "Marzo", "semana": "Semana 10", "capacidad": 47000.0, "planificada": 52089.0, "efectiva": 50998.0, "ef_ef_pl": 0.9790550788, "ef_pl_cap": 1.108276596, "cant_productos": 7.0, "cambios": 6, "ordenes": 102.0, "obs": "", "natufarma": false}, {"mes": "Marzo", "semana": "Semana 11", "capacidad": 47000.0, "planificada": 39242.0, "efectiva": 38493.0, "ef_ef_pl": 0.9809133072, "ef_pl_cap": 0.8349361702, "cant_productos": 8.0, "cambios": 7, "ordenes": 93.0, "obs": "", "natufarma": false}, {"mes": "Marzo", "semana": "Semana 12", "capacidad": 47000.0, "planificada": 38099.0, "efectiva": 36983.0, "ef_ef_pl": 0.9707078926, "ef_pl_cap": 0.8106170213, "cant_productos": 9.0, "cambios": 8, "ordenes": 77.0, "obs": "", "natufarma": false}, {"mes": "Marzo", "semana": "Semana 13", "capacidad": 47000.0, "planificada": 32900.0, "efectiva": 31912.0, "ef_ef_pl": 0.9699696049, "ef_pl_cap": 0.7, "cant_productos": 4.0, "cambios": 3, "ordenes": 66.0, "obs": "", "natufarma": false}, {"mes": "Marzo", "semana": "Semana 14", "capacidad": 20398.0, "planificada": 8666.0, "efectiva": 8521.0, "ef_ef_pl": 0.9832679437, "ef_pl_cap": 0.4248455731, "cant_productos": 3.0, "cambios": 2, "ordenes": 15.0, "obs": "", "natufarma": false}, {"mes": "Abril", "semana": "Semana 14", "capacidad": 26602.0, "planificada": 24950.0, "efectiva": 23837.0, "ef_ef_pl": 0.9553907816, "ef_pl_cap": 0.9378994061, "cant_productos": 5.0, "cambios": 4, "ordenes": 48.0, "obs": "", "natufarma": false}, {"mes": "Abril", "semana": "Semana 15", "capacidad": 47000.0, "planificada": 45024.0, "efectiva": 44006.0, "ef_ef_pl": 0.9773898365, "ef_pl_cap": 0.9579574468, "cant_productos": 9.0, "cambios": 8, "ordenes": 102.0, "obs": "", "natufarma": false}, {"mes": "Abril", "semana": "Semana 16", "capacidad": 47000.0, "planificada": 43400.0, "efectiva": 42436.0, "ef_ef_pl": 0.9777880184, "ef_pl_cap": 0.9234042553, "cant_productos": 7.0, "cambios": 6, "ordenes": 82.0, "obs": "", "natufarma": false}, {"mes": "Abril", "semana": "Semana 17", "capacidad": 47000.0, "planificada": 48450.0, "efectiva": 47136.0, "ef_ef_pl": 0.972879257, "ef_pl_cap": 1.030851064, "cant_productos": 10.0, "cambios": 9, "ordenes": 100.0, "obs": "", "natufarma": false}, {"mes": "Abril", "semana": "Semana 18", "capacidad": 45402.0, "planificada": 33230.0, "efectiva": 31116.0, "ef_ef_pl": 0.9363827866, "ef_pl_cap": 0.7319060834, "cant_productos": 12.0, "cambios": 11, "ordenes": 68.0, "obs": "", "natufarma": false}, {"mes": "Mayo", "semana": "Semana 18", "capacidad": 1598.0, "planificada": 1600.0, "efectiva": 1553.0, "ef_ef_pl": 0.970625, "ef_pl_cap": 1.001251564, "cant_productos": 1.0, "cambios": 0, "ordenes": 0.0, "obs": "", "natufarma": false}, {"mes": "Mayo", "semana": "Semana 19", "capacidad": 47000.0, "planificada": 40750.0, "efectiva": 39773.0, "ef_ef_pl": 0.9760245399, "ef_pl_cap": 0.8670212766, "cant_productos": 14.0, "cambios": 13, "ordenes": 83.0, "obs": "Atrasos por testeos en productos lanzamiento (pancake Dulde de leche y Jalapeño)", "natufarma": false}, {"mes": "Mayo", "semana": "Semana 20", "capacidad": 47000.0, "planificada": 45377.0, "efectiva": 44108.0, "ef_ef_pl": 0.9720342905, "ef_pl_cap": 0.9654680851, "cant_productos": 10.0, "cambios": 9, "ordenes": 84.0, "obs": "Atrasos por puesta a punto exportación y reproceso (Pancake de vainilla: falta de sucralosa).", "natufarma": false}, {"mes": "Mayo", "semana": "Semana 21", "capacidad": 47000.0, "planificada": 40120.0, "efectiva": 38884.0, "ef_ef_pl": 0.9691924227, "ef_pl_cap": 0.8536170213, "cant_productos": 13.0, "cambios": 12, "ordenes": 73.0, "obs": "Atrasos por fechadora, termoselladora, rotura boquilla dosificadora, humedad en el ambiente.", "natufarma": false}, {"mes": "Mayo", "semana": "Semana 22", "capacidad": 47000.0, "planificada": 49480.0, "efectiva": 48220.0, "ef_ef_pl": 0.9745351657, "ef_pl_cap": 1.052765957, "cant_productos": 10.0, "cambios": 9, "ordenes": 102.0, "obs": "", "natufarma": false}, {"mes": "Junio", "semana": "Semana 23", "capacidad": 47000.0, "planificada": 49860.0, "efectiva": 45761.0, "ef_ef_pl": 0.9177898115, "ef_pl_cap": 1.060851064, "cant_productos": 7.0, "cambios": 6, "ordenes": 102.0, "obs": "", "natufarma": false}, {"mes": "Junio", "semana": "Semana 24", "capacidad": 47000.0, "planificada": 51034.0, "efectiva": 49842.0, "ef_ef_pl": 0.9766430223, "ef_pl_cap": 1.085829787, "cant_productos": 9.0, "cambios": 8, "ordenes": 94.0, "obs": "Reproceso pancake de chocolate (faltante de sucralosa)", "natufarma": false}, {"mes": "Junio", "semana": "Semana 25", "capacidad": 47000.0, "planificada": 42800.0, "efectiva": 41799.0, "ef_ef_pl": 0.9766121495, "ef_pl_cap": 0.9106382979, "cant_productos": 8.0, "cambios": 7, "ordenes": 84.0, "obs": "Lunes 15/06 feriado (ingreso 12 hs) - Pausa 2hs por partido.", "natufarma": false}, {"mes": "Junio", "semana": "Semana 26", "capacidad": 47000.0, "planificada": 43440.0, "efectiva": 42721.0, "ef_ef_pl": 0.9834484346, "ef_pl_cap": 0.9242553191, "cant_productos": 14.0, "cambios": 13, "ordenes": 90.0, "obs": "Pausa 2 hs por partido. - Baja eficiencia por multiproductos por falta de harina de lupino - Falla en termoselladora de l.automática. - Aumento tiempo de mezclado (40min).", "natufarma": false}, {"mes": "Junio", "semana": "Semana 27", "capacidad": 19710.0, "planificada": 9550.0, "efectiva": 9295.0, "ef_ef_pl": 0.9732984293, "ef_pl_cap": 0.4845256215, "cant_productos": 3.0, "cambios": 2, "ordenes": 18.0, "obs": "Inventario - Falta Harino de lupino (desde 26/06 al 7/7)", "natufarma": false}, {"mes": "Julio", "semana": "Semana 27", "capacidad": 27290.0, "planificada": 15640.0, "efectiva": 15168.0, "ef_ef_pl": 0.9698209719, "ef_pl_cap": 0.573103701, "cant_productos": 8.0, "cambios": 7, "ordenes": 29.0, "obs": "Falta Harino de lupino (desde 26/06 al 7/7)", "natufarma": false}, {"mes": "Julio", "semana": "Semana 28", "capacidad": 28807.0, "planificada": 21700.0, "efectiva": 21098.0, "ef_ef_pl": 0.9722580645, "ef_pl_cap": 0.7532891311, "cant_productos": 10.0, "cambios": 9, "ordenes": 42.0, "obs": "Inconvenientes con doypacks, se tienen que abrir manualmente para pasar por maquina - Inconvenientes con huevo en polvo.", "natufarma": false}, {"mes": "Julio", "semana": "Semana 29", "capacidad": 47000.0, "planificada": 52900.0, "efectiva": 51917.0, "ef_ef_pl": 0.9814177694, "ef_pl_cap": 1.125531915, "cant_productos": 10.0, "cambios": 9, "ordenes": 108.0, "obs": "", "natufarma": false}, {"mes": "Julio", "semana": "Semana 30", "capacidad": 47000.0, "planificada": 32320.0, "efectiva": 31548.0, "ef_ef_pl": 0.9761138614, "ef_pl_cap": 0.6876595745, "cant_productos": 8.0, "cambios": 7, "ordenes": 62.0, "obs": "Inconvenientes con harina de avena, huevo en polvo y aro (Vainilla)", "natufarma": false}, {"mes": "Julio", "semana": "Semana 31", "capacidad": 47000.0, "planificada": 45720.0, "efectiva": 44952.0, "ef_ef_pl": 0.9832020997, "ef_pl_cap": 0.9727659574, "cant_productos": 7.0, "cambios": 6, "ordenes": 95.0, "obs": "Inconvenientes con polvo de hornear (se visualizan granulados en el PT)", "natufarma": false}, {"mes": "Julio", "semana": "Natufarma", "capacidad": 0, "planificada": 0, "efectiva": 25481.0, "ef_ef_pl": 0, "ef_pl_cap": 0, "cant_productos": 0, "cambios": 0, "ordenes": 0, "obs": "", "natufarma": true}], "forecast": [{"mes": "Mayo", "sku": 61013.0, "producto": "Cookies proteicas", "total": 9000.0, "produccion": 8903.0, "pendiente": 97.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 61014.0, "producto": "Pancake caprese", "total": 1500.0, "produccion": 978.0, "pendiente": 522.0, "tiradas": -522, "obs": "Faltante de MP (Aro caprese)"}, {"mes": "Mayo", "sku": 61015.0, "producto": "cupcake lemon con chips", "total": 3000.0, "produccion": 4358.0, "pendiente": -1358.0, "tiradas": 1358, "obs": ""}, {"mes": "Mayo", "sku": 60001.0, "producto": "Creatina", "total": 2340.0, "produccion": 2114.0, "pendiente": 226.0, "tiradas": -226, "obs": "Stock suficiente."}, {"mes": "Mayo", "sku": 61001.0, "producto": "Pancake vainilla", "total": 60000.0, "produccion": 55835.0, "pendiente": 4165.0, "tiradas": -4165, "obs": "Stock suficiente."}, {"mes": "Mayo", "sku": 61002.0, "producto": "Pancake chocolate", "total": 30000.0, "produccion": 21910.0, "pendiente": 8090.0, "tiradas": -8090, "obs": "Stock suficiente."}, {"mes": "Mayo", "sku": 61003.0, "producto": "Cupcake chocolate", "total": 10000.0, "produccion": 8361.0, "pendiente": 1639.0, "tiradas": -1639, "obs": "Stock suficiente."}, {"mes": "Mayo", "sku": 61004.0, "producto": "Chia pudding", "total": 5500.0, "produccion": 4748.0, "pendiente": 752.0, "tiradas": -752, "obs": "Stock suficiente."}, {"mes": "Mayo", "sku": 61005.0, "producto": "Pancake queso", "total": 10000.0, "produccion": 0.0, "pendiente": 10000.0, "tiradas": -10000, "obs": "Faltante de MP (Queso duro)"}, {"mes": "Mayo", "sku": 61007.0, "producto": "Omelette jamón y queso", "total": 2400.0, "produccion": 4699.0, "pendiente": -2299.0, "tiradas": 2299, "obs": ""}, {"mes": "Mayo", "sku": 61008.0, "producto": "Omelette verdura", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 61009.0, "producto": "Pure de papa", "total": 4000.0, "produccion": 3746.0, "pendiente": 254.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 61010.0, "producto": "Pure de zapallo", "total": 1600.0, "produccion": 3760.0, "pendiente": -2160.0, "tiradas": 2160, "obs": ""}, {"mes": "Mayo", "sku": 61011.0, "producto": "Gelatina Durazno", "total": 1600.0, "produccion": 0.0, "pendiente": 1600.0, "tiradas": -1600, "obs": "Stock suficiente."}, {"mes": "Mayo", "sku": 61012.0, "producto": "Gelatina Frutilla", "total": 3200.0, "produccion": 3062.0, "pendiente": 138.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 61017.0, "producto": "Pancakes jalapeño y limón", "total": 10000.0, "produccion": 6855.0, "pendiente": 3145.0, "tiradas": -3145, "obs": "Lanzamiento, se da prioridad a otras producciónes."}, {"mes": "Mayo", "sku": 61018.0, "producto": "Pancakes dulce de leche", "total": 10000.0, "produccion": 9657.0, "pendiente": 343.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 61020.0, "producto": "Pancake chocolate y avellanas", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 62001.0, "producto": "COLAGENO HIDROLIZADO x250g", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 62002.0, "producto": "COLAGENO HIDROLIZADO NARANJA x250g", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 62003.0, "producto": "Colageno Flex (NARANJA)", "total": 500.0, "produccion": 496.0, "pendiente": 4.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 62004.0, "producto": "Colageno Beauty (NARANJA)", "total": 600.0, "produccion": 603.0, "pendiente": -3.0, "tiradas": 3, "obs": ""}, {"mes": "Mayo", "sku": 62005.0, "producto": "Citrato de magnesio", "total": 3300.0, "produccion": 4224.0, "pendiente": -924.0, "tiradas": 924, "obs": ""}, {"mes": "Mayo", "sku": 63001.0, "producto": "Keto PK Vainilla ", "total": 13000.0, "produccion": 12495.0, "pendiente": 505.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 63002.0, "producto": "Keto PK Chocolate", "total": 5600.0, "produccion": 5294.0, "pendiente": 306.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 63003.0, "producto": "Keto Cupcake Vainilla", "total": 2800.0, "produccion": 2675.0, "pendiente": 125.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 63004.0, "producto": "Keto Cupcake Chocolate", "total": 2100.0, "produccion": 2023.0, "pendiente": 77.0, "tiradas": 0, "obs": ""}, {"mes": "Mayo", "sku": 64006.0, "producto": "Proteina de arveja (NATURAL)", "total": 720.0, "produccion": 731.0, "pendiente": -11.0, "tiradas": 11, "obs": ""}, {"mes": "Mayo", "sku": 64007.0, "producto": "Proteina de arveja (VAINILLA)", "total": 720.0, "produccion": "0.00", "pendiente": "720.00", "tiradas": -720, "obs": "Stock suficiente."}, {"mes": "Mayo", "sku": 64001.0, "producto": "Pancake Proteico Vegan", "total": 3600.0, "produccion": 3458.0, "pendiente": 142.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 61013.0, "producto": "Cookies proteicas", "total": 14400.0, "produccion": 6426.0, "pendiente": 7974.0, "tiradas": -7974, "obs": "Faltante de MP (Harina de Lupino)"}, {"mes": "Junio", "sku": 61014.0, "producto": "PANCAKE CAPRESE", "total": 3398.0, "produccion": 0.0, "pendiente": 3398.0, "tiradas": -3398, "obs": "Faltante de MP (Aro caprese)"}, {"mes": "Junio", "sku": 61015.0, "producto": "cupcake lemon con chips", "total": 11000.0, "produccion": 3939.0, "pendiente": 7061.0, "tiradas": -7061, "obs": "Faltante de MP (Harina de Lupino)"}, {"mes": "Junio", "sku": 60001.0, "producto": "Creatina", "total": 0.0, "produccion": 714.0, "pendiente": -714.0, "tiradas": 714, "obs": ""}, {"mes": "Junio", "sku": 61001.0, "producto": "Pancake vainilla", "total": 70606.0, "produccion": 76652.0, "pendiente": -6046.0, "tiradas": 6046, "obs": ""}, {"mes": "Junio", "sku": 61002.0, "producto": "Pancake chocolate", "total": 34584.0, "produccion": 34584.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 61003.0, "producto": "Cupcake chocolate", "total": 11202.0, "produccion": 6415.0, "pendiente": 4787.0, "tiradas": -4787, "obs": "Faltante de MP (Harina de Lupino)"}, {"mes": "Junio", "sku": 61004.0, "producto": "Chia pudding", "total": 1000.0, "produccion": 3925.0, "pendiente": -2925.0, "tiradas": 2925, "obs": ""}, {"mes": "Junio", "sku": 61005.0, "producto": "Pancake queso", "total": 12594.0, "produccion": 0.0, "pendiente": 12594.0, "tiradas": -12594, "obs": "Faltante de MP (Queso duro)"}, {"mes": "Junio", "sku": 61007.0, "producto": "Omelette jamón y queso", "total": 1044.0, "produccion": 3130.0, "pendiente": -2086.0, "tiradas": 2086, "obs": ""}, {"mes": "Junio", "sku": 61008.0, "producto": "Omelette verdura", "total": 253.0, "produccion": 1538.0, "pendiente": -1285.0, "tiradas": 1285, "obs": ""}, {"mes": "Junio", "sku": 61009.0, "producto": "Pure de papa", "total": 2559.0, "produccion": 5308.0, "pendiente": -2749.0, "tiradas": 2749, "obs": ""}, {"mes": "Junio", "sku": 61010.0, "producto": "Pure de zapallo", "total": 694.0, "produccion": 1573.0, "pendiente": -879.0, "tiradas": 879, "obs": ""}, {"mes": "Junio", "sku": 61011.0, "producto": "Gelatina Durazno", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 61012.0, "producto": "Gelatina Frutilla", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 61017.0, "producto": "Pancakes jalapeño y limón", "total": 2899.0, "produccion": 2899.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 61018.0, "producto": "Pancakes dulce de leche", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 61020.0, "producto": "Pancake chocolate y avellanas", "total": 3530.0, "produccion": 4390.0, "pendiente": -860.0, "tiradas": 860, "obs": ""}, {"mes": "Junio", "sku": 62001.0, "producto": "COLAGENO HIDROLIZADO x250g", "total": 461.0, "produccion": 491.0, "pendiente": -30.0, "tiradas": 30, "obs": ""}, {"mes": "Junio", "sku": 62002.0, "producto": "COLAGENO HIDROLIZADO NARANJA x250g", "total": 123.0, "produccion": 500.0, "pendiente": -377.0, "tiradas": 377, "obs": ""}, {"mes": "Junio", "sku": 62003.0, "producto": "Colageno Flex (NARANJA)", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 62004.0, "producto": "Colageno Beauty (NARANJA)", "total": 320.0, "produccion": 598.0, "pendiente": -278.0, "tiradas": 278, "obs": ""}, {"mes": "Junio", "sku": 62005.0, "producto": "Citrato de magnesio", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 63001.0, "producto": "Keto PK Vainilla", "total": 15637.0, "produccion": 15637.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 63002.0, "producto": "Keto PK Chocolate", "total": 6546.0, "produccion": 6546.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Junio", "sku": 63003.0, "producto": "Keto Cupcake Vainilla", "total": 1890.0, "produccion": 3978.0, "pendiente": -2088.0, "tiradas": 2088, "obs": ""}, {"mes": "Junio", "sku": 63004.0, "producto": "Keto Cupcake Chocolate", "total": 2690.0, "produccion": 3294.0, "pendiente": -604.0, "tiradas": 604, "obs": ""}, {"mes": "Junio", "sku": 64006.0, "producto": "Proteina de arveja (NATURAL)", "total": 575.0, "produccion": 727.0, "pendiente": -152.0, "tiradas": 152, "obs": ""}, {"mes": "Junio", "sku": 64007.0, "producto": "Proteina de arveja (VAINILLA)", "total": 1048.0, "produccion": "1,434 ", "pendiente": "-386.00", "tiradas": 386, "obs": ""}, {"mes": "Junio", "sku": 64001.0, "producto": "Pancake Proteico Vegan", "total": 1608.0, "produccion": 4720.0, "pendiente": -3112.0, "tiradas": 3112, "obs": ""}, {"mes": "Julio", "sku": 61013.0, "producto": "Cookies proteicas", "total": 18600.0, "produccion": 12680.0, "pendiente": 5920.0, "tiradas": -5920, "obs": "Stock suficiente."}, {"mes": "Julio", "sku": 61014.0, "producto": "PANCAKE PROTEICO CAPRESE", "total": 4000.0, "produccion": 3926.0, "pendiente": 74.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61015.0, "producto": "CUPCAKES PROTEICOS VAINILLA LEMON", "total": 10000.0, "produccion": 10223.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 60001.0, "producto": "CREATINA MONOHIDRATO MICRONIZADA 300 g", "total": 720.0, "produccion": 718.0, "pendiente": 2.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61001.0, "producto": "PANCAKE PROTEICO SABOR VAINILLA x400g", "total": 56250.0, "produccion": 49630.0, "pendiente": 6620.0, "tiradas": -6620, "obs": "Stock suficiente."}, {"mes": "Julio", "sku": 61002.0, "producto": "PANCAKE PROTEICO SABOR CHOCOLATE x400g", "total": 26550.0, "produccion": 21179.0, "pendiente": 5371.0, "tiradas": -5371, "obs": "Stock suficiente."}, {"mes": "Julio", "sku": 61003.0, "producto": "CUPCAKE PROTEICO SABOR CHOCOLATE x400g", "total": 11000.0, "produccion": 11279.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61004.0, "producto": "CHIA PUDDING x300g", "total": 1000.0, "produccion": 974.0, "pendiente": 26.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61005.0, "producto": "PANCAKES SALADO SABOR QUESO", "total": 20000.0, "produccion": 19939.0, "pendiente": 61.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61007.0, "producto": "OMELETTES PROTEICOS JQ x210g", "total": 2400.0, "produccion": 2385.0, "pendiente": 15.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61008.0, "producto": "OMELETTE PROTEICO ALBAHACA 210g", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61009.0, "producto": "Pure de papa Proteico", "total": 1600.0, "produccion": 1478.0, "pendiente": 122.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61010.0, "producto": "Pure de zapallo Proteico", "total": 1600.0, "produccion": 1519.0, "pendiente": 81.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61011.0, "producto": "Gelatina Durazno", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61012.0, "producto": "Gelatina Frutilla", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61017.0, "producto": "Pancakes Proteicos jalapeño y limón", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61018.0, "producto": "Pancakes Proteicos dulce de leche", "total": 1100.0, "produccion": 1062.0, "pendiente": 38.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 61020.0, "producto": "Pancake chocolate y avellanas", "total": 6000.0, "produccion": 5815.0, "pendiente": 185.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 62001.0, "producto": "COLAGENO HIDROLIZADO x250g", "total": 0.0, "produccion": 1006.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 62002.0, "producto": "COLAGENO HIDROLIZADO NARANJA x250g", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 62003.0, "producto": "[62003] Colageno Flex (NARANJA)", "total": 160.0, "produccion": 154.0, "pendiente": 6.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 62004.0, "producto": "[62004] Colageno Beauty (NARANJA)", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 62005.0, "producto": "CITRATO DE MAGNESIO x144g", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 63001.0, "producto": "Keto PK Vainilla 200g", "total": 21000.0, "produccion": 3938.0, "pendiente": 17062.0, "tiradas": -17062, "obs": "Stock suficiente."}, {"mes": "Julio", "sku": 63002.0, "producto": "Keto PK Chocolate 200g", "total": 10500.0, "produccion": 10236.0, "pendiente": 264.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 63003.0, "producto": "Keto Cupcake Vainilla", "total": 2100.0, "produccion": 2001.0, "pendiente": 99.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 63004.0, "producto": "Keto Cupcake Chocolate", "total": 2800.0, "produccion": 2739.0, "pendiente": 61.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 64001.0, "producto": "[64001] Pancake Proteico Vegan", "total": 0.0, "produccion": 0.0, "pendiente": 0.0, "tiradas": 0, "obs": ""}, {"mes": "Julio", "sku": 64006.0, "producto": "PROTEINA DE ARVEJA SABOR NATURAL x453g", "total": 1440.0, "produccion": 1079.0, "pendiente": 361.0, "tiradas": -361, "obs": "Stock suficiente."}, {"mes": "Julio", "sku": "64007", "producto": "PROTEINA DE ARVEJA SABOR VAINILLA x453g", "total": "1,080.00", "produccion": "723 ", "pendiente": "357.00", "tiradas": 0, "obs": ""}], "mp": [{"MP": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "SKU": 20099, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 17816.756, "%volumen total": 0.3022221461987026, "Mes": "Marzo"}, {"MP": "[20046] LECHE DESCREMADA", "SKU": 20046, "Cant. de productos que se utiliza": 13, "Cant. volumen utilizado": 11134.43, "%volumen total": 0.18887115765065313, "Mes": "Marzo"}, {"MP": "[20128] WPC 34", "SKU": 20128, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 8846.149999999998, "%volumen total": 0.15005551171019305, "Mes": "Marzo"}, {"MP": "[20044] HUEVO EN POLVO", "SKU": 20044, "Cant. de productos que se utiliza": 16, "Cant. volumen utilizado": 6250.589999999999, "%volumen total": 0.10602753524873709, "Mes": "Marzo"}, {"MP": "[20051] POLVO DE HORNEAR", "SKU": 20051, "Cant. de productos que se utiliza": 14, "Cant. volumen utilizado": 2651.94, "%volumen total": 0.04498433937076914, "Mes": "Marzo"}, {"MP": "[20015] CACAO", "SKU": 20015, "Cant. de productos que se utiliza": 7, "Cant. volumen utilizado": 1444.2040000000002, "%volumen total": 0.02449774989502865, "Mes": "Marzo"}, {"MP": "[20052] PROTEINA DE ARVEJA 80", "SKU": 20052, "Cant. de productos que se utiliza": 8, "Cant. volumen utilizado": 111.086, "%volumen total": 0.0018843300841426506, "Mes": "Marzo"}, {"MP": "[20070] ALMIDON DE MAIZ", "SKU": 20070, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 1308.692, "%volumen total": 0.02219908635180683, "Mes": "Marzo"}, {"MP": "[20018] COLAGENO MP", "SKU": 20018, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 951.71, "%volumen total": 0.01614367052895416, "Mes": "Marzo"}, {"MP": "[20019] CREATINA MP", "SKU": 20019, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 864.0, "%volumen total": 0.014655862959322058, "Mes": "Marzo"}, {"MP": "[20130] HARINA DE LUPINO TEXTURIZADA", "SKU": 20130, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 690.7239999999999, "%volumen total": 0.011716616072586537, "Mes": "Marzo"}, {"MP": "[20017] CITRATO DE MAGNESIO MP", "SKU": 20017, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 950.4000000000001, "%volumen total": 0.016121449255254265, "Mes": "Marzo"}, {"MP": "[20041] HARINA DE COCO", "SKU": 20041, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 788.64, "%volumen total": 0.013377546023425634, "Mes": "Marzo"}, {"MP": "[20042] HARINA DE MANI", "SKU": 20042, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 530.172, "%volumen total": 0.008993203908413998, "Mes": "Marzo"}, {"MP": "[20038] HARINA DE ALMENDRAS", "SKU": 20038, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 781.956, "%volumen total": 0.0132641666391431, "Mes": "Marzo"}, {"MP": "[20143] HARINA DE CASTAÑA DE CAJÚ", "SKU": 20143, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 671.65, "%volumen total": 0.011393067542394282, "Mes": "Marzo"}, {"MP": "[20089] INULINA ORAFTI HSI", "SKU": 20089, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 538.594, "%volumen total": 0.009136064646658686, "Mes": "Marzo"}, {"MP": "[20049] MALTODEXTRINA", "SKU": 20049, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 300.36, "%volumen total": 0.005094947914886543, "Mes": "Marzo"}, {"MP": "[20121] MALTITOL", "SKU": 20121, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 216.01600000000002, "%volumen total": 0.003664237144700132, "Mes": "Marzo"}, {"MP": "[20039] HARINA DE ARROZ", "SKU": 20039, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20016] CHIA", "SKU": 20016, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 364.0, "%volumen total": 0.006174460783788459, "Mes": "Marzo"}, {"MP": "[20124] MICRO CHIPS (CHIP274B)", "SKU": 20124, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 225.87, "%volumen total": 0.003831388618775548, "Mes": "Marzo"}, {"MP": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "SKU": 20004, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 176.944, "%volumen total": 0.003001466453095234, "Mes": "Marzo"}, {"MP": "[20043] HUEVO ANÁLOGO", "SKU": 20043, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20065] ARO VAINILLA PIEDMONT 101.090", "SKU": 20065, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 155.6655, "%volumen total": 0.0026405234207110507, "Mes": "Marzo"}, {"MP": "[20114] GELATINA BLOOM 250", "SKU": 20114, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 129.078, "%volumen total": 0.0021895248600270517, "Mes": "Marzo"}, {"MP": "[20126] PAPA DESHIDRATADA", "SKU": 20126, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20140] ERITRITOL", "SKU": 20140, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 146.15, "%volumen total": 0.002479113855908471, "Mes": "Marzo"}, {"MP": "[20132] GLUTAGEL NT", "SKU": 20132, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 23.7, "%volumen total": 0.0004020184631202925, "Mes": "Marzo"}, {"MP": "[20047] LECHE ENTERA", "SKU": 20047, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 96.72, "%volumen total": 0.0016406424368352191, "Mes": "Marzo"}, {"MP": "[20125] ZAPALLO DESHIDRATADO", "SKU": 20125, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20072] ARO QUESO BA-9869-72 HARMONY", "SKU": 20072, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 86.79, "%volumen total": 0.001472201789629122, "Mes": "Marzo"}, {"MP": "[20068] NUTRILAC 7549", "SKU": 20068, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 55.980000000000004, "%volumen total": 0.0009495777875727418, "Mes": "Marzo"}, {"MP": "[20071] QUESO EN POLVO TIPO DURO 322195 HARMONY", "SKU": 20071, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 90.75, "%volumen total": 0.001539374494859348, "Mes": "Marzo"}, {"MP": "[20131] EMULCAKE 7524", "SKU": 20131, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 70.4, "%volumen total": 0.0011941814263151307, "Mes": "Marzo"}, {"MP": "[20088] Fibra Citric E 4030", "SKU": 20088, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 68.946, "%volumen total": 0.0011695175087886788, "Mes": "Marzo"}, {"MP": "[20134] FOSFATO MONOCALCICO POLVO FINO", "SKU": 20134, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 5.821000000000001, "%volumen total": 9.874048412756216e-05, "Mes": "Marzo"}, {"MP": "[20146] LEVADURA SECA INACTIVADA", "SKU": 20146, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 34.01, "%volumen total": 0.0005769049759797953, "Mes": "Marzo"}, {"MP": "[20127] ARO CAPRESE BD 043 100 2", "SKU": 20127, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 27.0, "%volumen total": 0.0004579957174788143, "Mes": "Marzo"}, {"MP": "[20136] HARINA DE ARROZ MICRONIZADA", "SKU": 20136, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 53.8, "%volumen total": 0.0009125988740874151, "Mes": "Marzo"}, {"MP": "[20058] SUCRALOSA", "SKU": 20058, "Cant. de productos que se utiliza": 17, "Cant. volumen utilizado": 27.093799999999998, "%volumen total": 0.00045958682852694437, "Mes": "Marzo"}, {"MP": "[20133] BICARBONATO DE SODIO", "SKU": 20133, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 6.996, "%volumen total": 0.00011867177924006611, "Mes": "Marzo"}, {"MP": "[20117] ARO FRUTILLA BA-7997-31", "SKU": 20117, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 19.2, "%volumen total": 0.00032568584354049015, "Mes": "Marzo"}, {"MP": "[20067] GLICINA", "SKU": 20067, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 35.0, "%volumen total": 0.0005936981522873519, "Mes": "Marzo"}, {"MP": "[20081] ACIDO CITRICO", "SKU": 20081, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 13.6, "%volumen total": 0.00023069413917451386, "Mes": "Marzo"}, {"MP": "[20011] ARO VAINILLA LK11652", "SKU": 20011, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 2.45, "%volumen total": 4.1558870660114633e-05, "Mes": "Marzo"}, {"MP": "[20082] CITRATO DE SODIO", "SKU": 20082, "Cant. de productos que se utiliza": 5, "Cant. volumen utilizado": 14.959999999999999, "%volumen total": 0.00025376355309196524, "Mes": "Marzo"}, {"MP": "[20116] ACIDO FUMARICO", "SKU": 20116, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 14.56, "%volumen total": 0.0002469784313515384, "Mes": "Marzo"}, {"MP": "[20008] NARANJA RBP 10735", "SKU": 20008, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 13.6, "%volumen total": 0.00023069413917451386, "Mes": "Marzo"}, {"MP": "[20119] ARO DURAZNO TO 292 101 6", "SKU": 20119, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 14.4, "%volumen total": 0.00024426438265536763, "Mes": "Marzo"}, {"MP": "[20013] MIX FLEX", "SKU": 20013, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.5, "%volumen total": 0.00012722103263300397, "Mes": "Marzo"}, {"MP": "[20123] ARO VAINILLA CARAMELO 52-18222", "SKU": 20123, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.577, "%volumen total": 0.00012852716856803616, "Mes": "Marzo"}, {"MP": "[20106] JAMON 74918", "SKU": 20106, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 4.2, "%volumen total": 7.124377827448222e-05, "Mes": "Marzo"}, {"MP": "[20137] GOMA XÁNTICA", "SKU": 20137, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 8.642999999999999, "%volumen total": 0.00014660951800627377, "Mes": "Marzo"}, {"MP": "[20077] TOMATE", "SKU": 20077, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20076] ZANAHORIA", "SKU": 20076, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20075] ZAPALLO", "SKU": 20075, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20122] SAL", "SKU": 20122, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 2.7859999999999996, "%volumen total": 4.72583729220732e-05, "Mes": "Marzo"}, {"MP": "[20078] ESPINACA", "SKU": 20078, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20138] ARO AVELLANA 52027 SPM /10M", "SKU": 20138, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 9.0, "%volumen total": 0.00015266523915960476, "Mes": "Marzo"}, {"MP": "[20107] MIX BEAUTY", "SKU": 20107, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 4.68, "%volumen total": 7.938592436299447e-05, "Mes": "Marzo"}, {"MP": "[20080] EMULSWEET 3094", "SKU": 20080, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 2.55, "%volumen total": 4.325515109522135e-05, "Mes": "Marzo"}, {"MP": "[20115] VITAMINA C", "SKU": 20115, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 1.632, "%volumen total": 2.7683296700941663e-05, "Mes": "Marzo"}, {"MP": "[20079] ARO ALBAHACA FRYMA 42-16886MS", "SKU": 20079, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20007] ARO LIMON LK 11831", "SKU": 20007, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 3.25, "%volumen total": 5.512911414096839e-05, "Mes": "Marzo"}, {"MP": "[20120] COLORANTE BETA CAROTENO", "SKU": 20120, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.096, "%volumen total": 1.628429217702451e-06, "Mes": "Marzo"}, {"MP": "[20118] COLORANTE CARMIN SOLUBLE", "SKU": 20118, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.048, "%volumen total": 8.142146088512255e-07, "Mes": "Marzo"}, {"MP": "[20002] ALBUMINA HIDROLIZADA", "SKU": 20002, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 79.0, "%volumen total": 0.0013400615437343085, "Mes": "Marzo"}, {"MP": "[20142] NUTRILAC 8100", "SKU": 20142, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20066] ARO CHOCOLATE (42-16281MS)", "SKU": 20066, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20009] ARO VAINILLA 12-11045 (CREMOSA)", "SKU": 20009, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20050] MODULADOR S2", "SKU": 20050, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20005] ARO FRUTILLA RBP 43", "SKU": 20005, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20006] ARO J Y Q", "SKU": 20006, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20012] MIX 902 - BEAUTY (S/ RESV)", "SKU": 20012, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20045] LACPRODAN 80", "SKU": 20045, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20053] PROTEINA DE SOJA", "SKU": 20053, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20129] MANDIOCA", "SKU": 20129, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20145] WPC 80", "SKU": 20145, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20147] MONO Y DIGLICERIDOS", "SKU": 20147, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20148] ARO PISTACHO 52-19124MS", "SKU": 20148, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20149] ARO CHOCOLATE SW 410", "SKU": 20149, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20151] NUTRILATE 80", "SKU": 20151, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20152] ARO CARAMELO 52-18298MS", "SKU": 20152, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20154] ARO CAPRESE FX-5750 SPM", "SKU": 20154, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20155] GRASA EN POLVO 80%", "SKU": 20155, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20156] LEVADURA PROTEISSIMO 102", "SKU": 20156, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20159] ARO Coco 130824 Piedmont", "SKU": 20159, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20160] ARO Dulce de leche FX-2864 SPM/10M", "SKU": 20160, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20162] ARO JAMÓN SERRANO JP56-32/0 (SAPORITI)", "SKU": 20162, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20165] ARO PICANTE JP76-32/0", "SKU": 20165, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20166] ARO JALAPEÑO  VF-318-548-3", "SKU": 20166, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20168] COLORANTE CARAMELO 3162", "SKU": 20168, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20169] COMPLEX 80i", "SKU": 20169, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Marzo"}, {"MP": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "SKU": 20099, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 19950.018, "%volumen total": 0.2940668298593122, "Mes": "Abril"}, {"MP": "[20046] LECHE DESCREMADA", "SKU": 20046, "Cant. de productos que se utiliza": 13, "Cant. volumen utilizado": 12529.683000000003, "%volumen total": 0.18468976614217175, "Mes": "Abril"}, {"MP": "[20128] WPC 34", "SKU": 20128, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 9767.409999999998, "%volumen total": 0.1439733685772185, "Mes": "Abril"}, {"MP": "[20044] HUEVO EN POLVO", "SKU": 20044, "Cant. de productos que se utiliza": 16, "Cant. volumen utilizado": 7076.098, "%volumen total": 0.10430294883111481, "Mes": "Abril"}, {"MP": "[20051] POLVO DE HORNEAR", "SKU": 20051, "Cant. de productos que se utiliza": 14, "Cant. volumen utilizado": 2842.7200000000003, "%volumen total": 0.0419022007186993, "Mes": "Abril"}, {"MP": "[20015] CACAO", "SKU": 20015, "Cant. de productos que se utiliza": 7, "Cant. volumen utilizado": 1995.8944000000001, "%volumen total": 0.029419840069415178, "Mes": "Abril"}, {"MP": "[20052] PROTEINA DE ARVEJA 80", "SKU": 20052, "Cant. de productos que se utiliza": 8, "Cant. volumen utilizado": 3496.1544000000004, "%volumen total": 0.05153394052610308, "Mes": "Abril"}, {"MP": "[20070] ALMIDON DE MAIZ", "SKU": 20070, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 1106.9560000000001, "%volumen total": 0.016316729223690166, "Mes": "Abril"}, {"MP": "[20018] COLAGENO MP", "SKU": 20018, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 1204.23, "%volumen total": 0.017750565363975086, "Mes": "Abril"}, {"MP": "[20019] CREATINA MP", "SKU": 20019, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 324.0, "%volumen total": 0.004775817890210282, "Mes": "Abril"}, {"MP": "[20130] HARINA DE LUPINO TEXTURIZADA", "SKU": 20130, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 698.9960000000001, "%volumen total": 0.010303325932053787, "Mes": "Abril"}, {"MP": "[20017] CITRATO DE MAGNESIO MP", "SKU": 20017, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 316.8, "%volumen total": 0.004669688603761165, "Mes": "Abril"}, {"MP": "[20041] HARINA DE COCO", "SKU": 20041, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 516.24, "%volumen total": 0.007609469838401716, "Mes": "Abril"}, {"MP": "[20042] HARINA DE MANI", "SKU": 20042, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 638.7812, "%volumen total": 0.009415749021265409, "Mes": "Abril"}, {"MP": "[20038] HARINA DE ALMENDRAS", "SKU": 20038, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 575.172, "%volumen total": 0.008478138047987742, "Mes": "Abril"}, {"MP": "[20143] HARINA DE CASTAÑA DE CAJÚ", "SKU": 20143, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 481.16, "%volumen total": 0.007092384370535739, "Mes": "Abril"}, {"MP": "[20089] INULINA ORAFTI HSI", "SKU": 20089, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 436.848, "%volumen total": 0.006439217573156115, "Mes": "Abril"}, {"MP": "[20049] MALTODEXTRINA", "SKU": 20049, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 336.12, "%volumen total": 0.004954468855732963, "Mes": "Abril"}, {"MP": "[20121] MALTITOL", "SKU": 20121, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 307.09439999999995, "%volumen total": 0.004526626325627754, "Mes": "Abril"}, {"MP": "[20039] HARINA DE ARROZ", "SKU": 20039, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20016] CHIA", "SKU": 20016, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 218.39999999999998, "%volumen total": 0.0032192550222898933, "Mes": "Abril"}, {"MP": "[20124] MICRO CHIPS (CHIP274B)", "SKU": 20124, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 249.266, "%volumen total": 0.0036742253772257907, "Mes": "Abril"}, {"MP": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "SKU": 20004, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 264.2572, "%volumen total": 0.003895198343755792, "Mes": "Abril"}, {"MP": "[20043] HUEVO ANÁLOGO", "SKU": 20043, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 216.0, "%volumen total": 0.0031838785934735214, "Mes": "Abril"}, {"MP": "[20065] ARO VAINILLA PIEDMONT 101.090", "SKU": 20065, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 144.4722, "%volumen total": 0.0021295460413519687, "Mes": "Abril"}, {"MP": "[20114] GELATINA BLOOM 250", "SKU": 20114, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 155.96820000000002, "%volumen total": 0.002298999135382393, "Mes": "Abril"}, {"MP": "[20126] PAPA DESHIDRATADA", "SKU": 20126, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 326.4, "%volumen total": 0.0048111943190266545, "Mes": "Abril"}, {"MP": "[20140] ERITRITOL", "SKU": 20140, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 72.04, "%volumen total": 0.0010618824716381134, "Mes": "Abril"}, {"MP": "[20132] GLUTAGEL NT", "SKU": 20132, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 12.0, "%volumen total": 0.0001768821440818623, "Mes": "Abril"}, {"MP": "[20047] LECHE ENTERA", "SKU": 20047, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 137.64, "%volumen total": 0.0020288381926189605, "Mes": "Abril"}, {"MP": "[20125] ZAPALLO DESHIDRATADO", "SKU": 20125, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 244.79999999999998, "%volumen total": 0.0036083957392699906, "Mes": "Abril"}, {"MP": "[20072] ARO QUESO BA-9869-72 HARMONY", "SKU": 20072, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 101.5, "%volumen total": 0.0014961281353590853, "Mes": "Abril"}, {"MP": "[20068] NUTRILAC 7549", "SKU": 20068, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 174.72, "%volumen total": 0.002575404017831915, "Mes": "Abril"}, {"MP": "[20071] QUESO EN POLVO TIPO DURO 322195 HARMONY", "SKU": 20071, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 84.7, "%volumen total": 0.0012484931336444781, "Mes": "Abril"}, {"MP": "[20131] EMULCAKE 7524", "SKU": 20131, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 58.18, "%volumen total": 0.0008575835952235624, "Mes": "Abril"}, {"MP": "[20088] Fibra Citric E 4030", "SKU": 20088, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 61.26639999999999, "%volumen total": 0.0009030776826814172, "Mes": "Abril"}, {"MP": "[20134] FOSFATO MONOCALCICO POLVO FINO", "SKU": 20134, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.477800000000002, "%volumen total": 0.00015444464410507808, "Mes": "Abril"}, {"MP": "[20146] LEVADURA SECA INACTIVADA", "SKU": 20146, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 34.637, "%volumen total": 0.0005105555687136221, "Mes": "Abril"}, {"MP": "[20127] ARO CAPRESE BD 043 100 2", "SKU": 20127, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 18.0, "%volumen total": 0.00026532321612279347, "Mes": "Abril"}, {"MP": "[20136] HARINA DE ARROZ MICRONIZADA", "SKU": 20136, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 299.9, "%volumen total": 0.0044205795841792085, "Mes": "Abril"}, {"MP": "[20058] SUCRALOSA", "SKU": 20058, "Cant. de productos que se utiliza": 17, "Cant. volumen utilizado": 31.978799999999996, "%volumen total": 0.0004713732257637548, "Mes": "Abril"}, {"MP": "[20133] BICARBONATO DE SODIO", "SKU": 20133, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 12.5928, "%volumen total": 0.0001856201219995063, "Mes": "Abril"}, {"MP": "[20117] ARO FRUTILLA BA-7997-31", "SKU": 20117, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 28.799999999999997, "%volumen total": 0.0004245171457964695, "Mes": "Abril"}, {"MP": "[20067] GLICINA", "SKU": 20067, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 21.0, "%volumen total": 0.00030954375214325904, "Mes": "Abril"}, {"MP": "[20081] ACIDO CITRICO", "SKU": 20081, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 22.2, "%volumen total": 0.00032723196655144526, "Mes": "Abril"}, {"MP": "[20011] ARO VAINILLA LK11652", "SKU": 20011, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 66.48, "%volumen total": 0.0009799270782135173, "Mes": "Abril"}, {"MP": "[20082] CITRATO DE SODIO", "SKU": 20082, "Cant. de productos que se utiliza": 5, "Cant. volumen utilizado": 16.979999999999997, "%volumen total": 0.00025028823387583513, "Mes": "Abril"}, {"MP": "[20116] ACIDO FUMARICO", "SKU": 20116, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 16.38, "%volumen total": 0.00024144412667174203, "Mes": "Abril"}, {"MP": "[20008] NARANJA RBP 10735", "SKU": 20008, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 16.8, "%volumen total": 0.00024763500171460725, "Mes": "Abril"}, {"MP": "[20119] ARO DURAZNO TO 292 101 6", "SKU": 20119, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.8, "%volumen total": 0.0001591939296736761, "Mes": "Abril"}, {"MP": "[20013] MIX FLEX", "SKU": 20013, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 15.0, "%volumen total": 0.00022110268010232787, "Mes": "Abril"}, {"MP": "[20123] ARO VAINILLA CARAMELO 52-18222", "SKU": 20123, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 13.6386, "%volumen total": 0.0002010354008562406, "Mes": "Abril"}, {"MP": "[20106] JAMON 74918", "SKU": 20106, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 21.0, "%volumen total": 0.00030954375214325904, "Mes": "Abril"}, {"MP": "[20137] GOMA XÁNTICA", "SKU": 20137, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 6.7776, "%volumen total": 9.990303497743582e-05, "Mes": "Abril"}, {"MP": "[20077] TOMATE", "SKU": 20077, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.6, "%volumen total": 0.00017098607261246688, "Mes": "Abril"}, {"MP": "[20076] ZANAHORIA", "SKU": 20076, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.42, "%volumen total": 0.00016833284045123895, "Mes": "Abril"}, {"MP": "[20075] ZAPALLO", "SKU": 20075, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.92, "%volumen total": 0.0001609627511144947, "Mes": "Abril"}, {"MP": "[20122] SAL", "SKU": 20122, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 4.5047999999999995, "%volumen total": 6.64015568883311e-05, "Mes": "Abril"}, {"MP": "[20078] ESPINACA", "SKU": 20078, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.9, "%volumen total": 0.00011644741152055935, "Mes": "Abril"}, {"MP": "[20138] ARO AVELLANA 52027 SPM /10M", "SKU": 20138, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20107] MIX BEAUTY", "SKU": 20107, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 2.34, "%volumen total": 3.4492018095963145e-05, "Mes": "Abril"}, {"MP": "[20080] EMULSWEET 3094", "SKU": 20080, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 3.15, "%volumen total": 4.643156282148885e-05, "Mes": "Abril"}, {"MP": "[20115] VITAMINA C", "SKU": 20115, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 1.8359999999999999, "%volumen total": 2.706296804452493e-05, "Mes": "Abril"}, {"MP": "[20079] ARO ALBAHACA FRYMA 42-16886MS", "SKU": 20079, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.84, "%volumen total": 1.238175008573036e-05, "Mes": "Abril"}, {"MP": "[20007] ARO LIMON LK 11831", "SKU": 20007, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 1.7, "%volumen total": 2.5058303744930493e-05, "Mes": "Abril"}, {"MP": "[20120] COLORANTE BETA CAROTENO", "SKU": 20120, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.07200000000000001, "%volumen total": 1.061292864491174e-06, "Mes": "Abril"}, {"MP": "[20118] COLORANTE CARMIN SOLUBLE", "SKU": 20118, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.07200000000000001, "%volumen total": 1.061292864491174e-06, "Mes": "Abril"}, {"MP": "[20002] ALBUMINA HIDROLIZADA", "SKU": 20002, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20142] NUTRILAC 8100", "SKU": 20142, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20066] ARO CHOCOLATE (42-16281MS)", "SKU": 20066, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20009] ARO VAINILLA 12-11045 (CREMOSA)", "SKU": 20009, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20050] MODULADOR S2", "SKU": 20050, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20005] ARO FRUTILLA RBP 43", "SKU": 20005, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20006] ARO J Y Q", "SKU": 20006, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20012] MIX 902 - BEAUTY (S/ RESV)", "SKU": 20012, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20045] LACPRODAN 80", "SKU": 20045, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20053] PROTEINA DE SOJA", "SKU": 20053, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20129] MANDIOCA", "SKU": 20129, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20145] WPC 80", "SKU": 20145, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20147] MONO Y DIGLICERIDOS", "SKU": 20147, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20148] ARO PISTACHO 52-19124MS", "SKU": 20148, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20149] ARO CHOCOLATE SW 410", "SKU": 20149, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20151] NUTRILATE 80", "SKU": 20151, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20152] ARO CARAMELO 52-18298MS", "SKU": 20152, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20154] ARO CAPRESE FX-5750 SPM", "SKU": 20154, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20155] GRASA EN POLVO 80%", "SKU": 20155, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20156] LEVADURA PROTEISSIMO 102", "SKU": 20156, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20159] ARO Coco 130824 Piedmont", "SKU": 20159, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20160] ARO Dulce de leche FX-2864 SPM/10M", "SKU": 20160, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20162] ARO JAMÓN SERRANO JP56-32/0 (SAPORITI)", "SKU": 20162, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20165] ARO PICANTE JP76-32/0", "SKU": 20165, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20166] ARO JALAPEÑO  VF-318-548-3", "SKU": 20166, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20168] COLORANTE CARAMELO 3162", "SKU": 20168, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20169] COMPLEX 80i", "SKU": 20169, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Abril"}, {"MP": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "SKU": 20099, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 16685.66, "%volumen total": 0.29144251567085205, "Mes": "Mayo"}, {"MP": "[20046] LECHE DESCREMADA", "SKU": 20046, "Cant. de productos que se utiliza": 13, "Cant. volumen utilizado": 10455.560000000001, "%volumen total": 0.18262356473448066, "Mes": "Mayo"}, {"MP": "[20128] WPC 34", "SKU": 20128, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 8385.695000000002, "%volumen total": 0.14646996561409537, "Mes": "Mayo"}, {"MP": "[20044] HUEVO EN POLVO", "SKU": 20044, "Cant. de productos que se utiliza": 16, "Cant. volumen utilizado": 6669.025, "%volumen total": 0.11648549851020602, "Mes": "Mayo"}, {"MP": "[20051] POLVO DE HORNEAR", "SKU": 20051, "Cant. de productos que se utiliza": 14, "Cant. volumen utilizado": 2441.0099999999998, "%volumen total": 0.042636257431693234, "Mes": "Mayo"}, {"MP": "[20015] CACAO", "SKU": 20015, "Cant. de productos que se utiliza": 7, "Cant. volumen utilizado": 1275.7392, "%volumen total": 0.02228288493160716, "Mes": "Mayo"}, {"MP": "[20052] PROTEINA DE ARVEJA 80", "SKU": 20052, "Cant. de productos que se utiliza": 8, "Cant. volumen utilizado": 406.4152, "%volumen total": 0.0070987104073121764, "Mes": "Mayo"}, {"MP": "[20070] ALMIDON DE MAIZ", "SKU": 20070, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 1001.359, "%volumen total": 0.01749038312237267, "Mes": "Mayo"}, {"MP": "[20018] COLAGENO MP", "SKU": 20018, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 445.03, "%volumen total": 0.007773181447362543, "Mes": "Mayo"}, {"MP": "[20019] CREATINA MP", "SKU": 20019, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 378.0, "%volumen total": 0.006602392169298792, "Mes": "Mayo"}, {"MP": "[20130] HARINA DE LUPINO TEXTURIZADA", "SKU": 20130, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 660.547, "%volumen total": 0.011537540582682035, "Mes": "Mayo"}, {"MP": "[20017] CITRATO DE MAGNESIO MP", "SKU": 20017, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 792.0, "%volumen total": 0.013833583592816516, "Mes": "Mayo"}, {"MP": "[20041] HARINA DE COCO", "SKU": 20041, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 642.15, "%volumen total": 0.011216206697130209, "Mes": "Mayo"}, {"MP": "[20042] HARINA DE MANI", "SKU": 20042, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 795.2876, "%volumen total": 0.013891006938043465, "Mes": "Mayo"}, {"MP": "[20038] HARINA DE ALMENDRAS", "SKU": 20038, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 585.7560000000001, "%volumen total": 0.010231192665396254, "Mes": "Mayo"}, {"MP": "[20143] HARINA DE CASTAÑA DE CAJÚ", "SKU": 20143, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 566.06, "%volumen total": 0.009887169606754693, "Mes": "Mayo"}, {"MP": "[20089] INULINA ORAFTI HSI", "SKU": 20089, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 405.694, "%volumen total": 0.007086113462252657, "Mes": "Mayo"}, {"MP": "[20049] MALTODEXTRINA", "SKU": 20049, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 184.75, "%volumen total": 0.003226962839359661, "Mes": "Mayo"}, {"MP": "[20121] MALTITOL", "SKU": 20121, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 301.92719999999997, "%volumen total": 0.005273655505233624, "Mes": "Mayo"}, {"MP": "[20039] HARINA DE ARROZ", "SKU": 20039, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20016] CHIA", "SKU": 20016, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 728.0, "%volumen total": 0.012715718251982859, "Mes": "Mayo"}, {"MP": "[20124] MICRO CHIPS (CHIP274B)", "SKU": 20124, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 278.305, "%volumen total": 0.004861054901261112, "Mes": "Mayo"}, {"MP": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "SKU": 20004, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 180.54960000000003, "%volumen total": 0.0031535959397090726, "Mes": "Mayo"}, {"MP": "[20043] HUEVO ANÁLOGO", "SKU": 20043, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 288.0, "%volumen total": 0.0050303940337514605, "Mes": "Mayo"}, {"MP": "[20065] ARO VAINILLA PIEDMONT 101.090", "SKU": 20065, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 142.6821, "%volumen total": 0.002492177724177532, "Mes": "Mayo"}, {"MP": "[20114] GELATINA BLOOM 250", "SKU": 20114, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 95.5926, "%volumen total": 0.0016696820996902426, "Mes": "Mayo"}, {"MP": "[20126] PAPA DESHIDRATADA", "SKU": 20126, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 489.59999999999997, "%volumen total": 0.008551669857377483, "Mes": "Mayo"}, {"MP": "[20140] ERITRITOL", "SKU": 20140, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 128.14, "%volumen total": 0.0022381760121003894, "Mes": "Mayo"}, {"MP": "[20132] GLUTAGEL NT", "SKU": 20132, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 20.7, "%volumen total": 0.0003615595711758862, "Mes": "Mayo"}, {"MP": "[20047] LECHE ENTERA", "SKU": 20047, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 62.0, "%volumen total": 0.0010829320489326062, "Mes": "Mayo"}, {"MP": "[20125] ZAPALLO DESHIDRATADO", "SKU": 20125, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 408.0, "%volumen total": 0.007126391547814569, "Mes": "Mayo"}, {"MP": "[20072] ARO QUESO BA-9869-72 HARMONY", "SKU": 20072, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 40.32, "%volumen total": 0.0007042551647252045, "Mes": "Mayo"}, {"MP": "[20068] NUTRILAC 7549", "SKU": 20068, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 274.56, "%volumen total": 0.0047956423121763925, "Mes": "Mayo"}, {"MP": "[20071] QUESO EN POLVO TIPO DURO 322195 HARMONY", "SKU": 20071, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20131] EMULCAKE 7524", "SKU": 20131, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 77.24000000000001, "%volumen total": 0.001349123733218621, "Mes": "Mayo"}, {"MP": "[20088] Fibra Citric E 4030", "SKU": 20088, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 66.4752, "%volumen total": 0.0011610987828903996, "Mes": "Mayo"}, {"MP": "[20134] FOSFATO MONOCALCICO POLVO FINO", "SKU": 20134, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 8.7315, "%volumen total": 0.00015251001911701696, "Mes": "Mayo"}, {"MP": "[20146] LEVADURA SECA INACTIVADA", "SKU": 20146, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 20.561, "%volumen total": 0.0003591317073887631, "Mes": "Mayo"}, {"MP": "[20127] ARO CAPRESE BD 043 100 2", "SKU": 20127, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 13.5, "%volumen total": 0.0002357997203320997, "Mes": "Mayo"}, {"MP": "[20136] HARINA DE ARROZ MICRONIZADA", "SKU": 20136, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 417.8, "%volumen total": 0.007297564678129724, "Mes": "Mayo"}, {"MP": "[20058] SUCRALOSA", "SKU": 20058, "Cant. de productos que se utiliza": 17, "Cant. volumen utilizado": 26.0698, "%volumen total": 0.00045535196660102025, "Mes": "Mayo"}, {"MP": "[20133] BICARBONATO DE SODIO", "SKU": 20133, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.494, "%volumen total": 0.00018329498260481885, "Mes": "Mayo"}, {"MP": "[20117] ARO FRUTILLA BA-7997-31", "SKU": 20117, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 24.0, "%volumen total": 0.0004191995028126217, "Mes": "Mayo"}, {"MP": "[20067] GLICINA", "SKU": 20067, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 70.0, "%volumen total": 0.0012226652165368134, "Mes": "Mayo"}, {"MP": "[20081] ACIDO CITRICO", "SKU": 20081, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 16.0, "%volumen total": 0.0002794663352084145, "Mes": "Mayo"}, {"MP": "[20011] ARO VAINILLA LK11652", "SKU": 20011, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20082] CITRATO DE SODIO", "SKU": 20082, "Cant. de productos que se utiliza": 5, "Cant. volumen utilizado": 9.38, "%volumen total": 0.000163837139015933, "Mes": "Mayo"}, {"MP": "[20116] ACIDO FUMARICO", "SKU": 20116, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 9.1, "%volumen total": 0.00015894647814978572, "Mes": "Mayo"}, {"MP": "[20008] NARANJA RBP 10735", "SKU": 20008, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 8.8, "%volumen total": 0.00015370648436462798, "Mes": "Mayo"}, {"MP": "[20119] ARO DURAZNO TO 292 101 6", "SKU": 20119, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20013] MIX FLEX", "SKU": 20013, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.5, "%volumen total": 0.00013099984462894428, "Mes": "Mayo"}, {"MP": "[20123] ARO VAINILLA CARAMELO 52-18222", "SKU": 20123, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.3655, "%volumen total": 0.0001985171645507022, "Mes": "Mayo"}, {"MP": "[20106] JAMON 74918", "SKU": 20106, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 33.6, "%volumen total": 0.0005868793039376704, "Mes": "Mayo"}, {"MP": "[20137] GOMA XÁNTICA", "SKU": 20137, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 8.0358, "%volumen total": 0.00014035847352923607, "Mes": "Mayo"}, {"MP": "[20077] TOMATE", "SKU": 20077, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20076] ZANAHORIA", "SKU": 20076, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20075] ZAPALLO", "SKU": 20075, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20122] SAL", "SKU": 20122, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 3.729, "%volumen total": 6.51331227495111e-05, "Mes": "Mayo"}, {"MP": "[20078] ESPINACA", "SKU": 20078, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20138] ARO AVELLANA 52027 SPM /10M", "SKU": 20138, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20107] MIX BEAUTY", "SKU": 20107, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 2.34, "%volumen total": 4.087195152423061e-05, "Mes": "Mayo"}, {"MP": "[20080] EMULSWEET 3094", "SKU": 20080, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 1.65, "%volumen total": 2.8819965818367742e-05, "Mes": "Mayo"}, {"MP": "[20115] VITAMINA C", "SKU": 20115, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 1.02, "%volumen total": 1.7815978869536424e-05, "Mes": "Mayo"}, {"MP": "[20079] ARO ALBAHACA FRYMA 42-16886MS", "SKU": 20079, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20007] ARO LIMON LK 11831", "SKU": 20007, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 9.5, "%volumen total": 0.0001659331365299961, "Mes": "Mayo"}, {"MP": "[20120] COLORANTE BETA CAROTENO", "SKU": 20120, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20118] COLORANTE CARMIN SOLUBLE", "SKU": 20118, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.06, "%volumen total": 1.0479987570315543e-06, "Mes": "Mayo"}, {"MP": "[20002] ALBUMINA HIDROLIZADA", "SKU": 20002, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20142] NUTRILAC 8100", "SKU": 20142, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20066] ARO CHOCOLATE (42-16281MS)", "SKU": 20066, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20009] ARO VAINILLA 12-11045 (CREMOSA)", "SKU": 20009, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20050] MODULADOR S2", "SKU": 20050, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20005] ARO FRUTILLA RBP 43", "SKU": 20005, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20006] ARO J Y Q", "SKU": 20006, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20012] MIX 902 - BEAUTY (S/ RESV)", "SKU": 20012, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20045] LACPRODAN 80", "SKU": 20045, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20053] PROTEINA DE SOJA", "SKU": 20053, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20129] MANDIOCA", "SKU": 20129, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20145] WPC 80", "SKU": 20145, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20147] MONO Y DIGLICERIDOS", "SKU": 20147, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20148] ARO PISTACHO 52-19124MS", "SKU": 20148, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20149] ARO CHOCOLATE SW 410", "SKU": 20149, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20151] NUTRILATE 80", "SKU": 20151, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20152] ARO CARAMELO 52-18298MS", "SKU": 20152, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20154] ARO CAPRESE FX-5750 SPM", "SKU": 20154, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20155] GRASA EN POLVO 80%", "SKU": 20155, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20156] LEVADURA PROTEISSIMO 102", "SKU": 20156, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20159] ARO Coco 130824 Piedmont", "SKU": 20159, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20160] ARO Dulce de leche FX-2864 SPM/10M", "SKU": 20160, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 54.910000000000004, "%volumen total": 0.0009590935291433775, "Mes": "Mayo"}, {"MP": "[20162] ARO JAMÓN SERRANO JP56-32/0 (SAPORITI)", "SKU": 20162, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20165] ARO PICANTE JP76-32/0", "SKU": 20165, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 42.0, "%volumen total": 0.000733599129922088, "Mes": "Mayo"}, {"MP": "[20166] ARO JALAPEÑO  VF-318-548-3", "SKU": 20166, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 84.0, "%volumen total": 0.001467198259844176, "Mes": "Mayo"}, {"MP": "[20168] COLORANTE CARAMELO 3162", "SKU": 20168, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20169] COMPLEX 80i", "SKU": 20169, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Mayo"}, {"MP": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "SKU": 20099, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 20359.250000000004, "%volumen total": 0.3556078115682446, "Mes": "Junio"}, {"MP": "[20046] LECHE DESCREMADA", "SKU": 20046, "Cant. de productos que se utiliza": 13, "Cant. volumen utilizado": 12310.647, "%volumen total": 0.2150257125709039, "Mes": "Junio"}, {"MP": "[20128] WPC 34", "SKU": 20128, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 10376.461, "%volumen total": 0.18124197050643998, "Mes": "Junio"}, {"MP": "[20044] HUEVO EN POLVO", "SKU": 20044, "Cant. de productos que se utiliza": 16, "Cant. volumen utilizado": 7632.253000000001, "%volumen total": 0.1333098609558392, "Mes": "Junio"}, {"MP": "[20051] POLVO DE HORNEAR", "SKU": 20051, "Cant. de productos que se utiliza": 14, "Cant. volumen utilizado": 3001.6800000000003, "%volumen total": 0.0524292818167746, "Mes": "Junio"}, {"MP": "[20015] CACAO", "SKU": 20015, "Cant. de productos que se utiliza": 7, "Cant. volumen utilizado": 1751.7868, "%volumen total": 0.030597839816404734, "Mes": "Junio"}, {"MP": "[20052] PROTEINA DE ARVEJA 80", "SKU": 20052, "Cant. de productos que se utiliza": 8, "Cant. volumen utilizado": 1037.2988, "%volumen total": 0.018118130884505382, "Mes": "Junio"}, {"MP": "[20070] ALMIDON DE MAIZ", "SKU": 20070, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 1088.9389999999999, "%volumen total": 0.019020111974719724, "Mes": "Junio"}, {"MP": "[20018] COLAGENO MP", "SKU": 20018, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 377.53, "%volumen total": 0.0065941828457020445, "Mes": "Junio"}, {"MP": "[20019] CREATINA MP", "SKU": 20019, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 216.0, "%volumen total": 0.0037727955253135954, "Mes": "Junio"}, {"MP": "[20130] HARINA DE LUPINO TEXTURIZADA", "SKU": 20130, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 697.915, "%volumen total": 0.012190234208561286, "Mes": "Junio"}, {"MP": "[20017] CITRATO DE MAGNESIO MP", "SKU": 20017, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20041] HARINA DE COCO", "SKU": 20041, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 880.44, "%volumen total": 0.01537833376068103, "Mes": "Junio"}, {"MP": "[20042] HARINA DE MANI", "SKU": 20042, "Cant. de productos que se utiliza": 9, "Cant. volumen utilizado": 861.0164, "%volumen total": 0.015039068616396393, "Mes": "Junio"}, {"MP": "[20038] HARINA DE ALMENDRAS", "SKU": 20038, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 727.1400000000001, "%volumen total": 0.012700696936465408, "Mes": "Junio"}, {"MP": "[20143] HARINA DE CASTAÑA DE CAJÚ", "SKU": 20143, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 729.54, "%volumen total": 0.012742616886746667, "Mes": "Junio"}, {"MP": "[20089] INULINA ORAFTI HSI", "SKU": 20089, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 414.72, "%volumen total": 0.0072437674086021035, "Mes": "Junio"}, {"MP": "[20049] MALTODEXTRINA", "SKU": 20049, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20121] MALTITOL", "SKU": 20121, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 222.25279999999998, "%volumen total": 0.0038820109691130437, "Mes": "Junio"}, {"MP": "[20039] HARINA DE ARROZ", "SKU": 20039, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20016] CHIA", "SKU": 20016, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 582.4, "%volumen total": 0.010172574601586286, "Mes": "Junio"}, {"MP": "[20124] MICRO CHIPS (CHIP274B)", "SKU": 20124, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 200.05700000000002, "%volumen total": 0.003494324788924361, "Mes": "Junio"}, {"MP": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "SKU": 20004, "Cant. de productos que se utiliza": 6, "Cant. volumen utilizado": 232.7704, "%volumen total": 0.004065718164562295, "Mes": "Junio"}, {"MP": "[20043] HUEVO ANÁLOGO", "SKU": 20043, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 396.0, "%volumen total": 0.006916791796408258, "Mes": "Junio"}, {"MP": "[20065] ARO VAINILLA PIEDMONT 101.090", "SKU": 20065, "Cant. de productos que se utiliza": 11, "Cant. volumen utilizado": 183.2164, "%volumen total": 0.003200175991129934, "Mes": "Junio"}, {"MP": "[20114] GELATINA BLOOM 250", "SKU": 20114, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 18.0414, "%volumen total": 0.0003151227462518181, "Mes": "Junio"}, {"MP": "[20126] PAPA DESHIDRATADA", "SKU": 20126, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 571.1999999999999, "%volumen total": 0.009976948166940397, "Mes": "Junio"}, {"MP": "[20140] ERITRITOL", "SKU": 20140, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 201.56, "%volumen total": 0.0035205771577880014, "Mes": "Junio"}, {"MP": "[20132] GLUTAGEL NT", "SKU": 20132, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 32.5, "%volumen total": 0.000567665993392092, "Mes": "Junio"}, {"MP": "[20047] LECHE ENTERA", "SKU": 20047, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 97.96, "%volumen total": 0.0017110326373135176, "Mes": "Junio"}, {"MP": "[20125] ZAPALLO DESHIDRATADO", "SKU": 20125, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 326.4, "%volumen total": 0.005701113238251655, "Mes": "Junio"}, {"MP": "[20072] ARO QUESO BA-9869-72 HARMONY", "SKU": 20072, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 25.2, "%volumen total": 0.0004401594779532528, "Mes": "Junio"}, {"MP": "[20068] NUTRILAC 7549", "SKU": 20068, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 358.53, "%volumen total": 0.006262316572642052, "Mes": "Junio"}, {"MP": "[20071] QUESO EN POLVO TIPO DURO 322195 HARMONY", "SKU": 20071, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20131] EMULCAKE 7524", "SKU": 20131, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 82.72, "%volumen total": 0.0014448409530275028, "Mes": "Junio"}, {"MP": "[20088] Fibra Citric E 4030", "SKU": 20088, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 65.61280000000001, "%volumen total": 0.0011460355474226663, "Mes": "Junio"}, {"MP": "[20134] FOSFATO MONOCALCICO POLVO FINO", "SKU": 20134, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 6.4031, "%volumen total": 0.00011184068068581243, "Mes": "Junio"}, {"MP": "[20146] LEVADURA SECA INACTIVADA", "SKU": 20146, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 15.154999999999998, "%volumen total": 0.00026470701938022007, "Mes": "Junio"}, {"MP": "[20127] ARO CAPRESE BD 043 100 2", "SKU": 20127, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20136] HARINA DE ARROZ MICRONIZADA", "SKU": 20136, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 538.16, "%volumen total": 0.00939985018473502, "Mes": "Junio"}, {"MP": "[20058] SUCRALOSA", "SKU": 20058, "Cant. de productos que se utiliza": 17, "Cant. volumen utilizado": 32.69819999999999, "%volumen total": 0.000571127882619486, "Mes": "Junio"}, {"MP": "[20133] BICARBONATO DE SODIO", "SKU": 20133, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.6956, "%volumen total": 0.00013441632057686716, "Mes": "Junio"}, {"MP": "[20117] ARO FRUTILLA BA-7997-31", "SKU": 20117, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20067] GLICINA", "SKU": 20067, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 56.0, "%volumen total": 0.0009781321732294506, "Mes": "Junio"}, {"MP": "[20081] ACIDO CITRICO", "SKU": 20081, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 18.7, "%volumen total": 0.00032662627927483443, "Mes": "Junio"}, {"MP": "[20011] ARO VAINILLA LK11652", "SKU": 20011, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 22.16, "%volumen total": 0.00038706087426365404, "Mes": "Junio"}, {"MP": "[20082] CITRATO DE SODIO", "SKU": 20082, "Cant. de productos que se utiliza": 5, "Cant. volumen utilizado": 0.88, "%volumen total": 1.5370648436462796e-05, "Mes": "Junio"}, {"MP": "[20116] ACIDO FUMARICO", "SKU": 20116, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20008] NARANJA RBP 10735", "SKU": 20008, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 8.8, "%volumen total": 0.00015370648436462798, "Mes": "Junio"}, {"MP": "[20119] ARO DURAZNO TO 292 101 6", "SKU": 20119, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20013] MIX FLEX", "SKU": 20013, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20123] ARO VAINILLA CARAMELO 52-18222", "SKU": 20123, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 8.3347, "%volumen total": 0.00014557925400384827, "Mes": "Junio"}, {"MP": "[20106] JAMON 74918", "SKU": 20106, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 21.0, "%volumen total": 0.000366799564961044, "Mes": "Junio"}, {"MP": "[20137] GOMA XÁNTICA", "SKU": 20137, "Cant. de productos que se utiliza": 4, "Cant. volumen utilizado": 11.8902, "%volumen total": 0.0002076819136809431, "Mes": "Junio"}, {"MP": "[20077] TOMATE", "SKU": 20077, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.6, "%volumen total": 0.0002026130930261005, "Mes": "Junio"}, {"MP": "[20076] ZANAHORIA", "SKU": 20076, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 11.42, "%volumen total": 0.00019946909675500583, "Mes": "Junio"}, {"MP": "[20075] ZAPALLO", "SKU": 20075, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 10.92, "%volumen total": 0.00019073577377974287, "Mes": "Junio"}, {"MP": "[20122] SAL", "SKU": 20122, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 2.5696, "%volumen total": 4.4882293434471364e-05, "Mes": "Junio"}, {"MP": "[20078] ESPINACA", "SKU": 20078, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 7.9, "%volumen total": 0.00013798650300915466, "Mes": "Junio"}, {"MP": "[20138] ARO AVELLANA 52027 SPM /10M", "SKU": 20138, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 13.5, "%volumen total": 0.0002357997203320997, "Mes": "Junio"}, {"MP": "[20107] MIX BEAUTY", "SKU": 20107, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 2.34, "%volumen total": 4.087195152423061e-05, "Mes": "Junio"}, {"MP": "[20080] EMULSWEET 3094", "SKU": 20080, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 1.65, "%volumen total": 2.8819965818367742e-05, "Mes": "Junio"}, {"MP": "[20115] VITAMINA C", "SKU": 20115, "Cant. de productos que se utiliza": 2, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20079] ARO ALBAHACA FRYMA 42-16886MS", "SKU": 20079, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.84, "%volumen total": 1.4671982598441759e-05, "Mes": "Junio"}, {"MP": "[20007] ARO LIMON LK 11831", "SKU": 20007, "Cant. de productos que se utiliza": 3, "Cant. volumen utilizado": 5.1000000000000005, "%volumen total": 8.907989434768213e-05, "Mes": "Junio"}, {"MP": "[20120] COLORANTE BETA CAROTENO", "SKU": 20120, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20118] COLORANTE CARMIN SOLUBLE", "SKU": 20118, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20002] ALBUMINA HIDROLIZADA", "SKU": 20002, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20142] NUTRILAC 8100", "SKU": 20142, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20066] ARO CHOCOLATE (42-16281MS)", "SKU": 20066, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20009] ARO VAINILLA 12-11045 (CREMOSA)", "SKU": 20009, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20050] MODULADOR S2", "SKU": 20050, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20005] ARO FRUTILLA RBP 43", "SKU": 20005, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20006] ARO J Y Q", "SKU": 20006, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20012] MIX 902 - BEAUTY (S/ RESV)", "SKU": 20012, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20045] LACPRODAN 80", "SKU": 20045, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20053] PROTEINA DE SOJA", "SKU": 20053, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20129] MANDIOCA", "SKU": 20129, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20145] WPC 80", "SKU": 20145, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20147] MONO Y DIGLICERIDOS", "SKU": 20147, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20148] ARO PISTACHO 52-19124MS", "SKU": 20148, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20149] ARO CHOCOLATE SW 410", "SKU": 20149, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20151] NUTRILATE 80", "SKU": 20151, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20152] ARO CARAMELO 52-18298MS", "SKU": 20152, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20154] ARO CAPRESE FX-5750 SPM", "SKU": 20154, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20155] GRASA EN POLVO 80%", "SKU": 20155, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20156] LEVADURA PROTEISSIMO 102", "SKU": 20156, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20159] ARO Coco 130824 Piedmont", "SKU": 20159, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20160] ARO Dulce de leche FX-2864 SPM/10M", "SKU": 20160, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20162] ARO JAMÓN SERRANO JP56-32/0 (SAPORITI)", "SKU": 20162, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20165] ARO PICANTE JP76-32/0", "SKU": 20165, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 18.0, "%volumen total": 0.0003143996271094663, "Mes": "Junio"}, {"MP": "[20166] ARO JALAPEÑO  VF-318-548-3", "SKU": 20166, "Cant. de productos que se utiliza": 1, "Cant. volumen utilizado": 36.0, "%volumen total": 0.0006287992542189326, "Mes": "Junio"}, {"MP": "[20168] COLORANTE CARAMELO 3162", "SKU": 20168, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}, {"MP": "[20169] COMPLEX 80i", "SKU": 20169, "Cant. de productos que se utiliza": 0, "Cant. volumen utilizado": 0.0, "%volumen total": 0.0, "Mes": "Junio"}], "kpi_logistica": [{"mes": "Enero", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.991, "meta": 0.98, "comentario": ""}, {"mes": "Enero", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 1.0, "comentario": ""}, {"mes": "Enero", "indicador": "Exactitud de Inventario MP", "valor": 0.9936, "meta": 0.98, "comentario": ""}, {"mes": "Enero", "indicador": "Dias de inventario disponible", "valor": 31.0, "meta": 18.0, "comentario": ""}, {"mes": "Enero", "indicador": "Exactitud de Picking B2B", "valor": 0.9798, "meta": 0.95, "comentario": ""}, {"mes": "Enero", "indicador": "Exactitud de Picking B2C", "valor": 0.9921, "meta": 0.99, "comentario": ""}, {"mes": "Enero", "indicador": "Cantidad de pedidos por canal B2B", "valor": 198.0, "meta": "-", "comentario": ""}, {"mes": "Enero", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1389.0, "meta": "-", "comentario": ""}, {"mes": "Enero", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 22.3, "meta": 48.0, "comentario": ""}, {"mes": "Enero", "indicador": "Quiebre de stock ", "valor": 0.0, "meta": 0.0, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.9889, "meta": 0.98, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 1.0, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Inventario MP", "valor": 0.9956, "meta": 0.98, "comentario": ""}, {"mes": "Febrero", "indicador": "Dias de inventario disponible", "valor": 18.0, "meta": 18.0, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Picking B2B", "valor": 0.9668, "meta": 0.95, "comentario": ""}, {"mes": "Febrero", "indicador": "Exactitud de Picking B2C", "valor": 0.9978, "meta": 0.99, "comentario": ""}, {"mes": "Febrero", "indicador": "Cantidad de pedidos por canal B2B", "valor": 211.0, "meta": "-", "comentario": ""}, {"mes": "Febrero", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1336.0, "meta": "-", "comentario": ""}, {"mes": "Febrero", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 17.07, "meta": 48.0, "comentario": ""}, {"mes": "Febrero", "indicador": "Quiebre de stock ", "valor": 5.0, "meta": 0.0, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.9838, "meta": 0.98, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 1.0, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Inventario MP", "valor": 0.9958, "meta": 0.98, "comentario": ""}, {"mes": "Marzo", "indicador": "Dias de inventario disponible", "valor": 15.0, "meta": 18.0, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Picking B2B", "valor": 0.9845, "meta": 0.95, "comentario": ""}, {"mes": "Marzo", "indicador": "Exactitud de Picking B2C", "valor": 0.9972, "meta": 0.99, "comentario": ""}, {"mes": "Marzo", "indicador": "Cantidad de pedidos por canal B2B", "valor": 258.0, "meta": "-", "comentario": ""}, {"mes": "Marzo", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1422.0, "meta": "-", "comentario": ""}, {"mes": "Marzo", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 19.52, "meta": 48.0, "comentario": ""}, {"mes": "Marzo", "indicador": "Quiebre de stock ", "valor": 7.0, "meta": 0.0, "comentario": ""}, {"mes": "Abril", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.9904, "meta": 0.98, "comentario": ""}, {"mes": "Abril", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 0.98, "comentario": ""}, {"mes": "Abril", "indicador": "Exactitud de Inventario MP", "valor": 0.933, "meta": 0.98, "comentario": "Se realizo un ajuste de 15,000 unidade de doypacks de pancake de vainilla - diferencia que se arrastra desde la reimplementacion del sistema."}, {"mes": "Abril", "indicador": "Exactitud de Picking B2B", "valor": 0.9782, "meta": 0.95, "comentario": ""}, {"mes": "Abril", "indicador": "Exactitud de Picking B2C", "valor": 0.9956, "meta": 0.99, "comentario": ""}, {"mes": "Abril", "indicador": "Cantidad de pedidos por canal B2B", "valor": 229.0, "meta": "-", "comentario": ""}, {"mes": "Abril", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1139.0, "meta": "-", "comentario": ""}, {"mes": "Abril", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 19.61, "meta": 24.0, "comentario": ""}, {"mes": "Abril", "indicador": "Quiebre de stock ", "valor": 0.0, "meta": 0.0, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Inventario PT Planta", "valor": 0.9942, "meta": 0.98, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Inventario PT Enbox", "valor": 1.0, "meta": 0.98, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Inventario MP", "valor": 0.9988, "meta": 0.98, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Picking B2B", "valor": 0.9922, "meta": 0.99, "comentario": ""}, {"mes": "Mayo", "indicador": "Exactitud de Picking B2C", "valor": 0.9983, "meta": 0.99, "comentario": ""}, {"mes": "Mayo", "indicador": "Cantidad de pedidos por canal B2B", "valor": 225.0, "meta": "-", "comentario": ""}, {"mes": "Mayo", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1153.0, "meta": "-", "comentario": ""}, {"mes": "Mayo", "indicador": "Tiempo de Procesamiento de Pedido", "valor": 15.31, "meta": 24.0, "comentario": ""}, {"mes": "Mayo", "indicador": "Quiebre de stock ", "valor": 2.0, "meta": 0.0, "comentario": "Pancake de queso (Faltante de MP: queso duro) \nPancake de chocolate y avellanas (Faltante doypacks): desde 2/5"}, {"mes": "Junio", "indicador": "Exactitud de Inventario PT Planta", "valor": 99.76, "meta": 0.98, "comentario": ""}, {"mes": "Junio", "indicador": "Exactitud de Inventario PT Enbox", "valor": 99.66, "meta": 0.98, "comentario": ""}, {"mes": "Junio", "indicador": "Exactitud de Inventario MP", "valor": 99.97, "meta": 0.98, "comentario": ""}, {"mes": "Junio", "indicador": "Exactitud de Picking B2B", "valor": 98.9, "meta": 0.99, "comentario": ""}, {"mes": "Junio", "indicador": "Exactitud de Picking B2C", "valor": 99.74, "meta": 0.99, "comentario": ""}, {"mes": "Junio", "indicador": "Cantidad de pedidos por canal B2B", "valor": 273.0, "meta": "-", "comentario": ""}, {"mes": "Junio", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1147.0, "meta": "-", "comentario": ""}, {"mes": "Junio", "indicador": "Tiempo de Procesamiento de Pedido ", "valor": 19.5, "meta": 24.0, "comentario": ""}, {"mes": "Junio", "indicador": "Ciclo completo de pedido", "valor": 62.99, "meta": 65.0, "comentario": ""}, {"mes": "Junio", "indicador": "Quiebre de stock ", "valor": 2.0, "meta": 0.0, "comentario": "Pancake de queso (Faltante de MP: queso duro) \nPancake caprese (Faltante de MP: aro caprese): desde el 4/6"}, {"mes": "Julio", "indicador": "Exactitud de Inventario PT Planta", "valor": 99.5, "meta": 0.98, "comentario": ""}, {"mes": "Julio", "indicador": "Exactitud de Inventario PT Enbox", "valor": 99.5, "meta": 0.98, "comentario": ""}, {"mes": "Julio", "indicador": "Exactitud de Inventario MP", "valor": 99.51, "meta": 0.98, "comentario": ""}, {"mes": "Julio", "indicador": "Exactitud de Picking B2B", "valor": 98.79, "meta": 0.99, "comentario": ""}, {"mes": "Julio", "indicador": "Exactitud de Picking B2C", "valor": 99.9, "meta": 0.99, "comentario": ""}, {"mes": "Julio", "indicador": "Cantidad de pedidos por canal B2B", "valor": 247.0, "meta": "-", "comentario": ""}, {"mes": "Julio", "indicador": "Cantidad de pedidos por canal BC2", "valor": 1011.0, "meta": "-", "comentario": ""}, {"mes": "Julio", "indicador": "Tiempo de Procesamiento de Pedido ", "valor": 22.71, "meta": 24.0, "comentario": ""}, {"mes": "Julio", "indicador": "Ciclo completo de pedido", "valor": 64.65, "meta": 65.0, "comentario": ""}, {"mes": "Julio", "indicador": "Quiebre de stock ", "valor": 6.0, "meta": 0.0, "comentario": "Colágeno Flex (Faltante de doypacks) desde 14/7 hasta principio de agosto (7/08).\nPancake dulce de leche (Faltante de doypacks): desde 14/7 hasta principio de septiembre.\nCreatina (Producción terciarizada) desde 14/7, hasta el 21/07.\nCitrato de magnesio (Producción terciarizada) desde 28/7, hasta el 05/08.\nGelatina de frutilla (Producción terciarizada) desde 27/7, hasta el 30/07.\nGelatina de durazno (Producción terciarizada) desde 22/7, hasta el 30/07."}, {"mes": "Julio", "indicador": "DIFOT", "valor": null, "meta": null, "comentario": "Esperando desarrollo con control interno (automatizacion)"}], "kpi_compras": [{"mes": "Enero", "indicador": "Lead Time de insumos productivos - Días", "valor": 7.65, "meta": 7.0, "comentario": ""}, {"mes": "Enero", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 87.5, "meta": 98.0, "comentario": ""}, {"mes": "Enero", "indicador": "Plazo de pagos - Días", "valor": 41.0, "meta": 60.0, "comentario": ""}, {"mes": "Enero", "indicador": "Nivel de cumplimiento OC - %", "valor": 98.0, "meta": 100.0, "comentario": ""}, {"mes": "Febrero", "indicador": "Lead Time de insumos productivos - Días", "valor": 8.6, "meta": 7.0, "comentario": ""}, {"mes": "Febrero", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 90.0, "meta": 98.0, "comentario": ""}, {"mes": "Febrero", "indicador": "Plazo de pagos - Días", "valor": 42.2, "meta": 60.0, "comentario": ""}, {"mes": "Febrero", "indicador": "Nivel de cumplimiento OC - %", "valor": 92.0, "meta": 100.0, "comentario": ""}, {"mes": "Marzo", "indicador": "Lead Time de insumos productivos - Días", "valor": 6.77, "meta": 7.0, "comentario": ""}, {"mes": "Marzo", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 83.87, "meta": 98.0, "comentario": ""}, {"mes": "Marzo", "indicador": "Plazo de pagos - Días", "valor": 42.78, "meta": 60.0, "comentario": ""}, {"mes": "Marzo", "indicador": "Nivel de cumplimiento OC - %", "valor": 99.33, "meta": 100.0, "comentario": ""}, {"mes": "Abril", "indicador": "Lead Time de insumos productivos - Días", "valor": 6.2, "meta": 7.0, "comentario": ""}, {"mes": "Abril", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 90.38, "meta": 98.0, "comentario": ""}, {"mes": "Abril", "indicador": "Plazo de pagos - Días", "valor": 42.78, "meta": 60.0, "comentario": ""}, {"mes": "Abril", "indicador": "Nivel de cumplimiento OC - %", "valor": 97.92, "meta": 100.0, "comentario": "Disminuye por leche descremada (La Ramada)"}, {"mes": "Mayo", "indicador": "Lead Time de insumos productivos - Días", "valor": 6.76, "meta": 7.0, "comentario": "Los lead times se extendieron por pedidos de entrega a fines de mayo solicitados para Narufarma."}, {"mes": "Mayo", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 78.43, "meta": 98.0, "comentario": "Los retrasos fueron mínimos: máximo 3 días y, en la mayoría de los casos, de 1 día."}, {"mes": "Mayo", "indicador": "Plazo de pagos - Días", "valor": 45.0, "meta": 60.0, "comentario": "Warneke a 30 días e Industrias de Avena 60 días"}, {"mes": "Mayo", "indicador": "Nivel de cumplimiento OC - %", "valor": 90.38, "meta": 100.0, "comentario": "Retrasos en Aro caprese y Fibra citric "}, {"mes": "Junio", "indicador": "Lead Time de insumos productivos - Días", "valor": 5.42, "meta": 7.0, "comentario": ""}, {"mes": "Junio", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 93.55, "meta": 98.0, "comentario": "Harmony: No se entrego aun aro caprese"}, {"mes": "Junio", "indicador": "Plazo de pagos - Días", "valor": 45.0, "meta": 60.0, "comentario": ""}, {"mes": "Junio", "indicador": "Nivel de cumplimiento OC - %", "valor": 93.55, "meta": 100.0, "comentario": "Proveedor Elementa: demora en el abastecimiento de Harina de Lupino - Proveedor Dharma: Se entregaron 2 bolsas menos, reponen en proximo pedido."}, {"mes": "Julio", "indicador": "Lead Time de insumos productivos - Días", "valor": 9.0, "meta": 7.0, "comentario": "A partir de Julio se tomó en cuenta para proveedores de MP Clase A"}, {"mes": "Julio", "indicador": "On Time Delivery Proveedores (MP) - %", "valor": 97.3, "meta": 98.0, "comentario": "Demora de 24hs en la entrega de Polvo de hornear (MP Clase A) - Se establecio tolerancia de 48hs de demora en la entrega de MP Clase B Y C"}, {"mes": "Julio", "indicador": "Plazo de pagos - Días", "valor": 41.7, "meta": 50.0, "comentario": "A partir de Julio se tomó en cuenta para proveedores de MP Clase A y se considero nueva meta"}, {"mes": "Julio", "indicador": "Nivel de cumplimiento OC - %", "valor": 94.3, "meta": 100.0, "comentario": "Porveedor La Ramada: hizo entrega parcial de LPD y el resto envía recien en Agosto"}], "tiempos_b2c": [{"provincia": "TIERRA DEL FUEGO", "operador": "OCA", "tiempo": 12, "ideal": "4 - 8+"}, {"provincia": "CHACO", "operador": "OCA", "tiempo": 9.6, "ideal": "3 - 9"}, {"provincia": "MISIONES", "operador": "OCA", "tiempo": 8.363636363636363, "ideal": "3 - 9"}, {"provincia": "FORMOSA", "operador": "OCA", "tiempo": 8.272727272727273, "ideal": "3 - 9"}, {"provincia": "LA PAMPA", "operador": "OCA", "tiempo": 7.888888888888889, "ideal": "4 - 8+"}, {"provincia": "SGO. DEL ESTERO", "operador": "OCA", "tiempo": 7.8, "ideal": "3 - 9"}, {"provincia": "SANTA FE", "operador": "OCA", "tiempo": 7.767605633802817, "ideal": "3 - 5"}, {"provincia": "RIO NEGRO", "operador": "OCA", "tiempo": 7.630434782608695, "ideal": "4 - 8+"}, {"provincia": "MENDOZA", "operador": "OCA", "tiempo": 7.46875, "ideal": "5 - 7"}, {"provincia": "JUJUY", "operador": "OCA", "tiempo": 7.428571428571429, "ideal": "3 - 9"}, {"provincia": "CHUBUT", "operador": "OCA", "tiempo": 7.388888888888889, "ideal": "4 - 8+"}, {"provincia": "LA RIOJA", "operador": "OCA", "tiempo": 7.2, "ideal": "3 - 9"}, {"provincia": "CATAMARCA", "operador": "OCA", "tiempo": 7.142857142857143, "ideal": "3 - 9"}, {"provincia": "NEUQUEN", "operador": "OCA", "tiempo": 7.112676056338028, "ideal": "4 - 8+"}, {"provincia": "CORRIENTES", "operador": "OCA", "tiempo": 6.888888888888889, "ideal": "3 - 9"}, {"provincia": "SAN JUAN", "operador": "OCA", "tiempo": 6.846153846153846, "ideal": "5 - 7"}, {"provincia": "SAN LUIS", "operador": "OCA", "tiempo": 6.714285714285714, "ideal": "5 - 7"}, {"provincia": "SALTA", "operador": "OCA", "tiempo": 6.714285714285714, "ideal": "3 - 9"}, {"provincia": "CORDOBA", "operador": "OCA", "tiempo": 6.183206106870229, "ideal": "3 - 5"}, {"provincia": "TUCUMAN", "operador": "OCA", "tiempo": 6, "ideal": "3 - 9"}, {"provincia": "BUENOS AIRES", "operador": "OCA", "tiempo": 5.903682719546742, "ideal": "3 - 5"}, {"provincia": "ENTRE RIOS", "operador": "OCA", "tiempo": 5.517241379310345, "ideal": "3 - 5"}, {"provincia": "CAPITAL FEDERAL", "operador": "OCA", "tiempo": 3, "ideal": "3 - 5"}, {"provincia": "Zona 1", "operador": "Enbox", "tiempo": "21h 56m", "ideal": "24-48 hs"}, {"provincia": "Zona 2", "operador": "Enbox", "tiempo": "21h 50m", "ideal": "24-48 hs"}, {"provincia": "Zona 3", "operador": "Enbox", "tiempo": "21h 23m", "ideal": "24-48 hs"}, {"provincia": "Zona 4", "operador": "Enbox", "tiempo": "20h 50m", "ideal": "24-48 hs"}, {"provincia": "Zona 5 (Interior)", "operador": "Enbox", "tiempo": "6h 47m", "ideal": "24-48 hs"}], "log_summary": {"by_mes": {"Julio": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 159, "unidades": 23838}, "Exportación|Granger S.A.": {"pedidos": 1, "unidades": 1920}, "B2C|Granger S.A.": {"pedidos": 296, "unidades": 577}, "B2B|ENBOX": {"pedidos": 93, "unidades": 19196}, "B2C|ENBOX": {"pedidos": 439, "unidades": 727}, "B2C|MELI FULL": {"pedidos": 339, "unidades": 474}}, "prov_counts": {"Buenos Aires": 838, "Santa Fe": 118, "Córdoba": 89, "Neuquén": 51, "Mendoza": 38, "Entre Ríos": 30, "Río Negro, Argentina": 26, "Tucumán": 24, "Chubut": 22, "San Juan": 15, "La Pampa": 13, "Corrientes": 12, "Salta": 10, "Santiago Del Estero": 6, "Tierra del Fuego": 4, "Chaco": 4, "Catamarca": 4, "La Rioja": 4, "Jujuy": 4, "Santa Cruz": 4, "Formosa": 4, "Misiones": 4, "San Luis": 2, "Maldonado": 1}, "transp_b2b": {"Enbox": 106, "Via Cargo": 85, "Transporte Anibal": 25, "Expreso Santa Rosa": 20, "Transporte MJ": 13, "OCA": 3}, "transp_b2c": {"Enbox": 615, "Mercado Libre": 225, "OCA": 181, "Andreani": 53}}, "Junio": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 124, "unidades": 11238}, "B2C|Granger S.A.": {"pedidos": 347, "unidades": 695}, "B2B|ENBOX": {"pedidos": 87, "unidades": 12100}, "B2C|ENBOX": {"pedidos": 512, "unidades": 919}, "B2C|MELI FULL": {"pedidos": 342, "unidades": 515}}, "prov_counts": {"Buenos Aires": 958, "Santa Fe": 103, "Córdoba": 89, "Neuquén": 41, "Mendoza": 33, "Tucumán": 28, "Río Negro, Argentina": 22, "Entre Ríos": 22, "San Juan": 14, "Salta": 14, "Chubut": 14, "La Pampa": 12, "San Luis": 11, "Chaco": 7, "Santiago Del Estero": 7, "Jujuy": 7, "Misiones": 7, "Santa Cruz": 6, "La Rioja": 5, "Corrientes": 4, "Formosa": 4, "Catamarca": 4}, "transp_b2b": {"Enbox": 91, "Via Cargo": 72, "Transporte Anibal": 22, "Expreso Santa Rosa": 18, "Transporte MJ": 8}, "transp_b2c": {"Enbox": 768, "OCA": 229, "Mercado Libre": 204}}, "Mayo": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 120, "unidades": 13725}, "Exportación|Granger S.A.": {"pedidos": 2, "unidades": 2628}, "B2C|Granger S.A.": {"pedidos": 521, "unidades": 952}, "B2B|ENBOX": {"pedidos": 94, "unidades": 16256}, "B2C|ENBOX": {"pedidos": 453, "unidades": 858}, "B2C|MELI FULL": {"pedidos": 246, "unidades": 340}}, "prov_counts": {"Buenos Aires": 1009, "Santa Fe": 103, "Córdoba": 99, "Neuquén": 48, "Mendoza": 38, "Río Negro, Argentina": 19, "Tucumán": 18, "Entre Ríos": 16, "San Juan": 12, "Chubut": 11, "Salta": 7, "Chaco": 7, "Santiago Del Estero": 6, "La Pampa": 6, "San Luis": 6, "Jujuy": 6, "Formosa": 6, "Corrientes": 5, "Misiones": 5, "Tierra del Fuego": 2, "Catamarca": 2, "Santa Cruz": 2, "Maldonado": 1, "Asunción": 1, "La Rioja": 1}, "transp_b2b": {"Enbox": 115, "Via Cargo": 60, "Transporte Anibal": 18, "Expreso Santa Rosa": 12, "Transporte MJ": 8, "OCA": 1}, "transp_b2c": {"Enbox": 804, "OCA": 226, "Mercado Libre": 190}}, "Abril": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 155, "unidades": 24102}, "B2C|Granger S.A.": {"pedidos": 330, "unidades": 690}, "B2B|ENBOX": {"pedidos": 91, "unidades": 6968}, "B2C|ENBOX": {"pedidos": 547, "unidades": 927}, "B2C|MELI FULL": {"pedidos": 395, "unidades": 558}}, "prov_counts": {"Buenos Aires": 1080, "Santa Fe": 115, "Córdoba": 96, "Neuquén": 37, "Mendoza": 31, "Río Negro, Argentina": 31, "Tucumán": 23, "Entre Ríos": 15, "Santiago Del Estero": 12, "San Juan": 9, "Chubut": 9, "Salta": 8, "Chaco": 6, "La Pampa": 6, "Jujuy": 6, "Misiones": 6, "San Luis": 5, "Santa Cruz": 5, "Tierra del Fuego": 4, "Formosa": 4, "Catamarca": 3, "La Rioja": 3, "Corrientes": 2}, "transp_b2b": {"Enbox": 120, "Via Cargo": 80, "Transporte Anibal": 19, "Expreso Santa Rosa": 15, "Transporte MJ": 9, "OCA": 3}, "transp_b2c": {"Enbox": 869, "OCA": 229, "Mercado Libre": 174}}, "Marzo": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 173, "unidades": 29842}, "B2C|Granger S.A.": {"pedidos": 343, "unidades": 638}, "B2B|ENBOX": {"pedidos": 94, "unidades": 9730}, "B2C|ENBOX": {"pedidos": 731, "unidades": 1242}, "B2C|MELI FULL": {"pedidos": 483, "unidades": 642}}, "prov_counts": {"Buenos Aires": 1312, "Santa Fe": 130, "Córdoba": 105, "Neuquén": 60, "Mendoza": 42, "Río Negro, Argentina": 31, "Tucumán": 24, "Chubut": 14, "Entre Ríos": 13, "San Juan": 12, "La Pampa": 12, "Chaco": 11, "Santiago Del Estero": 9, "Salta": 8, "Jujuy": 7, "Santa Cruz": 7, "Formosa": 6, "Corrientes": 5, "La Rioja": 5, "San Luis": 4, "Misiones": 4, "Catamarca": 3}, "transp_b2b": {"Enbox": 126, "Via Cargo": 74, "Expreso Santa Rosa": 35, "Transporte Anibal": 23, "Transporte MJ": 9}, "transp_b2c": {"Enbox": 1066, "OCA": 250, "Mercado Libre": 241}}, "Febrero": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 155, "unidades": 25272}, "B2C|Granger S.A.": {"pedidos": 282, "unidades": 539}, "B2B|ENBOX": {"pedidos": 84, "unidades": 6740}, "B2C|ENBOX": {"pedidos": 671, "unidades": 1105}, "B2C|MELI FULL": {"pedidos": 409, "unidades": 528}}, "prov_counts": {"Buenos Aires": 1186, "Santa Fe": 98, "Córdoba": 81, "Neuquén": 37, "Mendoza": 33, "Río Negro, Argentina": 23, "Tucumán": 18, "San Juan": 17, "Santiago Del Estero": 15, "Entre Ríos": 15, "Salta": 13, "San Luis": 11, "Chubut": 8, "La Pampa": 7, "Chaco": 6, "Corrientes": 6, "Misiones": 6, "Santa Cruz": 6, "Tierra del Fuego": 4, "Catamarca": 4, "Jujuy": 3, "La Rioja": 2, "Formosa": 2}, "transp_b2b": {"Enbox": 109, "Via Cargo": 71, "Expreso Santa Rosa": 36, "Transporte Anibal": 14, "Transporte MJ": 6, "OCA": 3}, "transp_b2c": {"Enbox": 976, "OCA": 214, "Mercado Libre": 172}}, "Enero": {"canal_almacen": {"B2B|Granger S.A.": {"pedidos": 114, "unidades": 21478}, "B2C|Granger S.A.": {"pedidos": 147, "unidades": 265}, "B2B|ENBOX": {"pedidos": 68, "unidades": 6508}, "B2C|ENBOX": {"pedidos": 644, "unidades": 820}, "B2C|MELI FULL": {"pedidos": 642, "unidades": 857}}, "prov_counts": {"Buenos Aires": 1116, "Santa Fe": 140, "Córdoba": 115, "Neuquén": 40, "Entre Ríos": 34, "Mendoza": 34, "Río Negro, Argentina": 29, "Tucumán": 17, "Chubut": 15, "San Juan": 11, "Chaco": 8, "Corrientes": 8, "Misiones": 8, "Santa Cruz": 7, "Jujuy": 6, "La Pampa": 5, "San Luis": 5, "Santiago Del Estero": 5, "Salta": 5, "Catamarca": 5, "La Rioja": 2}, "transp_b2b": {"Enbox": 80, "Via Cargo": 51, "Expreso Santa Rosa": 32, "Transporte Anibal": 15, "Transporte MJ": 4}, "transp_b2c": {"Enbox": 971, "Mercado Libre": 335, "OCA": 127}}}, "prov_counts_total": {"Buenos Aires": 7499, "Santa Fe": 807, "Córdoba": 674, "Neuquén": 314, "Mendoza": 249, "Río Negro, Argentina": 181, "Tucumán": 152, "Entre Ríos": 145, "Chubut": 93, "San Juan": 90, "Salta": 65, "La Pampa": 61, "Santiago Del Estero": 60, "Chaco": 49, "San Luis": 44, "Corrientes": 42, "Misiones": 40, "Jujuy": 39, "Santa Cruz": 37, "Formosa": 26, "Catamarca": 25, "La Rioja": 22, "Tierra del Fuego": 14, "Maldonado": 2, "Asunción": 1}, "prov_weekly": {"Buenos Aires": 239.2, "Santa Fe": 26.2, "Córdoba": 22.0, "Neuquén": 10.9, "Mendoza": 8.4, "Río Negro, Argentina": 5.9, "Tucumán": 5.4, "Entre Ríos": 4.4, "Chubut": 3.2, "San Juan": 2.9, "Salta": 2.2, "La Pampa": 2.3, "Santiago Del Estero": 1.8, "Chaco": 1.6, "San Luis": 1.3, "Corrientes": 1.3, "Misiones": 1.2, "Jujuy": 1.4, "Santa Cruz": 1.1, "Formosa": 1.1, "Catamarca": 0.7, "La Rioja": 0.8, "Tierra del Fuego": 0.5, "Maldonado": 0.1, "Asunción": 0.0}, "meses_disponibles": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]}, "meses": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], "kg_by_mes": {"Enero": 48115, "Febrero": 81659, "Marzo": 166907, "Abril": 188531, "Mayo": 172538, "Junio": 189418}, "mp_list": [{"sku": "20099", "nombre": "[20099] HARINA DE AVENA LIBRE DE GLUTEN", "proveedor": "Dgrx / Industria de Avena", "moneda": "USD", "costos": {"Enero": 1.2, "Febrero": 1.2, "Marzo": 1.2, "Abril": 1.2, "Mayo": 1.2, "Junio": 1.2, "Julio": 1.2}, "lead_time": {"Enero": 6.0, "Febrero": 10.0, "Marzo": 28.0, "Abril": 14.0, "Mayo": 8.0, "Junio": 15.0, "Julio": 15.58}, "cond_pago": {"Enero": 45.0, "Febrero": 45.0, "Marzo": 45.0, "Abril": 45.0, "Mayo": 45.0, "Junio": 45.0, "Julio": 45.0}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20044", "nombre": "[20044] HUEVO EN POLVO", "proveedor": "Ovobrand", "moneda": "$", "costos": {"Enero": 12500.0, "Febrero": 12500.0, "Marzo": 12500.0, "Abril": 13200.0, "Mayo": 13200.0, "Junio": 13600.0, "Julio": 13600.0}, "lead_time": {"Enero": 14.0, "Febrero": 12.0, "Marzo": 8.0, "Abril": 14.0, "Mayo": 2.0, "Junio": 7.0, "Julio": 8.7}, "cond_pago": {"Enero": 60.0, "Febrero": 60.0, "Marzo": 60.0, "Abril": 60.0, "Mayo": 60.0, "Junio": 60.0, "Julio": 60.0}, "var_ene_jul": 0.08800000000000008, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20046", "nombre": "[20046] LECHE DESCREMADA", "proveedor": "Ramolac / La Ramada", "moneda": "$", "costos": {"Enero": 4060.0, "Febrero": 4300.0, "Marzo": 4400.0, "Abril": 4700.0, "Mayo": 4900.0, "Junio": 5000.0, "Julio": 5000.0}, "lead_time": {"Enero": 7.0, "Febrero": 7.0, "Marzo": 14.0, "Abril": 6.0, "Mayo": 19.0, "Junio": 12.0, "Julio": 7.5}, "cond_pago": {"Enero": 45.0, "Febrero": 45.0, "Marzo": 60.0, "Abril": 60.0, "Mayo": 60.0, "Junio": 60.0, "Julio": 60.0}, "var_ene_jul": 0.23152709359605916, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20128", "nombre": "[20128] WPC 34", "proveedor": "Molfino Hnos", "moneda": "$", "costos": {"Enero": 4030.63, "Febrero": 4395.0, "Marzo": 4460.92, "Abril": 4500.0, "Mayo": 4900.0, "Junio": 4900.0, "Julio": 5000.0}, "lead_time": {"Enero": 4.0, "Febrero": 7.0, "Marzo": 7.0, "Abril": 2.0, "Mayo": 3.0, "Junio": 4.0, "Julio": 8.0}, "cond_pago": {"Enero": 21.0, "Febrero": 28.0, "Marzo": 30.0, "Abril": 30.0, "Mayo": 30.0, "Junio": 30.0, "Julio": 30.0}, "var_ene_jul": 0.2405008646291027, "var_mes_ant": 0.02040816326530612, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20051", "nombre": "[20051] POLVO DE HORNEAR", "proveedor": "Aditivos Alimentarios", "moneda": "USD", "costos": {"Enero": 2.29, "Febrero": 2.29, "Marzo": 2.29, "Abril": 2.32, "Mayo": 2.43, "Junio": 2.48, "Julio": 2.48}, "lead_time": {"Enero": 8.0, "Febrero": 13.0, "Marzo": 9.0, "Abril": 3.0, "Mayo": 6.0, "Junio": 9.0, "Julio": 9.0}, "cond_pago": {"Enero": 30.0, "Febrero": 30.0, "Marzo": 30.0, "Abril": 30.0, "Mayo": 30.0, "Junio": 30.0, "Julio": 30.0}, "var_ene_jul": 0.08296943231441056, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20015", "nombre": "[20015] CACAO", "proveedor": "Harmony", "moneda": "USD", "costos": {"Enero": 6.5, "Febrero": 6.5, "Marzo": 6.5, "Abril": 6.5, "Mayo": 5.9, "Junio": 5.9, "Julio": 5.9}, "lead_time": {"Febrero": 15.0, "Marzo": 19.0, "Abril": 10.0, "Mayo": 19.0, "Junio": 9.0, "Julio": 9.0}, "cond_pago": {"Enero": 60.0, "Febrero": 60.0, "Marzo": 60.0, "Abril": 60.0, "Mayo": 60.0, "Junio": 60.0, "Julio": 60.0}, "var_ene_jul": -0.0923076923076922, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20130", "nombre": "[20130] HARINA DE LUPINO TEXTURIZADA", "proveedor": "Elementa", "moneda": "USD", "costos": {"Enero": 4.7, "Febrero": 4.7, "Marzo": 4.5, "Abril": 4.5, "Mayo": 4.5, "Junio": 4.5, "Julio": 4.5}, "lead_time": {"Enero": 3.0, "Marzo": 6.0, "Abril": 7.0, "Mayo": 8.0, "Junio": 40.0}, "cond_pago": {"Enero": 15.0, "Febrero": 15.0, "Marzo": 15.0, "Abril": 15.0, "Mayo": 30.0, "Junio": 30.0, "Julio": 30.0}, "var_ene_jul": -0.042553191489361764, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20058", "nombre": "[20058] SUCRALOSA", "proveedor": "Pampa Trade", "moneda": "USD", "costos": {"Enero": 23.0, "Febrero": 23.0, "Marzo": 23.0, "Abril": 23.0, "Mayo": 19.5, "Junio": 19.5, "Julio": 19.5}, "lead_time": {"Febrero": 15.0, "Marzo": 18.0, "Abril": 10.0, "Mayo": 18.0, "Junio": 3.0}, "cond_pago": {"Enero": 60.0, "Febrero": 60.0, "Marzo": 60.0, "Abril": 60.0, "Mayo": 60.0, "Junio": 60.0, "Julio": 60.0}, "var_ene_jul": -0.15217391304347827, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20038", "nombre": "[20038] HARINA DE ALMENDRAS", "proveedor": "Warneke / Melar", "moneda": "$", "costos": {"Enero": 19703.1, "Febrero": 19703.1, "Marzo": 19703.1, "Abril": 19703.1, "Mayo": 19703.1, "Junio": 19703.1, "Julio": 19703.1}, "lead_time": {"Febrero": 9.0, "Marzo": 12.0, "Abril": 11.0, "Mayo": 14.0, "Junio": 8.0, "Julio": 4.0}, "cond_pago": {"Enero": 20.0, "Febrero": 20.0, "Marzo": 25.0, "Abril": 25.0, "Mayo": 25.0, "Junio": 25.0, "Julio": 25.0}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20018", "nombre": "[20018] COLAGENO MP", "proveedor": "PB Leiner", "moneda": "USD", "costos": {"Enero": 9.5, "Febrero": 9.5, "Marzo": 9.5, "Abril": 9.5, "Mayo": 9.7, "Junio": 9.7, "Julio": 9.7}, "lead_time": {"Marzo": 14.0, "Abril": 14.0, "Mayo": 8.0, "Junio": 32.0, "Julio": 17.0}, "cond_pago": {"Enero": 30.0, "Febrero": 30.0, "Marzo": 30.0, "Abril": 30.0, "Mayo": 30.0, "Junio": 30.0, "Julio": 30.0}, "var_ene_jul": 0.021052631578947212, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20065", "nombre": "[20065] ARO VAINILLA PIEDMONT 101.090", "proveedor": "Piedmont", "moneda": "USD", "costos": {"Enero": 30.37, "Febrero": 30.37, "Marzo": 30.37, "Abril": 30.37, "Mayo": 30.37, "Junio": 30.37, "Julio": 30.37}, "lead_time": {"Febrero": 8.0, "Marzo": 7.0, "Abril": 9.0, "Mayo": 9.0, "Junio": 7.0, "Julio": 14.0}, "cond_pago": {"Enero": 30.0, "Febrero": 30.0, "Marzo": 30.0, "Abril": 30.0, "Mayo": 30.0, "Junio": 30.0, "Julio": 30.0}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20042", "nombre": "[20042] HARINA DE MANI", "proveedor": "Le Fit", "moneda": "$", "costos": {"Enero": 8900.0, "Febrero": 8900.0, "Marzo": 8900.0, "Abril": 8900.0, "Mayo": 8900.0, "Junio": 8900.0, "Julio": 8900.0}, "lead_time": {"Febrero": 17.0, "Marzo": 16.0, "Abril": 7.0, "Mayo": 3.0, "Junio": 11.0, "Julio": 3.0}, "cond_pago": {"Enero": 15.0, "Febrero": 15.0, "Marzo": 30.0, "Abril": 30.0, "Mayo": 30.0, "Junio": 30.0, "Julio": 30.0}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20070", "nombre": "[20070] ALMIDON DE MAIZ", "proveedor": "Dharma", "moneda": "$", "costos": {"Enero": 1190.0, "Febrero": 1230.0, "Marzo": 1230.0, "Abril": 1290.0, "Mayo": 1350.0, "Junio": 1390.0, "Julio": 1417.8}, "lead_time": {"Febrero": 8.0, "Marzo": 19.0, "Abril": 15.0, "Mayo": 9.0, "Junio": 4.0, "Julio": 16.0}, "cond_pago": {"Enero": 30.0, "Febrero": 30.0, "Marzo": 30.0, "Abril": 30.0, "Mayo": 30.0, "Junio": 30.0, "Julio": 30.0}, "var_ene_jul": 0.19142857142857128, "var_mes_ant": 0.019999999999999966, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20004", "nombre": "[20004] ARO CHOCOLATE (42-15907MS) SUIZO", "proveedor": "Fryma ", "moneda": "USD", "costos": {"Enero": 23.69, "Febrero": 23.69, "Marzo": 23.69, "Abril": 23.69, "Mayo": 23.69, "Junio": 23.69, "Julio": 23.69}, "lead_time": {"Marzo": 18.0, "Abril": 7.0, "Mayo": 13.0, "Junio": 12.0, "Julio": 7.0}, "cond_pago": {"Enero": 60.0, "Febrero": 60.0, "Marzo": 60.0, "Abril": 60.0, "Mayo": 60.0, "Junio": 60.0, "Julio": 60.0}, "var_ene_jul": 0.0, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}, {"sku": "20089", "nombre": "[20089] INULINA ORAFTI HSI", "proveedor": "Saporiti", "moneda": "USD", "costos": {"Enero": 6.4, "Febrero": 6.4, "Marzo": 6.6, "Abril": 6.6, "Mayo": 6.6, "Junio": 6.6, "Julio": 6.6}, "lead_time": {"Marzo": 16.0, "Abril": 9.0, "Mayo": 3.0, "Junio": 17.0, "Julio": 2.0}, "cond_pago": {"Enero": 45.0, "Febrero": 45.0, "Marzo": 45.0, "Abril": 45.0, "Mayo": 45.0, "Junio": 45.0, "Julio": 45.0}, "var_ene_jul": 0.031249999999999778, "var_mes_ant": 0.0, "mes_ant_label": "Junio", "mes_last_label": "Julio"}], "costos_b2c": {"meses": ["Abril", "Mayo", "Junio"], "operadores": [{"operador": "Enbox (envios + p&p + almacenamiento + seguro)", "meses": {"Abril": {"costo": 4455173.18, "facturado": 61540000.0, "pct": 0.3327313769}, "Mayo": {"costo": 4617179.31, "facturado": 56620000.0, "pct": 0.3035951739}, "Junio": {"costo": 5234471.272643191, "facturado": 65570000.0, "pct": 0.3051977839}, "Julio": {"costo": null, "facturado": null, "pct": null}}}, {"operador": "OCA", "meses": {"Abril": {"costo": 3303905.28, "facturado": null, "pct": null}, "Mayo": {"costo": 3374312.39, "facturado": null, "pct": null}, "Junio": {"costo": 3103456.3, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}}, {"operador": "Mercado Libre (Envios + uso de la plataforma + adicionales)", "meses": {"Abril": {"costo": 9292189.92, "facturado": null, "pct": null}, "Mayo": {"costo": 6679143.56, "facturado": null, "pct": null}, "Junio": {"costo": 8034169.15, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}}, {"operador": "Uso plataforma TN (LINKEDSTORE ARGENTINA SRL)", "meses": {"Abril": {"costo": 684894.02, "facturado": null, "pct": null}, "Mayo": {"costo": 737196.91, "facturado": null, "pct": null}, "Junio": {"costo": 664398.77, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}}, {"operador": "Traslados Granger - Mercado Libre (ESR)", "meses": {"Abril": {"costo": 627449.9, "facturado": null, "pct": null}, "Mayo": {"costo": 156148.73, "facturado": null, "pct": null}, "Junio": {"costo": 255922.69, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}}, {"operador": "Traslados Granger - Enbox (ESR)", "meses": {"Abril": {"costo": 2112676.6352101658, "facturado": null, "pct": null}, "Mayo": {"costo": 1625577.8480318196, "facturado": null, "pct": null}, "Junio": {"costo": 2719400.5089778746, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}}, {"operador": "Total", "meses": {"Abril": {"costo": 20476288.94, "facturado": null, "pct": null}, "Mayo": {"costo": 17189558.75, "facturado": null, "pct": null}, "Junio": {"costo": 20011818.69, "facturado": null, "pct": null}, "Julio": {"costo": 0, "facturado": null, "pct": null}}}], "facturado": {"Abril": 61540000.0, "Mayo": 56620000.0, "Junio": 65570000.0}, "total_pct": {"Abril": 0.33273137699057526, "Mayo": 0.3035951739667962, "Junio": 0.30519778389507396}, "total_costo": {"Abril": 20476288.94, "Mayo": 17189558.75, "Junio": 20011818.69}}, "costos_b2b": {"meses": ["Abril", "Mayo", "Junio"], "operadores": [{"operador": "ENBOX S.R.L. (envios + p&p + almacenamiento + seguro)", "meses": {"Abril": {"costo": 13125300.21, "facturado": 909880000.0, "pct": 0.0514234001569326}, "Mayo": {"costo": 14164605.45, "facturado": 956610000.0, "pct": 0.0433}, "Junio": {"costo": 13641882.0, "facturado": 830090000.0, "pct": 0.0542}, "Julio": {"costo": null, "facturado": null, "pct": null}}, "tiempo": "1 - 2", "destino": "Buenos Aires"}, {"operador": "EXPRESO SANTA ROSA S.A. ", "meses": {"Abril": {"costo": 10787391.43, "facturado": null, "pct": null}, "Mayo": {"costo": 9942203.43, "facturado": null, "pct": null}, "Junio": {"costo": 10367863.47, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}, "tiempo": "1 - 5", "destino": "Tucumán - Córdoba - Santa Fé - Mendoza"}, {"operador": "VIA CARGO S.A.", "meses": {"Abril": {"costo": 6188921.05, "facturado": null, "pct": null}, "Mayo": {"costo": 5035520.38, "facturado": null, "pct": null}, "Junio": {"costo": 5885952.8, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}, "tiempo": "3 - 5", "destino": "Interior del país"}, {"operador": "Transporte MJ (BERTORELLO MATIAS GERMAN)", "meses": {"Abril": {"costo": 517000.0, "facturado": null, "pct": null}, "Mayo": {"costo": 494000.0, "facturado": null, "pct": null}, "Junio": {"costo": 444000.0, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}, "tiempo": "1 - 2", "destino": "Santa Fé"}, {"operador": "EXPRESO ANIBAL S.R.L.", "meses": {"Abril": {"costo": 2096500.0, "facturado": null, "pct": null}, "Mayo": {"costo": 1274500.0, "facturado": null, "pct": null}, "Junio": {"costo": 2106500.0, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}, "tiempo": "1 - 2", "destino": "Córdoba"}, {"operador": "Transporte Miguelito (PACHECO GABRIELA ROSANA)", "meses": {"Abril": {"costo": 496900.0, "facturado": null, "pct": null}, "Mayo": {"costo": 518000.0, "facturado": null, "pct": null}, "Junio": {"costo": 0.0, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}, "tiempo": "1 - 2", "destino": "Santa Fé"}, {"operador": "Traslados Granger - Enbox (EXPRESO SANTA ROSA S.A. )", "meses": {"Abril": {"costo": 13577110.644789834, "facturado": null, "pct": null}, "Mayo": {"costo": 9955549.891968181, "facturado": null, "pct": null}, "Junio": {"costo": 12563535.101022124, "facturado": null, "pct": null}, "Julio": {"costo": null, "facturado": null, "pct": null}}, "tiempo": 1.0, "destino": "Buenos Aires"}, {"operador": "Total", "meses": {"Abril": {"costo": 46789123.33, "facturado": null, "pct": null}, "Mayo": {"costo": 41384379.15, "facturado": null, "pct": null}, "Junio": {"costo": 45009733.37, "facturado": null, "pct": null}, "Julio": {"costo": 0, "facturado": null, "pct": null}}, "tiempo": null, "destino": null}], "facturado": {"Abril": 909880000.0, "Mayo": 956610000.0, "Junio": 830090000.0}, "total_pct": {"Abril": 0.05142340015166835, "Mayo": 0.043261495437011944, "Junio": 0.05422271485019697}, "total_costo": {"Abril": 46789123.33, "Mayo": 41384379.15, "Junio": 45009733.37}}, "costos_mp": {"meses": ["Abril", "Mayo", "Junio"], "operadores": [{"operador": "Expreso Santa Rosa", "meses": {"Abril": 22295016.20478984, "Mayo": 20419299.81196818, "Junio": 26194894.801022127}}], "total_costo": {"Abril": 22295016.20478984, "Mayo": 20419299.81196818, "Junio": 26194894.801022127}}};

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
  const mesesOrdenados = MESES.filter(m=>mesesPresentes.includes(m));
  const ultimoMes = mesesOrdenados[mesesOrdenados.length-1];
  mesesOrdenados.forEach(m=>{
    const o = document.createElement('option');
    o.value=m; o.textContent=m;
    if(m===ultimoMes) o.selected=true;
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
    const datasets = chart.data.datasets;
    // Agrupar datasets por su propiedad 'stack' (los que no tienen stack se tratan como grupo propio,
    // preservando el comportamiento anterior de 1 etiqueta por dataset). Los datasets tipo 'line' se ignoran.
    const groups = {};
    datasets.forEach((ds,i)=>{
      if(ds.type==='line') return;
      const key = ds.stack!=null ? ('s:'+ds.stack) : ('i:'+i);
      (groups[key]=groups[key]||[]).push(i);
    });
    const nCats = chart.data.labels ? chart.data.labels.length : 0;
    for(let j=0;j<nCats;j++){
      Object.values(groups).forEach(idxs=>{
        let total=0, top=Infinity, x=null;
        idxs.forEach(i=>{
          const meta = chart.getDatasetMeta(i);
          if(meta.hidden) return;
          const val = datasets[i].data[j];
          if(val==null) return;
          total += val;
          const bar = meta.data[j];
          if(bar){
            const c = bar.getCenterPoint();
            if(bar.y < top){ top = bar.y; x = c.x; }
          }
        });
        if(total>0 && x!=null && isFinite(top)){
          ctx.save();
          ctx.font = '600 9px DM Sans';
          ctx.fillStyle = '#374151';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(fmtN(total), x, top-2);
          ctx.restore();
        }
      });
    }
  }
};
Chart.register(topLabelPlugin);

// ── PRODUCCIÓN ────────────────────────────────────────────────
function renderProduccion() {
  const efAll = RAW.eficiencia.filter(r=>r.mes===currentMes);
  if(!efAll.length) return;
  const ef = efAll.filter(r=>!r.natufarma);
  const natRow = efAll.find(r=>r.natufarma);

  const totalEf = ef.reduce((s,r)=>s+r.efectiva,0);
  const totalPl = ef.reduce((s,r)=>s+r.planificada,0);
  const totalCap = ef.reduce((s,r)=>s+r.capacidad,0);
  // Usamos ratios de totales (suma/suma) para que sean matemáticamente consistentes entre sí:
  // (Efectivo/Capacidad) = (Efectivo/Planificado) x (Planificado/Capacidad)
  const avgEfEfPl = totalPl>0 ? totalEf/totalPl : 0;
  const avgEfPlCap = totalCap>0 ? totalPl/totalCap : 0;
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
      ${quiebreRow&&quiebreRow.comentario?'<div style="margin-top:6px;font-size:10px;color:var(--amber);border-top:1px solid var(--border);padding-top:5px;line-height:1.6">'+quiebreRow.comentario.split('\n').filter(function(l){return l.trim();}).map(function(l){return '<div>'+l+'</div>';}).join('')+'</div>':''}
    </div>
  `;

  // Barras agrupadas semana (+ Natufarma como barra adicional, si corresponde a este mes)
  const wkLabels = ef.map(r=>r.semana.replace('Semana ',''));
  const wkCap = ef.map(r=>r.capacidad);
  const wkPlan = ef.map(r=>r.planificada);
  const wkEf = ef.map(r=>r.efectiva);
  if(natRow){ wkLabels.push('Natufarma'); wkCap.push(null); wkPlan.push(null); wkEf.push(natRow.efectiva); }
  mkChart('chart-unidades','bar',{
    labels: wkLabels,
    datasets:[
      {label:'Capacidad', data:wkCap, backgroundColor:'rgba(34,32,28,0.10)', borderColor:'rgba(34,32,28,0.30)', borderWidth:1.5, borderRadius:3},
      {label:'Planificado', data:wkPlan, backgroundColor:'rgba(180,180,180,0.50)', borderColor:'rgba(100,100,100,0.50)', borderWidth:1.5, borderRadius:3},
      {label:'Efectivo', data:wkEf, backgroundColor:wkEf.map((v,i)=>i===wkEf.length-1&&natRow?'rgba(8,145,178,0.70)':'rgba(241,138,0,0.70)'), borderColor:wkEf.map((v,i)=>i===wkEf.length-1&&natRow?'#0891b2':'#f18a00'), borderWidth:1.5, borderRadius:3},
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
    if(!byMes[r.mes]) byMes[r.mes]={cap:0,plan:0,ef:0,natEf:0};
    if(r.natufarma){ byMes[r.mes].natEf+=r.efectiva; }
    else { byMes[r.mes].cap+=r.capacidad; byMes[r.mes].plan+=r.planificada; byMes[r.mes].ef+=r.efectiva; }
  });
  const meses = MESES.filter(m=>byMes[m]);
  const hasNatufarma = meses.some(m=>byMes[m].natEf>0);
  const datasets = [
    {label:'Capacidad',data:meses.map(m=>byMes[m].cap),backgroundColor:'rgba(34,32,28,0.10)',borderColor:'rgba(34,32,28,0.30)',borderWidth:1.5,borderRadius:3,stack:'cap'},
    {label:'Planificado',data:meses.map(m=>byMes[m].plan),backgroundColor:'rgba(180,180,180,0.50)',borderColor:'rgba(100,100,100,0.50)',borderWidth:1.5,borderRadius:3,stack:'plan'},
    {label:'Efectivo',data:meses.map(m=>byMes[m].ef),backgroundColor:'rgba(241,138,0,0.70)',borderColor:'#f18a00',borderWidth:1.5,borderRadius:3,stack:'efectivo'},
  ];
  if(hasNatufarma){
    datasets.push({label:'Efectivo Natufarma',data:meses.map(m=>byMes[m].natEf||null),backgroundColor:'rgba(8,145,178,0.75)',borderColor:'#0891b2',borderWidth:1.5,borderRadius:3,stack:'efectivo'});
  }
  mkChart('chart-anual-barras','bar',{ labels:meses, datasets }, barOptsWithLabels(true));
  var totalEf = meses.reduce(function(s,m){return s+byMes[m].ef+byMes[m].natEf;},0);
  var el2 = document.getElementById('anual-acumulado');
  if(el2) el2.innerHTML = '<div style="margin-top:10px;padding:10px 14px;background:#f3f4f6;border-radius:8px;border:1px solid #e5e7eb;display:inline-flex;align-items:center;gap:8px"><span style="font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:.5px">Efectivo acumulado</span><span style="font-size:20px;font-weight:800;color:#f18a00">'+fmtN(totalEf)+'</span><span style="font-size:11px;color:#9ca3af">u.</span></div>'+(hasNatufarma?'<div style="margin-top:6px;font-size:10px;color:#0891b2">■ Incluye producción terciarizada (Natufarma)</div>':'');
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
  renderCostosLog('costos_b2c', {kpisId:'costos-b2c-kpis', chartId:'chart-costos-b2c', evolId:'chart-costos-b2c-evol', mesLabelId:'costos-b2c-mes-label', hasFacturado:true});
  renderCostosLog('costos_b2b', {kpisId:'costos-b2b-kpis', chartId:'chart-costos-b2b', evolId:'chart-costos-b2b-evol', mesLabelId:'costos-b2b-mes-label', hasFacturado:true});
}

function renderCostosLog(key, cfg) {
  const data = RAW[key];
  if(!data) return;
  const meses = data.meses;
  const sinDatosMes = !meses.includes(currentMes);

  if(sinDatosMes) {
    document.getElementById(cfg.kpisId).innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text3);font-size:12px;padding:24px 0">Sin datos de costos logísticos cargados para '+currentMes+'</div>';
    if(CHARTS[cfg.chartId]){ CHARTS[cfg.chartId].destroy(); delete CHARTS[cfg.chartId]; }
    const mesLabelEl0 = document.getElementById(cfg.mesLabelId);
    if(mesLabelEl0) mesLabelEl0.textContent = currentMes;
  } else {
    const lastMes = currentMes;
    const idx = meses.indexOf(lastMes);
    const prevMes = idx>0 ? meses[idx-1] : null;
    const totalCosto = data.total_costo[lastMes];
    const facturado = data.facturado[lastMes];
    const pct = data.total_pct[lastMes];
    const prevPct = prevMes ? data.total_pct[prevMes] : null;
    const deltaPct = prevPct!=null ? pct-prevPct : null;

    document.getElementById(cfg.kpisId).innerHTML = `
      <div class="kpi-card">
        <div class="kpi-card-top" style="background:#1a2540"></div>
        <div class="kpi-label">Costo logístico total</div>
        <div class="kpi-value">$${fmtN(totalCosto)}</div>
        <div class="kpi-sub"><span style="color:var(--text3)">${lastMes}</span></div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top" style="background:#2563eb"></div>
        <div class="kpi-label">Facturado</div>
        <div class="kpi-value">$${fmtN(facturado)}</div>
        <div class="kpi-sub"><span style="color:var(--text3)">${lastMes}</span></div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top" style="background:${pct<=0.15?'#16a34a':pct<=0.30?'#d97706':'#dc2626'}"></div>
        <div class="kpi-label">% sobre facturado</div>
        <div class="kpi-value">${fmtPct(pct)}</div>
        <div class="kpi-sub">${deltaPct!=null?'<span class="badge '+(deltaPct<=0?'pos':'neg')+'">'+(deltaPct>0?'+':'')+fmtPct(deltaPct)+' vs '+prevMes+'</span>':''}</div>
      </div>
    `;

    const mesLabelEl = document.getElementById(cfg.mesLabelId);
    if(mesLabelEl) mesLabelEl.textContent = lastMes;

    // Bar: costo por operador (mes seleccionado), excluye "Total", ordenado desc
    const ops = data.operadores.filter(o=>o.operador!=='Total').map(o=>({nombre:o.operador.replace(/\s*\(.*?\)\s*/,'').trim(),costo:o.meses[lastMes].costo||0})).sort((a,b)=>b.costo-a.costo);
    const barColors=['#1a2540','#2563eb','#0891b2','#d97706','#7c3aed','#dc2626','#16a34a','#f18a00'];
    mkChart(cfg.chartId,'bar',{
      labels: ops.map(o=>o.nombre.length>22?o.nombre.slice(0,22)+'…':o.nombre),
      datasets:[{label:'Costo',data:ops.map(o=>o.costo),backgroundColor:ops.map((o,i)=>barColors[i%barColors.length]),borderRadius:4}]
    },{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>'$'+fmtN(ctx.raw)}}},
      scales:{x:{grid:{display:false},ticks:{color:'#9ca3af',font:{size:9},maxRotation:35}},y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',callback:v=>'$'+fmtN(v)}}}
    });
  }

  // Evolución histórica: costo total vs facturado (barras) + % sobre facturado (línea, eje secundario)
  // Este gráfico siempre muestra todos los meses con datos cargados, independientemente del mes seleccionado arriba.
  const evolDatasets = [
    {type:'bar',label:'Costo total',data:meses.map(m=>data.total_costo[m]),backgroundColor:'rgba(241,138,0,0.65)',borderColor:'#f18a00',borderWidth:1.5,borderRadius:3,yAxisID:'y'},
  ];
  if(cfg.hasFacturado){
    evolDatasets.push({type:'bar',label:'Facturado',data:meses.map(m=>data.facturado[m]),backgroundColor:'rgba(37,99,235,0.35)',borderColor:'#2563eb',borderWidth:1.5,borderRadius:3,yAxisID:'y'});
  }
  evolDatasets.push({type:'line',label:'% sobre facturado',data:meses.map(m=>data.total_pct[m]*100),borderColor:'#dc2626',backgroundColor:'rgba(220,38,38,0.08)',borderDash:[5,4],tension:.3,pointRadius:3,yAxisID:'y1'});
  mkChart(cfg.evolId,'bar',{ labels:meses, datasets:evolDatasets },{
    responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:true,labels:{color:'#4b5563',font:{size:10},boxWidth:10}},tooltip:{mode:'index',intersect:false,callbacks:{label:ctx=>ctx.dataset.yAxisID==='y1'?ctx.dataset.label+': '+ctx.raw.toFixed(1)+'%':ctx.dataset.label+': $'+fmtN(ctx.raw)}}},
    scales:{
      x:{grid:{display:false},ticks:{color:'#9ca3af'}},
      y:{position:'left',grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',callback:v=>'$'+fmtN(v)}},
      y1:{position:'right',grid:{display:false},ticks:{color:'#dc2626',callback:v=>v.toFixed(0)+'%'}}
    }
  });

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
  const MESES_ORD = RAW.log_summary.meses_disponibles.filter(function(m){return RAW.log_summary.by_mes[m];});
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

  // Usamos directamente los transportistas reales (ya reflejan todos los almacenes: Granger S.A., ENBOX, MELI FULL)
  const b2c = mesData.transp_b2c || {};
  const b2b = {};
  Object.entries(mesData.transp_b2b || {}).forEach(([k,v])=>{ if(k!=='OCA') b2b[k]=v; }); // OCA en B2B son casos puntuales (Tierra del Fuego), no un operador real

  var operadorColor = {'OCA':'#22201c','Enbox':'#f18a00','Mercado Libre':'#f49b31','Andreani':'#2563eb','Via Cargo':'#3b3836','Expreso Santa Rosa':'#b0c8e9','Transporte MJ':'#f9be78','Transporte Anibal':'#d97706'};
  function makePie(id, obj) {
    var entries = Object.entries(obj).filter(function(kv){return kv[0]&&kv[1]>0;});
    var labels = entries.map(function(kv){return kv[0];});
    var vals = entries.map(function(kv){return kv[1];});
    var total = vals.reduce(function(a,b){return a+b;},0)||1;
    var colors = labels.map(function(l,i){return operadorColor[l]||CP[i];});
    mkChart(id,'doughnut',{labels:labels,datasets:[{data:vals,backgroundColor:colors,borderColor:'#fff',borderWidth:2}]},{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{color:'#4b5563',font:{size:10},padding:8,boxWidth:10}},tooltip:{callbacks:{label:function(ctx){return ctx.label+': '+(ctx.raw/total*100).toFixed(1)+'% ('+ctx.raw+')'}}},datalabels:false}});
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

  renderCostosMP();
}

function renderCostosMP() {
  const data = RAW.costos_mp;
  if(!data || !data.meses.length) return;
  const meses = data.meses;
  const sinDatosMes = !meses.includes(currentMes);

  if(sinDatosMes) {
    document.getElementById('costos-mp-kpis').innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text3);font-size:12px;padding:24px 0">Sin datos de costos logísticos de MP cargados para '+currentMes+'</div>';
  } else {
    const lastMes = currentMes;
    const idx = meses.indexOf(lastMes);
    const prevMes = idx>0 ? meses[idx-1] : null;
    const totalCosto = data.total_costo[lastMes];
    const prevCosto = prevMes ? data.total_costo[prevMes] : null;
    const deltaCosto = prevCosto!=null ? (totalCosto-prevCosto)/prevCosto : null;

    document.getElementById('costos-mp-kpis').innerHTML = `
      <div class="kpi-card">
        <div class="kpi-card-top" style="background:#1a2540"></div>
        <div class="kpi-label">Costo logístico MP total</div>
        <div class="kpi-value">$${fmtN(totalCosto)}</div>
        <div class="kpi-sub"><span style="color:var(--text3)">${lastMes}</span></div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top" style="background:#7c3aed"></div>
        <div class="kpi-label">Variación vs mes anterior</div>
        <div class="kpi-value" style="font-size:20px">${deltaCosto!=null?(deltaCosto>0?'+':'')+fmtPct(deltaCosto):'—'}</div>
        <div class="kpi-sub">${prevMes?'<span style="color:var(--text3)">vs '+prevMes+'</span>':''}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top" style="background:#0891b2"></div>
        <div class="kpi-label">Operadores</div>
        <div class="kpi-value">${data.operadores.length}</div>
        <div class="kpi-sub"><span style="color:var(--text3)">${lastMes}</span></div>
      </div>
    `;
  }

  // Evolución histórica: siempre muestra todos los meses con datos, independientemente del mes seleccionado arriba.
  const opColors=['#f18a00','#1a2540','#2563eb','#0891b2','#7c3aed','#d97706'];
  const datasets = data.operadores.map((op,i)=>({
    label: op.operador,
    data: meses.map(m=>op.meses[m]!=null?op.meses[m]:null),
    borderColor: opColors[i%opColors.length],
    backgroundColor: opColors[i%opColors.length]+'22',
    tension:.3, fill:true, pointRadius:4, pointHoverRadius:6, borderWidth:2.5
  }));

  mkChart('chart-costos-mp-evol','line',{ labels: meses, datasets },{
    responsive:true, maintainAspectRatio:false,
    plugins:{legend:{display:true,labels:{color:'#4b5563',font:{size:10},boxWidth:10}},tooltip:{callbacks:{label:ctx=>ctx.dataset.label+': $'+fmtN(ctx.raw)}},datalabels:false},
    scales:{x:{grid:{display:false},ticks:{color:'#9ca3af'}},y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',callback:v=>'$'+fmtN(v)}}}
  });
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