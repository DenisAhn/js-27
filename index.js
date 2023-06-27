const _ = require('lodash')
function fetchGracePeriodLogicFromMapping(cardId, mapping = '') {
    if (!mapping) {
        return null;
    }

    const logicMappings = mapping.split(';').map(item => item.trim());
    let result = null;
    for (let i = 0; i < logicMappings.length; i++) {
        const [logicName, ids] = logicMappings[i].split(':');
        if (!ids) {
            continue;
        }
        const idList = ids.split(',').map(item => item.trim());
        if (idList[idList.length - 1] === cardId) {
            result = logicName;
        }
    }
    return result;
}

module.exports = fetchGracePeriodLogicFromMapping;
