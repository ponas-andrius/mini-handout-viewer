import classNames from 'classnames';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  block?: boolean;
  className?: string;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  block,
  className,
  id,
}) => {
  return (
    <article
      className={classNames('card', { 'card--block': block }, className)}
      id={id}
    >
      {children}
    </article>
  );
};
