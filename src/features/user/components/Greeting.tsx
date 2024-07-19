"use client";

import { useTranslation } from "@/i18n/client";
import { FunctionComponent } from "react";

type GreetingProps = {};

const Greeting: FunctionComponent<GreetingProps> = () => {
  const { t } = useTranslation('common')

  const handleButtonClick = () => {
      alert(t('hello', { name: 'Lazintellone' }))
  }
    
  return (
    <div onClick={handleButtonClick}>
      <button>Click Me</button>
    </div>
  );
};

export default Greeting