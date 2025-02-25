-- CreateTable
CREATE TABLE "participant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "is_owner" BOOLEAN NOT NULL DEFAULT false,
    "trip_Id" TEXT NOT NULL,
    CONSTRAINT "participant_trip_Id_fkey" FOREIGN KEY ("trip_Id") REFERENCES "trip" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
