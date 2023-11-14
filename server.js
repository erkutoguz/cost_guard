import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
const API_KEY = process.env.GPT_API_KEY;

const openai = new OpenAI({
  apiKey: [API_KEY],
});

app.post("/api/communication", async (req, res) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: req.body.message }],
      model: "gpt-4-1106-preview",
    });
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: req.body.message }],
    //   model: "gpt-3.5-turbo",
    // });
    console.log(chatCompletion);
    res.send(chatCompletion.choices[0].message.content);
    // res.send(
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat lectus vitae arcu tempus mollis vel a sapien. Aenean pretium purus vel felis pellentesque rutrum. Vivamus ut auctor elit, eget gravida sapien. Nam vel varius enim. Aliquam vehicula, sem eu posuere scelerisque, urna nunc egestas nisl, et hendrerit leo odio quis mauris. Suspendisse volutpat augue ut finibus ornare. In et ex et lacus volutpat ultrices. Etiam id ante id odio feugiat elementum. Aliquam massa nunc, fringilla quis viverra vitae, accumsan non mauris. Phasellus vitae ante quam. Donec finibus volutpat lacus vitae sollicitudin. Mauris sed leo placerat, consequat leo a, facilisis enim."
    // );
  } catch (e) {
    res.send(e);
  }
});

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
