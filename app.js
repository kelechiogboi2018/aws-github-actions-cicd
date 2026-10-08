const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>AWS DevOps CI/CD Project</h1>
    <h2>Deployment Successful 🚀</h2>
    <p>Deployed automatically using GitHub Actions, Docker, Amazon ECR and EC2.</p>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "aws-github-actions-cicd"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
});