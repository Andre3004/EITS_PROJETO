/**
 * 
 */
CREATE TABLE equipment 
(
    id bigint NOT NULL,
    description character varying(144) NOT NULL,
    name character varying(50)NOT NULL UNIQUE,
    equipment_id bigint,
    location_id bigint,
    file_path character varying(144)
);
/**
 * 
 */
CREATE TABLE location 
(
    id bigint NOT NULL,
    cod_location character varying(50) NOT NULL UNIQUE,
    location_id bigint,
    responsible_id bigint NOT NULL,
    vice_responsible_id bigint
);
/**
 * 
 */
CREATE TABLE users 
(
    id bigint NOT NULL,
    email character varying(144) NOT NULL UNIQUE,
    name character varying(50)NOT NULL ,
    password character varying(100)NOT NULL,
    permission character varying(20)NOT NULL,
    active boolean DEFAULT true NOT NULL,
    last_name character varying(50)NOT NULL,
    sex character varying(20)NOT NULL
);
/**
 * 
 */
CREATE TABLE revinfo
(
    rev integer NOT NULL,
    revtstmp bigint,
    CONSTRAINT revinfo_pkey PRIMARY KEY (rev)
)
WITH 
(
    OIDS = FALSE
)
TABLESPACE pg_default;
/**
 * 
 */
CREATE TABLE equipment_aud
(
    id bigint NOT NULL,
    rev integer NOT NULL,
    revtype smallint,
    description character varying(144) COLLATE pg_catalog."default",
    file_path character varying(144) COLLATE pg_catalog."default",
    name character varying(50) COLLATE pg_catalog."default",
    equipment_id bigint,
    location_id bigint,
    CONSTRAINT equipment_aud_pkey PRIMARY KEY (id, rev),
    CONSTRAINT fkb22p8jg4po0dkgunc19yorkwb FOREIGN KEY (rev)
        REFERENCES public.revinfo (rev) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH 
(
    OIDS = FALSE
)
TABLESPACE pg_default;
/**
 * 
 */
CREATE TABLE location_aud
(
    id bigint NOT NULL,
    rev integer NOT NULL,
    revtype smallint,
    cod_location character varying(50) COLLATE pg_catalog."default",
    location_id bigint,
    responsible_id bigint,
    vice_responsible_id bigint,
    CONSTRAINT location_aud_pkey PRIMARY KEY (id, rev),
    CONSTRAINT fkgixqx5fln1y2xg74cdu38063o FOREIGN KEY (rev)
        REFERENCES public.revinfo (rev) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH 
(
    OIDS = FALSE
)
TABLESPACE pg_default;
/**
 * 
 */
CREATE TABLE users_aud
(
    id bigint NOT NULL,
    rev integer NOT NULL,
    revtype smallint,
    active boolean DEFAULT true,
    email character varying(144) COLLATE pg_catalog."default",
    last_name character varying(50) COLLATE pg_catalog."default",
    name character varying(50) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    permission character varying(20) COLLATE pg_catalog."default",
    sex character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT users_aud_pkey PRIMARY KEY (id, rev),
    CONSTRAINT fkinrdywgyurfk2ojrfkard4ejn FOREIGN KEY (rev)
        REFERENCES public.revinfo (rev) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH 
(
    OIDS = FALSE
)
TABLESPACE pg_default;
/**
 * 
 */
CREATE SEQUENCE equipment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
/**
 * 
 */
CREATE SEQUENCE location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
/**
 * 
 */
CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
/**
 * 
 */
CREATE SEQUENCE hibernate_sequence
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
/**
 * 
 */
ALTER TABLE ONLY equipment ALTER COLUMN id SET DEFAULT nextval('equipment_id_seq'::regclass);
/**
 * 
 */
ALTER TABLE ONLY location ALTER COLUMN id SET DEFAULT nextval('location_id_seq'::regclass);
/**
 * 
 */
ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);
/**
 * 
 */
ALTER TABLE ONLY equipment
    ADD CONSTRAINT equipment_pkey PRIMARY KEY (id);
/**
 * 
 */
ALTER TABLE ONLY location
    ADD CONSTRAINT location_pkey PRIMARY KEY (id);
/**
 * 
 */
ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
/**
 * 
 */
ALTER TABLE ONLY location
    ADD CONSTRAINT fk622utfqouo5kfc8hw0dyvh4bp FOREIGN KEY (vice_responsible_id) REFERENCES users(id);
/**
 * 
 */
ALTER TABLE ONLY location
    ADD CONSTRAINT fkhqf37px2gaymx078go9tx8qeo FOREIGN KEY (location_id) REFERENCES location(id);
/**
 * 
 */
ALTER TABLE ONLY location
    ADD CONSTRAINT fkict8ofaal0hnm6g3wo0ug70ng FOREIGN KEY (responsible_id) REFERENCES users(id);
/**
 * 
 */
ALTER TABLE ONLY equipment
    ADD CONSTRAINT fkiwvidbadttg008whpiqaodxtd FOREIGN KEY (location_id) REFERENCES location(id);
/**
 * 
 */
ALTER TABLE ONLY equipment
    ADD CONSTRAINT fkp6xvknr37up2bhg05u2c4qykc FOREIGN KEY (equipment_id) REFERENCES equipment(id);

