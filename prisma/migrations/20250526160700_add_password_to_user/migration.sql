/*
  Warnings:

  - You are about to drop the `CulturalAspects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CulturalAspectsToOriginalPeople` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "_CulturalAspectsToOriginalPeople" DROP CONSTRAINT "_CulturalAspectsToOriginalPeople_A_fkey";

-- DropForeignKey
ALTER TABLE "_CulturalAspectsToOriginalPeople" DROP CONSTRAINT "_CulturalAspectsToOriginalPeople_B_fkey";

-- DropTable
DROP TABLE "CulturalAspects";

-- DropTable
DROP TABLE "_CulturalAspectsToOriginalPeople";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dateBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CulturalAspect" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CulturalAspect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CulturalAspectToOriginalPeople" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CulturalAspectToOriginalPeople_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_CulturalAspectToOriginalPeople_B_index" ON "_CulturalAspectToOriginalPeople"("B");

-- AddForeignKey
ALTER TABLE "_CulturalAspectToOriginalPeople" ADD CONSTRAINT "_CulturalAspectToOriginalPeople_A_fkey" FOREIGN KEY ("A") REFERENCES "CulturalAspect"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CulturalAspectToOriginalPeople" ADD CONSTRAINT "_CulturalAspectToOriginalPeople_B_fkey" FOREIGN KEY ("B") REFERENCES "OriginalPeople"("id") ON DELETE CASCADE ON UPDATE CASCADE;
