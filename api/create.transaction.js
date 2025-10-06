// api/create-transaction.js
import Midtrans from "midtrans-client";

// Inisialisasi Snap di luar handler biar efisien
let snap = null;

if (process.env.MIDTRANS_SERVER_KEY && process.env.MIDTRANS_CLIENT_KEY) {
  snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });
}

// Vercel API handler
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id, productName, price, quantity, customerDetails } = req.body;

    console.log("Received data:", {
      id,
      productName,
      price,
      quantity,
      customerDetails,
    });

    // Validasi data
    if (!id || !productName || !price || !quantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Buat parameter transaksi
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
      credit_card: {
        secure: true,
      },
    };

    // Tambahkan customer_details kalau ada
    if (
      customerDetails?.firstName?.trim() ||
      customerDetails?.email?.trim() ||
      customerDetails?.phone?.trim()
    ) {
      parameter.customer_details = {};
      if (customerDetails.firstName?.trim()) {
        parameter.customer_details.first_name = customerDetails.firstName.trim();
      }
      if (customerDetails.email?.trim()) {
        parameter.customer_details.email = customerDetails.email.trim();
      }
      if (customerDetails.phone?.trim()) {
        parameter.customer_details.phone = customerDetails.phone.trim();
      }
    }

    console.log("Midtrans parameter:", parameter);

    if (!snap) {
      throw new Error("Midtrans Snap not initialized");
    }

    const token = await snap.createTransactionToken(parameter);

    return res.status(200).json({
      token,
      order_id: id,
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
      }
