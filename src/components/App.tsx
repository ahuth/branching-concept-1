import clsx from 'clsx';
import {useStore} from '../store';

export default function App() {
  const actions = useStore((state) => state.actions);
  const current = useStore((state) => state.current);
  const prev = useStore((state) => state.prev);

  return (
    <div className="mx-auto max-w-prose p-2">
      {prev.concat(current).map((item) => {
        return (
          <section className="pt-4" key={item.id}>
            <h3>{item.text}</h3>
            <ol className="list-inside list-decimal pt-4">
              {item.links.map((link) => {
                const isCurrent = item === current;
                return (
                  <li key={link.text}>
                    <button
                      disabled={!isCurrent}
                      className={clsx(
                        // Base
                        'cursor-pointer text-blue-600 underline hover:text-blue-800',
                        // Disabled
                        'disabled:cursor-auto disabled:text-gray-500',
                        // Text alignment
                        'break-words text-left',
                        // Not selected
                        !isCurrent && !link.selected && 'line-through',
                      )}
                      onClick={() => actions.goto(link)}
                    >
                      {link.text}
                    </button>
                  </li>
                );
              })}
              {item.links.length === 0 && (
                <li>The end. Reload to start over ☝️</li>
              )}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
