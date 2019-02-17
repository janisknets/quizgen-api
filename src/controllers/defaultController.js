export default (req, res) => {
  res.status(404).send({message: 'resource doesn\'t exist'})
}