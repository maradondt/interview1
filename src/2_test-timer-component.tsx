import * as React from 'react';
/**
 * 1. Реализовать таймер. Должен отображать текущее значение в секундах.
 * Кнопка Toggle - останавливает и запускает отсчёт.
 * Кнопка Reset - сбрасывает значение.
 * 2. Избавиться от лишних ререндеров InnerComponent
 */
const Timer = () => {
  return (
    <div className="stack column">
      <h2>seconds: 0</h2>
      <div className="stack">
        <button className="f-width">Toggle</button>
        <button className="f-width">Reset</button>
      </div>
      <InnerComponent callback={() => console.log('Inner click')} />
    </div>
  );
};
type Props = {
  callback: () => void;
};

const InnerComponent = ({ callback }: Props) => {
  console.count('RenderInnerComponent');
  return <button onClick={callback}>InnerComponent</button>;
};

export default Timer;
