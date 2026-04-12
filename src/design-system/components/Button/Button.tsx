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

function isLinkProps(props: ButtonProps): props is LinkProps {
  return 'href' in props;
}

export default function Button(props: ButtonProps) {
  if (isLinkProps(props)) {
    const { children, className, variant = 'primary', href, external, ...anchorProps } = props;

    const buttonClassName = clsx(styles.button, styles[`button--${variant}`], className);

    if (external) {
      return (
        <a href={href} className={buttonClassName} target="_blank" rel="noopener noreferrer" {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClassName} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { children, className, variant = 'primary', type = 'button', ...buttonProps } = props;

  const buttonClassName = clsx(styles.button, styles[`button--${variant}`], className);

  return (
    <button type={type} className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
