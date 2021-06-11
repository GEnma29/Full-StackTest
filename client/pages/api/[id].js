
export default async function  handler(req, res) {
  const { id } = req.query
  res.status(200).json({ id: {id} })
  /*
  const DeleteArticle = await fetch(`http://localhost:5000/articles/${id}`,{
    method: 'DELETE',
    body: id,
  })*/
 /* const res = await DeleteArticle.json()
  return res;*/
}
 