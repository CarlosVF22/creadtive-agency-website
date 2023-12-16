-- CreateTable
CREATE TABLE "Quote" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url_path" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Quote_name_key" ON "Quote"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Quote_url_path_key" ON "Quote"("url_path");

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
