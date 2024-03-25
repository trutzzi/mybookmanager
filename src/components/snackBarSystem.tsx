import { SnackbarKey, useSnackbar } from 'notistack';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/SvgIcon/SvgIcon";
import { Fragment, useEffect, useState } from "react";

type VariantType = "default" | "error" | "info" | "success" | "warning";

const useNotification = () => {
  const [conf, setConf] = useState<{ variant: VariantType | undefined, msg: string } | null>(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const action = (key: SnackbarKey) => (
    <Fragment>
      <IconButton onClick={() => { closeSnackbar(key) }}>
        <CloseIcon />
      </IconButton>
    </Fragment>
  );
  useEffect(() => {
    if (conf?.msg) {
      let variant: VariantType = 'info';
      if (conf.variant) {
        variant = conf.variant;
      }
      enqueueSnackbar(conf.msg, {
        variant,
        autoHideDuration: 5000,
        action
      });
    }
  }, [conf]);
  return [setConf];
};

export default useNotification;