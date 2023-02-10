const newWhiteLine = () => {
    const whiteLine = document.createElement('div');
    whiteLine.className = 'whiteLine';

    return whiteLine;
}

const newGrayLine = () => {
    const grayLine = document.createElement('div');
    grayLine.className = 'grayLine';

    return grayLine;
}


export { newWhiteLine, newGrayLine };
