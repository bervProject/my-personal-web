import { ref, onUnmounted } from 'vue';
import type { Ref } from 'vue';

export function useTypingEffect(
  phrases: string[],
  options?: {
    typingSpeed?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
  }
): { displayText: Ref<string> } {
  const typingSpeed = options?.typingSpeed ?? 80;
  const pauseDuration = options?.pauseDuration ?? 1800;
  const deletingSpeed = options?.deletingSpeed ?? 40;

  const displayText = ref('');

  // Guard against empty phrases array
  if (phrases.length === 0) {
    return { displayText };
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timerId: ReturnType<typeof setTimeout> | null = null;

  function tick(): void {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      // Typing forward
      charIndex += 1;
      displayText.value = currentPhrase.slice(0, charIndex);

      if (charIndex === currentPhrase.length) {
        // Reached end of phrase — pause before deleting
        isDeleting = true;
        timerId = setTimeout(tick, pauseDuration);
      } else {
        timerId = setTimeout(tick, typingSpeed);
      }
    } else {
      // Deleting
      charIndex -= 1;
      displayText.value = currentPhrase.slice(0, charIndex);

      if (charIndex === 0) {
        // Finished deleting — move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timerId = setTimeout(tick, typingSpeed);
      } else {
        timerId = setTimeout(tick, deletingSpeed);
      }
    }
  }

  // Start the loop
  timerId = setTimeout(tick, typingSpeed);

  onUnmounted(() => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  });

  return { displayText };
}
