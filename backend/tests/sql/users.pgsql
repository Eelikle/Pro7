DROP TABLE IF EXISTS "Users";

CREATE TABLE "Users"(
   "id" serial PRIMARY KEY,
   "fullName" VARCHAR (255) NOT NULL,
   "email" VARCHAR (255) NOT NULL,
   "password" VARCHAR (255) NOT NULL,
   "isAdmin" BOOLEAN,
   "createdAt" TIMESTAMP,
   "updatedAt" TIMESTAMP
);

-- INSERT INTO "Users" ("fullName", "email", "password", "isAdmin", "createdAt", "updatedAt")
-- VALUES ('John Doe', 'john.doe@company.com', 'secret456', FALSE, current_timestamp, current_timestamp);