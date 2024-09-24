import {useStore} from '../store';

export default function App() {
  const actions = useStore((state) => state.actions);
  const stack = useStore((state) => state.stack);

  return (
    <div className="mx-auto max-w-prose p-2">
      {stack.map((item, i) => {
        const isLastItem = i === stack.length - 1;
        return (
          <div className="pt-4" key={item.id}>
            <p>{item.text}</p>
            <ol className="list-inside list-decimal pt-4">
              {item.links.map((link) => {
                return (
                  <li key={link.text}>
                    <button
                      disabled={!isLastItem}
                      className="cursor-pointer text-blue-600 underline hover:text-blue-800 disabled:cursor-auto disabled:text-gray-400 disabled:no-underline"
                      onClick={() => actions.add(link.dest)}
                    >
                      {link.text}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
