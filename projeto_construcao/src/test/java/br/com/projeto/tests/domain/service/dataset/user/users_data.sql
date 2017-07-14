TRUNCATE "users" CASCADE;

INSERT INTO users (id, name, last_name, password, email, active, sex, permission) 
VALUES (1, 'Administrator', '001', '$2a$10$g.wT4R0Wnfel1jc/k84OXuwZE02BlACSLfWy6TycGPvvEKvIm86SG', 'administrator.001@email.com.br','true', 'MASCULINO', 'ROLE_ADMIN'),
	   (2, 'Administrator', '002', '$2a$10$g.wT4R0Wnfel1jc/k84OXuwZE02BlACSLfWy6TycGPvvEKvIm86SG', 'administrator.002@email.com.br','true', 'FEMININO', 'ROLE_ADMIN'), 
	   (3, 'User', '003', '$2a$10$g.wT4R0Wnfel1jc/k84OXuwZE02BlACSLfWy6TycGPvvEKvIm86SG', 'user.003@email.com.br','true', 'MASCULINO', 'ROLE_USER'),
	   (4, 'Usasdasdasder', '004', '$2a$10$g.wT4R0Wnfel1jc/k84OXuwZE02BlACSLfWy6TycGPvvEKvIm86SG', 'user.004@email.com.br','true', 'FEMININO', 'ROLE_USER');

SELECT pg_catalog.setval('public.users_id_seq', 1000, TRUE);