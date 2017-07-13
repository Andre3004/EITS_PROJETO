TRUNCATE "equipment" CASCADE;

INSERT INTO equipment (id, name, description, equipment_id, location_id, filepath) 
VALUES (1, 'Ar condicionado', 'Ar condicionado Split', null, 1, null),
	   (2, 'Condensador', 'Condensador de ar condicionado Split', 1, 1, null),
	   (3, 'Espuma', 'Espuma de ar condicionado Split', 1, 1, null),
	   (4, 'Computador', 'Computador Acer', null, 4, null),
	   (5, 'Placa mãe', 'Placa mãe asus', 4, 4, null),
	   (6, 'Processador', 'Processador Intel i7', 4, 4, null);
	   
SELECT pg_catalog.setval('public.equipment_id_seq', 1000, TRUE);