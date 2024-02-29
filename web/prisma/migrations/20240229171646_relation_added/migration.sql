/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "UserDev" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserDev_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "UserUserId" INTEGER NOT NULL,

    CONSTRAINT "UserUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organizations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "OrganizationId" INTEGER NOT NULL,

    CONSTRAINT "Organizations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserUser_UserUserId_key" ON "UserUser"("UserUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Organizations_OrganizationId_key" ON "Organizations"("OrganizationId");

-- AddForeignKey
ALTER TABLE "Organizations" ADD CONSTRAINT "Organizations_OrganizationId_fkey" FOREIGN KEY ("OrganizationId") REFERENCES "UserUser"("UserUserId") ON DELETE RESTRICT ON UPDATE CASCADE;
