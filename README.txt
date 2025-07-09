📌 Projeto: Agenda Médica com PWA - InfinityFree Ready

✅ Estrutura:
- index.html                 → Página principal com calendário FullCalendar
- manifest.json              → Manifesto PWA (para instalação no celular)
- service-worker.js          → Cache offline básico
- favicon.ico                → Ícone do site
- /css/style.css             → Estilo
- /js/script.js              → Lógica JavaScript
- /api/                      → PHP Backend para comunicação com o banco de dados MySQL no InfinityFree

✅ Requisitos para InfinityFree:
1. Crie um banco de dados MySQL no painel do InfinityFree.
2. Pegue as credenciais (host, usuário, senha, nome do banco).
3. Edite o arquivo: `/api/db_connect.php` com essas informações.
4. No phpMyAdmin, crie a tabela com o seguinte SQL:

```sql
CREATE TABLE eventos (
  id VARCHAR(50) PRIMARY KEY,
  nome VARCHAR(100),
  especialidade VARCHAR(100),
  data DATE,
  horario VARCHAR(50),
  preco VARCHAR(20),
  cor VARCHAR(20)
);
