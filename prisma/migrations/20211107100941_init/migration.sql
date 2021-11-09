/*
  Warnings:

  - Added the required column `city` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `suppliers` ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `clientId` INTEGER NOT NULL,
    ADD COLUMN `cnpj` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `suppliers` ADD CONSTRAINT `suppliers_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
