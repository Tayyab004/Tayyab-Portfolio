exports.getContact = (req, res) => {
  res.json({
    linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN",
    github: "https://github.com/YOUR_GITHUB",
    email: "youremail@example.com",
    phone: "(123) 456-7890",
  });
};
