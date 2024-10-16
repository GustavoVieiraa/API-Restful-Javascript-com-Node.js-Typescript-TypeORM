// Swagger Create User
/**
 * @swagger
 * /api/v1/usuarios/create:
 *   post:
 *     summary: Realiza a criação de usuários no sistema.
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: O nome do usuário.
 *                 example: "Gustavo Vieira"
 *               email:
 *                 type: string
 *                 description: O e-mail do usuário.
 *                 example: "gustavovieira292016@gmail.com"
 *               password:
 *                 type: string
 *                 description: A senha do usuário.
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Retorna um JSON do Usuário criado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do usuário criado.
 *                   example: "26bc0029-9260-4bbe-bd68-9ea55bd5dce3"
 *                 name:
 *                   type: string
 *                   description: Nome do usuário.
 *                   example: "Gustavo Vieira"
 *                 email:
 *                   type: string
 *                   description: E-mail do usuário.
 *                   example: "gustavovieira292016@gmail.com"
 *                 password:
 *                   type: string
 *                   description: Senha do usuário (geralmente omitida em respostas, por segurança).
 *                   example: "123456"
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação do usuário.
 *                   example: "2024-10-16T15:22:43.334Z"
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: Data da última atualização do usuário.
 *                   example: "2024-10-16T15:22:43.334Z"
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
 *                   example: "O e-mail fornecido já está em uso."
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
 *                   example: "Erro ao criar o usuário no banco de dados."
 */

// Swagger Get Users
/**
 * @swagger
 * /api/v1/usuarios:
 *   get:
 *     summary: Retorna uma lista de usuários cadastrados no sistema.
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Retorna um array com os dados dos usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do usuário.
 *                     example: "5a5a0a50-bc41-4717-8ce1-93974350bada"
 *                   name:
 *                     type: string
 *                     description: Nome do usuário.
 *                     example: "Gustavo"
 *                   email:
 *                     type: string
 *                     description: E-mail do usuário.
 *                     example: "gustavieiradev@gmail.com"
 *                   password:
 *                     type: string
 *                     description: Senha do usuário.
 *                     example: "123456"
 *                   avatar:
 *                     type: string
 *                     description: Avatar do usuário (pode ser nulo).
 *                     example: null
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: Data de criação do usuário.
 *                     example: "2024-10-16T15:12:03.075Z"
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *                     description: Data da última atualização do usuário.
 *                     example: "2024-10-16T15:12:03.075Z"
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
 *                   example: "Erro ao buscar os usuários."
 */
