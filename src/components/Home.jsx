import { useRequest } from "../hooks/useRequest";

export const Home = () => {
  const { info } = useRequest();

  return (
    <div>
      <h1>{info?.title}</h1>

      {info?.buttons.map((button, index) => (
        <button key={index} className={button?.className}>
          {button.text}
        </button>
      ))}
      <p>{info?.paragraph}</p>
    </div>
  );
};
