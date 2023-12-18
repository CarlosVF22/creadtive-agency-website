/*
  Warnings:

  - You are about to drop the column `base_price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_es]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_en]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `base_price_cop` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `base_price_usd` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_es` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency_id` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_id` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_price` to the `Quote_Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_text` to the `Quote_Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_name_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "base_price",
DROP COLUMN "name",
ADD COLUMN     "base_price_cop" INTEGER NOT NULL,
ADD COLUMN     "base_price_usd" INTEGER NOT NULL,
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_es" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "currency_id" INTEGER NOT NULL,
ADD COLUMN     "language_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Quote_Product" ADD COLUMN     "product_price" INTEGER NOT NULL,
ADD COLUMN     "product_text" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Currency_name_key" ON "Currency"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_acronym_key" ON "Currency"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "Language_name_key" ON "Language"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Language_acronym_key" ON "Language"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_es_key" ON "Product"("name_es");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_en_key" ON "Product"("name_en");

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_currency_id_fkey" FOREIGN KEY ("currency_id") REFERENCES "Currency"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Language"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
