import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Vendas',
      version: '1.0.0',
      description: 'API para um sistema vendas.'
    },
    servers: [
      {
        url: 'http://localhost:3333'
      }
    ]
  },
  apis: ['./src/modules/products/documentation/*.ts']
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec