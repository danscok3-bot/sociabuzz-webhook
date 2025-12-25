let donations = [];

export default async function handler(req, res) {
  // POST dari Sociabuzz
  if (req.method === "POST") {
    const payload = req.body || {};
    const donation = payload.donation || {};

    const data = {
      id: Date.now(),
      nama: donation.name || "Anonymous",
      amount: donation.amount || 0,
      message: donation.message || "",
      timestamp: Date.now()
    };

    donations.push(data);

    if (donations.length > 20) donations.shift();

    console.log("DONASI MASUK:", data);

    return res.status(200).json({ ok: true });
  }

  // GET untuk Roblox
  if (req.method === "GET") {
    const result = [...donations];
    donations = [];

    return res.status(200).json({
      success: true,
      donations: result
    });
  }

  return res.status(405).json({ ok: false });
}
