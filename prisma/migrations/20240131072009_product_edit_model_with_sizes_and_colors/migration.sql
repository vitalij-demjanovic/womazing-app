/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `collors` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `sizes` on the `Product` table. All the data in the column will be lost.
  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SizeType" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'CUSTOM');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "collors",
DROP COLUMN "sizes",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "CustomColor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "CustomColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sizes" (
    "id" SERIAL NOT NULL,
    "gender" "Gender" NOT NULL,
    "sizeType" "SizeType" NOT NULL,
    "sizeValue" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Sizes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomColor" ADD CONSTRAINT "CustomColor_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sizes" ADD CONSTRAINT "Sizes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
