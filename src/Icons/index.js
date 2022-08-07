export const SearchIcon = ({ className, width = '2.2rem', height = '2.2rem' }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className={className}
            height={height}
            width={width}
        >
            <g className="style-scope yt-icon">
                <path
                    d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                    className="style-scope yt-icon"
                ></path>
            </g>
        </svg>
    );
};

export const CloseIcon = ({ className, width = '1.8rem', height = '1.8rem' }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className={className}
            height={height}
            width={width}
        >
            <g className="style-scope yt-icon">
                <path
                    d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"
                    className="style-scope yt-icon"
                ></path>
            </g>
        </svg>
    );
};
