-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "currentPrice" INTEGER NOT NULL,
    "collors" TEXT[],
    "sizes" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
