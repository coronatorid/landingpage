import axios from 'axios';

async function handleRequest(req, res) {
  try {
    const API_CLIENT_ID = process.env.API_CLIENT_ID;
    const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // mocking dulu
    const response = await axios.get(url);
    const {data} = response;

    res.statusCode = 200;
    return res.json({
      message: 'otp send to your phone',
      postData: req.body,
      otherData: data,
    });
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    return res;
  }
}

export default async function handler(req, res) {
  if(req.method == 'POST') {
    return handleRequest(req, res);
  }

  res.statusCode = 200;
  return res.json('ok');
}
