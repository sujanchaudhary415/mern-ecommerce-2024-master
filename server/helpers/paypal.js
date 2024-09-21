const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcEKlVwNnI1-zq-CIWcfL3h2dxGtIqeLX5fpUalnPfHK811BngPtPOXv-fFOYHNV96qyxjKSTl4APzUZ",
  client_secret: "EOeGOk46PBRV_NNjqbe-t2hSvqEnRjDvhcjIHrwlVTx9rIgh9zhaszgDph0VnBhVnPBeJoXGWqc_iJqG",
});

module.exports = paypal;
