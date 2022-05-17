import { useState, useEffect } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

const editArticle = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const editPost = () => {
    axios({
      method: "put",
      url: `/api/article/${router.query.id}`,
      data: {
        article_title: title,
        article_content: content,
      },
    }).then(() => {
      alert("successfully updated");
      router.push("/");
    });
  };

  const getAllArticleById = () => {
    axios.get(`/api/article/${router.query.id}`).then((response) => {
      setTitle(response.data[0].article_title);
      setContent(response.data[0].article_content);
    });
  };

  useEffect(() => {
    getAllArticleById();
  }, [title, content]);

  return (
    <Box sx={{ p: 5, m: 5, display: "flex", flexDirection: "column" }}>
      <form onSubmit={editPost}>
        <Box sx={{ p: 5, m: 5, display: "flex", flexDirection: "column" }}>
          <label>Article Title</label>
          <input
            type="text"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box sx={{ p: 5, m: 5, display: "flex", flexDirection: "column" }}>
          <label>Article Content</label>
          <input
            type="textarea"
            defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Box>
        <Box sx={{ p: 5, m: 5, display: "flex", flexDirection: "column" }}>
          <Button type="submit" variant="contained">
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default editArticle;
