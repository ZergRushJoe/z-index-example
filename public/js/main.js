console.log('here');
Vue.component('z-index-item',
    {
        props: ['name', 'z', 'position', 'id'],
        template: `
                        <div v-bind:id="id" class="zIndexedElement">
                            <div class="header">
                                <h2>{{ name }}</h2>
                                <z-index-controller ref="controller" v-bind:z="z" v-bind:target=" id "></z-index-controller>
                            </div>
                            <div class="body">
                                <expandable-element></expandable-element>
                            </div>
                        </div>
                    `,
        mounted: function ()
        {
            if (this.id && this.id !== "")
            {
                this.refEl = document.getElementById(this.id);
                this.refEl.style.zIndex = this.z;
                this.refEl.style.position = this.position;
            }
            this.$refs.controller.puppet = this.$el;
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
Vue.component('expandable-element',
    {
        template:
            `
                <div class="expandable">
                    <div class="up" v-on:click="up">⇑</div>
                    <div class="right" v-on:click="right"><div>⇐</div></div>
                    <div class="left" v-on:click="left">⇒</div>
                    <div class="down" v-on:click="down">⇓</div>
                </div>
            `,
        data:function()
            {
                return {
                    expanded:
                        [
                            [false,'up'],
                            [false,'down'],
                            [false,'right'],
                            [false,'left']
                        ]
                }
            },
        methods:
            {
                up:function() {},
                down:function(){},
                right:function(){},
                left:function(){}
            }
    });

const test = new Vue(
    {
       el:'#holder'
    });