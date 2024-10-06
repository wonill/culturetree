import express from "express";
const router = express.Router();
import request from "request";
import { parseString } from "xml2js";

const serviceKey = "1f64fa60bcc942848fc31a5f47dc6944";

router.get("/", (req, res) => {
  let url = `http://kopis.or.kr/openApi/restful/pblprfr?service=${serviceKey}&stdate=20240101&eddate=20241231&rows=6&cpage=1`;
  request(
    {
      url: url,
      method: "GET",
    },
    (error, response, body) => {
      if (error) {
        return res.status(500).send("Error fetching data");
      }

      if (response.statusCode !== 200) {
        console.error("Error :", response.statusCode);
        return res.status(response.statusCode).send("Error fetching data");
      }

      parseString(body, { explicitArray: false }, (err, result) => {
        if (err) {
          return res.status(500).send("Error parsing XML");
        }
        console.log(result);
        res.send(result);
      });
    }
  );
});

router.get("/ticketOpen", (req, res) => {
  let url = `http://kopis.or.kr/openApi/restful/pblprfr?service=${serviceKey}&stdate=20240915&eddate=20251231&cpage=1&rows=10`;
  request(
    {
      url: url,
      method: "GET",
    },
    (error, response, body) => {
      if (error) {
        return res.status(500).send("Error fetching data");
      }

      if (response.statusCode !== 200) {
        console.error("Error :", response.statusCode);
        return res.status(response.statusCode).send("Error fetching data");
      }

      parseString(body, { explicitArray: false }, (err, result) => {
        if (err) {
          return res.status(500).send("Error parsing XML");
        }
        console.log(result);
        res.send(result);
      });
    }
  );
});

router.get("/eventsByGenre", (req, res) => {
  const { code, num } = req.query;
  console.log(code);
  let url = `http://kopis.or.kr/openApi/restful/pblprfr?service=${serviceKey}&stdate=20240915&eddate=20251231&cpage=1&rows=${num}&shcate=${code}`;

  request(
    {
      url: url,
      method: "GET",
    },
    (error, response, body) => {
      if (error) {
        return res.status(500).send("Error fetching data");
      }

      if (response.statusCode !== 200) {
        console.error("Error :", response.statusCode);
        return res.status(response.statusCode).send("Error fetching data");
      }

      parseString(body, { explicitArray: false }, (err, result) => {
        if (err) {
          return res.status(500).send("Error parsing XML");
        }
        console.log(result);
        res.send(result);
      });
    }
  );
});

export default router;
