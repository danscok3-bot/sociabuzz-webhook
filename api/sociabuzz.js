export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("===== DONASI MASUK =====");
  console.log(req.body);
  console.log("========================");

  res.status(200).json({ success: true });
}
