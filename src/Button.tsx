import React, { useState } from "react";

type ButtonProps = {
  label: string;
  onclick: () => void;
  disabled?: boolean | null;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onclick,
  disabled = false
}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(!!disabled);

  const handleClick = async () => {
    if (disabled === null) {
      setIsDisabled(true);

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 5000);
      });

      onclick();

      setIsDisabled(false);
    } else {
      onclick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};