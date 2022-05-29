/*
  Warnings:

  - You are about to drop the column `name` on the `clients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "clients_name_key";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "name",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clients_username_key" ON "clients"("username");
