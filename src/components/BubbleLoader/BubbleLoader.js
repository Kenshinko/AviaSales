import { useSelector } from 'react-redux';
import { Rings } from 'react-loader-spinner';

import style from './BubbleLoader.module.scss';

export default function BubbleLoader() {
  const { isAllReceived, isError } = useSelector(({ tickets }) => tickets);

  const errorMessage = isError ? 'Ждем ответа от сервера...' : null;
  const receivingMessage = !isAllReceived && !isError ? 'Получаем билетики...' : null;
  const allReceivedMessage = isAllReceived && !isError ? 'Все билеты получены!' : null;

  const getRingCollor = () => {
    if (isError) return '#a50b32';
    if (!isAllReceived) return '#4fa94d';
    return '#2196f3';
  };

  return (
    <div className={`${style['header__bubbleloader']} bubbleloader`}>
      <p className={style['bubbleloader__text']}>
        {errorMessage}
        {receivingMessage}
        {allReceivedMessage}
      </p>
      <Rings
        wrapperClass={style['bubbleloader__ring']}
        height="80"
        width="80"
        color={getRingCollor()}
        radius="6"
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}
