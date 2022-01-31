/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `course_typeId` on the `Course` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "course_type" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "time" TEXT NOT NULL
);
INSERT INTO "new_Course" ("category", "course_type", "day", "id", "time") SELECT "category", "course_type", "day", "id", "time" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
