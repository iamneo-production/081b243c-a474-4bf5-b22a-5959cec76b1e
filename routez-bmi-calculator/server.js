const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults(noCors = false);

const db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  switch (req.method) {
    case "POST":
      req.body.createdAt = Date.now();
      break;
    case "PUT":
      req.body.updatedAt = Date.now();
      break;
  }
  next();
});

// login
server.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = db.get("users").value().find(el => el.email === email);
  if (user && user.password === password) {
    res.jsonp({ msg: "success", username: user.email });
    sessionStorage.setItem()
  } else {
    res.jsonp({ msg: "Login Failed" });
  }
});

// register
server.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  res.jsonp({ msg: "Not still implemented" });
});

// Calculate BMI
server.post("/api/calculate", async (req, res) => {
  const { weight, height } = req.body;
  const bmiValue = weight / ((height / 100) ^ 2);
  const categories = db.get("categories").value();
  let bmiCategory;
  if (bmiValue < categories[0].max) {
    bmiCategory = "Severe Thinness";
  } else if (bmiValue > categories[1].min && bmiValue < categories[1].max) {
    bmiCategory = "Moderate Thinness";
  } else if (bmiValue > categories[2].min && bmiValue < categories[2].max) {
    bmiCategory = "Mild Thinness";
  } else if (bmiValue > categories[3].min && bmiValue < categories[3].max) {
    bmiCategory = "Normal";
  } else if (bmiValue > categories[4].min && bmiValue < categories[4].max) {
    bmiCategory = "Overweight";
  } else if (bmiValue > categories[5].min && bmiValue < categories[5].max) {
    bmiCategory = "Obese Class I";
  } else if (bmiValue > categories[6].min && bmiValue < categories[6].max) {
    bmiCategory = "Obese Class II";
  } else if (bmiValue > categories[7].min) {
    bmiCategory = "Obese Class III";
  }

  res.jsonp({
    bmiValue: bmiValue,
    bmiCategory: bmiCategory,
  });
});

// Get User BMI
server.get("/api/bmi/:id", async (req, res) => {
  const { id } = req.params;
  const user = db.get("users").value().find(el => el.id === id);
  res.jsonp(user.bmi);
});

server.use("/api", router);
server.listen(8081, () => {
  console.log("JSON server is running");
});
