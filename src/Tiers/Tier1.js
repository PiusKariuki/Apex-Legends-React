import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Grid from '@material-ui/core/Grid';

import Life from '../photos/2.png';
import Bang from '../photos/1.png';
import Wraith from '../photos/wraith2.jpg';
import Path from '../photos/path.png';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
      borderRadius: spacing(2), // 16px
      transition: '0.3s',
      boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.5)',
      position: 'relative',
      minWidth: 200,
      maxWidth: 600,
      margin: spacing(3),
      overflow: 'initial',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: spacing(4),
      paddingBottom: spacing(2),
      [breakpoints.up('md')]: {
        flexDirection: 'row',
        paddingTop: spacing(3),
      },
    },
    media: {
      width: '88%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: spacing(-3),
      height: 0,
      paddingBottom: '48%',
      borderRadius: spacing(2),
      backgroundColor: '#fff',
      position: 'relative',
      [breakpoints.up('md')]: {
        width: '100%',
        marginLeft: spacing(-3),
        marginTop: 0,
        transform: 'translateX(-8px)',
      },
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: spacing(2), // 16
        opacity: 0.5,
      },
    },
    content: {
      padding: 24,
    },
    cta: {
      marginTop: 24,
      textTransform: 'initial',
    },
  }));
  
  export const Tier1 = React.memo(function BlogCard() {
    const styles = useStyles();
    const {
      button: buttonStyles,
      ...contentStyles
    } = useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();
    return (
  
      <Grid container>
        <Grid item xs={12} md={6} lg={6} xl={6}>
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={Bang}
          />
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              overline={'Professional Soldier'}
              heading={'Bangalore'}
              body={
              "Sometimes you only have time to chamber a single round. Got to do it right."
                    }
            />
            <Button className={buttonStyles}>Read more</Button>
          </CardContent>
        </Card>
      </Grid>
  
     <Grid item xs={12} lg={6}>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={Wraith}
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'Interdimensional skirmisher'}
            heading={'Wraith'}
            body={
              "I've seen a world where I'm not a Legend... and I've seen a world where I am"
            }
          />
          <Button className={buttonStyles}>Read more</Button>
        </CardContent>
      </Card>
      </Grid>

      <Grid item xs={12} lg={6}>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={Path}
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'Foward Scout'}
            heading={'Pathfinder'}
            body={
              "Grapple: locked and loaded."
            }
          />
          <Button className={buttonStyles}>Read more</Button>
        </CardContent>
      </Card>
      </Grid>
    
      <Grid item xs={12} lg={6}>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={Life}
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'Combat Medic'}
            heading={'Lifeline'}
            body={
              "I got your back. Memba mi tell yu."
            }
          />
          <Button className={buttonStyles}>Read more</Button>
        </CardContent>
      </Card>
      </Grid>

      </Grid>
    
    );
  });
  
  export default Tier1;