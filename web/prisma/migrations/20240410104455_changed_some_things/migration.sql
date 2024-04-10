/*
  Warnings:

  - Made the column `UserUserId` on table `UserUser` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_id_fkey";

-- DropForeignKey
ALTER TABLE "Organizations" DROP CONSTRAINT "Organizations_UserId_fkey";

-- DropForeignKey
ALTER TABLE "UserUser" DROP CONSTRAINT "UserUser_id_fkey";

-- AlterTable
ALTER TABLE "App" ALTER COLUMN "AppId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Organizations" ALTER COLUMN "UserId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserDev" ALTER COLUMN "UserDevId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserUser" ALTER COLUMN "UserUserId" SET NOT NULL,
ALTER COLUMN "UserUserId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_AppId_fkey" FOREIGN KEY ("AppId") REFERENCES "UserDev"("UserDevId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserUser" ADD CONSTRAINT "UserUser_UserUserId_fkey" FOREIGN KEY ("UserUserId") REFERENCES "App"("AppId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organizations" ADD CONSTRAINT "Organizations_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "UserUser"("UserUserId") ON DELETE RESTRICT ON UPDATE CASCADE;
