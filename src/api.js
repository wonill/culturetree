import express from "express";
const router = express.Router();
import request from "request";
import { parseString } from "xml2js";

const serviceKey = "1f64fa60bcc942848fc31a5f47dc6944";

router.get("/", (req, res) => {
  // let url = `http://kopis.or.kr/openApi/restful/boxoffice?service=${serviceKey}&ststype=day&date=20171218
  // &catecode=AAAA&area=11&srchseatscale=100`;
  let url = `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${serviceKey}&sort=popularity&rows=3&cpage=1`;
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
