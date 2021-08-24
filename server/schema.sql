DROP TABLE IF EXISTS feedback;

CREATE TABLE feedback (
  id SERIAL,
  message VARCHAR(255),
  PRIMARY KEY (id)
);

/*

  psql justincase  -h 127.0.0.1 -d feedback -f server/schema.sql

*/