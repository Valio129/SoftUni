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

    for (let i = 0; i <= arr.length - 2; i += 2) {
        let quantity = Number(arr[i])
        let material = arr[i + 1]
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
            if (currMaterialValue > 250) {
                inventory.keyMaterials
                .set(material, Math.abs(currMaterialValue - quantity ))
                console.log(`${inventory.items.get(token)} is obtained!`);
                break;
            }
        }
    }
    console.log();
}

farming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
/*todo
change values of obtained item
***/ 
