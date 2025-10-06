import Midtrans from "midtrans-client";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  try {
    const body = await req.json();

    const snap = new Midtrans.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.VITE_MIDTRANS_CLIENT_KEY,
    });

    const parameter = {
      transaction_details: {
        order_id: body.id,
        gross_amount: body.price * body.quantity,
      },
      item_details: [
        {
          id: body.id,
          price: body.price,
          quantity: body.quantity,
          name: body.productName,
        },
      ],
      customer_details: body.customerDetails,
      credit_card: {
        secure: true,
      },
    };

    const token = await snap.createTransactionToken(parameter);

    return new Response(
      JSON.stringify({
        token,
        order_id: body.id,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Midtrans error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
