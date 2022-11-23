/** INVENTORY FOR STORING DATA
 * obj inventory {
 * - map keyMaterials {
 *      shard: 0 ,
*       shard: 0 ,
*       shard: 0 ,
 *          
 *   }   
 * - map junk {
 *      junk: 0 ,
*       moreJunk: 0 ,
*       andAlsoJunk: 0 ,
 *          
 *   }  
 * 
 * }
 *  -> IMPUT PROCCESSING:
 *     - it's allways even -> it comes as pairs of two el's
 *     [quantity material]    
 *       - SORT TO THE RIGHT 'POCKET' 
 *      if (!isJunk) {
            -> to keyFrags 
        } else {
             -> junk
        }
        - CHECK IF SOME OF THE VALUES IS > 250 {
            BREAK;
        }
 -ORDER AND PRINT 

 */

function farming(input) {
    let arr = input.toLowerCase().split(' ')
    let inventory = {
        junk: new Map()
    }
    inventory['keyMaterials'] = new Map()
        .set('shards', 0)
        .set('fragments', 0)
        .set('motes', 0)
    inventory['items'] = new Map()
        .set('shards', 'Shadowmourne')
        .set('fragments', 'Valanyr')
        .set('motes', 'Dragonwrath')

    while (arr.length > 0) {
        let isLegendary = false;
        let quantity = Number(arr.shift())
        let material = arr.shift()
        if (inventory.keyMaterials.has(material)) {
            let currValue = inventory.keyMaterials.get(material)
            currValue += quantity
            inventory.keyMaterials.set(material, currValue)

        } else {
            if (inventory.junk.has(material)) {
                let currValue = inventory.junk.get(material)
                currValue += quantity
                inventory.junk.set(material, currValue)

            } else {
                inventory.junk.set(material, quantity)
            }
        }
        for (let token of inventory.keyMaterials.keys()) {
            let currMaterialValue = inventory.keyMaterials.get(token)
            if (currMaterialValue >= 250) {
                inventory.keyMaterials
                    .set(material, currMaterialValue - 250)
                console.log(`${inventory.items.get(token)} obtained!`);
                isLegendary = true;
                break;
            }
        }
        if (isLegendary) {
            break;
        }
    }
    let keySorted = Array.from(inventory.keyMaterials.keys())
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => inventory.keyMaterials.get(b) - inventory.keyMaterials.get(a))
    for (const key of keySorted) {
        const value = inventory.keyMaterials.get(key)
        console.log(`${key}: ${value}`);
    }
    let sortedJunk = [...inventory.junk.keys()].sort((a, b) => a.localeCompare(b))


    for (const key of sortedJunk) {
        const value = inventory.junk.get(key)
        console.log(`${key}: ${value}`);
    }
}

farming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
/*todo
change values of obtained item
***/
