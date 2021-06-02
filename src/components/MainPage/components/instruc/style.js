import {makeStyles} from '@material-ui/core';
import { CenterFocusWeakSharp } from '@material-ui/icons';

export default makeStyles(() =>({
    root: {
        maxWidth: 500,
      //  position: 'relative',
        
      },
      
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      grid: {
        '& > *': {
            height:'50vh',
        },
      },
}))
