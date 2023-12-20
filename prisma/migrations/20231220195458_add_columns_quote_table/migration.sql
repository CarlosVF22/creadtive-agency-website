/*
  Warnings:

  - Added the required column `conclusion_text` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `introductory_text` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "conclusion_text" TEXT NOT NULL,
ADD COLUMN     "introductory_text" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
