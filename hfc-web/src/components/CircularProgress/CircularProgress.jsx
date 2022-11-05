import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function circularProgress({ className, children, loading, id }) {
    const getClassName = () => {
        switch (id) {
            case 'waitingTelaInteira':
                return `${className} circularProgressTelaInteira`;
            case 'customTable':
                return `${className} customTable`;
            default:
                return `${className} circularProgress`;
        }
    };
    return (
        <div>
            <CircularProgress
                style={{ display: loading ? '' : 'none' }}
                className={getClassName()}
            />
            <div className={loading ? 'circularchildren' : ''}>{children}</div>
        </div>
    );
}

export default circularProgress;
