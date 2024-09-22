const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AaF4wgY7DAvrs2cvf4g3woncftQC6J-2QF7NS7ZzsdX0NhmzZlWO80gsQ2RU8q44AUnt8DjugofxNgtE",
  client_secret: "EH8ttgxGAN5MLxuQ531LGjOi-Fc8OqwkwjNfj0T43tJDkzJ6GwDxHbaNCmxSqiCoBX868eVIPi_GhdIq",
});

module.exports = paypal;
