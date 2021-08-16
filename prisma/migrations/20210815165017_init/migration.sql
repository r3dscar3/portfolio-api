-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "slug" TEXT,
    "emoji" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "pageId" INTEGER,
    "title" TEXT,
    "description" TEXT,
    "sortOrder" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SectionItem" (
    "id" SERIAL NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "sortOrder" INTEGER,
    "years" INTEGER,
    "src" TEXT,
    "emoji" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page.id_unique" ON "Page"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Section.id_unique" ON "Section"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SectionItem.id_unique" ON "SectionItem"("id");

-- AddForeignKey
ALTER TABLE "SectionItem" ADD FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
