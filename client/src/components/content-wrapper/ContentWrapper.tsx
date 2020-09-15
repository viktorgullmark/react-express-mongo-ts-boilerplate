import React from 'react';
import ResponsiveDrawer from '../responsive-drawer';
import Toolbar from '../toolbar';

const ContentWrapper: React.FC = ({ children }) => {
  return (
    <ResponsiveDrawer>
      <Toolbar drawerEnabled />
      {children}
    </ResponsiveDrawer>
  );
};

export default ContentWrapper;
