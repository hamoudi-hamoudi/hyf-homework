const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/search", (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      res.status(200).json(documents);
    } else if (!isNaN(+query)) {
      const result = documents.filter((e) => e.id === +query);
      result.length === 0
        ? res.status(200).json(documents)
        : res.status(200).json(result);
    } else {
      const result = documents.filter((e) =>
        Object.values(e).some(
          (v) =>
            typeof v === "string" &&
            v.toLowerCase().includes(query.toLowerCase())
        )
      );
      result.length === 0
        ? res.status(200).json(documents)
        : res.status(200).json(result);
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
app.post("/search", (req, res) => {
  try {
    const query = req.query.q;
    const fields = req.body.fields;
    if (!query && !fields) {
      res.status(200).json(documents);
    } else if (!query && fields) {
      const result = document.filter((e) =>
        Object.keys(fields).every((k) => fields[k] === e[k])
      );
      result.length === 0
        ? res.status(404).json("no result with this id")
        : res.status(200).json(result);
    } else if (query && !fields) {
      if (!isNaN(+query)) {
        const result = documents.filter((e) => e.id === +query);
        result.length === 0
          ? res.status(200).json("no result found")
          : res.status(200).json(result);
      }
    } else if (query && fields) {
      res.status(400).json("Bad request");
    } else {
      const result = documents.filter((e) =>
        Object.values(e).some(
          (v) =>
            typeof v === "string" &&
            v.toLowerCase().includes(query.toLowerCase())
        )
      );
      result.length > 0
        ? res.status(200).json("no result found")
        : res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
