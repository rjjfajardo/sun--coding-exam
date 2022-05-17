import nc from "next-connect";
import { getAllArticle } from "../../../controller/article";

const handler = nc();

handler.get(getAllArticle);

export default handler;
