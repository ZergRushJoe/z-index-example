console.log('here');
Vue.component('z-index-item',
    {
        props:['name','z','position','id'],
        template:   `
                        <div v-bind:id="id" class="zIndexedElement">
                            <div class="header">
                                <h2>{{ name }}</h2>
                                <zindex-controller v-bind:target=" id "></zindex-controller>
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
        }
    });
Vue.component('zindex-controller',
    {
        props:['puppet'],
        template:   `
                        <div class="zIndexControl">
                            <div v-on:click="zUp(puppet)" class="arrowControl">&uArr;</div>
                            <div v-on:click="zDown(puppet)" class="arrowControl">&dArr;</div>
                        </div>
                    `,
        data:function(){return {}}
    });
const test = new Vue(
    {
       el:'#holder'
    });