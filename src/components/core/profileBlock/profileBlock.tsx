import React, { ReactNode } from "react";

type TProfileBlock = {
  children: ReactNode;
  className?: string;
};

const ProfileBlock: React.FC<TProfileBlock> = ({ children, className }) => {
  return (
    <div
      className={`custom-gradient p-4 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default ProfileBlock;
