-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "course_type" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "time" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Member" (
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
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RW_DataMigration" (
    "version" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL,
    "finishedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_CourseToMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Member" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToMember_AB_unique" ON "_CourseToMember"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToMember_B_index" ON "_CourseToMember"("B");
