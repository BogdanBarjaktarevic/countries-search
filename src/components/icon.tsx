import { IonIcon } from "@ionic/react";

interface IconProps {
  icon: string;
  className?: string;
  onClick?: () => void;
  size?: string;
}

const Icon = ({ icon, className, size, onClick }: IconProps) => {
  return (
    <IonIcon icon={icon} className={className} onClick={onClick} size={size} />
  );
};

export default Icon;
