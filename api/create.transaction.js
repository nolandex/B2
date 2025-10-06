import midtransClient from "midtrans-client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id, price, quantity, productName, customerDetails } = req.body;

    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.VITE_MIDTRANS_CLIENT_KEY,
    });

    const parameter = {
      transaction_details: {
        order_id: id,
        gross_amount: price * quantity,
      },
      item_details: [
        {
          id,
          price,
          quantity,
          name: productName,
        },
      ],
      customer_details: customerDetails,
      credit_card: { secure: true },
    };

    const transaction = await snap.createTransaction(parameter);

    res.status(200).json({
      token: transaction.token,
      redirect_url: transaction.redirect_url,
    });
  } catch (error) {
    console.error("Midtrans error:", error);
    res.status(500).json({ error: error.message });
  }
}
