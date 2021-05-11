import React from "react";
import Button from "@material-ui/core/Button";
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
            i18n.changeLanguage("pt-br");
            handleClose();
          }}
        >
          Portugues/Brasil
        </MenuItem>
        <MenuItem
          onClick={() => {
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
