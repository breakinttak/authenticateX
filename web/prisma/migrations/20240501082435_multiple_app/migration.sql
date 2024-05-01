/*
  Warnings:

  - A unique constraint covering the columns `[IdUser]` on the table `App` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserUser" DROP CONSTRAINT "UserUser_UserUserId_fkey";

-- DropIndex
DROP INDEX "App_AppId_key";

-- AlterTable
ALTER TABLE "App" ADD COLUMN     "IdUser" TEXT,
ADD CONSTRAINT "App_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "App_IdUser_key" ON "App"("IdUser");

-- AddForeignKey
ALTER TABLE "UserUser" ADD CONSTRAINT "UserUser_UserUserId_fkey" FOREIGN KEY ("UserUserId") REFERENCES "App"("IdUser") ON DELETE RESTRICT ON UPDATE CASCADE;
