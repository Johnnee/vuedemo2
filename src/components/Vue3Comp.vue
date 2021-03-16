<template>
    <div>
        <h4>子组件</h4><br>
        <h3>{{num2}}</h3>
        <slot>1111111</slot>
        以上是子组件内容
        <hr>
    </div>
</template>
<script>
import {inject} from 'vue'
export default {
    name:"Vue3Comp",
    // 设置子组件属性
    props:{
        name:{
            type:String
        },
        age:{
            type:String
        }
    },
    //setup()中无法访问this,props参数为接收定义的属性，context可接收为定义的属性 有下列内容
    // context.attrs slots parent root emit refs等内容
    // setup(props, context) {
    //     // console.log(props);
    //     console.log(props.name+props.age);
    //     // 
    //     console.log(context.attrs.desc);
    //     console.log(context.slots.default());

    //     context.emit("myadd","向父组件传递数据!!")
    // }
    setup(props, {attrs,slots,emit}) {
                // console.log(props);
                console.log(props.name + props.age);
                // 
                console.log(attrs.desc);
                console.log(slots.default());

                emit("myadd", "向父组件传递数据了!!")

                let num2 = inject("num2")
                
                return {
                    num2
                }
            }
}
</script>
<style>
    
</style>