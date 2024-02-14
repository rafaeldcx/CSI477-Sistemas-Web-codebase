-- CreateTable
CREATE TABLE "passageiros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "aeroportos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "reservas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_reserva" TEXT NOT NULL,
    "voo_id" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "passageiro_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "reservas_passageiro_id_fkey" FOREIGN KEY ("passageiro_id") REFERENCES "passageiros" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "reservas_voo_id_fkey" FOREIGN KEY ("voo_id") REFERENCES "voos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "voos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero_voo" INTEGER NOT NULL,
    "aeroporto_origem_id" INTEGER NOT NULL,
    "aeroporto_destino_id" INTEGER NOT NULL,
    "hora_partida" DATETIME NOT NULL,
    "hora_chegada" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "voos_aeroporto_origem_id_fkey" FOREIGN KEY ("aeroporto_origem_id") REFERENCES "aeroportos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "voos_aeroporto_destino_id_fkey" FOREIGN KEY ("aeroporto_destino_id") REFERENCES "aeroportos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "passageiros_cpf_key" ON "passageiros"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "passageiros_email_key" ON "passageiros"("email");

-- CreateIndex
CREATE UNIQUE INDEX "voos_numero_voo_key" ON "voos"("numero_voo");
