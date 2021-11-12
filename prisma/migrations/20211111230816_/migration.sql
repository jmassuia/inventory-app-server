/*
  Warnings:

  - You are about to drop the column `state` on the `suppliers` table. All the data in the column will be lost.
  - Added the required column `uf` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `suppliers` DROP COLUMN `state`,
    ADD COLUMN `uf` VARCHAR(191) NOT NULL;
