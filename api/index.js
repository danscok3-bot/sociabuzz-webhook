export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  try {
    const data = req.body || {};
    const donation = data.donation || {};

    // Nama donatur (fallback aman)
    const donorName =
      donation.name ||
      donation.username ||
      donation.sender_name ||
      "Anonymous";

    // Jumlah donasi
    const amount =
      donation.amount ||
      donation.amount_raw ||
      donation.price ||
      0;

    // Pesan donasi (opsional)
    const message = donation.message || "";

    console.log("=== DONASI SOCIABUZZ ===");
    console.log("Nama   :", donorName);
    console.log("Jumlah :", amount);
    console.log("Pesan  :", message);

    return res.status(200).json({
      ok: true,
      donor: donorName,
      amount: amount
    });

  } catch (err) {
    console.error("WEBHOOK ERROR:", err);
    return res.status(200).json({ ok: true });
  }
}
