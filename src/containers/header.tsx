"use client"
import { themeChange } from 'theme-change';
import React, { useEffect, useState } from 'react';
import { HiBell,HiBars3 } from "react-icons/hi2";
import { useAppSelector, useAppDispatch } from '../lib/hooks'
import { removeNotificationMessage } from '@/components/common/headerSlice';
import { openRightDrawer } from '@/components/common/rightDrawerSlice';
import { RIGHT_DRAWER_TYPES } from '@/helper/app-constants';
import { toast } from 'react-toastify';
import ThemeToggle from '@/components/ThemeToggle';

interface HeaderProps {
  contentRef : React.RefObject<HTMLElement>
}

function Header({contentRef}: HeaderProps): JSX.Element {

  const { noOfNotifications, pageTitle, newNotificationMessage, newNotificationStatus } = useAppSelector((state) => state.header);
  const [currentTheme, setCurrentTheme] = useState<string | null>(localStorage.getItem("theme"));

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    console.log(newNotificationMessage)
    if (newNotificationMessage !== "") {
      console.log("herer")
      if(newNotificationStatus == 1) {
        toast.success(newNotificationMessage)
      }else{
        toast.error(newNotificationMessage)
      }
      dispatch(removeNotificationMessage());
    }
  }, [newNotificationMessage]);

//  Scroll back to top on new page load
 useEffect(() => {
  if (contentRef.current) {
      (contentRef.current as HTMLDivElement).scroll({
          top: 0,
          behavior: "smooth"
      });
  }
}, [pageTitle])

  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  }, []);

  // Opening right sidebar for notification
  const openNotification = (): void => {
    dispatch(openRightDrawer({ header: "Notifications", bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION , extraObject : {}}));
  };


  return (
    <div className="navbar sticky top-0 bg-base-100 z-10 shadow-md">
      {/* Menu toggle for mobile view or small screen */}
      <div className="flex-1">
        <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
          <HiBars3 className="h-5 inline-block w-5" />
        </label>
        <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
      </div>

      <div className="flex-none">
        {/* Light and dark theme selection toggle */}
        <ThemeToggle/>


        {/* Notification icon */}
        <button className="btn btn-ghost mr-4 ml-2 btn-circle" onClick={openNotification}>
          <div className="indicator">
            <HiBell className="h-6 w-6" />
            {noOfNotifications > 0 ? (
              <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span>
            ) : null}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
