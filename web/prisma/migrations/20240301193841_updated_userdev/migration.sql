/*
  Warnings:

  - Added the required column `email` to the `UserDev` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `UserDev` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserDev" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "password" TEXT NOT NULL;
