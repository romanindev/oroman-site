import Link from 'next/link';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
    type?: never;
    disabled?: never;
  };

type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    external?: never;
  };

type ButtonProps = LinkProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { children, className, variant = 'primary' } = props;

  const buttonClassName = clsx(styles.button, styles[`button--${variant}`], className);

  if ('href' in props) {
    const { href, external, ...anchorProps } = props;

    // external link
    if (external) {
      return (
        <a href={href} className={buttonClassName} target="_blank" rel="noopener noreferrer" {...anchorProps}>
          {children}
        </a>
      );
    }

    // internal link
    return (
      <Link href={href!} className={buttonClassName} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = props;

  return (
    <button type={type} className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
