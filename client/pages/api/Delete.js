
export default async function handler(req, res) {
      
      const id  = req.body
      res = await  fetch(`http://localhost:5000/articles/${id}`,{
          method: "DELETE",
      })
      console.log(` Document with id:${id} delete`)
      return res
    }
   