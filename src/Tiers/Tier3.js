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

import Revenant from '../photos/revenant2.jpg';
import Crypto from '../photos/crypto.png';
import Loba from '../photos/loba2.png';
import Mirage from '../photos/Mirage.jpg';

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
  
  export const Tier3 = React.memo(function BlogCard() {
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
            image={Revenant}
          />
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              overline={'Synthetic Nightmare'}
              heading={'Revenant'}
              body={
              "This is the Outlands, baby. There's no law. No order. And you're the boogeyman."
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
          image={Mirage}
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'Holographic Trickster'}
            heading={'Mirage'}
            body={
              "Why did I become a Legend? One reason: women. I kid. Real reason? Beautiful women. Sorry."
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
          image={Loba}
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'Translocating Thief'}
            heading={'Loba'}
            body={
              "The girl with a cold hard cash is always Miss Right."
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
          image={Crypto}
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'Surveillance Expert'}
            heading={'Crypto'}
            body={
              "You're either ready, or you're an idiot."
            }
          />
          <Button className={buttonStyles}>Read more</Button>
        </CardContent>
      </Card>
      </Grid>

      </Grid>
    
    );
  });
  
  export default Tier3;