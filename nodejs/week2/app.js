const express = require("express");
const app = express();
const port = 3000;
const documents = require("./documents");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .route("/search")
  .get((req, res) => {
    try {
      const query = req.query.q;
      if (query) {
        const result = documents.filter((e) =>
          Object.values(e).some(
            (v) =>
              typeof v === "string" &&
              v.toLowerCase().includes(query.toLowerCase())
          )
        );
        if (result.length > 0) res.status(200).json(result);
      } else {
        res.status(200).json(documents);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .post((req, res) => {
    const query = req.query.q;
    const body = req.body.fields;
    try {
      if (body && query) {
        res
          .status(400)
          .json(
            "Both 'q' query parameter and 'fields' in the request body cannot be provided together."
          );
      } else if (body) {
        const fields = JSON.parse(body);
        const result = documents.filter((e) =>
          Object.entries(fields).every(([key, value]) => e[key] === value)
        );
        result.length === 0
          ? res.status(404).json("No results with this information.")
          : res.status(200).json(result);
      } else if (query) {
        res.redirect("/search?q=" + query);
      } else {
        res.status(200).json(documents);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

app.get("/documents/:id", (req, res) => {
  try {
    const id = req.params.id;
    const result = documents.filter((e) => e.id === +id);
    result.length === 0
      ? res.status(404).json("no result with this id")
      : res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
