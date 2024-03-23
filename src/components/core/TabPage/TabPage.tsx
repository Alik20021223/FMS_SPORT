'use client';

import { ChangeEvent, ReactNode, memo, useState } from 'react';

type TTabPageProps = {
  components: ReactNode[];
  tabs: string[];
}

export const TabPage = memo(({ tabs, components }: TTabPageProps) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleChangeTab = (event:  React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
    event.preventDefault();
    setCurrentTab(index);
  };

  const handleChangeSelectTab = (event: ChangeEvent<HTMLSelectElement>) => {
    
    const { value } = event.target;
  
    setCurrentTab(+value);
  }

  return (
    <div className="w-full mb-4">
      <div className="w-full flex">
        <div className="w-full">
          <div className="sm:hidden">
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary"
              onChange={handleChangeSelectTab}
            >
              {tabs.map((tab, index) => (
                <option key={tab} value={index}>{tab}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="h-12">
              <nav className="flex gap-1 p-1">
                {tabs.map((tab, index) => (
                  <a
                    key={tab}
                    href="#"
                    onClick={(event) => handleChangeTab(event, index)}
                    className={`${
                        (index === currentTab)
                          ? 'font-bold'
                          : 'border-transparent hover:font-medium'
                      } flex-1 py-2.5 text-center text-sm h-12.5 truncate`
                    }
                  >
                    {tab}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        {
          components[currentTab] ? (
            components[currentTab]
          ) : (
            <div className="font-bold">{tabs[currentTab]}</div>
          )
        }
      </div>
    </div>
  );
});
