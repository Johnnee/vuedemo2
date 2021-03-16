<template>
    <div>
        <!-- 父组件向子组件传递参数 -->
        <!-- 子组件向父组件传递，通过事件方式 -->
        <!-- <Vue3Comp @myadd="add" desc="hello" name="jack" age="58">
            <h2>替换了子组件中定义的插槽内容</h2>
            <h3>{{msg}}</h3>
        </Vue3Comp> -->
        <Vue3Comp>
            <h2>替换了子组件中定义的插槽内容</h2>
            <!-- <h3>{{msg}}</h3> -->
        </Vue3Comp>
        {{num}} <br>
        {{myFun()}} <br>
        {{num2}} <br>
        <!-- {{stu.name}} <br> -->
        <input type="text" v-model="num2"> <br>
        {{firstname}}: <br>
        <input type="text" v-model="firstname"><br>
        {{age}} <br>
        <input type="text" v-model="age"><br>
        Fullname:{{fullname}}


    </div>
</template>
<script>
import Vue3Comp from '../components/Vue3Comp.vue'
import {ref, reactive,toRefs,computed,watch, onMounted,provide} from 'vue'
export default {
    name:"Vue3",
    // data() {
    //     return {
    //         msg:""
    //     }
    // },
    components:{
        Vue3Comp
    },
    setup() {
        // 定义变量和函数
        // 静态的定义，数据不变
        let num = 111
        // 响应式变量定义方法 ref
        let num2 = ref(2)
        let stu = reactive({
            firstname:"Jack",
            lastname:"Ston",
            age:num2,
            gender:"male"
        })
        let myFun = () => {
            console.log(num);
        }
        provide('num2', num2)
        // 计算属性 computed
        let fullname = computed(()=>{
            return stu.firstname + ' '+stu.lastname
        })
        // 侦听数据 watch
        watch(stu,()=>{
            console.log(num2.value+"------------"+stu.age);
        })
        // 监听某个数的变化
        // watch(num2, () => {
        //     console.log(num2.value + "------------");
        // },{
        //     // 初始就监听一次
        //     immediate:true
        // })
        // 也可以监听多个值，以数组形式表示 [a,b,c...]
        // watch(num2, (newA,oldA) => {
        //     console.log(newA+ "------------"+oldA)
        // }, {
        //     // 初始就监听一次
        //     immediate: true
        // })
        // 生命周期函数，按需调用
        // onBeforeMount(() => {
            
        // })
        onMounted(() => {
            console.log(num2.value+"mouted");
        })
        // onBeforeUpdate(() => {
            
        // })
        // onUpdated(() => {
            
        // })
        // onBeforeUnmount(() => {
            
        // })
        // onUnmounted(() => {
            
        // })
        

        return {
            num,
            myFun,
            num2,
            // 数据双向绑定，解构对象
            ...toRefs(stu),
            fullname,
        }
    },
    // methods: {
    //     add(str){
    //         this.msg = str
    //     }
    // },
}
</script>
<style>
    
</style>