import './MoreButton.css';

export default function MoreButton({ classNames, link, text }) {
  return (
    <a className={`more-btn ${classNames}`} href={link}>{text}
      <img className="" src="/images/icons/icon-right.svg" alt={text} />
    </a>
  )
}
