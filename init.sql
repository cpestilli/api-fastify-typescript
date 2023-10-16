CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public."videos"(
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    title VARCHAR(32) unique,
    description VARCHAR(100) not null,
    duration integer
);
CREATE EXTENSION IF NOT EXISTS pg_trgm SCHEMA pg_catalog;

SELECT 'POSTGRES VERSION --->';
SELECT VERSION();