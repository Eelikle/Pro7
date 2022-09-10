DROP TABLE IF EXISTS "Posts";

CREATE TABLE "Posts"(
   "id" INT GENERATED ALWAYS AS IDENTITY, -- This creates a unique identifier for each post
   "userId" INT, -- postgressql hates capital letters, to be able to use them, dont forget to add double quotes around the column name
   "createdAt" TIMESTAMP NOT NULL,
   "message" VARCHAR(255) NOT NULL,
   PRIMARY KEY(id), -- This indicates that the id is the primary key
   CONSTRAINT fk_user -- Creating a foreign key constraint on the userId column
     FOREIGN KEY("userId") -- UserId column is the foreign key
	  REFERENCES "Users"(id) -- Userid contains id which is the primary key of the Users table
);

ALTER TABLE "Posts" DROP CONSTRAINT fk_user, ADD CONSTRAINT fk_user
   FOREIGN KEY("userId")
   REFERENCES "Users"(id)
   ON DELETE CASCADE;

ALTER TABLE  "Posts"  ADD COLUMN "views" INT[];