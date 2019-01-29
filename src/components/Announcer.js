/**
 *  @author sriram
 *
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

export const palette = {
    orange: '#f19e1f', // 241, 158, 31
    lightGreen: '#97af3c', // 151, 175, 60
    darkGreen: '#5c8727', // 92, 135, 39
    lightGray: '#e2e2e2', // 226, 226, 226
    gray: '#a5a4a4', // 165, 164, 164
    darkGray: '#525a68', // 82, 90, 104
    lightBlue: '#99d9ea', // 153, 217, 234
    blue: '#0971ab', // 9, 113, 171
    darkBlue: '#004471', // 0, 68, 113
    darkestBlue: '#142248', // 20, 34, 72
    white: '#ffffff',
    red: '#e60424', //'#8a3324',
};

const styles1 = theme => ({
    success: {
        backgroundColor: palette.darkGreen,
    },
    error: {
        backgroundColor: palette.red,
    },
    info: {
        backgroundColor: palette.blue,
    },
    warning: {
        backgroundColor: palette.orange,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

function MySnackbarContent(props) {
    const {classes, message, onClose, variant} = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={classNames(classes[variant], classes.margin)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)}/>
                    {message}
        </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={() => {
                        console.log("close");
                        onClose();
                    }}
                >
                    <CloseIcon className={classes.icon}/>
                </IconButton>,
            ]}
        />
    );
}

MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({});

class Announcer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, message, variant, duration, horizontal, vertical, onClose, open} = this.props;
        if (message) {
            return (
                <div>
                    <Snackbar
                        key={message}
                        anchorOrigin={{
                            vertical: vertical ? vertical : 'bottom',
                            horizontal: horizontal ? horizontal : 'left',
                        }}
                        open={open}
                        autoHideDuration={duration ? duration : 6000}
                        onClose={onClose}
                        disableWindowBlurListener={true}
                    >
                        <MySnackbarContentWrapper
                            onClose={onClose}
                            variant={variant}
                            message={message}
                            classes={classes}
                        />
                    </Snackbar>
                </div>
            );
        } else {
            return null;
        }
    }
}

Announcer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    message: PropTypes.string,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    duration: PropTypes.number,
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['center', 'right', 'left']),
};

export default withStyles(styles2)(Announcer);



