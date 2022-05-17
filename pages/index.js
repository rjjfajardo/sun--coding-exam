import Head from "next/head";
import { Box, Typography, Button, Paper } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { format } from "date-fns";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const getAllArticles = () => {
    axios.get("/api/article").then((response) => {
      setData(response.data);
    });
  };

  const deleteArticle = (id) => {
    axios({
      method: "delete",
      url: `/api/article/${id}`,
    }).then(() => {
      alert("deleted succesfully");
      location.reload();
    });
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  console.log(data);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Box sx={{ m: 2, p: 3 }}>
          <Link href={`/article/create`} passHref>
            <Button variant="contained">Create New Article</Button>
          </Link>
        </Box>
        <Box>
          {data.map((item) => (
            <Paper
              sx={{ display: "flex", flexDirection: "column", mb: 3 }}
              key={item.article_id}
            >
              <Typography variant="h5">{item.article_title}</Typography>
              <Typography variant="body1">{item.article_content}</Typography>
              <Typography variant="caption">{item.createdAt}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => deleteArticle(item.article_id)}
                >
                  Delete
                </Button>{" "}
                &nbsp;
                <Link href={`/article/${item.article_id}`} passHref>
                  <Button variant="contained">Edit</Button>
                </Link>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </div>
  );
}
