--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

-- Started on 2017-06-04 21:32:16

--SET statement_timeout = 0;
--SET lock_timeout = 0;
--SET idle_in_transaction_session_timeout = 0;
--SET client_encoding = 'UTF8';
--SET standard_conforming_strings = on;
--SET check_function_bodies = false;
--SET client_min_messages = warning;
--SET row_security = off;
--
----
---- TOC entry 2157 (class 1262 OID 32788)
---- Name: bd_projeto; Type: DATABASE; Schema: -; Owner: postgres
----
----SET AUTOCOMMIT = ON
----CREATE DATABASE bd_projeto WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
--
--
--ALTER DATABASE bd_projeto OWNER TO postgres;
--
--\connect bd_projeto
--
--SET statement_timeout = 0;
--SET lock_timeout = 0;
--SET idle_in_transaction_session_timeout = 0;
--SET client_encoding = 'UTF8';
--SET standard_conforming_strings = on;
--SET check_function_bodies = false;
--SET client_min_messages = warning;
--SET row_security = off;
--
----
---- TOC entry 1 (class 3079 OID 12387)
---- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
----
--
--CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
--
--
----
---- TOC entry 2159 (class 0 OID 0)
---- Dependencies: 1
---- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
----
--
--COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
--
--
--SET search_path = public, pg_catalog;

--
-- TOC entry 570 (class 1247 OID 49408)
-- Name: enum_tiposexo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TABLE equipment (
    id bigint NOT NULL,
    description character varying(144) NOT NULL,
    name character varying(50)NOT NULL UNIQUE,
    equipment_id bigint,
    location_id bigint 
);


ALTER TABLE equipment OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 98715)
-- Name: equipment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE equipment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE equipment_id_seq OWNER TO postgres;

--
-- TOC entry 2160 (class 0 OID 0)
-- Dependencies: 189
-- Name: equipment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE equipment_id_seq OWNED BY equipment.id;


--
-- TOC entry 188 (class 1259 OID 91299)
-- Name: location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE location (
    id bigint NOT NULL,
    codlocation character varying(50) NOT NULL UNIQUE,
    location_id bigint,
    responsible_id bigint NOT NULL,
    vice_responsible_id bigint
);


ALTER TABLE location OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 91297)
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE location_id_seq OWNER TO postgres;

--
-- TOC entry 2161 (class 0 OID 0)
-- Dependencies: 187
-- Name: location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE location_id_seq OWNED BY location.id;


--
-- TOC entry 186 (class 1259 OID 74176)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    id bigint NOT NULL,
    email character varying(144) NOT NULL UNIQUE,
    name character varying(50)NOT NULL ,
    password character varying(100)NOT NULL,
    permission character varying(20)NOT NULL,
    active boolean DEFAULT true NOT NULL,
    lastname character varying(50)NOT NULL,
    sex character varying(20)NOT NULL
);


ALTER TABLE users OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 74174)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO postgres;

--
-- TOC entry 2162 (class 0 OID 0)
-- Dependencies: 185
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- TOC entry 2024 (class 2604 OID 98720)
-- Name: equipment id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY equipment ALTER COLUMN id SET DEFAULT nextval('equipment_id_seq'::regclass);


--
-- TOC entry 2023 (class 2604 OID 91302)
-- Name: location id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY location ALTER COLUMN id SET DEFAULT nextval('location_id_seq'::regclass);


--
-- TOC entry 2021 (class 2604 OID 74179)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- TOC entry 2030 (class 2606 OID 98725)
-- Name: equipment equipment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY equipment
    ADD CONSTRAINT equipment_pkey PRIMARY KEY (id);


--
-- TOC entry 2028 (class 2606 OID 91304)
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY location
    ADD CONSTRAINT location_pkey PRIMARY KEY (id);


--
-- TOC entry 2026 (class 2606 OID 74185)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2033 (class 2606 OID 91325)
-- Name: location fk622utfqouo5kfc8hw0dyvh4bp; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY location
    ADD CONSTRAINT fk622utfqouo5kfc8hw0dyvh4bp FOREIGN KEY (vice_responsible_id) REFERENCES users(id);


--
-- TOC entry 2031 (class 2606 OID 91315)
-- Name: location fkhqf37px2gaymx078go9tx8qeo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY location
    ADD CONSTRAINT fkhqf37px2gaymx078go9tx8qeo FOREIGN KEY (location_id) REFERENCES location(id);


--
-- TOC entry 2032 (class 2606 OID 91320)
-- Name: location fkict8ofaal0hnm6g3wo0ug70ng; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY location
    ADD CONSTRAINT fkict8ofaal0hnm6g3wo0ug70ng FOREIGN KEY (responsible_id) REFERENCES users(id);


--
-- TOC entry 2035 (class 2606 OID 98731)
-- Name: equipment fkiwvidbadttg008whpiqaodxtd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY equipment
    ADD CONSTRAINT fkiwvidbadttg008whpiqaodxtd FOREIGN KEY (location_id) REFERENCES location(id);


--
-- TOC entry 2034 (class 2606 OID 98726)
-- Name: equipment fkp6xvknr37up2bhg05u2c4qykc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY equipment
    ADD CONSTRAINT fkp6xvknr37up2bhg05u2c4qykc FOREIGN KEY (equipment_id) REFERENCES equipment(id);


-- Completed on 2017-06-04 21:32:17

--
-- PostgreSQL database dump complete
--

