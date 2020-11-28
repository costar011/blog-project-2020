const homeController = (req, res) => {
  res.render("screens/home");
};

const contactController = (req, res) => {
  res.render("screens/contact");
};

export const globalController = {
  homeController,
  contactController,
};
