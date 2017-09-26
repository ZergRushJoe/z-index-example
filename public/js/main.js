console.log('here');
Vue.component('z-index-item',
    {
        props:['name','z','position','id'],
        template:   `
                        <div v-bind:id="id" class="zIndexedElement">
                            <div class="header">
                                <h2>{{ name }}</h2>
                                <z-index-controller ref="zIndexController" v-bind:z="z"></z-index-controller>
                            </div>
                            <div class="body">
                            </div>
                        </div>
                    `,
        mounted:function()
        {
            if(this.id && this.id != "")
            {
                this.refEl = document.getElementById(this.id);
                this.refEl.style.zIndex = this.z;
                this.refEl.style.position = this.position;
            }

            this.$refs.zIndexController.puppet = this.$el;
        },
        methods:
            {
                getElement:function()
                {
                    return () => {this.$el};
                }
            }
    });
Vue.component('z-index-controller',
    {
        props:['z'],
        template:   `
                        <div class="zIndexControl">
                            <div class="zCounter">Z-Index: {{ zIndex }}</div>
                            <div v-on:click="zUp()" class="arrowControl">&uArr;</div>
                            <div v-on:click="zDown()" class="arrowControl">&dArr;</div>
                        </div>
                    `,
        data:function(){return {zIndex: this.z}},
        methods:
            {
                zUp: function()
                {
                    this.zIndex = parseInt(this.zIndex)+1;
                    this.puppet.style.zIndex = this.zIndex;
                },
                zDown: function()
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