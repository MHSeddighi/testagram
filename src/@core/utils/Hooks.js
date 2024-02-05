export function useEffect(callback) {
  if (document) {
    document.addEventListener("load", callback);
  }
}
