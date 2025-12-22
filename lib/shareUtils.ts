export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand("copy");
      textArea.remove();
      return result;
    }
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    return false;
  }
}

export async function downloadElementAsImage(
  element: HTMLElement,
  filename: string
) {
  const html2canvas = (await import("html2canvas")).default;
  const canvas = await html2canvas(element);
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL();
  link.click();
}
