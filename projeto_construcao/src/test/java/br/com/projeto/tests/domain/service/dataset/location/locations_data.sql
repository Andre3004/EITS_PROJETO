TRUNCATE "location" CASCADE;

INSERT INTO location (id, cod_location, location_id, responsible_id, vice_responsible_id) 
VALUES (1, 'Templo budista', null, 1, null),
	   (2, 'Praça de meditação', 1, 1, null),
	   (3, 'PTI', null, 2, null),
	   (4, 'Ed das águas', 3, 2, null),
	   (5, 'Andar 4', 4, 2, null),
	   (6, 'Praça da biblia', null, 2, null);
	   
SELECT pg_catalog.setval('public.location_id_seq', 1000, TRUE);