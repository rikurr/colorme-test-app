-- CreateTable
CREATE TABLE "Shop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accessToken" TEXT NOT NULL,
    "tokenType" TEXT NOT NULL,
    "scope" TEXT NOT NULL
);
