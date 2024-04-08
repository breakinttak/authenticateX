/*
  Warnings:

  - The primary key for the `App` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `AppId` on table `App` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "App" DROP CONSTRAINT "App_pkey",
ALTER COLUMN "AppId" SET NOT NULL;
