-- DropForeignKey
ALTER TABLE "UserUser" DROP CONSTRAINT "UserUser_id_fkey";

-- CreateTable
CREATE TABLE "App" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "AppId" INTEGER,

    CONSTRAINT "App_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "App_AppId_key" ON "App"("AppId");

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_id_fkey" FOREIGN KEY ("id") REFERENCES "UserDev"("UserDevId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserUser" ADD CONSTRAINT "UserUser_id_fkey" FOREIGN KEY ("id") REFERENCES "App"("AppId") ON DELETE RESTRICT ON UPDATE CASCADE;
