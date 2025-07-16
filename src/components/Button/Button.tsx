import classNames from 'classnames';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success';
  block?: boolean;
  square?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant = 'primary',
  block,
  square,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        'button',
        { [`button--${variant}`]: variant },
        { 'button--block': block },
        { 'button--square': square }
      )}
      type={type || 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};
