import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 2000,
  headers: {
    'content-type': 'application/json'
  }
});

async function handleRequest(req, res) {
  try {
    const {
      phone
    } = req.body;

    const API_CLIENT_ID = process.env.API_CLIENT_ID;
    const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;
    const URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await http.post(`${URL}/administration/otp-requests`, {
      client_uid: API_CLIENT_ID,
      API_CLIENT_SECRET: API_CLIENT_SECRET,
      phone_number: phone
    });

    const {
      otp_sent_time
    } = response.data;

    res.statusCode = 200;
    return res.json({
      message: 'otp send to your phone',
      data: {
        sent_time: otp_sent_time
      }
    });
  } catch (error) {
    console.log(error);
    res.statusCode = error.response.status;
    return res.json({error});
  }
}

export default async function handler(req, res) {
  if(req.method == 'POST') {
    return handleRequest(req, res);
  }

  res.statusCode = 200;
  return res.json('ok');
}
