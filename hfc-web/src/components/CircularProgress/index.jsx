import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import './style.css';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 1,
    },
});

function CircularIndeterminate({ classes, loading, id }) {
    return (
        <div>
            {loading && (
                <CircularProgress className={classes.progress} id={id} />
            )}
        </div>
    );
}

CircularIndeterminate.propTypes = {
    classes: PropTypes.string,
    loading: PropTypes.bool,
};

CircularIndeterminate.defaultProps = {
    classes: '',
    loading: true,
};

export default withStyles(styles)(CircularIndeterminate);
