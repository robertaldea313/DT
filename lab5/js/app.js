var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        encodedBits1: [],
        encodedBits2: [],
        encodedBits3: [],
        encodedBits4: [],
        encodedBits5: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits = getManchesterLevelEncoding(this.bits);
            this.encodedBits1 = getNonReturnToZeroMark(this.bits);
            this.encodedBits2 = getNonReturnToZeroSpace(this.bits);
            this.encodedBits3 = getReturnToZero(this.bits);
            this.encodedBits4 = getBiphaseLevel(this.bits);
            this.encodedBits5 = getBiphaseMark(this.bits);
        }
    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');