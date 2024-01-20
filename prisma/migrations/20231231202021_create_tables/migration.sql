-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personagem" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT,
    "url_imagem" TEXT NOT NULL,
    "afiliacao" TEXT NOT NULL,
    "recompensa" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "tripulacao_id" TEXT NOT NULL,
    "akumanomi_id" TEXT NOT NULL,

    CONSTRAINT "personagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tripulacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "url_imagem" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tripulacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tripulacao_personagem" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "personagem_id" TEXT NOT NULL,
    "tripulacao_id" TEXT NOT NULL,

    CONSTRAINT "tripulacao_personagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "akumanomi" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "url_imagem" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "akumanomi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "akumanomi_personagem" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "personagem_id" TEXT NOT NULL,
    "akumanomi_id" TEXT NOT NULL,

    CONSTRAINT "akumanomi_personagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personagem" ADD CONSTRAINT "personagem_tripulacao_id_fkey" FOREIGN KEY ("tripulacao_id") REFERENCES "tripulacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personagem" ADD CONSTRAINT "personagem_akumanomi_id_fkey" FOREIGN KEY ("akumanomi_id") REFERENCES "akumanomi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tripulacao_personagem" ADD CONSTRAINT "tripulacao_personagem_personagem_id_fkey" FOREIGN KEY ("personagem_id") REFERENCES "personagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tripulacao_personagem" ADD CONSTRAINT "tripulacao_personagem_tripulacao_id_fkey" FOREIGN KEY ("tripulacao_id") REFERENCES "tripulacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "akumanomi_personagem" ADD CONSTRAINT "akumanomi_personagem_personagem_id_fkey" FOREIGN KEY ("personagem_id") REFERENCES "personagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "akumanomi_personagem" ADD CONSTRAINT "akumanomi_personagem_akumanomi_id_fkey" FOREIGN KEY ("akumanomi_id") REFERENCES "akumanomi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
