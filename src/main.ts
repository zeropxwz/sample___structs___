
class node {
    constructor () {
        
    }
}


class LinkedList {

    head: any | null
    tail: any | null 

    constructor () {
        this.head = null
        this.tail = null
    }

    add (value: any): void {

        const node = {value: value, next: null}

        if (this.head === null) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail 
                ? this.tail.next = node 
                : this.tail.next = null 

            this.tail = node
        }
    }

    pre (value: any): void {

        const node = {value: value, next: this.head}

        if (this.head === null) {
            this.head = node
            this.tail = node    
        }
        else {
            this.head = node    
        }
    }

    toArray (): Array<any> {

        let result  = []
        let current = this.head

        while (current) {
            result.push(current.value)
            current = current.next
        }

        return result
    }
}

const x = new LinkedList()

