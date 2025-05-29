-- CreateTable
CREATE TABLE "OriginalPeople" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "estimatedPopulation" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OriginalPeople_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" TEXT NOT NULL,
    "speakers" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Terminology" (
    "id" SERIAL NOT NULL,
    "term" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Terminology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CulturalAspects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CulturalAspects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OriginalPeopleToRegion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_OriginalPeopleToRegion_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_OriginalPeopleToTerminology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_OriginalPeopleToTerminology_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_LanguageToOriginalPeople" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LanguageToOriginalPeople_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_LanguageToTerminology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LanguageToTerminology_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CulturalAspectsToOriginalPeople" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CulturalAspectsToOriginalPeople_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_OriginalPeopleToRegion_B_index" ON "_OriginalPeopleToRegion"("B");

-- CreateIndex
CREATE INDEX "_OriginalPeopleToTerminology_B_index" ON "_OriginalPeopleToTerminology"("B");

-- CreateIndex
CREATE INDEX "_LanguageToOriginalPeople_B_index" ON "_LanguageToOriginalPeople"("B");

-- CreateIndex
CREATE INDEX "_LanguageToTerminology_B_index" ON "_LanguageToTerminology"("B");

-- CreateIndex
CREATE INDEX "_CulturalAspectsToOriginalPeople_B_index" ON "_CulturalAspectsToOriginalPeople"("B");

-- AddForeignKey
ALTER TABLE "_OriginalPeopleToRegion" ADD CONSTRAINT "_OriginalPeopleToRegion_A_fkey" FOREIGN KEY ("A") REFERENCES "OriginalPeople"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OriginalPeopleToRegion" ADD CONSTRAINT "_OriginalPeopleToRegion_B_fkey" FOREIGN KEY ("B") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OriginalPeopleToTerminology" ADD CONSTRAINT "_OriginalPeopleToTerminology_A_fkey" FOREIGN KEY ("A") REFERENCES "OriginalPeople"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OriginalPeopleToTerminology" ADD CONSTRAINT "_OriginalPeopleToTerminology_B_fkey" FOREIGN KEY ("B") REFERENCES "Terminology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToOriginalPeople" ADD CONSTRAINT "_LanguageToOriginalPeople_A_fkey" FOREIGN KEY ("A") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToOriginalPeople" ADD CONSTRAINT "_LanguageToOriginalPeople_B_fkey" FOREIGN KEY ("B") REFERENCES "OriginalPeople"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToTerminology" ADD CONSTRAINT "_LanguageToTerminology_A_fkey" FOREIGN KEY ("A") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToTerminology" ADD CONSTRAINT "_LanguageToTerminology_B_fkey" FOREIGN KEY ("B") REFERENCES "Terminology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CulturalAspectsToOriginalPeople" ADD CONSTRAINT "_CulturalAspectsToOriginalPeople_A_fkey" FOREIGN KEY ("A") REFERENCES "CulturalAspects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CulturalAspectsToOriginalPeople" ADD CONSTRAINT "_CulturalAspectsToOriginalPeople_B_fkey" FOREIGN KEY ("B") REFERENCES "OriginalPeople"("id") ON DELETE CASCADE ON UPDATE CASCADE;
