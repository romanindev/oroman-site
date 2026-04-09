import Link from 'next/link';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'ghost';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = BaseProps & {
  href?: never;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type ButtonProps = LinkProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { children, className, variant = 'primary' } = props;

  const buttonClassName = clsx(
    styles.button,
    styles[`button--${variant}`],
    className,
  );

  if ('href' in props) {
    // external link
    if ('external' in props) {
      return (
        <a
          href={props.href}
          className={buttonClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    // internal link
    return (
      <Link href={props.href!} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={buttonClassName}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
}
