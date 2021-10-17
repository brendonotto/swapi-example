const axios = require("axios");

const asyncGet = async (id) => {
  try {
    console.log("About to make request");
    let res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log("Request completed");
    return res;
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      data: {},
    };
  }
};

async function handler(req, res) {
  const {
    query: { id },
  } = req;

  console.log("Query", id);

  const resp = await asyncGet(id);

  return res.status(resp.status).json(resp.data);
}

export default handler;
