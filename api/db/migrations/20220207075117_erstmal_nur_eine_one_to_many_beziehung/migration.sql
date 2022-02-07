/*
  Warnings:

  - You are about to drop the `_CourseToMember` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_CourseToMember_B_index";

-- DropIndex
DROP INDEX "_CourseToMember_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CourseToMember";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kd_nr" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birthday" DATETIME,
    "gender" TEXT,
    "street" TEXT,
    "zipcode" TEXT,
    "city" TEXT,
    "phone" TEXT,
    "mobil" TEXT,
    "email" TEXT NOT NULL,
    "courseId" TEXT,
    CONSTRAINT "Member_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Member" ("birthday", "city", "email", "first_name", "gender", "id", "kd_nr", "last_name", "mobil", "phone", "street", "zipcode") SELECT "birthday", "city", "email", "first_name", "gender", "id", "kd_nr", "last_name", "mobil", "phone", "street", "zipcode" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
