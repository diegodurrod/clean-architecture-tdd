const handler = ({ helloUseCase }) => ({
  get: (req, res) => {
    return helloUseCase.getGreeting()
      .then(greet => res.status(200).send({ data: greet }))
  }
})

module.exports = handler
