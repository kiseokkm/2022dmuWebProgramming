const object={
    ko:'빵',
    en:'bread',
    ja:'パン',
    fr:'pain',
    es:'pan',
    lang1:{
        ko:'한국어',
        en:'영어',
        ja:'일본어',
        fr:'프랑스어',
        es:'스페인어'
    },
    print:function(lang1){
        console.log(`${this.ko}는 ${this.lang1[lang1]}로${this[lang1]}입니다.`)
    }
}
object.print('ja')