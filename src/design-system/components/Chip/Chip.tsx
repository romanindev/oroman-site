import clsx from 'clsx';
import styles from './Chip.module.css';

type ChipProps = {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
};

export default function Chip({
  children,
  variant = 'default',
}: ChipProps) {
  return (
    <span className={clsx(styles.chip, styles[`chip--${variant}`])}>
      {children}
    </span>
  );
}
