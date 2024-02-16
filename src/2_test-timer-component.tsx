import * as React from 'react';
/**
 * Реализовать таймер. Должен отображать текущее значение в секундах.
 * Кнопка Toggle - останавливает и запускает отсчёт.
 * Кнопка Reset - сбрасывает значение.
 */
const Timer = () => {
  return (
    <div>
      <h2>seconds: 0</h2>
      <button>Toggle</button>
      <button>Reset</button>
    </div>
  );
};

export default Timer;
