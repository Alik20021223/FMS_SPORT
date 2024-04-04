import React, { ReactNode } from "react";

type TProfileBlock = {
  children: ReactNode;
  className?: string;
  disable?: boolean
};

const ProfileBlock: React.FC<TProfileBlock> = ({ children, className, disable }) => {
  return (
    <div
      className={`${disable ? 'disable-gradient' : 'custom-gradient'} p-4 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default ProfileBlock;
