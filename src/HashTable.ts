class HashTable {

    table: Array<any> = []

    constructor () {

    }

    hash (key: string): number {

        let hash: number = 0

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * i 
        }

        return hash
    }

    add (key: string, value: any): boolean {

        let index: number = this.hash(`${key}`)

        if (!this.table[index]) {
             this.table[index] = [key, value]

            return true
        }
        else {
            return false
        }
    }

    del (key: string): boolean {

        let index: number = this.hash(`${key}`)

        if (!this.table[index]) {
            return false
        }
        else {
            delete this.table[index]
            return true
        }
    }

    get (key: string): null | any {

        let index: number = this.hash(`${key}`)

        if (!this.table[index]) {
            return null
        }
        else {
            return this.table[index][1]
        }
    }

    print (key: string): void | null {

        let index: number = this.hash(`${key}`)

        if (!this.table[index]) {
            return null
        }
        else {
            console.log(this.table[index])
        }

    }
}

