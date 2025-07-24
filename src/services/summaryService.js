const API_URL =
  "https://tc7zr80jy1.execute-api.eu-north-1.amazonaws.com/dev-2/emotions/summary";

export const fetchEmotionalSummary = async (userName, answers, signal) => {
  console.log("🟨 Payload to API:", { userName, answers });

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, answers }),
    signal,
  });

  const text = await res.text();
  console.log("🟩 Raw API response:", text);

  if (!res.ok) throw new Error(`API ${res.status}: ${text}`);

  const { summary } = JSON.parse(text);
  return summary;
};
