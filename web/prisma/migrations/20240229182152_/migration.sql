/*
  Warnings:

  - You are about to drop the column `OrganizationId` on the `Organizations` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[UserId]` on the table `Organizations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `UserId` to the `Organizations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Organizations" DROP CONSTRAINT "Organizations_OrganizationId_fkey";

-- DropIndex
DROP INDEX "Organizations_OrganizationId_key";

-- AlterTable
ALTER TABLE "Organizations" DROP COLUMN "OrganizationId",
ADD COLUMN     "UserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserUser" ALTER COLUMN "UserUserId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Organizations_UserId_key" ON "Organizations"("UserId");

-- AddForeignKey
ALTER TABLE "Organizations" ADD CONSTRAINT "Organizations_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "UserUser"("UserUserId") ON DELETE RESTRICT ON UPDATE CASCADE;
