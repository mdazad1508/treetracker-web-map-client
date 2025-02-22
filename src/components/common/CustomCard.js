/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '../../models/makeStyles';

const useStyles = makeStyles()((theme) => ({}));

function CustomCard(props) {
  const { classes } = useStyles(props);
  const theme = useTheme();
  const { iconURI, title, text, handleClick, disabled } = props;

  return (
    <Box
      className={classes.root}
      onClick={handleClick}
      elevation={0}
      sx={{
        background: disabled
          ? theme.palette.grey[300]
          : theme.palette.background.greenGradient,
        backgroundColor: disabled ? '' : 'common.white',
        borderRadius: [2, 4],
        p: [3, 6],
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
      }}
    >
      <Box sx={{}}>
        <Avatar
          className={classes.avatar}
          sx={{
            width: [36, 60],
            height: [36, 60],
            bgcolor: 'background.paper',
            boxShadow: disabled ? '' : '0px 6px 12px 0px #585B5D40',
            color: disabled
              ? // ? theme.palette.darkGrey.main
                theme.palette.success.main
              : theme.palette.success.main,
          }}
        >
          <img src={iconURI} alt="icon" />
        </Avatar>
      </Box>
      <Box
        sx={{
          ml: [3, 6],
        }}
      >
        <Typography variant="body1" color="darkGrey.main">
          {title}
        </Typography>
        <Typography
          variant="h2"
          color="nearBlack.main"
          sx={{
            mt: [0.5, 1],
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default CustomCard;
