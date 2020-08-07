var express = require("express");
var router = express.Router();

const PaymentController = require("../controllers/payment-controller");

router.get("/new", PaymentController.getNewPayment);
router.post("/", PaymentController.CreatePayment);

module.exports = router;
