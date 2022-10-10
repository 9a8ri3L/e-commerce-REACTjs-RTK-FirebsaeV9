import { useEffect } from "react";

/**
 * UseTitle is a custom hook that updates the document title whenever the title prop changes.
 * @param title - The title to be set.
 */
export default function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
