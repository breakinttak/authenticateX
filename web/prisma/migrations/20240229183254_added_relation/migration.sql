/*
  Warnings:

  - A unique constraint covering the columns `[UserDevId]` on the table `UserDev` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UserDev" ADD COLUMN     "UserDevId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "UserDev_UserDevId_key" ON "UserDev"("UserDevId");

-- AddForeignKey
ALTER TABLE "UserUser" ADD CONSTRAINT "UserUser_id_fkey" FOREIGN KEY ("id") REFERENCES "UserDev"("UserDevId") ON DELETE RESTRICT ON UPDATE CASCADE;
