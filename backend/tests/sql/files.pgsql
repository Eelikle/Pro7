DROP TABLE IF EXISTS "Files";

CREATE TABLE "Files"(
    "id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "data" BYTEA NOT NULL, -- BLOB is for binary data (e.g. images, videos, etc.)
    "createdAt" TIMESTAMP NOT NULL,
    "type" VARCHAR(24) NOT NULL,
    "size" INT NOT NULL,
    "postId" INT NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT "fk_post" 
        FOREIGN KEY ("postId")
        REFERENCES "Posts" ("id")
);

ALTER TABLE "Files" DROP CONSTRAINT fk_post, -- Alter table helps us delete the existing foreign key (fk_post)
ADD CONSTRAINT fk_post -- Recreate the fk_post
   FOREIGN KEY("postId")
   REFERENCES "Posts"(id)
   ON DELETE CASCADE; -- This indidcates that all files related to a post should be deleted if the post is deleted