import React, { useEffect } from 'react';

const DiscordCallback = () => {
    useEffect(() => {
        const params = window.location.search
        if(window.opener) {
            window.opener.postMessage(params);
            window.close();
        } else {
            alert('No opener')
        }
    }, [])

    return <div/>
}

export default DiscordCallback;