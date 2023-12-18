/*
  Warnings:

  - You are about to drop the column `base_price_cop` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `base_price_usd` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "base_price_cop",
DROP COLUMN "base_price_usd";
