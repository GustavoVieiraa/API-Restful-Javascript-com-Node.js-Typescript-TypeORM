// Swagger Create
/**
 * @swagger
 * /api/v1/produtos/create:
 *   post:
 *     summary: Realiza a criação de produtos no sistema.
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: O nome do produto.
 *                 example: "Monitor Gamer LG UltraGear 27 IPS Full HD, 180Hz, 1ms, DisplayPort e HDMI, G-Sync, FreeSync, HDR10, sRGB 99%, Preto - 27GS60F-B"
 *               price:
 *                 type: number
 *                 description: O preço do produto.
 *                 example: 1099
 *               quantity:
 *                 type: number
 *                 description: A quantidade disponível do produto.
 *                 example: 52
 *     responses:
 *       201:
 *         description: Retorna um JSON do Produto criado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do produto criado.
 *                   example: "d3559a45-a61f-4ea2-95e9-ece1cd6151ab"
 *                 name:
 *                   type: string
 *                   description: Nome do produto.
 *                   example: "Monitor Gamer LG UltraGear 27 IPS Full HD, 180Hz, 1ms, DisplayPort e HDMI, G-Sync, FreeSync, HDR10, sRGB 99%, Preto - 27GS60F-B"
 *                 price:
 *                   type: number
 *                   description: Preço do produto.
 *                   example: 1099
 *                 quantity:
 *                   type: number
 *                   description: Quantidade disponível do produto.
 *                   example: 52
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação do produto.
 *                   example: "2024-10-16T05:31:40.887Z"
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: Data da última atualização do produto.
 *                   example: "2024-10-16T05:31:40.887Z"
 *       400:
 *         description: "Erro de validação nos dados fornecidos"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro detalhada.
 *                   example: "Nome do produto é obrigatório."
 *       500:
 *         description: "Erro interno do servidor"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: "Erro ao criar o produto no banco de dados."
 */

// Swagger Get Products
/**
 * @swagger
 * /api/v1/produtos:
 *   get:
 *     summary: Retorna uma lista de produtos cadastrados no sistema.
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Retorna um array com os dados dos produtos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do produto.
 *                     example: "96b29bd5-62c6-4236-b4ea-f99e34819dbf"
 *                   name:
 *                     type: string
 *                     description: Nome do produto.
 *                     example: "Teclado Gamer Redragon Lakshmi, Switch Brown, Layout 60%, ABNT2 , Preto - K606-OG&GY&BK (PT-BROWN)"
 *                   price:
 *                     type: string
 *                     description: Preço do produto.
 *                     example: "170.00"
 *                   quantity:
 *                     type: number
 *                     description: Quantidade disponível do produto.
 *                     example: 23
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: Data de criação do produto.
 *                     example: "2024-10-16T05:27:37.126Z"
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *                     description: Data da última atualização do produto.
 *                     example: "2024-10-16T05:27:37.126Z"
 *       500:
 *         description: "Erro interno do servidor"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: "Erro ao buscar os produtos."
 */

// Swagger Get Product by ID
/**
 * @swagger
 * /api/v1/produtos/{id}:
 *   get:
 *     summary: Retorna os detalhes de um produto específico pelo seu ID.
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O ID do produto.
 *         example: "830abdb2-d407-49d4-ac3c-15131bac1c55"
 *     responses:
 *       200:
 *         description: Retorna os detalhes do produto encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do produto.
 *                   example: "830abdb2-d407-49d4-ac3c-15131bac1c55"
 *                 name:
 *                   type: string
 *                   description: Nome do produto.
 *                   example: "Console PlayStation 5 Slim, SSD 1TB, Edição Digital, Branco + 2 Jogos Digitais"
 *                 price:
 *                   type: string
 *                   description: Preço do produto.
 *                   example: "3530.90"
 *                 quantity:
 *                   type: number
 *                   description: Quantidade disponível do produto.
 *                   example: 10
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação do produto.
 *                   example: "2024-10-16T06:06:51.121Z"
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: Data da última atualização do produto.
 *                   example: "2024-10-16T06:06:51.121Z"
 *       404:
 *         description: "Produto não encontrado"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: "Produto não encontrado."
 *       500:
 *         description: "Erro interno do servidor"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: "Erro ao buscar o produto."
 */

// Swagger Update Product
/**
 * @swagger
 * /api/v1/produtos/{id}:
 *   patch:
 *     summary: Atualiza os dados de um produto existente no sistema.
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O ID do produto a ser atualizado.
 *         example: "830abdb2-d407-49d4-ac3c-15131bac1c55"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: O nome atualizado do produto.
 *                 example: "Console PlayStation 5 Slim, SSD 1TB, Edição Digital, Branco + 2 Jogos Digitais"
 *               price:
 *                 type: number
 *                 description: O preço atualizado do produto.
 *                 example: 3530.9
 *               quantity:
 *                 type: number
 *                 description: A quantidade atualizada do produto.
 *                 example: 15
 *     responses:
 *       200:
 *         description: Retorna os detalhes do produto atualizado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do produto.
 *                   example: "830abdb2-d407-49d4-ac3c-15131bac1c55"
 *                 name:
 *                   type: string
 *                   description: Nome do produto atualizado.
 *                   example: "Console PlayStation 5 Slim, SSD 1TB, Edição Digital, Branco + 2 Jogos Digitais"
 *                 price:
 *                   type: number
 *                   description: Preço atualizado do produto.
 *                   example: 3530.9
 *                 quantity:
 *                   type: number
 *                   description: Quantidade atualizada do produto.
 *                   example: 15
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação do produto.
 *                   example: "2024-10-16T06:06:51.121Z"
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: Data da última atualização do produto.
 *                   example: "2024-10-16T15:49:25.421Z"
 *       400:
 *         description: "Erro de validação nos dados fornecidos"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro detalhada.
 *                   example: "Preço do produto deve ser um valor numérico."
 *       404:
 *         description: "Produto não encontrado"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: "Produto não encontrado."
 *       500:
 *         description: "Erro interno do servidor"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: "Erro ao atualizar o produto."
 */

// Swagger Delete Product
/**
 * @swagger
 * /api/v1/produtos/{id}:
 *   delete:
 *     summary: Deleta um produto do sistema.
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O ID do produto a ser deletado.
 *         example: "830abdb2-d407-49d4-ac3c-15131bac1c55"
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: []
 *       404:
 *         description: "Produto não encontrado"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: "Produto não encontrado."
 *       500:
 *         description: "Erro interno do servidor"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: "Erro ao deletar o produto."
 */
