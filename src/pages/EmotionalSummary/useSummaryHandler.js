import { useEffect, useState } from "react";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localStorage";
import { fetchEmotionalSummary } from "../../services/summaryService";

export const useSummaryHandler = () => {
  const [summaryText, setSummaryText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userName = getLocalStorageItem("username") || "";
  const storedAnswers = JSON.parse(
    getLocalStorageItem("emotionalAnswers") || "[]"
  );

  useEffect(() => {
    const cached = getLocalStorageItem("emotionalSummary");
    if (cached) {
      setSummaryText(cached);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const loadSummary = async () => {
      try {
        const summary = await fetchEmotionalSummary(
          userName,
          storedAnswers,
          controller.signal
        );
        setSummaryText(summary);
        setLocalStorageItem("emotionalSummary", summary);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            "No pudimos generar tu resumen en este momento. Inténtalo más tarde."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    loadSummary();
    return () => controller.abort();
  }, []);

  return { summaryText, loading, error };
};
