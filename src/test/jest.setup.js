const application = require("../app");

beforeAll(() => {
  application.listen(4000, () => {
    console.log("Test server running on http://localhost:4000");
  });
});
