import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button/Button';

// NOTE: component for testing
export const BugButton: FC = () => {
  const [isError, setIsError] = useState(false);

  const { t } = useTranslation();

  const throwBug = () => {
    setIsError(true);
  };

  useEffect(() => {
    if (isError) {
      throw new Error(prompt(t('bugButton.errorMessage')));
    }
  }, [isError]);

  return <Button onClick={throwBug}>{t('bugButton.bug')}</Button>;
};
