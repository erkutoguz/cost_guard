import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

function GPT({ setAnswer, setLoading }) {
  const [message, setMessage] = useState(null);

  async function getAnswers() {
    setAnswer(null);
    setLoading(true);
    const result = await axios.post("http://localhost:8000/api/communication", {
      message,
    });
    setAnswer(result.data);
    setLoading(false);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <p
        style={{
          fontSize: "30px",
          marginTop: 0,
          fontWeight: 300,
        }}
      >
        <i> Öğrenmek istediğiniz konuyu yazınız</i>
      </p>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{
          width: "800px",
          background: "#fff",
          borderRadius: "10px",
        }}
        onChange={handleChange}
      />
      <br />
      <Button
        variant="contained"
        sx={{
          marginTop: "1rem",
        }}
        onClick={getAnswers}
      >
        Ara
      </Button>
    </div>
  );
}

export default GPT;
