import nc from "next-connect";
import {
  deleteArticle,
  getAllArticleById,
} from "../../../../controller/article";

const handler = nc();

handler.delete(deleteArticle);
handler.get(getAllArticleById);

export default handler;
