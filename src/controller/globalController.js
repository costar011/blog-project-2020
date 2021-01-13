const homeController = (req, res) => {
  res.render("screens/home");
};

const contactController = (req, res) => {
  res.render("screens/contact");
};

const javascriptController = (req, res) => {
  res.render("screens/javascript");
};

export const globalController = {
  homeController,
  contactController,
  javascriptController,
};
