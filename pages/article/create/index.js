import { useState, useEffect } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

const craateArticle = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = () => {
    axios({
      method: "post",
      url: "/api/article/create",
      data: {
        article_title: title,
        article_content: content,
      },
    }).then(() => {
      alert("successfully created");
      router.push("/");
    });
  };

  return (
    <Box sx={{ p: 5, m: 5, display: "flex", flexDirection: "column" }}>
      <form onSubmit={createPost}>
        <Box sx={{ p: 5, m: 5, display: "flex", flexDirection: "column" }}>
          <label>Article Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box sx={{ p: 5, m: 5, display: "flex", flexDirection: "column" }}>
          <label>Article Content</label>
          <input
            type="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Box>
        <Box sx={{ p: 5, m: 5, display: "flex", flexDirection: "column" }}>
          <Button type="submit" variant="contained">
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default craateArticle;
