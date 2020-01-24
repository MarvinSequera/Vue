let app = new Vue({
    el: '#app',
    data:{
        product:'Socks',
        brand:'Nike',
        img:'src/img/gray.png',
        inventory:11,
        details:['80% cotton','20% poliester','gender-neutral'],
        inStock:true,
        onSale:false,
        button:'button',
        disabledButton:'disabledButton',
        variants:[
            {
                variantId:2234,
                variantColor:'Green',
                variantImg:'src/img/green.png'
            },
            {
                variantId:2235,
                variantColor:'Gray',
                variantImg:'src/img/gray.png'
            }
        ],
        cart:0
    },
    methods:{
        addToCart: function () {
            this.cart +=1
        },
        updateProduct: function (variantImg) {
            this.img = variantImg
        },
        removeFromCart(){
            this.cart -=1
        }
    },
    computed:{
        title() {
            return this.brand+ ' '+ this.product
        }
    }
})