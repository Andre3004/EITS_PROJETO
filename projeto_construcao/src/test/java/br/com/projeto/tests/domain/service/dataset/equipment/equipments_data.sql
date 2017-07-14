TRUNCATE "equipment" CASCADE;

INSERT INTO equipment (id, name, description, equipment_id, location_id, file_path) 
VALUES (1, 'Ar condicionado', 'Ar condicionado Split', null, 20, null),
	   (2, 'Condensador', 'Condensador de ar condicionado Split', 1, 20, null),
	   (3, 'Espuma', 'Espuma de ar condicionado Split', 1, 20, null),
	   (4, 'Computador', 'Computador Acer', null, 23, null),
	   (5, 'Placa mãe', 'Placa mãe asus', 4, 23, null),
	   (6, 'Processador', 'Processador Intel i7', 4, 23, null);
	   
SELECT pg_catalog.setval('public.equipment_id_seq', 1000, TRUE);