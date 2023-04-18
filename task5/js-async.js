class sweet_water {
    constructor() {
        this.flavors = ['blueberry', 'eucalyptus', 'strawberry'];
        this.inventory = {
            blueberry: 10,
            eucalyptus: 5,
            strawberry: 3
    };
}
async order(flavor, sum) {
    try {
        const stock = await this.checkStock(flavor);
        if (stock < sum) {
            throw new Error(`є тільки ${stock} ${flavor} такий смак жувальної гумки.`);
        }
        await this.updateInventory(flavor, sum);
        const totalPrice = this.calculatePrice(flavor, sum);
        return `ваше замовлення ${sum} ${flavor} жувальної гумки готово. Вартість: $${totalPrice}.`;
    }
    catch (error) {
        return error.message;
    }
}
    async checkStock(flavor) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const stock = this.inventory[flavor];
                if (stock) {
                    resolve(stock);
                } 
                else {
                    reject(new Error(`немає стільки ${flavor} жувальної гумки.`));}
            }, 1000);
        });
    }
    async updateInventory(flavor, sum) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.inventory[flavor] -= sum;
                resolve();
            }, 2000);
        });
    }
    calculatePrice(flavor, sum) {
        const pricePerScoop = 2.5;
        return pricePerScoop * sum;
    }
}
const shop = new booble_gum();
    (async () => {
        console.log(await shop.order('blueberry', 2));
        console.log(await shop.order('eucalyptus', 3));
        console.log(await shop.order('strawberry', 5));
    })();