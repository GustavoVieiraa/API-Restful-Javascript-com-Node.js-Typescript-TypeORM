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
