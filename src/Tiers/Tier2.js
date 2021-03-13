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
import Octane from '../photos/octane.png';
import Hound from '../photos/hound.png';
import Watt from '../photos/wattson.png'
import Caustic from '../photos/caustic.png';
import Gibby from '../photos/gibby.jpg'

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

export const Tier2 = React.memo(function BlogCard() {
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
          image={Octane}
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'High speed daredevil'}
            heading={'Octane'}
            body={
            "By the time you see me coming, I'll be going, and you'll be gone."
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
        image={Hound}
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={'Technological Tracker'}
          heading={'Bloodhound'}
          body={
            "It is a gift to be an Apex Legend, but the true test is in the eyes of the Allfather."
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
        image={Watt}
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={'Static Defender'}
          heading={'Wattson'}
          body={
            " My family is here. At the Games. And now it’s my turn to support them. With every last charge in me"
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
        image={Caustic}
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={'Toxic Tracker'}
          heading={'Caustic'}
          body={
            " My gas wafts through the air as if dancing with death."
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
        image={Gibby}
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={'Shielded Fortress'}
          heading={'Gibraltar'}
          body={
            " No matter how big you are, the world is always bigger; the Apex Games taught me that. Let's go change a life!"
          }
        />
        <Button className={buttonStyles}>Read more</Button>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
  
  );
});

export default Tier2;