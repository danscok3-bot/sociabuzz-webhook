export default async function handler(req, res) {

  // 🔹 TERIMA GET (buat test Sociabuzz)
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "Webhook aktif (GET test OK)"
    });
  }

  // 🔹 TERIMA POST (donasi asli)
  if (req.method === "POST") {
    console.log("===== DONASI MASUK =====");
    console.log(req.body);
    console.log("========================");

    return res.status(200).json({
      success: true
    });
  }

  // 🔹 Method lain
  return res.status(405).json({
    error: "Method not allowed"
  });
}
