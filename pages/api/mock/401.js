export default (req, res) => {
  res.statusCode = 401;
  return res.json('unauthenticated');
}
