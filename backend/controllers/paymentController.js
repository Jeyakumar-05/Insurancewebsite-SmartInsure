import Payment from "../models/paymentModel.js";

export const makePayment = async (req, res) => {
  try {
    const {
      bookingId,
      typeOfBooking,
      username,
      amount,
      cardNumber,
      expiryDate,
      transactionId,
    } = req.body;

    if (!bookingId || !amount || !typeOfBooking || !username || !cardNumber || !expiryDate || !transactionId) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const maskedCard = '**** **** **** ' + cardNumber.slice(-4);

    const payment = new Payment({
      bookingId,
      typeOfBooking,
      username,
      amount,
      cardNumber: maskedCard,
      expiryDate,
      transactionId,
    });

    await payment.save();
    res.status(201).json({ message: 'Payment recorded successfully' });
  } catch (err) {
    console.error('Payment Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
