console.log('here');
Vue.component('z-index-item',
    {
        props:['name','z','position','id'],
        template:   `
                        <div v-bind:id="id" class="zIndexedElement">
                            <div class="header">
                                <h2>{{ name }}</h2>
<<<<<<< HEAD
                                <z-index-controller ref="zIndexController" v-bind:z="z"></z-index-controller>
=======
                                <zindex-controller ref="controller" v-bind:z="z" v-bind:target=" id "></zindex-controller>
>>>>>>> e3a733e840e4d32f67ab4407c3e9fc7ba892af80
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
<<<<<<< HEAD

            this.$refs.zIndexController.puppet = this.$el;
        },
        methods:
            {
                getElement:function()
                {
                    return () => {this.$el};
                }
            }
=======
            this.$refs.controller.puppet = this.$el;
        }
>>>>>>> e3a733e840e4d32f67ab4407c3e9fc7ba892af80
    });
Vue.component('z-index-controller',
    {
        props:['z'],
        template:   `
                        <div class="zIndexControl">
<<<<<<< HEAD
                            <div class="zCounter">Z-Index: {{ zIndex }}</div>
=======
                            <div class="counter">Z-Index: {{zIndex}}</div>
>>>>>>> e3a733e840e4d32f67ab4407c3e9fc7ba892af80
                            <div v-on:click="zUp()" class="arrowControl">&uArr;</div>
                            <div v-on:click="zDown()" class="arrowControl">&dArr;</div>
                        </div>
                    `,
        data:function(){return {zIndex: this.z}},
<<<<<<< HEAD
        methods:
            {
                zUp: function()
=======

        methods:
            {
                zUp:function()
>>>>>>> e3a733e840e4d32f67ab4407c3e9fc7ba892af80
                {
                    this.zIndex = parseInt(this.zIndex)+1;
                    this.puppet.style.zIndex = this.zIndex;
                },
<<<<<<< HEAD
                zDown: function()
=======
                zDown:function()
>>>>>>> e3a733e840e4d32f67ab4407c3e9fc7ba892af80
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