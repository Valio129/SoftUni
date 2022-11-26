function solveArmies(input) {
    /**
     * 
     * leaders {
     *  leader: amries [map] {
            *armyName : armyCount 
     *      }
     *  }
     *  leader: undefied (no army assigned to him)
     * 
     * adding leaders
     * if it has armi in the input :
     *  check first if it exist
     *      else add it with undefined / NULL
     */
    let leaders = {}
    input.forEach(token => {

        token = token.split(' ')
        let action = token.pop()
        let leaderName = token.slice(0).join(' ')
        //ADD / REMOVE LEADER
        switch (action) {
            case 'arrives':
                leaders[leaderName] = new Map()
                break;
            case 'defeated':
                delete leaders[leaderName]
                break;

            default:
                if (token[1] === '+') {
                    let armyName = token[0]
                    const count = Number(action)
                    for (let leader in leaders) {
                        let currLeader = leaders[leader]
                        if (currLeader.has(armyName)) {
                            let currCount = currLeader.get(armyName)
                            if (currCount === undefined) {
                                currCount = 0
                            }
                            currLeader.set(armyName, currCount + count)
                        }
                    }
                } else {
                    leaderName = leaderName.split(': ')
                    let armyName = leaderName[1]
                    armyName = armyName.substring(0, armyName.length - 1)
                    leaderName = leaderName[0]
                    let armyCount = action
                    armyCount = Number(armyCount)
                    if (leaders.hasOwnProperty(leaderName)) {
                        leaders[leaderName].set(armyName, armyCount)
                    }
                }
                break;
        }
    });
    let sorterdOutput = Object.keys(leaders).sort((a, b) => getMaxCount(b) - getMaxCount(a))
    for (let leaderMap of sorterdOutput) {
        console.log(leaderMap + ": " + Array.from(leaders[leaderMap].values()).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0))
        let sortedArmies = Array.from(leaders[leaderMap].keys())
            .sort((a, b) => leaders[leaderMap].get(b) - leaders[leaderMap].get(a))
        for (const army of sortedArmies) {
            const value = leaders[leaderMap].get(army)
            console.log(`>>> ${army} - ${value}`);
        }
    }


    function getMaxCount(leaderMap) {
        let result = 0
        for (const armyKey of leaders[leaderMap]) {
            const curArmyCount = armyKey[1]
            result += curArmyCount
        }
        return result
    }

}
solveArmies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])