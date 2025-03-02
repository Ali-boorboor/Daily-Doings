import { badgePropsType } from "@type/atomsTypes";

function Badge({ text, badgeStatus }: badgePropsType) {
  return <div className={`badge ${badgeStatus}`}>{text}</div>;
}

export default Badge;
