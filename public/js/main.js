console.log('here');
Vue.component('z-index-item',
    {
        props:['name','z','position','id'],
        template:   `
                        <div v-bind:id="id" class="zIndexedElement">
                            <div class="header">
                                <h2>{{ name }}</h2>
                                <zindex-controller ref="controller" v-bind:z="z" v-bind:target=" id "></zindex-controller>
                            </div>
                            <div class="body">
                            </div>
                        </div>
                    `,
        mounted:function()
        {
            if(this.id && this.id !== "")
            {
                this.refEl = document.getElementById(this.id);
                this.refEl.style.zIndex = this.z;
                this.refEl.style.position = this.position;
            }
            this.$refs.controller.puppet = this.$el;
        }
    });
Vue.component('zindex-controller',
    {
        props:['z'],
        template:   `
                        <div class="zIndexControl">
                            <div class="counter">Z-Index: {{zIndex}}</div>
                            <div v-on:click="zUp()" class="arrowControl">&uArr;</div>
                            <div v-on:click="zDown()" class="arrowControl">&dArr;</div>
                        </div>
                    `,
        data:function(){return {zIndex: this.z}},

        methods:
            {
                zUp:function()
                {
                    this.zIndex = parseInt(this.zIndex)+1;
                    this.puppet.style.zIndex = this.zIndex;
                },
                zDown:function()
                {
                    this.zIndex = parseInt(this.zIndex)-1;
                    this.puppet.style.zIndex = this.zIndex;
                }
            }
    });
const test = new Vue(
    {
       el:'#holder'
    });