export async function copyToClipboardFallback(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn("Clipboard API failed, trying fallback.", err);
    }
  }

  // Fallback using textarea
  const activeElement = document.activeElement as HTMLElement | null;
  const textArea = document.createElement("textarea");
  
  try {
    textArea.value = text;
    
    // Make the textarea invisible
    textArea.style.position = "absolute";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand("copy");
    
    return successful;
  } catch (err) {
    console.error("Fallback clipboard also failed.", err);
    return false;
  } finally {
    if (document.body.contains(textArea)) {
      document.body.removeChild(textArea);
    }
    if (activeElement && typeof activeElement.focus === "function") {
      activeElement.focus();
    }
  }
}
