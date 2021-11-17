--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: places; Type: TABLE; Schema: public; Owner: adesz
--

CREATE TABLE public.places (
    id integer NOT NULL,
    title text NOT NULL,
    content text,
    county text,
    type text,
    space integer,
    picture text,
    created timestamp without time zone DEFAULT now()
);


ALTER TABLE public.places OWNER TO adesz;

--
-- Name: places_id_seq; Type: SEQUENCE; Schema: public; Owner: adesz
--

CREATE SEQUENCE public.places_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.places_id_seq OWNER TO adesz;

--
-- Name: places_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adesz
--

ALTER SEQUENCE public.places_id_seq OWNED BY public.places.id;


--
-- Name: roads; Type: TABLE; Schema: public; Owner: adesz
--

CREATE TABLE public.roads (
    id integer NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    county text,
    type text,
    quality text,
    length integer NOT NULL,
    picture text,
    created timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.roads OWNER TO adesz;

--
-- Name: roads_id_seq; Type: SEQUENCE; Schema: public; Owner: adesz
--

CREATE SEQUENCE public.roads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roads_id_seq OWNER TO adesz;

--
-- Name: roads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adesz
--

ALTER SEQUENCE public.roads_id_seq OWNED BY public.roads.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: adesz
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    fullname text,
    email text NOT NULL,
    password text NOT NULL,
    leiras text,
    ppicture text,
    cpicture text
);


ALTER TABLE public.users OWNER TO adesz;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: adesz
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO adesz;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adesz
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: places id; Type: DEFAULT; Schema: public; Owner: adesz
--

ALTER TABLE ONLY public.places ALTER COLUMN id SET DEFAULT nextval('public.places_id_seq'::regclass);


--
-- Name: roads id; Type: DEFAULT; Schema: public; Owner: adesz
--

ALTER TABLE ONLY public.roads ALTER COLUMN id SET DEFAULT nextval('public.roads_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: adesz
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: places; Type: TABLE DATA; Schema: public; Owner: adesz
--

COPY public.places (id, title, content, county, type, space, picture, created) FROM stdin;
1	Miskolc	Cigók	Borsod-Abaúj-Zemplén	Nehéz	5	miskolc	2021-11-17 21:56:56.649644
2	Kró meg a zser	asd	Győr-Moson-Sopron	Könnyű	1	kró_meg_a_zser	2021-11-17 21:58:19.636187
\.


--
-- Data for Name: roads; Type: TABLE DATA; Schema: public; Owner: adesz
--

COPY public.roads (id, title, content, county, type, quality, length, picture, created) FROM stdin;
1	8-as főút	Ez egy hosszú út.	Veszprém	Egyenes	Jó	40	8-as_főút	2021-11-17 21:16:56.861239
2	M7-es autópálya	Autópálya cucc.	Veszprém	Egyenes	Közepes	120	m7-es_autópálya	2021-11-17 21:17:01.013245
3	Vigh Feri pff	Anisics pff anyád	Békés	Egyenes	Szar	2	vigh_feri_pff	2021-11-17 21:17:02.8452
4	Pff anyád	Erős gerinc. Kiváló tartás.	Békés	Szerpentín	Jó	69	pff_anyád	2021-11-17 21:27:04.851151
5	Faszkex	asd	Bács-Kiskun	Szerpentín	Szar	18	faszkex	2021-11-17 21:27:50.469548
6	Faszomba	123	Bács-Kiskun	Szerpentín	Szar	123	faszomba	2021-11-17 21:29:43.596749
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: adesz
--

COPY public.users (id, username, fullname, email, password, leiras, ppicture, cpicture) FROM stdin;
1		Hunyadvári Ádám	adesz@jss.hu	jZae727K08KaOmKSgOaGzww/XVqGr/PKEgIMkjrcbJI	\N	\N	\N
2		Ujj Norbert	norbert.ujj@gmail.com	VNXLLTMtvbSFApPKrkVZzoi2UWPx6l1OSzrEnXct7RQ	\N	\N	\N
\.


--
-- Name: places_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adesz
--

SELECT pg_catalog.setval('public.places_id_seq', 2, true);


--
-- Name: roads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adesz
--

SELECT pg_catalog.setval('public.roads_id_seq', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adesz
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: adesz
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- PostgreSQL database dump complete
--

