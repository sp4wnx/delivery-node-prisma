/*
  Warnings:

  - You are about to drop the column `name` on the `deliverymen` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `deliverymen` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `deliverymen` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "deliverymen_name_key";

-- AlterTable
ALTER TABLE "deliverymen" DROP COLUMN "name",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "deliverymen_username_key" ON "deliverymen"("username");
