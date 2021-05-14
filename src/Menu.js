import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";

export default function SimpleMenu({ anchorEl, setAnchorEl }) {
  const { i18n } = useTranslation();

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            window.analytics.logEvent("mudança de linguagem");

            i18n.changeLanguage("pt");
            handleClose();
          }}
        >
          Portugues/Brasil
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.analytics.logEvent("mudança de linguagem");
            i18n.changeLanguage("en");
            handleClose();
          }}
        >
          English
        </MenuItem>
      </Menu>
    </div>
  );
}
