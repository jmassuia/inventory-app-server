/*
  Warnings:

  - You are about to drop the column `roles` on the `clients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clients` DROP COLUMN `roles`,
    ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'user';
