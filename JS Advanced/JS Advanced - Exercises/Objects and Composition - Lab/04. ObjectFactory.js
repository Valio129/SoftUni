function solve() {
    const library = {
        print: function () {
            console.log(`${this.name} is printing a page`);
        },
        scan: function () {
            console.log(`${this.name} is scanning a document`);
        },
        play: function (artist, track) {
            console.log(`${this.name} is playing '${track}' by ${artist}`);
        },
    };
    const orders = [
        {
            template: { name: 'ACME Printer' },
            parts: ['print']
        },
        {
            template: { name: 'Initech Scanner' },
            parts: ['scan']
        },
        {
            template: { name: 'ComTron Copier' },
            parts: ['scan', 'print']
        },
        {
            template: { name: 'BoomBox Stereo' },
            parts: ['play']
        }
    ];
    // Beginning of the solution
    function factory(libObj, ordArr) {
        let record = [];
        for (const elObject of ordArr) {

            let initDevice = {
                'name': elObject["template"]["name"],
            };
            let partsArr = elObject.parts;
            for (const part of partsArr) {
                initDevice[part] = libObj[part];
            }
            record.push(initDevice);
        }
        return record;
    }
    // end 
    const products = factory(library, orders);
    console.log(products);

}
solve();