import React, { memo } from 'react';
import Ticker from 'react-ticker';
import { useTranslation } from 'react-i18next';

import tickerVars from 'variables/ticker';

function MemoTicker(): JSX.Element {
  const { t } = useTranslation();

  const tickerPhrases: string[] = t('ticker', { returnObjects: true });

  return (
    <div>
      {tickerPhrases.map((el, index) => (
        <Ticker
          offset={(index + 1) * tickerVars.baseOffset}
          speed={tickerVars.speed}
          mode="await"
        >
          {(): JSX.Element => <p>{el}</p>}
        </Ticker>
      ))}
    </div>
  );
}

export default memo(MemoTicker);
