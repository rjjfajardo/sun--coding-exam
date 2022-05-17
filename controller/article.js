import { executeQuery } from "../config/db";

const getAllArticle = async (req, res) => {
  try {
    const data = await executeQuery("select * from Article", []);
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(404).send();
  }
};

const createArticle = async (req, res) => {
  const { article_content, article_title } = req.body;
  try {
    const data = await executeQuery(
      "insert into Article (article_title, article_content) VALUES(?,?)",
      [article_title, article_content]
    );
    console.log("created");
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(404).send();
  }
};

const deleteArticle = async (req, res) => {
  try {
    const data = await executeQuery("delete from Article WHERE article_id=?", [
      req.query.id,
    ]);
    console.log("deleted");
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(404).send();
  }
};

const getAllArticleById = async (req, res) => {
  try {
    const data = await executeQuery(
      "select * from Article WHERE article_id=?",
      [req.query.id]
    );
    console.log("fetch");
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.status(404).send();
  }
};

export { getAllArticle, createArticle, deleteArticle, getAllArticleById };
