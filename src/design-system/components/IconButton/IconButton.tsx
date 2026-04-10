import clsx from 'clsx';
import styles from './IconButton.module.css';

type IconButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  ariaExpanded?: boolean;
  ariaControls?: string;
};

export default function IconButton({
  children,
  ariaLabel,
  className,
  type = 'button',
  onClick,
  disabled = false,
  ariaExpanded,
  ariaControls,
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={clsx(styles.iconButton, className)}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
