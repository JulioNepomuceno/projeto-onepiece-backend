/*
  Warnings:

  - You are about to drop the column `data_nascimento` on the `personagem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "personagem" DROP CONSTRAINT "personagem_akumanomi_id_fkey";

-- DropForeignKey
ALTER TABLE "personagem" DROP CONSTRAINT "personagem_tripulacao_id_fkey";

-- AlterTable
ALTER TABLE "personagem" DROP COLUMN "data_nascimento",
ADD COLUMN     "aniversario" TEXT,
ALTER COLUMN "tripulacao_id" DROP NOT NULL,
ALTER COLUMN "akumanomi_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "personagem" ADD CONSTRAINT "personagem_tripulacao_id_fkey" FOREIGN KEY ("tripulacao_id") REFERENCES "tripulacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personagem" ADD CONSTRAINT "personagem_akumanomi_id_fkey" FOREIGN KEY ("akumanomi_id") REFERENCES "akumanomi"("id") ON DELETE SET NULL ON UPDATE CASCADE;
