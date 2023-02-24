import { withStyles, makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core';

const TargetInput = withStyles({
  root: {
    marginTop: "auto",
    // transform: "skew(-20deg)",
    // marginRight: 10,
    // marginLeft: "2.5%",

    width: "90%",
    "& :before": {
      display: "none",
    },
    "& label": {
      color: "#323956",
      fontSize: 15,
      // transform: "skew(20deg)",
    },
    "& div input": {
      color: "#fff",
      padding: "0.5rem 0.25rem",
      // transform: "skew(20deg)",
    },
    "& div": {
      background: "#171A28",
      // background: "#1e234a",
      height: "2.25rem",
      borderRadius: 4,
    },
  },
})(TextField);

export default TargetInput