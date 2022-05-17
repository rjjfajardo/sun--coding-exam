import nc from "next-connect";
import { createArticle } from "../../../../controller/article";

const handler = nc();

handler.post(createArticle);

export default handler;
