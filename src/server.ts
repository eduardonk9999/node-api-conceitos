import express from 'express'

const app = express()

/**
 * Tipos de MÉTODOS
 * 
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alteração especifica
 * 
 */

app.get("/", (resquest, response) => {
  return response.json({
    mesage: "Olá o PAI TA ON"
  })
})

app.post("/", (resquest, response) => {

})

app.listen(3333, () => {
  console.log('Serer on PAI')
})